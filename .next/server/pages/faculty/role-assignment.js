(function() {
var exports = {};
exports.id = 49;
exports.ids = [49];
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

/***/ 5372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ role_assignment; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./services/faculty/assignments/updateUnitAssignment.js

async function updateUnitAssignment(updatedUser, unitId, token) {
  try {
    if (token) {
      let response;
      if (updatedUser == '0') updatedUser = null;
      let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/unit/' + unitId;
      response = await external_axios_default()({
        method: 'PUT',
        url: url,
        data: {
          incomingUnitHead: updatedUser,
          approverRemarks: null
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
;// CONCATENATED MODULE: ./components/unit-head/assign-unit-head.js






function AssignUnitHead(props) {
  let faculty;

  if (props.children != null) {
    faculty = Object.keys(props.facultyListInfo).map(key => {
      let selected = false;

      if (props.facultyListInfo[key].faculty_personal_info) {
        if (props.facultyListInfo[key].facultyId == props.children.incomingUnitHead) {
          selected = true;
        }

        return /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: props.facultyListInfo[key].facultyId,
          selected: selected,
          children: props.facultyListInfo[key].faculty_personal_info.lastName + ', ' + props.facultyListInfo[key].faculty_personal_info.firstName
        });
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Unit Head Assignment "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "assignalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "NOTE: Changing the value on the dropdown will automatically update the value of the incoming unit head and notify the department chair for possible approval"
      }), /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Incoming Unit Head"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Status"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Approver Remarks"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("form", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                  name: "faculty",
                  className: "form-control",
                  id: "faculty",
                  onChange: async () => {
                    let alert = document.getElementById("assignalert");
                    let incomingUnitHead = document.getElementById('faculty').value;
                    let res = await updateUnitAssignment(incomingUnitHead, props.children.unitId, props.token);

                    if (res.success == true) {
                      alert.className = "alert alert-success";
                      alert.style = "visibility: visible";
                      alert.innerHTML = res.message;
                    } else {
                      alert.className = "alert alert-danger";
                      alert.style = "visibility: visible";
                      if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                    }

                    $("#assignalert").fadeTo(5000, 500).slideUp(500, function () {
                      $("#assignalert").slideUp(500);
                    });
                    router_default().push('/faculty/role-assignment', '/faculty/role-assignment');
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: "0",
                    children: "--SELECT FACULTY--"
                  }), faculty]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: props.children.approverRemarks ? 'Rejected' : 'Pending'
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: props.children.approverRemarks || 'None'
            })]
          }, props.children.unitId)]
        })
      })]
    })]
  });
}

/* harmony default export */ var assign_unit_head = (AssignUnitHead);
;// CONCATENATED MODULE: ./services/faculty/assignments/approveUnitHead.js

