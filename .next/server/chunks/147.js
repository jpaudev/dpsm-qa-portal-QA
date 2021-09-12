exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 1538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ employment_history; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
;// CONCATENATED MODULE: ./services/faculty/basic-info/updateEmployment.js


async function updateEmployment(data, token, facultyId) {
  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
      let bod = {
        employmentInfoId: `${data.employmentInfoId}`,
        startDate: `${data.startDate}`
      };
      if (data.endDate == "" || data.endDate == null) bod.endDate = null;else bod.endDate = `${data.endDate}`;

      try {
        const response = await external_axios_default().put(url + "/employment", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/basic-info/deleteEmployment.js

async function deleteEmployment(data, token, facultyId) {
  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/basic-info/" + facultyId + "/employment", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            employmentInfoId: `${data}`
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/employment-history.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function EmploymentHistory(props) {
  const [currData, setData] = external_react_default().useState({
    employmentInfoId: 0,
    startDate: '',
    endDate: ''
  });
  let empInfoId;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children.faculty_employment_infos).map(key => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children.faculty_employment_infos[key].faculty_employment_position.position
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children.faculty_employment_infos[key].status
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children.faculty_employment_infos[key].category
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children.faculty_employment_infos[key].startDate
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children.faculty_employment_infos[key].endDate || 'Present'
        }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editEmployment",
              onClick: () => {
                empInfoId = props.children.faculty_employment_infos[key].employmentInfoId;
                setKey(props.children.faculty_employment_infos[key].employmentInfoId);
              },
              children: "Edit"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deleteEmployment",
              onClick: () => {
                empInfoId = props.children.faculty_employment_infos[key].employmentInfoId;
              },
              children: "Delete"
            })]
          })
        })]
      }, props.children.faculty_employment_infos[key].employmentInfoId);
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "5",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setKey(x) {
    Object.keys(props.children.faculty_employment_infos).map(key => {
      if (props.children.faculty_employment_infos[key].employmentInfoId == x) {
        setData(props.children.faculty_employment_infos[key]);

        if (props.children.faculty_employment_infos[key].endDate == "" || props.children.faculty_employment_infos[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "employmentalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-responsive",
      children: /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Position"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Status"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Category"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "End Date"
            }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          }), content]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editEmployment",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editEmploymentLabel",
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
              id: "editEmploymentLabel",
              children: "Update Employment Information"
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
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "startDate",
                    children: " Start Date "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "date",
                    className: "form-control",
                    name: "startDate",
                    defaultValue: currData.startDate,
                    onChange: e => handleInputChange("startDate", e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "endDate",
                    children: " End Date "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "date",
                    className: "form-control",
                    name: "endDate",
                    defaultValue: currData.endDate,
                    onChange: e => handleInputChange("endDate", e)
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editEmployment').modal('toggle');
                let alert = document.getElementById("employmentalert");
                let res = await updateEmployment(currData, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#employmentalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#employmentalert").slideUp(500);
                });
                router_default().push('/admin/' + props.facultyId);
              },
              children: "Save changes"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "deleteEmployment",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteEmploymentLabel",
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
              id: "deleteEmploymentLabel",
              children: "Delete Employment Information"
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
              children: " Are you sure you want to delete this employment information? "
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
              onClick: async () => {
                let alert = document.getElementById("employmentalert");
                $('#deleteEmployment').modal('toggle');
                let res = await deleteEmployment(empInfoId, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#employmentalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#employmentalert").slideUp(500);
                });
                router_default().push('/admin/' + props.facultyId, '/admin/' + props.facultyId);
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var employment_history = (EmploymentHistory);

/***/ }),

/***/ 8832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ personal_info; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/faculty/basic-info/personal-info-dependents.js





 // import addDependent from '../../../services/faculty/basic-info/addDependent'

class PersonalInfoDependents extends (external_react_default()).Component {
  constructor() {
    super();
    this.state = {
      duplicateForms: []
    };
  }

