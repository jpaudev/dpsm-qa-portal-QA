exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 9187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ faculty_load; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./services/admin/updateFacultyLoad.js


async function updateFacultyLoad(formData, token, facultyId) {
  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/faculty/load/' + facultyId;

      if (formData.get('setResults') == "") {
        formData.delete('setResults');
      }

      for (var value of formData.entries()) {
        console.log(value[0] + ' ' + value[1]);
      }

      const response = await external_axios_default()({
        method: 'PUT',
        url: url,
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
;// CONCATENATED MODULE: ./services/admin/deleteFacultyLoad.js


async function deleteFacultyLoad(data, token, facultyId) {
  try {
    if (token) {
      try {
        const response = await external_axios_default().delete("https://api.dpsmqaportal.com/api/faculty/load/" + facultyId, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            recordId: `${data}`
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
;// CONCATENATED MODULE: ./components/faculty/faculty-load/faculty-load-semester.js








function FacultyLoadSemester(props) {
  let deleteClass = 0;
  let editClass = 0;

  function setDelete(id) {
    deleteClass = id;
  }

  function setEdit(id) {
    editClass = id;
  }

  function setKey(x) {
    Object.keys(props.records).map(key => {
      if (props.records[key].recordId == x) {
        setData(props.records[key]);
      }
    });
  }

  let ctr = 0;
  const [currData, setData] = external_react_default().useState({
    recordId: 0,
    subject: '',
    section: '',
    setResults: '',
    syllabus: ''
  });
  let content = Object.keys(props.records).map(key => {
    ctr++;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
        children: props.records[key].subject
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: props.records[key].section
      }), props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [props.records[key].syllabus && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "btn-grp",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-info",
            href: "https://api.dpsmqaportal.com/" + props.records[key].syllabus,
            style: {
              color: 'white'
            },
            target: "_blank",
            children: "View"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-warning",
            "data-toggle": "modal",
            "data-target": "#addSyllabus",
            onClick: () => {
              setEdit(props.records[key].recordId);
              setKey(editClass);
            },
            children: "Edit"
          })]
        }), !props.records[key].syllabus && /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "btn btn-warning",
          "data-toggle": "modal",
          "data-target": "#addSyllabus",
          onClick: () => {
            setEdit(props.records[key].recordId);
            setKey(editClass);
          },
          children: "Add Syllabus"
        })]
      }), props.facultyFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [props.records[key].setResults && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "btn-grp",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-primary",
            onClick: () => {
              let file = props.records[key].setResults;
              downloadProof(file, props.token);
            },
            children: "Download"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-info",
            href: "https://api.dpsmqaportal.com/" + props.records[key].setResults,
            style: {
              color: 'white'
            },
            target: "_blank",
            children: "Preview"
          })]
        }), !props.records[key].setResults && /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "None"
        })]
      }), props.clerkFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [props.records[key].setResults && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "btn-grp",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-primary",
            onClick: () => {
              let file = props.records[key].setResults;
              downloadProof(file, props.token);
            },
            children: "Download"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-info",
            href: "https://api.dpsmqaportal.com/" + props.records[key].setResults,
            style: {
              color: 'white'
            },
            target: "_blank",
            children: "Preview"
          })]
        }), !props.records[key].setResults && /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "None"
        })]
      }), props.clerkFlag && /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "btn-group",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-info",
            "data-toggle": "modal",
            "data-target": "#editClass",
            onClick: () => {
              setEdit(props.records[key].recordId);
              setKey(editClass);
            },
            children: "Edit"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "btn btn-danger",
            "data-toggle": "modal",
            "data-target": "#deleteClass",
            onClick: () => {
              setDelete(props.records[key].recordId);
            },
            children: "Delete"
          })]
        })
      })]
    }, props.records[key].recordId);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        className: "table table-sm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Subject"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Section"
            }), !props.clerkFlag && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Syllabus"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "SET"
            }), props.clerkFlag && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: content
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editClass",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editClassLabel",
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
              id: "editClassLabel",
              children: "Update Class Record"
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
              let alert = document.getElementById("loadalert");
              let form = document.getElementById('editClassForm');
              let formData = new FormData(form);
              formData.append('recordId', currData.recordId);
              let res = await updateFacultyLoad(formData, props.token, props.facultyId);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#loadalert").slideUp(500);
              });
              router_default().push('/admin/' + props.facultyId, '/admin/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "editClassForm",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "subject",
                      children: " Subject "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "subject",
                      placeholder: "Input subject"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "section",
                      children: " Section "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      className: "form-control",
                      type: "text",
                      name: "section",
                      placeholder: "Input section"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "setResults",
                      children: " Add SET Results "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "setResults",
                      id: "setResults",
                      value: undefined
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "syllabus",
                      value: ""
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
                    $('#editClass').modal('toggle');
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
      id: "addSyllabus",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "addSyllabusLabel",
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
              id: "addSyllabusLabel",
              children: "Update Class Records"
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
              let alert = document.getElementById("loadalert");
              let form = document.getElementById('addSyllForm');
              let formData = new FormData(form);
              formData.append('recordId', currData.recordId);
              let res = await updateFacultyLoad(formData, props.token, props.facultyId);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#loadalert").slideUp(500);
              });
              router_default().push('/faculty/faculty-load', '/faculty/faculty-load');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
              id: "addSyllForm",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "modal-body",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "syllabus",
                      children: " Add Syllabus "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "syllabus",
                      id: "syllabus",
                      value: undefined
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "subject"
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "section"
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "setResults"
                    })]
                  })
                })
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
                    $('#addSyllabus').modal('toggle');
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
      id: "deleteClass",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteClassLabel",
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
              id: "deleteClassLabel",
              children: "Delete Class Record Information"
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
              children: " Are you sure you want to delete this class record? "
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
                let alert = document.getElementById("loadalert");
                $('#deleteClass').modal('toggle');
                let res = await deleteFacultyLoad(deleteClass, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#loadalert").slideUp(500);
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

/* harmony default export */ var faculty_load_semester = (FacultyLoadSemester);
;// CONCATENATED MODULE: ./services/admin/addFacultyLoad.js


async function addFacultyLoad(formData, token) {
  let cookieData = external_jsonwebtoken_default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        for (var value of formData.values()) {
          console.log(value);
        }

        const response = await external_axios_default()({
          method: 'POST',
          url: 'https://api.dpsmqaportal.com/api/faculty/load',
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
;// CONCATENATED MODULE: ./components/faculty/faculty-load/faculty-load-form.js







class FacultyLoadForm extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    let year = [];
    let currYear = new Date().getFullYear();

    for (let i = currYear; i >= 1970; i--) {
      year.push(i);
    }

    let options = Object.keys(year).map(i => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("option", {
        value: year[i],
        children: [year[i] - 1, "-", year[i]]
      });
    });
    let FacLoadDetails = {
      subject: "",
      section: "",
      semester: "1st Semester",
      acadYear: currYear,
      syllabus: ""
    };
    return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
      initialValues: FacLoadDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('facLoadForm');
        let formData = new FormData(form);
        let res = await addFacultyLoad(formData, this.props.token);
        let alert = document.getElementById("loadalert");

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#loadalert").slideUp(500);
        });
        resetForm();
        router_default().push('/admin/' + this.props.facultyId);
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
        id: "facLoadForm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: "Add Faculty Load"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
            className: "form-control",
            type: "hidden",
            name: "facultyId",
            value: this.props.facultyId
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Subject",
              children: " Subject "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "subject",
              placeholder: "Input subject"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Section",
              children: " Section "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              className: "form-control",
              type: "text",
              name: "section",
              placeholder: "Input section"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Semester",
              children: " Semester "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "semester",
              required: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "1st",
                children: "1st Semester"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "2nd",
                children: "2nd Semester"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Midyear",
                children: "Mid-Year"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "Year",
              children: " Academic Year "
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
              as: "select",
              className: "form-control",
              name: "academicYear",
              required: true,
              children: options
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

/* harmony default export */ var faculty_load_form = (FacultyLoadForm);
;// CONCATENATED MODULE: ./components/faculty/faculty-load/faculty-load.js







function FacultyLoader(props) {
  let content;

  if (props.children != null) {
    let currYear = [];
    let all = [];
    let year = props.children[0].academicYear;
    Object.keys(props.children).map(key => {
      if (year == props.children[key].academicYear && key != props.children.length - 1) {
        currYear.push(props.children[key]);
      } else {
        if (key == props.children.length - 1) currYear.push(props.children[key]);
        let currSem = [];
        let newYear = [];
        let sem = currYear[0].semester;
        Object.keys(currYear).map(e => {
          if (sem == currYear[e].semester) {
            currSem.push(currYear[e]);
          } else {
            newYear.push(currSem);
            currSem = [];
            currSem.push(currYear[e]);
            sem = currYear[e].semester;
          }

          if (e == currYear.length - 1) {
            newYear.push(currSem);
          }
        });
        all.push(newYear);
        currYear = [];
        currYear.push(props.children[key]);
        year = props.children[key].academicYear;
      }
    });
    content = Object.keys(all).map(key => {
      year = all[key];
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "list-group-item list-group-item-action list-group-item-secondary",
          "data-target": "#" + year[key][0].academicYear,
          "data-toggle": "collapse",
          "aria-controls": year[key][0].academicYear,
          children: ["AY ", year[key][0].academicYear - 1, "-", year[key][0].academicYear]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "list-group",
          id: year[key][0].academicYear,
          children: Object.keys(year).map(i => {
            let sem = year[i];
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "list-group-item list-group-item-action list-group-item-info",
                "data-target": "#" + sem[0].semester,
                "data-toggle": "collapse",
                "aria-controls": sem[0].semester,
                children: [sem[0].semester, " Semester"]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: sem[0].semester,
                className: "jumbotron",
                children: /*#__PURE__*/jsx_runtime_.jsx(faculty_load_semester, {
                  records: sem,
                  clerkFlag: props.clerkFlag,
                  facultyFlag: props.facultyFlag,
                  token: props.token,
                  facultyId: props.facultyId
                })
              })]
            });
          })
        })]
      });
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx("p", {
      align: "center",
      children: "No data available!"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-246082370",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
      className: "jsx-246082370",
      children: " Faculty Load "
    }), /*#__PURE__*/jsx_runtime_.jsx(name_display/* default */.Z, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "alert",
      id: "loadalert",
      style: {
        visibility: "hidden"
      },
      className: "jsx-246082370" + " " + "alert alert-success"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-246082370" + " " + "list-group",
      children: content
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "246082370",
      children: [".list-group-item-info.jsx-246082370{text-indent:5%;}"]
    }), props.clerkFlag && /*#__PURE__*/jsx_runtime_.jsx(faculty_load_form, {
      token: props.token,
      facultyId: props.facultyId,
      clerkFlag: props.clerkFlag,
      facultyFlag: props.facultyFlag
    })]
  });
}

/* harmony default export */ var faculty_load = (FacultyLoader);

/***/ })

};
;