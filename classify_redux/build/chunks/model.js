require("source-map-support").install();
exports.ids = [1];
exports.modules = Array(66).concat([
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(76);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/model/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function action() {
  return {
    chunks: ['model'],
    title: 'ClassUI',
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })
    )
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(78);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Link/Link.js';

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
      _extends({ href: to }, props, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }),
      children
    );
  }
}

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Layout_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.





class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__Layout_css___default.a.content, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        this.props.children
      )
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_5__Layout_css___default.a)(Layout));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Header/Header.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Navigation__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brand, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brandTxt, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'ClassUI'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.adornment, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.yellow, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.orange, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.dgreen, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.lgreen, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.dblue, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Header));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(88);
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(74);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root, role: 'navigation', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        'Classify'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/types', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        'Types'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/model', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        'Model'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        ' | '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/login', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        'Log in'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        'or'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight), to: '/register', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        'Sign up'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(81);
    var insertCss = __webpack_require__(12);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 10px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,iBAAiB;CAClB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 10px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"highlight": "Navigation-highlight-2UNlq",
	"spacer": "Navigation-spacer-3vZVG"
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(83);
    var insertCss = __webpack_require__(12);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Header-root-O9oW9 {\n  background: #222;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.Header-container-qQ2mF {\n  height: 55px;\n}\n.Header-brand-2oS_y {\n  color: #fff;\n  text-decoration: none;\n  font-size: 36px;\n}\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n  font-family: 'Montserrat';\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.Header-adornment-29qSQ {\n  bottom: 0;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n}\n.Header-yellow-x9Qq9 {\n  background: #f2ca70;\n  -moz-flex: 5;\n  -ms-flex: 5;\n  -o-flex: 5;\n  -webkit-box-flex: 5;\n          flex: 5 1 0%;\n}\n.Header-orange-1e3KN{\n  background: #ed9e72;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -o-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1 1 0%;\n}\n.Header-dgreen-CHKk9{\n  background: #9fdd5e;\n  -moz-flex: 14;\n  -ms-flex: 14;\n  -o-flex: 14;\n  -webkit-box-flex: 14;\n          flex: 14 1 0%;\n}\n.Header-lgreen-fwjmE{\n  background: #caed72;\n  -moz-flex: 5;\n  -ms-flex: 5;\n  -o-flex: 5;\n  -webkit-box-flex: 5;\n          flex: 5 1 0%;\n}\n.Header-dblue-2oxlm{\n  background: #4e7fc6;\n  -moz-flex: 10;\n  -ms-flex: 10;\n  -o-flex: 10;\n  -webkit-box-flex: 10;\n          flex: 10 1 0%;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Header/Header.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oBAAoB;UACZ,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oBAAoB;UACZ,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,qBAAqB;UACb,cAAc;CACvB;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oBAAoB;UACZ,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,qBAAqB;UACb,cAAc;CACvB","file":"Header.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n  background: #222;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.container {\n  height: 55px;\n}\n.brand {\n  color: #fff;\n  text-decoration: none;\n  font-size: 36px;\n}\n.brandTxt {\n  margin-left: 10px;\n  font-family: 'Montserrat';\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.adornment {\n  bottom: 0;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n}\n.yellow {\n  background: #f2ca70;\n  -moz-flex: 5;\n  -ms-flex: 5;\n  -o-flex: 5;\n  -webkit-box-flex: 5;\n          flex: 5 1 0%;\n}\n.orange{\n  background: #ed9e72;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -o-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1 1 0%;\n}\n.dgreen{\n  background: #9fdd5e;\n  -moz-flex: 14;\n  -ms-flex: 14;\n  -o-flex: 14;\n  -webkit-box-flex: 14;\n          flex: 14 1 0%;\n}\n.lgreen{\n  background: #caed72;\n  -moz-flex: 5;\n  -ms-flex: 5;\n  -o-flex: 5;\n  -webkit-box-flex: 5;\n          flex: 5 1 0%;\n}\n.dblue{\n  background: #4e7fc6;\n  -moz-flex: 10;\n  -ms-flex: 10;\n  -o-flex: 10;\n  -webkit-box-flex: 10;\n          flex: 10 1 0%;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Header-root-O9oW9",
	"container": "Header-container-qQ2mF",
	"brand": "Header-brand-2oS_y",
	"brandTxt": "Header-brandTxt-230aH",
	"adornment": "Header-adornment-29qSQ",
	"yellow": "Header-yellow-x9Qq9",
	"orange": "Header-orange-1e3KN",
	"dgreen": "Header-dgreen-CHKk9",
	"lgreen": "Header-lgreen-fwjmE",
	"dblue": "Header-dblue-2oxlm"
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(85);
    var insertCss = __webpack_require__(12);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(87);
    var insertCss = __webpack_require__(12);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n.Layout-content-ciN7r {\n  margin-top: 60px;\n  font-weight: 400;\n}\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\nbody {\n  margin: 0;\n  text-transform: uppercase;\n}\na {\n  color: #0074c2;\n}\nh2 {\n  font-weight: 400;\n  margin: 0;\n}\nh3 {\n  font-weight: 400;\n  color: rgba(34, 34, 34, 0.7);\n  margin: 0;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Layout/Layout.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;;;;GAIG;AACH;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,0DAA0D;EAC1D,mBAAmB,CAAC,WAAW;CAChC;AACD;EACE,UAAU;EACV,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,UAAU;CACX;AACD;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,UAAU;CACX;AACD;;;;;;GAMG;AACH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;;GAEG;AACH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;AACD;;;;GAIG;AACH;;;;;;EAME,uBAAuB;CACxB;AACD;;GAEG;AACH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;AACD;;GAEG;AACH;EACE,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;AACD;;;;gFAIgF;AAChF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n.content {\n  margin-top: 60px;\n  font-weight: 400;\n}\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\nbody {\n  margin: 0;\n  text-transform: uppercase;\n}\na {\n  color: #0074c2;\n}\nh2 {\n  font-weight: 400;\n  margin: 0;\n}\nh3 {\n  font-weight: 400;\n  color: rgba(34, 34, 34, 0.7);\n  margin: 0;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"content": "Layout-content-ciN7r"
};

/***/ }),
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdown_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Dropdown/Dropdown.js';




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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.alt]: this.props.alt }), __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.select,
            onClick: () => {
              clearTimeout(this.timeout);
              this.setState({ show_options: true });
            },
            onMouseLeave: () => {
              if (!this.state.options_hover) this.timeout = setTimeout(() => {
                this.setState({ show_options: false });
              }, 250);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.selected, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            this.props.selected ? this.props.selected : this.props.options ? this.props.options[0] : undefined
          ),
          show_options && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.arrow, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          })
        ),
        show_options && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.options),
            style: { height: this.state.show_options ? (this.props.options.length + 1) * 22 + 'px' : 0 /*TODO CORRECT VALUE*/ },
            onMouseLeave: this.optionsMouseLeave.bind(this),
            onMouseEnter: () => {
              clearTimeout(this.timeout);
              this.setState({ options_hover: true });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          this.getOptions()
        )
      )
    );
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
    return arr.map((option, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: index, className: __WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a.option, style: index === 0 ? { opacity: 0.7 } : undefined, onClick: () => {
          this.onSelect(option);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      },
      option
    ));
  }

  onSelect(value) {
    this.setState({ show_options: false });
    this.setState({ options_hover: false });
    this.props.onSelect(value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Dropdown_css___default.a)(Dropdown));

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd-hover%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23222;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel-hover%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(95);
    var insertCss = __webpack_require__(12);

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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Dropdown-root-3t05Z {\n\tline-height: 21px;\n\tmax-width: 100%\n}\n.Dropdown-root-3t05Z.Dropdown-alt-TnCOF .Dropdown-arrow-2oud0:after {\n\t\t\tborder-color: #fff transparent transparent transparent\n}\n.Dropdown-root-3t05Z.Dropdown-alt-TnCOF .Dropdown-options-2kU2_ {\n\t\t\tbackground: #fff;\n\t\t\tcolor: #222;\n}\n.Dropdown-container-m44Tk {\n\tcursor: pointer;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\tmax-width: 100%;\n}\n.Dropdown-arrow-2oud0 {\n\tposition: relative;\n\twidth: 10px\n}\n.Dropdown-arrow-2oud0:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: calc(50% - 1px);\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: #555 transparent transparent transparent;\n}\n.Dropdown-options-2kU2_ {\n\tmax-width: 100%;\n\toverflow: hidden;\n\tposition: absolute;\n\tbackground: #ddd;\n\theight: 0;\n\t-webkit-transition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\t-o-transition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\ttransition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\tz-index: 50;\n}\n.Dropdown-option-8Ldk_ {\n\tpadding: 1px 15px 0 5px\n}\n.Dropdown-option-8Ldk_:hover {\n  background: rgb(196, 196, 196)\n}\n.Dropdown-select-1rk3y {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.Dropdown-selected-T7us1 { \n\tmax-width: calc(100% - 15px);\n\tmargin: 0 5px;\n\tpadding-top: 1px;\n\twhite-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Dropdown/Dropdown.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,kBAAkB;CAClB,eAAe;CACf;AACD;GACG,sDAAsD;CACxD;AACD;GACG,iBAAiB;GACjB,YAAY;CACd;AACD;CACC,gBAAgB;CAChB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,0BAA0B;CAC1B,uBAAuB;CACvB,sBAAsB;CACtB,qBAAqB;CACrB,kBAAkB;CAClB,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB,WAAW;CACX;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,UAAU;EACV,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;EACzC,oBAAoB;EACpB,4BAA4B;EAC5B,uDAAuD;CACxD;AACD;CACC,gBAAgB;CAChB,iBAAiB;CACjB,mBAAmB;CACnB,iBAAiB;CACjB,UAAU;CACV,8DAA8D;CAC9D,yDAAyD;CACzD,sDAAsD;CACtD,YAAY;CACZ;AACD;CACC,uBAAuB;CACvB;AACD;EACE,8BAA8B;CAC/B;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;CACC,6BAA6B;CAC7B,cAAc;CACd,iBAAiB;CACjB,oBAAoB;EACnB,iBAAiB;EACjB,2BAA2B;KACxB,wBAAwB;CAC5B","file":"Dropdown.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tline-height: 21px;\n\tmax-width: 100%\n}\n.root.alt .arrow:after {\n\t\t\tborder-color: #fff transparent transparent transparent\n}\n.root.alt .options {\n\t\t\tbackground: #fff;\n\t\t\tcolor: #222;\n}\n.container {\n\tcursor: pointer;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\tmax-width: 100%;\n}\n.arrow {\n\tposition: relative;\n\twidth: 10px\n}\n.arrow:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: calc(50% - 1px);\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: #555 transparent transparent transparent;\n}\n.options {\n\tmax-width: 100%;\n\toverflow: hidden;\n\tposition: absolute;\n\tbackground: #ddd;\n\theight: 0;\n\t-webkit-transition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\t-o-transition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\ttransition: height 0.3s cubic-bezier(.46,.04,.07,.93);\n\tz-index: 50;\n}\n.option {\n\tpadding: 1px 15px 0 5px\n}\n.option:hover {\n  background: rgb(196, 196, 196)\n}\n.select {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.selected { \n\tmax-width: calc(100% - 15px);\n\tmargin: 0 5px;\n\tpadding-top: 1px;\n\twhite-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Dropdown-root-3t05Z",
	"alt": "Dropdown-alt-TnCOF",
	"arrow": "Dropdown-arrow-2oud0",
	"options": "Dropdown-options-2kU2_",
	"container": "Dropdown-container-m44Tk",
	"option": "Dropdown-option-8Ldk_",
	"select": "Dropdown-select-1rk3y",
	"selected": "Dropdown-selected-T7us1"
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit-hover%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_format_duration__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_format_duration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_format_duration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Dropdown__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_DataWindow__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Entry_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Entry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Entry_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/Entry/Entry.js';












class Entry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false
		};
	}
	// {this.props.adder && <div className={classNames(styles.button, styles.spacer)} />}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{
				className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.adder]: this.props.adder }),
				onMouseEnter: this.props.onMouseEnter,
				onMouseLeave: this.props.onMouseLeave, __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 27
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.bar, __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.buttons, __source: {
								fileName: _jsxFileName,
								lineNumber: 29
							},
							__self: this
						},
						!this.props.adder && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.del), onClick: this.props.onDelete, __source: {
								fileName: _jsxFileName,
								lineNumber: 30
							},
							__self: this
						}),
						!this.props.adder && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.edit, { [__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.done]: this.props.editing }),
							onClick: () => {
								this.props.onEdit(this.props.editing);
							}, __source: {
								fileName: _jsxFileName,
								lineNumber: 31
							},
							__self: this
						}),
						this.props.adder && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.button, __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.add), onClick: this.props.onAdd, __source: {
								fileName: _jsxFileName,
								lineNumber: 34
							},
							__self: this
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.info, __source: {
								fileName: _jsxFileName,
								lineNumber: 36
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{
								className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.service, __source: {
									fileName: _jsxFileName,
									lineNumber: 37
								},
								__self: this
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Dropdown__["a" /* default */], {
								options: this.props.services ? Object.keys(this.props.services) : [],
								selected: this.props.service,
								onSelect: value => {
									if (value === this.props.service) return;
									this.props.editEntry(this.props.entry_id, 'service', value);
									this.props.editEntry(this.props.entry_id, 'attributes', {});
								}, __source: {
									fileName: _jsxFileName,
									lineNumber: 39
								},
								__self: this
							})
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.spacer, __source: {
								fileName: _jsxFileName,
								lineNumber: 48
							},
							__self: this
						}),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.time, __source: {
									fileName: _jsxFileName,
									lineNumber: 49
								},
								__self: this
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'span',
								{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.start, __source: {
										fileName: _jsxFileName,
										lineNumber: 50
									},
									__self: this
								},
								__WEBPACK_IMPORTED_MODULE_2_format_duration___default.a(this.props.start || 0)
							),
							'-',
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'span',
								{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.end, __source: {
										fileName: _jsxFileName,
										lineNumber: 52
									},
									__self: this
								},
								__WEBPACK_IMPORTED_MODULE_2_format_duration___default.a(this.props.end || 0)
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: __WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a.data, __source: {
							fileName: _jsxFileName,
							lineNumber: 56
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components_DataWindow__["a" /* default */]
					// alt={this.props.adder}
					, { open: this.state.open || this.props.adder,
						attributes: this.props.attributes,
						services: this.props.services,
						service: this.props.service,
						editAttribute: (attribute, value) => {
							this.props.editAttribute(this.props.entry_id, attribute, value);
						}, __source: {
							fileName: _jsxFileName,
							lineNumber: 57
						},
						__self: this
					})
				)
			)
		);
	}

	// <Dropdown 
	// 	options={this.props.services ? Object.keys(this.props.services) : []}
	// 	selected={this.props.service}
	// 	onSelect={this.setEntryService.bind(this)} />

}
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_7__Entry_css___default.a, __WEBPACK_IMPORTED_MODULE_8_react_select_dist_react_select_css___default.a)(Entry));

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Dropdown__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataWindow_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/DataWindow/DataWindow.js';








