require("source-map-support").install();
exports.ids = [1];
exports.modules = Array(65).concat([
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(75);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */], {}));

function action() {
  return {
    chunks: ['model'],
    title: 'ClassUI',
    component: _ref
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(77);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Layout_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {});

function Layout(props) {
  return _jsx('div', {}, void 0, _ref, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_5__Layout_css___default.a.content
  }, void 0, props.children));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_5__Layout_css___default.a)(Layout));

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__Navigation__["a" /* default */], {});

function Header(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.container
  }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brand,
    to: '/'
  }, void 0, _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brandTxt
  }, void 0, 'ClassUI')), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.adornment
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.yellow
  }), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.orange
  }), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.dgreen
  }), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.lgreen
  }), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.dblue
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Header));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default.a());

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(73);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







function Navigation(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root,
    role: 'navigation'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/'
  }, void 0, 'Classify'), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/types'
  }, void 0, 'Types'), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/model'
  }, void 0, 'Model'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer
  }, void 0, ' | '), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/login'
  }, void 0, 'Log in'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer
  }, void 0, 'or'), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight),
    to: '/register'
  }, void 0, 'Sign up'));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(80);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".d0C7s{float:right;margin:10px 0 0}._3unRI{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._3unRI,._3unRI:active,._3unRI:visited{color:hsla(0,0%,100%,.6)}._3unRI:hover,.PPdJ5{color:#fff}.PPdJ5{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.PPdJ5:hover{background:rgba(0,0,0,.3)}.cX3Pd{color:hsla(0,0%,100%,.3)}", ""]);

