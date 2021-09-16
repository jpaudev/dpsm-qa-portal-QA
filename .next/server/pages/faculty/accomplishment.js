(function() {
var exports = {};
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 8160:
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
/* harmony import */ var _components_faculty_accomplishments_publication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3270);
/* harmony import */ var _components_faculty_accomplishments_public_service_accomplishment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5121);
/* harmony import */ var _components_faculty_accomplishments_licensure_exam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4588);
/* harmony import */ var _components_faculty_accomplishments_training_seminar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3851);
/* harmony import */ var _components_faculty_accomplishments_research_grant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9535);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4750);












function Accomplishments(props) {
  let name = props.personalInfo.lastName + ', ' + props.personalInfo.firstName;
  let psaRejected = false;

  if (props.publicService != null) {
    props.publicService.every(e => {
      if (e.status == 'Rejected') {
        psaRejected = true;
        return false;
      }

      return true;
    });
  }

  let publicationRejected = false;

  if (props.publications != null) {
    props.publications.forEach(e => {
      e.faculty_publishers.every(i => {
        if (i.status == 'Rejected') {
          publicationRejected = true;
          return false;
        }

        return true;
      });
    });
  }

  let tsRejected = false;

  if (props.trainingSeminar != null) {
    props.trainingSeminar.every(e => {
      if (e.status == 'Rejected') {
        tsRejected = true;
        return false;
      }

      return true;
    });
  }

  let licensureRejected = false;

  if (props.licensureExam != null) {
    props.licensureExam.every(e => {
      if (e.status == 'Rejected') {
        licensureRejected = true;
        return false;
      }

      return true;
    });
  }

  let rgRejected = false;

  if (props.researchGrant != null) {
    props.researchGrant.forEach(e => {
      e.faculty_researchers.every(i => {
        if (i.status == 'Rejected') {
          rgRejected = true;
          return false;
        }

        return true;
      });
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
      className: "jsx-3303329573",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-3303329573" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          id: "public-service-accomplishment-tab",
          "data-toggle": "tab",
          href: "#public-service-accomplishment",
          role: "tab",
          "aria-controls": "public-service-accomplishment",
          "aria-selected": "true",
          className: "jsx-3303329573" + " " + "nav-item nav-link active",
          children: ["Public Service \xA0", psaRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-3303329573" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          id: "publication-tab",
          "data-toggle": "tab",
          href: "#publication",
          role: "tab",
          "aria-controls": "publication",
          "aria-selected": "false",
          className: "jsx-3303329573" + " " + "nav-item nav-link",
          children: ["Publications \xA0", publicationRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-3303329573" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          id: "training-seminar-tab",
          "data-toggle": "tab",
          href: "#training-seminar",
          role: "tab",
          "aria-controls": "training-seminar",
          "aria-selected": "false",
          className: "jsx-3303329573" + " " + "nav-item nav-link",
          children: ["Training/Seminars \xA0", tsRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-3303329573" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          id: "licensure-exam-tab",
          "data-toggle": "tab",
          href: "#licensure-exam",
          role: "tab",
          "aria-controls": "licensure-exam",
          "aria-selected": "false",
          className: "jsx-3303329573" + " " + "nav-item nav-link",
          children: ["Licensure Exams \xA0", licensureRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-3303329573" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          id: "research-grant-tab",
          "data-toggle": "tab",
          href: "#research-grant",
          role: "tab",
          "aria-controls": "research-grant",
          "aria-selected": "false",
          className: "jsx-3303329573" + " " + "nav-item nav-link",
          children: ["Research Grants \xA0", rgRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-3303329573" + " " + "badge badge-danger",
            children: "!"
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
      className: "jsx-3303329573"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
      className: "jsx-3303329573"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-3303329573" + " " + "tab-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "public-service-accomplishment",
        role: "tabpanel",
        "aria-labelledby": "public-service-accomplishment-tab",
        className: "jsx-3303329573" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_public_service_accomplishment__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          children: props.publicService
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "publication",
        role: "tabpanel",
        "aria-labelledby": "publication-tab",
        className: "jsx-3303329573" + " " + "tab-pane fade",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_publication__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          faculty: props.faculty,
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          facultyId: props.data.facultyId,
          children: props.publications
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "training-seminar",
        role: "tabpanel",
        "aria-labelledby": "training-seminar-tab",
        className: "jsx-3303329573" + " " + "tab-pane fade",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_training_seminar__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          children: props.trainingSeminar
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "licensure-exam",
        role: "tabpanel",
        "aria-labelledby": "licensure-exam-tab",
        className: "jsx-3303329573" + " " + "tab-pane fade",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_licensure_exam__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          children: props.licensureExam
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "research-grant",
        role: "tabpanel",
        "aria-labelledby": "research-grant-tab",
        className: "jsx-3303329573" + " " + "tab-pane fade",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_research_grant__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          faculty: props.faculty,
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          facultyId: props.data.facultyId,
          children: props.researchGrant
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3303329573",
      children: ["a.nav-item.jsx-3303329573:focus{background-color:#78b6c2;}", "a.nav-item.jsx-3303329573:hover{background-color:#78b6c2;}", "a.active.jsx-3303329573{background-color:#78b6c2;}", "a#public-service-accomplishment-tab.active.jsx-3303329573{background-color:#78b6c2;}", "nav.jsx-3303329573{background-color:#aaa;}"]
    })]
  });
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__/* .parseCookies */ .j)(context.req);

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

  let data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default().decode(token.user);
  let facultyId = data.facultyId;
  let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
  let header = {
    headers: {
      'Authorization': 'Bearer ' + token.user
    }
  };
  const employment = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId + '/employment', header);
  const employmentInfo = await employment.json();
  let unit = employmentInfo.result.faculty_unit.unit.unit;
  let position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position;
  const personal = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId, header);
  const personalInfo = await personal.json();
  let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName;
  const fac = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/list/all?facultyId=' + facultyId, header);
  const faculty = await fac.json();
  const psa = await fetch(url + '/public-service', header);
  const publicService = await psa.json();
  const pub = await fetch(url + '/publication', header);
  const publications = await pub.json();
  const ts = await fetch(url + '/training-seminar', header);
  const trainingSeminar = await ts.json();
  const le = await fetch(url + '/licensure-exam', header);
  const licensureExam = await le.json();
  const rg = await fetch(url + '/research-grant', header);
  const researchGrant = await rg.json();
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
      token: token && token,
      data: data,
      name,
      unit,
      position,
      faculty: faculty.result,
      personalInfo: personalInfo.result,
      publicService: publicService.result,
      publications: publications.result,
      trainingSeminar: trainingSeminar.result,
      licensureExam: licensureExam.result,
      researchGrant: researchGrant.result,
      approvalList: approvalList,
      roleAssignmentFlag
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Accomplishments);

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

/***/ 724:
/***/ (function(module) {

"use strict";
module.exports = require("react-select");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,662,992], function() { return __webpack_exec__(8160); });
module.exports = __webpack_exports__;

})();