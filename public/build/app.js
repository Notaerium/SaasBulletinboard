"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/react/App.tsx":
/*!******************************!*\
  !*** ./assets/react/App.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Login */ "./assets/react/components/Login.tsx");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SignUp */ "./assets/react/components/SignUp.tsx");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Board */ "./assets/react/components/Board.tsx");
/* harmony import */ var _components_AddUpdatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AddUpdatePost */ "./assets/react/components/AddUpdatePost.tsx");






function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/login",
    element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/signup",
    element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/create_post",
    element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AddUpdatePost__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Board__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/react/components/AddPostBtn.tsx":
/*!************************************************!*\
  !*** ./assets/react/components/AddPostBtn.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


//add button bottom right of the screen
var AddBtn = function AddBtn() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var navigateAddPost = function navigateAddPost() {
    navigate('/create_post');
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-secondary add",
    onClick: navigateAddPost
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-plus",
    viewBox: "0 0 16 16"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddBtn);

/***/ }),

/***/ "./assets/react/components/AddUpdatePost.tsx":
/*!***************************************************!*\
  !*** ./assets/react/components/AddUpdatePost.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");












var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};



//Form to add a post
var AddPost = function AddPost() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(''),
    title = _a[0],
    setTitle = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(35),
    maxLengthTitle = _b[0],
    setMaxLength = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(''),
    text = _c[0],
    setText = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([,]),
    categories = _d[0],
    setCategories = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
    now = _e[0],
    setNow = _e[1];
  var _f = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
    suppr = _f[0],
    setSuppr = _f[1];
  var _g = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(),
    start = _g[0],
    setStart = _g[1];
  var _h = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(),
    end = _h[0],
    setEnd = _h[1];
  var _j = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
    posting = _j[0],
    setPosting = _j[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  //function that add all the selected categories into an array
  function handleCategories(event) {
    var boxValue = event.target.value; //we get the box value
    if (event.target.name !== "categories") {
      //If not unique and optional (urgent and important)
      if (event.target.checked && !categories.includes(boxValue)) {
        //if checked and not already in the categories array, we add it
        setCategories(function (prep) {
          return __spreadArray(__spreadArray([], prep, true), [boxValue], false);
        });
      } else if (!event.target.checked && categories.includes(boxValue)) {
        //if unchecked and in the categories array, we remove it
        setCategories(categories.filter(function (category) {
          return category !== boxValue;
        }));
      }
    } else {
      //If it is a unique and not optional category (meeting, information, event, request)
      var changeCategories = categories.slice(1); //in the categories array, we change the value of the unique category by the new one
      setCategories(__spreadArray([event.target.value], changeCategories, true));
    }
  }
  //if we click on now, the display date will be effective right away and the post will be visible as soon as the user go back on the
  //noticeboard. We get the current date in milliseconds and format it so that it matches the datetime format of sql.
  //Also, if the button Now is checked, we remove the datetime input so that the user understand that they can't chose several dates
  function handleNow(event) {
    if (event.target.checked) {
      setNow(true);
      var currentDate = new Date();
      var startTime = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      setStart(startTime);
    } else setNow(false);
  }
  //If a post suppression date is chosen, then the post will be deleted as soon as the date is reach and someone log in the board.
  //But if the undefined suppression date is checked, then the post will be visible as long as no one manually delete it.
  //In this case, send 'null' to the db and hide the datetime input.
  function handleSuppr(event) {
    if (event.target.checked) {
      setSuppr(true);
      setEnd(null);
    } else setSuppr(false);
  }
  //Send the post to the db
  function sendPost(post) {
    setPosting(true);
    fetch("/api/post/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(function () {
      navigate("/");
    });
  }
  //Load the form data in a variable and send it to the db 
  function handleSubmit(event) {
    event.preventDefault();
    if (title.length === 0 || text.length === 0) {
      alert("The title and the body are needed");
    } else {
      if (now) {
        setStart(Date.now());
      }
      var fData = {
        'title': title,
        'body': text,
        'categories': categories,
        'displayTime': start,
        'suppressionTime': end
      };
      sendPost(fData);
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    id: "createForm",
    className: "text-center d-flex flex-column justify-content-center align-item-center row mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", {
    className: "title text-center"
  }, "Create your post")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("form", {
    method: "post",
    className: "col-md-8 align-self-center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "title",
    className: "form-label"
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "email",
    className: "form-control",
    id: "title",
    name: "title",
    placeholder: "My title",
    maxLength: maxLengthTitle,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "int-fontSize"
  }, "Character remaining ", maxLengthTitle - title.length))), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "tinyTextarea",
    className: "form-label"
  }, "Text"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "alert alert-warning alert-dismissible",
    role: "alert",
    style: {
      fontSize: '0.8em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "int-fontSize"
  }, "*Images' names can't have special characters"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "alert",
    "aria-label": "Close"
  })), react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_13__.Editor, {
    id: "tinyTextarea",
    apiKey: 'p9pxhyk7tgn0cvgpyxtvd40bdlej0ynbemvt61nsz9mde7ba',
    initialValue: "Write your text here",
    init: {
      height: 800,
      menubar: false,
      plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'],
      toolbar1: '| blocks |' + 'bold italic underline forecolor',
      toolbar2: 'alignleft aligncenter alignright | link image | help |',
      images_upload_url: "/api/image/upload",
      image_title: true,
      automatic_uploads: true,
      image_advtab: false,
      image_uploadtab: true,
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    },
    onEditorChange: function onEditorChange(content, editor) {
      setText(content);
    }
  })), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    id: "categories",
    className: "d-flex flex-collumn row justify-content-between mt-3 border border-dark rounded"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    id: "unique",
    className: "d-flex justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "radio",
    id: "information",
    name: "categories",
    value: "Information",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "information"
  }, "Information")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "radio",
    id: "meeting",
    name: "categories",
    value: "Meeting notice",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "meeting"
  }, "Meeting Notice")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "radio",
    id: "event",
    name: "categories",
    value: "Event",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "event"
  }, "Event")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "radio",
    id: "request",
    name: "categories",
    value: "Request",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "request"
  }, "Request"))), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "d-flex flex-row justify-centent-center align-item-center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "checkbox",
    id: "important",
    name: "important",
    value: "Important",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "important"
  }, "Important")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "option"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "checkbox",
    id: "urgent",
    name: "urgent",
    value: "Urgent",
    onChange: handleCategories
  }), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "urgent"
  }, "Urgent")))), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "displayTime d-flex flex-column justify-content-between mt-3 p-2 border border-dark rounded w-100"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "font-weight-bold"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, "Select when your post will appear on the board:"), " "), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "d-flex flex-row justify-content-center align-item-center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "now"
  }, "Now"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "checkbox",
    id: "now",
    name: "now",
    value: "now",
    onChange: handleNow
  })), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, !now && react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "datetime-local",
    id: "start",
    name: "start",
    min: new Date().toISOString().slice(0, -8),
    onChange: function onChange(e) {
      return setStart(e.target.value);
    }
  })))), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "displayTime d-flex flex-column justify-content-between mt-3 p-2 border border-dark rounded w-100"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "font-weight-bold"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, "Select suppression date: ")), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "d-flex flex-row justify-content-center align-item-center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("label", {
    htmlFor: "undefined"
  }, "Undefined suppression date"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "checkbox",
    id: "undefined",
    name: "undefined",
    value: "undefined",
    onChange: handleSuppr
  })), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, !suppr && react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "datetime-local",
    id: "end",
    name: "end",
    min: start,
    onChange: function onChange(e) {
      return setEnd(e.target.value);
    }
  })))), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("input", {
    type: "submit",
    value: "Post",
    className: "btn btn-primary m-5",
    onClick: handleSubmit
  })), posting && react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "text-success"
  }, "... Save post"), react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
    to: "/"
  }, "Back to notice board")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPost);

/***/ }),

/***/ "./assets/react/components/Board.tsx":
/*!*******************************************!*\
  !*** ./assets/react/components/Board.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Searchbar */ "./assets/react/components/Searchbar.tsx");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Post */ "./assets/react/components/Post.tsx");
/* harmony import */ var _AddPostBtn__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AddPostBtn */ "./assets/react/components/AddPostBtn.tsx");
/* harmony import */ var _ZoomPost__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ZoomPost */ "./assets/react/components/ZoomPost.tsx");























var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};






var Board = function Board() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(['']),
    userRole = _a[0],
    setUserRole = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    likedPost = _b[0],
    setLikedPost = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(true),
    isVerified = _c[0],
    setIsVerified = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(),
    posts = _d[0],
    setPosts = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(''),
    focusCat = _e[0],
    setFocusCat = _e[1];
  var _f = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(''),
    search = _f[0],
    setSearch = _f[1];
  var _g = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(),
    zoom = _g[0],
    setZoom = _g[1];
  var _h = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(),
    zoomLike = _h[0],
    setZoomLike = _h[1];
  var _j = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(),
    zoomPost = _j[0],
    setZoomPost = _j[1];
  var _k = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(),
    zoomedSupprId = _k[0],
    setZoomedSupprId = _k[1];
  var isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_23__.useRef)(true);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    if (isInitialMount.current) {
      getPosts();
      isLoggedIn();
      getUserRole();
      getVerification();
      isInitialMount.current = false;
    }
    postsIdsLikedbyUser();
    checkURL();
  }, []);
  //When zoomed, we want to set the liked post button on like or unlike on the board too.
  //We check the ids and if they match, return the value of the like button from the zoom to the board
  function likeOnBoard2(zoomId, postId) {
    if (zoomId == postId) return zoomLike;
  }
  //Get all the posts from the db to display them
  function getPosts() {
    fetch('/api/post/getAll').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      var reversed = data.reverse(); //display from the most recent to the most ancient
      setPosts(reversed);
    });
  }
  //If someone get to the notice board from the url without being logged in, they are redirected to the login page.
  function isLoggedIn() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/api/user/check')];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              data == true ? "" : navigate("/login");
            });
            return [2 /*return*/];
        }
      });
    });
  }
  //get the Current role to allow things or not
  function getUserRole() {
    fetch('/api/user/getRole').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      setUserRole(data);
    });
  }
  //if the user is not verified yet with his mail, this person won't be able to post anything, even if the role should be enough
  function getVerification() {
    fetch('/api/user/verified').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      setIsVerified(data);
    });
  }
  //if the verify link expired, we allow the user to resend a mail
  function handleResend() {
    fetch('/api/user/reverif').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    });
  }
  //Return an array of categories from the post object. Used to show the small category pin and
  // to filter the posts from the selection in the searchbar. Called when displaying a specific post.
  function handleCategories(objCategories) {
    var categories = [];
    objCategories.forEach(function (objCategory) {
      categories.push(objCategory.category);
    });
    return categories;
  }
  //At the initialization, get all the posts liked by the current user so that the states of the board is as the user left it.
  function postsIdsLikedbyUser() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('api/like/get')];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              //object array [{1: postId},...] I need an array of the values postId now. That is why in the forEach I add post[1]
              data.forEach(function (post) {
                setLikedPost(function (likedPost) {
                  return __spreadArray(__spreadArray([], likedPost, true), [post[1]], false);
                });
              });
            });
            return [2 /*return*/];
        }
      });
    });
  }
  //Check here if clicked on the trash can or like button to not zoom for each action done on a card.
  //If the user clicked anywhere else on the card, then it is zoomed with the clicked card datas. 
  function handleZoomPost(post, e) {
    if (e.target.id != "like_".concat(post.id) && e.target.id != "can_".concat(post.id) && e.target.id != "thumb_".concat(post.id) && e.target.id != "delete_".concat(post.id) && e.target.id != "div_".concat(post.id)) {
      //check the id of the element clicked to not open up the zoomed post
      navigate({
        search: "?".concat((0,react_router_dom__WEBPACK_IMPORTED_MODULE_29__.createSearchParams)({
          id: post.id
        }))
      });
      setZoom(true);
      setZoomPost(post);
    }
  }
  //We check if there is a parameter in the url.
  // If there is an 'id' parameter: we get the post details with fetch and zoom with these datas.
  function checkURL() {
    return __awaiter(this, void 0, void 0, function () {
      var searchParams, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            searchParams = new URLSearchParams(window.location.search);
            if (!searchParams.has('id')) return [3 /*break*/, 2];
            return [4 /*yield*/, fetch("/api/post/get", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'id': searchParams.get('id')
              })
            })];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              setZoomPost(data);
              setZoom(true);
            });
            _a.label = 2;
          case 2:
            return [2 /*return*/];
        }
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "d-flex",
    style: {
      overflowX: 'hidden'
    }
  }, react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: " d-flex flex-column on-bot"
  }, react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_Searchbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    changeFocusCat: function changeFocusCat(focusCat) {
      return setFocusCat(focusCat);
    },
    changeSearch: function changeSearch(search) {
      return setSearch(search);
    }
  })), !isVerified && react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "alert alert-warning alert-dismissible",
    role: "alert"
  }, "Your account is not yet verified. Please check your mailbox or send another ", react__WEBPACK_IMPORTED_MODULE_23___default().createElement("a", {
    href: "",
    onClick: handleResend
  }, "activation link"), ".", react__WEBPACK_IMPORTED_MODULE_23___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "alert",
    "aria-label": "Close"
  })), react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "card-group d-flex flex-row justify-content-center",
    style: {
      width: "100vw"
    }
  }, react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "d-flex flex-wrap justify-content-center",
    style: {
      width: "90%"
    }
  }, posts === null || posts === void 0 ? void 0 : posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
      id: "card",
      key: post.id
    }, react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_Post__WEBPACK_IMPORTED_MODULE_25__["default"], {
      id: post.id,
      title: post.title,
      userLastName: post.user.lastname,
      userDepartment: post.user.department,
      categories: handleCategories(post.categories),
      body: post.body,
      display_date: post.start_display_date,
      end_date: post.delete_date,
      nbrLike: post.postsLikes.length,
      likedPost: likedPost,
      userRole: userRole,
      ownerId: post.user.id,
      focusCat: focusCat,
      focusText: search,
      onClick: function onClick(e) {
        return handleZoomPost(post, e);
      },
      zoomLiked: zoomPost ? likeOnBoard2(zoomPost.id, post.id) : null,
      zoomSupprId: zoomedSupprId
    }));
  }))), isVerified && (userRole.includes('ROLE_DEPARTMENT_ADMIN') || userRole.includes('ROLE_ADMIN')) && react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "fixed-bottom d-flex justify-content-end m-1"
  }, react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_AddPostBtn__WEBPACK_IMPORTED_MODULE_26__["default"], null))), zoomPost && zoom && react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_ZoomPost__WEBPACK_IMPORTED_MODULE_27__["default"], {
    id: zoomPost.id,
    title: zoomPost.title,
    userLastName: zoomPost.user.lastname,
    userDepartment: zoomPost.user.department,
    categories: handleCategories(zoomPost.categories),
    body: zoomPost.body,
    display_date: zoomPost.start_display_date,
    end_date: zoomPost.delete_date,
    nbrLike: zoomPost.postsLikes.length,
    likedPost: likedPost,
    userRole: userRole,
    ownerId: zoomPost.user.id,
    display: function display(zoom) {
      return setZoom(zoom);
    },
    onLike: setZoomLike,
    supprId: setZoomedSupprId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ }),

/***/ "./assets/react/components/Footer.tsx":
/*!********************************************!*\
  !*** ./assets/react/components/Footer.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex bg-dark text-light w-100 fixed-bottom justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "On demonstration purpose only. Made with Symfony 6.3 and Reactjs 18.2"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row me-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "me-2"
  }, "Vinh PARNEIX"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/Notaerium"
  }, "My github"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/react/components/Login.tsx":
/*!*******************************************!*\
  !*** ./assets/react/components/Login.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/Footer.tsx");














var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var Login = function Login() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(''),
    email = _a[0],
    setEmail = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(''),
    password = _b[0],
    setPassword = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    error = _c[0],
    setError = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    logging = _d[0],
    setLogging = _d[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    isLoggedIn();
  }, []);
  //If the user is already logged in but enter the login url, they will be redirected to the noticeboard
  function isLoggedIn() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/api/user/check')];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              data == true ? navigate("/") : '';
            });
            return [2 /*return*/];
        }
      });
    });
  }
  //We send the form datas that will be checked back-end. Show if there is an error or not.
  function login(datas) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch("/api/user/login", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datas)
            })];
          case 1:
            response = _a.sent();
            if (!response.redirected) {
              //If the back end couldn't log the user in
              setError(true);
              setLogging(false);
            } else {
              //if everything is okay
              setError(false);
              setLogging(false);
              location.replace("/"); //We need to do a location.replace here to reload the page. 
              //Kind of defeat the purpose of a spa but else no session variable will be created for the user.
            }

            return [2 /*return*/];
        }
      });
    });
  }
  //Check if the areas are properly filled and then send the datas to the back end to check in the db if the user exists.
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setLogging(true);
    if (email.length === 0 || password.length === 0) {
      alert("You missed something");
    }
    var fData = {
      'email': email,
      'password': password
    };
    login(fData);
  };
  return react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "d-flex flex-column align-item-center justify-content-center",
    style: {
      height: '100vh'
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    id: "loginForm",
    className: "text-center justify-content-center align-item-center row mt-5"
  }, error && react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "bg-danger text-white"
  }, "Can't Login, check your email address or password."), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", {
    className: "title text-center"
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("form", {
    method: "post",
    className: "col-md-8",
    action: "/",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    htmlFor: "email"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "form-control",
    autoComplete: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true,
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    htmlFor: "password"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    className: "form-control",
    autoComplete: "current-password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "hidden",
    name: "_csrf_token",
    value: "{{ csrf_token('authenticate') }}"
  }), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "submit",
    value: "Login",
    className: "btn btn-primary m-5"
  })), logging && react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "text-success"
  }, "... Logging in"), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, "No account? ", react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    to: '/signup'
  }, "Create one here!")), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, "Here are the ids and password for the test account : 'john.lemon@admin.com' at the password 'John123'")), react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/react/components/Post.tsx":
