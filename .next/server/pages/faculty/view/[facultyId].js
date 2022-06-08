(function() {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 8163:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _facultyId_; },
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
// EXTERNAL MODULE: ./components/faculty/basic-info/work-experience.js + 6 modules
var work_experience = __webpack_require__(7849);
// EXTERNAL MODULE: ./components/faculty/accomplishments/publication.js + 6 modules
var publication = __webpack_require__(3270);
// EXTERNAL MODULE: ./components/faculty/accomplishments/public-service-accomplishment.js + 5 modules
var public_service_accomplishment = __webpack_require__(5121);
// EXTERNAL MODULE: ./components/faculty/accomplishments/licensure-exam.js + 5 modules
var licensure_exam = __webpack_require__(4588);
// EXTERNAL MODULE: ./components/faculty/accomplishments/training-seminar.js + 5 modules
var training_seminar = __webpack_require__(3851);
// EXTERNAL MODULE: ./components/faculty/accomplishments/research-grant.js + 6 modules
var research_grant = __webpack_require__(9535);
;// CONCATENATED MODULE: ./components/unit-head/faculty-list/evaluation/evaluation-semester.js



function evaluation_semester_EvaluationSemester() {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h5", {
      children: " Your Grade: "
    }), " 1.75"]
  });
}

/* harmony default export */ var evaluation_semester = ((/* unused pure expression or super */ null && (evaluation_semester_EvaluationSemester)));
;// CONCATENATED MODULE: ./components/unit-head/faculty-list/evaluation/evaluation.js




function Evaluation() {
  return /*#__PURE__*/_jsxs("div", {
    className: "list-group",
    children: [/*#__PURE__*/_jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20202021",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20202021",
      children: "AY 2020-2021"
    }), /*#__PURE__*/_jsx("div", {
      id: "evaluation_ay20202021",
      className: "jumbotron collapse",
      children: /*#__PURE__*/_jsx(EvaluationSemester, {})
    }), /*#__PURE__*/_jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20192020",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20192020",
      children: "AY 2019-2020"
    }), /*#__PURE__*/_jsx("div", {
      id: "evaluation_ay20192020",
      className: "jumbotron collapse",
      children: /*#__PURE__*/_jsx(EvaluationSemester, {})
    }), /*#__PURE__*/_jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20182019",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20182019",
      children: "AY 2018-2019"
    }), /*#__PURE__*/_jsx("div", {
      id: "evaluation_ay20182019",
      className: "jumbotron collapse",
      children: /*#__PURE__*/_jsx(EvaluationSemester, {})
    })]
  });
}

/* harmony default export */ var evaluation = ((/* unused pure expression or super */ null && (Evaluation)));
// EXTERNAL MODULE: ./components/faculty/faculty-load/faculty-load-table.js + 4 modules
var faculty_load_table = __webpack_require__(4689);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
;// CONCATENATED MODULE: ./pages/faculty/view/[facultyId].js

















