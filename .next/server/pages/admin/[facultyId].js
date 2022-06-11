(function() {
var exports = {};
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 6840:
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
/* harmony import */ var _components_faculty_basic_info_work_experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7849);
/* harmony import */ var _components_faculty_accomplishments_publication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3270);
/* harmony import */ var _components_faculty_accomplishments_public_service_accomplishment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5121);
/* harmony import */ var _components_faculty_accomplishments_licensure_exam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4588);
/* harmony import */ var _components_faculty_accomplishments_training_seminar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3851);
/* harmony import */ var _components_faculty_accomplishments_research_grant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9535);
/* harmony import */ var _components_faculty_faculty_load_faculty_load_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4689);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4750);
















function BasicInfo(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    userId: props.data.userId,
    role: props.data.role,
    name: props.data.name,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
      className: "jsx-4228111268",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "nav-tab-main",
        role: "tablist",
        className: "jsx-4228111268" + " " + "nav nav-tabs nav-justified flex-column flex-md-row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          id: "basic-info-tab",
          "data-toggle": "tab",
          href: "#basic-info",
          role: "tab",
          "aria-controls": "basic-info",
          "aria-selected": "true",
          className: "jsx-4228111268" + " " + "nav-item nav-link active",
          children: "Basic Information"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          id: "accomplishments-tab",
          "data-toggle": "tab",
          href: "#accomplishments",
          role: "tab",
          "aria-controls": "accomplishments",
          "aria-selected": "false",
          className: "jsx-4228111268" + " " + "nav-item nav-link",
          children: "Accomplishments"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          id: "faculty-load-tab",
          "data-toggle": "tab",
          href: "#faculty-load",
          role: "tab",
          "aria-controls": "faculty-load",
          "aria-selected": "false",
          className: "jsx-4228111268" + " " + "nav-item nav-link",
          children: "Faculty Load"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "nav-tabContent-main",
        className: "jsx-4228111268" + " " + "tab-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          id: "basic-info",
          role: "tabpanel",
          "aria-labelledby": "basic-info-tab",
          className: "jsx-4228111268" + " " + "tab-pane fade show active",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "jsx-4228111268",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "nav-tab-basic-info",
              role: "tablist",
              className: "jsx-4228111268" + " " + "nav nav-tabs nav-justified flex-column flex-md-row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "personal-info-tab",
                "data-toggle": "tab",
                href: "#personal-info",
                role: "tab",
                "aria-controls": "personal-info",
                "aria-selected": "true",
                className: "jsx-4228111268" + " " + "nav-item nav-link active",
                children: "Personal Information"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "educ-tab",
                "data-toggle": "tab",
                href: "#educ",
                role: "tab",
                "aria-controls": "educ",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Education"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "work-exp-tab",
                "data-toggle": "tab",
                href: "#work-exp",
                role: "tab",
                "aria-controls": "work-exp",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Work Experience"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "nav-tabContent-basic-info",
            className: "jsx-4228111268" + " " + "tab-content",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "personal-info",
              role: "tabpanel",
              "aria-labelledby": "personal-info-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade show active",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_basic_info_personal_info__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                hasDisabledFields: true,
                children: props.personalInfo
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "educ",
              role: "tabpanel",
              "aria-labelledby": "educ-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_basic_info_education__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                children: props.education
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "work-exp",
              role: "tabpanel",
              "aria-labelledby": "work-exp-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_basic_info_work_experience__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                employment: props.employment,
                role: props.data.role,
                facultyId: props.pathFacultyId,
                positionsList: props.positionsList,
                children: props.workExperience
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          id: "accomplishments",
          role: "tabpanel",
          "aria-labelledby": "accomplishments-tab",
          className: "jsx-4228111268" + " " + "tab-pane fade",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "jsx-4228111268",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "nav-tab-accomplishment",
              role: "tablist",
              className: "jsx-4228111268" + " " + "nav nav-tabs nav-justified flex-column flex-md-row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "public-service-accomplishment-tab",
                "data-toggle": "tab",
                href: "#public-service-accomplishment",
                role: "tab",
                "aria-controls": "public-service-accomplishment",
                "aria-selected": "true",
                className: "jsx-4228111268" + " " + "nav-item nav-link active",
                children: "Public Service Accomplishments"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "publication-tab",
                "data-toggle": "tab",
                href: "#publication",
                role: "tab",
                "aria-controls": "publication",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Publications"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "training-seminar-tab",
                "data-toggle": "tab",
                href: "#training-seminar",
                role: "tab",
                "aria-controls": "training-seminar",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Training/Seminars"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "licensure-exam-tab",
                "data-toggle": "tab",
                href: "#licensure-exam",
                role: "tab",
                "aria-controls": "licensure-exam",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Licensure Exams"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "research-grant-tab",
                "data-toggle": "tab",
                href: "#research-grant",
                role: "tab",
                "aria-controls": "research-grant",
                "aria-selected": "false",
                className: "jsx-4228111268" + " " + "nav-item nav-link",
                children: "Research Grants"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "nav-tabContent-accomplishment",
            className: "jsx-4228111268" + " " + "tab-content",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "public-service-accomplishment",
              role: "tabpanel",
              "aria-labelledby": "public-service-accomplishment-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade show active",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_public_service_accomplishment__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                children: props.publicService
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "publication",
              role: "tabpanel",
              "aria-labelledby": "publication-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_publication__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                faculty: props.faculty,
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                facultyId: props.pathFacultyId,
                role: props.data.role,
                children: props.publications
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "training-seminar",
              role: "tabpanel",
              "aria-labelledby": "training-seminar-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_training_seminar__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                children: props.trainingSeminar
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "licensure-exam",
              role: "tabpanel",
              "aria-labelledby": "licensure-exam-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_licensure_exam__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                children: props.licensureExam
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "research-grant",
              role: "tabpanel",
              "aria-labelledby": "research-grant-tab",
              className: "jsx-4228111268" + " " + "tab-pane fade",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_accomplishments_research_grant__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                faculty: props.faculty,
                name: props.name,
                token: props.token.user,
                unit: props.unit,
                position: props.position,
                facultyId: props.pathFacultyId,
                role: props.data.role,
                children: props.researchGrant
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          id: "faculty-load",
          role: "tabpanel",
          "aria-labelledby": "faculty-load-tab",
          className: "jsx-4228111268" + " " + "tab-pane fade",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faculty_faculty_load_faculty_load_table__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
            name: props.name,
            token: props.token.user,
            unit: props.unit,
            position: props.position,
            facultyId: props.pathFacultyId,
            role: props.data.role,
            editClass: false,
            children: props.facultyLoad
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4228111268",
      children: ["#nav-tab-main.jsx-4228111268 a.nav-item.jsx-4228111268:focus{background-color:#78b6c2;}", "#nav-tab-main.jsx-4228111268 a.nav-item.jsx-4228111268:hover{background-color:#78b6c2;}", "#nav-tab-main.jsx-4228111268 a.nav-item.jsx-4228111268 .active.jsx-4228111268{background-color:#78b6c2;}", "a.nav-item.jsx-4228111268{background-color:#aaa;}", "#nav-tabContent-main.jsx-4228111268 a.nav-item.jsx-4228111268{background-color:#78b6c2;}", "#nav-tabContent-main.jsx-4228111268 a.nav-item.jsx-4228111268 .active.jsx-4228111268{background-color:#5486b8;}", "#nav-tabContent-main.jsx-4228111268 a.nav-item.jsx-4228111268:focus{background-color:#5486b8;}", "#nav-tabContent-main.jsx-4228111268 a.nav-item.jsx-4228111268:hover{background-color:#5486b8;}", ".tab-pane.active.jsx-4228111268{background-color:#fff;}", ".list-group-item-info.jsx-4228111268{text-indent:5%;}"]
    })]
  });
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_13__/* .parseCookies */ .j)(context.req);
  let personalInfo;
  let name;
  let unit;
  let position;
  let data;
  let employmentInfo;
  let education;
  let workExperience;
  let faculty;
  let publicService;
  let publications;
  let trainingSeminar;
  let licensureExam;
  let researchGrant;
  let positionsList;
  let facultyLoad;

  if (context.res) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_13__/* .isExpired */ .B)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_12___default().decode(token.user);

      if (context.params.facultyId) {
        let facultyId = context.params.facultyId;
        let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;
        let header = {
          headers: {
            'Authorization': 'Bearer ' + token.user
          }
        };
        const personal = await fetch(url, header);
        personalInfo = await personal.json();
        name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName;
        const employment = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/employment', header);
        employmentInfo = await employment.json();
        unit = employmentInfo.result.faculty_unit.unit.unit;

        if (employmentInfo.result.faculty_employment_infos[0]) {
          position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position;
        }

        const load = await fetch("http://localhost:3001/api" + '/faculty/load/' + facultyId, header);
        facultyLoad = await load.json();
        const educ = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/education', header);
        education = await educ.json();
        const work = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/work-exp', header);
        workExperience = await work.json();
        const fac = await fetch("http://localhost:3001/api" + '/faculty/basic-info/list/all?facultyId=' + facultyId, header);
        faculty = await fac.json();
        const psa = await fetch("http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId + '/public-service', header);
        publicService = await psa.json();
        const pub = await fetch("http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId + '/publication', header);
        publications = await pub.json();
        const ts = await fetch("http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId + '/training-seminar', header);
        trainingSeminar = await ts.json();
        const le = await fetch("http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId + '/licensure-exam', header);
        licensureExam = await le.json();
        const rg = await fetch("http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId + '/research-grant', header);
        researchGrant = await rg.json();
        const positions = await fetch("http://localhost:3001/api" + '/faculty/basic-info/employment/positions', header);
        positionsList = await positions.json();
        positionsList = positionsList.result;
      } else {
        return {
          redirect: {
            destination: '/admin',
            permanent: true
          }
        };
      }
    }
  }

  return {
    props: {
      token: token && token,
      data: data,
      name,
      personalInfo: personalInfo.result,
      unit,
      facultyLoad: facultyLoad.result,
      pathFacultyId: context.params.facultyId,
      faculty: faculty.result,
      position: position || null,
      education: education.result,
      employment: employmentInfo.result,
      workExperience: workExperience.result,
      publicService: publicService.result,
      publications: publications.result,
      trainingSeminar: trainingSeminar.result,
      licensureExam: licensureExam.result,
      researchGrant: researchGrant.result,
      pathFacultyId: context.params.facultyId,
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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,429,939,798,992,147,689], function() { return __webpack_exec__(6840); });
module.exports = __webpack_exports__;

})();