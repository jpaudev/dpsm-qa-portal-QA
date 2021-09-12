exports.id = "components_faculty_facultyList_js";
exports.ids = ["components_faculty_facultyList_js"];
exports.modules = {

/***/ "./components/faculty/facultyList.js":
/*!*******************************************!*\
  !*** ./components/faculty/facultyList.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\facultyList.js";


function FacultyList(props) {
  let chem;
  let mcsu;
  let physgeo;

  if (props.children != null) {
    let path;
    if (props.path == "approval") path = '/faculty/approval/';else if (props.path == 'admin') path = '/admin/';else if (props.path == 'info') path = '/faculty/view/';
    chem = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 1) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `${path + encodeURIComponent(facultyId)}`,
            className: "list-group-item list-group-item-action list-group-item-light",
            forApproval: faculty[index].faculty_personal_info,
            children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "badge badge-danger",
              children: forApprovalCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "list-group",
            children: facultyList
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this);
      }
    });
    mcsu = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 2) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `${path + encodeURIComponent(facultyId)}`,
            className: "list-group-item list-group-item-action list-group-item-light",
            children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "badge badge-danger",
              children: forApprovalCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "list-group",
            children: facultyList
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, this);
      }
    });
    physgeo = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 3) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `${path + encodeURIComponent(facultyId)}`,
            className: "list-group-item list-group-item-action list-group-item-light",
            children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "badge badge-danger",
              children: forApprovalCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "list-group",
            children: facultyList
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, this);
      }
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      align: "center",
      children: "No approvals needed!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 4
    }, this), physgeo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyList);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5TGlzdC5qcyJdLCJuYW1lcyI6WyJGYWN1bHR5TGlzdCIsInByb3BzIiwiY2hlbSIsIm1jc3UiLCJwaHlzZ2VvIiwiY2hpbGRyZW4iLCJwYXRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInVuaXRJZCIsImZhY3VsdHkiLCJmYWN1bHR5X3VuaXRzIiwiZmFjdWx0eUxpc3QiLCJpbmRleCIsInN1cm5hbWUiLCJmYWN1bHR5X3BlcnNvbmFsX2luZm8iLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJsYXN0VXBkYXRlZCIsImZhY3VsdHlfdXBkYXRlcyIsInVwZGF0ZWRBdCIsInNwbGl0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwicm9sZSIsInVuaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQzFCLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSjs7QUFDQSxNQUFHSCxLQUFLLENBQUNJLFFBQU4sSUFBa0IsSUFBckIsRUFBMkI7QUFDMUIsUUFBSUMsSUFBSjtBQUNBLFFBQUdMLEtBQUssQ0FBQ0ssSUFBTixJQUFjLFVBQWpCLEVBQTZCQSxJQUFJLEdBQUcsb0JBQVAsQ0FBN0IsS0FDSyxJQUFHTCxLQUFLLENBQUNLLElBQU4sSUFBYyxPQUFqQixFQUEwQkEsSUFBSSxHQUFHLFNBQVAsQ0FBMUIsS0FDQSxJQUFHTCxLQUFLLENBQUNLLElBQU4sSUFBYyxNQUFqQixFQUF5QkEsSUFBSSxHQUFHLGdCQUFQO0FBRTlCSixRQUFJLEdBQUdLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFLLENBQUNJLFFBQWxCLEVBQTRCSSxHQUE1QixDQUFnQ0MsR0FBRyxJQUFJO0FBQzdDLFVBQUlULEtB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QSxVQUREO0FBVUE7O0FBRUQsK0RBQWVKLFdBQWYsRSIsImZpbGUiOiJjb21wb25lbnRzX2ZhY3VsdHlfZmFjdWx0eUxpc3RfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5TGlzdChwcm9wcyl7IFxyXG5cdGxldCBjaGVtXHJcblx0bGV0IG1jc3VcclxuXHRsZXQgcGh5c2dlb1xyXG5cdGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuXHRcdGxldCBwYXRoXHJcblx0XHRpZihwcm9wcy5wYXRoID09IFwiYXBwcm92YWxcIikgcGF0aCA9ICcvZmFjdWx0eS9hcHByb3ZhbC8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2FkbWluJykgcGF0aCA9ICcvYWRtaW4vJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdpbmZvJykgcGF0aCA9ICcvZmFjdWx0eS92aWV3LydcclxuXHRcdFxyXG5cdFx0Y2hlbSA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDEpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZXMgJiYgZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlc1swXSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGVzWzBdLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiIGZvckFwcHJvdmFsPXtmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm99PlxyXG5cdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRtY3N1ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMikgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlcyAmJiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGVzWzBdKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZXNbMF0udXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHBoeXNnZW8gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAzKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGVzICYmIGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZXNbMF0pIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlc1swXS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG4gICAgZWxzZXsgXHJcbiAgICAgICAgcmV0dXJuKDxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBhcHByb3ZhbHMgbmVlZGVkITwvcD4pXHJcbiAgICB9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7Y2hlbX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHttY3N1fVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e3BoeXNnZW99XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==