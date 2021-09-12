exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 4588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ licensure_exam; }
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/addLicensure.js


async function addLicensure(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/licensure-exam',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/licensure-exam-form.js







class LicensureExamForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      duplicateForms: []
    };
  }

  render() {
    let LicensureDetails = {
      examName: "",
      examDate: "",
      licenseNumber: "",
      rank: "",
      proof: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: LicensureDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('licenseForm');
        let formData = new FormData(form);
        let alert = document.getElementById("licensureexamalert");
        let res = await addLicensure(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#licensureexamalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "licenseForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LicensureExam[]",
              children: " Licensure Exam "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "examName",
              placeholder: "Input licensure exam"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LicensureExamDate[]",
              children: " Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "examDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LicensureExamRank[]",
              children: " Rank "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "rank",
              placeholder: "Input rank"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LicenseNumber[]",
              children: " License Number "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "licenseNumber",
              placeholder: "Input licensure number"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "LicensureExamProof[]",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof"
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

/* harmony default export */ var licensure_exam_form = (LicensureExamForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/accomplishments/updateLicensure.js


async function updateLicensure(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      if (formData.get('rank') == "") {
        formData.set('rank', '');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/licensure-exam',
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/deleteLicensure.js


async function deleteLicensure(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + facultyId + "/licensure-exam", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            licenseId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/approveLicense.js


async function approveLicense(formData, approveFlag, facultyId, token) {
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
        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/licensure-exam',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/licensure-exam.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function LicensureExam(props) {
  let deleteLic = 0;
  let editLic = 0;
  let approveLic = 0;
  const [currData, setData] = external_react_default().useState({
    licenseId: 0,
    examName: '',
    examDate: '',
    licenseNumber: '',
    rank: '',
    proof: ''
  });
  const name = props.name;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].licenseId != null) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].examName
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].rank == 0 ? 'N/A' : props.children[key].rank
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].examDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].licenseNumber
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editLicensureExam",
                onClick: () => {
                  setEdit(props.children[key].licenseId);
                  setKey(editLic);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteLicensureExam",
                onClick: () => {
                  setDelete(props.children[key].licenseId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveLicense",
                onClick: () => {
                  setApprove(props.children[key].licenseId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectLicense",
                onClick: () => {
                  setApprove(props.children[key].licenseId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].licenseId);
      }
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "7",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setEdit(id) {
    editLic = id;
  }

  function setDelete(id) {
    deleteLic = id;
  }

  function setApprove(id) {
    approveLic = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].licenseId == x) {
        setData(props.children[key]);

        if (props.children[key].rank == "" || props.children[key].rank == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            rank: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Licensure Exams "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "licensureexamalert",
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
              children: "Exam Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Rank"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "License Number"
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
      children: /*#__PURE__*/jsx_runtime_.jsx(licensure_exam_form, {
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editLicensureExamLabel",
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
              id: "editLicensureExamLabel",
              children: "Update Licensure Exam Information"
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
              let form = document.getElementById('editLicForm');
              let formData = new FormData(form);
              formData.append('licenseId', currData.licenseId);
              let alert = document.getElementById("licensureexamalert");
              let res = await updateLicensure(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#licensureexamalert").slideUp(500);
              });
              router_default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editLicForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "LicensureExamUpdate",
                      children: " Licensure Exam "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "examName",
                      id: "examName",
                      placeholder: "Input licensure exam"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "LicensureExamDateUpdate",
                      children: " Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "examDate",
                      id: "examDate"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "LicensureExamRankUpdate",
                      children: " Rank "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "rank",
                      id: "rank",
                      placeholder: "Input rank"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "LicenseNumeberUpdate",
                      children: " License Number "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "licenseNumber",
                      id: "licenseNumber",
                      placeholder: "Input licensure number"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "LicensureExamProofUpdate",
                      children: " Proof "
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
                  "data-dismiss": "modal",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editLicensureExam').modal('toggle');
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
      id: "deleteLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteLicensureExamLabel",
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
              id: "deleteLicensureExamLabel",
              children: "Delete Licensure Exam Information"
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
                let alert = document.getElementById("licensureexamalert");
                let res = await deleteLicensure(deleteLic, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#licensureexamalert").slideUp(500);
                });
                router_default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approveLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveLicenseLabel",
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
              id: "approveLicenseLabel",
              children: "Approve Licensure Exam Information"
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
              children: " Are you sure you want to approve this licensure exam information? "
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
                let alert = document.getElementById("licensureexamalert");
                $('#approveLicense').modal('toggle');
                let formData = new FormData();
                formData.append('licenseId', approveLic);
                let res = await approveLicense(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#licensureexamalert").slideUp(500);
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
      id: "rejectLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectLicenseLabel",
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
              id: "rejectLicenseLabel",
              children: "Reject Licensure Exam Information"
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
              let alert = document.getElementById("licensureexamalert");
              $('#rejectLicense').modal('toggle');
              let form = document.getElementById('rejectLicenseForm');
              let formData = new FormData(form);
              formData.append('licenseId', approveLic);
              let res = await approveLicense(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#licensureexamalert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectLicenseForm",
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
                    $('#rejectLicense').modal('toggle');
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

/* harmony default export */ var licensure_exam = (LicensureExam);

/***/ }),

/***/ 5121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ public_service_accomplishment; }
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/addPublicService.js


async function addPublicService(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        if (formData.get('endDate') == "") {
          formData.delete('endDate');
        }

        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/public-service',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/public-service-accomplishment-form.js







class PublicServiceAccomplishmentForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let PublicServiceDetails = {
      type: "",
      position: "",
      organization: "",
      description: "",
      startDate: "",
      endDate: "",
      proof: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: PublicServiceDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('psForm');
        let formData = new FormData(form);
        let alert = document.getElementById("publicservicealert");
        let res = await addPublicService(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicservicealert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "psForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServicePosition[]",
              children: " Position/Role "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "position",
              id: "position",
              placeholder: "Input position/role"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceOrganization[]",
              children: " Organization "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "organization",
              id: "organization",
              placeholder: "Input organization"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceAccomplishmentStartDate[]",
              children: " Start Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              id: "startDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceAccomplishmentEndDate[]",
              children: " End Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "endDate",
              id: "endDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceAccomplishmentProof[]",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceAccomplishmentType[]",
              children: " Type of Contribution "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "type",
              id: "type",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Within UPM",
                children: "Within UPM"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Within Pro",
                children: "Contribution to the Profession"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Within Nat",
                children: "Contribution to the Nation"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Within Wor",
                children: "Contribution to the World"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicServiceAccomplishmentDescription[]",
              children: " Description "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "description",
              id: "description",
              placeholder: "Input description"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          className: "btn btn-primary col-md-12",
          disabled: isSubmitting,
          children: "Submit"
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
      })
    });
  }

}

/* harmony default export */ var public_service_accomplishment_form = (PublicServiceAccomplishmentForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/accomplishments/deletePublicService.js


async function deletePublicService(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + facultyId + "/public-service", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            publicServiceId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/updatePublicService.js


async function updatePublicService(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      if (formData.get('endDate') == "") {
        formData.delete('endDate');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/public-service',
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/approvePublicService.js


async function approvePublicService(formData, approveFlag, facultyId, token) {
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
        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/public-service',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/public-service-accomplishment.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function PublicServiceAccomplishment(props) {
  const name = props.name;
  let deletePS = 0;
  let editPS = 0;
  let approvePSA = 0;
  const [currData, setData] = external_react_default().useState({
    publicServiceId: 0,
    position: '',
    organization: '',
    description: '',
    type: '',
    startDate: '',
    endDate: ''
  });
  let upm = null;
  let pro = null;
  let nat;
  let wor;

  if (props.children != null) {
    upm = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within UPM') {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].position
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].organization
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].description
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].startDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].endDate
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
          }), !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].publicServiceId);
      }
    });
    pro = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Pro') {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].position
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].organization
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].description
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].startDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].endDate
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
          }), !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].publicServiceId);
      }
    });
    nat = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Nat') {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].position
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].organization
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].description
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].startDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].endDate
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
          }), !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].publicServiceId);
      }
    });
    wor = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Wor') {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].position
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].organization
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].description
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].startDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].endDate
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
          }), !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].publicServiceId);
      }
    });
  }

  function setEdit(id) {
    editPS = id;
  }

  function setDelete(id) {
    deletePS = id;
  }

  function setApprove(id) {
    approvePSA = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].publicServiceId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Public Service Accomplishments "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "publicservicealert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        align: "center",
        children: "Within UP Manila "
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/jsx_runtime_.jsx("table", {
          className: "table table-striped table-sm",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Position/Role"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Organization"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Description"
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
            }), upm ? upm : /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: "8",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                align: "center",
                children: "No data available!"
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        align: "center",
        children: " Contributions to Profession "
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/jsx_runtime_.jsx("table", {
          className: "table table-striped table-sm",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Position/Role"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Organization"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Description"
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
            }), pro ? pro : /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: "8",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                align: "center",
                children: "No data available!"
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        align: "center",
        children: " Contributions to the Nation "
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/jsx_runtime_.jsx("table", {
          className: "table table-striped table-sm",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Position/Role"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Organization"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Description"
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
            }), nat ? nat : /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: "8",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                align: "center",
                children: "No data available!"
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        align: "center",
        children: " Contributions to the World "
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/jsx_runtime_.jsx("table", {
          className: "table table-striped table-sm",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Position/Role"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Organization"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "Description"
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
            }), wor ? wor : /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: "8",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                align: "center",
                children: "No data available!"
              })
            })]
          })
        })
      })]
    }), props.facultyFlag && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(public_service_accomplishment_form, {
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editPublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editPublicServiceLabel",
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
              id: "editPublicServiceLabel",
              children: "Update Public Service Accomplishment Information"
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
              let form = document.getElementById('editPSForm');
              let formData = new FormData(form);
              formData.append('publicServiceId', currData.publicServiceId);
              formData.append('type', currData.type);
              let alert = document.getElementById("publicservicealert");
              let res = await updatePublicService(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicservicealert").slideUp(500);
              });
              router_default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editPSForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServicePositionUpdate",
                      children: " Position/Role "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "position",
                      id: "position",
                      placeholder: "Input position/role"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServiceOrganizationUpdate",
                      children: " Organization "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "organization",
                      id: "organization",
                      placeholder: "Input organization"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServiceAccomplishmentStartDateUpdate",
                      children: " Start Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "startDate",
                      id: "startDate"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServiceAccomplishmentEndDateUpdate",
                      children: " End Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "endDate",
                      id: "endDate"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group col-md-12",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServiceAccomplishmentDescriptionUpdate",
                      children: " Description "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "description",
                      id: "description",
                      placeholder: "Input description"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicServiceAccomplishmentProofUpdate",
                      children: " Proof "
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
                    $('#editPublicService').modal('toggle');
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
      id: "deletePublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deletePublicServiceLabel",
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
              id: "deletePublicServiceLabel",
              children: "Delete Public Service Accomplishment Information"
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
              children: " Are you sure you want to delete this public service accomplishment information? "
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
                let alert = document.getElementById("publicservicealert");
                let res = await deletePublicService(deletePS, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicservicealert").slideUp(500);
                });
                router_default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approvePublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approvePublicServiceLabel",
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
              id: "approvePublicServiceLabel",
              children: "Approve Public Service Information"
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
              children: " Are you sure you want to approve this public service information? "
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
                let alert = document.getElementById("publicservicealert");
                $('#approvePublicService').modal('toggle');
                let formData = new FormData();
                formData.append('publicServiceId', approvePSA);
                let res = await approvePublicService(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicservicealert").slideUp(500);
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
      id: "rejectPublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectPublicServiceLabel",
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
              id: "rejectPublicServiceLabel",
              children: "Reject Public Service Information"
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
              let alert = document.getElementById("publicservicealert");
              $('#rejectPublicService').modal('toggle');
              let form = document.getElementById('rejectPublicServiceForm');
              let formData = new FormData(form);
              formData.append('publicServiceId', approvePSA);
              let res = await approvePublicService(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicservicealert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectPublicServiceForm",
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
                    $('#rejectPublicService').modal('toggle');
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

/* harmony default export */ var public_service_accomplishment = (PublicServiceAccomplishment);

/***/ }),