// exports
exports.locals = {
	"root": "d0C7s",
	"link": "_3unRI",
	"highlight": "PPdJ5",
	"spacer": "cX3Pd"
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(82);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._1vSE5{background:#222;color:#fff;position:fixed;top:0;width:100%;z-index:100}._1EKFE{height:55px}._2ZSht{color:#fff;text-decoration:none;font-size:36px}.dkY7q{margin-left:10px;font-family:Montserrat;font-weight:700;text-transform:uppercase}._2uhqi{bottom:0;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:5px}._2MtX6{background:#f2ca70;-moz-flex:5;-ms-flex:5;-o-flex:5;-webkit-box-flex:5;flex:5 1 0%}._154sT{background:#ed9e72;-moz-flex:1;-ms-flex:1;-o-flex:1;-webkit-box-flex:1;flex:1 1 0%}._28tUW{background:#9fdd5e;-moz-flex:14;-ms-flex:14;-o-flex:14;-webkit-box-flex:14;flex:14 1 0%}._3h5tV{background:#caed72;-moz-flex:5;-ms-flex:5;-o-flex:5;-webkit-box-flex:5;flex:5 1 0%}._3QYOc{background:#4e7fc6;-moz-flex:10;-ms-flex:10;-o-flex:10;-webkit-box-flex:10;flex:10 1 0%}", ""]);

// exports
exports.locals = {
	"root": "_1vSE5",
	"container": "_1EKFE",
	"brand": "_2ZSht",
	"brandTxt": "dkY7q",
	"adornment": "_2uhqi",
	"yellow": "_2MtX6",
	"orange": "_154sT",
	"dgreen": "_28tUW",
	"lgreen": "_3h5tV",
	"dblue": "_3QYOc"
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(84);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(86);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._3LJXu{margin-top:60px;font-weight:400}html{color:#222;font-weight:100;font-size:1em;font-family:Roboto Condensed,Montserrat,sans-serif;line-height:1.375}body{margin:0;text-transform:uppercase}a{color:#0074c2}h2,h3{font-weight:400;margin:0}h3{color:rgba(34,34,34,.7)}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports
exports.locals = {
	"content": "_3LJXu"
};

/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdown_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





// Import Components



class Dropdown extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show_options: false,
      options_hover: false
    };
    this.timeout = null;
  }

  render() {
    const show_options = this.props.options && this.props.options.length > 0;
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.alt]: this.props.alt })
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.container
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.select,
      onClick: () => {
        clearTimeout(this.timeout);
        this.setState({ show_options: true });
      },
      onMouseLeave: () => {
        if (!this.state.options_hover) this.timeout = setTimeout(() => {
          this.setState({ show_options: false });
        }, 250);
      }
    }, void 0, _jsx('span', {
      className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.selected
    }, void 0, this.props.selected ? this.props.selected : this.props.options ? this.props.options[0] : undefined), show_options && _jsx('span', {
      className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.arrow
    })), show_options && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.options),
      style: { height: this.state.show_options ? (this.props.options.length + 1) * 22 + 'px' : 0 /*TODO CORRECT VALUE*/ },
      onMouseLeave: this.optionsMouseLeave.bind(this),
      onMouseEnter: () => {
        clearTimeout(this.timeout);
        this.setState({ options_hover: true });
      }
    }, void 0, this.getOptions())));
  }

  optionsMouseLeave() {
    this.setState({ options_hover: false });
    this.timeout = setTimeout(() => {
      this.setState({ show_options: false });
    }, 250);
  }

  getOptions() {
    if (!this.props.options) return;
    const arr = this.props.options.slice();
    if (this.props.selected) arr.unshift(this.props.selected);else arr.unshift(arr[0]);
    return arr.map((option, index) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.option,
      style: index === 0 ? { opacity: 0.7 } : undefined,
      onClick: () => {
        this.onSelect(option);
      }
    }, index, option));
  }

  onSelect(value) {
    this.setState({ show_options: false });
    this.setState({ options_hover: false });
    this.props.onSelect(value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a)(Dropdown));

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd-hover%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23222;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel-hover%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(94);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Dropdown.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Dropdown.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._33Ta6{line-height:21px;max-width:100%}._33Ta6._2RjUa ._1RsEh:after{border-color:#fff transparent transparent}._33Ta6._2RjUa ._2MF1W{background:#fff;color:#222}._2l6gt{cursor:pointer;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;max-width:100%}._1RsEh{position:relative;width:10px}._1RsEh:after{content:\"\";width:0;top:calc(50% - 1px);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-style:solid;border-width:4px 4px 0;border-color:#555 transparent transparent}._1RsEh:after,._2MF1W{position:absolute;height:0}._2MF1W{max-width:100%;overflow:hidden;background:#ddd;-webkit-transition:height .3s cubic-bezier(.46,.04,.07,.93);-o-transition:height .3s cubic-bezier(.46,.04,.07,.93);transition:height .3s cubic-bezier(.46,.04,.07,.93);z-index:50}.xNLPU{padding:1px 15px 0 5px}.xNLPU:hover{background:#c4c4c4}._1Vuh9{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex}._7rQhY{max-width:calc(100% - 15px);margin:0 5px;padding-top:1px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}", ""]);

// exports
exports.locals = {
	"root": "_33Ta6",
	"alt": "_2RjUa",
	"arrow": "_1RsEh",
	"options": "_2MF1W",
	"container": "_2l6gt",
	"option": "xNLPU",
	"select": "_1Vuh9",
	"selected": "_7rQhY"
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit-hover%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_format_duration__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_format_duration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_format_duration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Dropdown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_DataWindow__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Entry_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Entry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Entry_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();













class Entry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false
		};
	}
	// {this.props.adder && <div className={classNames(styles.button, styles.spacer)} />}
	render() {
		return _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.adder]: this.props.adder }),
			onMouseEnter: this.props.onMouseEnter,
			onMouseLeave: this.props.onMouseLeave
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.container
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.bar
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.buttons
		}, void 0, !this.props.adder && _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.del),
			onClick: this.props.onDelete
		}), !this.props.adder && _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.edit, { [__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.done]: this.props.editing }),
			onClick: () => {
				this.props.onEdit(this.props.editing);
			}
		}), this.props.adder && _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.add),
			onClick: this.props.onAdd
		})), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.info
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.service
		}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_components_Dropdown__["a" /* default */], {
			options: this.props.services ? Object.keys(this.props.services) : [],
			selected: this.props.service,
			onSelect: value => {
				if (value === this.props.service) return;
				this.props.editEntry(this.props.entry_id, 'service', value);
				this.props.editEntry(this.props.entry_id, 'attributes', {});
			}
		})), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.spacer
		}), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.time
		}, void 0, _jsx('span', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.start
		}, void 0, __WEBPACK_IMPORTED_MODULE_2_format_duration___default.a(this.props.start || 0)), '-', _jsx('span', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.end
		}, void 0, __WEBPACK_IMPORTED_MODULE_2_format_duration___default.a(this.props.end || 0))))), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.data
		}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6_components_DataWindow__["a" /* default */]
		// alt={this.props.adder}
		, {
			open: this.state.open || this.props.adder,
			attributes: this.props.attributes,
			services: this.props.services,
			service: this.props.service,
			editAttribute: (attribute, value) => {
				this.props.editAttribute(this.props.entry_id, attribute, value);
			}
		}))));
	}

	// <Dropdown 
	// 	options={this.props.services ? Object.keys(this.props.services) : []}
	// 	selected={this.props.service}
	// 	onSelect={this.setEntryService.bind(this)} />

}
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a, __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css___default.a)(Entry));

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Dropdown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataWindow_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx('h3', {}, void 0, 'No Attributes');

