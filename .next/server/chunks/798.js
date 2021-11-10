exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 1798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ education; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
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
;// CONCATENATED MODULE: ./services/faculty/basic-info/addEducation.js


async function addEducation(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        if (formData.get('proof') == "") {
          formData.delete('proof');
        }

        if (formData.get('endDate') == "") {
          formData.delete('endDate');
        }

        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/basic-info/add/education',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/education-form.js








class EducationForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let EducationDetails = {
      institutionSchool: "",
      degreeType: "",
      degreeCert: "",
      majorSpecialization: "",
      startDate: "",
      endDate: "",
      proof: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: EducationDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("educalert");
        let form = document.getElementById('educForm');
        let formData = new FormData(form);
        let res = await addEducation(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#educalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "educForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "jsx-371132353"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-371132353"
        }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "jsx-371132353",
          children: "Required"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "SchoolEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " School/Institution "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "institutionSchool",
              id: "institutionSchool",
              placeholder: "Input school",
              required: true
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2 required",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "control-label",
              htmlFor: "DegreeType",
              className: "jsx-371132353" + " " + "required-label",
              children: " Degree Type "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "degreeType",
              id: "degreeType",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "AA",
                className: "jsx-371132353",
                children: "AA"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "AS",
                className: "jsx-371132353",
                children: "AS"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "BA",
                className: "jsx-371132353",
                children: "BA"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "BS",
                className: "jsx-371132353",
                children: "BS"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "MA",
                className: "jsx-371132353",
                children: "MA"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "MS",
                className: "jsx-371132353",
                children: "MS"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "MD",
                className: "jsx-371132353",
                children: "MD"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "PhD",
                className: "jsx-371132353",
                children: "PhD"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "DEng",
                className: "jsx-371132353",
                children: "DEng"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "DrPH",
                className: "jsx-371132353",
                children: "DrPH"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "DegreeEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Degree/Certification "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "degreeCert",
              id: "degreeCert",
              placeholder: "Input degree",
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "MajorEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Major/Specialization "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "majorSpecialization",
              id: "majorSpecialization",
              placeholder: "Input major",
              required: true
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "StartDateEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Start Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              id: "startDate",
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "EndDateEducationalHistory[]",
              className: "jsx-371132353",
              children: " End Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "endDate",
              id: "endDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ProofEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof",
              required: true
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-371132353"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-371132353" + " " + "btn btn-primary col-md-12",
          children: "Submit"
        }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
          id: "371132353",
          children: ["label.required-label.jsx-371132353:after{content:\"*\";color:#f00;}", "h6.jsx-371132353:before{content:\"* \";color:#f00;}"]
        })]
      })
    });
  }

}

