self["webpackHotUpdate_N_E"]("pages/faculty",{

/***/ "./components/unit-head/dashboard/employment-status/employment_dashboard_table.js":
/*!****************************************************************************************!*\
  !*** ./components/unit-head/dashboard/employment-status/employment_dashboard_table.js ***!
  \****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-table-to-excel */ "./node_modules/react-html-table-to-excel/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\unit-head\\dashboard\\employment-status\\employment_dashboard_table.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // default search box filter

function DefaultColumnFilter(_ref) {
  var _ref$column = _ref.column,
      filterValue = _ref$column.filterValue,
      preFilteredRows = _ref$column.preFilteredRows,
      setFilter = _ref$column.setFilter;
  var count = preFilteredRows.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: "Search ".concat(count, " records...")
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


_c = DefaultColumnFilter;

function SelectColumnFilter(_ref2) {
  _s();

  var _this = this;

  var _ref2$column = _ref2.column,
      filterValue = _ref2$column.filterValue,
      setFilter = _ref2$column.setFilter,
      preFilteredRows = _ref2$column.preFilteredRows,
      id = _ref2$column.id;
  // Calculate the options for filtering
  // using the preFilteredRows
  var options = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(function () {
    var options = new Set();
    preFilteredRows.forEach(function (row) {
      options.add(row.values[id]);
    });
    return (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(options.values());
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), options.map(function (option, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: option,
        children: option
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
} // the table markup


_s(SelectColumnFilter, "UfleS4trXWGxzhzYTKqqYygmjCE=");

_c2 = SelectColumnFilter;

function Table(_ref3) {
  _s2();

  var _this2 = this;

  var columns = _ref3.columns,
      data = _ref3.data;
  var defaultColumn = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(function () {
    return {
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    };
  }, []);

  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_6__.useTable)({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_6__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_6__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_6__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_6__.useExpanded, react_table__WEBPACK_IMPORTED_MODULE_6__.usePagination),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      footerGroups = _useTable.footerGroups,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      rows = _useTable.rows,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      groupBy = _useTable$state.groupBy,
      expanded = _useTable$state.expanded;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_7__.default, {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "employmentTable",
      filename: "employment",
      buttonText: "Download as XLS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      id: "employmentTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            className: "jsx-3450710701",
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                className: "jsx-3450710701",
                children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "jsx-3450710701",
                  children: column.isSorted ? column.isSortedDesc ? '(Descending Order)' : '(Ascending Order)' : ' (click to sort)'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 4
                }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "jsx-3450710701",
                  children: column.canFilter ? column.render('Filter') : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 5
                }, _this2)]
              }), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 16
              }, _this2);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 12
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map(function (row, i) {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(function (cell) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '👇' : '👉'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, _this2), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 21
              }, _this2);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, _this2);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(function (group) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, group.getFooterGroupProps()), {}, {
            className: "jsx-3450710701",
            children: group.headers.map(function (column) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, column.getFooterProps()), {}, {
                className: "jsx-3450710701",
                children: [column.canGroupBy ?
                /*#__PURE__*/
                // If the column can be grouped, let's add a toggle
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
                  className: "jsx-3450710701",
                  children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 21
                }, _this2) : null, column.render('Footer')]
              }), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 15
              }, _this2);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 2
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return gotoPage(0);
        },
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return previousPage();
        },
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return nextPage();
        },
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return gotoPage(pageCount - 1);
        },
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: function onChange(e) {
            var page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: pageSize,
        onChange: function onChange(e) {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(function (pageSize) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: pageSize,
            className: "jsx-3450710701",
            children: ["Show ", pageSize]
          }, pageSize, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: "3450710701",
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxlbXBsb3ltZW50LXN0YXR1c1xcZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU9rQixBQUdrQixjQUNILFdBQ1EsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxlbXBsb3ltZW50LXN0YXR1c1xcZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VTb3J0QnksIHVzZUZpbHRlcnMsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuaW1wb3J0IFJlYWN0SFRNTFRhYmxlVG9FeGNlbCBmcm9tICdyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsJztcclxuXHJcbi8vIGRlZmF1bHQgc2VhcmNoIGJveCBmaWx0ZXJcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGUgdGFibGUgbWFya3VwXHJcbmZ1bmN0aW9uIFRhYmxlICh7Y29sdW1ucywgZGF0YX0pe1xyXG4gY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gICBjb25zdCB7XHJcbiAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgZm9vdGVyR3JvdXBzLFxyXG4gICAgIHByZXBhcmVSb3csXHJcbiAgICAgcGFnZSxcclxuICAgICByb3dzLCBcclxuXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSwgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcclxuICAgfSA9IHVzZVRhYmxlKHsgY29sdW1ucywgZGF0YSwgZGVmYXVsdENvbHVtbiwgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCB9IH0sIHVzZUZpbHRlcnMsIHVzZUdyb3VwQnksIHVzZVNvcnRCeSwgdXNlRXhwYW5kZWQsIHVzZVBhZ2luYXRpb24pXHJcblxyXG4gcmV0dXJuKFxyXG48ZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8UmVhY3RIVE1MVGFibGVUb0V4Y2VsXHJcblx0XHRcdFx0aWQ9XCJ0ZXN0LXRhYmxlLXhscy1idXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcclxuXHRcdFx0XHR0YWJsZT1cImVtcGxveW1lbnRUYWJsZVwiXHJcblx0XHRcdFx0ZmlsZW5hbWU9XCJlbXBsb3ltZW50XCJcclxuXHRcdFx0XHRidXR0b25UZXh0PVwiRG93bmxvYWQgYXMgWExTXCIvPlxyXG4gICAgPGJyIC8+XHJcbiAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB7Li4uZ2V0VGFibGVQcm9wcygpfSBpZD1cImVtcGxveW1lbnRUYWJsZVwiPlxyXG4gICAgICAgPHRoZWFkPlxyXG4gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgIDx0aFxyXG5cdFx0Ly8gc29ydGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcblx0XHQgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyhEZXNjZW5kaW5nIE9yZGVyKSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnKEFzY2VuZGluZyBPcmRlciknXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcgKGNsaWNrIHRvIHNvcnQpJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0ICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgKSl9XHJcbiAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfwn5GHJyA6ICfwn5GJJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX0gKHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgPC90Ym9keT5cclxuXHQ8dGZvb3Q+XHJcbiAgICAgICAge2Zvb3Rlckdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgPHRyIHsuLi5ncm91cC5nZXRGb290ZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICB7Z3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICA8dGQgXHJcblx0XHR7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9PlxyXG5cdFx0e2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAnQ2xpY2sgdG8gVW5ncm91cCAnIDogJ0NsaWNrIHRvIEdyb3VwJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cdFx0XHJcblx0XHR7Y29sdW1uLnJlbmRlcignRm9vdGVyJyl9XHJcblx0ICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rmb290PlxyXG4gICAgIDwvdGFibGU+XHJcblxyXG5cdFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHRcdHRhYmxle1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0b3ZlcmZsb3c6IHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG48L2Rpdj5cclxuIClcclxuICBcclxufVxyXG4gXHJcblxyXG4vLyBjb25maWd1cmUgY29sdW1ucywgcG9wdWxhdGUgY2VsbHMsIHJlbmRlciB0YWJsZVxyXG4gZnVuY3Rpb24gRW1wbG95bWVudEFuYWx5dGljc1RhYmxlKHByb3BzKSB7XHJcbiAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiBcclxuICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgKCkgPT4gW1xyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdOYW1lIG9mIEZhY3VsdHknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDEnLCAvLyBhY2Nlc3NvciBpcyB0aGUgXCJrZXlcIiBpbiB0aGUgZGF0YSxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXJcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1Bvc2l0aW9uJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wyJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDMnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXJcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0NhdGVnb3J5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w0JyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdTdGFydCBEYXRlJyxcclxuICAgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w1JyxcclxuICAgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcbiAgIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyXHJcbiAgICAgICB9XHJcbiAgICAgXSxcclxuICAgICBbXVxyXG4gICApXHJcbiBcclxuICAgcmV0dXJuIChcclxuICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz4gXHJcbiAgIClcclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment_dashboard_table.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 1
  }, this);
} // configure columns, populate cells, render table