/***/ 3270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ publication; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/faculty/accomplishments/publication-form-author.js





class PublicationFormAuthor extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      duplicateAuthors: []
    };
  }

  clone() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      });
    });
    this.state.duplicateAuthors.push( /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "PublicationAuthorDPSM[]",
            children: " Author (from DPSM) "
          }), /*#__PURE__*/jsx_runtime_.jsx("select", {
            className: "form-control col-md-6",
            name: "PublicationAuthorDPSM[]",
            required: true,
            children: authors
          })]
        })
      })
    }));
    this.setState({});
  }

  remove() {
    this.state.duplicateAuthors.pop();
    this.setState({});
  }

  render() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      });
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-12",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "PublicationAuthorDPSM[]",
            children: " Authors (from DPSM) "
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
            className: "col-md-12",
            name: "PublicationAuthorDPSM[]",
            isMulti: true,
            options: authors,
            required: true
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: this.state.duplicateAuthors
      })]
    });
  }

}

/* harmony default export */ var publication_form_author = (PublicationFormAuthor);
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/addPublication.js


async function addPublication(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        let authors = [];

        for (var pair of formData.entries()) {
          if (pair[0] == 'PublicationAuthorDPSM[]' && pair[1] != facultyId) {
            authors.push(pair[1]);
          }
        }

        let proof = formData.get('proof');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/publication',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        let bodData = new FormData();
        bodData.append('facultyId', facultyId);
        bodData.append('publicationId', response.data.result.publicationId);
        bodData.append('proof', proof);
        const res = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/publisher',
          data: bodData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        bodData.delete('proof');

        for (var value of authors) {
          bodData.set('facultyId', value);
          const auth = await external_axios_default()({
            method: 'POST',
            url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/publisher',
            data: bodData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
        }

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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/publication-form.js








class PublicationForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let PublicationDetails = {
      title: "",
      citation: "",
      url: "",
      publicationDate: "",
      nonFacultyAuthors: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: PublicationDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('pubForm');
        let formData = new FormData(form);
        let alert = document.getElementById("publicationalert");
        let res = await addPublication(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicationalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "pubForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Publication[]",
              children: " Publication "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "title",
              placeholder: "Input publication name/title"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicationCitation[]",
              children: " Citation "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "citation",
              placeholder: "Input full citation for publication"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicationURL[]",
              children: " URL "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "url",
              placeholder: "Input publication URL"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublishDate[]",
              children: " Date Published "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "publicationDate"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicationProof[]",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "PublicationAuthorNonDPSM[]",
              children: " Authors (non-DPSM) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "nonFacultyAuthors",
              placeholder: "Input all authors outside DPSM (separate names with commas)"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(publication_form_author, {
            faculty: this.props.faculty
          })
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

/* harmony default export */ var publication_form = (PublicationForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/accomplishments/deletePublication.js


async function deletePublication(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + facultyId + "/publisher", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            publicationId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/updatePublication.js


async function updatePublication(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/publication',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/accomplishments/approvePublication.js


async function approvePublication(formData, approveFlag, facultyId, token) {
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
        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/publisher',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/publication.js













function Publication(props) {
  let content;
  let deletePub = 0;
  let editPub = 0;
  let approvePub = 0;
  const [currData, setData] = external_react_default().useState({
    publicationId: 0,
    title: '',
    publicationDate: '',
    citation: '',
    url: '',
    nonFacultyAuthors: ''
  });

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      let pub = props.children[key].faculty_publishers;
      let dpsmauth = [];
      pub.forEach(auth => {
        let link = "/faculty/view/" + auth.facultyId;
        dpsmauth.push( /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: link,
          children: auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
        }));
      });
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
          children: [dpsmauth, props.children[key].nonFacultyAuthors]
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].publicationDate
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].url
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: props.children[key].citation
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: Object.keys(pub).map(auth => {
            if (pub[auth].facultyId == props.facultyId) {
              if (pub[auth].proof) {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "btn-grp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: () => {
                      let file = pub[auth].proof;
                      (0,downloadProof/* default */.Z)(file, props.token);
                    },
                    children: "Download"
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-info",
                    href: "https://api.dpsmqaportal.com/" + pub[auth].proof,
                    style: {
                      color: 'white'
                    },
                    target: "_blank",
                    children: "Preview"
                  })]
                });
              } else {
                return /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: "None"
                });
              }
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: Object.keys(pub).map(auth => {
            if (pub[auth].facultyId == props.facultyId) {
              return pub[auth].status;
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: Object.keys(pub).map(auth => {
            if (pub[auth].facultyId == props.facultyId) {
              return pub[auth].approverRemarks || 'None';
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
          children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-group",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editPublication",
              onClick: () => {
                setEdit(props.children[key].publicationId);
                setKey(editPub);
              },
              children: "Edit"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deletePublication",
              onClick: () => {
                setDelete(props.children[key].publicationId);
              },
              children: "Delete"
            })]
          }), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#approvePublication",
              onClick: () => {
                setApprove(props.children[key].publicationId);
              },
              children: "Approve"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#rejectPublication",
              onClick: () => {
                setApprove(props.children[key].publicationId);
              },
              children: "Reject"
            })]
          })]
        })]
      }, props.children[key].publicationId);
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "7",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setEdit(id) {
    editPub = id;
  }

  function setDelete(id) {
    deletePub = id;
  }

  function setApprove(id) {
    approvePub = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].publicationId == x) {
        setData(props.children[key]);
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Publications "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "publicationalert",
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
              children: "Publication"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Author/s"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Publication Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "URL"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Citation"
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
      children: /*#__PURE__*/jsx_runtime_.jsx(publication_form, {
        faculty: props.faculty,
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editPublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editPublicationLabel",
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
              id: "editPublicationLabel",
              children: "Update Publication Information"
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
              let form = document.getElementById('editPubForm');
              let formData = new FormData(form);
              formData.append('publicationId', currData.publicationId);
              let alert = document.getElementById("publicationalert");
              let res = await updatePublication(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicationalert").slideUp(500);
              });
              router_default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editPubForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicationUpdate",
                      children: " Publication "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "title",
                      placeholder: "Input publication name/title"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicationCitationUpdate",
                      children: " Citation "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "citation",
                      placeholder: "Input full citation for publication"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicationURLUpdate",
                      children: " URL "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "url",
                      placeholder: "Input publication URL"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublishDateUpdate",
                      children: " Date Published "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "publicationDate"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicationAuthorNonDPSMUpdate",
                      children: " Authors (non-DPSM) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "nonFacultyAuthors",
                      placeholder: "Input all authors outside DPSM (separate names with commas)"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "PublicationProofUpdate",
                      children: " Proof "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
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
                    $('#editPublication').modal('toggle');
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
      id: "deletePublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deletePublicationLabel",
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
              id: "deletePublicationLabel",
              children: "Delete Publication Information"
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
              children: " Are you sure you want to delete this publication information? "
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
                let alert = document.getElementById("publicationalert");
                let res = await deletePublication(deletePub, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicationalert").slideUp(500);
                });
                router_default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approvePublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approvePublicationLabel",
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
              id: "approvePublicationLabel",
              children: "Approve Publication Information"
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
              children: " Are you sure you want to approve this publication information? "
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
                let alert = document.getElementById("publicationalert");
                $('#approvePublication').modal('toggle');
                let formData = new FormData();
                formData.append('publicationId', approvePub);
                let res = await approvePublication(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicationalert").slideUp(500);
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
      id: "rejectPublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectPublicationLabel",
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
              id: "rejectPublicationLabel",
              children: "Reject Publication Information"
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
              let alert = document.getElementById("publicationalert");
              $('#rejectPublication').modal('toggle');
              let form = document.getElementById('rejectPubForm');
              let formData = new FormData(form);
              formData.append('publicationId', approvePub);
              let res = await approvePublication(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicationalert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectPubForm",
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
                    $('#rejectPublication').modal('toggle');
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

/* harmony default export */ var publication = (Publication);

/***/ }),

/***/ 9535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ research_grant; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/faculty/accomplishments/research-grant-form-author.js





class ResearchGrantFormAuthor extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      duplicateAuthors: []
    };
  }

  clone() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      });
    });
    this.state.duplicateAuthors.push( /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "ResearchAuthorDPSM[]",
            children: " Researcher (from DPSM) "
          }), /*#__PURE__*/jsx_runtime_.jsx("select", {
            className: "form-control col-md-6",
            name: "ResearchAuthorDPSM[]",
            required: true,
            children: authors
          })]
        })
      })
    }));
    this.setState({});
  }

  remove() {
    this.state.duplicateAuthors.pop();
    this.setState({});
  }

  render() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      });
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "ResearchAuthorDPSM[]",
            children: " Researchers (from DPSM) "
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
            className: "col-md-12",
            name: "ResearchAuthorDPSM[]",
            isMulti: true,
            options: authors,
            required: true
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: this.state.duplicateAuthors
      })]
    });
  }

}