  clone() {
    this.state.duplicateForms.push( /*#__PURE__*/_jsxs("div", {
      className: "jsx-3678425261",
      children: [/*#__PURE__*/_jsx("hr", {
        className: "jsx-3678425261"
      }), /*#__PURE__*/_jsxs("div", {
        className: "jsx-3678425261" + " " + "form-row",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4",
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "DependentName[]",
            className: "jsx-3678425261",
            children: " Name "
          }), /*#__PURE__*/_jsx("input", {
            type: "text",
            name: "DependentName[]",
            placeholder: "Input name of dependent",
            className: "jsx-3678425261" + " " + "form-control"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4",
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "DependentDateOfBirth[]",
            className: "jsx-3678425261",
            children: " Date of Birth "
          }), /*#__PURE__*/_jsx("input", {
            type: "date",
            name: "DependentDateOfBirth[]",
            className: "jsx-3678425261" + " " + "form-control"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4 required",
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "DependentRelationship[]",
            className: "jsx-3678425261" + " " + "control-label",
            children: " Relationship to User "
          }), /*#__PURE__*/_jsx("input", {
            type: "text",
            name: "DependentRelationship[]",
            className: "jsx-3678425261" + " " + "form-control"
          })]
        })]
      }), /*#__PURE__*/_jsx(_JSXStyle, {
        id: "3678425261",
        children: ["hr.jsx-3678425261{border:1px solid black;}"]
      })]
    }));
    this.setState({});
  }

  remove() {
    this.state.duplicateForms.pop();
    this.setState({});
  }

  render() {
    let DependentDetails = {
      name: "",
      birthDate: "",
      relationship: ""
    };
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("hr", {}), /*#__PURE__*/_jsxs("div", {
        className: "form-row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-auto",
          children: /*#__PURE__*/_jsx("button", {
            type: "button",
            className: "btn btn-primary",
            id: "AddDependent",
            onClick: () => this.clone(),
            children: " Add Dependent "
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-auto",
          children: /*#__PURE__*/_jsx("button", {
            type: "button",
            className: "btn btn-danger",
            id: "RemoveDependent",
            onClick: () => this.remove(),
            children: " Remove a Row "
          })
        })]
      }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs("div", {
        className: "form-row",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "form-group col-md-4",
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "DependentName[]",
            children: " Name "
          }), /*#__PURE__*/_jsx(Field, {
            className: "form-control",
            type: "text",
            name: "name",
            placeholder: "Input name of dependent",
            id: "name"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "form-group col-md-4",
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "DependentDateOfBirth[]",
            children: " Date of Birth "
          }), /*#__PURE__*/_jsx(Field, {
            type: "date",
            className: "form-control",
            name: "birthDate",
            id: "birthDate"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/_jsx("label", {
            className: "control-label",
            htmlFor: "DependentRelationship[]",
            children: " Relationship to User "
          }), /*#__PURE__*/_jsx(Field, {
            className: "form-control",
            type: "text",
            name: "relationship",
            id: "relationship"
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        id: "Dependents",
        children: this.state.duplicateForms
      })]
    }) //             <button
    //                 type = "submit"
    //                 className = "btn btn-primary"
    //                 disabled = {isSubmitting}
    //             >
    //                 Submit
    //             </button>
    //         </Form>
    //     // )}
    // </Formik>
    ;
  }

}

/* harmony default export */ var personal_info_dependents = ((/* unused pure expression or super */ null && (PersonalInfoDependents)));
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(4750);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./services/faculty/basic-info/updateFaculty.js


