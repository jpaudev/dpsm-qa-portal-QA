exports.id = "components_name-display_js-services_faculty_downloadProof_js";
exports.ids = ["components_name-display_js-services_faculty_downloadProof_js"];
exports.modules = {

/***/ "./components/name-display.js":
/*!************************************!*\
  !*** ./components/name-display.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\name-display.js";

function NameDisplay(props) {
  if (props.children != null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        align: "center",
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("u", {
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 27
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: [" ", props.position, ", ", props.unit, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NameDisplay);

/***/ }),

/***/ "./services/faculty/downloadProof.js":
/*!*******************************************!*\
  !*** ./services/faculty/downloadProof.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ downloadProof; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function downloadProof(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: "http://localhost:3001/api" + `/download/${data}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: 'blob'
        }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${data}`); //or any other extension

          document.body.appendChild(link);
          link.click();
        });
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9kb3dubG9hZFByb29mLmpzIl0sIm5hbWVzIjpbIk5hbWVEaXNwbGF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwidW5pdCIsImRvd25sb2FkUHJvb2YiLCJkYXRhIiwidG9rZW4iLCJjb29raWVEYXRhIiwiand0IiwiZmFjdWx0eUlkIiwicmVzcG9uc2UiLCJheGlvcyIsInVybCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUMxQixNQUFHQSxLQUFLLENBQUNDLFFBQU4sSUFBa0IsSUFBckIsRUFBMkI7QUFDMUIsd0JBQ0M7QUFBQSw4QkFDQztBQUFJLGFBQUssRUFBRyxRQUFaO0FBQUEscUNBQXNCO0FBQUEsb0JBQUlELEtBQUssQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUksYUFBSyxFQUFHLFFBQVo7QUFBQSx3QkFBdUJELEtBQUssQ0FBQ0UsUUFBN0IsUUFBeUNGLEtBQUssQ0FBQ0csSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFPQSxHQVJELE1BUU87QUFDTix3QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFHQTtBQUNEOztBQUVELCtEQUFlSixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVlLGVBQWVLLGFBQWYsQ0FBNkJDLElBQTdCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN4RCxNQUFJQyxVQUFVLEdBQUdDLDBEQUFBLENBQVdGLEtBQVgsQ0FBakI7QUFDRyxNQUFJRyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0UsU0FBM0I7O0FBQ0gsTUFBSTtBQUNILFFBQUlILEtBQUosRUFBVztBQUNWLFVBQUk7QUFDSCxjQUFNSSxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQztBQUM1QkMsYUFBRyxFQUFFQywyQkFBQSxHQUF1QixhQUFZUixJQUFLLEVBRGpCO0FBRTVCUyxnQkFBTSxFQUFFLEtBRm9CO0FBRzVCQyxpQkFBTyxFQUFFO0FBQUVDLHlCQUFhLEVBQUcsVUFBU1YsS0FBTTtBQUFqQyxXQUhtQjtBQUk1Qlcsc0JBQVksRUFBRTtBQUpjLFNBQUQsQ0FBTCxDQUtwQkMsSUFMb0IsQ0FLZFIsUUFBRCxJQUFjO0FBQ3JCLGdCQUFNRSxHQUFHLEdBQUdPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxlQUFYLENBQTJCLElBQUlDLElBQUosQ0FBUyxDQUFDWixRQUFRLENBQUNMLElBQVYsQ0FBVCxDQUEzQixDQUFaO0FBQ0EsZ0JBQU1rQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FGLGNBQUksQ0FBQ0csSUFBTCxHQUFZZCxHQUFaO0FBQ0FXLGNBQUksQ0FBQ0ksWUFBTCxDQUFrQixVQUFsQixFQUErQixHQUFFdEIsSUFBSyxFQUF0QyxFQUpxQixDQUlxQjs7QUFDMUNtQixrQkFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLElBQTFCO0FBQ0FBLGNBQUksQ0FBQ08sS0FBTDtBQUNBLFNBWnNCLENBQXZCO0FBYUEsT0FkRCxDQWNFLE9BQU9DLEdBQVAsRUFBWTtBQUNiQyxlQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLGVBQU9BLEdBQVA7QUFDQTtBQUNEO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT0EsR0FBUCxFQUFZO0FBQ2JDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQyIsImZpbGUiOiJjb21wb25lbnRzX25hbWUtZGlzcGxheV9qcy1zZXJ2aWNlc19mYWN1bHR5X2Rvd25sb2FkUHJvb2ZfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOYW1lRGlzcGxheShwcm9wcyl7XHJcblx0aWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+IDx1Pntwcm9wcy5jaGlsZHJlbn08L3U+IDwvaDM+XHJcblx0XHRcdFx0PGg1IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLnBvc2l0aW9ufSwge3Byb3BzLnVuaXR9IDwvaDU+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgLz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVEaXNwbGF5IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRQcm9vZihkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHRcdHVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCArIGAvZG93bmxvYWQvJHtkYXRhfWAsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG5cdFx0XHRcdFx0cmVzcG9uc2VUeXBlOiAnYmxvYidcclxuXHRcdFx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcblx0XHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0XHRcdFx0bGluay5ocmVmID0gdXJsO1xyXG5cdFx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgYCR7ZGF0YX1gKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG5cdFx0XHRcdFx0bGluay5jbGljaygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==