/* harmony default export */ var research_grant_form_author = (ResearchGrantFormAuthor);
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/addResearch.js


async function addResearch(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        let researchers = [];

        for (var pair of formData.entries()) {
          if (pair[0] == 'ResearchAuthorDPSM[]' && pair[1] != facultyId) {
            researchers.push(pair[1]);
          }
        }

        let proof = formData.get('proof');
        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/research-grant',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        let bodData = new FormData();
        bodData.append('facultyId', facultyId);
        bodData.append('researchId', response.data.result.researchId);
        bodData.append('proof', proof);
        const res = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/researcher',
          data: bodData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        bodData.delete('proof');

        for (var value of researchers) {
          bodData.set('facultyId', value);
          const auth = await external_axios_default()({
            method: 'POST',
            url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/researcher',
            data: bodData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
        }

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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/research-grant-form.js








class ResearchGrantForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ResearchDetails = {
      researchName: "",
      granter: "",
      amount: "",
      projectedStart: "",
      projectedEnd: "",
      actualStart: "",
      actualEnd: "",
      researchProgress: "",
      nonFacultyResearchers: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: ResearchDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('resForm');
        let formData = new FormData(form);
        let alert = document.getElementById("researchalert");
        let res = await addResearch(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicationalert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "resForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Research[]",
              children: " Research Project "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "researchName",
              placeholder: "Input research name"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchSponsor[]",
              children: " Sponsor "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "granter",
              placeholder: "Input sponsor"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchAmount[]",
              children: " Amount "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "amount",
              placeholder: "Input amount"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchProof[]",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchAuthorNonDPSM[]",
              children: " Researchers (non-DPSM) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "nonFacultyResearchers",
              placeholder: "Input all authors outside DPSM (separate names with commas)"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(research_grant_form_author, {
            faculty: this.props.faculty
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchProjectedStartDate[]",
              children: " Start Date (Projected) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "projectedStart"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchProjectedEndDate[]",
              children: " End Date (Projected) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "projectedEnd"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchStartDate[]",
              children: " Start Date (Actual) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "actualStart"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchEndDate[]",
              children: " End Date (Actual) "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "actualEnd"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "ResearchProgress[]",
              children: " Research Progress "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "researchProgress",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Ongoing",
                children: "Ongoing"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Completed",
                children: "Completed"
              })]
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

/* harmony default export */ var research_grant_form = (ResearchGrantForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/accomplishments/deleteResearch.js


async function deleteResearch(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + facultyId + "/researcher", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            researchId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/updateResearch.js


async function updateResearch(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/research-grant',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
;// CONCATENATED MODULE: ./services/faculty/accomplishments/approveResearchGrant.js


async function approveResearchGrant(formData, approveFlag, facultyId, token) {
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
        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/researcher',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/research-grant.js













function ResearchGrant(props) {
  let content;
  let deleteRes = 0;
  let editRes = 0;
  let approveRG = 0;
  const [currData, setData] = external_react_default().useState({
    researchId: 0,
    researchName: '',
    granter: '',
    amount: '',
    projectedStart: '',
    projectedEnd: '',
    actualStart: '',
    actualEnd: '',
    researchProgress: '',
    nonFacultyResearchers: ''
  });

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      let res = props.children[key].faculty_researchers;
      let dpsmauth = [];
      res.forEach(auth => {
        let link = "/faculty/view/" + auth.facultyId;
        dpsmauth.push( /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: link,
          children: auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
        }));
      });

      if (props.children[key].researchId != null) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].researchName
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [dpsmauth, props.children[key].nonFacultyResearchers]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].granter
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].amount
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.children[key].projectedStart, " to ", props.children[key].projectedEnd]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].actualStart
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].actualEnd
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].researchProgress
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: Object.keys(res).map(auth => {
              if (res[auth].facultyId == props.facultyId) {
                if (res[auth].proof) {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "btn-grp",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: () => {
                        let file = res[auth].proof;
                        (0,downloadProof/* default */.Z)(file, props.token);
                      },
                      children: "Download"
                    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "btn btn-info",
                      href: "https://api.dpsmqaportal.com/" + res[auth].proof,
                      style: {
                        color: 'white'
                      },
                      target: "_blank",
                      children: "Preview"
                    })]
                  });
                } else {
                  return /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: "None"
                  });
                }
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: Object.keys(res).map(auth => {
              if (res[auth].facultyId == props.facultyId) {
                return res[auth].status;
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: Object.keys(res).map(auth => {
              if (res[auth].facultyId == props.facultyId) {
                return res[auth].approverRemarks || 'None';
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editResearchGrant",
                onClick: () => {
                  setEdit(props.children[key].researchId);
                  setKey(editRes);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteResearchGrant",
                onClick: () => {
                  setDelete(props.children[key].researchId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveResearchGrant",
                onClick: () => {
                  setApprove(props.children[key].researchId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectResearchGrant",
                onClick: () => {
                  setApprove(props.children[key].researchId);
                },
                children: "Reject"
              })]
            })]
          })]
        });
      }
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("td", {
      colSpan: "10",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "center",
        children: "No data available!"
      })
    });
  }

  function setEdit(id) {
    editRes = id;
  }

  function setDelete(id) {
    deleteRes = id;
  }

  function setApprove(id) {
    approveRG = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].researchId == x) {
        setData(props.children[key]);
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Research Grants "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "researchalert",
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
              children: "Research Project"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Researcher/s"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Sponsor"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Amount"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Projected Duration"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "End Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Research Progress"
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
      children: /*#__PURE__*/jsx_runtime_.jsx(research_grant_form, {
        faculty: props.faculty,
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editResearchGrantLabel",
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
              id: "editResearchGrantLabel",
              children: "Update Research Grant Information"
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
              let form = document.getElementById('editResForm');
              let formData = new FormData(form);
              formData.append('researchId', currData.researchId);
              let alert = document.getElementById("researchalert");
              let res = await updateResearch(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#researchalert").slideUp(500);
              });
              router_default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editResForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchUpdate",
                      children: " Research Project "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "researchName",
                      placeholder: "Input research name"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchSponsorUpdate",
                      children: " Sponsor "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "granter",
                      placeholder: "Input sponsor"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchAmountUpdate",
                      children: " Amount "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "amount",
                      placeholder: "Input amount"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchStartDateUpdate",
                      children: " Start Date (Actual) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "actualStart"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchEndDateUpdate",
                      children: " End Date (Actual) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "actualEnd"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchProjectedStartDateUpdate",
                      children: " Start Date (Projected) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "projectedStart"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchProjectedEndDateUpdate",
                      children: " End Date (Projected) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "projectedEnd"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchProgressUpdate",
                      children: " Progress "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "researchProgress",
                      placeholder: "Input progress"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchAuthorNonDPSMUpdate",
                      children: " Authors (non-DPSM) "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "nonFacultyResearchers",
                      placeholder: "Input all authors outside DPSM (separate names with commas)"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchAuthorDPSMUpdate",
                      children: " Authors (DPSM) "
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      className: "form-control",
                      type: "text",
                      name: "ResearchAuthorDPSMUpdate",
                      placeholder: "Input author (must be from DPSM)"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "ResearchProofUpdate",
                      children: " Proof "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
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
                    $('#editResearchGrant').modal('toggle');
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
      id: "deleteResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteResearchGrantLabel",
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
              id: "deleteResearchGrantLabel",
              children: "Delete Research Grant Information"
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
              children: " Are you sure you want to delete this research grant information? "
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
                let alert = document.getElementById("researchalert");
                let res = await deleteResearch(deleteRes, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) values.message = res.error[0].message;else values.message = res.message;
                }

                $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#researchalert").slideUp(500);
                });
                router_default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approveResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveResearchGrantLabel",
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
              id: "approveResearchGrantLabel",
              children: "Approve Research Grant Information"
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
              children: " Are you sure you want to approve this research grant information? "
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
                let alert = document.getElementById("researchalert");
                $('#approveResearchGrant').modal('toggle');
                let formData = new FormData();
                formData.append('researchId', approveRG);
                let res = await approveResearchGrant(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#researchalert").slideUp(500);
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
      id: "rejectResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectResearchGrantLabel",
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
              id: "rejectResearchGrantLabel",
              children: "Reject Research Grant Information"
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
              let alert = document.getElementById("researchalert");
              $('#rejectResearchGrant').modal('toggle');
              let form = document.getElementById('rejectRGForm');
              let formData = new FormData(form);
              formData.append('researchId', approveRG);
              let res = await approveResearchGrant(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#researchalert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectRGForm",
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
                    $('#rejectResearchGrant').modal('toggle');
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

/* harmony default export */ var research_grant = (ResearchGrant);

/***/ }),

