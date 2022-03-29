(function() {
var exports = {};
exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 5563:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ basic_info; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
// EXTERNAL MODULE: ./components/faculty/basic-info/personal-info.js + 3 modules
var personal_info = __webpack_require__(8832);
// EXTERNAL MODULE: ./components/faculty/basic-info/education.js + 5 modules
var education = __webpack_require__(1798);
// EXTERNAL MODULE: ./components/faculty/basic-info/employment-history.js + 2 modules
var employment_history = __webpack_require__(1538);
// EXTERNAL MODULE: ./components/faculty/basic-info/work-experience.js + 6 modules
var work_experience = __webpack_require__(7849);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
;// CONCATENATED MODULE: ./components/faculty/basic-info/teaching-philosophy.js




function TeachingPhilosophy() {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h4", {
      align: "center",
      children: " Teaching Philosophy "
    }), /*#__PURE__*/_jsx(NameDisplay, {}), /*#__PURE__*/_jsxs("form", {
      children: [/*#__PURE__*/_jsx("textarea", {
        className: "form-control",
        rows: "8",
        cols: "50",
        placeholder: "Write down your teaching philosophy here"
      }), /*#__PURE__*/_jsx("button", {
        className: "btn btn-primary",
        children: " Update "
      })]
    })]
  });
}

/* harmony default export */ var teaching_philosophy = ((/* unused pure expression or super */ null && (TeachingPhilosophy)));
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
;// CONCATENATED MODULE: ./pages/faculty/basic-info.js












function BasicInfo(props) {
  let educRejected = false;

  if (props.education != null) {
    props.education.every(e => {
      if (e.status == 'Rejected') {
        educRejected = true;
        return false;
      }

      return true;
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-961818159",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-961818159" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "personal-info-tab",
          "data-toggle": "tab",
          "data-target": "#personal-info",
          href: "#personal-info",
          role: "tab",
          "aria-controls": "personal-info",
          "aria-selected": "true",
          className: "jsx-961818159" + " " + "nav-item nav-link active",
          children: "Personal Information"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          id: "educ-tab",
          "data-toggle": "tab",
          "data-target": "#educ",
          href: "#educ",
          role: "tab",
          "aria-controls": "educ",
          "aria-selected": "false",
          className: "jsx-961818159" + " " + "nav-item nav-link",
          children: ["Education \xA0", educRejected && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "jsx-961818159" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "work-exp-tab",
          "data-toggle": "tab",
          "data-target": "#work-exp",
          href: "#work-exp",
          role: "tab",
          "aria-controls": "work-exp",
          "aria-selected": "false",
          className: "jsx-961818159" + " " + "nav-item nav-link",
          children: "Work Experience"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-961818159"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-961818159"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-961818159" + " " + "tab-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "personal-info",
        role: "tabpanel",
        "aria-labelledby": "personal-info-tab",
        className: "jsx-961818159" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(personal_info/* default */.Z, {
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          email: props.data.upemail,
          children: props.personalInfo
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "educ",
        role: "tabpanel",
        "aria-labelledby": "educ-tab",
        className: "jsx-961818159" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(education/* default */.Z, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          facultyFlag: true,
          children: props.education
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "work-exp",
        role: "tabpanel",
        "aria-labelledby": "work-exp-tab",
        className: "jsx-961818159" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(work_experience/* default */.Z, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          employment: props.employment,
          children: props.workExperience
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "961818159",
      children: ["a.nav-item.jsx-961818159:focus{background-color:#78b6c2;}", "a.nav-item.jsx-961818159:hover{background-color:#78b6c2;}", "a.active.jsx-961818159{background-color:#78b6c2;}", "a#personal-info-tab.active.jsx-961818159{background-color:#78b6c2;}", "nav.jsx-961818159{background-color:#aaa;}"]
    })]
  });
}

async function getServerSideProps(context) {
  const token = (0,helpers/* parseCookies */.j)(context.req);
  let personalInfo;
  let name;
  let employment;
  let education;
  let workExperience;
  let data;
  let unit;
  let position;
  let approvalList;
  let roleAssignmentFlag = false;

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
      let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      const personal = await fetch(url, header);
      personalInfo = await personal.json();
      name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName;
      const employ = await fetch(url + '/employment', header);
      employment = await employ.json();
      unit = employment.result.faculty_unit.unit.unit;
      position = employment.result.faculty_employment_infos[0].faculty_employment_position.position;
      const educ = await fetch(url + '/education', header);
      education = await educ.json();
      const work = await fetch(url + '/work-exp', header);
      workExperience = await work.json();
      let approvalURL = "http://localhost:3001/api" + '/faculty/approval/' + facultyId;
      let roleAssignmentURL = "http://localhost:3001/api" + '/faculty/basic-info/unit/assignment';

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
    }
  }

  return {
    props: {
      token: token && token,
      data: data,
      name,
      unit,
      position,
      personalInfo: personalInfo.result,
      education: education.result,
      workExperience: workExperience.result,
      employment: employment.result,
      approvalList: approvalList,
      roleAssignmentFlag
    }
  };
}
/* harmony default export */ var basic_info = (BasicInfo);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,429,939,798,147], function() { return __webpack_exec__(5563); });
module.exports = __webpack_exports__;

})();