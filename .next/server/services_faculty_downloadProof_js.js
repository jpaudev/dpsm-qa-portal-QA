exports.id = "services_faculty_downloadProof_js";
exports.ids = ["services_faculty_downloadProof_js"];
exports.modules = {

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
          url: `http://localhost:3001/api/download/${data}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvZG93bmxvYWRQcm9vZi5qcyJdLCJuYW1lcyI6WyJkb3dubG9hZFByb29mIiwiZGF0YSIsInRva2VuIiwiY29va2llRGF0YSIsImp3dCIsImZhY3VsdHlJZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxlQUFlQSxhQUFmLENBQTZCQyxJQUE3QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEQsTUFBSUMsVUFBVSxHQUFHQywwREFBQSxDQUFXRixLQUFYLENBQWpCO0FBQ0csTUFBSUcsU0FBUyxHQUFHRixVQUFVLENBQUNFLFNBQTNCOztBQUNILE1BQUk7QUFDSCxRQUFJSCxLQUFKLEVBQVc7QUFDVixVQUFJO0FBQ0gsY0FBTUksUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDNUJDLGFBQUcsRUFBRyxzQ0FBcUNQLElBQUssRUFEcEI7QUFFNUJRLGdCQUFNLEVBQUUsS0FGb0I7QUFHNUJDLGlCQUFPLEVBQUU7QUFBRUMseUJBQWEsRUFBRyxVQUFTVCxLQUFNO0FBQWpDLFdBSG1CO0FBSTVCVSxzQkFBWSxFQUFFO0FBSmMsU0FBRCxDQUFMLENBS3BCQyxJQUxvQixDQUtkUCxRQUFELElBQWM7QUFDckIsZ0JBQU1FLEdBQUcsR0FBR00sTUFBTSxDQUFDQyxHQUFQLENBQVdDLGVBQVgsQ0FBMkIsSUFBSUMsSUFBSixDQUFTLENBQUNYLFFBQVEsQ0FBQ0wsSUFBVixDQUFULENBQTNCLENBQVo7QUFDQSxnQkFBTWlCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQUYsY0FBSSxDQUFDRyxJQUFMLEdBQVliLEdBQVo7QUFDQVUsY0FBSSxDQUFDSSxZQUFMLENBQWtCLFVBQWxCLEVBQStCLEdBQUVyQixJQUFLLEVBQXRDLEVBSnFCLENBSXFCOztBQUMxQ2tCLGtCQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sSUFBMUI7QUFDQUEsY0FBSSxDQUFDTyxLQUFMO0FBQ0EsU0Fac0IsQ0FBdkI7QUFhQSxPQWRELENBY0UsT0FBT0MsR0FBUCxFQUFZO0FBQ2JDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsZUFBT0EsR0FBUDtBQUNBO0FBQ0Q7QUFDRCxHQXJCRCxDQXFCRSxPQUFPQSxHQUFQLEVBQVk7QUFDYkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0E7QUFDRCxDIiwiZmlsZSI6InNlcnZpY2VzX2ZhY3VsdHlfZG93bmxvYWRQcm9vZl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkUHJvb2YoZGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0XHR1cmw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Rvd25sb2FkLyR7ZGF0YX1gLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSxcclxuXHRcdFx0XHRcdHJlc3BvbnNlVHlwZTogJ2Jsb2InXHJcblx0XHRcdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG5cdFx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRcdFx0XHRcdGxpbmsuaHJlZiA9IHVybDtcclxuXHRcdFx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGAke2RhdGF9YCk7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHRcdFx0XHRcdGxpbmsuY2xpY2soKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=