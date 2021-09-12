(function() {
var exports = {};
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 1588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function NameDisplay(props) {
  if (props.children != null) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
        align: "center",
        children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
          children: props.children
        }), " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
        align: "center",
        children: [" ", props.position, ", ", props.unit, " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})]
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
  }
}

/* harmony default export */ __webpack_exports__["Z"] = (NameDisplay);

/***/ }),

/***/ 4750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": function() { return /* binding */ parseCookies; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8883);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || "" : document.cookie);
}

/***/ }),

/***/ 4856:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_faculty_faculty_load_faculty_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9187);
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1588);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4750);










function FacultyLoad(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.data.name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
      className: "jsx-4140694371"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_faculty_load_faculty_load__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      name: props.name,
      token: props.token.user,
      unit: props.unit,
      position: props.position,
      facultyId: props.data.facultyId,
      name: props.data.name,
      facultyFlag: true,
      clerkFlag: false,
      children: props.facultyLoad
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4140694371",
      children: [".list-group-item-info.jsx-4140694371{text-indent:5%;}"]
    })]
  });
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .parseCookies */ .j)(context.req);

  if (context.res) {
    if (Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
  }

  let data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().decode(token.user);
  let facultyId = data.facultyId;
  let header = {
    headers: {
      'Authorization': 'Bearer ' + token.user
    }
  };
  const personal = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId, header);
  const personalInfo = await personal.json();
  const load = await fetch('https://api.dpsmqaportal.com/api/faculty/load/' + facultyId, header);
  const facultyLoad = await load.json();
  let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
  const employ = await fetch(url + '/employment', header);
  let employment = await employ.json();
  let unit = employment.result.faculty_unit.unit.unit;
  let position = employment.result.faculty_employment_infos[0].faculty_employment_position.position;
  let roleAssignmentFlag = false;
  let approvalList;
  let approvalURL = 'https://api.dpsmqaportal.com/api/faculty/approval/' + facultyId;
  let roleAssignmentURL = 'https://api.dpsmqaportal.com/api/faculty/basic-info/unit/assignment';

  if (data.role == 2 || data.role == 3) {
    if (data.role == 2) {
      approvalURL += '?unitId=' + data.unitId;
      roleAssignmentURL += '?unitId=' + data.unitId;
    }

    const approval = await fetch(approvalURL, header);
    approvalList = await approval.json();
    approvalList = approvalList.result;
    const roleAssignments = await fetch(roleAssignmentURL, header);
    let roleAssignmentList = await roleAssignments.json();
    roleAssignmentList = roleAssignmentList.result;

    if (data.role == 2) {
      if (roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
    } else if (data.role == 3 && roleAssignmentList) {
      roleAssignmentFlag = true;
    }
  } else if (data.role == 1) {
    approvalList = null;
  }

  return {
    props: {
      unit,
      position,
      token,
      data,
      facultyLoad: facultyLoad.result,
      personalInfo: personalInfo.result,
      approvalList,
      roleAssignmentFlag
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (FacultyLoad);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,187], function() { return __webpack_exec__(4856); });
module.exports = __webpack_exports__;

})();