class DataWindow extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.alt]: this.props.alt, [__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.open]: this.props.open })
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.container
    }, void 0, this.getAttributes()));
  }

  getAttributes() {
    if (!this.props.service || !this.props.services || Object.keys(this.props.services[this.props.service]).length < 1) return _ref;
    const attributes = Object.entries(this.props.services[this.props.service]).map((attribute, index) => _jsx('tr', {
      className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.attribute
    }, index, _jsx('td', {
      className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.name
    }, void 0, attribute[0]), _jsx('td', {
      className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.value
    }, void 0, this.parseAttribute(attribute[0], attribute[1], this.props.attributes[attribute[0]]))));
    return _jsx('table', {
      className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.attributes
    }, void 0, _jsx('tbody', {}, void 0, attributes));
  }

  parseAttribute(attribute, possible, value) {
    if (possible === 'NUMERIC') return _jsx('input', {
      type: 'number',
      value: value,
      onChange: e => {
        this.props.editAttribute(attribute, e.target.value);
      }
    });
    if (possible instanceof Array) return _jsx(__WEBPACK_IMPORTED_MODULE_3_components_Dropdown__["a" /* default */], {
      options: possible,
      selected: value,
      onSelect: value => {
        this.props.editAttribute(attribute, value);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a)(DataWindow));

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(100);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./DataWindow.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./DataWindow.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._2zRne{padding-left:5px;font-weight:700;overflow:hidden}._2zRne._1vJS- h3{color:#fff;font-weight:700}._2zRne._1fSYl{height:auto}._2Uprb{font-weight:400}", ""]);

// exports
exports.locals = {
	"root": "_2zRne",
	"alt": "_1vJS-",
	"open": "_1fSYl",
	"container": "_3SreT",
	"value": "_2Uprb"
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(102);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Entry.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Entry.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._2F7MY._1XcUC .YiEfC{margin-left:24px}._1nBaf,.Y1ykM{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex}.Y1ykM{border-bottom:2px solid #222}.pTtL-,.Y1ykM{-moz-flex:1;-ms-flex:1;-o-flex:1;-webkit-box-flex:1;flex:1 1 0%}.tlntT{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.tlntT ._390ID{display:inline-table;background:red}.v05BK{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex}.v05BK .pTtL-{opacity:0}._2Ew1z,.v05BK .pTtL-{width:24px;height:24px}._2Ew1z{background-size:24px 24px;cursor:pointer}._2Ew1z:hover{background:#222}._2Ew1z._34XyG{background-image:url(" + __webpack_require__(89) + ")}._2Ew1z._34XyG:hover{background-image:url(" + __webpack_require__(90) + ")}._2Ew1z._2V8kp{background-image:url(" + __webpack_require__(91) + ")}._2Ew1z._2V8kp:hover{background-image:url(" + __webpack_require__(92) + ")}._2Ew1z._3sGvB{background-image:url(" + __webpack_require__(95) + ")}._2Ew1z._3sGvB:hover{background-image:url(" + __webpack_require__(96) + ")}._2Ew1z._2p_zo{background-image:url(" + __webpack_require__(103) + ")}._2Ew1z._2p_zo:hover{background-image:url(" + __webpack_require__(104) + ")}._1DDQf{padding:1px 5px 0 0;line-height:21px}.YiEfC{margin-left:48px}", ""]);

// exports
exports.locals = {
	"root": "_2F7MY",
	"adder": "_1XcUC",
	"data": "YiEfC",
	"container": "_1WVv8",
	"bar": "_1nBaf",
	"info": "Y1ykM",
	"spacer": "pTtL-",
	"service": "tlntT",
	"Select-control": "_390ID",
	"buttons": "v05BK",
	"button": "_2Ew1z",
	"add": "_34XyG",
	"del": "_2V8kp",
	"edit": "_3sGvB",
	"done": "_2p_zo",
	"time": "_1DDQf"
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eedit%3C/title%3E %3Cpolyline class='st0' points='15.5,6.9 8.2,14.2 4.6,10.6 '/%3E %3C/svg%3E\""

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eedit%3C/title%3E %3Cpolyline class='st0' points='15.5,6.9 8.2,14.2 4.5,10.6 '/%3E %3C/svg%3E\""

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(106);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../css-loader/index.js??ref--1-rules-1!../../postcss-loader/lib/index.js??ref--1-rules-3!./react-select.css", function() {
        content = require("!!../../css-loader/index.js??ref--1-rules-1!../../postcss-loader/lib/index.js??ref--1-rules-3!./react-select.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".Select{position:relative}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{-webkit-box-shadow:none;box-shadow:none}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06);box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;-webkit-box-shadow:none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:14px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06);box-shadow:0 1px 0 rgba(0,0,0,.06);-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{-webkit-box-sizing:border-box;box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




// Import Components



class EditDataWindow extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		return _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.root
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.container
		}, void 0, this.getAttributes()));
	}

	componentDidMount() {
		this.props.onRef(this);
	}

	componentWillUnnount() {
		this.props.onRef(undefined);
	}

	getAttributes() {
		if (!this.props.attributes || Object.keys(this.props.attributes).length < 1) return _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.alert
		}, void 0, 'No Attributes');
		return _jsx('table', {}, void 0, _jsx('tbody', {}, void 0, Object.entries(this.props.attributes).map(entry => _jsx('tr', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.attribute
		}, entry[0], _jsx('td', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.name
		}, void 0, entry[0]), _jsx('td', {
			className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.options
		}, void 0, this.parseAttribute(entry[1]))))));
	}

	parseAttribute(attr) {
		if (attr instanceof Array) {
			return _jsx('ul', {}, void 0, attr.map(a => _jsx('li', {
				className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.arrayitem
			}, a, a)));
		} else if (attr === 'NUMERIC') {
			return 'Numeric';
		} else if (attr === 'STRING') {
			return 'String';
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a)(EditDataWindow));

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(109);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./EditDataWindow.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./EditDataWindow.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._2IEjw ul{list-style-type:none;display:inline-block;padding:0;margin:0}._2IEjw table{padding-left:5px}._3bllL{font-size:16px}._3KHz8{text-align:right;vertical-align:top}._2tb__{position:relative;text-align:left;padding-left:5px}._2tb__,.hyVmj{font-weight:400}", ""]);

