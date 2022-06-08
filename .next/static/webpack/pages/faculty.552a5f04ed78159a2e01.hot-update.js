self["webpackHotUpdate_N_E"]("pages/faculty",{

/***/ "./components/unit-head/dashboard/employment-status/employment-status.js":
/*!*******************************************************************************!*\
  !*** ./components/unit-head/dashboard/employment-status/employment-status.js ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_dashboard_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/employment-status/employment_dashboard_table */ "./components/unit-head/dashboard/employment-status/employment_dashboard_table.js");
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_dashboard_graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/employment-status/employment_dashboard_graph */ "./components/unit-head/dashboard/employment-status/employment_dashboard_graph.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\unit-head\\dashboard\\employment-status\\employment-status.js";





function EmploymentStatus(props) {
  var _this = this;

  var empList = props.children;
  var chemftCount = 0;
  var chemptCount = 0;
  var chemlecCount = 0;
  var mcsuftCount = 0;
  var mcsuptCount = 0;
  var mcsulecCount = 0;
  var p6GeoftCount = 0;
  var p6GeoptCount = 0;
  var p6GeolecCount = 0;
  var tableData = [];
  var unitId;
  var startDate;
  var endDate;

  if (empList) {
    empList.forEach( /*#__PURE__*/function () {
      var _ref = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
        return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.faculty_employment_infos[0].status == 'Full-time') {
                  if (e.faculty_unit.unitId == 1) chemftCount++;else if (e.faculty_unit.unitId == 2) mcsuftCount++;else if (e.faculty_unit.unitId == 3) p6GeoftCount++;
                } else if (e.faculty_employment_infos[0].status == 'Lecturer') {
                  if (e.faculty_unit.unitId == 1) chemlecCount++;else if (e.faculty_unit.unitId == 2) mcsulecCount++;else if (e.faculty_unit.unitId == 3) p6GeolecCount++;
                } else if (e.faculty_employment_infos[0].status == 'Part-time') {
                  if (e.faculty_unit.unitId == 1) chemptCount++;else if (e.faculty_unit.unitId == 2) mcsuptCount++;else if (e.faculty_unit.unitId == 3) p6GeoptCount++;
                }

                _context.next = 3;
                return tableData.push({
                  col1: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "".concat('/faculty/view/' + encodeURIComponent(e.facultyId)),
                    children: e.lastName + ', ' + e.firstName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 11
                  }, _this),
                  col2: e.faculty_employment_infos[0].faculty_employment_position.position,
                  col3: e.faculty_employment_infos[0].status,
                  col4: e.faculty_employment_infos[0].category,
                  col5: e.faculty_employment_infos[0].startDate
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  var graphData = [{
    "EmploymentStatus": "Part-time",
    "MCSU": mcsuptCount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemptCount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoptCount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "EmploymentStatus": "Full-time",
    "MCSU": mcsuftCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemftCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoftCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "EmploymentStatus": "Lecturer",
    "MCSU": mcsulecCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemlecCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeolecCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];

  if (props.queryList.employment == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {
      className: "jsx-298159374"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Employment Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "EmpDeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
          name: "EmpDeptUnit",
          id: "EmpDeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "EmpStartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "date",
          name: "EmpStartTimePeriod",
          id: "EmpStartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "EmpEndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "date",
          name: "EmpEndTimePeriod",
          id: "EmpEndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {
          className: "jsx-298159374"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: function onClick() {
            var unitId;
            if (props.role == 3) unitId = document.getElementById('EmpDeptUnit').value;
            var startDate = document.getElementById('EmpStartTimePeriod').value;
            var endDate = document.getElementById('EmpEndTimePeriod').value;
            var url = '/faculty';
            var query = {
              employment: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
              pathname: url,
              query: query
            });
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          id: "employment-graph-tab",
          "data-toggle": "tab",
          href: "#employment-graph",
          role: "tab",
          "aria-controls": "employment-graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          id: "employment-table-tab",
          "data-toggle": "tab",
          href: "#employment-table",
          role: "tab",
          "aria-controls": "employment-table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: "employment-graph",
        role: "tabpanel",
        "aria-labelledby": "employment-graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_dashboard_graph__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: graphData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 125
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: "employment-table",
        role: "tabpanel",
        "aria-labelledby": "employment-table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_dashboard_table__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: tableData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 113
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: "298159374",
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxlbXBsb3ltZW50LXN0YXR1c1xcZW1wbG95bWVudC1zdGF0dXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUpjLEFBRzZCLEFBR0EsQUFHQSx5QkFMekIsQUFHQSxBQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxlbXBsb3ltZW50LXN0YXR1c1xcZW1wbG95bWVudC1zdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95bWVudEFuYWx5dGljc1RhYmxlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9lbXBsb3ltZW50LXN0YXR1cy9lbXBsb3ltZW50X2Rhc2hib2FyZF90YWJsZSdcclxuaW1wb3J0IEVtcGxveW1lbnREYXNoYm9hcmRHcmFwaCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBFbXBsb3ltZW50U3RhdHVzKHByb3BzKXtcclxuXHRsZXQgZW1wTGlzdCA9IHByb3BzLmNoaWxkcmVuXHJcblxyXG5cdGxldCBjaGVtZnRDb3VudCA9IDBcclxuXHRsZXQgY2hlbXB0Q291bnQgPSAwXHJcblx0bGV0IGNoZW1sZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IG1jc3VmdENvdW50ID0gMFxyXG5cdGxldCBtY3N1cHRDb3VudCA9IDBcclxuXHRsZXQgbWNzdWxlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgcDZHZW9mdENvdW50ID0gMFxyXG5cdGxldCBwNkdlb3B0Q291bnQgPSAwXHJcblx0bGV0IHA2R2VvbGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCB0YWJsZURhdGEgPSBbXVxyXG5cclxuXHRsZXQgdW5pdElkXHJcblx0bGV0IHN0YXJ0RGF0ZVxyXG5cdGxldCBlbmREYXRlXHJcblx0XHJcblx0aWYoZW1wTGlzdCkge1xyXG5cdFx0ZW1wTGlzdC5mb3JFYWNoKGFzeW5jIChlKSA9PiB7XHJcblx0XHRcdGlmKGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyA9PSAnRnVsbC10aW1lJykge1xyXG5cdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSBjaGVtZnRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikgbWNzdWZ0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvZnRDb3VudCsrXHJcblx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ0xlY3R1cmVyJykge1xyXG5cdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSBjaGVtbGVjQ291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VsZWNDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9sZWNDb3VudCsrXHJcblx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ1BhcnQtdGltZScpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbXB0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VwdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb3B0Q291bnQrK1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0Y29sMTogPGEgaHJlZiA9IHtgJHsnL2ZhY3VsdHkvdmlldy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGUuZmFjdWx0eUlkKX1gfT57ZS5sYXN0TmFtZSArICcsICcgKyBlLmZpcnN0TmFtZX08L2E+LFxyXG5cdFx0XHRcdGNvbDI6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbi5wb3NpdGlvbixcclxuXHRcdFx0XHRjb2wzOiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMsXHJcblx0XHRcdFx0Y29sNDogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uY2F0ZWdvcnksXHJcblx0XHRcdFx0Y29sNTogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhcnREYXRlXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJQYXJ0LXRpbWVcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VwdENvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCgxMDksIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbXB0Q291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDE1MSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvcHRDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiRnVsbC10aW1lXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1ZnRDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woNjcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbWZ0Q291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDIxNSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvZnRDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgyNDQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiTGVjdHVyZXJcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VsZWNDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woMjM0LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1sZWNDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMzAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9sZWNDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzgsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fVxyXG5cdF1cclxuXHRcclxuXHRpZihwcm9wcy5xdWVyeUxpc3QuZW1wbG95bWVudCA9PSAxKSB7XHJcblx0XHR1bml0SWQgPSBwcm9wcy5xdWVyeUxpc3QudW5pdElkXHJcblx0XHRzdGFydERhdGUgPSBwcm9wcy5xdWVyeUxpc3Quc3RhcnREYXRlXHJcblx0XHRlbmREYXRlID0gcHJvcHMucXVlcnlMaXN0LmVuZERhdGVcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8aDMgYWxpZ24gPSBcImNlbnRlclwiPkVtcGxveW1lbnQgU3RhdHVzPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvcHMucm9sZSA9PSAzICYmXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBEZXB0VW5pdFwiPiBEZXBhcnRtZW50IFVuaXQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkVtcERlcHRVbml0XCIgaWQ9XCJFbXBEZXB0VW5pdFwiIGRlZmF1bHRWYWx1ZT17dW5pdElkfT5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk1hdGhlbWF0aWNzIGFuZCBDb21wdXRpbmcgU2NpZW5jZXMgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBTdGFydFRpbWVQZXJpb2RcIj4gRnJvbSAgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJFbXBTdGFydFRpbWVQZXJpb2RcIiBpZD1cIkVtcFN0YXJ0VGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17c3RhcnREYXRlfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wRW5kVGltZVBlcmlvZFwiPiBUbyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkVtcEVuZFRpbWVQZXJpb2RcIiBpZD1cIkVtcEVuZFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e2VuZERhdGV9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB1bml0SWQgXHJcblx0XHRcdFx0XHRcdGlmKHByb3BzLnJvbGU9PTMpIHVuaXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBEZXB0VW5pdCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0ZW1wbG95bWVudDogMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHVuaXRJZCAmJiB1bml0SWQgIT0gMCkgcXVlcnkudW5pdElkID0gdW5pdElkXHJcblx0XHRcdFx0XHRcdGlmKHN0YXJ0RGF0ZSkgcXVlcnkuc3RhcnREYXRlID0gc3RhcnREYXRlXHJcblx0XHRcdFx0XHRcdGlmKGVuZERhdGUpIHF1ZXJ5LmVuZERhdGUgPSBlbmREYXRlXHJcblxyXG5cdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IHVybCxcclxuXHRcdFx0XHRcdFx0XHRxdWVyeVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fX0+IEZpbHRlcjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxuYXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC1ncmFwaC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZW1wbG95bWVudC1ncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC1ncmFwaFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk92ZXJ2aWV3PC9hPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtdGFibGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVtcGxveW1lbnQtdGFibGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5GdWxsIExpc3Q8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiZW1wbG95bWVudC1ncmFwaFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVtcGxveW1lbnQtZ3JhcGgtdGFiXCI+PEVtcGxveW1lbnREYXNoYm9hcmRHcmFwaCBkYXRhPXtncmFwaERhdGF9IC8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJlbXBsb3ltZW50LXRhYmxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC10YWJsZS10YWJcIj48RW1wbG95bWVudEFuYWx5dGljc1RhYmxlIGRhdGE9e3RhYmxlRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRTdGF0dXMiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment-status.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 3
  }, this);
}

_c = EmploymentStatus;
/* harmony default export */ __webpack_exports__["default"] = (EmploymentStatus);

var _c;

$RefreshReg$(_c, "EmploymentStatus");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnQtc3RhdHVzLmpzIl0sIm5hbWVzIjpbIkVtcGxveW1lbnRTdGF0dXMiLCJwcm9wcyIsImVtcExpc3QiLCJjaGlsZHJlbiIsImNoZW1mdENvdW50IiwiY2hlbXB0Q291bnQiLCJjaGVtbGVjQ291bnQiLCJtY3N1ZnRDb3VudCIsIm1jc3VwdENvdW50IiwibWNzdWxlY0NvdW50IiwicDZHZW9mdENvdW50IiwicDZHZW9wdENvdW50IiwicDZHZW9sZWNDb3VudCIsInRhYmxlRGF0YSIsInVuaXRJZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJmb3JFYWNoIiwiZSIsImZhY3VsdHlfZW1wbG95bWVudF9pbmZvcyIsInN0YXR1cyIsImZhY3VsdHlfdW5pdCIsInB1c2giLCJjb2wxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmFjdWx0eUlkIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJjb2wyIiwiZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uIiwicG9zaXRpb24iLCJjb2wzIiwiY29sNCIsImNhdGVnb3J5IiwiY29sNSIsImdyYXBoRGF0YSIsInF1ZXJ5TGlzdCIsImVtcGxveW1lbnQiLCJyb2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidXJsIiwicXVlcnkiLCJSb3V0ZXIiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFnQztBQUFBOztBQUMvQixNQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsUUFBcEI7QUFFQSxNQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFFQSxN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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyRUE7O0tBOUpRYixnQjtBQWdLVCwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFjdWx0eS41NTJhNWYwNGVkNzgxNTlhMmUwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnRfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRW1wbG95bWVudFN0YXR1cyhwcm9wcyl7XHJcblx0bGV0IGVtcExpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG5cclxuXHRsZXQgY2hlbWZ0Q291bnQgPSAwXHJcblx0bGV0IGNoZW1wdENvdW50ID0gMFxyXG5cdGxldCBjaGVtbGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCBtY3N1ZnRDb3VudCA9IDBcclxuXHRsZXQgbWNzdXB0Q291bnQgPSAwXHJcblx0bGV0IG1jc3VsZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IHA2R2VvZnRDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9wdENvdW50ID0gMFxyXG5cdGxldCBwNkdlb2xlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cdFxyXG5cdGlmKGVtcExpc3QpIHtcclxuXHRcdGVtcExpc3QuZm9yRWFjaChhc3luYyAoZSkgPT4ge1xyXG5cdFx0XHRpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ0Z1bGwtdGltZScpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWZ0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VmdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb2Z0Q291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdMZWN0dXJlcicpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWxlY0NvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1bGVjQ291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvbGVjQ291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdQYXJ0LXRpbWUnKSB7XHJcblx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIGNoZW1wdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1cHRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9wdENvdW50KytcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdGNvbDE6IDxhIGhyZWYgPSB7YCR7Jy9mYWN1bHR5L3ZpZXcvJyArIGVuY29kZVVSSUNvbXBvbmVudChlLmZhY3VsdHlJZCl9YH0+e2UubGFzdE5hbWUgKyAnLCAnICsgZS5maXJzdE5hbWV9PC9hPixcclxuXHRcdFx0XHRjb2wyOiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24ucG9zaXRpb24sXHJcblx0XHRcdFx0Y29sMzogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzLFxyXG5cdFx0XHRcdGNvbDQ6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmNhdGVnb3J5LFxyXG5cdFx0XHRcdGNvbDU6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXJ0RGF0ZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdyYXBoRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiUGFydC10aW1lXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1cHRDb3VudCxcclxuXHRcdCAgXCJNQ1NVQ29sb3JcIjogXCJoc2woMTA5LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1wdENvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxNTEsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb3B0Q291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIkZ1bGwtdGltZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdWZ0Q291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDY3LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1mdENvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgyMTUsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb2Z0Q291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMjQ0LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIkxlY3R1cmVyXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1bGVjQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDIzNCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtbGVjQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDMwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvbGVjQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHRdXHJcblx0XHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmVtcGxveW1lbnQgPT0gMSkge1xyXG5cdFx0dW5pdElkID0gcHJvcHMucXVlcnlMaXN0LnVuaXRJZFxyXG5cdFx0c3RhcnREYXRlID0gcHJvcHMucXVlcnlMaXN0LnN0YXJ0RGF0ZVxyXG5cdFx0ZW5kRGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5lbmREYXRlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj5FbXBsb3ltZW50IFN0YXR1czwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gMyAmJlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wRGVwdFVuaXRcIj4gRGVwYXJ0bWVudCBVbml0IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJFbXBEZXB0VW5pdFwiIGlkPVwiRW1wRGVwdFVuaXRcIiBkZWZhdWx0VmFsdWU9e3VuaXRJZH0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPkNoZW1pc3RyeSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5NYXRoZW1hdGljcyBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlBoeXNpY3MgYW5kIEdlb2xvZ3kgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wU3RhcnRUaW1lUGVyaW9kXCI+IEZyb20gIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW1wU3RhcnRUaW1lUGVyaW9kXCIgaWQ9XCJFbXBTdGFydFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e3N0YXJ0RGF0ZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcEVuZFRpbWVQZXJpb2RcIj4gVG8gPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJFbXBFbmRUaW1lUGVyaW9kXCIgaWQ9XCJFbXBFbmRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtlbmREYXRlfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdW5pdElkIFxyXG5cdFx0XHRcdFx0XHRpZihwcm9wcy5yb2xlPT0zKSB1bml0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wRGVwdFVuaXQnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcFN0YXJ0VGltZVBlcmlvZCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcEVuZFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9ICcvZmFjdWx0eSdcclxuXHRcdFx0XHRcdFx0bGV0IHF1ZXJ5ID0ge1xyXG5cdFx0XHRcdFx0XHRcdGVtcGxveW1lbnQ6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtZ3JhcGgtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtZ3JhcGhcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVtcGxveW1lbnQtZ3JhcGhcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5PdmVydmlldzwvYT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlbXBsb3ltZW50LXRhYmxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LXRhYmxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LXRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImVtcGxveW1lbnQtZ3JhcGhcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LWdyYXBoLXRhYlwiPjxFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZGF0YT17Z3JhcGhEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZW1wbG95bWVudC10YWJsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVtcGxveW1lbnQtdGFibGUtdGFiXCI+PEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3ltZW50U3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==