async function updateFaculty(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      try {
        const response = await external_axios_default().put(url + "/personal", {
          lastName: `${data.lastName}`,
          middleName: `${data.middleName}`,
          suffix: `${data.suffix}`,
          permanentAddress: `${data.permanentAddress}`,
          presentAddress: `${data.presentAddress}`,
          mobile: `${data.mobile}`,
          landline: `${data.landline}`,
          email: `${data.email}`,
          civilStatus: `${data.civilStatus}`,
          religion: `${data.religion}`,
          emergencyContactPerson: `${data.emergencyContactPerson}`,
          emergencyContactNumber: `${data.emergencyContactNumber}`,
          teachingPhilosophy: `${data.philosophy}`
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/admin/addFaculty.js


async function addFaculty(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/user/add';
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      try {
        let body = {
          "role": "1",
          "upemail": `${data.upemail}`,
          "password": "password",
          "personalInfo": {
            firstName: `${data.firstName}`,
            lastName: `${data.lastName}`,
            middleName: `${data.middleName}`,
            suffix: `${data.suffix}`,
            gender: `${data.gender}`,
            dateOfBirth: `${data.dateOfBirth}`,
            placeOfBirth: `${data.placeOfBirth}`,
            permanentAddress: `${data.permanentAddress}`,
            presentAddress: `${data.presentAddress}`,
            mobile: `${data.mobile}`,
            landline: `${data.landline}`,
            email: `${data.email}`,
            civilStatus: `${data.civilStatus}`,
            religion: `${data.religion}`,
            emergencyContactPerson: `${data.emergencyContactPerson}`,
            emergencyContactNumber: `${data.emergencyContactNumber}`,
            teachingPhilosophy: `${data.philosophy}`
          },
          "unitId": `${data.unit}`,
          "employmentPositionId": `${data.employmentPosition}`,
          "status": `${data.status}`,
          "category": `${data.category}`,
          "startDate": `${data.startDate}`
        };
        const response = await external_axios_default().post(url, body);
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./components/faculty/basic-info/personal-info.js













function PersonalInfo(props) {
  let FacultyDetails;
  let name;
  let dependents;
  let res;
  let positions = [];

  if (props.children != null) {
    FacultyDetails = {
      firstName: props.children.firstName,
      lastName: props.children.lastName,
      middleName: props.children.middleName,
      gender: props.children.gender,
      dateOfBirth: props.children.dateOfBirth,
      placeOfBirth: props.children.placeOfBirth,
      permanentAddress: props.children.permanentAddress,
      presentAddress: props.children.presentAddress,
      mobile: props.children.mobile,
      landline: props.children.landline,
      email: props.children.email,
      upemail: props.email,
      civilStatus: props.children.civilStatus,
      religion: props.children.religion,
      emergencyContactPerson: props.children.emergencyContactPerson,
      emergencyContactNumber: props.children.emergencyContactNumber,
      suffix: props.children.suffix,
      faculty_dependents: props.children.faculty_dependents,
      philosophy: props.children.teachingPhilosophy
    };
    name = props.children.lastName + ', ' + props.children.firstName;
    dependents = Object.keys(props.children.faculty_dependents).map(key => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "control-label",
            htmlFor: "Dependent",
            children: " Name of Dependent "
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "text",
            name: "name",
            defaultValue: props.children.faculty_dependents[key].name,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "control-label",
            htmlFor: "DependentDateOfBirth",
            children: " Date of Birth "
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "date",
            name: "birthDate",
            defaultValue: props.children.faculty_dependents[key].birthDate,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "control-label",
            htmlFor: "DependentRelationship[]",
            children: " Relationship to User "
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "text",
            name: "relationship",
            defaultValue: props.children.faculty_dependents[key].relationship,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          })]
        })]
      });
    });
  } else {
    FacultyDetails = {
      clerk: '',
      firstName: '',
      lastName: '',
      middleName: '',
      gender: 'Male',
      dateOfBirth: '',
      placeOfBirth: '',
      permanentAddress: '',
      presentAddress: '',
      mobile: '',
      landline: '',
      email: '',
      civilStatus: 'single',
      religion: '',
      emergencyContactPerson: '',
      emergencyContactNumber: '',
      suffix: '',
      faculty_dependents: '',
      upemail: '',
      unit: '1',
      employmentPosition: '1',
      startDate: '',
      philosophy: '',
      status: '',
      category: ''
    };
    props.positions.forEach(key => {
      positions.push( /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: key.employmentPositionId,
        children: key.position
      }));
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2179700803",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      className: "jsx-2179700803",
      children: " Personal Information "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: FacultyDetails,
      onSubmit: async (values, token) => {
        if (props.clerkFlag) {
          res = await addFaculty(values, props.token);
        } else {
          res = await updateFaculty(values, props.token);
        }

        let alert = document.getElementById("alert");

        if (res.success == true) {
          alert.className = "alert alert-success";
          values.message = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#alert").fadeTo(5000, 500).slideUp(500, function () {
          $("#alert").slideUp(500);
        });

        if (props.clerkFlag) {
          router_default().push('/admin/faculty');

          if (res.success == true) {
            window.setTimeout(function () {
              window.location.href = "/admin";
            }, 5000);
          }
        } else {
          router_default().push('/faculty/basic-info');
        }
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          role: "alert",
          id: "alert",
          className: "jsx-2179700803",
          children: values.message
        }), props.facultyFlag && /*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "jsx-2179700803",
          children: "Required"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2179700803"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "FirstName",
              className: "jsx-2179700803" + " " + "control-label",
              children: " First Name "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "firstName",
              defaultValue: FacultyDetails.firstName,
              disabled: !props.clerkFlag,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "MiddleName",
              className: "jsx-2179700803",
              children: " Middle Name "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "middleName",
              defaultValue: FacultyDetails.middleName,
              disabled: !props.facultyFlag && !props.clerkFlag
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LastName",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Last Name "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "lastName",
              defaultValue: FacultyDetails.lastName,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Suffix",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Suffix "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "suffix",
              defaultValue: FacultyDetails.suffix,
              disabled: !props.facultyFlag && !props.clerkFlag
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Sex",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Sex (at birth) "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "gender",
              defaultValue: FacultyDetails.gender,
              disabled: !props.clerkFlag,
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Male",
                className: "jsx-2179700803",
                children: "Male"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Female",
                className: "jsx-2179700803",
                children: "Female"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "DateOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Date of Birth "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "date",
              name: "dateOfBirth",
              defaultValue: FacultyDetails.dateOfBirth,
              disabled: !props.clerkFlag,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PlaceOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Place of Birth "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "placeOfBirth",
              defaultValue: FacultyDetails.placeOfBirth,
              disabled: !props.clerkFlag,
              required: true
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2179700803"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "PresentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Present Address "
          }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
            className: "form-control",
            type: "text",
            name: "presentAddress",
            defaultValue: FacultyDetails.presentAddress,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "PermanentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Permanent Address "
          }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
            className: "form-control",
            type: "text",
            name: "permanentAddress",
            defaultValue: FacultyDetails.permanentAddress,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "CivilStatus",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Civil Status "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "civilStatus",
              defaultValue: FacultyDetails.civilStatus,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "single",
                className: "jsx-2179700803",
                children: "Single"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "married",
                className: "jsx-2179700803",
                children: "Married"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "separated",
                className: "jsx-2179700803",
                children: "Separated (Legally)"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "divorced",
                className: "jsx-2179700803",
                children: "Divorced"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "widowed",
                className: "jsx-2179700803",
                children: "Widowed"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Religion",
              className: "jsx-2179700803",
              children: " Religion "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "religion",
              defaultValue: FacultyDetails.religion,
              disabled: !props.facultyFlag && !props.clerkFlag
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Landline) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "tel",
              name: "landline",
              pattern: "[0-9]{8}",
              defaultValue: FacultyDetails.landline,
              disabled: !props.facultyFlag && !props.clerkFlag
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Mobile) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "tel",
              name: "mobile",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.mobile,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EmailAddressAlt",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Personal E-mail Address "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "email",
              name: "email",
              defaultValue: FacultyDetails.email,
              disabled: !props.facultyFlag && !props.clerkFlag
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "UPEmail",
              className: "jsx-2179700803" + " " + "control-label",
              children: " UP E-mail "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "email",
              name: "upemail",
              defaultValue: FacultyDetails.email,
              disabled: "true"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EmergencyContact",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Emergency Contact "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "emergencyContactPerson",
              defaultValue: FacultyDetails.emergencyContactPerson,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EmergencyContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Emergency Contact Number "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "tel",
              name: "emergencyContactNumber",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.emergencyContactNumber,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-12 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "philosophy",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Teaching Philosophy "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              component: "textarea",
              rows: 5,
              name: "philosophy",
              defaultValue: FacultyDetails.philosophy,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2179700803"
        }), props.clerkFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2179700803",
          children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
            className: "jsx-2179700803"
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            className: "jsx-2179700803",
            children: "Employment Info"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "EmailAddressAlt",
                className: "jsx-2179700803" + " " + "control-label",
                children: " UP E-mail "
              }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                className: "form-control",
                type: "email",
                name: "upemail",
                defaultValue: FacultyDetails.email,
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "Unit",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Unit "
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
                as: "select",
                className: "form-control",
                name: "unit",
                defaultValue: FacultyDetails.unit,
                required: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "1",
                  className: "jsx-2179700803",
                  children: "Chemistry Unit"
                }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "2",
                  className: "jsx-2179700803",
                  children: "Mathematical and Computing Sciences Unit"
                }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "3",
                  className: "jsx-2179700803",
                  children: "Physics and Geology Unit"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "Status",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Status "
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
                as: "select",
                className: "form-control",
                name: "status",
                defaultValue: FacultyDetails.status,
                required: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Full-time",
                  className: "jsx-2179700803",
                  children: "Full-time"
                }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Part-time",
                  className: "jsx-2179700803",
                  children: "Part-time"
                }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Lecturer",
                  className: "jsx-2179700803",
                  children: "Lecturer"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "Category",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Category "
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
                as: "select",
                className: "form-control",
                name: "category",
                defaultValue: FacultyDetails.category,
                required: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Permanent",
                  className: "jsx-2179700803",
                  children: "Permanent"
                }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Temporary",
                  className: "jsx-2179700803",
                  children: "Temporary"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2179700803" + " " + "form-row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "EmploymentPosition",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Employment Position "
              }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                as: "select",
                className: "form-control",
                name: "employmentPosition",
                defaultValue: FacultyDetails.employmentPosition,
                required: true,
                children: positions
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "StartDate",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Start Date "
              }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                className: "form-control",
                type: "date",
                name: "startDate",
                defaultValue: FacultyDetails.StartDate,
                required: true
              })]
            })]
          })]
        }), props.facultyFlag && /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary col-md-12",
          children: " Update "
        }), props.clerkFlag && /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary col-md-12",
          children: " Add Faculty "
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2179700803"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2179700803",
      children: [".form-group.required.jsx-2179700803 .control-label.jsx-2179700803:after{content:\"*\";color:#f00;}", "h6.jsx-2179700803:before{content:\"* \";color:#f00;}", "#alert.jsx-2179700803{visibility:hidden;}"]
    })]
  });
}

/* harmony default export */ var personal_info = (PersonalInfo);