/*!******************************************!*\
  !*** ./assets/react/components/Post.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");













var Post = function Post(_a) {
  var id = _a.id,
    title = _a.title,
    categories = _a.categories,
    body = _a.body,
    display_date = _a.display_date,
    end_date = _a.end_date,
    userLastName = _a.userLastName,
    userDepartment = _a.userDepartment,
    nbrLike = _a.nbrLike,
    likedPost = _a.likedPost,
    userRole = _a.userRole,
    ownerId = _a.ownerId,
    focusCat = _a.focusCat,
    focusText = _a.focusText,
    onClick = _a.onClick,
    zoomLiked = _a.zoomLiked,
    zoomSupprId = _a.zoomSupprId;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
    suppr = _b[0],
    setSuppr = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
    ready = _c[0],
    setReady = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(),
    currentUserId = _d[0],
    setCurrentUserId = _d[1];
  var isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    if (isInitialMount.current) {
      //Avoid being called more times than necessary
      getUserId();
      postExpired();
      NoDisplayYet();
      isInitialMount.current = false;
    }
  });
  //Callback from the post's footer. If the user delete a post, manage the front end part of the suppression by setting a bool to true
  function handleCallback() {
    setSuppr(true);
  }
  //We get from the props the value of the Title/post owner name. If there is a match, we display the post, if not, we don't.
  //If there is no value from the props, we display it.
  //Condition : If the props 'focusText'(string) is somewhere in the title or owner name (both strings), we display.
  function searchFocus() {
    if (title.toLowerCase().includes(focusText.toLowerCase()) || userLastName.toLowerCase().includes(focusText.toLowerCase())) return true;else return false;
  }
  //If the post have a suppression date, then we check if it has passed yet. If it did, we don't display front end and delete it back end
  function postExpired() {
    if (end_date != null) {
      var expiration = Date.parse(end_date) - 3600000;
      var now = Date.now();
      if (now > expiration) {
        fetch('/api/post/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id
          })
        }).then(function () {
          setSuppr(true);
        });
      }
    }
  }
  //Check if the post is ready to be displayed by looking at the datetime chosed when created and comparing it to the current datetime.
  function NoDisplayYet() {
    var now = Date.now();
    now >= Date.parse(display_date) - 3600000 ? setReady(true) : setReady(false); //-3600000 because the date parse add 3600000 from the french time
  }
  //Check if the current user has the rights to delete a post or not. Normal user can't create or delete a post.
  //Department admins can delete their own post but that's it.
  //Admins can delete all the posts, even others'.
  function deletePerm(postOwnerId) {
    if (userRole.includes("ROLE_ADMIN") || userRole.includes("ROLE_DEPARTMENT_ADMIN") && currentUserId == postOwnerId) {
      return true;
    }
  }
  //For the function above (deletePerm) set the current user Id so that it can be compared to the post Id to know if they are the owner
  function getUserId() {
    fetch('/api/user/getId').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      setCurrentUserId(data);
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", null, suppr == false && ready == true && (categories.includes(focusCat) || focusCat == '') && zoomSupprId != id && searchFocus() && react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "card m-3 mb-1 shadow",
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "row d-flex flex-column justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "card-title card-header"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement(Head, {
    title: title,
    categories: categories
  })), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement(Body, {
    body: body,
    name: userLastName,
    department: userDepartment.department
  })), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "col-sm"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement(Footer, {
    id: id,
    nbrLike: nbrLike,
    display_date: display_date,
    title: title,
    name: userLastName,
    likedPost: likedPost,
    parentCallback: handleCallback,
    canDelete: deletePerm(ownerId),
    zoomLiked: zoomLiked
  }))))));
};
var Head = function Head(_a) {
  var title = _a.title,
    categories = _a.categories;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)('title.length'),
    titleSize = _b[0],
    setTitleSize = _b[1];
  var isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    if (isInitialMount.current) {
      getTitleSize();
      isInitialMount.current = false;
    }
  });
  //If the title is too long, break the line and reduce the font size so that it fills in the top of the card
  function getTitleSize() {
    if (title.length > 16) {
      setTitleSize('0.7rem');
    } else {
      setTitleSize('1rem');
    }
  }
  //Return the little category pin on the top right of the card.
  function displayCategory(category) {
    switch (category) {
      case 'Important':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#FF8B00",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "!");
      case 'Urgent':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#8000FF",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "U");
      case 'Information':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-success rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#009C18",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Info");
      case 'Request':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-dark rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#909090",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Req");
      case 'Meeting notice':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#7C84FF",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Meet");
      case 'Event':
        return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
          className: "border border-1 border-primary rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#77F9C4",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Evnt");
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "custom-card-titles d-flex justify-content-between "
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "text-decoration-underline fw-bold w-75",
    style: {
      fontSize: titleSize,
      height: '25px'
    }
  }, title), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "d-flex flex-row w-25 justify-content-around disable user-select-none",
    style: {
      fontSize: "0.7rem"
    }
  }, categories.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "ml-1",
      key: index
    }, displayCategory(category));
  })));
};
var Body = function Body(_a) {
  var body = _a.body,
    name = _a.name,
    department = _a.department;
  return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "d-flex fontSize-08 fw-bold justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", null, name), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", null, department)), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "cardBody overflow-auto custom-card-tags",
    style: {
      height: "9rem"
    }
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_12__["default"])(body)));
};
var Footer = function Footer(_a) {
  var id = _a.id,
    nbrLike = _a.nbrLike,
    display_date = _a.display_date,
    name = _a.name,
    title = _a.title,
    likedPost = _a.likedPost,
    parentCallback = _a.parentCallback,
    canDelete = _a.canDelete,
    zoomLiked = _a.zoomLiked;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(''),
    date = _b[0],
    setDate = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(nbrLike),
    likeCount = _c[0],
    setLikeCount = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(),
    userLike = _d[0],
    setUserLike = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
    load = _e[0],
    setLoad = _e[1];
  var isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(true);
  var isInitialZoomLike = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    alreadyLiked(); //need to be outside the initial mount, else might not be taken into account
    if (isInitialMount.current) {
      display_date = display_date.replace("T", " "); //Format the display date so that it's readable (without the T and the extra information)
      display_date = display_date.split("+");
      setDate(display_date[0]);
      isInitialMount.current = false;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    if (isInitialZoomLike.current) {
      //We don't want it to do anything at the initialization, only when there is a change.
      isInitialZoomLike.current = false;
    } else {
      if (zoomLiked != userLike && zoomLiked != null) {
        //If the result is different (can't like twice) and if the post is zoomed (if not receive null)
        setUserLike(zoomLiked);
        zoomLiked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
      }
    }
  }, [zoomLiked]);
  //If the post is already liked, then show it front end
  function alreadyLiked() {
    if (likedPost.includes(id) && !load) {
      setUserLike(true);
      setLoad(true); //once taken into account, then stop asking to know
    }
  }
  //Delete the post by its id in the back end and call the the parent component 'Post' to manage front end
  function handleSuppr() {
    var text = "Are you sure you want to delete the post " + title + " of " + name + "?";
    if (confirm(text) == true) {
      fetch('/api/post/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'id': id
        })
      }).then(function () {
        parentCallback();
      });
    } else {
      text = "You canceled!";
    }
  }
  function addLike() {
    fetch("/api/like/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postId': id
      })
    });
  }
  function removeLike() {
    fetch("/api/like/unlike", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postId': id
      })
    });
  }
  function handleLike() {
    if (userLike) {
      setUserLike(false);
      removeLike();
      setLikeCount(likeCount - 1); //to show something front end, without having to ask again to the back end and reload the page.
    } else {
      setUserLike(true);
      addLike();
      setLikeCount(likeCount + 1);
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "d-flex justify-content-between mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", null, userLike && react__WEBPACK_IMPORTED_MODULE_11___default().createElement("button", {
    id: "like_".concat(id),
    className: 'btn btn-sm btn-primary',
    onClick: handleLike
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("i", {
    id: "like_".concat(id),
    className: "fa fa-thumbs-up"
  })), !userLike && react__WEBPACK_IMPORTED_MODULE_11___default().createElement("button", {
    id: "like_".concat(id),
    className: 'btn btn-sm btn-secondary',
    onClick: handleLike
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("i", {
    id: "like_".concat(id),
    className: "fa fa-thumbs-up"
  })), " +", likeCount), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    style: {
      height: "1rem"
    },
    className: "d-flex justify-content-between align-items-end flex-column fontSize-08"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    style: {
      fontSize: "0.6rem"
    }
  }, date), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    id: "delete_".concat(id)
  }, canDelete == true && react__WEBPACK_IMPORTED_MODULE_11___default().createElement("button", {
    id: "delete_".concat(id),
    className: "btn btn-sm",
    onClick: handleSuppr
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("svg", {
    id: "delete_".concat(id),
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-trash",
    viewBox: "0 0 16 16"
  }, react__WEBPACK_IMPORTED_MODULE_11___default().createElement("path", {
    id: "delete_".concat(id),
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
  }), react__WEBPACK_IMPORTED_MODULE_11___default().createElement("path", {
    id: "delete_".concat(id),
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./assets/react/components/Searchbar.tsx":
/*!***********************************************!*\
  !*** ./assets/react/components/Searchbar.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");














var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


var Searchbar = function Searchbar(props) {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(),
    categories = _a[0],
    setCategories = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(''),
    userMail = _b[0],
    setUserMail = _b[1];
  var isInitMount = (0,react__WEBPACK_IMPORTED_MODULE_14__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (isInitMount.current) {
      getUserMail();
      getCategories();
      isInitMount.current = false;
    }
  });
  //get the Current mail
  function getUserMail() {
    fetch('/api/user/mail').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      setUserMail(data);
    });
  }
  function handleLogout(event) {
    event.preventDefault();
    fetch('/api/user/logout', {
      method: "POST"
    }).then(function () {
      location.replace("/login");
    });
  }
  //get all the categories so that we can loop on the array and display all the categories available for the user to filter
  //the displayed posts
  function getCategories() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/api/category/getCats')];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              setCategories(data);
            });
            return [2 /*return*/];
        }
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", {
    className: "navbar navbar-expand-lg bg-body-tertiary",
    style: {
      width: '100vw'
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "container-fluid"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "nav-item dropdown ms-auto"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link dropdown-toggle me-3",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, userMail), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "dropdown-menu dropdown-menu-start"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item",
    style: {
      gap: '1em',
      height: "2em"
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control me-sm-2 mt-sm-2 mt-lg-0",
    name: "search",
    id: "search",
    type: "search",
    placeholder: "Search by Title or poster lastname",
    "aria-label": "Search",
    onChange: function onChange(e) {
      return props.changeSearch(e.target.value);
    },
    style: {
      minWidth: '300px',
      maxWidth: '50%',
      height: '100%'
    }
  })), react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("select", {
    className: "form-select fontSize-08 mt-sm-3 mt-lg-0",
    name: "categories",
    id: "categories",
    style: {
      width: "10rem"
    },
    onChange: function onChange(e) {
      return props.changeFocusCat(e.target.value);
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default().createElement("option", {
    value: ""
  }, "-All categories-"), categories === null || categories === void 0 ? void 0 : categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_14___default().createElement("option", {
      key: category,
      value: category
    }, category);
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchbar);
// <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100vw'}}>
//     <div className="container-fluid">
//         <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="nav-item dropdown ms-auto">
//             <a className="nav-link dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 {userMail}
//             </a>
//             <ul className="dropdown-menu dropdown-menu-start">
//                 <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
//             </ul>
//         </div>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex bd-highlight" style={{gap:'1em', height:"2em"}}>
//                 <li className="nav-item">
//                     <input className="form-control mr-sm-2" name="search" id="search" type="search" placeholder="Search by Title or poster lastname" aria-label="Search"  onChange={(e) => props.changeSearch(e.target.value)} style={{minWidth:'300px', maxWidth:'50%', height:'100%'}}/>
//                 </li>
//                 <li className="nav-item">
//                     <select className="form-select fontSize-08" name="categories" id="categories" style={{width:"10rem"}} onChange={(e) => props.changeFocusCat(e.target.value)}>
//                         <option value="">-All categories-</option>
//                         {categories?.map((category) => (
//                             <option key={category} value={category}>{category}</option>
//                         ))}
//                     </select>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>

/***/ }),

/***/ "./assets/react/components/SignUp.tsx":
/*!********************************************!*\
  !*** ./assets/react/components/SignUp.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/Footer.tsx");
















var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var Signup = function Signup() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    firstname = _a[0],
    setFirstName = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    lastname = _b[0],
    setLastName = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    department = _c[0],
    setDepartment = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    email = _d[0],
    setEmail = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    password = _e[0],
    setPassword = _e[1];
  var _f = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
    departments = _f[0],
    setDepartments = _f[1];
  var _g = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(['']),
    role = _g[0],
    setRole = _g[1];
  var _h = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
    error = _h[0],
    setError = _h[1];
  var _j = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
    logging = _j[0],
    setLogging = _j[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    getDepartment();
    isLoggedIn();
    setRole(["ROLE_USER"]);
  }, []);
  //If already logged in, redirect to the board
  function isLoggedIn() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/api/user/check')];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              data == true ? navigate("/") : '';
            });
            return [2 /*return*/];
        }
      });
    });
  }
  //Get an array of departments so that the user can select in which department they are working.
  function getDepartment() {
    fetch('/api/user/departments').then(function (response) {
      if (response.ok) return response.json();
    }).then(function (data) {
      setDepartments(data);
    });
  }
  //Create the user from the form's datas in the database. Show if there has been issues. If succeed log the user and redirect them
  //to the noticeboard.
  function createUser(user) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch("/api/user/create", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })];
          case 1:
            response = _a.sent();
            if (!response.redirected) {
              setError(true);
              setLogging(false);
            } else {
              setError(false);
              setLogging(true);
              location.replace("/"); //We need to do a location.replace here to reload the page. 
              //Kind of defeat the purpose of a spa but else no session variable will be created for the user.
            }

            return [2 /*return*/];
        }
      });
    });
  }
  //The user can chose if they are department admins or not. For demonstration purpose.
  //It would be better to create a user management page where an admin can set other people to admin, department admin or users.
  //But this program is not meant to be used as it is in a company. This way, people can test the program more easily.
  function handleCheckbox(event) {
    if (event.target.checked) {
      setRole(["ROLE_DEPARTMENT_ADMIN"]);
    } else {
      setRole(["ROLE_USER"]);
    }
  }
  //Get datas from the form checking if every area have been filled (and removing potential unwanted blankspace)
  var handleSubmit = function handleSubmit(event) {
    if (firstname.trim().length === 0 || lastname.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
      alert("You missed something");
    } else {
      event.preventDefault();
      var fData = {
        'department_id': department,
        'email': email.trim().toLowerCase(),
        'role': role,
        'password': password,
        'firstname': firstname.trim(),
        'lastname': lastname.trim()
      };
      createUser(fData);
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "d-flex flex-column align-item-center justify-content-center",
    style: {
      height: '100vh'
    }
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    id: "loginForm",
    className: "text-center justify-content-center align-item-center grid row mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h1", {
    className: "title text-center"
  }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
    method: "post",
    className: "col-md-5",
    action: "/",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "firstname",
    className: "form-label"
  }, "Firstname"), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "text",
    className: "form-control",
    id: "firstname",
    name: "firstname",
    value: firstname,
    onChange: function onChange(e) {
      return setFirstName(e.target.value);
    },
    placeholder: "John"
  })), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "lastname",
    className: "form-label"
  }, "Lastname"), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "text",
    className: "form-control",
    id: "lastname",
    name: "lastname",
    value: lastname,
    onChange: function onChange(e) {
      return setLastName(e.target.value);
    },
    placeholder: "Lemon"
  })), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "department"
  }, "Department"), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    className: "form-select",
    name: "department",
    id: "department",
    value: department,
    onChange: function onChange(e) {
      return setDepartment(e.target.value);
    },
    "aria-label": "Default select example"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
    value: "0"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, "Open this select menu")), departments.map(function (_a, index) {
    var id = _a.id,
      department = _a.department;
    return react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      value: id,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, department));
  }))), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "emailAddress",
    className: "form-label"
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "email",
    className: "form-control",
    name: "emailAddress",
    id: "emailAddress",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "name@example.com"
  })), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "inputPassword",
    className: "form-label"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "password",
    name: "inputPassword",
    id: "inputPassword",
    className: "form-control",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    "aria-describedby": "passwordHelpBlock"
  })), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mb-3 d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "checkbox",
    id: "role",
    name: "role",
    onChange: handleCheckbox
  }), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", {
    htmlFor: "role"
  }, "Department Admin?")), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "submit",
    value: "Sign up",
    className: "btn btn-primary m-2"
  })), react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
    to: "/login"
  }, "Click here!"))), logging && react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", {
    className: "text-success"
  }, "... Creating account and logging in : Check your emails!")), react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./assets/react/components/ZoomPost.tsx":
