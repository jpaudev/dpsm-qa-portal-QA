exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ facultyList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./services/admin/updateUser.js

async function updateUser(data, token) {
  try {
    if (token) {
      let url = 'https://api.dpsmqaportal.com/api/user/' + `${data.userId}`;
      const response = await external_axios_default()({
        method: 'PUT',
        url: url,
        data: {
          status: `${data.status}`,
          remarks: `${data.remarks}`
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
;// CONCATENATED MODULE: ./components/faculty/facultyList.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function FacultyList(props) {
  let chem;
  let mcsu;
  let physgeo;
  let user = 0;
  const [currData, setData] = external_react_default().useState({
    userId: 0,
    status: '',
    remarks: '',
    facultyName: ''
  });
  let activeRemarksStyle;
  let inactiveRemarksStyle;

  function handleInputChange(id, event) {
    if (id == 'status') setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value,
      ['remarks']: ''
    }));else setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  if (currData.status == 'Inactive') {
    activeRemarksStyle = 'none';
    inactiveRemarksStyle = 'block';
  } else {
    activeRemarksStyle = 'block';
    inactiveRemarksStyle = 'none';
  }

  if (props.children != null) {
    let path;
    if (props.path == "approval") path = '/faculty/approval/';else if (props.path == 'admin') path = '/admin/';else if (props.path == 'info') path = '/faculty/view/';
    chem = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 1) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  forApproval: faculty[index].faculty_personal_info,
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                })
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              })
            })]
          });
        });
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Name"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Status"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Remarks"
                }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Action"
                })]
              }), facultyList]
            })
          })]
        });
      }
    });
    mcsu = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 2) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                })
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              })
            })]
          });
        });
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Name"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Status"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Remarks"
                }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Action"
                })]
              }), facultyList]
            })
          })]
        });
      }
    });
    physgeo = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 3) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                })
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              })
            }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              })
            })]
          });
        });
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Name"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Status"
                }), props.path != 'approval' && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Remarks"
                }), props.role == 5 && /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Action"
                })]
              }), facultyList]
            })
          })]
        });
      }
    });

    function setEdit(id) {
      user = id;
    }

    async function setKey(x) {
      await Object.keys(props.children).map(async key => {
        let faculty = props.children[key].faculty_units;
        await Object.keys(faculty).map(async index => {
          if (faculty[index].faculty_personal_info.user.userId == x) {
            await setData({
              userId: x,
              status: faculty[index].faculty_personal_info.user.status,
              remarks: faculty[index].faculty_personal_info.user.remarks,
              facultyName: faculty[index].faculty_personal_info.lastName + ', ' + faculty[index].faculty_personal_info.firstName
            });
          }
        });
      });
    }
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      align: "center",
      children: "No approvals needed!"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "alert alert-success",
      role: "alert",
      id: "facultyStatusalert",
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), chem, /*#__PURE__*/jsx_runtime_.jsx("br", {}), mcsu, /*#__PURE__*/jsx_runtime_.jsx("br", {}), physgeo, /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade",
      id: "editStatus",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editStatus",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
              className: "modal-title",
              id: "editStatus",
              children: ["Update Faculty Status - ", currData.facultyName]
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
                    htmlFor: "Status",
                    children: " Status "
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form-control",
                    name: "Status",
                    id: "Status",
                    value: currData.status,
                    onChange: e => handleInputChange("status", e),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "Active",
                      children: "Active"
                    }, "active"), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive")]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                id: "activeremarksrow",
                style: {
                  display: activeRemarksStyle
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form-control",
                    name: "Remarks",
                    id: "Remarks",
                    value: currData.remarks || '',
                    onChange: e => handleInputChange("remarks", e),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "",
                      children: "-- SELECT REMARKS --"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "On Leave",
                      children: "On Leave"
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row",
                id: "inactiveremarksrow",
                style: {
                  display: inactiveRemarksStyle
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form-control",
                    name: "Remarks",
                    id: "Remarks",
                    value: currData.remarks || '',
                    onChange: e => handleInputChange("remarks", e),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "",
                      children: "-- SELECT REMARKS --"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "Retired",
                      children: "Retired"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "Resigned",
                      children: "Resigned"
                    })]
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
                $('#editStatus').modal('toggle');
                let alert = document.getElementById("facultyStatusalert");
                let res = await updateUser(currData, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#facultyStatusalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#facultyStatusalert").slideUp(500);
                });
                router_default().push('/admin');
              },
              children: "Save changes"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var facultyList = (FacultyList);

/***/ }),

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

/***/ })

};
;