class DataWindow extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.alt]: this.props.alt, [__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.open]: this.props.open }), __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        this.getAttributes()
      )
    );
  }

  getAttributes() {
    if (!this.props.service || !this.props.services || Object.keys(this.props.services[this.props.service]).length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      'No Attributes'
    );
    const attributes = Object.entries(this.props.services[this.props.service]).map((attribute, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tr',
      { key: index, className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.attribute, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        { className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        attribute[0]
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        { className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.value, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        this.parseAttribute(attribute[0], attribute[1], this.props.attributes[attribute[0]])
      )
    ));
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'table',
      { className: __WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a.attributes, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tbody',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        },
        attributes
      )
    );
  }

  parseAttribute(attribute, possible, value) {
    if (possible === 'NUMERIC') return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', value: value, onChange: e => {
        this.props.editAttribute(attribute, e.target.value);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    });
    if (possible instanceof Array) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Dropdown__["a" /* default */], {
      options: possible,
      selected: value,
      onSelect: value => {
        this.props.editAttribute(attribute, value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__DataWindow_css___default.a)(DataWindow));

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(101);
    var insertCss = __webpack_require__(12);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.DataWindow-root-21w-g {\n\t/* border-left: 2px var(--black) solid; */\n\tpadding-left: 5px;\n\tfont-weight: 700;\n\t/* height: 0; */\n\toverflow: hidden\n}\n.DataWindow-root-21w-g.DataWindow-alt-3kvb6 h3 {\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 700;\n}\n.DataWindow-root-21w-g.DataWindow-open-LfYSd {\n  height: auto;\n}\n.DataWindow-container-lYdn- {\n\t\n}\n.DataWindow-value-2NK_q {\n\tfont-weight: 400;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/DataWindow/DataWindow.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,0CAA0C;CAC1C,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB;AACD;GACG,YAAY;GACZ,iBAAiB;CACnB;AACD;EACE,aAAa;CACd;AACD;;CAEC;AACD;CACC,iBAAiB;CACjB","file":"DataWindow.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\t/* border-left: 2px var(--black) solid; */\n\tpadding-left: 5px;\n\tfont-weight: 700;\n\t/* height: 0; */\n\toverflow: hidden\n}\n.root.alt h3 {\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 700;\n}\n.root.open {\n  height: auto;\n}\n.container {\n\t\n}\n.value {\n\tfont-weight: 400;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "DataWindow-root-21w-g",
	"alt": "DataWindow-alt-3kvb6",
	"open": "DataWindow-open-LfYSd",
	"container": "DataWindow-container-lYdn-",
	"value": "DataWindow-value-2NK_q"
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(103);
    var insertCss = __webpack_require__(12);

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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Entry-root-hCpgz.Entry-adder-2Ql0N .Entry-data-XmVgs {\n\t\t\tmargin-left: 24px;\n}\n.Entry-container-2W1SW {\n}\n.Entry-bar-SLa6r {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.Entry-info-17KaP {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tborder-bottom: solid #222 2px;\n}\n.Entry-spacer-3Dh-x {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n}\n.Entry-service-qsLSN {\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n}\n.Entry-service-qsLSN .Entry-Select-control-2N_P1 {\n\t\tdisplay: inline-table;\n\t\tbackground: #f00;\n\t}\n.Entry-buttons-10D0J {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.Entry-buttons-10D0J .Entry-spacer-3Dh-x {\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\topacity: 0;\n\t}\n.Entry-button-1YpKQ {\n\tbackground-size: 24px 24px;\n\t/* border-radius: calc(calc(2px + var(--entry-height)) / 5); */\n\tcursor: pointer;\n\twidth: 24px;\n\theight: 24px\n}\n.Entry-button-1YpKQ:hover {\n  background: #222;\n}\n.Entry-button-1YpKQ.Entry-add-8_HIi {\n  background-image: url(" + __webpack_require__(90) + ");\n}\n.Entry-button-1YpKQ.Entry-add-8_HIi:hover {\n  background-image: url(" + __webpack_require__(91) + ");\n}\n.Entry-button-1YpKQ.Entry-del-2b3yA {\n  background-image: url(" + __webpack_require__(92) + ");\n}\n.Entry-button-1YpKQ.Entry-del-2b3yA:hover {\n  background-image: url(" + __webpack_require__(93) + ");\n}\n.Entry-button-1YpKQ.Entry-edit-2csUf {\n  background-image: url(" + __webpack_require__(96) + ");\n}\n.Entry-button-1YpKQ.Entry-edit-2csUf:hover {\n  background-image: url(" + __webpack_require__(97) + ");\n}\n.Entry-button-1YpKQ.Entry-done-22sVt {\n  background-image: url(" + __webpack_require__(104) + ");\n}\n.Entry-button-1YpKQ.Entry-done-22sVt:hover {\n  background-image: url(" + __webpack_require__(105) + ");\n}\n.Entry-time-2WX7d {\n\tpadding: 1px 5px 0 0 ;\n\tline-height: 21px;\n}\n.Entry-data-XmVgs {\n\tmargin-left: 48px;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/Entry/Entry.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;GACG,kBAAkB;CACpB;AACD;CACC;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,8BAA8B;CAC9B;AACD;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB;AACD;CACC,4BAA4B;CAC5B,4BAA4B;CAC5B,qBAAqB;CACrB;AACD;EACE,sBAAsB;EACtB,iBAAiB;EACjB;AACF;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX;AACF;CACC,2BAA2B;CAC3B,+DAA+D;CAC/D,gBAAgB;CAChB,YAAY;CACZ,YAAY;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gDAAiD;CAClD;AACD;EACE,gDAAuD;CACxD;AACD;EACE,gDAAiD;CAClD;AACD;EACE,gDAAuD;CACxD;AACD;EACE,gDAAkD;CACnD;AACD;EACE,gDAAwD;CACzD;AACD;EACE,gDAAkD;CACnD;AACD;EACE,gDAAwD;CACzD;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,kBAAkB;CAClB","file":"Entry.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root.adder .data {\n\t\t\tmargin-left: 24px;\n}\n.container {\n}\n.bar {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.info {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tborder-bottom: solid #222 2px;\n}\n.spacer {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n}\n.service {\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n}\n.service .Select-control {\n\t\tdisplay: inline-table;\n\t\tbackground: #f00;\n\t}\n.buttons {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.buttons .spacer {\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\topacity: 0;\n\t}\n.button {\n\tbackground-size: 24px 24px;\n\t/* border-radius: calc(calc(2px + var(--entry-height)) / 5); */\n\tcursor: pointer;\n\twidth: 24px;\n\theight: 24px\n}\n.button:hover {\n  background: #222;\n}\n.button.add {\n  background-image: url('../../resources/add.svg');\n}\n.button.add:hover {\n  background-image: url('../../resources/add-hover.svg');\n}\n.button.del {\n  background-image: url('../../resources/del.svg');\n}\n.button.del:hover {\n  background-image: url('../../resources/del-hover.svg');\n}\n.button.edit {\n  background-image: url('../../resources/edit.svg');\n}\n.button.edit:hover {\n  background-image: url('../../resources/edit-hover.svg');\n}\n.button.done {\n  background-image: url('../../resources/done.svg');\n}\n.button.done:hover {\n  background-image: url('../../resources/done-hover.svg');\n}\n.time {\n\tpadding: 1px 5px 0 0 ;\n\tline-height: 21px;\n}\n.data {\n\tmargin-left: 48px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Entry-root-hCpgz",
	"adder": "Entry-adder-2Ql0N",
	"data": "Entry-data-XmVgs",
	"container": "Entry-container-2W1SW",
	"bar": "Entry-bar-SLa6r",
	"info": "Entry-info-17KaP",
	"spacer": "Entry-spacer-3Dh-x",
	"service": "Entry-service-qsLSN",
	"Select-control": "Entry-Select-control-2N_P1",
	"buttons": "Entry-buttons-10D0J",
	"button": "Entry-button-1YpKQ",
	"add": "Entry-add-8_HIi",
	"del": "Entry-del-2b3yA",
	"edit": "Entry-edit-2csUf",
	"done": "Entry-done-22sVt",
	"time": "Entry-time-2WX7d"
};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eedit%3C/title%3E %3Cpolyline class='st0' points='15.5,6.9 8.2,14.2 4.6,10.6 '/%3E %3C/svg%3E\""

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eedit%3C/title%3E %3Cpolyline class='st0' points='15.5,6.9 8.2,14.2 4.5,10.6 '/%3E %3C/svg%3E\""

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(107);
    var insertCss = __webpack_require__(12);

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n}\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 14px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/node_modules/react-select/dist/react-select.css"],"names":[],"mappings":"AAAA;;;;;;EAME;AACF;EACE,mBAAmB;CACpB;AACD;;;;EAIE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,uBAAuB;EACvB,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,0BAA0B;EAC1B,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,gDAAgD;UACxC,wCAAwC;CACjD;AACD;EACE,cAAc;CACf;AACD;EACE,aAAa;CACd;AACD;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,iBAAiB;EACjB,mCAAmC;CACpC;AACD;EACE,UAAU;EACV,2CAA2C;EAC3C,wBAAwB;CACzB;AACD;EACE,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,2FAA2F;UACnF,mFAAmF;CAC5F;AACD;;EAEE,UAAU;EACV,YAAY;EACZ,QAAQ;EACR,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,iBAAiB;EACjB,2BAA2B;KACxB,wBAAwB;EAC3B,oBAAoB;CACrB;AACD;;EAEE,YAAY;CACb;AACD;;EAEE,gBAAgB;EAChB,sBAAsB;CACvB;AACD;;;;EAIE,eAAe;EACf,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,yBAAyB;UACjB,iBAAiB;EACzB,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,4BAA4B;EAC5B,oBAAoB;EACpB,4BAA4B;EAC5B,yBAAyB;CAC1B;AACD;EACE,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,+DAA+D;EAC/D,uDAAuD;EACvD,YAAY;EACZ,aAAa;EACb,+BAA+B;UACvB,uBAAuB;EAC/B,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,iDAAiD;EACjD,yCAAyC;EACzC,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,2CAA2C;EAC3C,oBAAoB;EACpB,4BAA4B;EAC5B,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,mBAAmB;CACpB;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;CACb;AACD;EACE;IACE,WAAW;GACZ;EACD;IACE,WAAW;GACZ;CACF;AACD;EACE;IACE,WAAW;GACZ;EACD;IACE,WAAW;GACZ;CACF;AACD;EACE,gCAAgC;EAChC,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,gDAAgD;UACxC,wCAAwC;EAChD,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,kCAAkC;CACnC;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gCAAgC;EAChC,+BAA+B;CAChC;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;EAC1C,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;EAC1C,YAAY;CACb;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;EAC1C,mBAAmB;EACnB,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;EAC1C,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;;EAEE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,gCAAgC;EAChC,6BAA6B;EAC7B,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;CACvB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,4BAA4B;EAC5B,gCAAgC;EAChC,6BAA6B;EAC7B,gDAAgD;EAChD,qBAAqB;CACtB;AACD;;EAEE,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;EAC1C,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,0CAA0C;CAC3C;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,gCAAgC;CACjC;AACD;;;EAGE,0BAA0B;CAC3B;AACD;EACE;IACE,iCAAiC;YACzB,yBAAyB;GAClC;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF","file":"react-select.css","sourcesContent":["/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n}\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 14px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/EditDataWindow/EditDataWindow.js';



// Import Components



class EditDataWindow extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.root, __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 12
					},
					__self: this
				},
				this.getAttributes()
			)
		);
	}

	componentDidMount() {
		this.props.onRef(this);
	}

	componentWillUnnount() {
		this.props.onRef(undefined);
	}

	getAttributes() {
		if (!this.props.attributes || Object.keys(this.props.attributes).length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.alert, __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				},
				__self: this
			},
			'No Attributes'
		);
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'table',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'tbody',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 30
					},
					__self: this
				},
				Object.entries(this.props.attributes).map(entry => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tr',
					{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.attribute, key: entry[0], __source: {
							fileName: _jsxFileName,
							lineNumber: 31
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.name, __source: {
								fileName: _jsxFileName,
								lineNumber: 32
							},
							__self: this
						},
						entry[0]
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{ className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.options, __source: {
								fileName: _jsxFileName,
								lineNumber: 33
							},
							__self: this
						},
						this.parseAttribute(entry[1])
					)
				))
			)
		);
	}

	parseAttribute(attr) {
		if (attr instanceof Array) {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'ul',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 40
					},
					__self: this
				},
				attr.map(a => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'li',
					{ key: a, className: __WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a.arrayitem, __source: {
							fileName: _jsxFileName,
							lineNumber: 40
						},
						__self: this
					},
					a
				))
			);
		} else if (attr === 'NUMERIC') {
			return 'Numeric';
		} else if (attr === 'STRING') {
			return 'String';
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__EditDataWindow_css___default.a)(EditDataWindow));

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(110);
    var insertCss = __webpack_require__(12);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.EditDataWindow-root-2-Ti6 ul {\n\t\t/* background: #e32; */\n\t\tlist-style-type: none;\n\t\tdisplay: inline-block;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n.EditDataWindow-root-2-Ti6 table {\n\t\tpadding-left: 5px;\n\t}\n.EditDataWindow-attribute-gR2o0 {\n\t/* background: #34c; */\n\tfont-size: 16px;\n}\n.EditDataWindow-name-UrOaQ {\n\t/* background: #5e6; */\n\ttext-align: right;\n\tvertical-align: top;\n}\n.EditDataWindow-options-Dfs1g {\n\t/* background: #c2c; */\n\tfont-weight: 400;\n\tposition: relative;\n\ttext-align: left;\n\tpadding-left: 5px;\n}\n.EditDataWindow-alert-2Q4L6 {\n\tfont-weight: 400;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/EditDataWindow/EditDataWindow.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;EACX,UAAU;EACV;AACF;EACE,kBAAkB;EAClB;AACF;CACC,uBAAuB;CACvB,gBAAgB;CAChB;AACD;CACC,uBAAuB;CACvB,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,uBAAuB;CACvB,iBAAiB;CACjB,mBAAmB;CACnB,iBAAiB;CACjB,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB","file":"EditDataWindow.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root ul {\n\t\t/* background: #e32; */\n\t\tlist-style-type: none;\n\t\tdisplay: inline-block;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n.root table {\n\t\tpadding-left: 5px;\n\t}\n.attribute {\n\t/* background: #34c; */\n\tfont-size: 16px;\n}\n.name {\n\t/* background: #5e6; */\n\ttext-align: right;\n\tvertical-align: top;\n}\n.options {\n\t/* background: #c2c; */\n\tfont-weight: 400;\n\tposition: relative;\n\ttext-align: left;\n\tpadding-left: 5px;\n}\n.alert {\n\tfont-weight: 400;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "EditDataWindow-root-2-Ti6",
	"attribute": "EditDataWindow-attribute-gR2o0",
	"name": "EditDataWindow-name-UrOaQ",
	"options": "EditDataWindow-options-Dfs1g",
	"alert": "EditDataWindow-alert-2Q4L6"
};

/***/ }),
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
/* 135 */,
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_runtime__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_Classify_Entry__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_Service_EditDataWindow__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Model_css__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Model_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Model_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/model/model.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

















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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service_search, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            'Select Services'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.nav, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.search, type: 'text', placeholder: 'Search', onChange: e => this.setState({ filter: e.target.value }), __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.services, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            this.getServices()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.models, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            },
            'Models'
          ),
          this.getModels()
        )
      )
    );
  }

  getServices() {
    if (!this.props.services || Object.keys(this.props.services).length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      },
      'No Services'
    );
    return Object.entries(this.props.services).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())).filter(service => this.state.filter === '' || service[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1).map((service, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: index, className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service, onClick: () => this.setState(prev => ({
          selected: _extends({}, prev.selected, { [service[0]]: !prev.selected[service[0]] })
        }), this.fetchModels.bind(this)), __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.bar, { [__WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.selected]: this.state.selected[service[0]] }), __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.check, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          },
          service[0]
        )
      )
    ));
  }

  getModels() {
    if (!this.state.models || Object.keys(this.state.models).length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      },
      'No Models'
    );
    return Object.entries(this.state.models).map((model, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: index, className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.model, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          },
          model[1].model_name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          },
          'id: ',
          model[0]
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.info, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.positive, __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            },
            'Positive Cases'
          ),
          model[1].positive_cases.map((service, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index, className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service, __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            },
            service
          ))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.negative, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            },
            'Negative Cases'
          ),
          !model[1].negative_cases.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            },
            'No Negative Cases'
          ) : model[1].negative_cases.map((service, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index, className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.service, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            },
            service
          ))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Model_css___default.a.status, __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            },
            'Status'
          ),
          model[1].state ? model[1].state.replace('_', ' ') : 'Normal'
        )
      )
    ));
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(138);
    var insertCss = __webpack_require__(12);

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Model-root-2hPYx {\n\tfont-size: 20px;\n}\n.Model-root-2hPYx input {\n\t\tborder: none;\n\t\tborder-bottom: 2px solid rgba(34, 34, 34, 0.5);\n\t\tpadding-left: 3px;\n\t}\n.Model-container-3prL9 {\n\tpadding-left: 20px;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.Model-service-3PqPQ {\n\tmargin-bottom: 5px;\n}\n.Model-service-3PqPQ .Model-name-KJaHm {\n\t\tborder-left: 2px solid #222;\n\t\tpadding-left: 3px;\n\t\tmargin-left: 3px;\n\t}\n.Model-search-1Sdrj {\n\tfont-size: 16px;\n\tmargin-bottom: 5px;\n}\n.Model-bar-2vNhv {\n\tcursor: pointer;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none\n}\n.Model-bar-2vNhv:hover .Model-check-2K5uv {\n  opacity: .3;\n}\n.Model-bar-2vNhv.Model-selected-ILWK5 .Model-check-2K5uv {\n  opacity: 1;\n}\n.Model-check-2K5uv {\n\tbackground-image: url(" + __webpack_require__(139) + ");\n\tbackground-size: 20px 20px;\n\twidth: 20px;\n\theight: 20px;\n\topacity: 0;\n\tmargin-top: 3px;\n\t-webkit-transition: opacity .2s ease;\n\t-o-transition: opacity .2s ease;\n\ttransition: opacity .2s ease;\n}\n.Model-model-2fjMl {\n\tmargin-top: 10px;\n\tfont-size: 16px;\n}\n.Model-model-2fjMl h1 {\n\t\tmargin: 0 0 8px 0;\n\t\tline-height: 20px;\n\t}\n.Model-model-2fjMl h4 {\n\t\tmargin: 0;\n\t}\n.Model-model-2fjMl .Model-name-KJaHm {\n\t\tmargin-bottom: 10px;\n\t}\n.Model-model-2fjMl .Model-positive-2qinC {\n\n\t}\n.Model-model-2fjMl .Model-negative-1YfrQ {\n\n\t}\n.Model-model-2fjMl .Model-status-2PMh- {\n\n\t}\n.Model-models-2VNyF {\n\tmargin-left: 40px\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/model/Model.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,gBAAgB;CAChB;AACD;EACE,aAAa;EACb,+CAA+C;EAC/C,kBAAkB;EAClB;AACF;CACC,mBAAmB;CACnB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;CACC,mBAAmB;CACnB;AACD;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,iBAAiB;EACjB;AACF;CACC,gBAAgB;CAChB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,0BAA0B;CAC1B,uBAAuB;CACvB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;CACC,gDAAiE;CACjE,2BAA2B;CAC3B,YAAY;CACZ,aAAa;CACb,WAAW;CACX,gBAAgB;CAChB,qCAAqC;CACrC,gCAAgC;CAChC,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,gBAAgB;CAChB;AACD;EACE,kBAAkB;EAClB,kBAAkB;EAClB;AACF;EACE,UAAU;EACV;AACF;EACE,oBAAoB;EACpB;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;CACC,iBAAiB;CACjB","file":"Model.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tfont-size: 20px;\n}\n.root input {\n\t\tborder: none;\n\t\tborder-bottom: 2px solid rgba(34, 34, 34, 0.5);\n\t\tpadding-left: 3px;\n\t}\n.container {\n\tpadding-left: 20px;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.service {\n\tmargin-bottom: 5px;\n}\n.service .name {\n\t\tborder-left: 2px solid #222;\n\t\tpadding-left: 3px;\n\t\tmargin-left: 3px;\n\t}\n.search {\n\tfont-size: 16px;\n\tmargin-bottom: 5px;\n}\n.bar {\n\tcursor: pointer;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none\n}\n.bar:hover .check {\n  opacity: .3;\n}\n.bar.selected .check {\n  opacity: 1;\n}\n.check {\n\tbackground-image: url('../../components/resources/selected.svg');\n\tbackground-size: 20px 20px;\n\twidth: 20px;\n\theight: 20px;\n\topacity: 0;\n\tmargin-top: 3px;\n\t-webkit-transition: opacity .2s ease;\n\t-o-transition: opacity .2s ease;\n\ttransition: opacity .2s ease;\n}\n.model {\n\tmargin-top: 10px;\n\tfont-size: 16px;\n}\n.model h1 {\n\t\tmargin: 0 0 8px 0;\n\t\tline-height: 20px;\n\t}\n.model h4 {\n\t\tmargin: 0;\n\t}\n.model .name {\n\t\tmargin-bottom: 10px;\n\t}\n.model .positive {\n\n\t}\n.model .negative {\n\n\t}\n.model .status {\n\n\t}\n.models {\n\tmargin-left: 40px\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Model-root-2hPYx",
	"container": "Model-container-3prL9",
	"service": "Model-service-3PqPQ",
	"name": "Model-name-KJaHm",
	"search": "Model-search-1Sdrj",
	"bar": "Model-bar-2vNhv",
	"check": "Model-check-2K5uv",
	"selected": "Model-selected-ILWK5",
	"model": "Model-model-2fjMl",
	"positive": "Model-positive-2qinC",
	"negative": "Model-negative-1YfrQ",
	"status": "Model-status-2PMh-",
	"models": "Model-models-2VNyF"
};

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23222222;%7D %3C/style%3E %3Cpolygon class='st0' points='15.5,4.5 8.3,11.7 5.6,9 4,10.6 8.3,14.9 17.1,6.1 '/%3E %3C/svg%3E\""

/***/ })
]);;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL21vZGVsLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9yb3V0ZXMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcz9mMjBhIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzPzM5NWMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanM/MzY0ZSIsIndlYnBhY2s6Ly8vc3JjL2hpc3RvcnkuanM/NmQxMCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzPzY0NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz81NjUzKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2QxMzEqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzM0OTkqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzgxZGEqIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/OTE4OSoiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz81YzlhKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz80NDg3KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz84OGFmKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uanM/ZGFlOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvYWRkLnN2Zz80YmVmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9hZGQtaG92ZXIuc3ZnP2E5MTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2RlbC5zdmc/NmZiZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZGVsLWhvdmVyLnN2Zz80OTUyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLmNzcz81ZDRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLmNzcz81ZGRmKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZWRpdC5zdmc/MDQ5NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmc/YjUxZCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuanM/ODg1MCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRGF0YVdpbmRvdy9EYXRhV2luZG93LmpzP2JlYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0YVdpbmRvdy9EYXRhV2luZG93LmNzcz9hMzdjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RhdGFXaW5kb3cvRGF0YVdpbmRvdy5jc3M/NDM2ZioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuY3NzPzhkNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuY3NzP2FiNjMqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kb25lLnN2Zz85Yjg2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kb25lLWhvdmVyLnN2Zz8xMzQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzPzRkY2QqIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzPzg0ZTUiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuY3NzPzgwYWIiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9yb3V0ZXMvbW9kZWwvbW9kZWwuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9yb3V0ZXMvbW9kZWwvTW9kZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbW9kZWwvTW9kZWwuY3NzPzM0M2UiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9zZWxlY3RlZC5zdmciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsnbW9kZWwnXSxcbiAgICB0aXRsZTogJ0NsYXNzVUknLFxuICAgIGNvbXBvbmVudDogPExheW91dD48TW9kZWwvPjwvTGF5b3V0PixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvbW9kZWwvaW5kZXguanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IG51bGwsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoaXN0b3J5LnB1c2godGhpcy5wcm9wcy50byk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPGEgaHJlZj17dG99IHsuLi5wcm9wc30gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e2NoaWxkcmVufTwvYT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG4vLyBleHRlcm5hbC1nbG9iYWwgc3R5bGVzIG11c3QgYmUgaW1wb3J0ZWQgaW4geW91ciBKUy5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcblxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0gdG89XCIvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZFR4dH0+Q2xhc3NVSTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG9ybm1lbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy55ZWxsb3d9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmFuZ2V9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZ3JlZW59PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZ3JlZW59PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYmx1ZX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbi8vIE5hdmlnYXRpb24gbWFuYWdlciwgZS5nLiBoaXN0b3J5LnB1c2goJy9ob21lJylcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tamFja3Nvbi9oaXN0b3J5XG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5CUk9XU0VSICYmIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hpc3RvcnkuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fSByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvXCI+Q2xhc3NpZnk8L0xpbms+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi90eXBlc1wiPlR5cGVzPC9MaW5rPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbW9kZWxcIj5Nb2RlbDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+IHwgPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbG9naW5cIj5Mb2cgaW48L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9Pm9yPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e2N4KHMubGluaywgcy5oaWdobGlnaHQpfSB0bz1cIi9yZWdpc3RlclwiPlNpZ24gdXA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTmF2aWdhdGlvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9OYXZpZ2F0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL05hdmlnYXRpb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUsXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTphY3RpdmUsXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWhpZ2hsaWdodC0yVU5scSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWhpZ2hsaWdodC0yVU5scTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5OYXZpZ2F0aW9uLXNwYWNlci0zdlpWRyB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDs7O0VBR0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQ1wiLFwiZmlsZVwiOlwiTmF2aWdhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4ucm9vdCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjEyNWVtOyAvKiB+MThweCAqL1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oaWdobGlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbi1yb290LTJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb24tbGluay1OdGwzNVwiLFxuXHRcImhpZ2hsaWdodFwiOiBcIk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxXCIsXG5cdFwic3BhY2VyXCI6IFwiTmF2aWdhdGlvbi1zcGFjZXItM3ZaVkdcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hlYWRlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hlYWRlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5IZWFkZXItcm9vdC1POW9XOSB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLkhlYWRlci1jb250YWluZXItcVEybUYge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kLTJvU195IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kVHh0LTIzMGFIIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uSGVhZGVyLWFkb3JubWVudC0yOXFTUSB7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5IZWFkZXIteWVsbG93LXg5UXE5IHtcXG4gIGJhY2tncm91bmQ6ICNmMmNhNzA7XFxuICAtbW96LWZsZXg6IDU7XFxuICAtbXMtZmxleDogNTtcXG4gIC1vLWZsZXg6IDU7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgICAgICBmbGV4OiA1IDEgMCU7XFxufVxcbi5IZWFkZXItb3JhbmdlLTFlM0tOe1xcbiAgYmFja2dyb3VuZDogI2VkOWU3MjtcXG4gIC1tb3otZmxleDogMTtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgLW8tZmxleDogMTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLkhlYWRlci1kZ3JlZW4tQ0hLazl7XFxuICBiYWNrZ3JvdW5kOiAjOWZkZDVlO1xcbiAgLW1vei1mbGV4OiAxNDtcXG4gIC1tcy1mbGV4OiAxNDtcXG4gIC1vLWZsZXg6IDE0O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTQ7XFxuICAgICAgICAgIGZsZXg6IDE0IDEgMCU7XFxufVxcbi5IZWFkZXItbGdyZWVuLWZ3am1Fe1xcbiAgYmFja2dyb3VuZDogI2NhZWQ3MjtcXG4gIC1tb3otZmxleDogNTtcXG4gIC1tcy1mbGV4OiA1O1xcbiAgLW8tZmxleDogNTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLkhlYWRlci1kYmx1ZS0yb3hsbXtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICAtbW96LWZsZXg6IDEwO1xcbiAgLW1zLWZsZXg6IDEwO1xcbiAgLW8tZmxleDogMTA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgZmxleDogMTAgMSAwJTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7VUFDWixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO1VBQ1osYUFBYTtDQUN0QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtVQUNiLGNBQWM7Q0FDdkI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7VUFDWixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO1VBQ2IsY0FBYztDQUN2QlwiLFwiZmlsZVwiOlwiSGVhZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcbi5icmFuZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuLmJyYW5kVHh0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uYWRvcm5tZW50IHtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLnllbGxvdyB7XFxuICBiYWNrZ3JvdW5kOiAjZjJjYTcwO1xcbiAgLW1vei1mbGV4OiA1O1xcbiAgLW1zLWZsZXg6IDU7XFxuICAtby1mbGV4OiA1O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogNTtcXG4gICAgICAgICAgZmxleDogNSAxIDAlO1xcbn1cXG4ub3Jhbmdle1xcbiAgYmFja2dyb3VuZDogI2VkOWU3MjtcXG4gIC1tb3otZmxleDogMTtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgLW8tZmxleDogMTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLmRncmVlbntcXG4gIGJhY2tncm91bmQ6ICM5ZmRkNWU7XFxuICAtbW96LWZsZXg6IDE0O1xcbiAgLW1zLWZsZXg6IDE0O1xcbiAgLW8tZmxleDogMTQ7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxNDtcXG4gICAgICAgICAgZmxleDogMTQgMSAwJTtcXG59XFxuLmxncmVlbntcXG4gIGJhY2tncm91bmQ6ICNjYWVkNzI7XFxuICAtbW96LWZsZXg6IDU7XFxuICAtbXMtZmxleDogNTtcXG4gIC1vLWZsZXg6IDU7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgICAgICBmbGV4OiA1IDEgMCU7XFxufVxcbi5kYmx1ZXtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICAtbW96LWZsZXg6IDEwO1xcbiAgLW1zLWZsZXg6IDEwO1xcbiAgLW8tZmxleDogMTA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgZmxleDogMTAgMSAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIZWFkZXItcm9vdC1POW9XOVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlci1jb250YWluZXItcVEybUZcIixcblx0XCJicmFuZFwiOiBcIkhlYWRlci1icmFuZC0yb1NfeVwiLFxuXHRcImJyYW5kVHh0XCI6IFwiSGVhZGVyLWJyYW5kVHh0LTIzMGFIXCIsXG5cdFwiYWRvcm5tZW50XCI6IFwiSGVhZGVyLWFkb3JubWVudC0yOXFTUVwiLFxuXHRcInllbGxvd1wiOiBcIkhlYWRlci15ZWxsb3cteDlRcTlcIixcblx0XCJvcmFuZ2VcIjogXCJIZWFkZXItb3JhbmdlLTFlM0tOXCIsXG5cdFwiZGdyZWVuXCI6IFwiSGVhZGVyLWRncmVlbi1DSEtrOVwiLFxuXHRcImxncmVlblwiOiBcIkhlYWRlci1sZ3JlZW4tZndqbUVcIixcblx0XCJkYmx1ZVwiOiBcIkhlYWRlci1kYmx1ZS0yb3hsbVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0RUFBNEU7O0FBRTVFO2dGQUNnRjs7QUFFaEY7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywrQkFBK0IsQ0FBQyxPQUFPO0NBQ3hDOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7T0FFTyxPQUFPO0VBQ1osZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCLENBQUMsT0FBTztFQUN4QyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usb0JBQW9CLENBQUMsT0FBTztFQUM1QiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLDBDQUEwQztVQUNsQyxrQ0FBa0MsQ0FBQyxPQUFPO0NBQ25EOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxvQkFBb0I7Q0FDckI7O0FBRUQ7OztHQUdHOztBQUVIOzs7RUFHRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIOztFQUVFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7Ozs7O0VBS0Usd0JBQXdCLENBQUMsT0FBTztFQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsVUFBVSxDQUFDLE9BQU87Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1FBQ1EsT0FBTztFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7U0FDUyxPQUFPO0VBQ2QscUJBQXFCO0NBQ3RCOztBQUVEOzs7O0dBSUc7O0FBRUg7Ozs7RUFJRSwyQkFBMkIsQ0FBQyxPQUFPO0NBQ3BDOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLCtCQUErQjtDQUNoQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDs7Ozs7R0FLRzs7QUFFSDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUIsQ0FBQyxPQUFPO0VBQ3ZDLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsV0FBVyxDQUFDLE9BQU87RUFDbkIsb0JBQW9CLENBQUMsT0FBTztDQUM3Qjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxzQkFBc0IsQ0FBQyxPQUFPO0VBQzlCLHlCQUF5QixDQUFDLE9BQU87Q0FDbEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxXQUFXLENBQUMsT0FBTztDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxhQUFhO0NBQ2Q7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxxQkFBcUIsQ0FBQyxPQUFPO0NBQzlCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHlCQUF5QjtDQUMxQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGNBQWMsQ0FBQyxPQUFPO0NBQ3ZCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJub3JtYWxpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZSxcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9MYXlvdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9MYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuLkxheW91dC1jb250ZW50LWNpTjdyIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4vKlxcbiAqIEJhc2Ugc3R5bGVzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5odG1sIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiB+MTZweDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjMDA3NGMyO1xcbn1cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5oMyB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC43KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEOzs7O0dBSUc7QUFDSDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7QUFDRDs7Z0ZBRWdGO0FBQ2hGO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLENBQUMsWUFBWTtFQUM1QiwwREFBMEQ7RUFDMUQsbUJBQW1CLENBQUMsV0FBVztDQUNoQztBQUNEO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixVQUFVO0NBQ1g7QUFDRDs7Ozs7O0dBTUc7QUFDSDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDs7R0FFRztBQUNIO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0NBQ1o7QUFDRDs7OztHQUlHO0FBQ0g7Ozs7OztFQU1FLHVCQUF1QjtDQUN4QjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDs7Z0ZBRWdGO0FBQ2hGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7Ozs7Z0ZBSWdGO0FBQ2hGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi8qXFxuICogbm9ybWFsaXplLmNzcyBpcyBpbXBvcnRlZCBpbiBKUyBmaWxlLlxcbiAqIElmIHlvdSBpbXBvcnQgZXh0ZXJuYWwgQ1NTIGZpbGUgZnJvbSB5b3VyIGludGVybmFsIENTU1xcbiAqIHRoZW4gaXQgd2lsbCBiZSBpbmxpbmVkIGFuZCBwcm9jZXNzZWQgd2l0aCBDU1MgbW9kdWxlcy5cXG4gKi9cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuNyk7XFxuICBtYXJnaW46IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRleHQtc2hhZG93IGluIHNlbGVjdGlvbiBoaWdobGlnaHQ6XFxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXFxuICpcXG4gKiBUaGVzZSBzZWxlY3Rpb24gcnVsZSBzZXRzIGhhdmUgdG8gYmUgc2VwYXJhdGUuXFxuICogQ3VzdG9taXplIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHlvdXIgZGVzaWduLlxcbiAqL1xcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbi8qXFxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxcbiAqL1xcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcXG4gKiBpbWFnZXMsIHZpZGVvcyBhbmQgdGhlIGJvdHRvbSBvZiB0aGVpciBjb250YWluZXJzOlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcXG4gKi9cXG5hdWRpbyxcXG5jYW52YXMsXFxuaWZyYW1lLFxcbmltZyxcXG5zdmcsXFxudmlkZW8ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLypcXG4gKiBSZW1vdmUgZGVmYXVsdCBmaWVsZHNldCBzdHlsZXMuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLypcXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG4vKlxcbiAqIEJyb3dzZXIgdXBncmFkZSBwcm9tcHRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpnbG9iYWwoLmJyb3dzZXJ1cGdyYWRlKSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG4vKlxcbiAqIFByaW50IHN0eWxlc1xcbiAqIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OlxcbiAqIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1lZGlhIHByaW50IHtcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cihocmVmKSAnKSc7XFxuICB9XFxuXFxuICBhYmJyW3RpdGxlXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIodGl0bGUpICcpJztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxcbiAgICogb3IgdXNlIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbFxcbiAgICovXFxuXFxuICBhW2hyZWZePScjJ106OmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG5cXG4gIHByZSxcXG4gIGJsb2NrcXVvdGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICAvKlxcbiAgICogUHJpbnRpbmcgVGFibGVzOlxcbiAgICogaHR0cDovL2Nzcy1kaXNjdXNzLmluY3V0aW8uY29tL3dpa2kvUHJpbnRpbmdfVGFibGVzXFxuICAgKi9cXG5cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgfVxcblxcbiAgdHIsXFxuICBpbWcge1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHAsXFxuICBoMixcXG4gIGgzIHtcXG4gICAgb3JwaGFuczogMztcXG4gICAgd2lkb3dzOiAzO1xcbiAgfVxcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGVudFwiOiBcIkxheW91dC1jb250ZW50LWNpTjdyXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gSW1wb3J0IENvbXBvbmVudHNcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3Bkb3duLmNzcyc7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dfb3B0aW9uczogZmFsc2UsXG5cdFx0XHRvcHRpb25zX2hvdmVyOiBmYWxzZSxcblx0XHR9XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBzaG93X29wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgJiYgdGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5yb290LCB7W3N0eWxlcy5hbHRdOiB0aGlzLnByb3BzLmFsdH0pfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cblx0XHRcdFx0XHQ8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfb3B0aW9uczogdHJ1ZX0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3B0aW9uc19ob3ZlcikgXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X29wdGlvbnM6IGZhbHNlfSlcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgfX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZH0+e3RoaXMucHJvcHMuc2VsZWN0ZWQgPyB0aGlzLnByb3BzLnNlbGVjdGVkIDogKHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9uc1swXSA6IHVuZGVmaW5lZCl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0e3Nob3dfb3B0aW9ucyAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30+PC9zcGFuPn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7c2hvd19vcHRpb25zICYmIDxkaXYgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm9wdGlvbnMpfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3toZWlnaHQ6IHRoaXMuc3RhdGUuc2hvd19vcHRpb25zID8gKCh0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoICsgMSkgKiAyMikgKyAncHgnIDogMCAvKlRPRE8gQ09SUkVDVCBWQUxVRSovfX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy5vcHRpb25zTW91c2VMZWF2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2hvdmVyOiB0cnVlfSk7XG4gICAgICAgICAgICB9fT57dGhpcy5nZXRPcHRpb25zKCl9PC9kaXY+fVxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIG9wdGlvbnNNb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaG92ZXI6IGZhbHNlfSk7XG4gIFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93X29wdGlvbnM6IGZhbHNlfSlcblx0XHR9LCAyNTApO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgXHRpZiAoIXRoaXMucHJvcHMub3B0aW9ucykgcmV0dXJuO1xuICBcdGNvbnN0IGFyciA9IHRoaXMucHJvcHMub3B0aW9ucy5zbGljZSgpO1xuICBcdGlmKHRoaXMucHJvcHMuc2VsZWN0ZWQpIGFyci51bnNoaWZ0KHRoaXMucHJvcHMuc2VsZWN0ZWQpO1xuICAgIGVsc2UgYXJyLnVuc2hpZnQoYXJyWzBdKTtcbiAgXHRyZXR1cm4gYXJyLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBzdHlsZT17aW5kZXggPT09IDAgPyB7b3BhY2l0eTogMC43fSA6IHVuZGVmaW5lZH0gb25DbGljaz17KCkgPT4ge3RoaXMub25TZWxlY3Qob3B0aW9uKX19PntvcHRpb259PC9kaXY+XG5cdFx0KTtcbiAgfVxuXG4gIG9uU2VsZWN0KHZhbHVlKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7c2hvd19vcHRpb25zOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaG92ZXI6IGZhbHNlfSk7XG4gIFx0dGhpcy5wcm9wcy5vblNlbGVjdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERyb3Bkb3duKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQz94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPyUzRSAlM0MhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApIC0tJTNFICUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDI0IDI0JyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFICUzQ3N0eWxlIHR5cGU9J3RleHQvY3NzJyUzRSAuc3QwJTdCZmlsbDpub25lO3N0cm9rZTolMjMyMjIyMjI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7JTdEICUzQy9zdHlsZSUzRSAlM0N0aXRsZSUzRWFkZCUzQy90aXRsZSUzRSAlM0NsaW5lIGNsYXNzPSdzdDAnIHgxPScxNycgeTE9JzEyJyB4Mj0nNycgeTI9JzEyJy8lM0UgJTNDbGluZSBjbGFzcz0nc3QwJyB4MT0nMTInIHkxPScxNycgeDI9JzEyJyB5Mj0nNycvJTNFICUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9hZGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCc/JTNFICUzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0lM0UgJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UgJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOm5vbmU7c3Ryb2tlOiUyM0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDslN0QgJTNDL3N0eWxlJTNFICUzQ3RpdGxlJTNFYWRkLWhvdmVyJTNDL3RpdGxlJTNFICUzQ2xpbmUgY2xhc3M9J3N0MCcgeDE9JzE3JyB5MT0nMTInIHgyPSc3JyB5Mj0nMTInLyUzRSAlM0NsaW5lIGNsYXNzPSdzdDAnIHgxPScxMicgeTE9JzE3JyB4Mj0nMTInIHkyPSc3Jy8lM0UgJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2FkZC1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgaWQ9J0xheWVyXzEnIGRhdGEtbmFtZT0nTGF5ZXIgMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTNFLmNscy0xJTdCZmlsbDpub25lO3N0cm9rZTolMjMyMjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDslN0QlM0Mvc3R5bGUlM0UlM0MvZGVmcyUzRSUzQ3RpdGxlJTNFZGVsJTNDL3RpdGxlJTNFJTNDbGluZSBjbGFzcz0nY2xzLTEnIHgxPScxNScgeTE9JzEwJyB4Mj0nNScgeTI9JzEwJy8lM0UlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZGVsLnN2Z1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBpZD0nTGF5ZXJfMScgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM0UlM0NkZWZzJTNFJTNDc3R5bGUlM0UuY2xzLTElN0JmaWxsOm5vbmU7c3Ryb2tlOiUyM2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4OyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VkZWwtaG92ZXIlM0MvdGl0bGUlM0UlM0NsaW5lIGNsYXNzPSdjbHMtMScgeDE9JzE1JyB5MT0nMTAnIHgyPSc1JyB5Mj0nMTAnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9Ecm9wZG93bi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRHJvcGRvd24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRHJvcGRvd24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRHJvcGRvd24tcm9vdC0zdDA1WiB7XFxuXFx0bGluZS1oZWlnaHQ6IDIxcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlXFxufVxcbi5Ecm9wZG93bi1yb290LTN0MDVaLkRyb3Bkb3duLWFsdC1UbkNPRiAuRHJvcGRvd24tYXJyb3ctMm91ZDA6YWZ0ZXIge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbn1cXG4uRHJvcGRvd24tcm9vdC0zdDA1Wi5Ecm9wZG93bi1hbHQtVG5DT0YgLkRyb3Bkb3duLW9wdGlvbnMtMmtVMl8ge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0Y29sb3I6ICMyMjI7XFxufVxcbi5Ecm9wZG93bi1jb250YWluZXItbTQ0VGsge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uRHJvcGRvd24tYXJyb3ctMm91ZDAge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTBweFxcbn1cXG4uRHJvcGRvd24tYXJyb3ctMm91ZDA6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLkRyb3Bkb3duLW9wdGlvbnMtMmtVMl8ge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZGRkO1xcblxcdGhlaWdodDogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHotaW5kZXg6IDUwO1xcbn1cXG4uRHJvcGRvd24tb3B0aW9uLThMZGtfIHtcXG5cXHRwYWRkaW5nOiAxcHggMTVweCAwIDVweFxcbn1cXG4uRHJvcGRvd24tb3B0aW9uLThMZGtfOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTYsIDE5NiwgMTk2KVxcbn1cXG4uRHJvcGRvd24tc2VsZWN0LTFyazN5IHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uRHJvcGRvd24tc2VsZWN0ZWQtVDd1czEgeyBcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcblxcdG1hcmdpbjogMCA1cHg7XFxuXFx0cGFkZGluZy10b3A6IDFweDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjtBQUNEO0dBQ0csc0RBQXNEO0NBQ3hEO0FBQ0Q7R0FDRyxpQkFBaUI7R0FDakIsWUFBWTtDQUNkO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1g7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlDQUF5QztNQUNyQyxxQ0FBcUM7VUFDakMsaUNBQWlDO0VBQ3pDLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsdURBQXVEO0NBQ3hEO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLDhEQUE4RDtDQUM5RCx5REFBeUQ7Q0FDekQsc0RBQXNEO0NBQ3RELFlBQVk7Q0FDWjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7RUFDRSw4QkFBOEI7Q0FDL0I7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixvQkFBb0I7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtLQUN4Qix3QkFBd0I7Q0FDNUJcIixcImZpbGVcIjpcIkRyb3Bkb3duLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGxpbmUtaGVpZ2h0OiAyMXB4O1xcblxcdG1heC13aWR0aDogMTAwJVxcbn1cXG4ucm9vdC5hbHQgLmFycm93OmFmdGVyIHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcXG59XFxuLnJvb3QuYWx0IC5vcHRpb25zIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdFxcdGNvbG9yOiAjMjIyO1xcbn1cXG4uY29udGFpbmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1vLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuLmFycm93IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwcHhcXG59XFxuLmFycm93OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XFxuICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5vcHRpb25zIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZDogI2RkZDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHQtby10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHR6LWluZGV4OiA1MDtcXG59XFxuLm9wdGlvbiB7XFxuXFx0cGFkZGluZzogMXB4IDE1cHggMCA1cHhcXG59XFxuLm9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk2LCAxOTYsIDE5NilcXG59XFxuLnNlbGVjdCB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLnNlbGVjdGVkIHsgXFxuXFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG5cXHRtYXJnaW46IDAgNXB4O1xcblxcdHBhZGRpbmctdG9wOiAxcHg7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkRyb3Bkb3duLXJvb3QtM3QwNVpcIixcblx0XCJhbHRcIjogXCJEcm9wZG93bi1hbHQtVG5DT0ZcIixcblx0XCJhcnJvd1wiOiBcIkRyb3Bkb3duLWFycm93LTJvdWQwXCIsXG5cdFwib3B0aW9uc1wiOiBcIkRyb3Bkb3duLW9wdGlvbnMtMmtVMl9cIixcblx0XCJjb250YWluZXJcIjogXCJEcm9wZG93bi1jb250YWluZXItbTQ0VGtcIixcblx0XCJvcHRpb25cIjogXCJEcm9wZG93bi1vcHRpb24tOExka19cIixcblx0XCJzZWxlY3RcIjogXCJEcm9wZG93bi1zZWxlY3QtMXJrM3lcIixcblx0XCJzZWxlY3RlZFwiOiBcIkRyb3Bkb3duLXNlbGVjdGVkLVQ3dXMxXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGlkPSdMYXllcl8xJyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5jbHMtMSU3QmZpbGw6JTIzMjIyOyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VlZGl0JTNDL3RpdGxlJTNFJTNDcGF0aCBjbGFzcz0nY2xzLTEnIGQ9J00xNC44Miw5LjQzbDEtMWEyLjM2LDIuMzYsMCwwLDAsMC0zLjMzbC0uOTEtLjkxYTIuMzYsMi4zNiwwLDAsMC0zLjMzLDBsLTEsMVonLyUzRSUzQ3BvbHlnb24gY2xhc3M9J2Nscy0xJyBwb2ludHM9JzkuMTYgNi42IDMuNDkgMTIuMjcgMy40OSAxNi41MSA3LjczIDE2LjUxIDEzLjQgMTAuODQgOS4xNiA2LjYnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9lZGl0LnN2Z1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBpZD0nTGF5ZXJfMScgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM0UlM0NkZWZzJTNFJTNDc3R5bGUlM0UuY2xzLTElN0JmaWxsOiUyM2ZmZjslN0QlM0Mvc3R5bGUlM0UlM0MvZGVmcyUzRSUzQ3RpdGxlJTNFZWRpdC1ob3ZlciUzQy90aXRsZSUzRSUzQ3BhdGggY2xhc3M9J2Nscy0xJyBkPSdNMTQuODIsOS40M2wxLTFhMi4zNiwyLjM2LDAsMCwwLDAtMy4zM2wtLjkxLS45MWEyLjM2LDIuMzYsMCwwLDAtMy4zMywwbC0xLDFaJy8lM0UlM0Nwb2x5Z29uIGNsYXNzPSdjbHMtMScgcG9pbnRzPSc5LjE2IDYuNiAzLjQ5IDEyLjI3IDMuNDkgMTYuNTEgNy43MyAxNi41MSAxMy40IDEwLjg0IDkuMTYgNi42Jy8lM0UlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdmb3JtYXQtZHVyYXRpb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IERhdGFXaW5kb3cgZnJvbSAnY29tcG9uZW50cy9EYXRhV2luZG93JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VudHJ5LmNzcyc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3MnO1xuXG5jbGFzcyBFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOiBmYWxzZVxuXHRcdH1cblx0fVxuXHRcdFx0XHRcdFx0XHQvLyB7dGhpcy5wcm9wcy5hZGRlciAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZXMuc3BhY2VyKX0gLz59XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBcbiAgICAgIFx0Y2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5yb290LCB7W3N0eWxlcy5hZGRlcl06IHRoaXMucHJvcHMuYWRkZXJ9KX1cbiAgICAgIFx0b25Nb3VzZUVudGVyPXt0aGlzLnByb3BzLm9uTW91c2VFbnRlcn1cbiAgICAgIFx0b25Nb3VzZUxlYXZlPXt0aGlzLnByb3BzLm9uTW91c2VMZWF2ZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuXHRcdFx0XHRcdFx0XHR7IXRoaXMucHJvcHMuYWRkZXIgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmRlbCl9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWxldGV9IC8+fVxuXHRcdFx0XHRcdFx0XHR7IXRoaXMucHJvcHMuYWRkZXIgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmVkaXQsIHtbc3R5bGVzLmRvbmVdOiB0aGlzLnByb3BzLmVkaXRpbmd9KX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5vbkVkaXQodGhpcy5wcm9wcy5lZGl0aW5nKX19IC8+fVxuXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmFkZGVyICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idXR0b24sIHN0eWxlcy5hZGQpfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQWRkfSAvPn1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlfT5cblx0XHRcdFx0XHRcdFx0ICA8RHJvcGRvd25cblx0XHRcdFx0XHRcdFx0ICBcdG9wdGlvbnM9e3RoaXMucHJvcHMuc2VydmljZXMgPyBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlcnZpY2VzKSA6IFtdfVxuXHRcdFx0XHRcdFx0XHQgIFx0c2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VydmljZX1cblx0XHRcdFx0XHRcdFx0ICBcdG9uU2VsZWN0PXt2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgXHRcdGlmICh2YWx1ZSA9PT0gdGhpcy5wcm9wcy5zZXJ2aWNlKSByZXR1cm47IFxuXHRcdFx0XHRcdFx0XHQgIFx0XHR0aGlzLnByb3BzLmVkaXRFbnRyeSh0aGlzLnByb3BzLmVudHJ5X2lkLCAnc2VydmljZScsIHZhbHVlKVxuXHRcdFx0XHRcdFx0XHQgIFx0XHR0aGlzLnByb3BzLmVkaXRFbnRyeSh0aGlzLnByb3BzLmVudHJ5X2lkLCAnYXR0cmlidXRlcycsIHt9KVxuXHRcdFx0XHRcdFx0XHQgIFx0fX0gLz5cblx0XHRcdFx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGFydH0+e2Zvcm1hdCh0aGlzLnByb3BzLnN0YXJ0IHx8IDApfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQtXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZW5kfT57Zm9ybWF0KHRoaXMucHJvcHMuZW5kIHx8IDApfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGF9PlxuXHRcdFx0XHRcdFx0PERhdGFXaW5kb3dcblx0XHRcdFx0XHRcdFx0Ly8gYWx0PXt0aGlzLnByb3BzLmFkZGVyfVxuXHRcdFx0XHRcdFx0XHRvcGVuPXsodGhpcy5zdGF0ZS5vcGVuIHx8IHRoaXMucHJvcHMuYWRkZXIpfVxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzPXt0aGlzLnByb3BzLmF0dHJpYnV0ZXN9XG5cdFx0XHRcdFx0XHRcdHNlcnZpY2VzPXt0aGlzLnByb3BzLnNlcnZpY2VzfVxuXHRcdFx0XHRcdFx0XHRzZXJ2aWNlPXt0aGlzLnByb3BzLnNlcnZpY2V9XG5cdFx0XHRcdFx0XHRcdGVkaXRBdHRyaWJ1dGU9eyhhdHRyaWJ1dGUsIHZhbHVlKSA9PiB7dGhpcy5wcm9wcy5lZGl0QXR0cmlidXRlKHRoaXMucHJvcHMuZW50cnlfaWQsIGF0dHJpYnV0ZSwgdmFsdWUpfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gPERyb3Bkb3duIFxuICAvLyBcdG9wdGlvbnM9e3RoaXMucHJvcHMuc2VydmljZXMgPyBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlcnZpY2VzKSA6IFtdfVxuICAvLyBcdHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlcnZpY2V9XG4gIC8vIFx0b25TZWxlY3Q9e3RoaXMuc2V0RW50cnlTZXJ2aWNlLmJpbmQodGhpcyl9IC8+XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCBzZWxlY3QpKEVudHJ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeS9FbnRyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvRHJvcGRvd24nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0YVdpbmRvdy5jc3MnO1xuXG5jbGFzcyBEYXRhV2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucm9vdCwge1tzdHlsZXMuYWx0XTogdGhpcy5wcm9wcy5hbHQsIFtzdHlsZXMub3Blbl06IHRoaXMucHJvcHMub3Blbn0pfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdHt0aGlzLmdldEF0dHJpYnV0ZXMoKX1cdFxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVzKCkge1xuICBcdGlmICghdGhpcy5wcm9wcy5zZXJ2aWNlIHx8ICF0aGlzLnByb3BzLnNlcnZpY2VzXG4gIFx0XHR8fCBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlcnZpY2VzW3RoaXMucHJvcHMuc2VydmljZV0pLmxlbmd0aCA8IDEpIHJldHVybiA8aDM+Tm8gQXR0cmlidXRlczwvaDM+O1xuICBcdGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlcnZpY2VzW3RoaXMucHJvcHMuc2VydmljZV0pLm1hcCgoYXR0cmlidXRlLCBpbmRleCkgPT4gXG5cdFx0XHQ8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRlfT5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxuXHRcdFx0XHRcdHthdHRyaWJ1dGVbMF19XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+XG5cdFx0XHRcdFx0e3RoaXMucGFyc2VBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0sIHRoaXMucHJvcHMuYXR0cmlidXRlc1thdHRyaWJ1dGVbMF1dKX1cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcbiAgXHRyZXR1cm4gKFxuICBcdFx0PHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0ZXN9PlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0e2F0dHJpYnV0ZXN9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdClcbiAgfVxuXG4gIHBhcnNlQXR0cmlidXRlKGF0dHJpYnV0ZSwgcG9zc2libGUsIHZhbHVlKSB7XG4gIFx0aWYgKHBvc3NpYmxlID09PSAnTlVNRVJJQycpXG4gIFx0XHRyZXR1cm4gPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMucHJvcHMuZWRpdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgXHRpZiAocG9zc2libGUgaW5zdGFuY2VvZiBBcnJheSlcbiAgXHRcdHJldHVybiAoXG4gIFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdG9wdGlvbnM9e3Bvc3NpYmxlfVxuXHRcdFx0XHRcdHNlbGVjdGVkPXt2YWx1ZX1cblx0XHRcdFx0XHRvblNlbGVjdD17dmFsdWUgPT4ge3RoaXMucHJvcHMuZWRpdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKX19XG4gIFx0XHRcdC8+XG5cdFx0XHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShEYXRhV2luZG93KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9EYXRhV2luZG93L0RhdGFXaW5kb3cuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0RhdGFXaW5kb3cuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0RhdGFXaW5kb3cuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRGF0YVdpbmRvdy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9EYXRhV2luZG93L0RhdGFXaW5kb3cuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5EYXRhV2luZG93LXJvb3QtMjF3LWcge1xcblxcdC8qIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tYmxhY2spIHNvbGlkOyAqL1xcblxcdHBhZGRpbmctbGVmdDogNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0LyogaGVpZ2h0OiAwOyAqL1xcblxcdG92ZXJmbG93OiBoaWRkZW5cXG59XFxuLkRhdGFXaW5kb3ctcm9vdC0yMXctZy5EYXRhV2luZG93LWFsdC0za3ZiNiBoMyB7XFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLkRhdGFXaW5kb3ctcm9vdC0yMXctZy5EYXRhV2luZG93LW9wZW4tTGZZU2Qge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uRGF0YVdpbmRvdy1jb250YWluZXItbFlkbi0ge1xcblxcdFxcbn1cXG4uRGF0YVdpbmRvdy12YWx1ZS0yTktfcSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvRGF0YVdpbmRvdy9EYXRhV2luZG93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQjtBQUNEO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtDQUNuQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7O0NBRUM7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQlwiLFwiZmlsZVwiOlwiRGF0YVdpbmRvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHtcXG5cXHQvKiBib3JkZXItbGVmdDogMnB4IHZhcigtLWJsYWNrKSBzb2xpZDsgKi9cXG5cXHRwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdC8qIGhlaWdodDogMDsgKi9cXG5cXHRvdmVyZmxvdzogaGlkZGVuXFxufVxcbi5yb290LmFsdCBoMyB7XFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnJvb3Qub3BlbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jb250YWluZXIge1xcblxcdFxcbn1cXG4udmFsdWUge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRGF0YVdpbmRvdy1yb290LTIxdy1nXCIsXG5cdFwiYWx0XCI6IFwiRGF0YVdpbmRvdy1hbHQtM2t2YjZcIixcblx0XCJvcGVuXCI6IFwiRGF0YVdpbmRvdy1vcGVuLUxmWVNkXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRGF0YVdpbmRvdy1jb250YWluZXItbFlkbi1cIixcblx0XCJ2YWx1ZVwiOiBcIkRhdGFXaW5kb3ctdmFsdWUtMk5LX3FcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9EYXRhV2luZG93L0RhdGFXaW5kb3cuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0VudHJ5LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FbnRyeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FbnRyeS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeS9FbnRyeS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkVudHJ5LXJvb3QtaENwZ3ouRW50cnktYWRkZXItMlFsME4gLkVudHJ5LWRhdGEtWG1WZ3Mge1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG4uRW50cnktY29udGFpbmVyLTJXMVNXIHtcXG59XFxuLkVudHJ5LWJhci1TTGE2ciB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLkVudHJ5LWluZm8tMTdLYVAge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1vei1mbGV4OiAxO1xcblxcdC1tcy1mbGV4OiAxO1xcblxcdC1vLWZsZXg6IDE7XFxuXFx0LXdlYmtpdC1ib3gtZmxleDogMTtcXG5cXHQgICAgICAgIGZsZXg6IDEgMSAwJTtcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAjMjIyIDJweDtcXG59XFxuLkVudHJ5LXNwYWNlci0zRGgteCB7XFxuXFx0LW1vei1mbGV4OiAxO1xcblxcdC1tcy1mbGV4OiAxO1xcblxcdC1vLWZsZXg6IDE7XFxuXFx0LXdlYmtpdC1ib3gtZmxleDogMTtcXG5cXHQgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLkVudHJ5LXNlcnZpY2UtcXNMU04ge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5FbnRyeS1zZXJ2aWNlLXFzTFNOIC5FbnRyeS1TZWxlY3QtY29udHJvbC0yTl9QMSB7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLXRhYmxlO1xcblxcdFxcdGJhY2tncm91bmQ6ICNmMDA7XFxuXFx0fVxcbi5FbnRyeS1idXR0b25zLTEwRDBKIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uRW50cnktYnV0dG9ucy0xMEQwSiAuRW50cnktc3BhY2VyLTNEaC14IHtcXG5cXHRcXHR3aWR0aDogMjRweDtcXG5cXHRcXHRoZWlnaHQ6IDI0cHg7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUSB7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XFxuXFx0LyogYm9yZGVyLXJhZGl1czogY2FsYyhjYWxjKDJweCArIHZhcigtLWVudHJ5LWhlaWdodCkpIC8gNSk7ICovXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHdpZHRoOiAyNHB4O1xcblxcdGhlaWdodDogMjRweFxcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtROmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1EuRW50cnktYWRkLThfSElpIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvYWRkLnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1hZGQtOF9ISWk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9hZGQtaG92ZXIuc3ZnXCIpICsgXCIpO1xcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtRLkVudHJ5LWRlbC0yYjN5QSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2RlbC5zdmdcIikgKyBcIik7XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1EuRW50cnktZGVsLTJiM3lBOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvZGVsLWhvdmVyLnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1lZGl0LTJjc1VmIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvZWRpdC5zdmdcIikgKyBcIik7XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1EuRW50cnktZWRpdC0yY3NVZjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2VkaXQtaG92ZXIuc3ZnXCIpICsgXCIpO1xcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtRLkVudHJ5LWRvbmUtMjJzVnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9kb25lLnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1kb25lLTIyc1Z0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvZG9uZS1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5FbnRyeS10aW1lLTJXWDdkIHtcXG5cXHRwYWRkaW5nOiAxcHggNXB4IDAgMCA7XFxuXFx0bGluZS1oZWlnaHQ6IDIxcHg7XFxufVxcbi5FbnRyeS1kYXRhLVhtVmdzIHtcXG5cXHRtYXJnaW4tbGVmdDogNDhweDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7R0FDRyxrQkFBa0I7Q0FDcEI7QUFDRDtDQUNDO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0JBQW9CO1NBQ1osYUFBYTtDQUNyQiw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osV0FBVztDQUNYLG9CQUFvQjtTQUNaLGFBQWE7Q0FDckI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCO0FBQ0Y7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZDtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1g7QUFDRjtDQUNDLDJCQUEyQjtDQUMzQiwrREFBK0Q7Q0FDL0QsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0RBQWlEO0NBQ2xEO0FBQ0Q7RUFDRSxnREFBdUQ7Q0FDeEQ7QUFDRDtFQUNFLGdEQUFpRDtDQUNsRDtBQUNEO0VBQ0UsZ0RBQXVEO0NBQ3hEO0FBQ0Q7RUFDRSxnREFBa0Q7Q0FDbkQ7QUFDRDtFQUNFLGdEQUF3RDtDQUN6RDtBQUNEO0VBQ0UsZ0RBQWtEO0NBQ25EO0FBQ0Q7RUFDRSxnREFBd0Q7Q0FDekQ7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQlwiLFwiZmlsZVwiOlwiRW50cnkuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdC5hZGRlciAuZGF0YSB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcbi5jb250YWluZXIge1xcbn1cXG4uYmFyIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5mbyB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkICMyMjIgMnB4O1xcbn1cXG4uc3BhY2VyIHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcbn1cXG4uc2VydmljZSB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLnNlcnZpY2UgLlNlbGVjdC1jb250cm9sIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuXFx0XFx0YmFja2dyb3VuZDogI2YwMDtcXG5cXHR9XFxuLmJ1dHRvbnMge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5idXR0b25zIC5zcGFjZXIge1xcblxcdFxcdHdpZHRoOiAyNHB4O1xcblxcdFxcdGhlaWdodDogMjRweDtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG4uYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcXG5cXHQvKiBib3JkZXItcmFkaXVzOiBjYWxjKGNhbGMoMnB4ICsgdmFyKC0tZW50cnktaGVpZ2h0KSkgLyA1KTsgKi9cXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IDI0cHg7XFxuXFx0aGVpZ2h0OiAyNHB4XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuLmJ1dHRvbi5hZGQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvYWRkLnN2ZycpO1xcbn1cXG4uYnV0dG9uLmFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9hZGQtaG92ZXIuc3ZnJyk7XFxufVxcbi5idXR0b24uZGVsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2RlbC5zdmcnKTtcXG59XFxuLmJ1dHRvbi5kZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZGVsLWhvdmVyLnN2ZycpO1xcbn1cXG4uYnV0dG9uLmVkaXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZWRpdC5zdmcnKTtcXG59XFxuLmJ1dHRvbi5lZGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2VkaXQtaG92ZXIuc3ZnJyk7XFxufVxcbi5idXR0b24uZG9uZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9kb25lLnN2ZycpO1xcbn1cXG4uYnV0dG9uLmRvbmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZG9uZS1ob3Zlci5zdmcnKTtcXG59XFxuLnRpbWUge1xcblxcdHBhZGRpbmc6IDFweCA1cHggMCAwIDtcXG5cXHRsaW5lLWhlaWdodDogMjFweDtcXG59XFxuLmRhdGEge1xcblxcdG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkVudHJ5LXJvb3QtaENwZ3pcIixcblx0XCJhZGRlclwiOiBcIkVudHJ5LWFkZGVyLTJRbDBOXCIsXG5cdFwiZGF0YVwiOiBcIkVudHJ5LWRhdGEtWG1WZ3NcIixcblx0XCJjb250YWluZXJcIjogXCJFbnRyeS1jb250YWluZXItMlcxU1dcIixcblx0XCJiYXJcIjogXCJFbnRyeS1iYXItU0xhNnJcIixcblx0XCJpbmZvXCI6IFwiRW50cnktaW5mby0xN0thUFwiLFxuXHRcInNwYWNlclwiOiBcIkVudHJ5LXNwYWNlci0zRGgteFwiLFxuXHRcInNlcnZpY2VcIjogXCJFbnRyeS1zZXJ2aWNlLXFzTFNOXCIsXG5cdFwiU2VsZWN0LWNvbnRyb2xcIjogXCJFbnRyeS1TZWxlY3QtY29udHJvbC0yTl9QMVwiLFxuXHRcImJ1dHRvbnNcIjogXCJFbnRyeS1idXR0b25zLTEwRDBKXCIsXG5cdFwiYnV0dG9uXCI6IFwiRW50cnktYnV0dG9uLTFZcEtRXCIsXG5cdFwiYWRkXCI6IFwiRW50cnktYWRkLThfSElpXCIsXG5cdFwiZGVsXCI6IFwiRW50cnktZGVsLTJiM3lBXCIsXG5cdFwiZWRpdFwiOiBcIkVudHJ5LWVkaXQtMmNzVWZcIixcblx0XCJkb25lXCI6IFwiRW50cnktZG9uZS0yMnNWdFwiLFxuXHRcInRpbWVcIjogXCJFbnRyeS10aW1lLTJXWDdkXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J3V0Zi04Jz8lM0UgJTNDIS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjEuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAtLSUzRSAlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7JyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSAlM0NzdHlsZSB0eXBlPSd0ZXh0L2NzcyclM0UgLnN0MCU3QmZpbGw6bm9uZTtzdHJva2U6JTIzMjIyMjIyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDslN0QgJTNDL3N0eWxlJTNFICUzQ3RpdGxlJTNFZWRpdCUzQy90aXRsZSUzRSAlM0Nwb2x5bGluZSBjbGFzcz0nc3QwJyBwb2ludHM9JzE1LjUsNi45IDguMiwxNC4yIDQuNiwxMC42ICcvJTNFICUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kb25lLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCc/JTNFICUzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0lM0UgJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UgJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOm5vbmU7c3Ryb2tlOiUyM0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7JTdEICUzQy9zdHlsZSUzRSAlM0N0aXRsZSUzRWVkaXQlM0MvdGl0bGUlM0UgJTNDcG9seWxpbmUgY2xhc3M9J3N0MCcgcG9pbnRzPScxNS41LDYuOSA4LjIsMTQuMiA0LjUsMTAuNiAnLyUzRSAlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZG9uZS1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL3JlYWN0LXNlbGVjdC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vcmVhY3Qtc2VsZWN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9yZWFjdC1zZWxlY3QuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFNlbGVjdFxcbiAqID09PT09PT09PT09PVxcbiAqIENyZWF0ZWQgYnkgSmVkIFdhdHNvbiBhbmQgSm9zcyBNYWNraXNvbiBmb3IgS2V5c3RvbmVKUywgaHR0cDovL3d3dy5rZXlzdG9uZWpzLmNvbS9cXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL2plZHdhdHNvbiBodHRwczovL3R3aXR0ZXIuY29tL2pvc3NtYWNraXNvbiBodHRwczovL3R3aXR0ZXIuY29tL2tleXN0b25lanNcXG4gKiBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL0plZFdhdHNvbi9yZWFjdC1zZWxlY3RcXG4qL1xcbi5TZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uU2VsZWN0LFxcbi5TZWxlY3QgZGl2LFxcbi5TZWxlY3QgaW5wdXQsXFxuLlNlbGVjdCBzcGFuIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5TZWxlY3QuaXMtZGlzYWJsZWQgPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuLlNlbGVjdC5pcy1kaXNhYmxlZCA+IC5TZWxlY3QtY29udHJvbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5TZWxlY3QuaXMtZGlzYWJsZWQgLlNlbGVjdC1hcnJvdy16b25lIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC4zNTtcXG59XFxuLlNlbGVjdC1jb250cm9sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDkgI2NjYyAjYjNiM2IzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uU2VsZWN0LWNvbnRyb2w6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlzLXNlYXJjaGFibGUuaXMtb3BlbiA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcbi5pcy1vcGVuID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNiM2IzYjMgI2NjYyAjZDlkOWQ5O1xcbn1cXG4uaXMtb3BlbiA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LWFycm93IHtcXG4gIHRvcDogLTJweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtcXG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4O1xcbn1cXG4uaXMtc2VhcmNoYWJsZS5pcy1mb2N1c2VkOm5vdCguaXMtb3BlbikgPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uaXMtZm9jdXNlZDpub3QoLmlzLW9wZW4pID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2VmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggcmdiYSgwLCAxMjYsIDI1NSwgMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggcmdiYSgwLCAxMjYsIDI1NSwgMC4xKTtcXG59XFxuLlNlbGVjdC1wbGFjZWhvbGRlcixcXG4uU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSB7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogI2FhYTtcXG4gIGxlZnQ6IDA7XFxuICBsaW5lLWhlaWdodDogMzRweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmhhcy12YWx1ZS5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIC5TZWxlY3QtdmFsdWUtbGFiZWwsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIC5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbCxcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGFzLXZhbHVlLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6aG92ZXIsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmhvdmVyLFxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpmb2N1cyxcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6Zm9jdXMge1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5TZWxlY3QtaW5wdXQge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TZWxlY3QtaW5wdXQgPiBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDAgbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgLyogRm9yIElFIDggY29tcGF0aWJpbGl0eSAqL1xcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcXG4gIC8qIEZvciBJRSA4IGNvbXBhdGliaWxpdHkgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLmlzLWZvY3VzZWQgLlNlbGVjdC1pbnB1dCA+IGlucHV0IHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZCAuU2VsZWN0LWlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5TZWxlY3QtY29udHJvbDpub3QoLmlzLXNlYXJjaGFibGUpID4gLlNlbGVjdC1pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uU2VsZWN0LWxvYWRpbmctem9uZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG4uU2VsZWN0LWxvYWRpbmcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tc3BpbiA0MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tc3BpbiA0MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMzMzM7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VsZWN0LWNsZWFyLXpvbmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tZmFkZUluIDIwMG1zO1xcbiAgYW5pbWF0aW9uOiBTZWxlY3QtYW5pbWF0aW9uLWZhZGVJbiAyMDBtcztcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTdweDtcXG59XFxuLlNlbGVjdC1jbGVhci16b25lOmhvdmVyIHtcXG4gIGNvbG9yOiAjRDAwMjFCO1xcbn1cXG4uU2VsZWN0LWNsZWFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LWNsZWFyLXpvbmUge1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcbi5TZWxlY3QtYXJyb3ctem9uZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4uU2VsZWN0LWFycm93IHtcXG4gIGJvcmRlci1jb2xvcjogIzk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweCA1cHggMi41cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmlzLW9wZW4gLlNlbGVjdC1hcnJvdyxcXG4uU2VsZWN0LWFycm93LXpvbmU6aG92ZXIgPiAuU2VsZWN0LWFycm93IHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM2NjY7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtbXVsdGktdmFsdWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5TZWxlY3QgLlNlbGVjdC1hcmlhLW9ubHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uU2VsZWN0LW1lbnUtb3V0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U2ZTZlNjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcbi5TZWxlY3QtbWVudSB7XFxuICBtYXgtaGVpZ2h0OiAxOThweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5TZWxlY3Qtb3B0aW9uIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzY2NjY2NjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxufVxcbi5TZWxlY3Qtb3B0aW9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLlNlbGVjdC1vcHRpb24uaXMtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmFmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNiwgMjU1LCAwLjA0KTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uU2VsZWN0LW9wdGlvbi5pcy1mb2N1c2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4wOCk7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLlNlbGVjdC1vcHRpb24uaXMtZGlzYWJsZWQge1xcbiAgY29sb3I6ICNjY2NjY2M7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5TZWxlY3Qtbm9yZXN1bHRzIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjOTk5OTk5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC1pbnB1dCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5oYXMtdmFsdWUgLlNlbGVjdC1pbnB1dCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzJlMGZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTI2LCAyNTUsIDAuMjQpO1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb24sXFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgYS5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5TZWxlY3QtLW11bHRpIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2MyZTBmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDEyNiwgMjU1LCAwLjI0KTtcXG4gIHBhZGRpbmc6IDFweCA1cHggM3B4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb246aG92ZXIsXFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVhZmQ7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTMsIDIzMCwgMC4wOCk7XFxuICBjb2xvcjogIzAwNzFlNjtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJlMGZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI2LCAyNTUsIDAuMjQpO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZS1pY29uOmhvdmVyLFxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbjpmb2N1cyxcXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlLWljb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcbkBrZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1zcGluIHtcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1zcGluIHtcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7Ozs7RUFJRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLHlCQUF5QjtVQUNqQixpQkFBaUI7Q0FDMUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztDQUNmO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxnREFBZ0Q7VUFDeEMsd0NBQXdDO0NBQ2pEO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsMkNBQTJDO0VBQzNDLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsMkZBQTJGO1VBQ25GLG1GQUFtRjtDQUM1RjtBQUNEOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkJBQTJCO0tBQ3hCLHdCQUF3QjtFQUMzQixvQkFBb0I7Q0FDckI7QUFDRDs7RUFFRSxZQUFZO0NBQ2I7QUFDRDs7RUFFRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7Ozs7RUFJRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZix5QkFBeUI7VUFDakIsaUJBQWlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7Q0FDMUI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSwrREFBK0Q7RUFDL0QsdURBQXVEO0VBQ3ZELFlBQVk7RUFDWixhQUFhO0VBQ2IsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaURBQWlEO0VBQ2pELHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDJDQUEyQztFQUMzQyxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFDRDtFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtCQUErQjtDQUNoQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQ0FBMEM7RUFDMUMsWUFBWTtDQUNiO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7O0VBRUUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLGdEQUFnRDtFQUNoRCxxQkFBcUI7Q0FDdEI7QUFDRDs7RUFFRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztDQUMzQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixZQUFZO0NBQ2I7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixnQ0FBZ0M7Q0FDakM7QUFDRDs7O0VBR0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRTtJQUNFLGlDQUFpQztZQUN6Qix5QkFBeUI7R0FDbEM7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxpQ0FBaUM7R0FDbEM7Q0FDRlwiLFwiZmlsZVwiOlwicmVhY3Qtc2VsZWN0LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTZWxlY3RcXG4gKiA9PT09PT09PT09PT1cXG4gKiBDcmVhdGVkIGJ5IEplZCBXYXRzb24gYW5kIEpvc3MgTWFja2lzb24gZm9yIEtleXN0b25lSlMsIGh0dHA6Ly93d3cua2V5c3RvbmVqcy5jb20vXFxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9qZWR3YXRzb24gaHR0cHM6Ly90d2l0dGVyLmNvbS9qb3NzbWFja2lzb24gaHR0cHM6Ly90d2l0dGVyLmNvbS9rZXlzdG9uZWpzXFxuICogTUlUIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9KZWRXYXRzb24vcmVhY3Qtc2VsZWN0XFxuKi9cXG4uU2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNlbGVjdCxcXG4uU2VsZWN0IGRpdixcXG4uU2VsZWN0IGlucHV0LFxcbi5TZWxlY3Qgc3BhbiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uU2VsZWN0LmlzLWRpc2FibGVkID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcbi5TZWxlY3QuaXMtZGlzYWJsZWQgPiAuU2VsZWN0LWNvbnRyb2w6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uU2VsZWN0LmlzLWRpc2FibGVkIC5TZWxlY3QtYXJyb3ctem9uZSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuMzU7XFxufVxcbi5TZWxlY3QtY29udHJvbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5ICNjY2MgI2IzYjNiMztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBjb2xvcjogIzMzMztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLlNlbGVjdC1jb250cm9sOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcbi5TZWxlY3QtY29udHJvbCAuU2VsZWN0LWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pcy1zZWFyY2hhYmxlLmlzLW9wZW4gPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uaXMtb3BlbiA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjYjNiM2IzICNjY2MgI2Q5ZDlkOTtcXG59XFxuLmlzLW9wZW4gPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC1hcnJvdyB7XFxuICB0b3A6IC0ycHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7XFxuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcXG59XFxuLmlzLXNlYXJjaGFibGUuaXMtZm9jdXNlZDpub3QoLmlzLW9wZW4pID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuLmlzLWZvY3VzZWQ6bm90KC5pcy1vcGVuKSA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBib3JkZXItY29sb3I6ICMwMDdlZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgM3B4IHJnYmEoMCwgMTI2LCAyNTUsIDAuMSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgM3B4IHJnYmEoMCwgMTI2LCAyNTUsIDAuMSk7XFxufVxcbi5TZWxlY3QtcGxhY2Vob2xkZXIsXFxuLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUge1xcbiAgYm90dG9tOiAwO1xcbiAgY29sb3I6ICNhYWE7XFxuICBsZWZ0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSAuU2VsZWN0LXZhbHVlLWxhYmVsLFxcbi5oYXMtdmFsdWUuaXMtcHNldWRvLWZvY3VzZWQuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSAuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uaGFzLXZhbHVlLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWwsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhhcy12YWx1ZS5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmhvdmVyLFxcbi5oYXMtdmFsdWUuaXMtcHNldWRvLWZvY3VzZWQuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpob3ZlcixcXG4uaGFzLXZhbHVlLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6Zm9jdXMsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmZvY3VzIHtcXG4gIGNvbG9yOiAjMDA3ZWZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uU2VsZWN0LWlucHV0IHtcXG4gIGhlaWdodDogMzRweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VsZWN0LWlucHV0ID4gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwIG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIC8qIEZvciBJRSA4IGNvbXBhdGliaWxpdHkgKi9cXG4gIHBhZGRpbmc6IDhweCAwIDEycHg7XFxuICAvKiBGb3IgSUUgOCBjb21wYXRpYmlsaXR5ICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5pcy1mb2N1c2VkIC5TZWxlY3QtaW5wdXQgPiBpbnB1dCB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcbi5oYXMtdmFsdWUuaXMtcHNldWRvLWZvY3VzZWQgLlNlbGVjdC1pbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uU2VsZWN0LWNvbnRyb2w6bm90KC5pcy1zZWFyY2hhYmxlKSA+IC5TZWxlY3QtaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLlNlbGVjdC1sb2FkaW5nLXpvbmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTZweDtcXG59XFxuLlNlbGVjdC1sb2FkaW5nIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBTZWxlY3QtYW5pbWF0aW9uLXNwaW4gNDAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBTZWxlY3QtYW5pbWF0aW9uLXNwaW4gNDAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMzMzO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNlbGVjdC1jbGVhci16b25lIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBTZWxlY3QtYW5pbWF0aW9uLWZhZGVJbiAyMDBtcztcXG4gIGFuaW1hdGlvbjogU2VsZWN0LWFuaW1hdGlvbi1mYWRlSW4gMjAwbXM7XFxuICBjb2xvcjogIzk5OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcbi5TZWxlY3QtY2xlYXItem9uZTpob3ZlciB7XFxuICBjb2xvcjogI0QwMDIxQjtcXG59XFxuLlNlbGVjdC1jbGVhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC1jbGVhci16b25lIHtcXG4gIHdpZHRoOiAxN3B4O1xcbn1cXG4uU2VsZWN0LWFycm93LXpvbmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuLlNlbGVjdC1hcnJvdyB7XFxuICBib3JkZXItY29sb3I6ICM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDIuNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pcy1vcGVuIC5TZWxlY3QtYXJyb3csXFxuLlNlbGVjdC1hcnJvdy16b25lOmhvdmVyID4gLlNlbGVjdC1hcnJvdyB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNjY2O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LW11bHRpLXZhbHVlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uU2VsZWN0IC5TZWxlY3QtYXJpYS1vbmx5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBTZWxlY3QtYW5pbWF0aW9uLWZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBTZWxlY3QtYW5pbWF0aW9uLWZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLlNlbGVjdC1tZW51LW91dGVyIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci10b3AtY29sb3I6ICNlNmU2ZTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG4uU2VsZWN0LW1lbnUge1xcbiAgbWF4LWhlaWdodDogMTk4cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uU2VsZWN0LW9wdGlvbiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICM2NjY2NjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbn1cXG4uU2VsZWN0LW9wdGlvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxufVxcbi5TZWxlY3Qtb3B0aW9uLmlzLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWZhZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4wNCk7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLlNlbGVjdC1vcHRpb24uaXMtZm9jdXNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmNWZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI2LCAyNTUsIDAuMDgpO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5TZWxlY3Qtb3B0aW9uLmlzLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uU2VsZWN0LW5vcmVzdWx0cyB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtaW5wdXQge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLlNlbGVjdC0tbXVsdGkuaGFzLXZhbHVlIC5TZWxlY3QtaW5wdXQge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmNWZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI2LCAyNTUsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MyZTBmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDEyNiwgMjU1LCAwLjI0KTtcXG4gIGNvbG9yOiAjMDA3ZWZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uLFxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxufVxcbi5TZWxlY3QtLW11bHRpIGEuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGNvbG9yOiAjMDA3ZWZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjMmUwZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAxMjYsIDI1NSwgMC4yNCk7XFxuICBwYWRkaW5nOiAxcHggNXB4IDNweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uOmhvdmVyLFxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtaWNvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlYWZkO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEzLCAyMzAsIDAuMDgpO1xcbiAgY29sb3I6ICMwMDcxZTY7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtaWNvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTBmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNiwgMjU1LCAwLjI0KTtcXG59XFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlLWljb24ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2UzZTM7XFxufVxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbjpob3ZlcixcXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlLWljb246Zm9jdXMsXFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZS1pY29uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbn1cXG5Aa2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tc3BpbiB7XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tc3BpbiB7XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJzb3VyY2VNYXBcIjp0cnVlLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcblxuLy8gSW1wb3J0IENvbXBvbmVudHNcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXREYXRhV2luZG93LmNzcyc7XG5cbmNsYXNzIEVkaXREYXRhV2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdHt0aGlzLmdldEF0dHJpYnV0ZXMoKX1cbiAgICAgIFx0PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5vblJlZih0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm5vdW50KCkge1xuXHRcdHRoaXMucHJvcHMub25SZWYodW5kZWZpbmVkKTtcblx0fVxuXG4gIGdldEF0dHJpYnV0ZXMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmF0dHJpYnV0ZXMgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5hdHRyaWJ1dGVzKS5sZW5ndGggPCAxKVxuICAgIFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnR9Pk5vIEF0dHJpYnV0ZXM8L2Rpdj47XG4gIFx0cmV0dXJuIDx0YWJsZT48dGJvZHk+e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuYXR0cmlidXRlcykubWFwKGVudHJ5ID0+IChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3N0eWxlcy5hdHRyaWJ1dGV9IGtleT17ZW50cnlbMF19PlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2VudHJ5WzBdfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zfT57dGhpcy5wYXJzZUF0dHJpYnV0ZShlbnRyeVsxXSl9PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KSl9PC90Ym9keT48L3RhYmxlPlxuICB9XG5cbiAgcGFyc2VBdHRyaWJ1dGUoYXR0cikge1xuXHRcdGlmIChhdHRyIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdHJldHVybiA8dWw+e2F0dHIubWFwKGEgPT4gKDxsaSBrZXk9e2F9IGNsYXNzTmFtZT17c3R5bGVzLmFycmF5aXRlbX0+e2F9PC9saT4pKX08L3VsPlxuXHRcdH0gZWxzZSBpZiAoYXR0ciA9PT0gJ05VTUVSSUMnKSB7XG5cdFx0XHRyZXR1cm4gJ051bWVyaWMnO1xuXHRcdH0gZWxzZSBpZiAoYXR0ciA9PT0gJ1NUUklORycpIHtcblx0XHRcdHJldHVybiAnU3RyaW5nJztcblx0XHR9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEVkaXREYXRhV2luZG93KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9TZXJ2aWNlL0VkaXREYXRhV2luZG93L0VkaXREYXRhV2luZG93LmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FZGl0RGF0YVdpbmRvdy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRWRpdERhdGFXaW5kb3cuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRWRpdERhdGFXaW5kb3cuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VydmljZS9FZGl0RGF0YVdpbmRvdy9FZGl0RGF0YVdpbmRvdy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkVkaXREYXRhV2luZG93LXJvb3QtMi1UaTYgdWwge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6ICNlMzI7ICovXFxuXFx0XFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuLkVkaXREYXRhV2luZG93LXJvb3QtMi1UaTYgdGFibGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogNXB4O1xcblxcdH1cXG4uRWRpdERhdGFXaW5kb3ctYXR0cmlidXRlLWdSMm8wIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiAjMzRjOyAqL1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLkVkaXREYXRhV2luZG93LW5hbWUtVXJPYVEge1xcblxcdC8qIGJhY2tncm91bmQ6ICM1ZTY7ICovXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLkVkaXREYXRhV2luZG93LW9wdGlvbnMtRGZzMWcge1xcblxcdC8qIGJhY2tncm91bmQ6ICNjMmM7ICovXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuLkVkaXREYXRhV2luZG93LWFsZXJ0LTJRNEw2IHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL0VkaXREYXRhV2luZG93L0VkaXREYXRhV2luZG93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVjtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7Q0FDQyx1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCXCIsXCJmaWxlXCI6XCJFZGl0RGF0YVdpbmRvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHVsIHtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiAjZTMyOyAqL1xcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0cGFkZGluZzogMDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbi5yb290IHRhYmxlIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXHR9XFxuLmF0dHJpYnV0ZSB7XFxuXFx0LyogYmFja2dyb3VuZDogIzM0YzsgKi9cXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcbi5uYW1lIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiAjNWU2OyAqL1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5vcHRpb25zIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiAjYzJjOyAqL1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcbi5hbGVydCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJFZGl0RGF0YVdpbmRvdy1yb290LTItVGk2XCIsXG5cdFwiYXR0cmlidXRlXCI6IFwiRWRpdERhdGFXaW5kb3ctYXR0cmlidXRlLWdSMm8wXCIsXG5cdFwibmFtZVwiOiBcIkVkaXREYXRhV2luZG93LW5hbWUtVXJPYVFcIixcblx0XCJvcHRpb25zXCI6IFwiRWRpdERhdGFXaW5kb3ctb3B0aW9ucy1EZnMxZ1wiLFxuXHRcImFsZXJ0XCI6IFwiRWRpdERhdGFXaW5kb3ctYWxlcnQtMlE0TDZcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL0VkaXREYXRhV2luZG93L0VkaXREYXRhV2luZG93LmNzc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtmcm9tSlN9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIHNldFNlcnZpY2VzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3J1bnRpbWUnO1xuaW1wb3J0IHt0b0pTfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeSc7XG5pbXBvcnQgRGF0V2luZG93IGZyb20gJ2NvbXBvbmVudHMvU2VydmljZS9FZGl0RGF0YVdpbmRvdyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RlbC5jc3MnO1xuXG5jbGFzcyBNb2RlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDoge30sXG4gICAgICBmaWx0ZXI6ICcnLFxuICAgICAgbW9kZWxzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hTZXJ2aWNlcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2Vfc2VhcmNofT5cbiAgICAgICAgICAgIDxoMj5TZWxlY3QgU2VydmljZXM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXN9Pnt0aGlzLmdldFNlcnZpY2VzKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RlbHN9PlxuICAgICAgICAgIDxoMj5Nb2RlbHM8L2gyPlxuICAgICAgICAgIHt0aGlzLmdldE1vZGVscygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXRTZXJ2aWNlcygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2VydmljZXMgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZXJ2aWNlcykubGVuZ3RoIDwgMSlcbiAgICAgIHJldHVybiA8aDM+Tm8gU2VydmljZXM8L2gzPjtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5zZXJ2aWNlcylcbiAgICAuc29ydCgoYSwgYikgPT4gYVswXS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYlswXS50b0xvd2VyQ2FzZSgpKSlcbiAgICAuZmlsdGVyKHNlcnZpY2UgPT4gKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnJ1xuICAgICAgfHwgc2VydmljZVswXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSlcbiAgICAubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICBzZWxlY3RlZDogey4uLnByZXYuc2VsZWN0ZWQsIFtzZXJ2aWNlWzBdXTogIXByZXYuc2VsZWN0ZWRbc2VydmljZVswXV19ICAgICAgICAgICBcbiAgICAgICAgfSksIHRoaXMuZmV0Y2hNb2RlbHMuYmluZCh0aGlzKSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFyLCB7W3N0eWxlcy5zZWxlY3RlZF06IHRoaXMuc3RhdGUuc2VsZWN0ZWRbc2VydmljZVswXV19KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja30vPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntzZXJ2aWNlWzBdfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKVxuICB9XG5cbiAgZ2V0TW9kZWxzKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5tb2RlbHMgfHwgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5tb2RlbHMpLmxlbmd0aCA8IDEpXG4gICAgICByZXR1cm4gPGgzPk5vIE1vZGVsczwvaDM+O1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLm1vZGVscykubWFwKChtb2RlbCwgaW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm1vZGVsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxuICAgICAgICAgICAgPGgxPnttb2RlbFsxXS5tb2RlbF9uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlkfT5pZDoge21vZGVsWzBdfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc2l0aXZlfT5cbiAgICAgICAgICAgICAgPGg0PlBvc2l0aXZlIENhc2VzPC9oND5cbiAgICAgICAgICAgICAge21vZGVsWzFdLnBvc2l0aXZlX2Nhc2VzLm1hcCgoc2VydmljZSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZX0+e3NlcnZpY2V9PC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZWdhdGl2ZX0+XG4gICAgICAgICAgICAgIDxoND5OZWdhdGl2ZSBDYXNlczwvaDQ+XG4gICAgICAgICAgICAgIHshbW9kZWxbMV0ubmVnYXRpdmVfY2FzZXMubGVuZ3RoID8gPGgzPk5vIE5lZ2F0aXZlIENhc2VzPC9oMz4gXG4gICAgICAgICAgICAgICAgOiBtb2RlbFsxXS5uZWdhdGl2ZV9jYXNlcy5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2V9PntzZXJ2aWNlfTwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5cbiAgICAgICAgICAgICAgPGg0PlN0YXR1czwvaDQ+XG4gICAgICAgICAgICAgIHttb2RlbFsxXS5zdGF0ZSA/IG1vZGVsWzFdLnN0YXRlLnJlcGxhY2UoJ18nLCAnICcpIDogJ05vcm1hbCd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG5cbiAgZmV0Y2hNb2RlbHMoYXR0ZW1wdD0wKSB7XG4gICAgaWYgKGF0dGVtcHQgPT09IDUpIHtcbiAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGZldGNoIG1vZGVsc1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHA6Ly9iYWNrZW5kLmNlbnRyZWUueHl6OjUwMDAvZ2V0X21vZGVsc191bmRlcl9jb25zdHJhaW50Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJwb3NpdGl2ZV9jYXNlc1wiIDogW10sXG4gICAgICAgIFwibmVnYXRpdmVfY2FzZXNcIiA6IFtdLFxuICAgICAgICBcImFsZ29yaXRobV9uYW1lXCIgOiBcImNubl9uZXVyYWxfbmV0X3YxXzBcIlxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiRmV0Y2ggRXJyb3JcIilcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kZWxzOiBkYXRhfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZldGNoTW9kZWxzKGF0dGVtcHQgKyAxKSwgYXR0ZW1wdCAqIGF0dGVtcHQgKiAzMDAwKTtcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2hTZXJ2aWNlcyhhdHRlbXB0PTApIHtcbiAgICBpZiAoYXR0ZW1wdCA9PT0gNSkge1xuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gZmV0Y2ggc2VydmljZXNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2dldF91c2VyX3NlcnZpY2VzJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJhc2ljIFwiICsgYnRvYShcImI0ZWQyMThlLTBlZjYtNGMwYS1iN2UzLWFjODZlNmVkZmZiMjptYWtlX2FtZXJpY2FfZ3JlYXRfYWdhaW5cIiksXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihcIkZldGNoIEVycm9yXCIpXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkgdGhyb3cgbmV3IEVycm9yKFwiRmV0Y2ggZGF0YSBub3QgY29ycmVjdCBmb3JtYXRcIik7XG4gICAgICBkYXRhLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIG9ialtlbGVtXSA9IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiBvYmp9KTtcbiAgICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2dldF9zZXJ2aWNlc19hdHRyaWJ1dGVzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtzZXJ2aWNlX25hbWVzOiBkYXRhfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldFNlcnZpY2VzKHtzZXJ2aWNlczogZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZldGNoU2VydmljZXMoYXR0ZW1wdCArIDEpLCBhdHRlbXB0ICogYXR0ZW1wdCAqIDMwMDApO1xuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHMgPSBzdGF0ZS50b0pTKCk7XG4gIHJldHVybiB7XG4gICAgc2VydmljZXM6IHMucnVudGltZS5zZXJ2aWNlcyxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaCA9IChkaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKHtcbiAgc2V0U2VydmljZXM6IHNldFNlcnZpY2VzLFxufSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkod2l0aFN0eWxlcyhzdHlsZXMpKE1vZGVsKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9tb2RlbC9tb2RlbC5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTW9kZWwuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL01vZGVsLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL01vZGVsLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvbW9kZWwvTW9kZWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5Nb2RlbC1yb290LTJoUFl4IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcbi5Nb2RlbC1yb290LTJoUFl4IGlucHV0IHtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDNweDtcXG5cXHR9XFxuLk1vZGVsLWNvbnRhaW5lci0zcHJMOSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5Nb2RlbC1zZXJ2aWNlLTNQcVBRIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5Nb2RlbC1zZXJ2aWNlLTNQcVBRIC5Nb2RlbC1uYW1lLUtKYUhtIHtcXG5cXHRcXHRib3JkZXItbGVmdDogMnB4IHNvbGlkICMyMjI7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAzcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDNweDtcXG5cXHR9XFxuLk1vZGVsLXNlYXJjaC0xU2RyaiB7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLk1vZGVsLWJhci0ydk5odiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtby11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZVxcbn1cXG4uTW9kZWwtYmFyLTJ2Tmh2OmhvdmVyIC5Nb2RlbC1jaGVjay0ySzV1diB7XFxuICBvcGFjaXR5OiAuMztcXG59XFxuLk1vZGVsLWJhci0ydk5odi5Nb2RlbC1zZWxlY3RlZC1JTFdLNSAuTW9kZWwtY2hlY2stMks1dXYge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLk1vZGVsLWNoZWNrLTJLNXV2IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9yZXNvdXJjZXMvc2VsZWN0ZWQuc3ZnXCIpICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdG1hcmdpbi10b3A6IDNweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xcbn1cXG4uTW9kZWwtbW9kZWwtMmZqTWwge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG4uTW9kZWwtbW9kZWwtMmZqTWwgaDEge1xcblxcdFxcdG1hcmdpbjogMCAwIDhweCAwO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcblxcdH1cXG4uTW9kZWwtbW9kZWwtMmZqTWwgaDQge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuLk1vZGVsLW1vZGVsLTJmak1sIC5Nb2RlbC1uYW1lLUtKYUhtIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdH1cXG4uTW9kZWwtbW9kZWwtMmZqTWwgLk1vZGVsLXBvc2l0aXZlLTJxaW5DIHtcXG5cXG5cXHR9XFxuLk1vZGVsLW1vZGVsLTJmak1sIC5Nb2RlbC1uZWdhdGl2ZS0xWWZyUSB7XFxuXFxuXFx0fVxcbi5Nb2RlbC1tb2RlbC0yZmpNbCAuTW9kZWwtc3RhdHVzLTJQTWgtIHtcXG5cXG5cXHR9XFxuLk1vZGVsLW1vZGVscy0yVk55RiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHhcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL3JvdXRlcy9tb2RlbC9Nb2RlbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRDtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCO0FBQ0Y7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2Q7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakI7QUFDRjtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0NBQ0MsZ0RBQWlFO0NBQ2pFLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osYUFBYTtDQUNiLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIscUNBQXFDO0NBQ3JDLGdDQUFnQztDQUNoQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEI7QUFDRjtFQUNFLFVBQVU7RUFDVjtBQUNGO0VBQ0Usb0JBQW9CO0VBQ3BCO0FBQ0Y7O0VBRUU7QUFDRjs7RUFFRTtBQUNGOztFQUVFO0FBQ0Y7Q0FDQyxpQkFBaUI7Q0FDakJcIixcImZpbGVcIjpcIk1vZGVsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG4ucm9vdCBpbnB1dCB7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDM0LCAzNCwgMzQsIDAuNSk7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAzcHg7XFxuXFx0fVxcbi5jb250YWluZXIge1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2VydmljZSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uc2VydmljZSAubmFtZSB7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjIyO1xcblxcdFxcdHBhZGRpbmctbGVmdDogM3B4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxuXFx0fVxcbi5zZWFyY2gge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5iYXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmVcXG59XFxuLmJhcjpob3ZlciAuY2hlY2sge1xcbiAgb3BhY2l0eTogLjM7XFxufVxcbi5iYXIuc2VsZWN0ZWQgLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5jaGVjayB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9jb21wb25lbnRzL3Jlc291cmNlcy9zZWxlY3RlZC5zdmcnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXJnaW4tdG9wOiAzcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xcblxcdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcXG59XFxuLm1vZGVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGVsIGgxIHtcXG5cXHRcXHRtYXJnaW46IDAgMCA4cHggMDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXG5cXHR9XFxuLm1vZGVsIGg0IHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbi5tb2RlbCAubmFtZSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHR9XFxuLm1vZGVsIC5wb3NpdGl2ZSB7XFxuXFxuXFx0fVxcbi5tb2RlbCAubmVnYXRpdmUge1xcblxcblxcdH1cXG4ubW9kZWwgLnN0YXR1cyB7XFxuXFxuXFx0fVxcbi5tb2RlbHMge1xcblxcdG1hcmdpbi1sZWZ0OiA0MHB4XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTW9kZWwtcm9vdC0yaFBZeFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIk1vZGVsLWNvbnRhaW5lci0zcHJMOVwiLFxuXHRcInNlcnZpY2VcIjogXCJNb2RlbC1zZXJ2aWNlLTNQcVBRXCIsXG5cdFwibmFtZVwiOiBcIk1vZGVsLW5hbWUtS0phSG1cIixcblx0XCJzZWFyY2hcIjogXCJNb2RlbC1zZWFyY2gtMVNkcmpcIixcblx0XCJiYXJcIjogXCJNb2RlbC1iYXItMnZOaHZcIixcblx0XCJjaGVja1wiOiBcIk1vZGVsLWNoZWNrLTJLNXV2XCIsXG5cdFwic2VsZWN0ZWRcIjogXCJNb2RlbC1zZWxlY3RlZC1JTFdLNVwiLFxuXHRcIm1vZGVsXCI6IFwiTW9kZWwtbW9kZWwtMmZqTWxcIixcblx0XCJwb3NpdGl2ZVwiOiBcIk1vZGVsLXBvc2l0aXZlLTJxaW5DXCIsXG5cdFwibmVnYXRpdmVcIjogXCJNb2RlbC1uZWdhdGl2ZS0xWWZyUVwiLFxuXHRcInN0YXR1c1wiOiBcIk1vZGVsLXN0YXR1cy0yUE1oLVwiLFxuXHRcIm1vZGVsc1wiOiBcIk1vZGVsLW1vZGVscy0yVk55RlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvbW9kZWwvTW9kZWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCc/JTNFICUzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0lM0UgJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UgJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOiUyMzIyMjIyMjslN0QgJTNDL3N0eWxlJTNFICUzQ3BvbHlnb24gY2xhc3M9J3N0MCcgcG9pbnRzPScxNS41LDQuNSA4LjMsMTEuNyA1LjYsOSA0LDEwLjYgOC4zLDE0LjkgMTcuMSw2LjEgJy8lM0UgJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL3NlbGVjdGVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUNBO0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQS9CQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFEQTtBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBTEE7QUFEQTtBQWdCQTtBQW5CQTtBQUNBO0FBcUJBOzs7Ozs7O0FDdkNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFiQTtBQUNBO0FBZUE7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFoQkE7QUFEQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEVBO0FBQ0E7QUFrRUE7Ozs7OztBQzNFQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQWJBO0FBUkE7QUE0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQTdCQTtBQUpBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBO0FBK0RBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBNUNBO0FBQ0E7QUE4Q0E7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pCQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Q0E7QUFDQTtBQXdDQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFSQTtBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFWQTtBQUxBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBYUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW5KQTtBQUNBO0FBcUpBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7O0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RCQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=