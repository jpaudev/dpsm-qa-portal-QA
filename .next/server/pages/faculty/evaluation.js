(function() {
var exports = {};
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 3275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ evaluation; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
;// CONCATENATED MODULE: ./components/faculty/evaluation/evaluation-semester.js



function EvaluationSemester() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
      children: " Your Grade: "
    }), " 1.75"]
  });
}

/* harmony default export */ var evaluation_semester = (EvaluationSemester);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
;// CONCATENATED MODULE: ./pages/faculty/evaluation.js










function Evaluation(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.data.name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-2736030063"
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      className: "jsx-2736030063",
      children: " Peer Evaluation "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2736030063" + " " + "list-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#evaluation_ay20202021",
        "data-toggle": "collapse",
        "aria-controls": "evaluation_ay20202021",
        className: "jsx-2736030063" + " " + "list-group-item list-group-item-action list-group-item-secondary",
        children: "AY 2020-2021"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "evaluation_ay20202021",
        className: "jsx-2736030063" + " " + "jumbotron collapse",
        children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#evaluation_ay20192020",
        "data-toggle": "collapse",
        "aria-controls": "evaluation_ay20192020",
        className: "jsx-2736030063" + " " + "list-group-item list-group-item-action list-group-item-secondary",
        children: "AY 2019-2020"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "evaluation_ay20192020",
        className: "jsx-2736030063" + " " + "jumbotron collapse",
        children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#evaluation_ay20182019",
        "data-toggle": "collapse",
        "aria-controls": "evaluation_ay20182019",
        className: "jsx-2736030063" + " " + "list-group-item list-group-item-action list-group-item-secondary",
        children: "AY 2018-2019"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "evaluation_ay20182019",
        className: "jsx-2736030063" + " " + "jumbotron collapse",
        children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2736030063",
      children: [".list-group-item-info.jsx-2736030063{text-indent:5%;}"]
    })]
  });
}

Evaluation.getInitialProps = async ({
  req,
  res
}) => {
  const token = (0,helpers/* parseCookies */.j)(req);

  if (res) {
    if ((0,helpers/* isExpired */.B)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      res.writeHead(301, {
        Location: "/login"
      });
      res.end();
    }
  }

  let data = external_jsonwebtoken_default().decode(token.user);
  let facultyId = data.facultyId;
  let header = {
    headers: {
      'Authorization': 'Bearer ' + token.user
    }
  };
  const personal = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId, header);
  const personalInfo = await personal.json();
  let roleAssignmentFlag = false;
  let approvalList;
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

  return {
    data,
    personalInfo: personalInfo.result,
    approvalList,
    roleAssignmentFlag
  };
};

/* harmony default export */ var evaluation = (Evaluation);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,429], function() { return __webpack_exec__(3275); });
module.exports = __webpack_exports__;

})();