// exports
exports.locals = {
	"root": "_2IEjw",
	"attribute": "_3bllL",
	"name": "_3KHz8",
	"options": "_2tb__",
	"alert": "hyVmj"
};

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_runtime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_Classify_Entry__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_Service_EditDataWindow__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Model_css__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Model_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Model_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

















var _ref = _jsx('h2', {}, void 0, 'Select Services');

var _ref2 = _jsx('h2', {}, void 0, 'Models');

var _ref3 = _jsx('h3', {}, void 0, 'No Services');

var _ref4 = _jsx('h3', {}, void 0, 'No Models');

var _ref5 = _jsx('h4', {}, void 0, 'Positive Cases');

var _ref6 = _jsx('h4', {}, void 0, 'Negative Cases');

var _ref7 = _jsx('h3', {}, void 0, 'No Negative Cases');

var _ref8 = _jsx('h4', {}, void 0, 'Status');

class Model extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: {},
      filter: '',
      models: {}
    };
  }

  componentDidMount() {
    this.fetchServices();
  }

  render() {
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.container
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service_search
    }, void 0, _ref, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.nav
    }, void 0, _jsx('input', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.search,
      type: 'text',
      placeholder: 'Search',
      onChange: e => this.setState({ filter: e.target.value })
    })), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.services
    }, void 0, this.getServices())), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.models
    }, void 0, _ref2, this.getModels())));
  }

  getServices() {
    if (!this.props.services || Object.keys(this.props.services).length < 1) return _ref3;
    return Object.entries(this.props.services).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())).filter(service => this.state.filter === '' || service[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1).map((service, index) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service,
      onClick: () => this.setState(prev => ({
        selected: _extends({}, prev.selected, { [service[0]]: !prev.selected[service[0]] })
      }), this.fetchModels.bind(this))
    }, index, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.bar, { [__WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.selected]: this.state.selected[service[0]] })
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.check
    }), _jsx('span', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.name
    }, void 0, service[0]))));
  }

  getModels() {
    if (!this.state.models || Object.keys(this.state.models).length < 1) return _ref4;
    return Object.entries(this.state.models).map((model, index) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.model
    }, index, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.name
    }, void 0, _jsx('h1', {}, void 0, model[1].model_name), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.id
    }, void 0, 'id: ', model[0])), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.info
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.positive
    }, void 0, _ref5, model[1].positive_cases.map((service, index) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service
    }, index, service))), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.negative
    }, void 0, _ref6, !model[1].negative_cases.length ? _ref7 : model[1].negative_cases.map((service, index) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service
    }, index, service))), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.status
    }, void 0, _ref8, model[1].state ? model[1].state.replace('_', ' ') : 'Normal'))));
  }

  fetchModels(attempt = 0) {
    if (attempt === 5) {
      alert("Unable to fetch models");
      return;
    }
    fetch('http://backend.centree.xyz:5000/get_models_under_constraint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again")
      },
      body: JSON.stringify({
        "positive_cases": [],
        "negative_cases": [],
        "algorithm_name": "cnn_neural_net_v1_0"
      })
    }).then(res => {
      if (res.ok) return res.json();else throw new Error("Fetch Error");
    }).then(data => {
      this.setState({ models: data });
    }).catch(() => {
      setTimeout(() => this.fetchModels(attempt + 1), attempt * attempt * 3000);
    });
  }

  fetchServices(attempt = 0) {
    if (attempt === 5) {
      alert("Unable to fetch services");
      return;
    }
    fetch('http://backend.centree.xyz:5000/get_user_services', {
      method: 'GET',
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again")
      }
    }).then(res => {
      if (res.ok) return res.json();else throw new Error("Fetch Error");
    }).then(data => {
      const obj = {};
      if (!(data instanceof Array)) throw new Error("Fetch data not correct format");
      data.forEach(elem => {
        obj[elem] = false;
      });
      this.setState({ selected: obj });
      fetch('http://backend.centree.xyz:5000/get_services_attributes', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ service_names: data })
      }).then(res => res.json()).then(data => {
        this.props.setServices({ services: data });
      });
    }).catch(() => {
      setTimeout(() => this.fetchServices(attempt + 1), attempt * attempt * 3000);
    });
  }
}