/***/ }),

/***/ 7849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ work_experience; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./services/faculty/basic-info/addWorkExp.js


async function addWorkExp(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let bod = null;

      if (`${data.endDate}` == "") {
        bod = {
          facultyId: `${facultyId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          description: `${data.description}`
        };
      } else {
        bod = {
          facultyId: `${facultyId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          endDate: `${data.endDate}`,
          description: `${data.description}`
        };
      }

      try {
        const response = await external_axios_default().post("https://api.dpsmqaportal.com/api/faculty/basic-info/add/work-exp", bod, {
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/work-exp-form.js







class WorkExpForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let WorkDetails = {
      employerName: "",
      position: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: WorkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("workexpalert");
        let res = await addWorkExp(values, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#workexpalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/basic-info', '/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EmployerWorkExperience[]",
              children: " Employer "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "employerName",
              placeholder: "Input name of employer"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PositionWorkExperience[]",
              children: " Title/Position "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "position",
              placeholder: "Input position"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "DescriptionWorkExperience[]",
              children: " Description "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "description",
              placeholder: "Add Description"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "StartDateWorkExperience[]",
              children: " Start Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "startDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EndDateWorkExperience[]",
              children: " End Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "endDate"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          className: "btn btn-primary col-md-12",
          disabled: isSubmitting,
          children: "Submit"
        })]
      })
    });
  }

}