function ViewFaculty(props) {
  if (props.role == 1) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-1788442158",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "nav-tab-main",
          role: "tablist",
          className: "jsx-1788442158" + " " + "nav nav-tabs nav-fill nav-justified",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "basic-info-tab",
            "data-toggle": "tab",
            href: "#basic-info",
            role: "tab",
            "aria-controls": "basic-info",
            "aria-selected": "true",
            className: "jsx-1788442158" + " " + "nav-item nav-link active",
            children: "Basic Information"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "accomplishments-tab",
            "data-toggle": "tab",
            href: "#accomplishments",
            role: "tab",
            "aria-controls": "accomplishments",
            "aria-selected": "false",
            className: "jsx-1788442158" + " " + "nav-item nav-link",
            children: "Accomplishments"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "SET-tab",
            "data-toggle": "tab",
            href: "#SET",
            role: "tab",
            "aria-controls": "SET",
            "aria-selected": "false",
            className: "jsx-1788442158" + " " + "nav-item nav-link",
            children: "Faculty Load"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "nav-tabContent-main",
          className: "jsx-1788442158" + " " + "tab-content",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: "basic-info",
            role: "tabpanel",
            "aria-labelledby": "basic-info-tab",
            className: "jsx-1788442158" + " " + "tab-pane fade show active",
            children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "jsx-1788442158",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                id: "nav-tab-basic-info",
                role: "tablist",
                className: "jsx-1788442158" + " " + "nav nav-tabs nav-fill nav-justified",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "personal-info-tab",
                  "data-toggle": "tab",
                  href: "#personal-info",
                  role: "tab",
                  "aria-controls": "personal-info",
                  "aria-selected": "true",
                  className: "jsx-1788442158" + " " + "nav-item nav-link active",
                  children: "Personal Information"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "educ-tab",
                  "data-toggle": "tab",
                  href: "#educ",
                  role: "tab",
                  "aria-controls": "educ",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Education"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "work-exp-tab",
                  "data-toggle": "tab",
                  href: "#work-exp",
                  role: "tab",
                  "aria-controls": "work-exp",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Work Experience"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              id: "nav-tabContent-basic-info",
              className: "jsx-1788442158" + " " + "tab-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "personal-info",
                role: "tabpanel",
                "aria-labelledby": "personal-info-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade show active",
                children: /*#__PURE__*/jsx_runtime_.jsx(personal_info/* default */.Z, {
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  hasDisabledFields: true,
                  children: props.personalInfo
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "educ",
                role: "tabpanel",
                "aria-labelledby": "educ-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(education/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  role: props.data.role,
                  children: props.education
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "work-exp",
                role: "tabpanel",
                "aria-labelledby": "work-exp-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(work_experience/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  employment: props.employment,
                  children: props.workExperience
                })
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1788442158",
        children: ["a.nav-item.jsx-1788442158:focus{background-color:#78b6c2;}", "a.nav-item.jsx-1788442158:hover{background-color:#78b6c2;}", "a.active.jsx-1788442158{background-color:#78b6c2;}", "a#basic-info-tab.active.jsx-1788442158{background-color:#78b6c2;}", "a#personal-info-tab.active.jsx-1788442158{background-color:#78b6c2;}", "a#public-service-accomplishment-tab.active.jsx-1788442158{background-color:#78b6c2;}", "nav.jsx-1788442158{background-color:#aaa;}", "nav#nav-tab-main.jsx-1788442158{background-color:#999;}", ".tab-content.jsx-1788442158{background-color:#fff;}"]
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-1788442158",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "nav-tab-main",
          role: "tablist",
          className: "jsx-1788442158" + " " + "nav nav-tabs nav-fill nav-justified",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "basic-info-tab",
            "data-toggle": "tab",
            href: "#basic-info",
            role: "tab",
            "aria-controls": "basic-info",
            "aria-selected": "true",
            className: "jsx-1788442158" + " " + "nav-item nav-link active",
            children: "Basic Information"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "accomplishments-tab",
            "data-toggle": "tab",
            href: "#accomplishments",
            role: "tab",
            "aria-controls": "accomplishments",
            "aria-selected": "false",
            className: "jsx-1788442158" + " " + "nav-item nav-link",
            children: "Accomplishments"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "SET-tab",
            "data-toggle": "tab",
            href: "#SET",
            role: "tab",
            "aria-controls": "SET",
            "aria-selected": "false",
            className: "jsx-1788442158" + " " + "nav-item nav-link",
            children: "Faculty Load"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "nav-tabContent-main",
          className: "jsx-1788442158" + " " + "tab-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: "basic-info",
            role: "tabpanel",
            "aria-labelledby": "basic-info-tab",
            className: "jsx-1788442158" + " " + "tab-pane fade show active",
            children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "jsx-1788442158",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                id: "nav-tab-basic-info",
                role: "tablist",
                className: "jsx-1788442158" + " " + "nav nav-tabs nav-fill nav-justified",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "personal-info-tab",
                  "data-toggle": "tab",
                  href: "#personal-info",
                  role: "tab",
                  "aria-controls": "personal-info",
                  "aria-selected": "true",
                  className: "jsx-1788442158" + " " + "nav-item nav-link active",
                  children: "Personal Information"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "educ-tab",
                  "data-toggle": "tab",
                  href: "#educ",
                  role: "tab",
                  "aria-controls": "educ",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Education"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "work-exp-tab",
                  "data-toggle": "tab",
                  href: "#work-exp",
                  role: "tab",
                  "aria-controls": "work-exp",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Work Experience"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              id: "nav-tabContent-basic-info",
              className: "jsx-1788442158" + " " + "tab-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "personal-info",
                role: "tabpanel",
                "aria-labelledby": "personal-info-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade show active",
                children: /*#__PURE__*/jsx_runtime_.jsx(personal_info/* default */.Z, {
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  hasDisabledFields: true,
                  children: props.personalInfo
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "educ",
                role: "tabpanel",
                "aria-labelledby": "educ-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(education/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  children: props.education
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "work-exp",
                role: "tabpanel",
                "aria-labelledby": "work-exp-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(work_experience/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  employment: props.employment,
                  children: props.workExperience
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: "accomplishments",
            role: "tabpanel",
            "aria-labelledby": "accomplishments-tab",
            className: "jsx-1788442158" + " " + "tab-pane fade",
            children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "jsx-1788442158",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                id: "nav-tab-accomplishment",
                role: "tablist",
                className: "jsx-1788442158" + " " + "nav nav-tabs nav-fill nav-justified",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "public-service-accomplishment-tab",
                  "data-toggle": "tab",
                  href: "#public-service-accomplishment",
                  role: "tab",
                  "aria-controls": "public-service-accomplishment",
                  "aria-selected": "true",
                  className: "jsx-1788442158" + " " + "nav-item nav-link active",
                  children: "Public Service Accomplishments"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "publication-tab",
                  "data-toggle": "tab",
                  href: "#publication",
                  role: "tab",
                  "aria-controls": "publication",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Publications"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "training-seminar-tab",
                  "data-toggle": "tab",
                  href: "#training-seminar",
                  role: "tab",
                  "aria-controls": "training-seminar",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Training/Seminars"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "licensure-exam-tab",
                  "data-toggle": "tab",
                  href: "#licensure-exam",
                  role: "tab",
                  "aria-controls": "licensure-exam",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Licensure Exams"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: "research-grant-tab",
                  "data-toggle": "tab",
                  href: "#research-grant",
                  role: "tab",
                  "aria-controls": "research-grant",
                  "aria-selected": "false",
                  className: "jsx-1788442158" + " " + "nav-item nav-link",
                  children: "Research Grants"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              id: "nav-tabContent-accomplishment",
              className: "jsx-1788442158" + " " + "tab-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "public-service-accomplishment",
                role: "tabpanel",
                "aria-labelledby": "public-service-accomplishment-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade show active",
                children: /*#__PURE__*/jsx_runtime_.jsx(public_service_accomplishment/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  children: props.publicService
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "publication",
                role: "tabpanel",
                "aria-labelledby": "publication-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(publication/* default */.Z, {
                  faculty: props.faculty,
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  facultyId: props.pathFacultyId,
                  role: props.data.role,
                  children: props.publications
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "training-seminar",
                role: "tabpanel",
                "aria-labelledby": "training-seminar-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(training_seminar/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  children: props.trainingSeminar
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "licensure-exam",
                role: "tabpanel",
                "aria-labelledby": "licensure-exam-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(licensure_exam/* default */.Z, {
                  name: props.name,
                  token: props.token.user,
                  unit: props.unit,
                  position: props.position,
                  children: props.licensureExam
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "research-grant",
                role: "tabpanel",
                "aria-labelledby": "research-grant-tab",
                className: "jsx-1788442158" + " " + "tab-pane fade",
                children: /*#__PURE__*/jsx_runtime_.jsx(research_grant/* default */.Z, {
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
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "SET",
            role: "tabpanel",
            "aria-labelledby": "SET-tab",
            className: "jsx-1788442158" + " " + "tab-pane fade",
            children: /*#__PURE__*/jsx_runtime_.jsx(faculty_load_table/* default */.Z, {
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
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1788442158",
        children: ["a.nav-item.jsx-1788442158:focus{background-color:#78b6c2;}", "a.nav-item.jsx-1788442158:hover{background-color:#78b6c2;}", "a.active.jsx-1788442158{background-color:#78b6c2;}", "a#basic-info-tab.active.jsx-1788442158{background-color:#78b6c2;}", "a#personal-info-tab.active.jsx-1788442158{background-color:#78b6c2;}", "a#public-service-accomplishment-tab.active.jsx-1788442158{background-color:#78b6c2;}", "nav.jsx-1788442158{background-color:#aaa;}", "nav#nav-tab-main.jsx-1788442158{background-color:#999;}", ".tab-content.jsx-1788442158{background-color:#fff;}"]
      })]
    });
  }
}

async function getServerSideProps(context) {
  const token = (0,helpers/* parseCookies */.j)(context.req);

  if (context.res) {
    if ((0,helpers/* isExpired */.B)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
  }

  let data = external_jsonwebtoken_default().decode(token.user);
  let userFacultyId = data.facultyId;
  let facultyId;
  let status = '?status=';
  let facultyLoad;

  if (context.params.facultyId != userFacultyId && (data.role == 2 || data.role == 3)) {
    facultyId = context.params.facultyId;
  } else {
    return {
      redirect: {
        destination: '/faculty',
        permanent: true
      }
    };
  }

  let url = "http://localhost:3001/api" + '/faculty/accomplishment/' + facultyId;
  let header = {
    headers: {
      'Authorization': 'Bearer ' + token.user
    }
  };
  const employment = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/employment', header);
  const employmentInfo = await employment.json();
  let unit = employmentInfo.result.faculty_unit.unit.unit;
  let position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position;
  const load = await fetch("http://localhost:3001/api" + '/faculty/load/' + facultyId, header);
  facultyLoad = await load.json();
  const personal = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId, header);
  const personalInfo = await personal.json();
  let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName;
  const educ = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/education' + status, header);
  let education = await educ.json();
  const work = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId + '/work-exp', header);
  let workExperience = await work.json();
  const fac = await fetch("http://localhost:3001/api" + '/faculty/basic-info/list/all?facultyId=' + facultyId, header);
  const faculty = await fac.json();
  const psa = await fetch(url + '/public-service' + status, header);
  const publicService = await psa.json();
  const pub = await fetch(url + '/publication' + status, header);
  const publications = await pub.json();
  const ts = await fetch(url + '/training-seminar' + status, header);
  const trainingSeminar = await ts.json();
  const le = await fetch(url + '/licensure-exam' + status, header);
  const licensureExam = await le.json();
  const rg = await fetch(url + '/research-grant' + status, header);
  const researchGrant = await rg.json();
  let approvalList;
  let approvalURL = "http://localhost:3001/api" + '/faculty/approval/' + userFacultyId;
  let roleAssignmentFlag = false;
  let roleAssignmentURL = "http://localhost:3001/api" + '/faculty/basic-info/unit/assignment';

  if (data.role == 2 || data.role == 3) {
    if (data.role == 2) {
      approvalURL += '?unitId=' + data.unitId;
      roleAssignmentURL += '?unitId=' + data.unitId;
    }

    const approval = await fetch(approvalURL, header);
    approvalList = await approval.json();
    const roleAssignments = await fetch(roleAssignmentURL, header);
    let roleAssignmentList = await roleAssignments.json();
    roleAssignmentList = roleAssignmentList.result;

    if (data.role == 2) {
      if (roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
    } else if (data.role == 3 && roleAssignmentList) {
      roleAssignmentFlag = true;
    }
  }

  return {
    props: {
      token: token && token,
      data: data,
      name,
      unit,
      position,
      facultyLoad: facultyLoad.result,
      pathFacultyId: context.params.facultyId,
      faculty: faculty.result,
      personalInfo: personalInfo.result,
      education: education.result,
      employment: employmentInfo.result,
      workExperience: workExperience.result,
      publicService: publicService.result,
      publications: publications.result,
      trainingSeminar: trainingSeminar.result,
      licensureExam: licensureExam.result,
      researchGrant: researchGrant.result,
      approvalList: approvalList.result,
      roleAssignmentFlag
    }
  };
}
/* harmony default export */ var _facultyId_ = (ViewFaculty);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752,429,939,798,992,147,689], function() { return __webpack_exec__(8163); });
module.exports = __webpack_exports__;

})();