async function approveUnitHead(currentUser, incomingUser, unitId, remarks, token) {
  try {
    if (token) {
      if (!remarks) {
        let url = 'https://api.dpsmqaportal.com/api/user/' + currentUser;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url,
          data: {
            role: '1'
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success == true) {
          let url = 'https://api.dpsmqaportal.com/api/user/' + incomingUser;
          const response = await external_axios_default()({
            method: 'PUT',
            url: url,
            data: {
              role: '2'
            },
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          });

          if (response.data.success == true) {
            let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/unit/' + unitId;
            const response = await external_axios_default()({
              method: 'PUT',
              url: url,
              data: {
                incomingUnitHead: null
              },
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            });
          }

          return response.data;
        }
      } else {
        let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/unit/' + unitId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url,
          data: {
            approverRemarks: remarks
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./components/dept-chair/role-assignment/approve-unit-head.js





function ApproveUnitHead(props) {
  let content;
  let currentUser = 0;
  let incomingUser = 0;
  let unitId = 0;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      let currentUnitHead = props.children[key].currentUnitHead.faculty_personal_info.lastName + ', ' + props.children[key].currentUnitHead.faculty_personal_info.firstName;
      let incomingUnitHead = props.children[key].faculty_personal_info.lastName + ', ' + props.children[key].faculty_personal_info.firstName;
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].unit
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: currentUnitHead
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: incomingUnitHead
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-group",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#approveUnitHead",
              onClick: () => {
                setApprove(props.children[key].currentUnitHead.faculty_personal_info.user.userId, props.children[key].faculty_personal_info.user.userId, props.children[key].unitId);
              },
              children: "Approve"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#rejectUnitHead",
              onClick: () => {
                setApprove(props.children[key].currentUnitHead.faculty_personal_info.user.userId, props.children[key].faculty_personal_info.user.userId, props.children[key].unitId);
              },
              children: "Reject"
            })]
          })
        })]
      }, props.children[key].unitId);
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("tr", {
      children: /*#__PURE__*/jsx_runtime_.jsx("td", {
        colSpan: "4",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          align: "center",
          children: "No data available!"
        })
      })
    });
  }

  function setApprove(current, incoming, unit) {
    currentUser = current;
    incomingUser = incoming;
    unitId = unit;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Unit Head Assignment "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "assignalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Unit"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Current Unit Head"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Incoming Unit Head"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          }), content]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approveUnitHead",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveUnitHeadLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "modal-title",
              id: "approveUnitHeadLabel",
              children: "Approve Unit Head Change"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: " Are you sure you want to approve the change in unit head role? "
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't approve"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("assignalert");
                $('#approveUnitHead').modal('toggle');
                let res = await approveUnitHead(currentUser, incomingUser, unitId, false, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#assignalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#assignalert").slideUp(500);
                });
                router_default().push('/faculty/role-assignment', '/faculty/role-assignment');
              },
              children: "Yes, approve"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "rejectUnitHead",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectUnitHeadLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "modal-title",
              id: "rejectUnitHeadLabel",
              children: "Reject Unit Head Change"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: " Are you sure you want to reject this change in unit head? "
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "form-row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "approverRemarks",
                  children: " Reason/Remarks for Rejection "
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "form-control",
                  type: "text",
                  name: "approverRemarks",
                  id: "approverRemarks",
                  placeholder: "Input remarks",
                  required: true
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't reject"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("assignalert");
                $('#rejectUnitHead').modal('toggle');
                let remarks = document.getElementById('approverRemarks').value;
                let res = await approveUnitHead(currentUser, incomingUser, unitId, remarks, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#assignalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#assignalert").slideUp(500);
                });
                router_default().push('/faculty/role-assignment', '/faculty/role-assignment');
              },
              children: "Yes, reject"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var approve_unit_head = (ApproveUnitHead);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./services/faculty/assignments/deleteClerk.js


async function deleteClerk(userId, token) {
  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/user/admin/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./services/faculty/assignments/addClerk.js

async function addClerk(formData, token) {
  try {
    if (token) {
      try {
        formData.append('password', 'password');
        formData.append('role', '5');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/user/add',
          data: formData,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
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
;// CONCATENATED MODULE: ./components/dept-chair/role-assignment/clerk-form.js







class ClerkForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ClerkDetails = {
      name: "",
      upemail: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: ClerkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("clerkalert");
        let form = document.getElementById('clerkForm');
        let formData = new FormData(form);
        let res = await addClerk(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#clerkalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#clerkalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/role-assignment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "clerkForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ClerkName[]",
              children: " Name "
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              name: "name",
              placeholder: "Input name",
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ClerkEmail[]",
              children: " UP Email Address "
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "email",
              name: "upemail",
              placeholder: "Input UP Email",
              required: true
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Add Clerk"
        })]
      })
    });
  }

}

/* harmony default export */ var clerk_form = (ClerkForm);
;// CONCATENATED MODULE: ./components/dept-chair/role-assignment/assign-admin-clerk.js








