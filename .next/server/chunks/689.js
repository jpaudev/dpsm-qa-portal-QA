exports.id = 689;
exports.ids = [689];
exports.modules = {

/***/ 4689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ faculty_load_table; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/name-display.js
var name_display = __webpack_require__(1588);
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
          url: "http://localhost:3001/api" + '/faculty/load',
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
      academicYear: currYear,
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
              placeholder: "Input subject",
              required: true
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
              placeholder: "Input section",
              required: true
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
;// CONCATENATED MODULE: ./services/admin/updateFacultyLoad.js


async function updateFacultyLoad(formData, token, facultyId) {
  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/load/' + facultyId;

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
        const response = await external_axios_default().delete("http://localhost:3001/api" + "/faculty/load/" + facultyId, {
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
;// CONCATENATED MODULE: ./components/faculty/faculty-load/faculty-load-table.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function FacultyLoadTable(props) {
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
  let deleteClass = 0;
  let editClass = 0;
  const [currData, setData] = external_react_default().useState({
    recordId: 0,
    subject: '',
    section: '',
    semester: '',
    academicYear: '',
    syllabus: ''
  });
  const name = props.name;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].recordId != null) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].subject
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].section
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].semester
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: props.children[key].academicYear - 1 + ' - ' + props.children[key].academicYear
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [props.children[key].syllabus && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                href: "http://localhost:3001/" + props.children[key].syllabus,
                style: {
                  color: 'white'
                },
                target: "_blank",
                children: "View"
              }), props.editClass && /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-warning",
                "data-toggle": "modal",
                "data-target": "#addSyllabus",
                onClick: () => {
                  setEdit(props.children[key].recordId);
                  setKey(editClass);
                },
                children: "Edit"
              })]
            }), props.editClass && !props.children[key].syllabus && /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "btn btn-warning",
              "data-toggle": "modal",
              "data-target": "#addSyllabus",
              onClick: () => {
                setEdit(props.children[key].recordId);
                setKey(editClass);
              },
              children: "Add Syllabus"
            }), !props.editClass && !props.children[key].syllabus && /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "None"
            })]
          }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editClass",
                onClick: () => {
                  setEdit(props.children[key].recordId);
                  setKey(editClass);
                },
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteClass",
                onClick: () => {
                  setDelete(props.children[key].recordId);
                },
                children: "Delete"
              })]
            })
          })]
        }, props.children[key].recordId);
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
    editClass = id;
  }

  function setDelete(id) {
    deleteClass = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].recordId == x) {
        setData(props.children[key]);

        if (props.children[key].syllabus) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            syllabus: props.children[key].syllabus
          }));
        } else {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            syllabus: 'None'
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      align: "center",
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
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        className: "table table-striped table-sm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Subject"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Section"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Semester"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Academic Year"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Syllabus"
            }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Action"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: content
        })]
      })
    }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(faculty_load_form, {
        token: props.token,
        facultyId: props.facultyId,
        role: props.role
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
              let form = document.getElementById('editClassForm');
              let formData = new FormData(form);
              formData.append('recordId', currData.recordId);
              let alert = document.getElementById("loadalert");
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
                children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
                      id: "subject",
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
                      id: "section",
                      placeholder: "Input section"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "semester",
                      children: " Semester "
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Field, {
                      as: "select",
                      className: "form-control",
                      name: "semester",
                      id: "semester",
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
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "Year",
                      children: " Academic Year "
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      as: "select",
                      className: "form-control",
                      name: "academicYear",
                      id: "academicYear",
                      required: true,
                      children: options
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
              children: "Delete Class Record"
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
              children: " Are you sure you want to delete this faculty load information? "
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
                let alert = document.getElementById("loadalert");
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
              console.log(props);
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
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      htmlFor: "syllabus",
                      children: [" Add/Edit Syllabus [Uploaded: ", currData.syllabus, "] "]
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
    })]
  });
}

/* harmony default export */ var faculty_load_table = (FacultyLoadTable);

/***/ })

};
;