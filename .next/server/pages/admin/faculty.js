(function() {
var exports = {};
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 5637:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7752);
/* harmony import */ var _components_faculty_basic_info_personal_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8832);
/* harmony import */ var _components_faculty_basic_info_education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1798);
/* harmony import */ var _components_faculty_basic_info_employment_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1538);
/* harmony import */ var _components_faculty_basic_info_work_experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7849);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4750);











function BasicInfo(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.data.name,
    approvalList: props.approvalList,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
      className: "jsx-3469655085"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
      className: "jsx-3469655085"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      id: "personal-info",
      role: "tabpanel",
      "aria-labelledby": "personal-info-tab",
      className: "jsx-3469655085" + " " + "tab-pane fade show active",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_basic_info_personal_info__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        facultyFlag: false,
        clerkFlag: true,
        token: props.token.user,
        positions: props.positionsList
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3469655085",
      children: ["a.nav-item.jsx-3469655085:focus{background-color:#78b6c2;}", "a.nav-item.jsx-3469655085:hover{background-color:#78b6c2;}", "a.active.jsx-3469655085{background-color:#78b6c2;}"]
    })]
  });
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_8__/* .parseCookies */ .j)(context.req);
  let name;
  let data;
  let positionsList = null;
  let approvalList;

  if (context.res) {
    if (Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(token.user);
      let facultyId = data.facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      let approvalURL = 'https://api.dpsmqaportal.com/api/faculty/approval/' + facultyId;

      if (data.role == 2 || data.role == 3) {
        if (data.role == 2) {
          approvalURL += '?unitId=' + data.unitId;
        }

        const approval = await fetch(approvalURL, header);
        approvalList = await approval.json();
        approvalList = approvalList.result;
      } else if (data.role == 1 || data.role == 5) {
        if (data.role == 5) {
          const positions = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/employment/positions', header);
          positionsList = await positions.json();
          positionsList = positionsList.result;
        }

        approvalList = null;
      }
    }
  }

  return {
    props: {
      token: token && token,
      data: data,
      approvalList: approvalList,
      positionsList
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (BasicInfo);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8883:
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ 7717:
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,662,798,147], function() { return __webpack_exec__(5637); });
module.exports = __webpack_exports__;

})();