/*!**********************************************!*\
  !*** ./assets/react/components/ZoomPost.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");






















var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};



var ZoomPost = function ZoomPost(_a) {
  var id = _a.id,
    title = _a.title,
    categories = _a.categories,
    body = _a.body,
    display_date = _a.display_date,
    userLastName = _a.userLastName,
    userDepartment = _a.userDepartment,
    nbrLike = _a.nbrLike,
    likedPost = _a.likedPost,
    userRole = _a.userRole,
    ownerId = _a.ownerId,
    display = _a.display,
    onLike = _a.onLike,
    supprId = _a.supprId;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(),
    currentUserId = _b[0],
    setCurrentUserId = _b[1];
  var isInitMound = (0,react__WEBPACK_IMPORTED_MODULE_22__.useRef)(true);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    if (isInitMound.current) {
      getUserId();
      isInitMound.current = false;
    }
  });
  //Send back to the board and send the post Id to the board so that it can stop displaying the deleted post
  function handleCallback() {
    supprId(id);
    navigate('/');
    display(false);
  }
  //important to set 'onLike' on null or the last action made on the zoomed post will be repercuted on the next zoomed post
  var back = function back() {
    onLike(null);
    navigate('/');
    display(false);
  };
  function deletePerm(postOwnerId) {
    if (userRole.includes("ROLE_ADMIN") || userRole.includes("ROLE_DEPARTMENT_ADMIN") && currentUserId == postOwnerId) {
      return true;
    }
  }
  function getUserId() {
    fetch('/api/user/getId').then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then(function (data) {
      setCurrentUserId(data);
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "position-fixed on-top overflow-hidden d-flex justify-content-center",
    style: {
      width: "100%",
      height: "100vh",
      backgroundColor: "rgb(33, 33, 33, 0.7)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card m-3 mb-1 d-flex flex-column",
    style: {
      opacity: '1',
      width: "40%",
      height: '95%',
      minHeight: '600px',
      minWidth: '400px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "container",
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card-title card-header d-flex justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    type: "button",
    className: "btn-close align-self-end",
    "aria-label": "Close",
    onClick: back
  }), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    style: {
      width: '90%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement(Head, {
    title: title,
    categories: categories
  }))), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement(Body, {
    body: body,
    name: userLastName,
    department: userDepartment.department
  })), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-sm"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement(Footer, {
    id: id,
    nbrLike: nbrLike,
    display_date: display_date,
    title: title,
    name: userLastName,
    likedPost: likedPost,
    parentCallback: handleCallback,
    canDelete: deletePerm(ownerId),
    onLike: onLike
  })))))));
};
var Head = function Head(_a) {
  var title = _a.title,
    categories = _a.categories;
  function displayCategory(category) {
    switch (category) {
      case 'Important':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#FF8B00",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "!");
      case 'Urgent':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#8000FF",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "U");
      case 'Information':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-success rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#009C18",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Info");
      case 'Request':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-dark rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#909090",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Req");
      case 'Meeting notice':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-danger rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#7C84FF",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Meet");
      case 'Event':
        return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
          className: "border border-1 border-primary rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow",
          style: {
            backgroundColor: "#77F9C4",
            width: "20px"
          },
          "data-mdb-toggle": "popover",
          "data-mdb-trigger": "hover",
          title: category
        }, "Evnt");
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "custom-card-titles d-flex justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "text-decoration-underline fw-bold",
    style: {
      fontSize: '1.2rem',
      height: '25px'
    }
  }, title), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "d-flex flex-row w-25 justify-content-around",
    style: {
      fontSize: "0.7rem"
    }
  }, categories.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "ml-1",
      key: index
    }, displayCategory(category));
  })));
};
var Body = function Body(_a) {
  var body = _a.body,
    name = _a.name,
    department = _a.department;
  return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    style: {
      height: '75vh'
    }
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "d-flex fontSize-25 fw-bold"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", null, "".concat(name, " from ").concat(department))), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "overflow-auto custom-card-tags",
    style: {
      height: '95%',
      width: '100%'
    }
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_23__["default"])(body)));
};
var Footer = function Footer(_a) {
  var id = _a.id,
    nbrLike = _a.nbrLike,
    display_date = _a.display_date,
    name = _a.name,
    title = _a.title,
    likedPost = _a.likedPost,
    parentCallback = _a.parentCallback,
    canDelete = _a.canDelete,
    onLike = _a.onLike;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(''),
    date = _b[0],
    setDate = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(nbrLike),
    likeCount = _c[0],
    setLikeCount = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    likeArray = _d[0],
    setLikeArray = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(),
    userLike = _e[0],
    setUserLike = _e[1];
  var _f = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(true),
    load = _f[0],
    setLoad = _f[1];
  var isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_22__.useRef)(true);
  var isMountZoomed = (0,react__WEBPACK_IMPORTED_MODULE_22__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    alreadyLiked(); //We load if the button is already liked or not, so that the user can unlike or like properly afterwards
    if (isInitialMount.current) {
      likedornot();
      display_date = display_date.replace("T", " "); // reformat the display date so that it is readable and nice to the user
      display_date = display_date.split("+");
      setDate(display_date[0]); //only [0] to remove what's not necessary
      isInitialMount.current = false;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    if (isMountZoomed.current) {
      isMountZoomed.current = false;
    } else {
      if (likeArray.includes(id) && !likedPost.includes(id)) {
        //if the post has been liked on the board
        setUserLike(true);
        setLikeCount(likeCount + 1);
      } else if (!likeArray.includes(id) && likedPost.includes(id)) {
        //if the post has been unliked on the board
        setUserLike(false);
        setLikeCount(likeCount - 1);
      }
    }
  }, [likeArray]);
  function alreadyLiked() {
    if (likedPost.includes(id) && load) {
      setUserLike(true);
      setLoad(false);
    }
  }
  //fetch if liked or not in the db (we compare the first array and the new one)
  //This function is meant that if a post is liked on the board, it is updated on the zoomed version
  function likedornot() {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch("api/like/get")];
          case 1:
            response = _a.sent();
            response.json().then(function (data) {
              data.forEach(function (post) {
                setLikeArray(function (likeArray) {
                  return __spreadArray(__spreadArray([], likeArray, true), [post[1]], false);
                });
              });
            });
            return [2 /*return*/];
        }
      });
    });
  }

  function handleSuppr() {
    var text = "Are you sure you want to delete the post " + title + " of " + name + "?";
    if (confirm(text) == true) {
      fetch('/api/post/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'id': id
        })
      }).then(function () {
        parentCallback();
      });
    } else {
      text = "You canceled!";
    }
  }
  function addLike() {
    fetch("/api/like/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postId': id
      })
    });
    onLike(true);
  }
  function removeLike() {
    fetch("/api/like/unlike", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postId': id
      })
    });
    onLike(false);
  }
  function handleLike() {
    if (userLike) {
      setUserLike(false);
      removeLike();
      setLikeCount(likeCount - 1);
    } else {
      setUserLike(true);
      addLike();
      setLikeCount(likeCount + 1);
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "d-flex justify-content-between mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", null, userLike && react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: 'btn btn-sm btn-primary',
    onClick: handleLike
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
    className: "fa fa-thumbs-up"
  })), !userLike && react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: 'btn btn-sm btn-secondary',
    onClick: handleLike
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
    className: "fa fa-thumbs-up"
  })), " +", likeCount), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    style: {
      height: "1rem"
    },
    className: "d-flex justify-content-between align-items-end flex-column fontSize-08"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    style: {
      fontSize: "1rem"
    }
  }, "Posted on : ".concat(date)), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", null, canDelete == true && react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-sm",
    onClick: handleSuppr
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-trash",
    viewBox: "0 0 16 16"
  }, react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
  }), react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomPost);

/***/ }),