const mapState = state => {
  const s = state.toJS();
  return {
    services: s.runtime.services
  };
};

const mapDispatch = dispatch => __WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"]({
  setServices: __WEBPACK_IMPORTED_MODULE_7__actions_runtime__["k" /* setServices */]
}, dispatch);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"](mapState, mapDispatch)(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_10__Model_css___default.a)(Model)));

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(137);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Model.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Model.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._2dUvl{font-size:20px}._2dUvl input{border:none;border-bottom:2px solid rgba(34,34,34,.5);padding-left:3px}._3s0H2{padding-left:20px;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex}._2wBki{margin-bottom:5px}._2wBki ._3kKAc{border-left:2px solid #222;padding-left:3px;margin-left:3px}.ESB5q{font-size:16px;margin-bottom:5px}._3F02P{cursor:pointer;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}._3F02P:hover ._1LlB1{opacity:.3}._3F02P._1yCTW ._1LlB1{opacity:1}._1LlB1{background-image:url(" + __webpack_require__(138) + ");background-size:20px 20px;width:20px;height:20px;opacity:0;margin-top:3px;-webkit-transition:opacity .2s ease;-o-transition:opacity .2s ease;transition:opacity .2s ease}._2C29l{margin-top:10px;font-size:16px}._2C29l h1{margin:0 0 8px;line-height:20px}._2C29l h4{margin:0}._2C29l ._3kKAc{margin-bottom:10px}._3ITtA{margin-left:40px}", ""]);

// exports
exports.locals = {
	"root": "_2dUvl",
	"container": "_3s0H2",
	"service": "_2wBki",
	"name": "_3kKAc",
	"search": "ESB5q",
	"bar": "_3F02P",
	"check": "_1LlB1",
	"selected": "_1yCTW",
	"model": "_2C29l",
	"positive": "kd-84",
	"negative": "_3aNm7",
	"status": "_1w0iw",
	"models": "_3ITtA"
};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23222222;%7D %3C/style%3E %3Cpolygon class='st0' points='15.5,4.5 8.3,11.7 5.6,9 4,10.6 8.3,14.9 17.1,6.1 '/%3E %3C/svg%3E\""

/***/ })
]);;
//# sourceMappingURL=model.js.map