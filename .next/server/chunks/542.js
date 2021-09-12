exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 7542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_unit_head; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(8237);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/sidebar-unit-head.js





function SidebarUnitHead() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3045845003" + " " + "col-2",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3045845003" + " " + "list-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        "data-toggle": "collapse",
        href: "#facultyMenu",
        "aria-controls": "facultyMenu",
        className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-secondary",
        children: " Faculty "
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "facultyMenu",
        className: "jsx-3045845003" + " " + "collapse show",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success",
            children: "Dashboard"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head/basic-info",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success",
            children: "Basic Information"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head/accomplishment",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success",
            children: "Accomplishment"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head/faculty-load",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success",
            children: "Faculty Load"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head/evaluation",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success ",
            children: "Peer Evaluation"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/unit-head/faculty/all",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-success ",
            children: "Faculty List"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3045845003" + " " + "list-group",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/student",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-secondary",
          children: "Student"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3045845003" + " " + "list-group",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/alumni",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-secondary",
          children: "Alumni"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3045845003" + " " + "list-group",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/department-activities",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "jsx-3045845003" + " " + "list-group-item list-group-item-action list-group-item-secondary",
          children: "Department Activities"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3045845003",
      children: [".col-2.jsx-3045845003{background-color:#017823;}", ".list-group-item-success.jsx-3045845003{text-indent:20%;}"]
    })]
  });
}

/* harmony default export */ var sidebar_unit_head = (SidebarUnitHead);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(1318);
// EXTERNAL MODULE: ./components/content.js
var content = __webpack_require__(4176);
;// CONCATENATED MODULE: ./components/layout-unit-head.js








function LayoutUnitHead(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "DPSM-QA-PORTAL"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      id: "layout_row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar_unit_head, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-10",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: props.children
        })
      })]
    })]
  });
}

/* harmony default export */ var layout_unit_head = (LayoutUnitHead);

/***/ })

};
;