_s2(Table, "1PPgrgrHy2wPtu5Jcla5zGEcw84=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_6__.useTable];
});

_c3 = Table;

function EmploymentAnalyticsTable(props) {
  _s3();

  var data = props.data;
  var columns = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(function () {
    return [{
      Header: 'Name of Faculty',
      Footer: '',
      accessor: 'col1',
      // accessor is the "key" in the data,
      aggregate: 'count',
      Aggregated: function Aggregated(_ref4) {
        var value = _ref4.value;
        return "".concat(value, " Names");
      },
      Filter: DefaultColumnFilter
    }, {
      Header: 'Position',
      Footer: '',
      accessor: 'col2',
      aggregate: 'count',
      Aggregated: function Aggregated(_ref5) {
        var value = _ref5.value;
        return "".concat(value, " Entries");
      },
      Filter: SelectColumnFilter
    }, {
      Header: 'Status',
      Footer: '',
      accessor: 'col3',
      aggregate: 'count',
      Aggregated: function Aggregated(_ref6) {
        var value = _ref6.value;
        return "".concat(value, " Entries");
      },
      Filter: SelectColumnFilter
    }, {
      Header: 'Category',
      Footer: '',
      accessor: 'col4',
      aggregate: 'count',
      Aggregated: function Aggregated(_ref7) {
        var value = _ref7.value;
        return "".concat(value, " Entries");
      },
      Filter: SelectColumnFilter
    }, {
      Header: 'Start Date',
      Footer: '',
      accessor: 'col5',
      aggregate: 'count',
      Aggregated: function Aggregated(_ref8) {
        var value = _ref8.value;
        return "".concat(value, " Entries");
      },
      Filter: SelectColumnFilter
    }];
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
    columns: columns,
    data: data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 6
  }, this);
}

