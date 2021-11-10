(function() {
var exports = {};
exports.id = 946;
exports.ids = [946];
exports.modules = {

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

/***/ 9610:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ settings_change_password; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./services/faculty/change-password/comparePassword.js

async function comparePassword(password, userId, token) {
  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/user/validate-password';
      const response = await external_axios_default()({
        method: 'POST',
        url: url,
        data: {
          userId: userId,
          password: password
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/change-password/updatePassword.js

async function updatePassword(password, userId, token) {
  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/user/' + userId;
      const response = await external_axios_default()({
        method: 'PUT',
        url: url,
        data: {
          password: password
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./components/change-password.js







function ChangePassword(props) {
  let validated;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-371132353",
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-371132353"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      align: "center",
      className: "jsx-371132353",
      children: " Change Password "
    }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: "jsx-371132353",
      children: "Required"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "changepassalert",
      style: {
        visibility: "hidden"
      },
      className: "jsx-371132353" + " " + "alert alert-success"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "jsx-371132353",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-371132353" + " " + "form-group col-md-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "old-password",
          className: "jsx-371132353" + " " + "required-label",
          children: "Current Password:"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          id: "old-password",
          name: "old-password",
          required: true,
          onBlur: async () => {
            let alert = document.getElementById("changepassalert");
            const oldPassword = document.getElementById('old-password').value;
            let res = await comparePassword(oldPassword, props.children.userId, props.token);

            if (res.success == true) {
              alert.style = "visibility: hidden";
              setValidate(true);
            } else {
              alert.className = "alert alert-danger";
              alert.style = "visibility: visible";
              alert.innerHTML = 'The current password is incorrect';
              setValidate(false);
            }
          },
          className: "jsx-371132353" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-371132353" + " " + "form-group col-md-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "new-password",
          className: "jsx-371132353" + " " + "required-label",
          children: "New Password:"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          id: "new-password",
          name: "new-password",
          required: true,
          className: "jsx-371132353" + " " + "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-371132353" + " " + "form-group col-md-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "confirm-new-password",
          className: "jsx-371132353" + " " + "required-label",
          children: "Confirm New Password:"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          id: "confirm-new-password",
          name: "confirm-new-password",
          required: true,
          onChange: async () => {
            let alert = document.getElementById("changepassalert");
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-new-password').value;

            if (newPassword != confirmPassword) {
              alert.className = "alert alert-danger";
              alert.style = "visibility: visible";
              alert.innerHTML = 'The passwords do not match';
              setValidate(false);
            } else {
              alert.style = "visibility: hidden";
              setValidate(true);
            }
          },
          className: "jsx-371132353" + " " + "form-control"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        onClick: async e => {
          let alert = document.getElementById("changepassalert");
          if (!validated) e.preventDefault();else {
            const newPassword = document.getElementById('new-password').value;
            let res = await updatePassword(newPassword, props.children.userId, props.token);

            if (res.success == true) {
              alert.className = "alert alert-success";
              alert.style = "visibility: visible";
              alert.innerHTML = res.message;
              $("#changepassalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#changepassalert").slideUp(500);
                router_default().push('/login', '/login');
              });
            } else {
              alert.className = "alert alert-danger";
              alert.style = "visibility: visible";
              if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
            }
          }
        },
        className: "jsx-371132353" + " " + "btn btn-primary col-md-12",
        children: "Change Password"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "371132353",
      children: ["label.required-label.jsx-371132353:after{content:\"*\";color:#f00;}", "h6.jsx-371132353:before{content:\"* \";color:#f00;}"]
    })]
  });

  function setValidate(bool) {
    validated = bool;
  }
}

/* harmony default export */ var change_password = (ChangePassword);
;// CONCATENATED MODULE: ./pages/settings/change-password.js






function change_password_ChangePassword(props) {
  if (props.data.role != 5) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: /*#__PURE__*/jsx_runtime_.jsx(change_password, {
        token: props.token.user,
        children: props.data
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      userId: props.data.userId,
      role: props.data.role,
      name: props.data.name,
      children: /*#__PURE__*/jsx_runtime_.jsx(change_password, {
        token: props.token.user,
        children: props.data
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

  if (context.res) {
    if (Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = external_jsonwebtoken_default().decode(token.user);

      if (data.role != 5) {
        let facultyId = data.facultyId;
        let header = {
          headers: {
            'Authorization': 'Bearer ' + token.user
          }
        };
        const personal = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId, header);
        personalInfo = await personal.json();
        let approvalURL = 'https://api.dpsmqaportal.com/api/faculty/approval/' + facultyId;
        let accompURL = 'https://api.dpsmqaportal.com/api/faculty/reports/accomplishment';
        let empURL = 'https://api.dpsmqaportal.com/api/faculty/reports/employment';
        let educURL = 'https://api.dpsmqaportal.com/api/faculty/reports/education';
        let roleAssignmentURL = 'https://api.dpsmqaportal.com/api/faculty/basic-info/unit/assignment';

        if (data.role == 2 || data.role == 3) {
          if (data.role == 2) {
            approvalURL += '?unitId=' + data.unitId;
            accompURL += '?unitId=' + data.unitId;
            empURL += '?unitId=' + data.unitId;
            educURL += '?unitId=' + data.unitId;
            roleAssignmentURL += '?unitId=' + data.unitId;
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
          } // } else if(data.role == 1) { 
          //     return {
          //         redirect: {
          //             destination: '/faculty/basic-info',
          //             permanent: true,
          //         },
          //     }

        }
      }
    }
  }

  if (data.role != 5) {
    return {
      props: {
        token: token && token,
        data,
        personalInfo: personalInfo.result,
        approvalList: approvalList || null,
        accompList: accompList || null,
        empList: empList || null,
        educList: educList || null,
        roleAssignmentFlag
      }
    };
  } else {
    return {
      props: {
        token: token && token,
        data
      }
    };
  }
}
/* harmony default export */ var settings_change_password = (change_password_ChangePassword);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752], function() { return __webpack_exec__(9610); });
module.exports = __webpack_exports__;

})();