/***/ 3851:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ training_seminar; }
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/addTraining.js


async function addTraining(formData, token) {
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
          url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/training-seminar',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/training-seminar-form.js







class TrainingSeminarForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let TrainingDetails = {
      title: "",
      role: "",
      dateFrom: "",
      dateTo: "",
      venue: "",
      proof: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: TrainingDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('tsForm');
        let formData = new FormData(form);
        let alert = document.getElementById("trainingseminaralert");
        let res = await addTraining(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
          $("#trainingseminaralert").slideUp(500);
        });
        resetForm();
        router_default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "tsForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminar[]",
              children: " Name of Training/Seminar "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "title",
              id: "title",
              placeholder: "Input training/seminar"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarRole[]",
              children: " Role"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "role",
              id: "role",
              placeholder: "Input training/seminar"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarVenue[]",
              children: " Venue "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "venue",
              id: "venue",
              placeholder: "Input venue"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarStartDate[]",
              children: " Start Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "dateFrom",
              id: "dateFrom"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarEndDate[]",
              children: " End Date "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "date",
              className: "form-control",
              name: "dateTo",
              id: "dateTo"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-8",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarRemarks[]",
              children: " Remarks "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "remarks",
              id: "remarks",
              placeholder: "Input remarks"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "TrainingSeminarProof[]",
              children: " Proof "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
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

/* harmony default export */ var training_seminar_form = (TrainingSeminarForm);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: ./services/faculty/downloadProof.js
var downloadProof = __webpack_require__(2939);
;// CONCATENATED MODULE: ./services/faculty/accomplishments/deleteTraining.js


async function deleteTraining(data, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + facultyId + "/training-seminar", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            tsId: `${data}`
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/updateTraining.js


async function updateTraining(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url + '/training-seminar',
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
;// CONCATENATED MODULE: ./services/faculty/accomplishments/approveTraining.js


async function approveTraining(formData, approveFlag, facultyId, token) {
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
        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
        const response = await external_axios_default()({
          method: 'PUT',
          url: url + '/training-seminar',
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
;// CONCATENATED MODULE: ./components/faculty/accomplishments/training-seminar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function TrainingSeminar(props) {
  const name = props.name;
  let deleteTS = 0;
  let editTS = 0;
  let approveTS = 0;
  const [currData, setData] = external_react_default().useState({
    tsId: 0,
    role: '',
    title: '',
    dateFrom: '',
    dateTo: '',
    venue: '',
    remarks: '',
    proof: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].tsId != null) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].title
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].role
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].venue
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].dateFrom
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].dateTo
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].remarks
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editTrainingSeminar",
                onClick: () => {
                  setEdit(props.children[key].tsId);
                  setKey(editTS);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteTrainingSeminar",
                onClick: () => {
                  setDelete(props.children[key].tsId);
                },
                children: "Delete"
              })]
            }), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveTrainingSeminar",
                onClick: () => {
                  setApprove(props.children[key].tsId);
                },
                children: "Approve"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectTrainingSeminar",
                onClick: () => {
                  setApprove(props.children[key].tsId);
                },
                children: "Reject"
              })]
            })]
          })]
        }, props.children[key].tsId);
      }
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

  function setEdit(id) {
    editTS = id;
  }

  function setDelete(id) {
    deleteTS = id;
  }

  function setApprove(id) {
    approveTS = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].tsId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      children: " Training/Seminars "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "trainingseminaralert",
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
              children: "Name of Training/Seminar"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Role"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Venue"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "End Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Remarks"
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
      children: /*#__PURE__*/jsx_runtime_.jsx(training_seminar_form, {
        token: props.token
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editTrainingSeminarLabel",
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
              id: "editTrainingSeminarLabel",
              children: "Update Training/Seminar Information"
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
              let form = document.getElementById('editTSForm');
              let formData = new FormData(form);
              formData.append('tsId', currData.tsId);
              let alert = document.getElementById("trainingseminaralert");
              let res = await updateTraining(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                $("#trainingseminaralert").slideUp(500);
              });
              router_default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editTSForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarUpdate",
                      children: " Name of Training/Seminar "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "title",
                      id: "title",
                      placeholder: "Input training/seminar"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarRoleUpdate",
                      children: " Role "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "role",
                      id: "role",
                      placeholder: "Input role"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarVenueUpdate",
                      children: " Venue "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "venue",
                      id: "venue",
                      placeholder: "Input venue"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarStartDateUpdate",
                      children: " Start Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "dateFrom",
                      id: "dateFrom"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarEndDateUpdate",
                      children: " End Date "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "date",
                      className: "form-control",
                      name: "dateTo",
                      id: "dateTo"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarVenueUpdate",
                      children: " Remarks "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "remarks",
                      id: "remarks",
                      placeholder: "Input remarks"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "TrainingSeminarProofUpdate",
                      children: " Proof "
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
                    $('#editTrainingSeminar').modal('toggle');
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
      id: "deleteTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteTrainingSeminarLabel",
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
              id: "deleteTrainingSeminarLabel",
              children: "Delete Training/Seminar Information"
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
              children: " Are you sure you want to delete this training/seminar information? "
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
                $('#deleteTrainingSeminar').modal('toggle');
                let alert = document.getElementById("trainingseminaralert");
                let res = await deleteTraining(deleteTS, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#trainingseminaralert").slideUp(500);
                });
                router_default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "approveTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveTrainingSeminarLabel",
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
              id: "approveTrainingSeminarLabel",
              children: "Approve Training/Seminar Information"
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
              children: " Are you sure you want to approve this training/seminar information? "
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
                let alert = document.getElementById("trainingseminaralert");
                $('#approveTrainingSeminar').modal('toggle');
                let formData = new FormData();
                formData.append('tsId', approveTS);
                let res = await approveTraining(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#trainingseminaralert").slideUp(500);
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
      id: "rejectTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectTrainingSeminarLabel",
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
              id: "rejectTrainingSeminarLabel",
              children: "Reject Training/Seminar Information"
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
              let alert = document.getElementById("trainingseminaralert");
              $('#rejectTrainingSeminar').modal('toggle');
              let form = document.getElementById('rejectTrainingSeminarForm');
              let formData = new FormData(form);
              formData.append('tsId', approveTS);
              let res = await approveTraining(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                $("#trainingseminaralert").slideUp(500);
              });
              router_default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "rejectTrainingSeminarForm",
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
                    $('#rejectTrainingSeminar').modal('toggle');
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

/* harmony default export */ var training_seminar = (TrainingSeminar);

/***/ })

};
;