/* harmony default export */ var education_form = (EducationForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/basic-info/deleteEducation.js


async function deleteEducation(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/basic-info/" + facultyId + "/education", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            educInfoId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/basic-info/updateEducation.js


async function updateEducation(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      if (formData.get('endDate') == "") {
        formData.delete('endDate');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/education',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/basic-info/approveEducation.js


async function approveEducation(formData, approveFlag, facultyId, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let status;

  if (approveFlag) {
    if (cookieData.role == 2) {
      status = 'Verified';
    } else if (cookieData.role == 3) {
      status = 'Approved';
    }
  } else {
    status = 'Rejected';
    formData.set('approverRemarks', cookieData.name + ': ' + formData.get('approverRemarks'));
  }

  formData.append('status', status);

  try {
    if (token) {
      try {
        let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/education',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
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
;// CONCATENATED MODULE: ./components/faculty/basic-info/education.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Education(props) {
  let deleteEduc = 0;
  let editEduc = 0;
  let approveEduc = 0;
  const [currData, setData] = external_react_default().useState({
    educInfoId: 0,
    institutionSchool: '',
    degreeType: '',
    degreeCert: '',
    majorSpecialization: '',
    startDate: '',
    endDate: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].degreeCert
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].degreeType
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].majorSpecialization
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].institutionSchool
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].startDate
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
          children: [props.children[key].endDate, !props.children[key].endDate && /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Present"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
          children: [props.children[key].proof && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: () => {
                let file = props.children[key].proof;
                (0,downloadProof/* default */.Z)(file, props.token);
              },
              children: "Download"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              href: "https://api.dpsmqaportal.com/" + props.children[key].proof,
              style: {
                color: 'white'
              },
              target: "_blank",
              children: "Preview"
            })]
          }), !props.children[key].proof && /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "None"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].status
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].approverRemarks || 'None'
        }), props.facultyFlag && !props.viewFlag && /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editEducation",
              onClick: () => {
                setEdit(props.children[key].educInfoId);
                setKey(editEduc);
              },
              children: "Edit"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deleteEducation",
              onClick: () => {
                setDelete(props.children[key].educInfoId);
              },
              children: "Delete"
            })]
          })
        }), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#approveEducation",
              onClick: () => {
                setApprove(props.children[key].educInfoId);
              },
              children: "Approve"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#rejectEducation",
              onClick: () => {
                setApprove(props.children[key].educInfoId);
              },
              children: "Reject"
            })]
          })
        })]
      }, props.children[key].educInfoId);
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "9",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  let res;

  function setEdit(id) {
    editEduc = id;
  }

  function setDelete(id) {
    deleteEduc = id;
  }

  function setApprove(id) {
    approveEduc = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].educInfoId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  } // let message


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Educational History "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "educalert",
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
              children: "Degree/Certification"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Degree Type"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Major/Specialization"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Institution/School"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "End Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Proof"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Status"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Approver Remarks"
            }), !props.viewFlag && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          }), content]
        })
      })
    }), props.facultyFlag && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(education_form, {
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editEducationLabel",
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
              id: "editEducationLabel",
              children: "Update Education Information"
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
          }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("educalert");
              let form = document.getElementById('editEducForm');
              let formData = new FormData(form);
              formData.append('educInfoId', currData.educInfoId);
              let res = await updateEducation(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#educalert").slideUp(500);
              });
              router_default().push('/faculty/basic-info', '/faculty/basic-info');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editEducForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "SchoolEducationHistoryUpdate",
                      children: " School/Institution "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "institutionSchool",
                      id: "institutionSchool",
                      placeholder: "Input school",
                      required: true
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "DegreeEducationalHistoryUpdate",
                      children: " Degree Type "
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
                      as: "select",
                      className: "form-control",
                      name: "degreeType",
                      id: "degreeType",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "AA",
                        children: "AA"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "AS",
                        children: "AS"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "BA",
                        children: "BA"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "BS",
                        children: "BS"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "MA",
                        children: "MA"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "MS",
                        children: "MS"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "MD",
                        children: "MD"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "PhD",
                        children: "PhD"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "DEng",
                        children: "DEng"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "DrPH",
                        children: "DrPH"
                      })]
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "DegreeEducationalHistoryUpdate",
                      children: " Degree/Certification "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "degreeCert",
                      id: "degreeCert",
                      placeholder: "Input degree"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "MajorEducationalHistoryUpdate",
                      children: " Major/Specialization "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "majorSpecialization",
                      id: "majorSpecialization",
                      placeholder: "Input major"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "StartDateEducationalHistoryUpdate",
                      children: " Start Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "date",
                      name: "startDate",
                      id: "startDate",
                      required: true
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "EndDateEducationalHistoryUpdate",
                      children: " End Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "date",
                      name: "endDate",
                      id: "endDate"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "StartDateEducationalHistoryUpdate",
                      children: " Add/Edit Proof "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editEducation').modal('toggle');
                  },
                  children: "Save changes"
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "deleteEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteEducationLabel",
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
              id: "deleteEducationLabel",
              children: "Delete Education Information"
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
              children: " Are you sure you want to delete this education information? "
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
                let alert = document.getElementById("educalert");
                $('#deleteEducation').modal('toggle');
                let res = await deleteEducation(deleteEduc, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#educalert").slideUp(500);
                });
                router_default().push('/faculty/basic-info', '/faculty/basic-info');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approveEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveEducationLabel",
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
              id: "approveEducationLabel",
              children: "Approve Education Information"
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
              children: " Are you sure you want to approve this education information? "
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
              onClick: async () => {
                let alert = document.getElementById("educalert");
                $('#approveEducation').modal('toggle');
                let formData = new FormData();
                formData.append('educInfoId', approveEduc);
                let res = await approveEducation(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#educalert").slideUp(500);
                });
                router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "rejectEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectEducationLabel",
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
              id: "rejectEducationLabel",
              children: "Reject Education Information"
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
          }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("educalert");
              $('#rejectEducation').modal('toggle');
              let form = document.getElementById('rejectEducForm');
              let formData = new FormData(form);
              formData.append('educInfoId', approveEduc);
              let res = await approveEducation(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#educalert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectEducForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "RejectionRemarks",
                      children: " Reason/Remarks for Rejection "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectEducation').modal('toggle');
                  },
                  children: "Save changes"
                })]
              })]
            })
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var education = (Education);

/***/ })

};
;