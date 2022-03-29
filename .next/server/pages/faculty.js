(function() {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 4750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": function() { return /* binding */ parseCookies; },
/* harmony export */   "B": function() { return /* binding */ isExpired; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8883);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || "" : document.cookie);
} // check token if expired

function isExpired(user) {
  let decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(user);
  let now = new Date().getTime() / 1000;
  return decoded && decoded.exp < now;
}

/***/ }),

/***/ 4916:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ faculty; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-table"
var external_react_table_namespaceObject = require("react-table");;
;// CONCATENATED MODULE: external "react-html-table-to-excel"
var external_react_html_table_to_excel_namespaceObject = require("react-html-table-to-excel");;
var external_react_html_table_to_excel_default = /*#__PURE__*/__webpack_require__.n(external_react_html_table_to_excel_namespaceObject);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/jsx_runtime_.jsx("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  });
} // This is a custom filter UI for selecting
// a unique option from a list


function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = external_react_default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
      value: "",
      children: "All"
    }), options.map((option, i) => /*#__PURE__*/jsx_runtime_.jsx("option", {
      value: option,
      children: option
    }, i))]
  });
} // the table markup


function Table({
  columns,
  data
}) {
  const defaultColumn = external_react_default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,external_react_table_namespaceObject.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, external_react_table_namespaceObject.useFilters, external_react_table_namespaceObject.useGroupBy, external_react_table_namespaceObject.useSortBy, external_react_table_namespaceObject.useExpanded, external_react_table_namespaceObject.usePagination);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_html_table_to_excel_default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "accomplishmentTable",
      filename: "accomplishment",
      buttonText: "Download as XLS"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      id: "accomplishmentTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/jsx_runtime_.jsx("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '(Descending Order)' : '(Ascending Order)' : ' (click to sort)'
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            })]
          })))
        })))
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/jsx_runtime_.jsx("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/jsx_runtime_.jsx("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '👇' : '👉'
                  })), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }));
            })
          }));
        })
      })), /*#__PURE__*/jsx_runtime_.jsx("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/jsx_runtime_.jsx("tr", _objectSpread(_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", _objectSpread(_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            jsx_runtime_.jsx("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            })) : null, column.render('Footer')]
          })))
        })))
      })]
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }), ' ']
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        })]
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,jsx_runtime_.jsxs)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3450710701",
      children: ["table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}"]
    })]
  });
} // configure columns, populate cells, render table