/* harmony default export */ var work_exp_form = (WorkExpForm);
// EXTERNAL MODULE: ./components/faculty/basic-info/employment-history.js + 2 modules
var employment_history = __webpack_require__(1538);
;// CONCATENATED MODULE: ./services/faculty/basic-info/addEmployment.js


async function addEmployment(data, token, facultyId) {
  try {
    if (token) {
      let bod = {
        facultyId: `${facultyId}`,
        employmentPositionId: `${data.employmentPositionId}`,
        status: `${data.status}`,
        category: `${data.category}`,
        startDate: `${data.startDate}`
      };

      if (`${data.endDate}`) {
        bod.endDate = `${data.endDate}`;
      }

      try {
        const response = await external_axios_default().post("https://api.dpsmqaportal.com/api/faculty/basic-info/add/employment", bod, {
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/employment-form.js







class EmploymentForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let WorkDetails = {
      employmentPositionId: "",
      startDate: "",
      endDate: ""
    };
    let positions = [];

    if (this.props.positionsList) {
      this.props.positionsList.forEach(key => {
        positions.push( /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: key.employmentPositionId,
          children: key.position
        }));
      });
    }

    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: WorkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("workexpalert");
        let res = await addEmployment(values, this.props.token, this.props.facultyId);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#workexpalert").slideUp(500);
        });
        resetForm();
        router_default().push('/admin/' + this.props.facultyId, '/admin/' + this.props.facultyId);
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Position[]",
              children: " Position *"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "employmentPositionId",
              id: "employmentPositionId",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "0",
                children: "-- SELECT POSITION --"
              }, "0"), positions]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Status[]",
              children: " Status *"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "status",
              id: "status",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "0",
                children: "-- SELECT STATUS --"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Full-time",
                children: "Full-time"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Part-time",
                children: "Part-time"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Lecturer",
                children: "Lecturer"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Category[]",
              children: " Category *"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "category",
              id: "category",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "0",
                children: "-- SELECT CATEGORY --"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Permanent",
                children: "Permanent"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Temporary",
                children: "Temporary"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "StartDateEmployment[]",
              children: " Start Date *"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EndDateEmployment[]",
              children: " End Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "endDate"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          className: "btn btn-primary col-md-12",
          disabled: isSubmitting,
          children: "Submit"
        })]
      })
    });
  }

}