function AssignAdminClerk(props) {
  let content;
  let clerkId = 0;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].name
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "btn-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deleteClerk",
              onClick: () => {
                setDelete(props.children[key].userId);
              },
              children: "Delete"
            })
          })
        })]
      }, props.children[key].userId);
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "2",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setDelete(id) {
    clerkId = id;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Admin Clerk Assignment "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "clerkalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          }), content]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(clerk_form, {
      token: props.token
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "deleteClerk",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteClerkLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "modal-title",
              id: "deleteClerkLabel",
              children: "Delete Admin Clerk"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: " Are you sure you want to delete this admin clerk? "
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("clerkalert");
                $('#deleteClerk').modal('toggle');
                let res = await deleteClerk(clerkId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#clerkalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#clerkalert").slideUp(500);
                });
                router_default().push('/faculty/role-assignment', '/faculty/role-assignment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var assign_admin_clerk = (AssignAdminClerk);
;// CONCATENATED MODULE: ./services/faculty/assignments/assignDeptChair.js


async function assignDeptChair(incomingDeptChair, token) {
  try {
    if (token) {
      let cookieData = external_jsonwebtoken_default().decode(token);
      let userId = cookieData.userId;
      let url = 'https://api.dpsmqaportal.com/api/user/' + userId;
      const response = await external_axios_default()({
        method: 'PUT',
        url: url,
        data: {
          role: '1'
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success == true) {
        let url = 'https://api.dpsmqaportal.com/api/user/' + incomingDeptChair;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url,
          data: {
            role: '3'
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/dept-chair/role-assignment/assign-dept-chair.js






function AssignDeptChair(props) {
  let faculty;

  if (props.children != null) {
    faculty = Object.keys(props.children).map(key => // [
    // 	{value: this.props.faculty[key].userId, label: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}
    // ]
    {
      return /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: props.children[key].userId,
        children: props.children[key].lastName + ', ' + props.children[key].firstName
      }, props.children[key].userId);
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Department Chair Assignment "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "deptchairalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jumbotron",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group col-md-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "deptChair",
          children: " Select New Department Chair "
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
          className: "col-md-8",
          name: "deptChair",
          id: "deptChair",
          options: faculty,
          required: true
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-danger",
        "data-toggle": "modal",
        "data-target": "#assignDeptChair",
        children: "Assign New Department Chair"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "assignDeptChair",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "assignDeptChairLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "modal-title",
              id: "assignDeptChairLabel",
              children: "Assign New Department Chair"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Are you sure you want to assign this user as the new department chair? You will lose access to all department chair-specific functionalities, and the user you assigned will gain access to said functionalities. Once you finalize this decision, you will be logged out immediately, and your account will be reverted to a standard faculty account when you log in again."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't assign"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("deptchairalert");
                $('#assignDeptChair').modal('toggle');
                let incomingDeptChair = document.getElementById('deptChair').value;

                if (incomingDeptChair != 0) {
                  let res = await assignDeptChair(incomingDeptChair, props.token);

                  if (res.success == true) {
                    alert.className = "alert alert-success";
                    alert.style = "visibility: visible";
                    alert.innerHTML = res.message;
                    $("#deptchairalert").fadeTo(5000, 500).slideUp(500, function () {
                      $("#deptchairalert").slideUp(500);
                      router_default().push('/login', '/login');
                    });
                  } else {
                    alert.className = "alert alert-danger";
                    if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                    $("#deptchairalert").fadeTo(5000, 500).slideUp(500, function () {
                      $("#deptchairalert").slideUp(500);
                    });
                    router_default().push('/faculty/role-assignment', '/faculty/role-assignment');
                  }
                }
              },
              children: "Yes, assign"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var assign_dept_chair = (AssignDeptChair);
;// CONCATENATED MODULE: ./pages/faculty/role-assignment.js











function RoleAssignment(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.data.name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [props.data.role == 3 && /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-3469655085",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-3469655085" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          id: "unit-head-tab",
          "data-toggle": "tab",
          href: "#unit-head",
          role: "tab",
          "aria-controls": "unit-head",
          "aria-selected": "true",
          className: "jsx-3469655085" + " " + "nav-item nav-link active",
          children: ["Unit Head Assignment ", props.roleAssignmentFlag && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "jsx-3469655085" + " " + "badge badge-danger",
            children: "!"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "admin-clerk-tab",
          "data-toggle": "tab",
          href: "#admin-clerk",
          role: "tab",
          "aria-controls": "admin-clerk",
          "aria-selected": "false",
          className: "jsx-3469655085" + " " + "nav-item nav-link",
          children: "Admin Clerk Assignment"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "dept-chair-tab",
          "data-toggle": "tab",
          href: "#dept-chair",
          role: "tab",
          "aria-controls": "dept-chair",
          "aria-selected": "false",
          className: "jsx-3469655085" + " " + "nav-item nav-link",
          children: "Department Chair Assignment"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3469655085"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3469655085"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "nav-tabContent",
      className: "jsx-3469655085" + " " + "tab-content",
      children: [props.data.role == 2 && /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "unit-head",
        role: "tabpanel",
        "aria-labelledby": "unit-head-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(assign_unit_head, {
          token: props.token.user,
          role: props.data.role,
          facultyListInfo: props.facultyListInfo,
          children: props.roleAssignmentList
        })
      }), props.data.role == 3 && /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "unit-head",
        role: "tabpanel",
        "aria-labelledby": "unit-head-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/jsx_runtime_.jsx(approve_unit_head, {
          token: props.token.user,
          role: props.data.role,
          children: props.roleAssignmentList
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "admin-clerk",
        role: "tabpanel",
        "aria-labelledby": "admin-clerk-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(assign_admin_clerk, {
          token: props.token.user,
          role: props.data.role,
          children: props.clerkAssignmentList
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "dept-chair",
        role: "tabpanel",
        "aria-labelledby": "dept-chair-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade",
        children: /*#__PURE__*/jsx_runtime_.jsx(assign_dept_chair, {
          token: props.token.user,
          role: props.data.role,
          children: props.facultyListInfo
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3469655085",
      children: ["a.nav-item.jsx-3469655085:focus{background-color:#78b6c2;}", "a.nav-item.jsx-3469655085:hover{background-color:#78b6c2;}", "a.active.jsx-3469655085{background-color:#78b6c2;}"]
    })]
  });
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
  let roleAssignmentList;
  let facultyListInfo;
  let clerkAssignmentList;

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
      let clerkAssignmentURL = 'https://api.dpsmqaportal.com/api/user/admin';

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
        roleAssignmentList = await roleAssignments.json();
        roleAssignmentList = roleAssignmentList.result;
        const clerkAssignments = await fetch(clerkAssignmentURL, header);
        clerkAssignmentList = await clerkAssignments.json();
        clerkAssignmentList = clerkAssignmentList.result;

        if (data.role == 2) {
          if (roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
          const faculty = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info?unitId=' + data.unitId + '&facultyId=' + facultyId, header);
          facultyListInfo = await faculty.json();
          facultyListInfo = facultyListInfo.result[0].faculty_units;
        } else if (data.role == 3) {
          if (roleAssignmentList) roleAssignmentFlag = true;
          const faculty = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/list/all?facultyId=' + facultyId, header);
          facultyListInfo = await faculty.json();
          facultyListInfo = facultyListInfo.result;
        }
      } else if (data.role == 1) {
        return {
          redirect: {
            destination: '/faculty/basic-info',
            permanent: true
          }
        };
      }
    }
  }

  return {
    props: {
      token: token && token,
      data,
      personalInfo: personalInfo.result,
      approvalList: approvalList,
      accompList,
      empList,
      educList,
      roleAssignmentFlag,
      roleAssignmentList,
      facultyListInfo: facultyListInfo || null,
      clerkAssignmentList
    }
  };
}
/* harmony default export */ var role_assignment = (RoleAssignment);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,287,752], function() { return __webpack_exec__(5372); });
module.exports = __webpack_exports__;

})();