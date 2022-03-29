exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 4252:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ evaluation; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/unit-head/faculty-list/evaluation/evaluation-semester.js



function EvaluationSemester() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
      children: " Your Grade: "
    }), " 1.75"]
  });
}

/* harmony default export */ var evaluation_semester = (EvaluationSemester);
;// CONCATENATED MODULE: ./components/unit-head/faculty-list/evaluation/evaluation.js




function Evaluation() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "list-group",
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20202021",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20202021",
      children: "AY 2020-2021"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "evaluation_ay20202021",
      className: "jumbotron collapse",
      children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20192020",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20192020",
      children: "AY 2019-2020"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "evaluation_ay20192020",
      className: "jumbotron collapse",
      children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "list-group-item list-group-item-action list-group-item-secondary",
      href: "#evaluation_ay20182019",
      "data-toggle": "collapse",
      "aria-controls": "evaluation_ay20182019",
      children: "AY 2018-2019"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "evaluation_ay20182019",
      className: "jumbotron collapse",
      children: /*#__PURE__*/jsx_runtime_.jsx(evaluation_semester, {})
    })]
  });
}

/* harmony default export */ var evaluation = (Evaluation);

/***/ })

};
;