_s3(EmploymentAnalyticsTable, "erkfbBpUuAY09jdvhSOqc0XsEHQ=");

_c4 = EmploymentAnalyticsTable;
/* harmony default export */ __webpack_exports__["default"] = (EmploymentAnalyticsTable);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DefaultColumnFilter");
$RefreshReg$(_c2, "SelectColumnFilter");
$RefreshReg$(_c3, "Table");
$RefreshReg$(_c4, "EmploymentAnalyticsTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInByZUZpbHRlcmVkUm93cyIsInNldEZpbHRlciIsImNvdW50IiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIiwiU2VsZWN0Q29sdW1uRmlsdGVyIiwiaWQiLCJvcHRpb25zIiwiUmVhY3QiLCJTZXQiLCJmb3JFYWNoIiwicm93IiwiYWRkIiwidmFsdWVzIiwibWFwIiwib3B0aW9uIiwiaSIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwidXNlVGFibGUiLCJpbml0aWFsU3RhdGUiLCJwYWdlSW5kZXgiLCJ1c2VGaWx0ZXJzIiwidXNlR3JvdXBCeSIsInVzZVNvcnRCeSIsInVzZUV4cGFuZGVkIiwidXNlUGFnaW5hdGlvbiIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsImZvb3Rlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwicm93cyIsImNhblByZXZpb3VzUGFnZSIsImNhbk5leHRQYWdlIiwicGFnZU9wdGlvbnMiLCJwYWdlQ291bnQiLCJnb3RvUGFnZSIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwic2V0UGFnZVNpemUiLCJzdGF0ZSIsInBhZ2VTaXplIiwiZ3JvdXBCeSIsImV4cGFuZGVkIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImNhbkZpbHRlciIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiYmFja2dyb3VuZCIsImlzR3JvdXBlZCIsImlzQWdncmVnYXRlZCIsImlzUGxhY2Vob2xkZXIiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJncm91cCIsImdldEZvb3Rlckdyb3VwUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJOdW1iZXIiLCJ3aWR0aCIsIkVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSIsInByb3BzIiwiSGVhZGVyIiwiRm9vdGVyIiwiYWNjZXNzb3IiLCJhZ2dyZWdhdGUiLCJBZ2dyZWdhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsbUJBQVQsT0FFRztBQUFBLHlCQUREQyxNQUNDO0FBQUEsTUFEU0MsV0FDVCxlQURTQSxXQUNUO0FBQUEsTUFEc0JDLGVBQ3RCLGVBRHNCQSxlQUN0QjtBQUFBLE1BRHVDQyxTQUN2QyxlQUR1Q0EsU0FDdkM7QUFDRCxNQUFNQyxLQUFLLEdBQUdGLGVBQWUsQ0FBQ0csTUFBOUI7QUFFQSxzQkFDRTtBQUFPLGFBQVMsRUFBRyx3QkFBbkI7QUFDRSxTQUFLLEVBQUVKLFdBQVcsSUFBSSxFQUR4QjtBQUVFLFlBQVEsRUFBRSxrQkFBQUssQ0FBQyxFQUFJO0FBQ2JILGVBQVMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsSUFBa0JDLFNBQW5CLENBQVQsQ0FEYSxDQUMwQjtBQUN4QyxLQUpIO0FBS0UsZUFBVyxtQkFBWUwsS0FBWjtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEMsQ0FFRDtBQUNBOzs7S0FqQlNMLG1COztBQWtCVCxTQUFTVyxrQkFBVCxRQUVHO0FBQUE7O0FBQUE7O0FBQUEsMkJBRERWLE1BQ0M7QUFBQSxNQURTQyxXQUNU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O0FBTkosS0FqQ0ksQ0FBTjtBQUFBLEdBRGMsRUEyQ2QsRUEzQ2MsQ0FBaEI7QUE4Q0Esc0JBQ0UsOERBQUMsS0FBRDtBQUFPLFdBQU8sRUFBRWEsT0FBaEI7QUFBeUIsUUFBSSxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRDs7SUFwRFF5RCx3Qjs7TUFBQUEsd0I7QUFzRFYsK0RBQWVBLHdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZhY3VsdHkuZWRkMGZkYTg0NDJiZWRkYjM5YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZVNvcnRCeSwgdXNlRmlsdGVycywgdXNlUGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG5pbXBvcnQgUmVhY3RIVE1MVGFibGVUb0V4Y2VsIGZyb20gJ3JlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWwnO1xyXG5cclxuLy8gZGVmYXVsdCBzZWFyY2ggYm94IGZpbHRlclxyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApXHJcbn1cclxuXHJcbi8vIHRoZSB0YWJsZSBtYXJrdXBcclxuZnVuY3Rpb24gVGFibGUgKHtjb2x1bW5zLCBkYXRhfSl7XHJcbiBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgIGNvbnN0IHtcclxuICAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgIGhlYWRlckdyb3VwcyxcclxuICAgICBmb290ZXJHcm91cHMsXHJcbiAgICAgcHJlcGFyZVJvdyxcclxuICAgICBwYWdlLFxyXG4gICAgIHJvd3MsIFxyXG5cclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplLCBncm91cEJ5LCBleHBhbmRlZCB9LFxyXG4gICB9ID0gdXNlVGFibGUoeyBjb2x1bW5zLCBkYXRhLCBkZWZhdWx0Q29sdW1uLCBpbml0aWFsU3RhdGU6IHsgcGFnZUluZGV4OiAwIH0gfSwgdXNlRmlsdGVycywgdXNlR3JvdXBCeSwgdXNlU29ydEJ5LCB1c2VFeHBhbmRlZCwgdXNlUGFnaW5hdGlvbilcclxuXHJcbiByZXR1cm4oXHJcbjxkaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIDxSZWFjdEhUTUxUYWJsZVRvRXhjZWxcclxuXHRcdFx0XHRpZD1cInRlc3QtdGFibGUteGxzLWJ1dHRvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTJcIlxyXG5cdFx0XHRcdHRhYmxlPVwiZW1wbG95bWVudFRhYmxlXCJcclxuXHRcdFx0XHRmaWxlbmFtZT1cImVtcGxveW1lbnRcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiZW1wbG95bWVudFRhYmxlXCI+XHJcbiAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgPHRoXHJcblx0XHQvLyBzb3J0aW5nIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuXHRcdCA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnKERlc2NlbmRpbmcgT3JkZXIpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcoQXNjZW5kaW5nIE9yZGVyKSdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyAoY2xpY2sgdG8gc29ydCknfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHQgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICApKX1cclxuICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLCBsZXQncyBjb2xvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbGwgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZSBpdCBpcyBnaXZlblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdXNlR3JvdXBCeSBob29rXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbGwuaXNHcm91cGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIzBhZmYwMDgyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc0FnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmZhNTAwNzgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmYwMDAwNDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUocHJvcHMpIHtcclxuICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuIFxyXG4gICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICAoKSA9PiBbXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ05hbWUgb2YgRmFjdWx0eScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMScsIC8vIGFjY2Vzc29yIGlzIHRoZSBcImtleVwiIGluIHRoZSBkYXRhLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlclxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnUG9zaXRpb24nLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXJcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlclxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnQ2F0ZWdvcnknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXJcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1N0YXJ0IERhdGUnLFxyXG4gICBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG4gICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXJcclxuICAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEFuYWx5dGljc1RhYmxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=