/* harmony default export */ var employment_form = (EmploymentForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
;// CONCATENATED MODULE: ./services/faculty/basic-info/updateWorkExp.js


async function updateWorkExp(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
      let bod = null;

      if (data.endDate == "" || data.endDate == null) {
        bod = {
          workExpId: `${data.workExpId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          description: `${data.description}`
        };
      } else {
        bod = {
          workExpId: `${data.workExpId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          endDate: `${data.endDate}`,
          description: `${data.description}`
        };
      }

      try {
        const response = await external_axios_default().put(url + "/work-exp", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/basic-info/deleteWorkExp.js


async function deleteWorkExp(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/basic-info/" + facultyId + "/work-exp", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            workExpId: `${data}`
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/work-experience.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function WorkExperience(props) {
  const name = props.name;
  let deleteWork = 0;
  let editWork = 0;
  const [currData, setData] = external_react_default().useState({
    workExpId: 0,
    employerName: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].workExpId != null) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].employerName
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].position
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].startDate
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.children[key].endDate, !props.children[key].endDate && /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "Present"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].description
          }), !props.viewFlag && /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editWorkExperience",
                onClick: () => {
                  setEdit(props.children[key].workExpId);
                  setKey(editWork);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteWorkExperience",
                onClick: () => {
                  setDelete(props.children[key].workExpId);
                },
                children: "Delete"
              })]
            })
          })]
        }, props.children[key].workExpId);
      }
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "6",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setEdit(id) {
    editWork = id;
  }

  function setDelete(id) {
    deleteWork = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].workExpId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Work Experience "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "workexpalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
      align: "center",
      children: " Within UP Manila "
    }), /*#__PURE__*/jsx_runtime_.jsx(employment_history/* default */.Z, {
      role: props.role,
      token: props.token,
      facultyId: props.facultyId,
      children: props.employment
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h5", {
      align: "center",
      children: " Outside UP Manila "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-responsive",
      children: /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Employer"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Position"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "End Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Description"
            }), !props.viewFlag && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          }, "headers"), content]
        })
      })
    }), !props.viewFlag && props.role != 5 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(work_exp_form, {
        token: props.token
      })
    }), props.role && props.role == 5 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        align: "center",
        children: " Add Faculty Employment "
      }), /*#__PURE__*/jsx_runtime_.jsx(employment_form, {
        token: props.token,
        facultyId: props.facultyId,
        positionsList: props.positionsList
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editWorkExperience",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editWorkExperienceLabel",
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
              id: "editWorkExperienceLabel",
              children: "Update Work Experience Information"
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
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "EmployerWorkExperienceUpdate",
                    children: " Employer "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    name: "EmployerWorkExperienceUpdate",
                    placeholder: "Input name of employer",
                    defaultValue: currData.employerName,
                    onChange: e => handleInputChange("employerName", e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "PositionWorkExperienceUpdate",
                    children: " Title/Position "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    name: "PositionWorkExperienceUpdate",
                    placeholder: "Input position",
                    defaultValue: currData.position,
                    onChange: e => handleInputChange("position", e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "StartDateWorkExperienceUpdate",
                    children: " Start Date "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "date",
                    className: "form-control",
                    name: "StartDateWorkExperienceUpdate",
                    defaultValue: currData.startDate,
                    onChange: e => handleInputChange("startDate", e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "EndDateWorkExperienceUpdate",
                    children: " End Date "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "date",
                    className: "form-control",
                    name: "EndDateWorkExperienceUpdate",
                    defaultValue: currData.endDate,
                    onChange: e => handleInputChange("endDate", e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "DescriptionWorkExperienceUpdate",
                    children: " Description "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    name: "DescriptionWorkExperienceUpdate",
                    placeholder: "Add Description",
                    defaultValue: currData.description,
                    onChange: e => handleInputChange("description", e)
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await updateWorkExp(currData, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#workexpalert").slideUp(500);
                });
                router_default().push('/faculty/basic-info');
              },
              children: "Save changes"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "deleteWorkExperience",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteWorkExperienceLabel",
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
              id: "deleteWorkExperienceLabel",
              children: "Delete Work Experience Information"
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
              children: " Are you sure you want to delete this work experience information? "
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
              onClick: async () => {
                $('#deleteWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await deleteWorkExp(deleteWork, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#workexpalert").slideUp(500);
                });
                router_default().push('/faculty/basic-info');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var work_experience = (WorkExperience);

/***/ })

};
;