function AccomplishmentAnalyticsTable(props) {
  const data = external_react_default().useMemo(() => props.data, []);
  const columns = external_react_default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: DefaultColumnFilter
  }, {
    Header: 'Accomplishment',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Accomplishments`,
    Filter: DefaultColumnFilter
  }, {
    Header: 'Accomplishment Type',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter
  }, {
    Header: 'Start Date',
    Footer: '',
    accessor: 'col4',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }, {
    Header: 'End Date',
    Footer: '',
    accessor: 'col5',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }], []);
  return /*#__PURE__*/jsx_runtime_.jsx(Table, {
    columns: columns,
    data: data
  });
}

/* harmony default export */ var accomplishment_dashboard_table = (AccomplishmentAnalyticsTable);
;// CONCATENATED MODULE: external "@nivo/bar"
var bar_namespaceObject = require("@nivo/bar");;
;// CONCATENATED MODULE: ./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph.js

// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class AccomplishmentDashboardGraph extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(bar_namespaceObject.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "AccomplishmentType",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Accomplishment Type',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      })
    });
  }

}

/* harmony default export */ var accomplishment_dashboard_graph = (AccomplishmentDashboardGraph);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/accomplishment-count/accomplishment-count.js







function AccomplishmentCount(props) {
  let accompList = props.children;
  let chemPSACount = 0;
  let chemTSCount = 0;
  let chemPubCount = 0;
  let chemRGCount = 0;
  let mcsuPSACount = 0;
  let mcsuTSCount = 0;
  let mcsuPubCount = 0;
  let mcsuRGCount = 0;
  let p6GeoPSACount = 0;
  let p6GeoTSCount = 0;
  let p6GeoPubCount = 0;
  let p6GeoRGCount = 0;
  let tableData = [];
  let unitId;
  let startDate;
  let endDate;

  if (accompList != null) {
    Object.keys(accompList).map(key => {
      if (accompList[key].faculty_unit.unitId == 1) {
        chemPSACount += accompList[key].faculty_public_services.length;
        chemTSCount += accompList[key].faculty_training_seminars.length;
        chemPubCount += accompList[key].faculty_publishers.length;
        chemRGCount += accompList[key].faculty_researchers.length;
      } else if (accompList[key].faculty_unit.unitId == 2) {
        mcsuPSACount += accompList[key].faculty_public_services.length;
        mcsuTSCount += accompList[key].faculty_training_seminars.length;
        mcsuPubCount += accompList[key].faculty_publishers.length;
        mcsuRGCount += accompList[key].faculty_researchers.length;
      } else if (accompList[key].faculty_unit.unitId == 3) {
        p6GeoPSACount += accompList[key].faculty_public_services.length;
        p6GeoTSCount += accompList[key].faculty_training_seminars.length;
        p6GeoPubCount += accompList[key].faculty_publishers.length;
        p6GeoRGCount += accompList[key].faculty_researchers.length;
      }

      if (accompList[key].faculty_public_services.length > 0) {
        accompList[key].faculty_public_services.forEach(async i => {
          await tableData.push({
            col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`,
              children: accompList[key].lastName + ', ' + accompList[key].firstName
            }),
            col2: i.position + ' - ' + i.organization,
            col3: 'Public Service',
            col4: i.startDate,
            col5: i.endDate
          });
        });
      }

      if (accompList[key].faculty_publishers.length > 0) {
        accompList[key].faculty_publishers.forEach(async i => {
          await tableData.push({
            col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`,
              children: accompList[key].lastName + ', ' + accompList[key].firstName
            }),
            col2: i.faculty_publication.title,
            col3: 'Publication',
            col4: i.faculty_publication.publicationDate,
            col5: i.faculty_publication.publicationDate
          });
        });
      }

      if (accompList[key].faculty_training_seminars.length > 0) {
        accompList[key].faculty_training_seminars.forEach(async i => {
          await tableData.push({
            col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`,
              children: accompList[key].lastName + ', ' + accompList[key].firstName
            }),
            col2: i.role + ' - ' + i.title,
            col3: 'Training/Seminar',
            col4: i.dateFrom,
            col5: i.dateTo
          });
        });
      }

      if (accompList[key].faculty_researchers.length > 0) {
        accompList[key].faculty_researchers.forEach(async i => {
          await tableData.push({
            col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`,
              children: accompList[key].lastName + ', ' + accompList[key].firstName
            }),
            col2: i.faculty_research_grant.researchName,
            col3: 'Research Grant',
            col4: i.faculty_research_grant.actualStart,
            col5: i.faculty_research_grant.actualEnd
          });
        });
      }
    });
  }

  const graphData = [{
    "AccomplishmentType": "Public Service",
    "MCSU": mcsuPSACount,
    "MCSUColor": "hsl(88, 70%, 50%)",
    "Chem": chemPSACount,
    "ChemColor": "hsl(102, 70%, 50%)",
    "Physics/Geology": p6GeoPSACount,
    "Physics/GeologyColor": "hsl(127, 70%, 50%)"
  }, {
    "AccomplishmentType": "Publications",
    "MCSU": mcsuPubCount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemPubCount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoPubCount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "AccomplishmentType": "Research Grants",
    "MCSU": mcsuRGCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemRGCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoRGCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "AccomplishmentType": "Training/Seminars",
    "MCSU": mcsuTSCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemTSCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeoTSCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];

  if (props.queryList.accomplishment == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-298159374"
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Accomplishment Count"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "DeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          name: "DeptUnit",
          id: "DeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "StartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "StartTimePeriod",
          id: "StartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "EndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "EndTimePeriod",
          id: "EndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-298159374"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            let unitId;

            if (props.role == 3) {
              unitId = document.getElementById('DeptUnit').value;
            }

            let startDate = document.getElementById('StartTimePeriod').value;
            let endDate = document.getElementById('EndTimePeriod').value;
            let url = '/faculty';
            let query = {
              accomplishment: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            router_default().push({
              pathname: url,
              query
            });
            window.setTimeout(function () {
              window.location.reload();
            }, 1000);
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "graph-tab",
          "data-toggle": "tab",
          href: "#graph",
          role: "tab",
          "aria-controls": "graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "table-tab",
          "data-toggle": "tab",
          href: "#table",
          role: "tab",
          "aria-controls": "table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "graph",
        role: "tabpanel",
        "aria-labelledby": "graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(accomplishment_dashboard_graph, {
          data: graphData
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "table",
        role: "tabpanel",
        "aria-labelledby": "table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(accomplishment_dashboard_table, {
          data: tableData
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "298159374",
      children: ["a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}", "a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}", "a.active.jsx-298159374{background-color:#78b6c2;}"]
    })]
  });
}

/* harmony default export */ var accomplishment_count = (AccomplishmentCount);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/employment-status/employment_dashboard_table.js





function employment_dashboard_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function employment_dashboard_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { employment_dashboard_table_ownKeys(Object(source), true).forEach(function (key) { employment_dashboard_table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { employment_dashboard_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function employment_dashboard_table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function employment_dashboard_table_DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/jsx_runtime_.jsx("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  });
} // This is a custom filter UI for selecting
// a unique option from a list


function employment_dashboard_table_SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = external_react_default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
      value: "",
      children: "All"
    }), options.map((option, i) => /*#__PURE__*/jsx_runtime_.jsx("option", {
      value: option,
      children: option
    }, i))]
  });
} // the table markup


function employment_dashboard_table_Table({
  columns,
  data
}) {
  const defaultColumn = external_react_default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: employment_dashboard_table_DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,external_react_table_namespaceObject.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, external_react_table_namespaceObject.useFilters, external_react_table_namespaceObject.useGroupBy, external_react_table_namespaceObject.useSortBy, external_react_table_namespaceObject.useExpanded, external_react_table_namespaceObject.usePagination);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_html_table_to_excel_default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "employmentTable",
      filename: "employment",
      buttonText: "Download as XLS"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, getTableProps()), {}, {
      id: "employmentTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/jsx_runtime_.jsx("tr", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '(Descending Order)' : '(Ascending Order)' : ' (click to sort)'
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            })]
          })))
        })))
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/jsx_runtime_.jsx("tr", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/jsx_runtime_.jsx("td", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '👇' : '👉'
                  })), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }));
            })
          }));
        })
      })), /*#__PURE__*/jsx_runtime_.jsx("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/jsx_runtime_.jsx("tr", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            jsx_runtime_.jsx("span", employment_dashboard_table_objectSpread(employment_dashboard_table_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            })) : null, column.render('Footer')]
          })))
        })))
      })]
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }), ' ']
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        })]
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,jsx_runtime_.jsxs)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3450710701",
      children: ["table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}"]
    })]
  });
} // configure columns, populate cells, render table


function EmploymentAnalyticsTable(props) {
  const data = external_react_default().useMemo(() => props.data, []);
  const columns = external_react_default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: employment_dashboard_table_DefaultColumnFilter
  }, {
    Header: 'Position',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: employment_dashboard_table_SelectColumnFilter
  }, {
    Header: 'Status',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: employment_dashboard_table_SelectColumnFilter
  }, {
    Header: 'Category',
    Footer: '',
    accessor: 'col4',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: employment_dashboard_table_SelectColumnFilter
  }], []);
  return /*#__PURE__*/jsx_runtime_.jsx(employment_dashboard_table_Table, {
    columns: columns,
    data: data
  });
}

/* harmony default export */ var employment_dashboard_table = (EmploymentAnalyticsTable);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/employment-status/employment_dashboard_graph.js

// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class EmploymentDashboardGraph extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(bar_namespaceObject.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "EmploymentStatus",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Employment Type/Employment Status',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      })
    });
  }

}

/* harmony default export */ var employment_dashboard_graph = (EmploymentDashboardGraph);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/employment-status/employment-status.js







function EmploymentStatus(props) {
  let empList = props.children;
  let chemftCount = 0;
  let chemptCount = 0;
  let chemlecCount = 0;
  let mcsuftCount = 0;
  let mcsuptCount = 0;
  let mcsulecCount = 0;
  let p6GeoftCount = 0;
  let p6GeoptCount = 0;
  let p6GeolecCount = 0;
  let tableData = [];
  let unitId;
  let startDate;
  let endDate;

  if (empList) {
    empList.forEach(async e => {
      if (e.faculty_employment_infos[0].status == 'Full-time') {
        if (e.faculty_unit.unitId == 1) chemftCount++;else if (e.faculty_unit.unitId == 2) mcsuftCount++;else if (e.faculty_unit.unitId == 3) p6GeoftCount++;
      } else if (e.faculty_employment_infos[0].status == 'Lecturer') {
        if (e.faculty_unit.unitId == 1) chemlecCount++;else if (e.faculty_unit.unitId == 2) mcsulecCount++;else if (e.faculty_unit.unitId == 3) p6GeolecCount++;
      } else if (e.faculty_employment_infos[0].status == 'Part-time') {
        if (e.faculty_unit.unitId == 1) chemptCount++;else if (e.faculty_unit.unitId == 2) mcsuptCount++;else if (e.faculty_unit.unitId == 3) p6GeoptCount++;
      }

      await tableData.push({
        col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `${'/faculty/view/' + encodeURIComponent(e.facultyId)}`,
          children: e.lastName + ', ' + e.firstName
        }),
        col2: e.faculty_employment_infos[0].faculty_employment_position.position,
        col3: e.faculty_employment_infos[0].status,
        col4: e.faculty_employment_infos[0].category
      });
    });
  }

  const graphData = [{
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-298159374"
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Employment Status"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "EmpDeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          name: "EmpDeptUnit",
          id: "EmpDeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "EmpStartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "EmpStartTimePeriod",
          id: "EmpStartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "EmpEndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "EmpEndTimePeriod",
          id: "EmpEndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-298159374"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            let unitId = document.getElementById('EmpDeptUnit').value;
            let startDate = document.getElementById('EmpStartTimePeriod').value;
            let endDate = document.getElementById('EmpEndTimePeriod').value;
            let url = '/faculty';
            let query = {
              employment: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            router_default().push({
              pathname: url,
              query
            });
            window.setTimeout(function () {
              window.location.reload();
            }, 1000);
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "employment-graph-tab",
          "data-toggle": "tab",
          href: "#employment-graph",
          role: "tab",
          "aria-controls": "employment-graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "employment-table-tab",
          "data-toggle": "tab",
          href: "#employment-table",
          role: "tab",
          "aria-controls": "employment-table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "employment-graph",
        role: "tabpanel",
        "aria-labelledby": "employment-graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(employment_dashboard_graph, {
          data: graphData
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "employment-table",
        role: "tabpanel",
        "aria-labelledby": "employment-table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(employment_dashboard_table, {
          data: tableData
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "298159374",
      children: ["a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}", "a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}", "a.active.jsx-298159374{background-color:#78b6c2;}"]
    })]
  });
}

/* harmony default export */ var employment_status = (EmploymentStatus);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/degree/degree_dashboard_table.js





function degree_dashboard_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function degree_dashboard_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { degree_dashboard_table_ownKeys(Object(source), true).forEach(function (key) { degree_dashboard_table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { degree_dashboard_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function degree_dashboard_table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function degree_dashboard_table_DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/jsx_runtime_.jsx("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  });
} // This is a custom filter UI for selecting
// a unique option from a list


function degree_dashboard_table_SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = external_react_default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
      value: "",
      children: "All"
    }), options.map((option, i) => /*#__PURE__*/jsx_runtime_.jsx("option", {
      value: option,
      children: option
    }, i))]
  });
} // the table markup


function degree_dashboard_table_Table({
  columns,
  data
}) {
  const defaultColumn = external_react_default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: degree_dashboard_table_DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,external_react_table_namespaceObject.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, external_react_table_namespaceObject.useFilters, external_react_table_namespaceObject.useGroupBy, external_react_table_namespaceObject.useSortBy, external_react_table_namespaceObject.useExpanded, external_react_table_namespaceObject.usePagination);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_html_table_to_excel_default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "degreeTable",
      filename: "degree",
      buttonText: "Download as XLS"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3450710701"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, getTableProps()), {}, {
      id: "degreeTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/jsx_runtime_.jsx("tr", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '(Descending Order)' : '(Ascending Order)' : ' (click to sort)'
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            })]
          })))
        })))
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/jsx_runtime_.jsx("tr", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/jsx_runtime_.jsx("td", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '👇' : '👉'
                  })), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }));
            })
          }));
        })
      })), /*#__PURE__*/jsx_runtime_.jsx("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/jsx_runtime_.jsx("tr", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            jsx_runtime_.jsx("span", degree_dashboard_table_objectSpread(degree_dashboard_table_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            })) : null, column.render('Footer')]
          })))
        })))
      })]
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }), ' ']
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        })]
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,jsx_runtime_.jsxs)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3450710701",
      children: ["table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}"]
    })]
  });
} // configure columns, populate cells, render table


function DegreeAnalyticsTable(props) {
  const data = external_react_default().useMemo(() => props.data, []);
  const columns = external_react_default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: degree_dashboard_table_DefaultColumnFilter
  }, {
    Header: 'Degree',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: degree_dashboard_table_DefaultColumnFilter
  }, {
    Header: 'Degree Type',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: degree_dashboard_table_SelectColumnFilter
  }, {
    Header: 'Date Earned',
    Footer: '',
    accessor: 'col4',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }], []);
  return /*#__PURE__*/jsx_runtime_.jsx(degree_dashboard_table_Table, {
    columns: columns,
    data: data
  });
}

/* harmony default export */ var degree_dashboard_table = (DegreeAnalyticsTable);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/degree/degree_dashboard_graph.js

// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class DegreeDashboardGraph extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(bar_namespaceObject.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "DegreeAttained",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Degree Attained',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      })
    });
  }

}

/* harmony default export */ var degree_dashboard_graph = (DegreeDashboardGraph);
;// CONCATENATED MODULE: ./components/unit-head/dashboard/degree/degree.js







function DegreeCount(props) {
  let educList = props.children;
  let chemBSCount = 0;
  let chemMACount = 0;
  let chemPHDCount = 0;
  let chemOthersCount = 0;
  let mcsuBSCount = 0;
  let mcsuMACount = 0;
  let mcsuPHDCount = 0;
  let mcsuOthersCount = 0;
  let p6GeoBSCount = 0;
  let p6GeoMACount = 0;
  let p6GeoPHDCount = 0;
  let p6GeoOthersCount = 0;
  let tableData = [];

  if (educList) {
    educList.forEach(async e => {
      await e.faculty_education_infos.forEach(async i => {
        if (i.degreeType == 'BS' || i.degreeType == 'BA') {
          if (e.faculty_unit.unitId == 1) {
            chemBSCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuBSCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoBSCount++;
          }
        } else if (i.degreeType == 'MA' || i.degreeType == 'MS') {
          if (e.faculty_unit.unitId == 1) {
            chemMACount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuMACount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoMACount++;
          }
        } else if (i.degreeType == 'PhD') {
          if (e.faculty_unit.unitId == 1) {
            chemPHDCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuPHDCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoPHDCount++;
          }
        } else {
          if (e.faculty_unit.unitId == 1) {
            chemOthersCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuOthersCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoOthersCount++;
          }
        }

        await tableData.push({
          col1: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `${'/faculty/view/' + encodeURIComponent(e.facultyId)}`,
            children: e.lastName + ', ' + e.firstName
          }),
          col2: i.degreeCert,
          col3: i.degreeType,
          col4: i.endDate
        });
      });
    });
  }

  const graphData = [{
    "DegreeAttained": "Bachelor's",
    "MCSU": mcsuBSCount,
    "MCSUColor": "hsl(88, 70%, 50%)",
    "Chem": chemBSCount,
    "ChemColor": "hsl(102, 70%, 50%)",
    "Physics/Geology": p6GeoBSCount,
    "Physics/GeologyColor": "hsl(127, 70%, 50%)"
  }, {
    "DegreeAttained": "Master's",
    "MCSU": mcsuMACount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemMACount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoMACount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "DegreeAttained": "Doctorate",
    "MCSU": mcsuPHDCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemPHDCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoPHDCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "DegreeAttained": "Other",
    "MCSU": mcsuOthersCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemOthersCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeoOthersCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];
  let unitId;
  let startDate;
  let endDate;

  if (props.queryList.degree == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-298159374"
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Attained Degrees"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "DegreeDeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          name: "DegreeDeptUnit",
          id: "DegreeDeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "DegreeStartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "DegreeStartTimePeriod",
          id: "DegreeStartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "DegreeEndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "date",
          name: "DegreeEndTimePeriod",
          id: "DegreeEndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-298159374"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            let unitId = document.getElementById('DegreeDeptUnit').value;
            let startDate = document.getElementById('DegreeStartTimePeriod').value;
            let endDate = document.getElementById('DegreeEndTimePeriod').value;
            let url = '/faculty';
            let query = {
              degree: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            router_default().push({
              pathname: url,
              query
            });
            window.setTimeout(function () {
              window.location.reload();
            }, 1000);
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "degree-graph-tab",
          "data-toggle": "tab",
          href: "#degree-graph",
          role: "tab",
          "aria-controls": "degree-graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "table-tab",
          "data-toggle": "tab",
          href: "#degree-table",
          role: "tab",
          "aria-controls": "degree-table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "degree-graph",
        role: "tabpanel",
        "aria-labelledby": "degree-graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(degree_dashboard_graph, {
          data: graphData
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "degree-table",
        role: "tabpanel",
        "aria-labelledby": "degree-table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(degree_dashboard_table, {
          data: tableData
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "298159374",
      children: ["a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}", "a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}", "a.active.jsx-298159374{background-color:#78b6c2;}"]
    })]
  });
}

/* harmony default export */ var degree = (DegreeCount);
;// CONCATENATED MODULE: ./pages/faculty/index.js








 // import SETResults from '../../components/unit-head/dashboard/SET-results/SET-results'



function Dashboard(props) {
  if (props.data.role == 1) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name
    });
  } else if (props.data.role == 2 || props.data.role == 3) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1611322769" + " " + "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-1611322769"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "jsx-1611322769" + " " + "btn btn-info",
          children: "Download All Faculty Information"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-1611322769"
        }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: "jsx-1611322769",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: "nav-tab",
            role: "tablist",
            className: "jsx-1611322769" + " " + "nav nav-tabs nav-fill nav-justified",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              id: "accomplishment-count-tab",
              "data-toggle": "tab",
              href: "#accomplishment-count",
              role: "tab",
              "aria-controls": "accomplishment-count",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Accomplishment Count"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              id: "employment-status-tab",
              "data-toggle": "tab",
              href: "#employment-status",
              role: "tab",
              "aria-controls": "employment-status",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Employment Status"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              id: "degree-tab",
              "data-toggle": "tab",
              href: "#degree",
              role: "tab",
              "aria-controls": "degree",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Attained Degrees"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "nav-tabContent",
          className: "jsx-1611322769" + " " + "tab-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "accomplishment-count",
            role: "tabpanel",
            "aria-labelledby": "accomplishment-count-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade show active",
            children: /*#__PURE__*/jsx_runtime_.jsx(accomplishment_count, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.accompList
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "employment-status",
            role: "tabpanel",
            "aria-labelledby": "employment-status-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade",
            children: /*#__PURE__*/jsx_runtime_.jsx(employment_status, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.empList
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "degree",
            role: "tabpanel",
            "aria-labelledby": "degree-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade",
            children: /*#__PURE__*/jsx_runtime_.jsx(degree, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.educList
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
          id: "1611322769",
          children: ["a.nav-item.jsx-1611322769:focus{background-color:#78b6c2;}", "a.nav-item.jsx-1611322769:hover{background-color:#78b6c2;}", "a.active.jsx-1611322769{background-color:#78b6c2;}", "a#accomplishment-count-tab.active.jsx-1611322769{background-color:#78b6c2;}", "nav.jsx-1611322769{background-color:#aaa;}"]
        })]
      })
    });
  }
}

async function getServerSideProps(context) {
  const token = (0,helpers/* parseCookies */.j)(context.req);
  let data;
  let personalInfo;
  let approvalList;
  let accompList;
  let empList;
  let educList;
  let roleAssignmentFlag = false;
  let queryList;

  if (context.res) {
    if ((0,helpers/* isExpired */.B)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = external_jsonwebtoken_default().decode(token.user);
      let facultyId = data.facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      const personal = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId, header);
      personalInfo = await personal.json();
      let approvalURL = "http://localhost:3001/api" + '/faculty/approval/' + facultyId;
      let accompURL = "http://localhost:3001/api" + '/faculty/reports/accomplishment';
      let empURL = "http://localhost:3001/api" + '/faculty/reports/employment';
      let educURL = "http://localhost:3001/api" + '/faculty/reports/education';
      let roleAssignmentURL = "http://localhost:3001/api" + '/faculty/basic-info/unit/assignment';

      if (data.role == 2 || data.role == 3) {
        if (data.role == 2) {
          approvalURL += '?unitId=' + data.unitId;
          accompURL += '?unitId=' + data.unitId;
          empURL += '?unitId=' + data.unitId;
          educURL += '?unitId=' + data.unitId;
          roleAssignmentURL += '?unitId=' + data.unitId;
        } else if (data.role == 3 && context.query) {
          if (context.query.accomplishment == 1) {
            accompURL += '?';
            if (context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId;
            if (context.query.startDate) accompURL += '&startDate=' + context.query.startDate;
            if (context.query.endDate) accompURL += '&endDate=' + context.query.endDate;
          } else if (context.query.employment == 1) {
            empURL += '?';
            if (context.query.unitId) empURL += 'unitId=' + context.query.unitId;
            if (context.query.startDate) empURL += '&startDate=' + context.query.startDate;
            if (context.query.endDate) empURL += '&endDate=' + context.query.endDate;
          } else if (context.query.degree == 1) {
            educURL += '?';
            if (context.query.unitId) educURL += 'unitId=' + context.query.unitId;
            if (context.query.startDate) educURL += '&startDate=' + context.query.startDate;
            if (context.query.endDate) educURL += '&endDate=' + context.query.endDate;
          }
        }

        const approval = await fetch(approvalURL, header);
        approvalList = await approval.json();
        approvalList = approvalList.result;
        const accompReports = await fetch(accompURL, header);
        accompList = await accompReports.json();
        accompList = accompList.result;
        const empReports = await fetch(empURL, header);
        empList = await empReports.json();
        empList = empList.result;
        const educReports = await fetch(educURL, header);
        educList = await educReports.json();
        educList = educList.result;
        const roleAssignments = await fetch(roleAssignmentURL, header);
        let roleAssignmentList = await roleAssignments.json();
        roleAssignmentList = roleAssignmentList.result;

        if (data.role == 2) {
          if (roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
        } else if (data.role == 3 && roleAssignmentList) {
          roleAssignmentFlag = true;
        }
      } else if (data.role == 1) {
        return {
          redirect: {
            destination: '/faculty/basic-info',
            permanent: true
          }
        };
      }
    }
  }

  return {
    props: {
      token: token && token,
      data,
      personalInfo: personalInfo.result,
      approvalList: approvalList,
      accompList,
      empList,
      educList: educList || null,
      roleAssignmentFlag,
      queryList: context.query
    }
  };
}
/* harmony default export */ var faculty = (Dashboard);

/***/ }),

/***/ 8883:
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752], function() { return __webpack_exec__(4916); });
module.exports = __webpack_exports__;

})();