/***/ "./assets/react/index.tsx":
/*!********************************!*\
  !*** ./assets/react/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/react/App.tsx");




var container = document.getElementById("root");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-sort_js-node_modules_core-js_internals_define-bu-587085","vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_react-dom-2274f0"], () => (__webpack_exec__("./assets/react/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztVQUNJLElBQUksRUFBRWIsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLElBQUksRUFBRUQsQ0FBQyxHQUFHQSxDQUFDLENBQUMxSCxNQUFNLEdBQUcsQ0FBQyxJQUFJMEgsQ0FBQyxDQUFDQSxDQUFDLENBQUMxSCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBS3FJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUlBLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUFFZCxDQUFDLEdBQUcsQ0FBQztZQUFFO1VBQVU7VUFDM0csSUFBSWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDWCxDQUFDLElBQUtXLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBR1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUdYLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxFQUFFO1lBQUVILENBQUMsQ0FBQ0MsS0FBSyxHQUFHYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUU7VUFBTztVQUNyRixJQUFJQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJZCxDQUFDLENBQUNDLEtBQUssR0FBR0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUVILENBQUMsQ0FBQ0MsS0FBSyxHQUFHRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUVBLENBQUMsR0FBR1csRUFBRTtZQUFFO1VBQU87VUFDcEUsSUFBSVgsQ0FBQyxJQUFJSCxDQUFDLENBQUNDLEtBQUssR0FBR0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUVILENBQUMsQ0FBQ0MsS0FBSyxHQUFHRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUVILENBQUMsQ0FBQ0ssR0FBRyxDQUFDWSxJQUFJLENBQUNILEVBQUUsQ0FBQztZQUFFO1VBQU87VUFDbEUsSUFBSVgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFSCxDQUFDLENBQUNLLEdBQUcsQ0FBQ1cs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QzBQLElBQUksQ0FBQyxDQUFDLEVBQ3hGL1IsMkRBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRXdSLFNBQVMsSUFBSSxJQUFJLElBQUl4UiwyREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRVMsU0FBUyxFQUFFLFlBQVk7SUFBRVEsT0FBTyxFQUFFeUU7RUFBWSxDQUFDLEVBQ2pJMUYsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVrQixLQUFLLEVBQUUsNEJBQTRCO0lBQUVDLEtBQUssRUFBRSxJQUFJO0lBQUVDLE1BQU0sRUFBRSxJQUFJO0lBQUVDLElBQUksRUFBRSxjQUFjO0lBQUVaLFNBQVMsRUFBRSxhQUFhO0lBQUVhLE9BQU8sRUFBRTtFQUFZLENBQUMsRUFDL0p0QiwyREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRXVCLENBQUMsRUFBRTtFQUFrSyxDQUFDLENBQUMsRUFDck12QiwyREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRXVCLENBQUMsRUFBRTtFQUE2TyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pTLENBQUM7QUFDRCxpRUFBZW9KLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUUc7QUFDdUI7QUFDSDtBQUN0QjtBQUN4QixJQUFJa0ssU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDL0MsSUFBSUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDaENHLElBQUksQ0FBQ0MsTUFBTSxDQUFDalYsMERBQW1CLENBQUMyVSwyREFBYSxFQUFFLElBQUksRUFDL0MzVSwwREFBbUIsQ0FBQ08sNENBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvQWRkUG9zdEJ0bi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvQWRkVXBkYXRlUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvQm9hcmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL1Bvc3QudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL1NlYXJjaGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvU2lnblVwLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ab29tUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgU2lnbnVwIGZyb20gXCIuL2NvbXBvbmVudHMvU2lnblVwXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9Cb2FyZFwiO1xuaW1wb3J0IEFkZFBvc3QgZnJvbSBcIi4vY29tcG9uZW50cy9BZGRVcGRhdGVQb3N0XCI7XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIkFwcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVzLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiBcIi9sb2dpblwiLCBlbGVtZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luLCBudWxsKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvc2lnbnVwXCIsIGVsZW1lbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lnbnVwLCBudWxsKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvY3JlYXRlX3Bvc3RcIiwgZWxlbWVudDogUmVhY3QuY3JlYXRlRWxlbWVudChBZGRQb3N0LCBudWxsKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvXCIsIGVsZW1lbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9hcmQsIG51bGwpIH0pKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vYWRkIGJ1dHRvbiBib3R0b20gcmlnaHQgb2YgdGhlIHNjcmVlblxudmFyIEFkZEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHZhciBuYXZpZ2F0ZUFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKCcvY3JlYXRlX3Bvc3QnKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tc2Vjb25kYXJ5IGFkZFwiLCBvbkNsaWNrOiBuYXZpZ2F0ZUFkZFBvc3QgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgY2xhc3NOYW1lOiBcImJpIGJpLXBsdXNcIiwgdmlld0JveDogXCIwIDAgMTYgMTZcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNOCA0YS41LjUgMCAwIDEgLjUuNXYzaDNhLjUuNSAwIDAgMSAwIDFoLTN2M2EuNS41IDAgMCAxLTEgMHYtM2gtM2EuNS41IDAgMCAxIDAtMWgzdi0zQS41LjUgMCAwIDEgOCA0elwiIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBZGRCdG47XG4iLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xuLy9Gb3JtIHRvIGFkZCBhIHBvc3RcbnZhciBBZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKCcnKSwgdGl0bGUgPSBfYVswXSwgc2V0VGl0bGUgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgzNSksIG1heExlbmd0aFRpdGxlID0gX2JbMF0sIHNldE1heExlbmd0aCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKCcnKSwgdGV4dCA9IF9jWzBdLCBzZXRUZXh0ID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoWyxdKSwgY2F0ZWdvcmllcyA9IF9kWzBdLCBzZXRDYXRlZ29yaWVzID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoZmFsc2UpLCBub3cgPSBfZVswXSwgc2V0Tm93ID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCBzdXBwciA9IF9mWzBdLCBzZXRTdXBwciA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKCksIHN0YXJ0ID0gX2dbMF0sIHNldFN0YXJ0ID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlU3RhdGUoKSwgZW5kID0gX2hbMF0sIHNldEVuZCA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKGZhbHNlKSwgcG9zdGluZyA9IF9qWzBdLCBzZXRQb3N0aW5nID0gX2pbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICAvL2Z1bmN0aW9uIHRoYXQgYWRkIGFsbCB0aGUgc2VsZWN0ZWQgY2F0ZWdvcmllcyBpbnRvIGFuIGFycmF5XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcmllcyhldmVudCkge1xuICAgICAgICB2YXIgYm94VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7IC8vd2UgZ2V0IHRoZSBib3ggdmFsdWVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lICE9PSBcImNhdGVnb3JpZXNcIikgeyAvL0lmIG5vdCB1bmlxdWUgYW5kIG9wdGlvbmFsICh1cmdlbnQgYW5kIGltcG9ydGFudClcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCAmJiAhY2F0ZWdvcmllcy5pbmNsdWRlcyhib3hWYWx1ZSkpIHsgLy9pZiBjaGVja2VkIGFuZCBub3QgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcmllcyBhcnJheSwgd2UgYWRkIGl0XG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhmdW5jdGlvbiAocHJlcCkgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBwcmVwLCB0cnVlKSwgW2JveFZhbHVlXSwgZmFsc2UpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCAmJiBjYXRlZ29yaWVzLmluY2x1ZGVzKGJveFZhbHVlKSkgeyAvL2lmIHVuY2hlY2tlZCBhbmQgaW4gdGhlIGNhdGVnb3JpZXMgYXJyYXksIHdlIHJlbW92ZSBpdFxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllcy5maWx0ZXIoZnVuY3Rpb24gKGNhdGVnb3J5KSB7IHJldHVybiBjYXRlZ29yeSAhPT0gYm94VmFsdWU7IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy9JZiBpdCBpcyBhIHVuaXF1ZSBhbmQgbm90IG9wdGlvbmFsIGNhdGVnb3J5IChtZWV0aW5nLCBpbmZvcm1hdGlvbiwgZXZlbnQsIHJlcXVlc3QpXG4gICAgICAgICAgICB2YXIgY2hhbmdlQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuc2xpY2UoMSk7IC8vaW4gdGhlIGNhdGVnb3JpZXMgYXJyYXksIHdlIGNoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIHVuaXF1ZSBjYXRlZ29yeSBieSB0aGUgbmV3IG9uZVxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhfX3NwcmVhZEFycmF5KFtldmVudC50YXJnZXQudmFsdWVdLCBjaGFuZ2VDYXRlZ29yaWVzLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9pZiB3ZSBjbGljayBvbiBub3csIHRoZSBkaXNwbGF5IGRhdGUgd2lsbCBiZSBlZmZlY3RpdmUgcmlnaHQgYXdheSBhbmQgdGhlIHBvc3Qgd2lsbCBiZSB2aXNpYmxlIGFzIHNvb24gYXMgdGhlIHVzZXIgZ28gYmFjayBvbiB0aGVcbiAgICAvL25vdGljZWJvYXJkLiBXZSBnZXQgdGhlIGN1cnJlbnQgZGF0ZSBpbiBtaWxsaXNlY29uZHMgYW5kIGZvcm1hdCBpdCBzbyB0aGF0IGl0IG1hdGNoZXMgdGhlIGRhdGV0aW1lIGZvcm1hdCBvZiBzcWwuXG4gICAgLy9BbHNvLCBpZiB0aGUgYnV0dG9uIE5vdyBpcyBjaGVja2VkLCB3ZSByZW1vdmUgdGhlIGRhdGV0aW1lIGlucHV0IHNvIHRoYXQgdGhlIHVzZXIgdW5kZXJzdGFuZCB0aGF0IHRoZXkgY2FuJ3QgY2hvc2Ugc2V2ZXJhbCBkYXRlc1xuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdyhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldE5vdyh0cnVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgXCItXCJcbiAgICAgICAgICAgICAgICArIChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIlxuICAgICAgICAgICAgICAgICsgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgKyBjdXJyZW50RGF0ZS5nZXRIb3VycygpICsgXCI6XCJcbiAgICAgICAgICAgICAgICArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSArIFwiOlwiXG4gICAgICAgICAgICAgICAgKyBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICBzZXRTdGFydChzdGFydFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldE5vdyhmYWxzZSk7XG4gICAgfVxuICAgIC8vSWYgYSBwb3N0IHN1cHByZXNzaW9uIGRhdGUgaXMgY2hvc2VuLCB0aGVuIHRoZSBwb3N0IHdpbGwgYmUgZGVsZXRlZCBhcyBzb29uIGFzIHRoZSBkYXRlIGlzIHJlYWNoIGFuZCBzb21lb25lIGxvZyBpbiB0aGUgYm9hcmQuXG4gICAgLy9CdXQgaWYgdGhlIHVuZGVmaW5lZCBzdXBwcmVzc2lvbiBkYXRlIGlzIGNoZWNrZWQsIHRoZW4gdGhlIHBvc3Qgd2lsbCBiZSB2aXNpYmxlIGFzIGxvbmcgYXMgbm8gb25lIG1hbnVhbGx5IGRlbGV0ZSBpdC5cbiAgICAvL0luIHRoaXMgY2FzZSwgc2VuZCAnbnVsbCcgdG8gdGhlIGRiIGFuZCBoaWRlIHRoZSBkYXRldGltZSBpbnB1dC5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdXBwcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldFN1cHByKHRydWUpO1xuICAgICAgICAgICAgc2V0RW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldFN1cHByKGZhbHNlKTtcbiAgICB9XG4gICAgLy9TZW5kIHRoZSBwb3N0IHRvIHRoZSBkYlxuICAgIGZ1bmN0aW9uIHNlbmRQb3N0KHBvc3QpIHtcbiAgICAgICAgc2V0UG9zdGluZyh0cnVlKTtcbiAgICAgICAgZmV0Y2goXCIvYXBpL3Bvc3QvY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmF2aWdhdGUoXCIvXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9Mb2FkIHRoZSBmb3JtIGRhdGEgaW4gYSB2YXJpYWJsZSBhbmQgc2VuZCBpdCB0byB0aGUgZGIgXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aXRsZS5sZW5ndGggPT09IDAgfHwgdGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlIHRpdGxlIGFuZCB0aGUgYm9keSBhcmUgbmVlZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vdykge1xuICAgICAgICAgICAgICAgIHNldFN0YXJ0KERhdGUubm93KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZEYXRhID0ge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6IHRpdGxlLFxuICAgICAgICAgICAgICAgICdib2R5JzogdGV4dCxcbiAgICAgICAgICAgICAgICAnY2F0ZWdvcmllcyc6IGNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXlUaW1lJzogc3RhcnQsXG4gICAgICAgICAgICAgICAgJ3N1cHByZXNzaW9uVGltZSc6IGVuZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRQb3N0KGZEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjcmVhdGVGb3JtXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LWNlbnRlciBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciByb3cgbXQtM1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZSB0ZXh0LWNlbnRlclwiIH0sIFwiQ3JlYXRlIHlvdXIgcG9zdFwiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgY2xhc3NOYW1lOiBcImNvbC1tZC04IGFsaWduLXNlbGYtY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJ0aXRsZVwiLCBjbGFzc05hbWU6IFwiZm9ybS1sYWJlbFwiIH0sIFwiVGl0bGVcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJlbWFpbFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIGlkOiBcInRpdGxlXCIsIG5hbWU6IFwidGl0bGVcIiwgcGxhY2Vob2xkZXI6IFwiTXkgdGl0bGVcIiwgbWF4TGVuZ3RoOiBtYXhMZW5ndGhUaXRsZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7IH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJpbnQtZm9udFNpemVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFyYWN0ZXIgcmVtYWluaW5nIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoVGl0bGUgLSB0aXRsZS5sZW5ndGgpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwidGlueVRleHRhcmVhXCIsIGNsYXNzTmFtZTogXCJmb3JtLWxhYmVsXCIgfSwgXCJUZXh0XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtd2FybmluZyBhbGVydC1kaXNtaXNzaWJsZVwiLCByb2xlOiBcImFsZXJ0XCIsIHN0eWxlOiB7IGZvbnRTaXplOiAnMC44ZW0nIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6IFwiaW50LWZvbnRTaXplXCIgfSwgXCIqSW1hZ2VzJyBuYW1lcyBjYW4ndCBoYXZlIHNwZWNpYWwgY2hhcmFjdGVyc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidG4tY2xvc2VcIiwgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJhbGVydFwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRvciwgeyBpZDogXCJ0aW55VGV4dGFyZWFcIiwgYXBpS2V5OiAncDlweGh5azd0Z24wY3ZncHl4dHZkNDBiZGxlajB5bmJlbXZ0NjFuc3o5bWRlN2JhJywgaW5pdGlhbFZhbHVlOiBcIldyaXRlIHlvdXIgdGV4dCBoZXJlXCIsIGluaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fkdmxpc3QnLCAnYXV0b2xpbmsnLCAnbGlzdHMnLCAnbGluaycsICdpbWFnZScsICdjaGFybWFwJywgJ3ByZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbmNob3InLCAnc2VhcmNocmVwbGFjZScsICd2aXN1YWxibG9ja3MnLCAnY29kZScsICdmdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUnLCAnbWVkaWEnLCAndGFibGUnLCAnY29kZScsICdoZWxwJywgJ3dvcmRjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyMTogJ3wgYmxvY2tzIHwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIGZvcmVjb2xvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyMjogJ2FsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgbGluayBpbWFnZSB8IGhlbHAgfCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogXCIvYXBpL2ltYWdlL3VwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2FkdnRhYjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV91cGxvYWR0YWI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9JyxcbiAgICAgICAgICAgICAgICAgICAgfSwgb25FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChjb250ZW50LCBlZGl0b3IpIHsgc2V0VGV4dChjb250ZW50KTsgfSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY2F0ZWdvcmllc1wiLCBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtY29sbHVtbiByb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtMyBib3JkZXIgYm9yZGVyLWRhcmsgcm91bmRlZFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcInVuaXF1ZVwiLCBjbGFzc05hbWU6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJvcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJyYWRpb1wiLCBpZDogXCJpbmZvcm1hdGlvblwiLCBuYW1lOiBcImNhdGVnb3JpZXNcIiwgdmFsdWU6IFwiSW5mb3JtYXRpb25cIiwgb25DaGFuZ2U6IGhhbmRsZUNhdGVnb3JpZXMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImluZm9ybWF0aW9uXCIgfSwgXCJJbmZvcm1hdGlvblwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwib3B0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwicmFkaW9cIiwgaWQ6IFwibWVldGluZ1wiLCBuYW1lOiBcImNhdGVnb3JpZXNcIiwgdmFsdWU6IFwiTWVldGluZyBub3RpY2VcIiwgb25DaGFuZ2U6IGhhbmRsZUNhdGVnb3JpZXMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcIm1lZXRpbmdcIiB9LCBcIk1lZXRpbmcgTm90aWNlXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJvcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJyYWRpb1wiLCBpZDogXCJldmVudFwiLCBuYW1lOiBcImNhdGVnb3JpZXNcIiwgdmFsdWU6IFwiRXZlbnRcIiwgb25DaGFuZ2U6IGhhbmRsZUNhdGVnb3JpZXMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImV2ZW50XCIgfSwgXCJFdmVudFwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwib3B0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwicmFkaW9cIiwgaWQ6IFwicmVxdWVzdFwiLCBuYW1lOiBcImNhdGVnb3JpZXNcIiwgdmFsdWU6IFwiUmVxdWVzdFwiLCBvbkNoYW5nZTogaGFuZGxlQ2F0ZWdvcmllcyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwicmVxdWVzdFwiIH0sIFwiUmVxdWVzdFwiKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm9wdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImltcG9ydGFudFwiLCBuYW1lOiBcImltcG9ydGFudFwiLCB2YWx1ZTogXCJJbXBvcnRhbnRcIiwgb25DaGFuZ2U6IGhhbmRsZUNhdGVnb3JpZXMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImltcG9ydGFudFwiIH0sIFwiSW1wb3J0YW50XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJvcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJ1cmdlbnRcIiwgbmFtZTogXCJ1cmdlbnRcIiwgdmFsdWU6IFwiVXJnZW50XCIsIG9uQ2hhbmdlOiBoYW5kbGVDYXRlZ29yaWVzIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJ1cmdlbnRcIiB9LCBcIlVyZ2VudFwiKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZGlzcGxheVRpbWUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTMgcC0yIGJvcmRlciBib3JkZXItZGFyayByb3VuZGVkIHctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlNlbGVjdCB3aGVuIHlvdXIgcG9zdCB3aWxsIGFwcGVhciBvbiB0aGUgYm9hcmQ6XCIpLFxuICAgICAgICAgICAgICAgICAgICBcIiBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwibm93XCIgfSwgXCJOb3dcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwibm93XCIsIG5hbWU6IFwibm93XCIsIHZhbHVlOiBcIm5vd1wiLCBvbkNoYW5nZTogaGFuZGxlTm93IH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsICFub3cgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImRhdGV0aW1lLWxvY2FsXCIsIGlkOiBcInN0YXJ0XCIsIG5hbWU6IFwic3RhcnRcIiwgbWluOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTgpLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldFN0YXJ0KGUudGFyZ2V0LnZhbHVlKTsgfSB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZGlzcGxheVRpbWUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTMgcC0yIGJvcmRlciBib3JkZXItZGFyayByb3VuZGVkIHctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlNlbGVjdCBzdXBwcmVzc2lvbiBkYXRlOiBcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcInVuZGVmaW5lZFwiIH0sIFwiVW5kZWZpbmVkIHN1cHByZXNzaW9uIGRhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwidW5kZWZpbmVkXCIsIG5hbWU6IFwidW5kZWZpbmVkXCIsIHZhbHVlOiBcInVuZGVmaW5lZFwiLCBvbkNoYW5nZTogaGFuZGxlU3VwcHIgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgIXN1cHByICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJkYXRldGltZS1sb2NhbFwiLCBpZDogXCJlbmRcIiwgbmFtZTogXCJlbmRcIiwgbWluOiBzdGFydCwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRFbmQoZS50YXJnZXQudmFsdWUpOyB9IH0pKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiUG9zdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tNVwiLCBvbkNsaWNrOiBoYW5kbGVTdWJtaXQgfSkpLFxuICAgICAgICBwb3N0aW5nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBcIi4uLiBTYXZlIHBvc3RcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL1wiIH0sIFwiQmFjayB0byBub3RpY2UgYm9hcmRcIikpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRkUG9zdDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBjcmVhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSBcIi4vU2VhcmNoYmFyXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XG5pbXBvcnQgQWRkQnRuIGZyb20gXCIuL0FkZFBvc3RCdG5cIjtcbmltcG9ydCBab29tUG9zdCBmcm9tIFwiLi9ab29tUG9zdFwiO1xudmFyIEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFsnJ10pLCB1c2VyUm9sZSA9IF9hWzBdLCBzZXRVc2VyUm9sZSA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgbGlrZWRQb3N0ID0gX2JbMF0sIHNldExpa2VkUG9zdCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKHRydWUpLCBpc1ZlcmlmaWVkID0gX2NbMF0sIHNldElzVmVyaWZpZWQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZSgpLCBwb3N0cyA9IF9kWzBdLCBzZXRQb3N0cyA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKCcnKSwgZm9jdXNDYXQgPSBfZVswXSwgc2V0Rm9jdXNDYXQgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZSgnJyksIHNlYXJjaCA9IF9mWzBdLCBzZXRTZWFyY2ggPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZSgpLCB6b29tID0gX2dbMF0sIHNldFpvb20gPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZSgpLCB6b29tTGlrZSA9IF9oWzBdLCBzZXRab29tTGlrZSA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKCksIHpvb21Qb3N0ID0gX2pbMF0sIHNldFpvb21Qb3N0ID0gX2pbMV07XG4gICAgdmFyIF9rID0gdXNlU3RhdGUoKSwgem9vbWVkU3VwcHJJZCA9IF9rWzBdLCBzZXRab29tZWRTdXBwcklkID0gX2tbMV07XG4gICAgdmFyIGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGdldFBvc3RzKCk7XG4gICAgICAgICAgICBpc0xvZ2dlZEluKCk7XG4gICAgICAgICAgICBnZXRVc2VyUm9sZSgpO1xuICAgICAgICAgICAgZ2V0VmVyaWZpY2F0aW9uKCk7XG4gICAgICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcG9zdHNJZHNMaWtlZGJ5VXNlcigpO1xuICAgICAgICBjaGVja1VSTCgpO1xuICAgIH0sIFtdKTtcbiAgICAvL1doZW4gem9vbWVkLCB3ZSB3YW50IHRvIHNldCB0aGUgbGlrZWQgcG9zdCBidXR0b24gb24gbGlrZSBvciB1bmxpa2Ugb24gdGhlIGJvYXJkIHRvby5cbiAgICAvL1dlIGNoZWNrIHRoZSBpZHMgYW5kIGlmIHRoZXkgbWF0Y2gsIHJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGxpa2UgYnV0dG9uIGZyb20gdGhlIHpvb20gdG8gdGhlIGJvYXJkXG4gICAgZnVuY3Rpb24gbGlrZU9uQm9hcmQyKHpvb21JZCwgcG9zdElkKSB7XG4gICAgICAgIGlmICh6b29tSWQgPT0gcG9zdElkKVxuICAgICAgICAgICAgcmV0dXJuIHpvb21MaWtlO1xuICAgIH1cbiAgICAvL0dldCBhbGwgdGhlIHBvc3RzIGZyb20gdGhlIGRiIHRvIGRpc3BsYXkgdGhlbVxuICAgIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgICAgICBmZXRjaCgnL2FwaS9wb3N0L2dldEFsbCcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJldmVyc2VkID0gZGF0YS5yZXZlcnNlKCk7IC8vZGlzcGxheSBmcm9tIHRoZSBtb3N0IHJlY2VudCB0byB0aGUgbW9zdCBhbmNpZW50XG4gICAgICAgICAgICBzZXRQb3N0cyhyZXZlcnNlZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0lmIHNvbWVvbmUgZ2V0IHRvIHRoZSBub3RpY2UgYm9hcmQgZnJvbSB0aGUgdXJsIHdpdGhvdXQgYmVpbmcgbG9nZ2VkIGluLCB0aGV5IGFyZSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBwYWdlLlxuICAgIGZ1bmN0aW9uIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9hcGkvdXNlci9jaGVjaycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT0gdHJ1ZSA/IFwiXCIgOiBuYXZpZ2F0ZShcIi9sb2dpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9nZXQgdGhlIEN1cnJlbnQgcm9sZSB0byBhbGxvdyB0aGluZ3Mgb3Igbm90XG4gICAgZnVuY3Rpb24gZ2V0VXNlclJvbGUoKSB7XG4gICAgICAgIGZldGNoKCcvYXBpL3VzZXIvZ2V0Um9sZScpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2V0VXNlclJvbGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2lmIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCB5ZXQgd2l0aCBoaXMgbWFpbCwgdGhpcyBwZXJzb24gd29uJ3QgYmUgYWJsZSB0byBwb3N0IGFueXRoaW5nLCBldmVuIGlmIHRoZSByb2xlIHNob3VsZCBiZSBlbm91Z2hcbiAgICBmdW5jdGlvbiBnZXRWZXJpZmljYXRpb24oKSB7XG4gICAgICAgIGZldGNoKCcvYXBpL3VzZXIvdmVyaWZpZWQnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNldElzVmVyaWZpZWQoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2lmIHRoZSB2ZXJpZnkgbGluayBleHBpcmVkLCB3ZSBhbGxvdyB0aGUgdXNlciB0byByZXNlbmQgYSBtYWlsXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzZW5kKCkge1xuICAgICAgICBmZXRjaCgnL2FwaS91c2VyL3JldmVyaWYnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9SZXR1cm4gYW4gYXJyYXkgb2YgY2F0ZWdvcmllcyBmcm9tIHRoZSBwb3N0IG9iamVjdC4gVXNlZCB0byBzaG93IHRoZSBzbWFsbCBjYXRlZ29yeSBwaW4gYW5kXG4gICAgLy8gdG8gZmlsdGVyIHRoZSBwb3N0cyBmcm9tIHRoZSBzZWxlY3Rpb24gaW4gdGhlIHNlYXJjaGJhci4gQ2FsbGVkIHdoZW4gZGlzcGxheWluZyBhIHNwZWNpZmljIHBvc3QuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcmllcyhvYmpDYXRlZ29yaWVzKSB7XG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gW107XG4gICAgICAgIG9iakNhdGVnb3JpZXMuZm9yRWFjaChmdW5jdGlvbiAob2JqQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChvYmpDYXRlZ29yeS5jYXRlZ29yeSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgICB9XG4gICAgLy9BdCB0aGUgaW5pdGlhbGl6YXRpb24sIGdldCBhbGwgdGhlIHBvc3RzIGxpa2VkIGJ5IHRoZSBjdXJyZW50IHVzZXIgc28gdGhhdCB0aGUgc3RhdGVzIG9mIHRoZSBib2FyZCBpcyBhcyB0aGUgdXNlciBsZWZ0IGl0LlxuICAgIGZ1bmN0aW9uIHBvc3RzSWRzTGlrZWRieVVzZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJ2FwaS9saWtlL2dldCcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb2JqZWN0IGFycmF5IFt7MTogcG9zdElkfSwuLi5dIEkgbmVlZCBhbiBhcnJheSBvZiB0aGUgdmFsdWVzIHBvc3RJZCBub3cuIFRoYXQgaXMgd2h5IGluIHRoZSBmb3JFYWNoIEkgYWRkIHBvc3RbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZWRQb3N0KGZ1bmN0aW9uIChsaWtlZFBvc3QpIHsgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgbGlrZWRQb3N0LCB0cnVlKSwgW3Bvc3RbMV1dLCBmYWxzZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0NoZWNrIGhlcmUgaWYgY2xpY2tlZCBvbiB0aGUgdHJhc2ggY2FuIG9yIGxpa2UgYnV0dG9uIHRvIG5vdCB6b29tIGZvciBlYWNoIGFjdGlvbiBkb25lIG9uIGEgY2FyZC5cbiAgICAvL0lmIHRoZSB1c2VyIGNsaWNrZWQgYW55d2hlcmUgZWxzZSBvbiB0aGUgY2FyZCwgdGhlbiBpdCBpcyB6b29tZWQgd2l0aCB0aGUgY2xpY2tlZCBjYXJkIGRhdGFzLiBcbiAgICBmdW5jdGlvbiBoYW5kbGVab29tUG9zdChwb3N0LCBlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCAhPSBcImxpa2VfXCIuY29uY2F0KHBvc3QuaWQpICYmIGUudGFyZ2V0LmlkICE9IFwiY2FuX1wiLmNvbmNhdChwb3N0LmlkKVxuICAgICAgICAgICAgJiYgZS50YXJnZXQuaWQgIT0gXCJ0aHVtYl9cIi5jb25jYXQocG9zdC5pZCkgJiYgZS50YXJnZXQuaWQgIT0gXCJkZWxldGVfXCIuY29uY2F0KHBvc3QuaWQpICYmIGUudGFyZ2V0LmlkICE9IFwiZGl2X1wiLmNvbmNhdChwb3N0LmlkKSkgeyAvL2NoZWNrIHRoZSBpZCBvZiB0aGUgZWxlbWVudCBjbGlja2VkIHRvIG5vdCBvcGVuIHVwIHRoZSB6b29tZWQgcG9zdFxuICAgICAgICAgICAgbmF2aWdhdGUoKHsgc2VhcmNoOiBcIj9cIi5jb25jYXQoY3JlYXRlU2VhcmNoUGFyYW1zKHsgaWQ6IHBvc3QuaWQgfSkpIH0pKTtcbiAgICAgICAgICAgIHNldFpvb20odHJ1ZSk7XG4gICAgICAgICAgICBzZXRab29tUG9zdChwb3N0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1dlIGNoZWNrIGlmIHRoZXJlIGlzIGEgcGFyYW1ldGVyIGluIHRoZSB1cmwuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gJ2lkJyBwYXJhbWV0ZXI6IHdlIGdldCB0aGUgcG9zdCBkZXRhaWxzIHdpdGggZmV0Y2ggYW5kIHpvb20gd2l0aCB0aGVzZSBkYXRhcy5cbiAgICBmdW5jdGlvbiBjaGVja1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaFBhcmFtcywgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdpZCcpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiL2FwaS9wb3N0L2dldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICdpZCc6IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJykgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRab29tUG9zdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRab29tKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleFwiLCBzdHlsZTogeyBvdmVyZmxvd1g6ICdoaWRkZW4nIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgZC1mbGV4IGZsZXgtY29sdW1uIG9uLWJvdFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWFyY2hiYXIsIHsgY2hhbmdlRm9jdXNDYXQ6IGZ1bmN0aW9uIChmb2N1c0NhdCkgeyByZXR1cm4gc2V0Rm9jdXNDYXQoZm9jdXNDYXQpOyB9LCBjaGFuZ2VTZWFyY2g6IGZ1bmN0aW9uIChzZWFyY2gpIHsgcmV0dXJuIHNldFNlYXJjaChzZWFyY2gpOyB9IH0pKSxcbiAgICAgICAgICAgICFpc1ZlcmlmaWVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtd2FybmluZyBhbGVydC1kaXNtaXNzaWJsZVwiLCByb2xlOiBcImFsZXJ0XCIgfSxcbiAgICAgICAgICAgICAgICBcIllvdXIgYWNjb3VudCBpcyBub3QgeWV0IHZlcmlmaWVkLiBQbGVhc2UgY2hlY2sgeW91ciBtYWlsYm94IG9yIHNlbmQgYW5vdGhlciBcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiXCIsIG9uQ2xpY2s6IGhhbmRsZVJlc2VuZCB9LCBcImFjdGl2YXRpb24gbGlua1wiKSxcbiAgICAgICAgICAgICAgICBcIi5cIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3NOYW1lOiBcImJ0bi1jbG9zZVwiLCBcImRhdGEtYnMtZGlzbWlzc1wiOiBcImFsZXJ0XCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkLWdyb3VwIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIHN0eWxlOiB7IHdpZHRoOiBcIjEwMHZ3XCIgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIHN0eWxlOiB7IHdpZHRoOiBcIjkwJVwiIH0gfSwgcG9zdHMgPT09IG51bGwgfHwgcG9zdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjYXJkXCIsIGtleTogcG9zdC5pZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBvc3QsIHsgaWQ6IHBvc3QuaWQsIHRpdGxlOiBwb3N0LnRpdGxlLCB1c2VyTGFzdE5hbWU6IHBvc3QudXNlci5sYXN0bmFtZSwgdXNlckRlcGFydG1lbnQ6IHBvc3QudXNlci5kZXBhcnRtZW50LCBjYXRlZ29yaWVzOiBoYW5kbGVDYXRlZ29yaWVzKHBvc3QuY2F0ZWdvcmllcyksIGJvZHk6IHBvc3QuYm9keSwgZGlzcGxheV9kYXRlOiBwb3N0LnN0YXJ0X2Rpc3BsYXlfZGF0ZSwgZW5kX2RhdGU6IHBvc3QuZGVsZXRlX2RhdGUsIG5ickxpa2U6IHBvc3QucG9zdHNMaWtlcy5sZW5ndGgsIGxpa2VkUG9zdDogbGlrZWRQb3N0LCB1c2VyUm9sZTogdXNlclJvbGUsIG93bmVySWQ6IHBvc3QudXNlci5pZCwgZm9jdXNDYXQ6IGZvY3VzQ2F0LCBmb2N1c1RleHQ6IHNlYXJjaCwgb25DbGljazogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZVpvb21Qb3N0KHBvc3QsIGUpOyB9LCB6b29tTGlrZWQ6IHpvb21Qb3N0ID8gbGlrZU9uQm9hcmQyKHpvb21Qb3N0LmlkLCBwb3N0LmlkKSA6IG51bGwsIHpvb21TdXBwcklkOiB6b29tZWRTdXBwcklkIH0pKSk7IH0pKSksXG4gICAgICAgICAgICAoaXNWZXJpZmllZCAmJiAodXNlclJvbGUuaW5jbHVkZXMoJ1JPTEVfREVQQVJUTUVOVF9BRE1JTicpIHx8IHVzZXJSb2xlLmluY2x1ZGVzKCdST0xFX0FETUlOJykpKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZml4ZWQtYm90dG9tIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG0tMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWRkQnRuLCBudWxsKSkpLFxuICAgICAgICB6b29tUG9zdCAmJiB6b29tICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoWm9vbVBvc3QsIHsgaWQ6IHpvb21Qb3N0LmlkLCB0aXRsZTogem9vbVBvc3QudGl0bGUsIHVzZXJMYXN0TmFtZTogem9vbVBvc3QudXNlci5sYXN0bmFtZSwgdXNlckRlcGFydG1lbnQ6IHpvb21Qb3N0LnVzZXIuZGVwYXJ0bWVudCwgY2F0ZWdvcmllczogaGFuZGxlQ2F0ZWdvcmllcyh6b29tUG9zdC5jYXRlZ29yaWVzKSwgYm9keTogem9vbVBvc3QuYm9keSwgZGlzcGxheV9kYXRlOiB6b29tUG9zdC5zdGFydF9kaXNwbGF5X2RhdGUsIGVuZF9kYXRlOiB6b29tUG9zdC5kZWxldGVfZGF0ZSwgbmJyTGlrZTogem9vbVBvc3QucG9zdHNMaWtlcy5sZW5ndGgsIGxpa2VkUG9zdDogbGlrZWRQb3N0LCB1c2VyUm9sZTogdXNlclJvbGUsIG93bmVySWQ6IHpvb21Qb3N0LnVzZXIuaWQsIGRpc3BsYXk6IGZ1bmN0aW9uICh6b29tKSB7IHJldHVybiBzZXRab29tKHpvb20pOyB9LCBvbkxpa2U6IHNldFpvb21MaWtlLCBzdXBwcklkOiBzZXRab29tZWRTdXBwcklkIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleCBiZy1kYXJrIHRleHQtbGlnaHQgdy0xMDAgZml4ZWQtYm90dG9tIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXCJPbiBkZW1vbnN0cmF0aW9uIHB1cnBvc2Ugb25seS4gTWFkZSB3aXRoIFN5bWZvbnkgNi4zIGFuZCBSZWFjdGpzIDE4LjJcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleCBmbGV4LXJvdyBtZS0yXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1lLTJcIiB9LCBcIlZpbmggUEFSTkVJWFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL05vdGFlcml1bVwiIH0sIFwiTXkgZ2l0aHViXCIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbnZhciBMb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgnJyksIGVtYWlsID0gX2FbMF0sIHNldEVtYWlsID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoJycpLCBwYXNzd29yZCA9IF9iWzBdLCBzZXRQYXNzd29yZCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgZXJyb3IgPSBfY1swXSwgc2V0RXJyb3IgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShmYWxzZSksIGxvZ2dpbmcgPSBfZFswXSwgc2V0TG9nZ2luZyA9IF9kWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNMb2dnZWRJbigpO1xuICAgIH0sIFtdKTtcbiAgICAvL0lmIHRoZSB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluIGJ1dCBlbnRlciB0aGUgbG9naW4gdXJsLCB0aGV5IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgbm90aWNlYm9hcmRcbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKCcvYXBpL3VzZXIvY2hlY2snKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID09IHRydWUgPyBuYXZpZ2F0ZShcIi9cIikgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9XZSBzZW5kIHRoZSBmb3JtIGRhdGFzIHRoYXQgd2lsbCBiZSBjaGVja2VkIGJhY2stZW5kLiBTaG93IGlmIHRoZXJlIGlzIGFuIGVycm9yIG9yIG5vdC5cbiAgICBmdW5jdGlvbiBsb2dpbihkYXRhcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiL2FwaS91c2VyL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UucmVkaXJlY3RlZCkgeyAvL0lmIHRoZSBiYWNrIGVuZCBjb3VsZG4ndCBsb2cgdGhlIHVzZXIgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dnaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvL2lmIGV2ZXJ5dGhpbmcgaXMgb2theVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dnaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTsgLy9XZSBuZWVkIHRvIGRvIGEgbG9jYXRpb24ucmVwbGFjZSBoZXJlIHRvIHJlbG9hZCB0aGUgcGFnZS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9LaW5kIG9mIGRlZmVhdCB0aGUgcHVycG9zZSBvZiBhIHNwYSBidXQgZWxzZSBubyBzZXNzaW9uIHZhcmlhYmxlIHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhlIHVzZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0NoZWNrIGlmIHRoZSBhcmVhcyBhcmUgcHJvcGVybHkgZmlsbGVkIGFuZCB0aGVuIHNlbmQgdGhlIGRhdGFzIHRvIHRoZSBiYWNrIGVuZCB0byBjaGVjayBpbiB0aGUgZGIgaWYgdGhlIHVzZXIgZXhpc3RzLlxuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9nZ2luZyh0cnVlKTtcbiAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IG1pc3NlZCBzb21ldGhpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZEYXRhID0ge1xuICAgICAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBsb2dpbihmRGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW0tY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwdmgnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImxvZ2luRm9ybVwiLCBjbGFzc05hbWU6IFwidGV4dC1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciByb3cgbXQtNVwiIH0sXG4gICAgICAgICAgICBlcnJvciAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6IFwiYmctZGFuZ2VyIHRleHQtd2hpdGVcIiB9LCBcIkNhbid0IExvZ2luLCBjaGVjayB5b3VyIGVtYWlsIGFkZHJlc3Mgb3IgcGFzc3dvcmQuXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwidGl0bGUgdGV4dC1jZW50ZXJcIiB9LCBcIkxvZ2luXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgY2xhc3NOYW1lOiBcImNvbC1tZC04XCIsIGFjdGlvbjogXCIvXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImVtYWlsXCIgfSwgXCJFbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIGlkOiBcImVtYWlsXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgYXV0b0NvbXBsZXRlOiBcImVtYWlsXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpOyB9LCByZXF1aXJlZDogdHJ1ZSwgYXV0b0ZvY3VzOiB0cnVlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcInBhc3N3b3JkXCIgfSwgXCJQYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIGlkOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgYXV0b0NvbXBsZXRlOiBcImN1cnJlbnQtcGFzc3dvcmRcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7IH0sIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl9jc3JmX3Rva2VuXCIsIHZhbHVlOiBcInt7IGNzcmZfdG9rZW4oJ2F1dGhlbnRpY2F0ZScpIH19XCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiTG9naW5cIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeSBtLTVcIiB9KSksXG4gICAgICAgICAgICBsb2dnaW5nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBcIi4uLiBMb2dnaW5nIGluXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJObyBhY2NvdW50PyBcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86ICcvc2lnbnVwJyB9LCBcIkNyZWF0ZSBvbmUgaGVyZSFcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJIZXJlIGFyZSB0aGUgaWRzIGFuZCBwYXNzd29yZCBmb3IgdGhlIHRlc3QgYWNjb3VudCA6ICdqb2huLmxlbW9uQGFkbWluLmNvbScgYXQgdGhlIHBhc3N3b3JkICdKb2huMTIzJ1wiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbnZhciBQb3N0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGlkID0gX2EuaWQsIHRpdGxlID0gX2EudGl0bGUsIGNhdGVnb3JpZXMgPSBfYS5jYXRlZ29yaWVzLCBib2R5ID0gX2EuYm9keSwgZGlzcGxheV9kYXRlID0gX2EuZGlzcGxheV9kYXRlLCBlbmRfZGF0ZSA9IF9hLmVuZF9kYXRlLCB1c2VyTGFzdE5hbWUgPSBfYS51c2VyTGFzdE5hbWUsIHVzZXJEZXBhcnRtZW50ID0gX2EudXNlckRlcGFydG1lbnQsIG5ickxpa2UgPSBfYS5uYnJMaWtlLCBsaWtlZFBvc3QgPSBfYS5saWtlZFBvc3QsIHVzZXJSb2xlID0gX2EudXNlclJvbGUsIG93bmVySWQgPSBfYS5vd25lcklkLCBmb2N1c0NhdCA9IF9hLmZvY3VzQ2F0LCBmb2N1c1RleHQgPSBfYS5mb2N1c1RleHQsIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLCB6b29tTGlrZWQgPSBfYS56b29tTGlrZWQsIHpvb21TdXBwcklkID0gX2Euem9vbVN1cHBySWQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBzdXBwciA9IF9iWzBdLCBzZXRTdXBwciA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgcmVhZHkgPSBfY1swXSwgc2V0UmVhZHkgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZSgpLCBjdXJyZW50VXNlcklkID0gX2RbMF0sIHNldEN1cnJlbnRVc2VySWQgPSBfZFsxXTtcbiAgICB2YXIgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQpIHsgLy9Bdm9pZCBiZWluZyBjYWxsZWQgbW9yZSB0aW1lcyB0aGFuIG5lY2Vzc2FyeVxuICAgICAgICAgICAgZ2V0VXNlcklkKCk7XG4gICAgICAgICAgICBwb3N0RXhwaXJlZCgpO1xuICAgICAgICAgICAgTm9EaXNwbGF5WWV0KCk7XG4gICAgICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0NhbGxiYWNrIGZyb20gdGhlIHBvc3QncyBmb290ZXIuIElmIHRoZSB1c2VyIGRlbGV0ZSBhIHBvc3QsIG1hbmFnZSB0aGUgZnJvbnQgZW5kIHBhcnQgb2YgdGhlIHN1cHByZXNzaW9uIGJ5IHNldHRpbmcgYSBib29sIHRvIHRydWVcbiAgICBmdW5jdGlvbiBoYW5kbGVDYWxsYmFjaygpIHtcbiAgICAgICAgc2V0U3VwcHIodHJ1ZSk7XG4gICAgfVxuICAgIC8vV2UgZ2V0IGZyb20gdGhlIHByb3BzIHRoZSB2YWx1ZSBvZiB0aGUgVGl0bGUvcG9zdCBvd25lciBuYW1lLiBJZiB0aGVyZSBpcyBhIG1hdGNoLCB3ZSBkaXNwbGF5IHRoZSBwb3N0LCBpZiBub3QsIHdlIGRvbid0LlxuICAgIC8vSWYgdGhlcmUgaXMgbm8gdmFsdWUgZnJvbSB0aGUgcHJvcHMsIHdlIGRpc3BsYXkgaXQuXG4gICAgLy9Db25kaXRpb24gOiBJZiB0aGUgcHJvcHMgJ2ZvY3VzVGV4dCcoc3RyaW5nKSBpcyBzb21ld2hlcmUgaW4gdGhlIHRpdGxlIG9yIG93bmVyIG5hbWUgKGJvdGggc3RyaW5ncyksIHdlIGRpc3BsYXkuXG4gICAgZnVuY3Rpb24gc2VhcmNoRm9jdXMoKSB7XG4gICAgICAgIGlmICh0aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZvY3VzVGV4dC50b0xvd2VyQ2FzZSgpKSB8fCB1c2VyTGFzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmb2N1c1RleHQudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvL0lmIHRoZSBwb3N0IGhhdmUgYSBzdXBwcmVzc2lvbiBkYXRlLCB0aGVuIHdlIGNoZWNrIGlmIGl0IGhhcyBwYXNzZWQgeWV0LiBJZiBpdCBkaWQsIHdlIGRvbid0IGRpc3BsYXkgZnJvbnQgZW5kIGFuZCBkZWxldGUgaXQgYmFjayBlbmRcbiAgICBmdW5jdGlvbiBwb3N0RXhwaXJlZCgpIHtcbiAgICAgICAgaWYgKGVuZF9kYXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBleHBpcmF0aW9uID0gRGF0ZS5wYXJzZShlbmRfZGF0ZSkgLSAzNjAwMDAwO1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93ID4gZXhwaXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGZldGNoKCcvYXBpL3Bvc3QvZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICdpZCc6IGlkIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXBwcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0NoZWNrIGlmIHRoZSBwb3N0IGlzIHJlYWR5IHRvIGJlIGRpc3BsYXllZCBieSBsb29raW5nIGF0IHRoZSBkYXRldGltZSBjaG9zZWQgd2hlbiBjcmVhdGVkIGFuZCBjb21wYXJpbmcgaXQgdG8gdGhlIGN1cnJlbnQgZGF0ZXRpbWUuXG4gICAgZnVuY3Rpb24gTm9EaXNwbGF5WWV0KCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbm93ID49IERhdGUucGFyc2UoZGlzcGxheV9kYXRlKSAtIDM2MDAwMDAgPyBzZXRSZWFkeSh0cnVlKSA6IHNldFJlYWR5KGZhbHNlKTsgLy8tMzYwMDAwMCBiZWNhdXNlIHRoZSBkYXRlIHBhcnNlIGFkZCAzNjAwMDAwIGZyb20gdGhlIGZyZW5jaCB0aW1lXG4gICAgfVxuICAgIC8vQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBoYXMgdGhlIHJpZ2h0cyB0byBkZWxldGUgYSBwb3N0IG9yIG5vdC4gTm9ybWFsIHVzZXIgY2FuJ3QgY3JlYXRlIG9yIGRlbGV0ZSBhIHBvc3QuXG4gICAgLy9EZXBhcnRtZW50IGFkbWlucyBjYW4gZGVsZXRlIHRoZWlyIG93biBwb3N0IGJ1dCB0aGF0J3MgaXQuXG4gICAgLy9BZG1pbnMgY2FuIGRlbGV0ZSBhbGwgdGhlIHBvc3RzLCBldmVuIG90aGVycycuXG4gICAgZnVuY3Rpb24gZGVsZXRlUGVybShwb3N0T3duZXJJZCkge1xuICAgICAgICBpZiAoKHVzZXJSb2xlLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSkgfHwgKHVzZXJSb2xlLmluY2x1ZGVzKFwiUk9MRV9ERVBBUlRNRU5UX0FETUlOXCIpICYmIGN1cnJlbnRVc2VySWQgPT0gcG9zdE93bmVySWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0ZvciB0aGUgZnVuY3Rpb24gYWJvdmUgKGRlbGV0ZVBlcm0pIHNldCB0aGUgY3VycmVudCB1c2VyIElkIHNvIHRoYXQgaXQgY2FuIGJlIGNvbXBhcmVkIHRvIHRoZSBwb3N0IElkIHRvIGtub3cgaWYgdGhleSBhcmUgdGhlIG93bmVyXG4gICAgZnVuY3Rpb24gZ2V0VXNlcklkKCkge1xuICAgICAgICBmZXRjaCgnL2FwaS91c2VyL2dldElkJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VXNlcklkKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIChzdXBwciA9PSBmYWxzZSAmJiByZWFkeSA9PSB0cnVlICYmIChjYXRlZ29yaWVzLmluY2x1ZGVzKGZvY3VzQ2F0KSB8fCBmb2N1c0NhdCA9PSAnJykgJiYgem9vbVN1cHBySWQgIT0gaWQpICYmIHNlYXJjaEZvY3VzKCkgJiZcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkIG0tMyBtYi0xIHNoYWRvd1wiLCBvbkNsaWNrOiBvbkNsaWNrIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkLXRpdGxlIGNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgeyB0aXRsZTogdGl0bGUsIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNhcmQtYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHsgYm9keTogYm9keSwgbmFtZTogdXNlckxhc3ROYW1lLCBkZXBhcnRtZW50OiB1c2VyRGVwYXJ0bWVudC5kZXBhcnRtZW50IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtc21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHsgaWQ6IGlkLCBuYnJMaWtlOiBuYnJMaWtlLCBkaXNwbGF5X2RhdGU6IGRpc3BsYXlfZGF0ZSwgdGl0bGU6IHRpdGxlLCBuYW1lOiB1c2VyTGFzdE5hbWUsIGxpa2VkUG9zdDogbGlrZWRQb3N0LCBwYXJlbnRDYWxsYmFjazogaGFuZGxlQ2FsbGJhY2ssIGNhbkRlbGV0ZTogZGVsZXRlUGVybShvd25lcklkKSwgem9vbUxpa2VkOiB6b29tTGlrZWQgfSkpKSkpKSk7XG59O1xudmFyIEhlYWQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgY2F0ZWdvcmllcyA9IF9hLmNhdGVnb3JpZXM7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoJ3RpdGxlLmxlbmd0aCcpLCB0aXRsZVNpemUgPSBfYlswXSwgc2V0VGl0bGVTaXplID0gX2JbMV07XG4gICAgdmFyIGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBnZXRUaXRsZVNpemUoKTtcbiAgICAgICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vSWYgdGhlIHRpdGxlIGlzIHRvbyBsb25nLCBicmVhayB0aGUgbGluZSBhbmQgcmVkdWNlIHRoZSBmb250IHNpemUgc28gdGhhdCBpdCBmaWxscyBpbiB0aGUgdG9wIG9mIHRoZSBjYXJkXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGVTaXplKCkge1xuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gMTYpIHtcbiAgICAgICAgICAgIHNldFRpdGxlU2l6ZSgnMC43cmVtJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaXRsZVNpemUoJzFyZW0nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1JldHVybiB0aGUgbGl0dGxlIGNhdGVnb3J5IHBpbiBvbiB0aGUgdG9wIHJpZ2h0IG9mIHRoZSBjYXJkLlxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBjYXNlICdJbXBvcnRhbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhbmdlciByb3VuZGVkLWNpcmNsZSB0ZXh0LXdoaXRlIGZ3LWJvbGRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gc2hhZG93XCIsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCIjRkY4QjAwXCIsIHdpZHRoOiBcIjIwcHhcIiB9LCBcImRhdGEtbWRiLXRvZ2dsZVwiOiBcInBvcG92ZXJcIiwgXCJkYXRhLW1kYi10cmlnZ2VyXCI6IFwiaG92ZXJcIiwgdGl0bGU6IGNhdGVnb3J5IH0sIFwiIVwiKSk7XG4gICAgICAgICAgICBjYXNlICdVcmdlbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhbmdlciByb3VuZGVkLWNpcmNsZSB0ZXh0LXdoaXRlIGZ3LWJvbGRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gc2hhZG93XCIsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCIjODAwMEZGXCIsIHdpZHRoOiBcIjIwcHhcIiB9LCBcImRhdGEtbWRiLXRvZ2dsZVwiOiBcInBvcG92ZXJcIiwgXCJkYXRhLW1kYi10cmlnZ2VyXCI6IFwiaG92ZXJcIiwgdGl0bGU6IGNhdGVnb3J5IH0sIFwiVVwiKSk7XG4gICAgICAgICAgICBjYXNlICdJbmZvcm1hdGlvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlciBib3JkZXItMSBib3JkZXItc3VjY2VzcyByb3VuZGVkLWNpcmNsZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwOUMxOFwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIkluZm9cIikpO1xuICAgICAgICAgICAgY2FzZSAnUmVxdWVzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlciBib3JkZXItMSBib3JkZXItZGFyayByb3VuZGVkLWNpcmNsZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzkwOTA5MFwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIlJlcVwiKSk7XG4gICAgICAgICAgICBjYXNlICdNZWV0aW5nIG5vdGljZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlciBib3JkZXItMSBib3JkZXItZGFuZ2VyIHJvdW5kZWQtY2lyY2xlIGZ3LWJvbGRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gc2hhZG93XCIsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCIjN0M4NEZGXCIsIHdpZHRoOiBcIjIwcHhcIiB9LCBcImRhdGEtbWRiLXRvZ2dsZVwiOiBcInBvcG92ZXJcIiwgXCJkYXRhLW1kYi10cmlnZ2VyXCI6IFwiaG92ZXJcIiwgdGl0bGU6IGNhdGVnb3J5IH0sIFwiTWVldFwiKSk7XG4gICAgICAgICAgICBjYXNlICdFdmVudCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlciBib3JkZXItMSBib3JkZXItcHJpbWFyeSByb3VuZGVkLWNpcmNsZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc3RjlDNFwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIkV2bnRcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjdXN0b20tY2FyZC10aXRsZXMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSBmdy1ib2xkIHctNzVcIiwgc3R5bGU6IHsgZm9udFNpemU6IHRpdGxlU2l6ZSwgaGVpZ2h0OiAnMjVweCcgfSB9LCB0aXRsZSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtcm93IHctMjUganVzdGlmeS1jb250ZW50LWFyb3VuZCBkaXNhYmxlIHVzZXItc2VsZWN0LW5vbmVcIiwgc3R5bGU6IHsgZm9udFNpemU6IFwiMC43cmVtXCIgfSB9LCBjYXRlZ29yaWVzLm1hcChmdW5jdGlvbiAoY2F0ZWdvcnksIGluZGV4KSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtbC0xXCIsIGtleTogaW5kZXggfSwgZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5KSkpOyB9KSkpKTtcbn07XG52YXIgQm9keSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBib2R5ID0gX2EuYm9keSwgbmFtZSA9IF9hLm5hbWUsIGRlcGFydG1lbnQgPSBfYS5kZXBhcnRtZW50O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleCBmb250U2l6ZS0wOCBmdy1ib2xkIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgbmFtZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGRlcGFydG1lbnQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkQm9keSBvdmVyZmxvdy1hdXRvIGN1c3RvbS1jYXJkLXRhZ3NcIiwgc3R5bGU6IHsgaGVpZ2h0OiBcIjlyZW1cIiB9IH0sIHBhcnNlKGJvZHkpKSkpO1xufTtcbnZhciBGb290ZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgaWQgPSBfYS5pZCwgbmJyTGlrZSA9IF9hLm5ickxpa2UsIGRpc3BsYXlfZGF0ZSA9IF9hLmRpc3BsYXlfZGF0ZSwgbmFtZSA9IF9hLm5hbWUsIHRpdGxlID0gX2EudGl0bGUsIGxpa2VkUG9zdCA9IF9hLmxpa2VkUG9zdCwgcGFyZW50Q2FsbGJhY2sgPSBfYS5wYXJlbnRDYWxsYmFjaywgY2FuRGVsZXRlID0gX2EuY2FuRGVsZXRlLCB6b29tTGlrZWQgPSBfYS56b29tTGlrZWQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoJycpLCBkYXRlID0gX2JbMF0sIHNldERhdGUgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShuYnJMaWtlKSwgbGlrZUNvdW50ID0gX2NbMF0sIHNldExpa2VDb3VudCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKCksIHVzZXJMaWtlID0gX2RbMF0sIHNldFVzZXJMaWtlID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkID0gX2VbMF0sIHNldExvYWQgPSBfZVsxXTtcbiAgICB2YXIgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdmFyIGlzSW5pdGlhbFpvb21MaWtlID0gdXNlUmVmKHRydWUpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFscmVhZHlMaWtlZCgpOyAvL25lZWQgdG8gYmUgb3V0c2lkZSB0aGUgaW5pdGlhbCBtb3VudCwgZWxzZSBtaWdodCBub3QgYmUgdGFrZW4gaW50byBhY2NvdW50XG4gICAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBkaXNwbGF5X2RhdGUgPSBkaXNwbGF5X2RhdGUucmVwbGFjZShcIlRcIiwgXCIgXCIpOyAvL0Zvcm1hdCB0aGUgZGlzcGxheSBkYXRlIHNvIHRoYXQgaXQncyByZWFkYWJsZSAod2l0aG91dCB0aGUgVCBhbmQgdGhlIGV4dHJhIGluZm9ybWF0aW9uKVxuICAgICAgICAgICAgZGlzcGxheV9kYXRlID0gZGlzcGxheV9kYXRlLnNwbGl0KFwiK1wiKTtcbiAgICAgICAgICAgIHNldERhdGUoZGlzcGxheV9kYXRlWzBdKTtcbiAgICAgICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0luaXRpYWxab29tTGlrZS5jdXJyZW50KSB7IC8vV2UgZG9uJ3Qgd2FudCBpdCB0byBkbyBhbnl0aGluZyBhdCB0aGUgaW5pdGlhbGl6YXRpb24sIG9ubHkgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZS5cbiAgICAgICAgICAgIGlzSW5pdGlhbFpvb21MaWtlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh6b29tTGlrZWQgIT0gdXNlckxpa2UgJiYgem9vbUxpa2VkICE9IG51bGwpIHsgLy9JZiB0aGUgcmVzdWx0IGlzIGRpZmZlcmVudCAoY2FuJ3QgbGlrZSB0d2ljZSkgYW5kIGlmIHRoZSBwb3N0IGlzIHpvb21lZCAoaWYgbm90IHJlY2VpdmUgbnVsbClcbiAgICAgICAgICAgICAgICBzZXRVc2VyTGlrZSh6b29tTGlrZWQpO1xuICAgICAgICAgICAgICAgIHpvb21MaWtlZCA/IHNldExpa2VDb3VudChsaWtlQ291bnQgKyAxKSA6IHNldExpa2VDb3VudChsaWtlQ291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt6b29tTGlrZWRdKTtcbiAgICAvL0lmIHRoZSBwb3N0IGlzIGFscmVhZHkgbGlrZWQsIHRoZW4gc2hvdyBpdCBmcm9udCBlbmRcbiAgICBmdW5jdGlvbiBhbHJlYWR5TGlrZWQoKSB7XG4gICAgICAgIGlmIChsaWtlZFBvc3QuaW5jbHVkZXMoaWQpICYmICFsb2FkKSB7XG4gICAgICAgICAgICBzZXRVc2VyTGlrZSh0cnVlKTtcbiAgICAgICAgICAgIHNldExvYWQodHJ1ZSk7IC8vb25jZSB0YWtlbiBpbnRvIGFjY291bnQsIHRoZW4gc3RvcCBhc2tpbmcgdG8ga25vd1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vRGVsZXRlIHRoZSBwb3N0IGJ5IGl0cyBpZCBpbiB0aGUgYmFjayBlbmQgYW5kIGNhbGwgdGhlIHRoZSBwYXJlbnQgY29tcG9uZW50ICdQb3N0JyB0byBtYW5hZ2UgZnJvbnQgZW5kXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VwcHIoKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwb3N0IFwiICsgdGl0bGUgKyBcIiBvZiBcIiArIG5hbWUgKyBcIj9cIjtcbiAgICAgICAgaWYgKGNvbmZpcm0odGV4dCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmV0Y2goJy9hcGkvcG9zdC9kZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICdpZCc6IGlkIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJZb3UgY2FuY2VsZWQhXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTGlrZSgpIHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL2xpa2UvYWRkXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICdwb3N0SWQnOiBpZCB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlrZSgpIHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL2xpa2UvdW5saWtlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgJ3Bvc3RJZCc6IGlkIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVMaWtlKCkge1xuICAgICAgICBpZiAodXNlckxpa2UpIHtcbiAgICAgICAgICAgIHNldFVzZXJMaWtlKGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZUxpa2UoKTtcbiAgICAgICAgICAgIHNldExpa2VDb3VudChsaWtlQ291bnQgLSAxKTsgLy90byBzaG93IHNvbWV0aGluZyBmcm9udCBlbmQsIHdpdGhvdXQgaGF2aW5nIHRvIGFzayBhZ2FpbiB0byB0aGUgYmFjayBlbmQgYW5kIHJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFVzZXJMaWtlKHRydWUpO1xuICAgICAgICAgICAgYWRkTGlrZSgpO1xuICAgICAgICAgICAgc2V0TGlrZUNvdW50KGxpa2VDb3VudCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtMFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICh1c2VyTGlrZSkgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGlkOiBcImxpa2VfXCIuY29uY2F0KGlkKSwgY2xhc3NOYW1lOiAnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeScsIG9uQ2xpY2s6IGhhbmRsZUxpa2UgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGlkOiBcImxpa2VfXCIuY29uY2F0KGlkKSwgY2xhc3NOYW1lOiBcImZhIGZhLXRodW1icy11cFwiIH0pKSxcbiAgICAgICAgICAgICghdXNlckxpa2UpICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBpZDogXCJsaWtlX1wiLmNvbmNhdChpZCksIGNsYXNzTmFtZTogJ2J0biBidG4tc20gYnRuLXNlY29uZGFyeScsIG9uQ2xpY2s6IGhhbmRsZUxpa2UgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGlkOiBcImxpa2VfXCIuY29uY2F0KGlkKSwgY2xhc3NOYW1lOiBcImZhIGZhLXRodW1icy11cFwiIH0pKSxcbiAgICAgICAgICAgIFwiICtcIixcbiAgICAgICAgICAgIGxpa2VDb3VudCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBoZWlnaHQ6IFwiMXJlbVwiIH0sIGNsYXNzTmFtZTogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtZW5kIGZsZXgtY29sdW1uIGZvbnRTaXplLTA4XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogXCIwLjZyZW1cIiB9IH0sIGRhdGUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImRlbGV0ZV9cIi5jb25jYXQoaWQpIH0sIGNhbkRlbGV0ZSA9PSB0cnVlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBpZDogXCJkZWxldGVfXCIuY29uY2F0KGlkKSwgY2xhc3NOYW1lOiBcImJ0biBidG4tc21cIiwgb25DbGljazogaGFuZGxlU3VwcHIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgaWQ6IFwiZGVsZXRlX1wiLmNvbmNhdChpZCksIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBjbGFzc05hbWU6IFwiYmkgYmktdHJhc2hcIiwgdmlld0JveDogXCIwIDAgMTYgMTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGlkOiBcImRlbGV0ZV9cIi5jb25jYXQoaWQpLCBkOiBcIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41Wm0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjVabTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2WlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGlkOiBcImRlbGV0ZV9cIi5jb25jYXQoaWQpLCBkOiBcIk0xNC41IDNhMSAxIDAgMCAxLTEgMUgxM3Y5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjRoLS41YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xSDZhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDFoMy41YTEgMSAwIDAgMSAxIDF2MVpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0SDQuMTE4Wk0yLjUgM2gxMVYyaC0xMXYxWlwiIH0pKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBTZWFyY2hiYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgpLCBjYXRlZ29yaWVzID0gX2FbMF0sIHNldENhdGVnb3JpZXMgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgnJyksIHVzZXJNYWlsID0gX2JbMF0sIHNldFVzZXJNYWlsID0gX2JbMV07XG4gICAgdmFyIGlzSW5pdE1vdW50ID0gdXNlUmVmKHRydWUpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0luaXRNb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBnZXRVc2VyTWFpbCgpO1xuICAgICAgICAgICAgZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICAgICAgaXNJbml0TW91bnQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9nZXQgdGhlIEN1cnJlbnQgbWFpbFxuICAgIGZ1bmN0aW9uIGdldFVzZXJNYWlsKCkge1xuICAgICAgICBmZXRjaCgnL2FwaS91c2VyL21haWwnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNldFVzZXJNYWlsKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZldGNoKCcvYXBpL3VzZXIvbG9nb3V0JywgeyBtZXRob2Q6IFwiUE9TVFwiIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9nZXQgYWxsIHRoZSBjYXRlZ29yaWVzIHNvIHRoYXQgd2UgY2FuIGxvb3Agb24gdGhlIGFycmF5IGFuZCBkaXNwbGF5IGFsbCB0aGUgY2F0ZWdvcmllcyBhdmFpbGFibGUgZm9yIHRoZSB1c2VyIHRvIGZpbHRlclxuICAgIC8vdGhlIGRpc3BsYXllZCBwb3N0c1xuICAgIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9hcGkvY2F0ZWdvcnkvZ2V0Q2F0cycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7IGNsYXNzTmFtZTogXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBiZy1ib2R5LXRlcnRpYXJ5XCIsIHN0eWxlOiB7IHdpZHRoOiAnMTAwdncnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJuYXZiYXItdG9nZ2xlclwiLCB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtYnMtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIsIFwiYXJpYS1jb250cm9sc1wiOiBcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgXCJhcmlhLWxhYmVsXCI6IFwiVG9nZ2xlIG5hdmlnYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm5hdmJhci10b2dnbGVyLWljb25cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtIGRyb3Bkb3duIG1zLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtZS0zXCIsIGhyZWY6IFwiI1wiLCByb2xlOiBcImJ1dHRvblwiLCBcImRhdGEtYnMtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiB9LCB1c2VyTWFpbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiBcIi9sb2dpblwiLCBvbkNsaWNrOiBoYW5kbGVMb2dvdXQgfSwgXCJMb2dvdXRcIikpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBpZDogXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiLCBzdHlsZTogeyBnYXA6ICcxZW0nLCBoZWlnaHQ6IFwiMmVtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbCBtZS1zbS0yIG10LXNtLTIgbXQtbGctMFwiLCBuYW1lOiBcInNlYXJjaFwiLCBpZDogXCJzZWFyY2hcIiwgdHlwZTogXCJzZWFyY2hcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGJ5IFRpdGxlIG9yIHBvc3RlciBsYXN0bmFtZVwiLCBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2hcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBwcm9wcy5jaGFuZ2VTZWFyY2goZS50YXJnZXQudmFsdWUpOyB9LCBzdHlsZTogeyBtaW5XaWR0aDogJzMwMHB4JywgbWF4V2lkdGg6ICc1MCUnLCBoZWlnaHQ6ICcxMDAlJyB9IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1zZWxlY3QgZm9udFNpemUtMDggbXQtc20tMyBtdC1sZy0wXCIsIG5hbWU6IFwiY2F0ZWdvcmllc1wiLCBpZDogXCJjYXRlZ29yaWVzXCIsIHN0eWxlOiB7IHdpZHRoOiBcIjEwcmVtXCIgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBwcm9wcy5jaGFuZ2VGb2N1c0NhdChlLnRhcmdldC52YWx1ZSk7IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiXCIgfSwgXCItQWxsIGNhdGVnb3JpZXMtXCIpLCBjYXRlZ29yaWVzID09PSBudWxsIHx8IGNhdGVnb3JpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24gKGNhdGVnb3J5KSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogY2F0ZWdvcnksIHZhbHVlOiBjYXRlZ29yeSB9LCBjYXRlZ29yeSkpOyB9KSkpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyO1xuLy8gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBiZy1ib2R5LXRlcnRpYXJ5XCIgc3R5bGU9e3t3aWR0aDonMTAwdncnfX0+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBtYi0yXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duIG1zLWF1dG9cIj5cbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtZS0zXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuLy8gICAgICAgICAgICAgICAgIHt1c2VyTWFpbH1cbi8vICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc3RhcnRcIj5cbi8vICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxuLy8gICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4vLyAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMCBkLWZsZXggYmQtaGlnaGxpZ2h0XCIgc3R5bGU9e3tnYXA6JzFlbScsIGhlaWdodDpcIjJlbVwifX0+XG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIG5hbWU9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBUaXRsZSBvciBwb3N0ZXIgbGFzdG5hbWVcIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCIgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2hhbmdlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0gc3R5bGU9e3ttaW5XaWR0aDonMzAwcHgnLCBtYXhXaWR0aDonNTAlJywgaGVpZ2h0OicxMDAlJ319Lz5cbi8vICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvbnRTaXplLTA4XCIgbmFtZT1cImNhdGVnb3JpZXNcIiBpZD1cImNhdGVnb3JpZXNcIiBzdHlsZT17e3dpZHRoOlwiMTByZW1cIn19IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2hhbmdlRm9jdXNDYXQoZS50YXJnZXQudmFsdWUpfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tQWxsIGNhdGVnb3JpZXMtPC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcz8ubWFwKChjYXRlZ29yeSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeX0gdmFsdWU9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gPC9uYXY+XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbnZhciBTaWdudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoJycpLCBmaXJzdG5hbWUgPSBfYVswXSwgc2V0Rmlyc3ROYW1lID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoJycpLCBsYXN0bmFtZSA9IF9iWzBdLCBzZXRMYXN0TmFtZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKCcnKSwgZGVwYXJ0bWVudCA9IF9jWzBdLCBzZXREZXBhcnRtZW50ID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoJycpLCBlbWFpbCA9IF9kWzBdLCBzZXRFbWFpbCA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKCcnKSwgcGFzc3dvcmQgPSBfZVswXSwgc2V0UGFzc3dvcmQgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShbXSksIGRlcGFydG1lbnRzID0gX2ZbMF0sIHNldERlcGFydG1lbnRzID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoWycnXSksIHJvbGUgPSBfZ1swXSwgc2V0Um9sZSA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKCksIGVycm9yID0gX2hbMF0sIHNldEVycm9yID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoKSwgbG9nZ2luZyA9IF9qWzBdLCBzZXRMb2dnaW5nID0gX2pbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXREZXBhcnRtZW50KCk7XG4gICAgICAgIGlzTG9nZ2VkSW4oKTtcbiAgICAgICAgc2V0Um9sZShbXCJST0xFX1VTRVJcIl0pO1xuICAgIH0sIFtdKTtcbiAgICAvL0lmIGFscmVhZHkgbG9nZ2VkIGluLCByZWRpcmVjdCB0byB0aGUgYm9hcmRcbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKCcvYXBpL3VzZXIvY2hlY2snKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID09IHRydWUgPyBuYXZpZ2F0ZShcIi9cIikgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9HZXQgYW4gYXJyYXkgb2YgZGVwYXJ0bWVudHMgc28gdGhhdCB0aGUgdXNlciBjYW4gc2VsZWN0IGluIHdoaWNoIGRlcGFydG1lbnQgdGhleSBhcmUgd29ya2luZy5cbiAgICBmdW5jdGlvbiBnZXREZXBhcnRtZW50KCkge1xuICAgICAgICBmZXRjaCgnL2FwaS91c2VyL2RlcGFydG1lbnRzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2V0RGVwYXJ0bWVudHMoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0NyZWF0ZSB0aGUgdXNlciBmcm9tIHRoZSBmb3JtJ3MgZGF0YXMgaW4gdGhlIGRhdGFiYXNlLiBTaG93IGlmIHRoZXJlIGhhcyBiZWVuIGlzc3Vlcy4gSWYgc3VjY2VlZCBsb2cgdGhlIHVzZXIgYW5kIHJlZGlyZWN0IHRoZW1cbiAgICAvL3RvIHRoZSBub3RpY2Vib2FyZC5cbiAgICBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIi9hcGkvdXNlci9jcmVhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLnJlZGlyZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dnaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dnaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpOyAvL1dlIG5lZWQgdG8gZG8gYSBsb2NhdGlvbi5yZXBsYWNlIGhlcmUgdG8gcmVsb2FkIHRoZSBwYWdlLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0tpbmQgb2YgZGVmZWF0IHRoZSBwdXJwb3NlIG9mIGEgc3BhIGJ1dCBlbHNlIG5vIHNlc3Npb24gdmFyaWFibGUgd2lsbCBiZSBjcmVhdGVkIGZvciB0aGUgdXNlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vVGhlIHVzZXIgY2FuIGNob3NlIGlmIHRoZXkgYXJlIGRlcGFydG1lbnQgYWRtaW5zIG9yIG5vdC4gRm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZS5cbiAgICAvL0l0IHdvdWxkIGJlIGJldHRlciB0byBjcmVhdGUgYSB1c2VyIG1hbmFnZW1lbnQgcGFnZSB3aGVyZSBhbiBhZG1pbiBjYW4gc2V0IG90aGVyIHBlb3BsZSB0byBhZG1pbiwgZGVwYXJ0bWVudCBhZG1pbiBvciB1c2Vycy5cbiAgICAvL0J1dCB0aGlzIHByb2dyYW0gaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgYXMgaXQgaXMgaW4gYSBjb21wYW55LiBUaGlzIHdheSwgcGVvcGxlIGNhbiB0ZXN0IHRoZSBwcm9ncmFtIG1vcmUgZWFzaWx5LlxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgc2V0Um9sZShbXCJST0xFX0RFUEFSVE1FTlRfQURNSU5cIl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0Um9sZShbXCJST0xFX1VTRVJcIl0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vR2V0IGRhdGFzIGZyb20gdGhlIGZvcm0gY2hlY2tpbmcgaWYgZXZlcnkgYXJlYSBoYXZlIGJlZW4gZmlsbGVkIChhbmQgcmVtb3ZpbmcgcG90ZW50aWFsIHVud2FudGVkIGJsYW5rc3BhY2UpXG4gICAgdmFyIGhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZmlyc3RuYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgbGFzdG5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBlbWFpbC50cmltKCkubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IG1pc3NlZCBzb21ldGhpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZEYXRhID0ge1xuICAgICAgICAgICAgICAgICdkZXBhcnRtZW50X2lkJzogZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAnZW1haWwnOiBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAncm9sZSc6IHJvbGUsXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6IGZpcnN0bmFtZS50cmltKCksXG4gICAgICAgICAgICAgICAgJ2xhc3RuYW1lJzogbGFzdG5hbWUudHJpbSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3JlYXRlVXNlcihmRGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbS1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBzdHlsZTogeyBoZWlnaHQ6ICcxMDB2aCcgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwibG9naW5Gb3JtXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIGdyaWQgcm93IG10LTVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZSB0ZXh0LWNlbnRlclwiIH0sIFwiU2lnbiB1cFwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG1ldGhvZDogXCJwb3N0XCIsIGNsYXNzTmFtZTogXCJjb2wtbWQtNVwiLCBhY3Rpb246IFwiL1wiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJmaXJzdG5hbWVcIiwgY2xhc3NOYW1lOiBcImZvcm0tbGFiZWxcIiB9LCBcIkZpcnN0bmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgaWQ6IFwiZmlyc3RuYW1lXCIsIG5hbWU6IFwiZmlyc3RuYW1lXCIsIHZhbHVlOiBmaXJzdG5hbWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTsgfSwgcGxhY2Vob2xkZXI6IFwiSm9oblwiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxhc3RuYW1lXCIsIGNsYXNzTmFtZTogXCJmb3JtLWxhYmVsXCIgfSwgXCJMYXN0bmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgaWQ6IFwibGFzdG5hbWVcIiwgbmFtZTogXCJsYXN0bmFtZVwiLCB2YWx1ZTogbGFzdG5hbWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpOyB9LCBwbGFjZWhvbGRlcjogXCJMZW1vblwiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImRlcGFydG1lbnRcIiB9LCBcIkRlcGFydG1lbnRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1zZWxlY3RcIiwgbmFtZTogXCJkZXBhcnRtZW50XCIsIGlkOiBcImRlcGFydG1lbnRcIiwgdmFsdWU6IGRlcGFydG1lbnQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGVwYXJ0bWVudChlLnRhcmdldC52YWx1ZSk7IH0sIFwiYXJpYS1sYWJlbFwiOiBcIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiT3BlbiB0aGlzIHNlbGVjdCBtZW51XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnRzLm1hcChmdW5jdGlvbiAoX2EsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRlcGFydG1lbnQgPSBfYS5kZXBhcnRtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IGlkLCBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGRlcGFydG1lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJlbWFpbEFkZHJlc3NcIiwgY2xhc3NOYW1lOiBcImZvcm0tbGFiZWxcIiB9LCBcIkVtYWlsIGFkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiZW1haWxcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcImVtYWlsQWRkcmVzc1wiLCBpZDogXCJlbWFpbEFkZHJlc3NcIiwgdmFsdWU6IGVtYWlsLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTsgfSwgcGxhY2Vob2xkZXI6IFwibmFtZUBleGFtcGxlLmNvbVwiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImlucHV0UGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tbGFiZWxcIiB9LCBcIlBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG5hbWU6IFwiaW5wdXRQYXNzd29yZFwiLCBpZDogXCJpbnB1dFBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgdmFsdWU6IHBhc3N3b3JkLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTsgfSwgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwicGFzc3dvcmRIZWxwQmxvY2tcIiB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtYi0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJyb2xlXCIsIG5hbWU6IFwicm9sZVwiLCBvbkNoYW5nZTogaGFuZGxlQ2hlY2tib3ggfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwicm9sZVwiIH0sIFwiRGVwYXJ0bWVudCBBZG1pbj9cIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlNpZ24gdXBcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeSBtLTJcIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm10LTFcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IFwiLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL2xvZ2luXCIgfSwgXCJDbGljayBoZXJlIVwiKSkpLFxuICAgICAgICAgICAgbG9nZ2luZyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1zdWNjZXNzXCIgfSwgXCIuLi4gQ3JlYXRpbmcgYWNjb3VudCBhbmQgbG9nZ2luZyBpbiA6IENoZWNrIHlvdXIgZW1haWxzIVwiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbnZhciBab29tUG9zdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBpZCA9IF9hLmlkLCB0aXRsZSA9IF9hLnRpdGxlLCBjYXRlZ29yaWVzID0gX2EuY2F0ZWdvcmllcywgYm9keSA9IF9hLmJvZHksIGRpc3BsYXlfZGF0ZSA9IF9hLmRpc3BsYXlfZGF0ZSwgdXNlckxhc3ROYW1lID0gX2EudXNlckxhc3ROYW1lLCB1c2VyRGVwYXJ0bWVudCA9IF9hLnVzZXJEZXBhcnRtZW50LCBuYnJMaWtlID0gX2EubmJyTGlrZSwgbGlrZWRQb3N0ID0gX2EubGlrZWRQb3N0LCB1c2VyUm9sZSA9IF9hLnVzZXJSb2xlLCBvd25lcklkID0gX2Eub3duZXJJZCwgZGlzcGxheSA9IF9hLmRpc3BsYXksIG9uTGlrZSA9IF9hLm9uTGlrZSwgc3VwcHJJZCA9IF9hLnN1cHBySWQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoKSwgY3VycmVudFVzZXJJZCA9IF9iWzBdLCBzZXRDdXJyZW50VXNlcklkID0gX2JbMV07XG4gICAgdmFyIGlzSW5pdE1vdW5kID0gdXNlUmVmKHRydWUpO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzSW5pdE1vdW5kLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGdldFVzZXJJZCgpO1xuICAgICAgICAgICAgaXNJbml0TW91bmQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9TZW5kIGJhY2sgdG8gdGhlIGJvYXJkIGFuZCBzZW5kIHRoZSBwb3N0IElkIHRvIHRoZSBib2FyZCBzbyB0aGF0IGl0IGNhbiBzdG9wIGRpc3BsYXlpbmcgdGhlIGRlbGV0ZWQgcG9zdFxuICAgIGZ1bmN0aW9uIGhhbmRsZUNhbGxiYWNrKCkge1xuICAgICAgICBzdXBwcklkKGlkKTtcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcbiAgICAgICAgZGlzcGxheShmYWxzZSk7XG4gICAgfVxuICAgIC8vaW1wb3J0YW50IHRvIHNldCAnb25MaWtlJyBvbiBudWxsIG9yIHRoZSBsYXN0IGFjdGlvbiBtYWRlIG9uIHRoZSB6b29tZWQgcG9zdCB3aWxsIGJlIHJlcGVyY3V0ZWQgb24gdGhlIG5leHQgem9vbWVkIHBvc3RcbiAgICB2YXIgYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25MaWtlKG51bGwpO1xuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xuICAgICAgICBkaXNwbGF5KGZhbHNlKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGRlbGV0ZVBlcm0ocG9zdE93bmVySWQpIHtcbiAgICAgICAgaWYgKCh1c2VyUm9sZS5pbmNsdWRlcyhcIlJPTEVfQURNSU5cIikpIHx8ICh1c2VyUm9sZS5pbmNsdWRlcyhcIlJPTEVfREVQQVJUTUVOVF9BRE1JTlwiKSAmJiBjdXJyZW50VXNlcklkID09IHBvc3RPd25lcklkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VXNlcklkKCkge1xuICAgICAgICBmZXRjaCgnL2FwaS91c2VyL2dldElkJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VXNlcklkKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicG9zaXRpb24tZml4ZWQgb24tdG9wIG92ZXJmbG93LWhpZGRlbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBzdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMzLCAzMywgMzMsIDAuNylcIiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNhcmQgbS0zIG1iLTEgZC1mbGV4IGZsZXgtY29sdW1uXCIsIHN0eWxlOiB7IG9wYWNpdHk6ICcxJywgd2lkdGg6IFwiNDAlXCIsIGhlaWdodDogJzk1JScsIG1pbkhlaWdodDogJzYwMHB4JywgbWluV2lkdGg6ICc0MDBweCcgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIsIHN0eWxlOiB7IGhlaWdodDogJzEwMCUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkLXRpdGxlIGNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidG4tY2xvc2UgYWxpZ24tc2VsZi1lbmRcIiwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiwgb25DbGljazogYmFjayB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgd2lkdGg6ICc5MCUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCB7IHRpdGxlOiB0aXRsZSwgY2F0ZWdvcmllczogY2F0ZWdvcmllcyB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwgeyBib2R5OiBib2R5LCBuYW1lOiB1c2VyTGFzdE5hbWUsIGRlcGFydG1lbnQ6IHVzZXJEZXBhcnRtZW50LmRlcGFydG1lbnQgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2wtc21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCB7IGlkOiBpZCwgbmJyTGlrZTogbmJyTGlrZSwgZGlzcGxheV9kYXRlOiBkaXNwbGF5X2RhdGUsIHRpdGxlOiB0aXRsZSwgbmFtZTogdXNlckxhc3ROYW1lLCBsaWtlZFBvc3Q6IGxpa2VkUG9zdCwgcGFyZW50Q2FsbGJhY2s6IGhhbmRsZUNhbGxiYWNrLCBjYW5EZWxldGU6IGRlbGV0ZVBlcm0ob3duZXJJZCksIG9uTGlrZTogb25MaWtlIH0pKSkpKSkpKTtcbn07XG52YXIgSGVhZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBjYXRlZ29yaWVzID0gX2EuY2F0ZWdvcmllcztcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSAnSW1wb3J0YW50JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYm9yZGVyIGJvcmRlci0xIGJvcmRlci1kYW5nZXIgcm91bmRlZC1jaXJjbGUgdGV4dC13aGl0ZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGOEIwMFwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIiFcIikpO1xuICAgICAgICAgICAgY2FzZSAnVXJnZW50JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYm9yZGVyIGJvcmRlci0xIGJvcmRlci1kYW5nZXIgcm91bmRlZC1jaXJjbGUgdGV4dC13aGl0ZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzgwMDBGRlwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIlVcIikpO1xuICAgICAgICAgICAgY2FzZSAnSW5mb3JtYXRpb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXN1Y2Nlc3Mgcm91bmRlZC1jaXJjbGUgZnctYm9sZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIiwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiMwMDlDMThcIiwgd2lkdGg6IFwiMjBweFwiIH0sIFwiZGF0YS1tZGItdG9nZ2xlXCI6IFwicG9wb3ZlclwiLCBcImRhdGEtbWRiLXRyaWdnZXJcIjogXCJob3ZlclwiLCB0aXRsZTogY2F0ZWdvcnkgfSwgXCJJbmZvXCIpKTtcbiAgICAgICAgICAgIGNhc2UgJ1JlcXVlc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhcmsgcm91bmRlZC1jaXJjbGUgZnctYm9sZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIiwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM5MDkwOTBcIiwgd2lkdGg6IFwiMjBweFwiIH0sIFwiZGF0YS1tZGItdG9nZ2xlXCI6IFwicG9wb3ZlclwiLCBcImRhdGEtbWRiLXRyaWdnZXJcIjogXCJob3ZlclwiLCB0aXRsZTogY2F0ZWdvcnkgfSwgXCJSZXFcIikpO1xuICAgICAgICAgICAgY2FzZSAnTWVldGluZyBub3RpY2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhbmdlciByb3VuZGVkLWNpcmNsZSBmdy1ib2xkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvd1wiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzdDODRGRlwiLCB3aWR0aDogXCIyMHB4XCIgfSwgXCJkYXRhLW1kYi10b2dnbGVcIjogXCJwb3BvdmVyXCIsIFwiZGF0YS1tZGItdHJpZ2dlclwiOiBcImhvdmVyXCIsIHRpdGxlOiBjYXRlZ29yeSB9LCBcIk1lZXRcIikpO1xuICAgICAgICAgICAgY2FzZSAnRXZlbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXByaW1hcnkgcm91bmRlZC1jaXJjbGUgZnctYm9sZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIiwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM3N0Y5QzRcIiwgd2lkdGg6IFwiMjBweFwiIH0sIFwiZGF0YS1tZGItdG9nZ2xlXCI6IFwicG9wb3ZlclwiLCBcImRhdGEtbWRiLXRyaWdnZXJcIjogXCJob3ZlclwiLCB0aXRsZTogY2F0ZWdvcnkgfSwgXCJFdm50XCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY3VzdG9tLWNhcmQtdGl0bGVzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSBmdy1ib2xkXCIsIHN0eWxlOiB7IGZvbnRTaXplOiAnMS4ycmVtJywgaGVpZ2h0OiAnMjVweCcgfSB9LCB0aXRsZSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtcm93IHctMjUganVzdGlmeS1jb250ZW50LWFyb3VuZFwiLCBzdHlsZTogeyBmb250U2l6ZTogXCIwLjdyZW1cIiB9IH0sIGNhdGVnb3JpZXMubWFwKGZ1bmN0aW9uIChjYXRlZ29yeSwgaW5kZXgpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1sLTFcIiwga2V5OiBpbmRleCB9LCBkaXNwbGF5Q2F0ZWdvcnkoY2F0ZWdvcnkpKSk7IH0pKSkpO1xufTtcbnZhciBCb2R5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGJvZHkgPSBfYS5ib2R5LCBuYW1lID0gX2EubmFtZSwgZGVwYXJ0bWVudCA9IF9hLmRlcGFydG1lbnQ7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgaGVpZ2h0OiAnNzV2aCcgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleCBmb250U2l6ZS0yNSBmdy1ib2xkXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXCJcIi5jb25jYXQobmFtZSwgXCIgZnJvbSBcIikuY29uY2F0KGRlcGFydG1lbnQpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwib3ZlcmZsb3ctYXV0byBjdXN0b20tY2FyZC10YWdzXCIsIHN0eWxlOiB7IGhlaWdodDogJzk1JScsIHdpZHRoOiAnMTAwJScgfSB9LCBwYXJzZShib2R5KSkpKTtcbn07XG52YXIgRm9vdGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGlkID0gX2EuaWQsIG5ickxpa2UgPSBfYS5uYnJMaWtlLCBkaXNwbGF5X2RhdGUgPSBfYS5kaXNwbGF5X2RhdGUsIG5hbWUgPSBfYS5uYW1lLCB0aXRsZSA9IF9hLnRpdGxlLCBsaWtlZFBvc3QgPSBfYS5saWtlZFBvc3QsIHBhcmVudENhbGxiYWNrID0gX2EucGFyZW50Q2FsbGJhY2ssIGNhbkRlbGV0ZSA9IF9hLmNhbkRlbGV0ZSwgb25MaWtlID0gX2Eub25MaWtlO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKCcnKSwgZGF0ZSA9IF9iWzBdLCBzZXREYXRlID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUobmJyTGlrZSksIGxpa2VDb3VudCA9IF9jWzBdLCBzZXRMaWtlQ291bnQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShbXSksIGxpa2VBcnJheSA9IF9kWzBdLCBzZXRMaWtlQXJyYXkgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZSgpLCB1c2VyTGlrZSA9IF9lWzBdLCBzZXRVc2VyTGlrZSA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKHRydWUpLCBsb2FkID0gX2ZbMF0sIHNldExvYWQgPSBfZlsxXTtcbiAgICB2YXIgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdmFyIGlzTW91bnRab29tZWQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWxyZWFkeUxpa2VkKCk7IC8vV2UgbG9hZCBpZiB0aGUgYnV0dG9uIGlzIGFscmVhZHkgbGlrZWQgb3Igbm90LCBzbyB0aGF0IHRoZSB1c2VyIGNhbiB1bmxpa2Ugb3IgbGlrZSBwcm9wZXJseSBhZnRlcndhcmRzXG4gICAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBsaWtlZG9ybm90KCk7XG4gICAgICAgICAgICBkaXNwbGF5X2RhdGUgPSBkaXNwbGF5X2RhdGUucmVwbGFjZShcIlRcIiwgXCIgXCIpOyAvLyByZWZvcm1hdCB0aGUgZGlzcGxheSBkYXRlIHNvIHRoYXQgaXQgaXMgcmVhZGFibGUgYW5kIG5pY2UgdG8gdGhlIHVzZXJcbiAgICAgICAgICAgIGRpc3BsYXlfZGF0ZSA9IGRpc3BsYXlfZGF0ZS5zcGxpdChcIitcIik7XG4gICAgICAgICAgICBzZXREYXRlKGRpc3BsYXlfZGF0ZVswXSk7IC8vb25seSBbMF0gdG8gcmVtb3ZlIHdoYXQncyBub3QgbmVjZXNzYXJ5XG4gICAgICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNNb3VudFpvb21lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBpc01vdW50Wm9vbWVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsaWtlQXJyYXkuaW5jbHVkZXMoaWQpICYmICFsaWtlZFBvc3QuaW5jbHVkZXMoaWQpKSB7IC8vaWYgdGhlIHBvc3QgaGFzIGJlZW4gbGlrZWQgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgc2V0VXNlckxpa2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0TGlrZUNvdW50KGxpa2VDb3VudCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWxpa2VBcnJheS5pbmNsdWRlcyhpZCkgJiYgbGlrZWRQb3N0LmluY2x1ZGVzKGlkKSkgeyAvL2lmIHRoZSBwb3N0IGhhcyBiZWVuIHVubGlrZWQgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgc2V0VXNlckxpa2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldExpa2VDb3VudChsaWtlQ291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtsaWtlQXJyYXldKTtcbiAgICBmdW5jdGlvbiBhbHJlYWR5TGlrZWQoKSB7XG4gICAgICAgIGlmIChsaWtlZFBvc3QuaW5jbHVkZXMoaWQpICYmIGxvYWQpIHtcbiAgICAgICAgICAgIHNldFVzZXJMaWtlKHRydWUpO1xuICAgICAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9mZXRjaCBpZiBsaWtlZCBvciBub3QgaW4gdGhlIGRiICh3ZSBjb21wYXJlIHRoZSBmaXJzdCBhcnJheSBhbmQgdGhlIG5ldyBvbmUpXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGlzIG1lYW50IHRoYXQgaWYgYSBwb3N0IGlzIGxpa2VkIG9uIHRoZSBib2FyZCwgaXQgaXMgdXBkYXRlZCBvbiB0aGUgem9vbWVkIHZlcnNpb25cbiAgICBmdW5jdGlvbiBsaWtlZG9ybm90KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL2xpa2UvZ2V0XCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlQXJyYXkoZnVuY3Rpb24gKGxpa2VBcnJheSkgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBsaWtlQXJyYXksIHRydWUpLCBbcG9zdFsxXV0sIGZhbHNlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1cHByKCkge1xuICAgICAgICB2YXIgdGV4dCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcG9zdCBcIiArIHRpdGxlICsgXCIgb2YgXCIgKyBuYW1lICsgXCI/XCI7XG4gICAgICAgIGlmIChjb25maXJtKHRleHQpID09IHRydWUpIHtcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL3Bvc3QvZGVsZXRlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAnaWQnOiBpZCB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IFwiWW91IGNhbmNlbGVkIVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZExpa2UoKSB7XG4gICAgICAgIGZldGNoKFwiL2FwaS9saWtlL2FkZFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAncG9zdElkJzogaWQgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIG9uTGlrZSh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlrZSgpIHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL2xpa2UvdW5saWtlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgJ3Bvc3RJZCc6IGlkIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBvbkxpa2UoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVMaWtlKCkge1xuICAgICAgICBpZiAodXNlckxpa2UpIHtcbiAgICAgICAgICAgIHNldFVzZXJMaWtlKGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZUxpa2UoKTtcbiAgICAgICAgICAgIHNldExpa2VDb3VudChsaWtlQ291bnQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFVzZXJMaWtlKHRydWUpO1xuICAgICAgICAgICAgYWRkTGlrZSgpO1xuICAgICAgICAgICAgc2V0TGlrZUNvdW50KGxpa2VDb3VudCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtMFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIHVzZXJMaWtlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6ICdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5Jywgb25DbGljazogaGFuZGxlTGlrZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRodW1icy11cFwiIH0pKSxcbiAgICAgICAgICAgICF1c2VyTGlrZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiAnYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5Jywgb25DbGljazogaGFuZGxlTGlrZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRodW1icy11cFwiIH0pKSxcbiAgICAgICAgICAgIFwiICtcIixcbiAgICAgICAgICAgIGxpa2VDb3VudCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBoZWlnaHQ6IFwiMXJlbVwiIH0sIGNsYXNzTmFtZTogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtZW5kIGZsZXgtY29sdW1uIGZvbnRTaXplLTA4XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogXCIxcmVtXCIgfSB9LCBcIlBvc3RlZCBvbiA6IFwiLmNvbmNhdChkYXRlKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNhbkRlbGV0ZSA9PSB0cnVlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zbVwiLCBvbkNsaWNrOiBoYW5kbGVTdXBwciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgY2xhc3NOYW1lOiBcImJpIGJpLXRyYXNoXCIsIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41Wm0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjVabTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2WlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxWk00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMThaTTIuNSAzaDExVjJoLTExdjFaXCIgfSkpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgWm9vbVBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG52YXIgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJvd3NlclJvdXRlciwgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlcyIsIlJvdXRlIiwiTG9naW4iLCJTaWdudXAiLCJCb2FyZCIsIkFkZFBvc3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGF0aCIsImVsZW1lbnQiLCJ1c2VOYXZpZ2F0ZSIsIkFkZEJ0biIsIm5hdmlnYXRlIiwibmF2aWdhdGVBZGRQb3N0IiwidHlwZSIsIm9uQ2xpY2siLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInZpZXdCb3giLCJkIiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwibCIsImFyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjb25jYXQiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJFZGl0b3IiLCJfYSIsInRpdGxlIiwic2V0VGl0bGUiLCJfYiIsIm1heExlbmd0aFRpdGxlIiwic2V0TWF4TGVuZ3RoIiwiX2MiLCJ0ZXh0Iiwic2V0VGV4dCIsIl9kIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJfZSIsIm5vdyIsInNldE5vdyIsIl9mIiwic3VwcHIiLCJzZXRTdXBwciIsIl9nIiwic3RhcnQiLCJzZXRTdGFydCIsIl9oIiwiZW5kIiwic2V0RW5kIiwiX2oiLCJwb3N0aW5nIiwic2V0UG9zdGluZyIsImhhbmRsZUNhdGVnb3JpZXMiLCJldmVudCIsImJveFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiY2hlY2tlZCIsImluY2x1ZGVzIiwicHJlcCIsImZpbHRlciIsImNhdGVnb3J5IiwiY2hhbmdlQ2F0ZWdvcmllcyIsImhhbmRsZU5vdyIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInN0YXJ0VGltZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImhhbmRsZVN1cHByIiwic2VuZFBvc3QiLCJwb3N0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZEYXRhIiwiaWQiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJtYXhMZW5ndGgiLCJvbkNoYW5nZSIsImUiLCJyb2xlIiwic3R5bGUiLCJmb250U2l6ZSIsImFwaUtleSIsImluaXRpYWxWYWx1ZSIsImluaXQiLCJtZW51YmFyIiwicGx1Z2lucyIsInRvb2xiYXIxIiwidG9vbGJhcjIiLCJpbWFnZXNfdXBsb2FkX3VybCIsImltYWdlX3RpdGxlIiwiYXV0b21hdGljX3VwbG9hZHMiLCJpbWFnZV9hZHZ0YWIiLCJpbWFnZV91cGxvYWR0YWIiLCJjb250ZW50X3N0eWxlIiwib25FZGl0b3JDaGFuZ2UiLCJjb250ZW50IiwiZWRpdG9yIiwibWluIiwidG9JU09TdHJpbmciLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjcmVhdGVTZWFyY2hQYXJhbXMiLCJTZWFyY2hiYXIiLCJQb3N0IiwiWm9vbVBvc3QiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwibGlrZWRQb3N0Iiwic2V0TGlrZWRQb3N0IiwiaXNWZXJpZmllZCIsInNldElzVmVyaWZpZWQiLCJwb3N0cyIsInNldFBvc3RzIiwiZm9jdXNDYXQiLCJzZXRGb2N1c0NhdCIsInNlYXJjaCIsInNldFNlYXJjaCIsInpvb20iLCJzZXRab29tIiwiem9vbUxpa2UiLCJzZXRab29tTGlrZSIsInpvb21Qb3N0Iiwic2V0Wm9vbVBvc3QiLCJfayIsInpvb21lZFN1cHBySWQiLCJzZXRab29tZWRTdXBwcklkIiwiaXNJbml0aWFsTW91bnQiLCJjdXJyZW50IiwiZ2V0UG9zdHMiLCJpc0xvZ2dlZEluIiwiZ2V0VXNlclJvbGUiLCJnZXRWZXJpZmljYXRpb24iLCJwb3N0c0lkc0xpa2VkYnlVc2VyIiwiY2hlY2tVUkwiLCJsaWtlT25Cb2FyZDIiLCJ6b29tSWQiLCJwb3N0SWQiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJoYW5kbGVSZXNlbmQiLCJvYmpDYXRlZ29yaWVzIiwiZm9yRWFjaCIsIm9iakNhdGVnb3J5IiwiaGFuZGxlWm9vbVBvc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhcyIsImdldCIsIm92ZXJmbG93WCIsImNoYW5nZUZvY3VzQ2F0IiwiY2hhbmdlU2VhcmNoIiwiaHJlZiIsIm1hcCIsImtleSIsInVzZXJMYXN0TmFtZSIsInVzZXIiLCJsYXN0bmFtZSIsInVzZXJEZXBhcnRtZW50IiwiZGVwYXJ0bWVudCIsImRpc3BsYXlfZGF0ZSIsInN0YXJ0X2Rpc3BsYXlfZGF0ZSIsImVuZF9kYXRlIiwiZGVsZXRlX2RhdGUiLCJuYnJMaWtlIiwicG9zdHNMaWtlcyIsIm93bmVySWQiLCJmb2N1c1RleHQiLCJ6b29tTGlrZWQiLCJ6b29tU3VwcHJJZCIsImRpc3BsYXkiLCJvbkxpa2UiLCJzdXBwcklkIiwiRm9vdGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwibG9nZ2luZyIsInNldExvZ2dpbmciLCJsb2dpbiIsImRhdGFzIiwicmVkaXJlY3RlZCIsInJlcGxhY2UiLCJhY3Rpb24iLCJvblN1Ym1pdCIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwiYXV0b0ZvY3VzIiwicGFyc2UiLCJyZWFkeSIsInNldFJlYWR5IiwiY3VycmVudFVzZXJJZCIsInNldEN1cnJlbnRVc2VySWQiLCJnZXRVc2VySWQiLCJwb3N0RXhwaXJlZCIsIk5vRGlzcGxheVlldCIsImhhbmRsZUNhbGxiYWNrIiwic2VhcmNoRm9jdXMiLCJ0b0xvd2VyQ2FzZSIsImV4cGlyYXRpb24iLCJkZWxldGVQZXJtIiwicG9zdE93bmVySWQiLCJIZWFkIiwiQm9keSIsInBhcmVudENhbGxiYWNrIiwiY2FuRGVsZXRlIiwidGl0bGVTaXplIiwic2V0VGl0bGVTaXplIiwiZ2V0VGl0bGVTaXplIiwiZGlzcGxheUNhdGVnb3J5IiwiYmFja2dyb3VuZENvbG9yIiwiaW5kZXgiLCJkYXRlIiwic2V0RGF0ZSIsImxpa2VDb3VudCIsInNldExpa2VDb3VudCIsInVzZXJMaWtlIiwic2V0VXNlckxpa2UiLCJsb2FkIiwic2V0TG9hZCIsImlzSW5pdGlhbFpvb21MaWtlIiwiYWxyZWFkeUxpa2VkIiwic3BsaXQiLCJjb25maXJtIiwiYWRkTGlrZSIsInJlbW92ZUxpa2UiLCJoYW5kbGVMaWtlIiwicHJvcHMiLCJ1c2VyTWFpbCIsInNldFVzZXJNYWlsIiwiaXNJbml0TW91bnQiLCJnZXRVc2VyTWFpbCIsImdldENhdGVnb3JpZXMiLCJoYW5kbGVMb2dvdXQiLCJnYXAiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZmlyc3RuYW1lIiwic2V0Rmlyc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJzZXREZXBhcnRtZW50IiwiZGVwYXJ0bWVudHMiLCJzZXREZXBhcnRtZW50cyIsInNldFJvbGUiLCJnZXREZXBhcnRtZW50IiwiY3JlYXRlVXNlciIsImhhbmRsZUNoZWNrYm94IiwidHJpbSIsImlzSW5pdE1vdW5kIiwiYmFjayIsIm9wYWNpdHkiLCJtaW5IZWlnaHQiLCJsaWtlQXJyYXkiLCJzZXRMaWtlQXJyYXkiLCJpc01vdW50Wm9vbWVkIiwibGlrZWRvcm5vdCIsIkJyb3dzZXJSb3V0ZXIiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9