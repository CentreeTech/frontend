require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(64).concat([
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classify__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(76);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/classify/index.js';
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
    chunks: ['classify'],
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__classify__["a" /* default */], {
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
/* 65 */,
/* 66 */,
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
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_format_duration__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_format_duration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_format_duration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aws_sdk__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_runtime__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_components_Classify_AudioClipper__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_Classify_Import__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_components_Classify_Entry__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components_Dropdown__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Classify_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Classify_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Classify_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/classify/classify.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















class Classify extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.s3;
  }

  componentDidMount() {
    this.audio = new Audio();
    this.fetchServices();
    this.fetchCredentials().then(credentials => {
      __WEBPACK_IMPORTED_MODULE_6_aws_sdk___default.a.config.update({ accessKeyId: credentials.AWS_ACCESS_KEY_ID, secretAccessKey: credentials.AWS_SECRET_ACCESS_KEY });
      this.s3 = new __WEBPACK_IMPORTED_MODULE_6_aws_sdk___default.a.S3();
    });
  }

  render() {
    const example = this.props.examples[this.props.cur_example_id];
    const t = { examples: [{ entries: [{}] }] };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.upper, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_components_Classify_AudioClipper__["a" /* default */], {
            src: example ? example.src : undefined,
            entries: example ? example.entries : undefined,
            cur_entry_id: this.props.cur_entry_id || 0,
            hover_entry_id: this.props.hover_entry_id,
            duration: example ? example.duration : undefined,
            editEntry: (attr, value) => {
              this.props.editEntry({
                example_id: this.props.cur_example_id,
                entry_id: this.props.cur_entry_id || 0,
                name: attr,
                value: value
              });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.mid, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.import, __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.col), __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.import_cont, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_components_Classify_Import__["a" /* default */], { createExample: this.createExample.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.submit, onClick: this.submitExample.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              'Submit Example'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.queue, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  },
                  __self: this
                },
                'Examples'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.examples, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  },
                  __self: this
                },
                this.getExamples()
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.edit, __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.col), __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                },
                __self: this
              },
              example ? example.name : 'No Example Selected'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              },
              'Add Entries'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.entries_cont, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                },
                __self: this
              },
              example && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.entry_adder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_components_Classify_Entry__["a" /* default */], _extends({
                  adder: true,
                  entry_id: 0,
                  example_id: this.props.cur_example_id,
                  services: this.props.services,
                  editEntry: this.editEntry.bind(this),
                  editAttribute: this.editEntryAttribute.bind(this),
                  onAdd: () => {
                    this.pushEntry(example.duration);
                  },
                  onMouseEnter: () => {
                    this.props.setHoverEntryID({ entry_id: 0 });
                  },
                  onMouseLeave: () => {
                    this.props.setHoverEntryID({ entry_id: undefined });
                  }
                }, example.entries[0], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  },
                  __self: this
                }))
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.entries, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                },
                this.getEntries()
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.data, __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.col), __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              },
              'Data'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              },
              'No Data'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.lower, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })
      )
    );
  }

  submitExample(attempt = 0) {
    // TODO 
    // Make sure users can't mess with interface during this process
    const example = this.props.examples[this.props.cur_example_id];
    if (!example) return;
    this.fetchCredentials().then(credentials => {
      this.fetchFilename().then(data => {
        this.uploadExample(credentials, example.file, data.filename + example.type.replace(/audio\//, '.')).then(() => {
          this.uploadEntries(example.entries.map(entry => {
            const attributes = Object.assign(this.getDefaultServiceValues(entry.service), entry.attributes);
            return {
              start_time: entry.start,
              end_time: entry.end,
              service: entry.service,
              attributes: attributes,
              media: data.filename + example.type.replace(/audio\//, '.')
            };
          })).then(() => {
            console.log(1);this.removeExample(this.props.cur_example_id);
          });
        });
      });
    });
  }

  getDefaultServiceValues(service) {
    const obj = {};
    Object.entries(this.props.services[service]).forEach(attr => {
      if (attr[1] instanceof Array) obj[attr[0]] = attr[1][0];else obj[attr[0]] = attr[1];
    });
    return obj;
  }

  fetchCredentials() {
    return new Promise((resolve, reject) => {
      fetch('http://backend.centree.xyz:5000/get_data_storage_credentials', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again")
        }
      }).then(res => res.json(), reason => reject(reason)).then(data => resolve(data));
    });
  }

  fetchFilename() {
    return new Promise((resolve, reject) => {
      fetch('http://backend.centree.xyz:5000/get_new_filename', {
        method: 'GET',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again")
        }
      }).then(res => res.json(), reason => reject(reason)).then(data => resolve(data));
    });
  }

  uploadExample(credentials, file, filename) {
    return new Promise((resolve, reject) => {
      // console.log(credentials, file, filename);
      var params = { Bucket: credentials.BUCKET_NAME, Key: "classifications/" + filename, Body: file }; //new File([file], filename)
      this.s3.upload(params, (err, data) => {
        // console.log(err, data)
        resolve();
      });
    });
  }

  uploadEntries(entries) {
    return new Promise((resolve, reject) => {
      // console.log('uploading entires');
      // console.log(entries);
      fetch('http://backend.centree.xyz:5000/add_classifications', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(entries)
      }).then(() => resolve());
    });
  }

  createExample(name, src, type, file, duration) {
    return {
      name: name,
      src: src,
      type: type,
      file: file,
      duration: duration,
      entries: [this.createEntry(duration)]
    };
  }

  removeExample(example_id) {
    this.props.setCurExampleID({ example_id: 0 });
    this.props.delExample({ example_id: example_id });
  }

  createEntry(duration, start, end, service, attributes) {
    return {
      start: start || 0,
      end: end || duration,
      service: service || Object.keys(this.props.services)[0],
      attributes: attributes || {}
    };
  }

  pushEntry(duration) {
    this.props.pushExampleEntry({
      example_id: this.props.cur_example_id,
      entry: this.createEntry(duration)
    });
  }

  editEntry(entry_id, name, value) {
    this.props.editEntry({
      example_id: this.props.cur_example_id,
      entry_id: entry_id,
      name: name,
      value: value
    });
  }

  editEntryAttribute(entry_id, attribute, value) {
    this.props.editEntryAttribute({
      example_id: this.props.cur_example_id,
      entry_id: entry_id,
      attribute: attribute,
      value: value
    });
  }

  delEntry(entry_id) {
    this.props.delExampleEntry({
      example_id: this.props.cur_example_id,
      entry_id: entry_id
    });
  }

  getExamples() {
    if (!this.props.examples || this.props.examples.length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      },
      'No Examples'
    );
    return this.props.examples.map((example, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.example, { [__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.selected]: index == this.props.cur_example_id }),
        key: index,
        title: example.name,
        onClick: () => {
          this.props.setCurExampleID({ example_id: index });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.example_name, __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        },
        ' ',
        example.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a.example_length, __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        },
        'Length: ',
        __WEBPACK_IMPORTED_MODULE_5_format_duration___default.a(example.duration)
      )
    ));
  }

  getEntries() {
    if (!this.props.examples || this.props.examples.length < 1 || this.props.examples[this.props.cur_example_id].entries.length < 2) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      },
      'No Entries'
    );
    return this.props.examples[this.props.cur_example_id].entries.slice(1).map((entry, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_components_Classify_Entry__["a" /* default */], _extends({
      key: index,
      entry_id: index + 1,
      example_id: this.props.cur_example_id,
      services: this.props.services,
      editEntry: this.editEntry.bind(this),
      editAttribute: this.editEntryAttribute.bind(this),
      onDelete: () => {
        this.delEntry(index + 1);
      },
      onEdit: done => {
        this.props.setCurEntryID({ entry_id: done ? 0 : index + 1 });
      },
      editing: this.props.cur_entry_id == index + 1,
      onMouseEnter: () => {
        this.props.setHoverEntryID({ entry_id: index + 1 });
      },
      onMouseLeave: () => {
        this.props.setHoverEntryID({ entry_id: undefined });
      }
    }, entry, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    })));
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
    services: s.runtime.services,
    examples: s.runtime.examples,
    cur_example_id: s.runtime.cur_example_id,
    cur_entry_id: s.runtime.cur_entry_id,
    hover_entry_id: s.runtime.hover_entry_id
  };
};

const mapDispatch = dispatch => __WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"]({
  setServices: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["k" /* setServices */],
  setCurExampleID: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["h" /* setCurExampleID */],
  setCurEntryID: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["g" /* setCurEntryID */],
  setHoverEntryID: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["i" /* setHoverEntryID */],
  editEntry: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["d" /* editEntry */],
  editEntryAttribute: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["e" /* editEntryAttribute */],
  pushExampleEntry: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["f" /* pushExampleEntry */],
  delExampleEntry: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["c" /* delExampleEntry */],
  delExample: __WEBPACK_IMPORTED_MODULE_9__actions_runtime__["b" /* delExample */]
}, dispatch);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"](mapState, mapDispatch)(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_14__Classify_css___default.a)(Classify)));

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/AudioClipper/AudioClipper.js';





// Import Components



class AudioClipper extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			playing: false,
			side: null,
			progress: 0
		};
		this.bounds = null;
		this.hover = null;
		this.selected = null;

		this.getRect = this.getRect.bind(this);
		this.windowMouseMove = this.windowMouseMove.bind(this);
		this.windowMouseUp = this.windowMouseUp.bind(this);
	}

	componentDidMount() {
		this.getRect();
		this.audio = new Audio();
		this.audio.addEventListener('timeupdate', () => {
			this.setState({ progress: this.audio.currentTime / this.audio.duration });
		});
		this.audio.addEventListener('canplaythrough', () => {
			this.setState({ progress: 0 });
		});
		window.addEventListener('resize', this.getRect);
		window.addEventListener('mousemove', this.windowMouseMove);
		window.addEventListener('mouseup', this.windowMouseUp);
	}

	windowMouseMove(e) {
		if (!this.props.entries) return;
		if (this.selected == null) return;

		e.preventDefault();

		let x = (e.clientX - this.bounds.left) / this.bounds.width;
		if (x < 0) x = 0;else if (x > 1) x = 1;
		if (this.selected === 'selection') {
			const entry = this.props.entries[this.props.cur_entry_id];
			const mid = (entry.start + entry.end) / (2 * this.props.duration);
			this.setState({ side: x < mid ? 'left' : 'right' });
			this.props.editEntry(this.state.side === 'left' ? 'start' : 'end', x * this.props.duration);
		} else if (this.selected === 'progress' && this.audio) {
			this.audio.currentTime = this.audio.duration * x;
		}
	}

	windowMouseUp() {
		if (!this.props.entries) return;
		this.selected = null;
		if (!this.hover) this.setState({ side: null });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.getRect);
		window.removeEventListener('mousemove', this.windowMouseMove);
		window.removeEventListener('mouseup', this.windowMouseUp);
	}

	componentWillReceiveProps(next) {
		if (next.src && (!this.audio || next.src != this.audio.src)) this.setAudio(next.src);
	}

	render() {
		const trackFns = {
			ref: r => {
				this.track = r;
			},
			onMouseMove: this.trackHover.bind(this),
			onMouseLeave: this.trackLeave.bind(this),
			onMouseDown: this.trackDown.bind(this)
		};
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.root, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 86
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.controls, __source: {
							fileName: _jsxFileName,
							lineNumber: 87
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.button, __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.reset),
						onClick: this.reset.bind(this), __source: {
							fileName: _jsxFileName,
							lineNumber: 88
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.button, { [__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.play]: !this.state.playing, [__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.pause]: this.state.playing }),
						onClick: this.togglePlay.bind(this), __source: {
							fileName: _jsxFileName,
							lineNumber: 90
						},
						__self: this
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					_extends({ className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.track }, trackFns, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 93
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.selections, { [__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.left]: this.state.side === 'left', [__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.right]: this.state.side === 'right' }),
							onMouseEnter: () => {
								this.hover = 'selection';
							}, __source: {
								fileName: _jsxFileName,
								lineNumber: 94
							},
							__self: this
						},
						this.getSelections()
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.progress,
							onMouseEnter: () => {
								this.hover = 'progress';
							}, __source: {
								fileName: _jsxFileName,
								lineNumber: 98
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.prog_bar, style: { width: 100 * this.state.progress + '%' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 100
							},
							__self: this
						})
					)
				)
			)
		);
	}

	setAudio(blob) {
		this.audio.src = blob;
		this.audio.load();
	}

	togglePlay() {
		if (this.state.playing) this.audio.pause();else this.audio.play();
		this.setState(prev => ({ playing: !prev.playing }));
	}

	reset() {
		if (!this.audio) return;
		this.audio.pause();
		this.audio.currentTime = 0;
		this.setState(prev => {
			playing: false;
		});
	}

	trackHover(e) {
		if (!this.props.entries) return;
		const x = (e.clientX - this.bounds.left) / this.bounds.width;
		if (this.hover === 'selection' && !(this.selected === 'selection')) {
			const entry = this.props.entries[this.props.cur_entry_id];
			const mid = (entry.start + entry.end) / (2 * this.props.duration);
			this.setState({ side: x < mid ? 'left' : 'right' });
		} else {
			this.setState({ side: null });
		}
	}

	trackLeave() {
		this.hover = null;
		this.setState({ side: null });
	}

	trackDown(e) {
		this.selected = this.hover;
	}

	getSelections() {
		if (!this.props.entries) return;
		return this.props.entries.map((entry, index) => {
			const start = 100 * (entry.start / this.props.duration);
			const end = 100 * ((entry.end - entry.start) / this.props.duration);
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
				key: index,
				className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.sel_bar, {
					[__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.current]: index === this.props.cur_entry_id,
					[__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a.hover]: index === this.props.hover_entry_id
				}),
				style: { left: start + '%', width: end + '%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 152
				},
				__self: this
			});
		});
	}

	getRect() {
		this.bounds = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.track).getBoundingClientRect();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__AudioClipper_css___default.a)(AudioClipper));

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(119);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./AudioClipper.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./AudioClipper.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.AudioClipper-root-21Bv1 {\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: 0;\n\twidth: 100%;\n\ttext-align: center;\n}\n.AudioClipper-container-3NqJ4 {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin: 0 auto;\n\tmax-width: calc(100% - 20px);\n}\n.AudioClipper-controls-2FJM5 {\n\tbackground: #ccc;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding: 0 5px;\n}\n.AudioClipper-controls-2FJM5 .AudioClipper-button-1yGsq {\n\t\tdisplay: block;\n\t\tcursor: pointer;\n\t\twidth: 30px;\n\t\theight: 100%;\n\t\ttext-align: center;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\t-o-user-select: none;\n\t\tuser-select: none;\n\t\tposition: relative;\n\t}\n.AudioClipper-controls-2FJM5 .AudioClipper-play-EEdVZ:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 0;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t    -ms-transform: translate(-50%, -50%);\n\t\t        transform: translate(-50%, -50%);\n\t\tborder-style: solid;\n\t\tborder-width: 10px 0 10px 17px;\n\t\tborder-color: transparent transparent transparent #555;\n\t}\n.AudioClipper-controls-2FJM5 .AudioClipper-play-EEdVZ:hover:after {\n\t\tborder-color: transparent transparent transparent #4e7fc6;\n\t}\n.AudioClipper-controls-2FJM5 .AudioClipper-pause-3Chqw:after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 20px;\n  background: #555;\n  top: 50%;\n  left: calc(50% - 5px);\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.AudioClipper-controls-2FJM5 .AudioClipper-pause-3Chqw:before {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 20px;\n  background: #555;\n  top: 50%;\n  left: calc(50% + 5px);\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.AudioClipper-controls-2FJM5 .AudioClipper-pause-3Chqw:hover:after {\n  background: #4e7fc6;\n}\n.AudioClipper-controls-2FJM5 .AudioClipper-pause-3Chqw:hover:before {\n  background: #4e7fc6;\n}\n.AudioClipper-controls-2FJM5 .AudioClipper-reset-2KgTZ:after {\n\t\tcontent: '';\n\t\tbackground: #555;\n\t\tposition: absolute;\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t    -ms-transform: translate(-50%, -50%);\n\t\t        transform: translate(-50%, -50%);\n\t}\n.AudioClipper-controls-2FJM5 .AudioClipper-reset-2KgTZ:hover:after {\n\t\tbackground: #e64;\n\t}\n.AudioClipper-track-34A6e {\n\tbackground: #ccc;\n\tcursor: pointer;\n\tposition: relative;\n\twidth: 100%;\n\theight: 40px;\n\tmargin-left: 5px;\n\tpadding: 0 10px;\n}\n.AudioClipper-selections-2F3kw {\n\tposition: relative;\n\theight: 100%\n}\n.AudioClipper-selections-2F3kw.AudioClipper-left-3zVO3 .AudioClipper-current-mSd4p:after {\n  left: -5px;\n  display: block;\n}\n.AudioClipper-selections-2F3kw.AudioClipper-right-2APj3 .AudioClipper-current-mSd4p:after {\n  display: block;\n  right: -5px;\n}\n.AudioClipper-sel_bar-3M2Db {\n\tbackground-color: #bbb;\n\tborder-left: 2px solid #aaa;\n\tborder-right: 2px solid #aaa;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\theight: 100%;\n\t/* width: 60%; */\n\ttop: 0;\n\t/* left: 20%; */\n\tposition: absolute;\n\t-webkit-transition: background 0.3s ease, border-color 0.3s ease;\n\t-o-transition: background 0.3s ease, border-color 0.3s ease;\n\ttransition: background 0.3s ease, border-color 0.3s ease\n}\n.AudioClipper-sel_bar-3M2Db.AudioClipper-current-mSd4p {\n  background: #aaa;\n  border-color: #919191;\n  z-index: 5;\n}\n.AudioClipper-sel_bar-3M2Db:after {\n  display: none;\n  background: #919191;\n  content: '';\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  top: -5px;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.AudioClipper-sel_bar-3M2Db.AudioClipper-hover-3iM1z {\n  background: #7e9ccc;\n  border-color: #6484b7;\n  z-index: 5;\n}\n.AudioClipper-progress-eVDYJ {\n\tbackground: #616161;\n\tposition: relative;\n\ttop: -50%;\n\theight: 10px;\n\twidth: 100%;\n\t-webkit-transform: translateY(-50%);\n\t    -ms-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\tz-index: 6;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n.AudioClipper-prog_bar-1Of00 {\n\tbackground: #4e7fc6;\n\twidth: 0;\n\theight: 100%;\n\t// transition: width 200ms linear;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/AudioClipper/AudioClipper.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,UAAU;CACV,WAAW;CACX,eAAe;CACf,YAAY;CACZ,mBAAmB;CACnB;AACD;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,eAAe;CACf,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,eAAe;CACf;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB;AACF;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,SAAS;EACT,UAAU;EACV,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;EACzC,oBAAoB;EACpB,+BAA+B;EAC/B,uDAAuD;EACvD;AACF;EACE,0DAA0D;EAC1D;AACF;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,sBAAsB;EACtB,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;CAC1C;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,sBAAsB;EACtB,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;CAC1C;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;EACV,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;EACzC;AACF;EACE,iBAAiB;EACjB;AACF;CACC,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB,YAAY;CACZ;AACD;EACE,WAAW;EACX,eAAe;CAChB;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;CACC,uBAAuB;CACvB,4BAA4B;CAC5B,6BAA6B;CAC7B,+BAA+B;SACvB,uBAAuB;CAC/B,aAAa;CACb,iBAAiB;CACjB,OAAO;CACP,gBAAgB;CAChB,mBAAmB;CACnB,iEAAiE;CACjE,4DAA4D;CAC5D,wDAAwD;CACxD;AACD;EACE,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;CAClC;AACD;EACE,oBAAoB;EACpB,sBAAsB;EACtB,WAAW;CACZ;AACD;CACC,oBAAoB;CACpB,mBAAmB;CACnB,UAAU;CACV,aAAa;CACb,YAAY;CACZ,oCAAoC;KAChC,gCAAgC;SAC5B,4BAA4B;CACpC,WAAW;CACX,0BAA0B;CAC1B,uBAAuB;CACvB,sBAAsB;CACtB,qBAAqB;CACrB,kBAAkB;CAClB;AACD;CACC,oBAAoB;CACpB,SAAS;CACT,aAAa;CACb,kCAAkC;CAClC","file":"AudioClipper.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: 0;\n\twidth: 100%;\n\ttext-align: center;\n}\n.container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin: 0 auto;\n\tmax-width: calc(100% - 20px);\n}\n.controls {\n\tbackground: #ccc;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding: 0 5px;\n}\n.controls .button {\n\t\tdisplay: block;\n\t\tcursor: pointer;\n\t\twidth: 30px;\n\t\theight: 100%;\n\t\ttext-align: center;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\t-o-user-select: none;\n\t\tuser-select: none;\n\t\tposition: relative;\n\t}\n.controls .play:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 0;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t    -ms-transform: translate(-50%, -50%);\n\t\t        transform: translate(-50%, -50%);\n\t\tborder-style: solid;\n\t\tborder-width: 10px 0 10px 17px;\n\t\tborder-color: transparent transparent transparent #555;\n\t}\n.controls .play:hover:after {\n\t\tborder-color: transparent transparent transparent #4e7fc6;\n\t}\n.controls .pause:after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 20px;\n  background: #555;\n  top: 50%;\n  left: calc(50% - 5px);\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.controls .pause:before {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 20px;\n  background: #555;\n  top: 50%;\n  left: calc(50% + 5px);\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.controls .pause:hover:after {\n  background: #4e7fc6;\n}\n.controls .pause:hover:before {\n  background: #4e7fc6;\n}\n.controls .reset:after {\n\t\tcontent: '';\n\t\tbackground: #555;\n\t\tposition: absolute;\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t    -ms-transform: translate(-50%, -50%);\n\t\t        transform: translate(-50%, -50%);\n\t}\n.controls .reset:hover:after {\n\t\tbackground: #e64;\n\t}\n.track {\n\tbackground: #ccc;\n\tcursor: pointer;\n\tposition: relative;\n\twidth: 100%;\n\theight: 40px;\n\tmargin-left: 5px;\n\tpadding: 0 10px;\n}\n.selections {\n\tposition: relative;\n\theight: 100%\n}\n.selections.left .current:after {\n  left: -5px;\n  display: block;\n}\n.selections.right .current:after {\n  display: block;\n  right: -5px;\n}\n.sel_bar {\n\tbackground-color: #bbb;\n\tborder-left: 2px solid #aaa;\n\tborder-right: 2px solid #aaa;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\theight: 100%;\n\t/* width: 60%; */\n\ttop: 0;\n\t/* left: 20%; */\n\tposition: absolute;\n\t-webkit-transition: background 0.3s ease, border-color 0.3s ease;\n\t-o-transition: background 0.3s ease, border-color 0.3s ease;\n\ttransition: background 0.3s ease, border-color 0.3s ease\n}\n.sel_bar.current {\n  background: #aaa;\n  border-color: #919191;\n  z-index: 5;\n}\n.sel_bar:after {\n  display: none;\n  background: #919191;\n  content: '';\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  top: -5px;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.sel_bar.hover {\n  background: #7e9ccc;\n  border-color: #6484b7;\n  z-index: 5;\n}\n.progress {\n\tbackground: #616161;\n\tposition: relative;\n\ttop: -50%;\n\theight: 10px;\n\twidth: 100%;\n\t-webkit-transform: translateY(-50%);\n\t    -ms-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\tz-index: 6;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n.prog_bar {\n\tbackground: #4e7fc6;\n\twidth: 0;\n\theight: 100%;\n\t// transition: width 200ms linear;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "AudioClipper-root-21Bv1",
	"container": "AudioClipper-container-3NqJ4",
	"controls": "AudioClipper-controls-2FJM5",
	"button": "AudioClipper-button-1yGsq",
	"play": "AudioClipper-play-EEdVZ",
	"pause": "AudioClipper-pause-3Chqw",
	"reset": "AudioClipper-reset-2KgTZ",
	"track": "AudioClipper-track-34A6e",
	"selections": "AudioClipper-selections-2F3kw",
	"left": "AudioClipper-left-3zVO3",
	"current": "AudioClipper-current-mSd4p",
	"right": "AudioClipper-right-2APj3",
	"sel_bar": "AudioClipper-sel_bar-3M2Db",
	"hover": "AudioClipper-hover-3iM1z",
	"progress": "AudioClipper-progress-eVDYJ",
	"prog_bar": "AudioClipper-prog_bar-1Of00"
};

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_actions_runtime__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dropzone__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__arrow_svg__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Import_css__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Import_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Import_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/Import/Import.js';













class Import extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      files: []
    };
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_dropzone___default.a,
          {
            className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.dropzone,
            accept: 'audio/*',
            activeClassName: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.active,
            rejectClassName: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.reject,
            onDrop: (accept, reject) => {
              this.handleDrop(accept);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.border, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.text, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'svg',
                { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.arrow, 'data-name': 'Layer 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 23 31', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'title',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  'arrow'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('polyline', { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.line, points: '1.5 19.5 11.5 29.5 21.5 19.5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('line', { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.line, x1: '11.5', y1: '29.5', x2: '11.5', y2: '1.5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.upload, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                'Click to Upload Files'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.drag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                },
                'or drag folder'
              )
            )
          )
        ),
        this.state.files.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__Import_css___default.a.confirmation, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          'Files Added'
        )
      )
    );
  }

  handleDrop(files) {
    if (!files || files.length < 1) alert("Filetype Not Supported\nAudio File Required");else this.parseFiles(files).then(files => {
      this.props.addExamples({ examples: files });
    });
  }

  parseFiles(files) {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const audio = new Audio(file.preview);
        audio.addEventListener('loadedmetadata', () => {
          resolve(this.props.createExample(file.name, file.preview, file.type, file, audio.duration * 1000));
        });
      });
    }));
  }
}

const mapDispatch = dispatch => __WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"]({
  addExamples: __WEBPACK_IMPORTED_MODULE_5_components_actions_runtime__["a" /* addExamples */]
}, dispatch);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"](null, mapDispatch)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_8__Import_css___default.a)(Import)));

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "/assets/src/components/Classify/Import/arrow.svg?c792e86d";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(123);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Import.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Import.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Import-root-1r98K {\n\twidth: 100%;\n\theight: 100%;\n  position: relative;\n  text-transform: uppercase;\n}\n.Import-container-tLQme {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n  /* z-index: 1; */\n}\n.Import-line-1UYg7 {\n\tfill:none;\n\tstroke:#222;\n\tstroke-linecap:round;\n\tstroke-linejoin:round;\n\tstroke-width:3px;\n  -webkit-transition: stroke 0.25s ease;\n  -o-transition: stroke 0.25s ease;\n  transition: stroke 0.25s ease;\n}\n.Import-dropzone-oh_Lh {\n\tposition: relative;\n  -webkit-transition: color 0.25s ease, background 0.25s ease;\n  -o-transition: color 0.25s ease, background 0.25s ease;\n  transition: color 0.25s ease, background 0.25s ease;\n  width: 100%;\n  height: 100%\n}\n.Import-dropzone-oh_Lh.Import-active-27qj7 {\n  background: #9fdd5e;\n  color: #fff;\n}\n.Import-dropzone-oh_Lh.Import-active-27qj7 .Import-line-1UYg7 {\n\t\t\tstroke: #fff;\n}\n.Import-dropzone-oh_Lh.Import-active-27qj7 .Import-border-2hgY9 {\n\t\t\tborder-color: #fff;\n}\n.Import-dropzone-oh_Lh.Import-active-27qj7 .Import-arrow-3BERj {\n\t\t\t-webkit-animation: Import-MoveUpDown-2cZp- 1.25s ease infinite;\n\t\t\tanimation: Import-MoveUpDown-2cZp- 1.25s ease infinite;\n}\n.Import-dropzone-oh_Lh.Import-reject-bu3_L {\n  background: #e64;\n  color: #fff;\n}\n.Import-dropzone-oh_Lh.Import-reject-bu3_L .Import-line-1UYg7 {\n\t\t\tstroke: #fff;\n}\n.Import-dropzone-oh_Lh.Import-reject-bu3_L .Import-border-2hgY9 {\n\t\t\tborder-color: #fff;\n}\n@-webkit-keyframes Import-MoveUpDown-2cZp- {\n  0% {\n    bottom: 0;\n  }\n  50% {\n    bottom: 10px;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes Import-MoveUpDown-2cZp- {\n  0% {\n    bottom: 0;\n  }\n  50% {\n    bottom: 10px;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n.Import-border-2hgY9 {\n\tposition: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: calc(100% - 20px);\n\theight: calc(100% - 20px);\n\tborder: 2px dashed #222;\n\t-webkit-transition: border-color 0.25s ease;\n\t-o-transition: border-color 0.25s ease;\n\ttransition: border-color 0.25s ease;\n}\n.Import-text-u2bps {\n\tpointer-events: none;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t    -ms-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\tposition: absolute;\n\twidth: 90%;\n\ttext-align: center;\n}\n.Import-text-u2bps .Import-arrow-3BERj {\n\t\tposition: relative;\n\t\twidth: 26px;\n\t\tmargin-bottom: 3px;\n\t}\n.Import-text-u2bps .Import-upload-3m-w_ {\n\t\tfont-size: 16px;\n\t\tmargin: 3px 0;\n\t\tfont-weight: 400;\n\t}\n.Import-text-u2bps .Import-drag-jPl3A {\n\t\tfont-size: 15px;\n\t\tfont-weight: 700;\n\t\tmargin: 0;\n\t}\ninput {\n\tpointer-events: all;\n\topacity: 0.0;\n\tposition: absolute;\n\ttop:0;\n\tleft: 0;\n\tbottom: 0;\n\tright:0;\n\twidth: 100%;\n\theight:100%;\n\tdisplay: none;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Classify/Import/Import.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,YAAY;CACZ,aAAa;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;CACC,mBAAmB;CACnB,YAAY;CACZ,aAAa;EACZ,iBAAiB;CAClB;AACD;CACC,UAAU;CACV,YAAY;CACZ,qBAAqB;CACrB,sBAAsB;CACtB,iBAAiB;EAChB,sCAAsC;EACtC,iCAAiC;EACjC,8BAA8B;CAC/B;AACD;CACC,mBAAmB;EAClB,4DAA4D;EAC5D,uDAAuD;EACvD,oDAAoD;EACpD,YAAY;EACZ,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,YAAY;CACb;AACD;GACG,aAAa;CACf;AACD;GACG,mBAAmB;CACrB;AACD;GACG,+DAAkD;GAClD,uDAA0C;CAC5C;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;GACG,aAAa;CACf;AACD;GACG,mBAAmB;CACrB;AACD;EACE;IACE,UAAU;GACX;EACD;IACE,aAAa;GACd;EACD;IACE,UAAU;GACX;CACF;AACD;EACE;IACE,UAAU;GACX;EACD;IACE,aAAa;GACd;EACD;IACE,UAAU;GACX;CACF;AACD;CACC,mBAAmB;EAClB,SAAS;EACT,UAAU;EACV,yCAAyC;MACrC,qCAAqC;UACjC,iCAAiC;EACzC,yBAAyB;CAC1B,0BAA0B;CAC1B,wBAAwB;CACxB,4CAA4C;CAC5C,uCAAuC;CACvC,oCAAoC;CACpC;AACD;CACC,qBAAqB;CACrB,SAAS;CACT,UAAU;CACV,yCAAyC;KACrC,qCAAqC;SACjC,iCAAiC;CACzC,mBAAmB;CACnB,WAAW;CACX,mBAAmB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB;AACF;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB;AACF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV;AACF;CACC,oBAAoB;CACpB,aAAa;CACb,mBAAmB;CACnB,MAAM;CACN,QAAQ;CACR,UAAU;CACV,QAAQ;CACR,YAAY;CACZ,YAAY;CACZ,cAAc;CACd","file":"Import.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\twidth: 100%;\n\theight: 100%;\n  position: relative;\n  text-transform: uppercase;\n}\n.container {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n  /* z-index: 1; */\n}\n.line {\n\tfill:none;\n\tstroke:#222;\n\tstroke-linecap:round;\n\tstroke-linejoin:round;\n\tstroke-width:3px;\n  -webkit-transition: stroke 0.25s ease;\n  -o-transition: stroke 0.25s ease;\n  transition: stroke 0.25s ease;\n}\n.dropzone {\n\tposition: relative;\n  -webkit-transition: color 0.25s ease, background 0.25s ease;\n  -o-transition: color 0.25s ease, background 0.25s ease;\n  transition: color 0.25s ease, background 0.25s ease;\n  width: 100%;\n  height: 100%\n}\n.dropzone.active {\n  background: #9fdd5e;\n  color: #fff;\n}\n.dropzone.active .line {\n\t\t\tstroke: #fff;\n}\n.dropzone.active .border {\n\t\t\tborder-color: #fff;\n}\n.dropzone.active .arrow {\n\t\t\t-webkit-animation: MoveUpDown 1.25s ease infinite;\n\t\t\tanimation: MoveUpDown 1.25s ease infinite;\n}\n.dropzone.reject {\n  background: #e64;\n  color: #fff;\n}\n.dropzone.reject .line {\n\t\t\tstroke: #fff;\n}\n.dropzone.reject .border {\n\t\t\tborder-color: #fff;\n}\n@-webkit-keyframes MoveUpDown {\n  0% {\n    bottom: 0;\n  }\n  50% {\n    bottom: 10px;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes MoveUpDown {\n  0% {\n    bottom: 0;\n  }\n  50% {\n    bottom: 10px;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n.border {\n\tposition: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: calc(100% - 20px);\n\theight: calc(100% - 20px);\n\tborder: 2px dashed #222;\n\t-webkit-transition: border-color 0.25s ease;\n\t-o-transition: border-color 0.25s ease;\n\ttransition: border-color 0.25s ease;\n}\n.text {\n\tpointer-events: none;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t    -ms-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\tposition: absolute;\n\twidth: 90%;\n\ttext-align: center;\n}\n.text .arrow {\n\t\tposition: relative;\n\t\twidth: 26px;\n\t\tmargin-bottom: 3px;\n\t}\n.text .upload {\n\t\tfont-size: 16px;\n\t\tmargin: 3px 0;\n\t\tfont-weight: 400;\n\t}\n.text .drag {\n\t\tfont-size: 15px;\n\t\tfont-weight: 700;\n\t\tmargin: 0;\n\t}\ninput {\n\tpointer-events: all;\n\topacity: 0.0;\n\tposition: absolute;\n\ttop:0;\n\tleft: 0;\n\tbottom: 0;\n\tright:0;\n\twidth: 100%;\n\theight:100%;\n\tdisplay: none;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Import-root-1r98K",
	"container": "Import-container-tLQme",
	"line": "Import-line-1UYg7",
	"dropzone": "Import-dropzone-oh_Lh",
	"active": "Import-active-27qj7",
	"border": "Import-border-2hgY9",
	"arrow": "Import-arrow-3BERj",
	"MoveUpDown": "Import-MoveUpDown-2cZp-",
	"reject": "Import-reject-bu3_L",
	"text": "Import-text-u2bps",
	"upload": "Import-upload-3m-w_",
	"drag": "Import-drag-jPl3A"
};

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(126);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Classify.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Classify.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Classify-root-27zBq {\n\theight: calc(100vh - 70px);\n  padding-top: 10px;\n}\n.Classify-root-27zBq h3 {\n  \tfont-size: 17px;\n  }\n.Classify-root-27zBq h1 {\n  \tmargin: 0;\n\t\twrap: ellipsis;\n\t\twhite-space: nowrap;\n\t  overflow: hidden;\n\t  -o-text-overflow: ellipsis;\n\t     text-overflow: ellipsis;\n  }\n.Classify-container-uqe9W {\n\theight: 100%;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.Classify-upper-11OcJ {\n\n}\n.Classify-mid-fW7jV {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin-top: 15px;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n}\n.Classify-lower-b8khj {\n\t\n}\n.Classify-col-GImQI {\n\t/* -webkit-flex: 1;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\tflex: 1; */\n\tmargin-left: 20px\n}\n.Classify-import-gTNsA {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n\twidth: 200px;\n}\n.Classify-import-gTNsA .Classify-import_cont-1XAbt {\n\t\theight: 200px;\n\t}\n.Classify-queue-YGkpT {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.Classify-examples-2f1DP {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\toverflow-y: auto;\n}\n.Classify-example-51B_b {\n\tpadding: 5px 7px;\n\tcursor: pointer\n}\n.Classify-example-51B_b.Classify-selected-1AXC_ {\n  background: #9fdd5e;\n  color: rgb(57, 93, 20);\n}\n.Classify-example-51B_b:hover {\n  background: #222;\n  color: #fff;\n}\n.Classify-example-51B_b .Classify-example_name-2r5Hf {\n\t\tfont-size: 16px;\n\t\tmargin: 0;\n\t\twrap: ellipsis;\n\t\twhite-space: nowrap;\n\t  overflow: hidden;\n\t  -o-text-overflow: ellipsis;\n\t     text-overflow: ellipsis;\n\t  font-weight: 700;\n}\n.Classify-example-51B_b .Classify-example_length-3lwYP {\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 14px;\n}\n.Classify-submit-2TPi1 {\n\tbackground: #222;\n\tcolor: #fff;\n\tpadding: 20px;\n\ttext-align: center;\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tcursor: pointer\n}\n.Classify-submit-2TPi1:hover {\n  color: rgb(153, 67, 20);\n  background: #ed9e72;\n}\n.Classify-edit-1XHDs {\n\twidth: 50%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.Classify-entry_adder-1njCi {\n\tbackground: rgba(34, 34, 34, 0.2);\n\tpadding: 5px 7px;\n}\n.Classify-entries-3Gm5p {\n\tpadding: 5px 7px;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\toverflow-y: auto;\n}\n.Classify-data-qCfPw {\n\t/* margin-right: 20px */\n}\n.Classify-entries_cont-GVw_i {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/classify/Classify.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,2BAA2B;EAC1B,kBAAkB;CACnB;AACD;GACG,gBAAgB;GAChB;AACH;GACG,UAAU;EACX,eAAe;EACf,oBAAoB;GACnB,iBAAiB;GACjB,2BAA2B;MACxB,wBAAwB;GAC3B;AACH;CACC,aAAa;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf,sBAAsB;CACtB,qBAAqB;CACrB,6BAA6B;CAC7B,8BAA8B;SACtB,kBAAkB;CAC1B;AACD;;CAEC;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,iBAAiB;CACjB,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB;AACD;;CAEC;AACD;CACC;;;;YAIW;CACX,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,sBAAsB;CACtB,qBAAqB;CACrB,6BAA6B;CAC7B,8BAA8B;SACtB,kBAAkB;CAC1B,aAAa;CACb;AACD;EACE,cAAc;EACd;AACF;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,sBAAsB;CACtB,qBAAqB;CACrB,6BAA6B;CAC7B,8BAA8B;SACtB,kBAAkB;CAC1B;AACD;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,iBAAiB;CACjB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf;AACD;EACE,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,eAAe;EACf,oBAAoB;GACnB,iBAAiB;GACjB,2BAA2B;MACxB,wBAAwB;GAC3B,iBAAiB;CACnB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,cAAc;CACd,mBAAmB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf;AACD;EACE,wBAAwB;EACxB,oBAAoB;CACrB;AACD;CACC,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,sBAAsB;CACtB,qBAAqB;CACrB,6BAA6B;CAC7B,8BAA8B;SACtB,kBAAkB;CAC1B;AACD;CACC,kCAAkC;CAClC,iBAAiB;CACjB;AACD;CACC,iBAAiB;CACjB,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,iBAAiB;CACjB;AACD;CACC,wBAAwB;CACxB;AACD;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,sBAAsB;CACtB,qBAAqB;CACrB,6BAA6B;CAC7B,8BAA8B;SACtB,kBAAkB;CAC1B","file":"Classify.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\theight: calc(100vh - 70px);\n  padding-top: 10px;\n}\n.root h3 {\n  \tfont-size: 17px;\n  }\n.root h1 {\n  \tmargin: 0;\n\t\twrap: ellipsis;\n\t\twhite-space: nowrap;\n\t  overflow: hidden;\n\t  -o-text-overflow: ellipsis;\n\t     text-overflow: ellipsis;\n  }\n.container {\n\theight: 100%;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.upper {\n\n}\n.mid {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin-top: 15px;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n}\n.lower {\n\t\n}\n.col {\n\t/* -webkit-flex: 1;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\tflex: 1; */\n\tmargin-left: 20px\n}\n.import {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n\twidth: 200px;\n}\n.import .import_cont {\n\t\theight: 200px;\n\t}\n.queue {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.examples {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\toverflow-y: auto;\n}\n.example {\n\tpadding: 5px 7px;\n\tcursor: pointer\n}\n.example.selected {\n  background: #9fdd5e;\n  color: rgb(57, 93, 20);\n}\n.example:hover {\n  background: #222;\n  color: #fff;\n}\n.example .example_name {\n\t\tfont-size: 16px;\n\t\tmargin: 0;\n\t\twrap: ellipsis;\n\t\twhite-space: nowrap;\n\t  overflow: hidden;\n\t  -o-text-overflow: ellipsis;\n\t     text-overflow: ellipsis;\n\t  font-weight: 700;\n}\n.example .example_length {\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 14px;\n}\n.submit {\n\tbackground: #222;\n\tcolor: #fff;\n\tpadding: 20px;\n\ttext-align: center;\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tcursor: pointer\n}\n.submit:hover {\n  color: rgb(153, 67, 20);\n  background: #ed9e72;\n}\n.edit {\n\twidth: 50%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}\n.entry_adder {\n\tbackground: rgba(34, 34, 34, 0.2);\n\tpadding: 5px 7px;\n}\n.entries {\n\tpadding: 5px 7px;\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\toverflow-y: auto;\n}\n.data {\n\t/* margin-right: 20px */\n}\n.entries_cont {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: column;\n\t-o-flex-flow: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-flow: column;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Classify-root-27zBq",
	"container": "Classify-container-uqe9W",
	"upper": "Classify-upper-11OcJ",
	"mid": "Classify-mid-fW7jV",
	"lower": "Classify-lower-b8khj",
	"col": "Classify-col-GImQI",
	"import": "Classify-import-gTNsA",
	"import_cont": "Classify-import_cont-1XAbt",
	"queue": "Classify-queue-YGkpT",
	"examples": "Classify-examples-2f1DP",
	"example": "Classify-example-51B_b",
	"selected": "Classify-selected-1AXC_",
	"example_name": "Classify-example_name-2r5Hf",
	"example_length": "Classify-example_length-3lwYP",
	"submit": "Classify-submit-2TPi1",
	"edit": "Classify-edit-1XHDs",
	"entry_adder": "Classify-entry_adder-1njCi",
	"entries": "Classify-entries-3Gm5p",
	"data": "Classify-data-qCfPw",
	"entries_cont": "Classify-entries_cont-GVw_i"
};

/***/ })
]);;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NsYXNzaWZ5LmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9yb3V0ZXMvY2xhc3NpZnkvaW5kZXguanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2hpc3RvcnkuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzPzU2NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz9kMTMxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzM0OTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3M/ODFkYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzkxODkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz81YzlhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzPzQ0ODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3M/ODhhZiIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9hZGQuc3ZnIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvYWRkLWhvdmVyLnN2ZyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2RlbC5zdmciLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzPzVkZGYiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9lZGl0LnN2ZyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2VkaXQtaG92ZXIuc3ZnIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeS9FbnRyeS5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvRGF0YVdpbmRvdy9EYXRhV2luZG93LmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9EYXRhV2luZG93L0RhdGFXaW5kb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RhdGFXaW5kb3cvRGF0YVdpbmRvdy5jc3M/NDM2ZiIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvRW50cnkvRW50cnkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0VudHJ5L0VudHJ5LmNzcz9hYjYzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZG9uZS5zdmciLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kb25lLWhvdmVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcz80ZGNkIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL3JvdXRlcy9jbGFzc2lmeS9jbGFzc2lmeS5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvQXVkaW9DbGlwcGVyL0F1ZGlvQ2xpcHBlci5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvQXVkaW9DbGlwcGVyL0F1ZGlvQ2xpcHBlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvQXVkaW9DbGlwcGVyL0F1ZGlvQ2xpcHBlci5jc3M/NWRkOSIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L0ltcG9ydC5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L2Fycm93LnN2ZyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L0ltcG9ydC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L0ltcG9ydC5jc3M/ZWFkYSIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL3JvdXRlcy9jbGFzc2lmeS9DbGFzc2lmeS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jbGFzc2lmeS9DbGFzc2lmeS5jc3M/YTkzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xhc3NpZnkgZnJvbSAnLi9jbGFzc2lmeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydjbGFzc2lmeSddLFxuICAgIHRpdGxlOiAnQ2xhc3NVSScsXG4gICAgY29tcG9uZW50OiA8TGF5b3V0PjxDbGFzc2lmeS8+PC9MYXlvdXQ+LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9jbGFzc2lmeS9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogbnVsbCxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8YSBocmVmPXt0b30gey4uLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57Y2hpbGRyZW59PC9hPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0IHMgZnJvbSAnLi9MYXlvdXQuY3NzJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250ZW50fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhub3JtYWxpemVDc3MsIHMpKExheW91dCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9OYXZpZ2F0aW9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5jc3MnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfSB0bz1cIi9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVHh0fT5DbGFzc1VJPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkb3JubWVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnllbGxvd30+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yYW5nZX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRncmVlbn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxncmVlbn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRibHVlfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JztcblxuLy8gTmF2aWdhdGlvbiBtYW5hZ2VyLCBlLmcuIGhpc3RvcnkucHVzaCgnL2hvbWUnKVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21qYWNrc29uL2hpc3RvcnlcbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52LkJST1dTRVIgJiYgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaGlzdG9yeS5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vTmF2aWdhdGlvbi5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9cIj5DbGFzc2lmeTwvTGluaz5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9IHRvPVwiL3R5cGVzXCI+VHlwZXM8L0xpbms+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9tb2RlbFwiPk1vZGVsPC9MaW5rPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT4gfCA8L3NwYW4+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9sb2dpblwiPkxvZyBpbjwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+b3I8L3NwYW4+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y3gocy5saW5rLCBzLmhpZ2hsaWdodCl9IHRvPVwiL3JlZ2lzdGVyXCI+U2lnbiB1cDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShOYXZpZ2F0aW9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL05hdmlnYXRpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL05hdmlnYXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTmF2aWdhdGlvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4uTmF2aWdhdGlvbi1yb290LTJnY0p4IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLk5hdmlnYXRpb24tc3BhY2VyLTN2WlZHIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUIsQ0FBQyxXQUFXO0NBQ2hDOztBQUVEOzs7RUFHRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtDQUNiOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsZ0NBQWdDO0NBQ2pDXCIsXCJmaWxlXCI6XCJOYXZpZ2F0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi5yb290IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5saW5rLFxcbi5saW5rOmFjdGl2ZSxcXG4ubGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uLXJvb3QtMmdjSnhcIixcblx0XCJsaW5rXCI6IFwiTmF2aWdhdGlvbi1saW5rLU50bDM1XCIsXG5cdFwiaGlnaGxpZ2h0XCI6IFwiTmF2aWdhdGlvbi1oaWdobGlnaHQtMlVObHFcIixcblx0XCJzcGFjZXJcIjogXCJOYXZpZ2F0aW9uLXNwYWNlci0zdlpWR1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkhlYWRlci1yb290LU85b1c5IHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uSGVhZGVyLWNvbnRhaW5lci1xUTJtRiB7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcbi5IZWFkZXItYnJhbmQtMm9TX3kge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcbi5IZWFkZXItYnJhbmRUeHQtMjMwYUgge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5IZWFkZXItYWRvcm5tZW50LTI5cVNRIHtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLkhlYWRlci15ZWxsb3cteDlRcTkge1xcbiAgYmFja2dyb3VuZDogI2YyY2E3MDtcXG4gIC1tb3otZmxleDogNTtcXG4gIC1tcy1mbGV4OiA1O1xcbiAgLW8tZmxleDogNTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLkhlYWRlci1vcmFuZ2UtMWUzS057XFxuICBiYWNrZ3JvdW5kOiAjZWQ5ZTcyO1xcbiAgLW1vei1mbGV4OiAxO1xcbiAgLW1zLWZsZXg6IDE7XFxuICAtby1mbGV4OiAxO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMSAxIDAlO1xcbn1cXG4uSGVhZGVyLWRncmVlbi1DSEtrOXtcXG4gIGJhY2tncm91bmQ6ICM5ZmRkNWU7XFxuICAtbW96LWZsZXg6IDE0O1xcbiAgLW1zLWZsZXg6IDE0O1xcbiAgLW8tZmxleDogMTQ7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxNDtcXG4gICAgICAgICAgZmxleDogMTQgMSAwJTtcXG59XFxuLkhlYWRlci1sZ3JlZW4tZndqbUV7XFxuICBiYWNrZ3JvdW5kOiAjY2FlZDcyO1xcbiAgLW1vei1mbGV4OiA1O1xcbiAgLW1zLWZsZXg6IDU7XFxuICAtby1mbGV4OiA1O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogNTtcXG4gICAgICAgICAgZmxleDogNSAxIDAlO1xcbn1cXG4uSGVhZGVyLWRibHVlLTJveGxte1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG4gIC1tb3otZmxleDogMTA7XFxuICAtbXMtZmxleDogMTA7XFxuICAtby1mbGV4OiAxMDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDEwO1xcbiAgICAgICAgICBmbGV4OiAxMCAxIDAlO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtVQUNaLGFBQWE7Q0FDdEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7VUFDWixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO1VBQ2IsY0FBYztDQUN2QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtVQUNaLGFBQWE7Q0FDdEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7VUFDYixjQUFjO0NBQ3ZCXCIsXCJmaWxlXCI6XCJIZWFkZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuLmJyYW5kIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uYnJhbmRUeHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5hZG9ybm1lbnQge1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQ6ICNmMmNhNzA7XFxuICAtbW96LWZsZXg6IDU7XFxuICAtbXMtZmxleDogNTtcXG4gIC1vLWZsZXg6IDU7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgICAgICBmbGV4OiA1IDEgMCU7XFxufVxcbi5vcmFuZ2V7XFxuICBiYWNrZ3JvdW5kOiAjZWQ5ZTcyO1xcbiAgLW1vei1mbGV4OiAxO1xcbiAgLW1zLWZsZXg6IDE7XFxuICAtby1mbGV4OiAxO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMSAxIDAlO1xcbn1cXG4uZGdyZWVue1xcbiAgYmFja2dyb3VuZDogIzlmZGQ1ZTtcXG4gIC1tb3otZmxleDogMTQ7XFxuICAtbXMtZmxleDogMTQ7XFxuICAtby1mbGV4OiAxNDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE0O1xcbiAgICAgICAgICBmbGV4OiAxNCAxIDAlO1xcbn1cXG4ubGdyZWVue1xcbiAgYmFja2dyb3VuZDogI2NhZWQ3MjtcXG4gIC1tb3otZmxleDogNTtcXG4gIC1tcy1mbGV4OiA1O1xcbiAgLW8tZmxleDogNTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLmRibHVle1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG4gIC1tb3otZmxleDogMTA7XFxuICAtbXMtZmxleDogMTA7XFxuICAtby1mbGV4OiAxMDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDEwO1xcbiAgICAgICAgICBmbGV4OiAxMCAxIDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkhlYWRlci1yb290LU85b1c5XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyLWNvbnRhaW5lci1xUTJtRlwiLFxuXHRcImJyYW5kXCI6IFwiSGVhZGVyLWJyYW5kLTJvU195XCIsXG5cdFwiYnJhbmRUeHRcIjogXCJIZWFkZXItYnJhbmRUeHQtMjMwYUhcIixcblx0XCJhZG9ybm1lbnRcIjogXCJIZWFkZXItYWRvcm5tZW50LTI5cVNRXCIsXG5cdFwieWVsbG93XCI6IFwiSGVhZGVyLXllbGxvdy14OVFxOVwiLFxuXHRcIm9yYW5nZVwiOiBcIkhlYWRlci1vcmFuZ2UtMWUzS05cIixcblx0XCJkZ3JlZW5cIjogXCJIZWFkZXItZGdyZWVuLUNIS2s5XCIsXG5cdFwibGdyZWVuXCI6IFwiSGVhZGVyLWxncmVlbi1md2ptRVwiLFxuXHRcImRibHVlXCI6IFwiSGVhZGVyLWRibHVlLTJveGxtXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxcbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mIGBib2xkZXJgIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMsIC8qIDEgKi9cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5jYW52YXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRkZW5cXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRFQUE0RTs7QUFFNUU7Z0ZBQ2dGOztBQUVoRjs7OztHQUlHOztBQUVIO0VBQ0Usa0JBQWtCLENBQUMsT0FBTztFQUMxQiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLCtCQUErQixDQUFDLE9BQU87Q0FDeEM7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDs7R0FFRzs7QUFFSDs7Ozs7O0VBTUUsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOztPQUVPLE9BQU87RUFDWixlQUFlO0NBQ2hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0IsQ0FBQyxPQUFPO0VBQ3hDLFVBQVUsQ0FBQyxPQUFPO0VBQ2xCLGtCQUFrQixDQUFDLE9BQU87Q0FDM0I7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usa0NBQWtDLENBQUMsT0FBTztFQUMxQyxlQUFlLENBQUMsT0FBTztDQUN4Qjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDtFQUNFLDhCQUE4QixDQUFDLE9BQU87RUFDdEMsc0NBQXNDLENBQUMsT0FBTztDQUMvQzs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxvQkFBb0IsQ0FBQyxPQUFPO0VBQzVCLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsMENBQTBDO1VBQ2xDLGtDQUFrQyxDQUFDLE9BQU87Q0FDbkQ7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUscUJBQXFCO0NBQ3RCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLG9CQUFvQjtDQUNyQjs7QUFFRDs7O0dBR0c7O0FBRUg7OztFQUdFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7O0VBRUUsc0JBQXNCO0NBQ3ZCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFVBQVU7Q0FDWDs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7Ozs7RUFLRSx3QkFBd0IsQ0FBQyxPQUFPO0VBQ2hDLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsa0JBQWtCLENBQUMsT0FBTztFQUMxQixVQUFVLENBQUMsT0FBTztDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7UUFDUSxPQUFPO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtTQUNTLE9BQU87RUFDZCxxQkFBcUI7Q0FDdEI7O0FBRUQ7Ozs7R0FJRzs7QUFFSDs7OztFQUlFLDJCQUEyQixDQUFDLE9BQU87Q0FDcEM7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsK0JBQStCO0NBQ2hDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QixDQUFDLE9BQU87RUFDdkMsZUFBZSxDQUFDLE9BQU87RUFDdkIsZUFBZSxDQUFDLE9BQU87RUFDdkIsZ0JBQWdCLENBQUMsT0FBTztFQUN4QixXQUFXLENBQUMsT0FBTztFQUNuQixvQkFBb0IsQ0FBQyxPQUFPO0NBQzdCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLHNCQUFzQixDQUFDLE9BQU87RUFDOUIseUJBQXlCLENBQUMsT0FBTztDQUNsQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLCtCQUErQjtVQUN2Qix1QkFBdUIsQ0FBQyxPQUFPO0VBQ3ZDLFdBQVcsQ0FBQyxPQUFPO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLGFBQWE7Q0FDZDs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHFCQUFxQixDQUFDLE9BQU87Q0FDOUI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUseUJBQXlCO0NBQzFCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsY0FBYyxDQUFDLE9BQU87Q0FDdkI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O0VBRUUsZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0NBQ2ZcIixcImZpbGVcIjpcIm5vcm1hbGl6ZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxcbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mIGBib2xkZXJgIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMsIC8qIDEgKi9cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5jYW52YXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRkZW5cXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJzb3VyY2VNYXBcIjp0cnVlLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTGF5b3V0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi8qXFxuICogbm9ybWFsaXplLmNzcyBpcyBpbXBvcnRlZCBpbiBKUyBmaWxlLlxcbiAqIElmIHlvdSBpbXBvcnQgZXh0ZXJuYWwgQ1NTIGZpbGUgZnJvbSB5b3VyIGludGVybmFsIENTU1xcbiAqIHRoZW4gaXQgd2lsbCBiZSBpbmxpbmVkIGFuZCBwcm9jZXNzZWQgd2l0aCBDU1MgbW9kdWxlcy5cXG4gKi9cXG4uTGF5b3V0LWNvbnRlbnQtY2lON3Ige1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi8qXFxuICogQmFzZSBzdHlsZXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmh0bWwge1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxZW07IC8qIH4xNnB4OyAqL1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1OyAvKiB+MjJweCAqL1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbmEge1xcbiAgY29sb3I6ICMwMDc0YzI7XFxufVxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjcpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxcbiAqIGh0dHBzOi8vdHdpdHRlci5jb20vbWlrZXRheWxyL3N0YXR1cy8xMjIyODgwNTMwMVxcbiAqXFxuICogVGhlc2Ugc2VsZWN0aW9uIHJ1bGUgc2V0cyBoYXZlIHRvIGJlIHNlcGFyYXRlLlxcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cXG4gKi9cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG4vKlxcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcXG4gKi9cXG5ociB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGhlIGdhcCBiZXR3ZWVuIGF1ZGlvLCBjYW52YXMsIGlmcmFtZXMsXFxuICogaW1hZ2VzLCB2aWRlb3MgYW5kIHRoZSBib3R0b20gb2YgdGhlaXIgY29udGFpbmVyczpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvNDQwXFxuICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbmlmcmFtZSxcXG5pbWcsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi8qXFxuICogUmVtb3ZlIGRlZmF1bHQgZmllbGRzZXQgc3R5bGVzLlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXFxuICovXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuLypcXG4gKiBCcm93c2VyIHVwZ3JhZGUgcHJvbXB0XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYnJvd3NlcnVwZ3JhZGUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuLypcXG4gKiBQcmludCBzdHlsZXNcXG4gKiBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDpcXG4gKiBodHRwOi8vd3d3LnBocGllZC5jb20vZGVsYXktbG9hZGluZy15b3VyLXByaW50LWNzcy9cXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBtZWRpYSBwcmludCB7XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvKiBCbGFjayBwcmludHMgZmFzdGVyOiBodHRwOi8vd3d3LnNhbmJlaWppLmNvbS9hcmNoaXZlcy85NTMgKi9cXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgYSxcXG4gIGE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcblxcbiAgYVtocmVmXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIoaHJlZikgJyknO1xcbiAgfVxcblxcbiAgYWJiclt0aXRsZV06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOjphZnRlcixcXG4gIGFbaHJlZl49J2phdmFzY3JpcHQ6J106OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuXFxuICBwcmUsXFxuICBibG9ja3F1b3RlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIFByaW50aW5nIFRhYmxlczpcXG4gICAqIGh0dHA6Ly9jc3MtZGlzY3Vzcy5pbmN1dGlvLmNvbS93aWtpL1ByaW50aW5nX1RhYmxlc1xcbiAgICovXFxuXFxuICB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gIH1cXG5cXG4gIHRyLFxcbiAgaW1nIHtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBwLFxcbiAgaDIsXFxuICBoMyB7XFxuICAgIG9ycGhhbnM6IDM7XFxuICAgIHdpZG93czogMztcXG4gIH1cXG5cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcXG4gIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Ozs7R0FJRztBQUNIO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjtBQUNEOztnRkFFZ0Y7QUFDaEY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsQ0FBQyxZQUFZO0VBQzVCLDBEQUEwRDtFQUMxRCxtQkFBbUIsQ0FBQyxXQUFXO0NBQ2hDO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFVBQVU7Q0FDWDtBQUNEOzs7Ozs7R0FNRztBQUNIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjtBQUNEOzs7O0dBSUc7QUFDSDs7Ozs7O0VBTUUsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztDQUNaO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEOztnRkFFZ0Y7QUFDaEY7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDs7OztnRkFJZ0Y7QUFDaEY7RUFDRTs7O0lBR0UsbUNBQW1DO0lBQ25DLHVCQUF1QixDQUFDLCtEQUErRDtJQUN2RixvQ0FBb0M7WUFDNUIsNEJBQTRCO0lBQ3BDLDZCQUE2QjtHQUM5Qjs7RUFFRDs7SUFFRSwyQkFBMkI7R0FDNUI7O0VBRUQ7SUFDRSw2QkFBNkI7R0FDOUI7O0VBRUQ7SUFDRSw4QkFBOEI7R0FDL0I7O0VBRUQ7OztLQUdHOztFQUVIOztJQUVFLFlBQVk7R0FDYjs7RUFFRDs7SUFFRSx1QkFBdUI7SUFDdkIseUJBQXlCO0dBQzFCOztFQUVEOzs7S0FHRzs7RUFFSDtJQUNFLDRCQUE0QjtHQUM3Qjs7RUFFRDs7SUFFRSx5QkFBeUI7R0FDMUI7O0VBRUQ7SUFDRSwyQkFBMkI7R0FDNUI7O0VBRUQ7OztJQUdFLFdBQVc7SUFDWCxVQUFVO0dBQ1g7O0VBRUQ7O0lBRUUsd0JBQXdCO0dBQ3pCO0NBQ0ZcIixcImZpbGVcIjpcIkxheW91dC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLypcXG4gKiBub3JtYWxpemUuY3NzIGlzIGltcG9ydGVkIGluIEpTIGZpbGUuXFxuICogSWYgeW91IGltcG9ydCBleHRlcm5hbCBDU1MgZmlsZSBmcm9tIHlvdXIgaW50ZXJuYWwgQ1NTXFxuICogdGhlbiBpdCB3aWxsIGJlIGlubGluZWQgYW5kIHByb2Nlc3NlZCB3aXRoIENTUyBtb2R1bGVzLlxcbiAqL1xcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4vKlxcbiAqIEJhc2Ugc3R5bGVzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5odG1sIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiB+MTZweDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjMDA3NGMyO1xcbn1cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5oMyB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC43KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuOmdsb2JhbCguYnJvd3NlcnVwZ3JhZGUpIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiTGF5b3V0LWNvbnRlbnQtY2lON3JcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBJbXBvcnQgQ29tcG9uZW50c1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRHJvcGRvd24uY3NzJztcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd19vcHRpb25zOiBmYWxzZSxcblx0XHRcdG9wdGlvbnNfaG92ZXI6IGZhbHNlLFxuXHRcdH1cbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IHNob3dfb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID4gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnJvb3QsIHtbc3R5bGVzLmFsdF06IHRoaXMucHJvcHMuYWx0fSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxuXHRcdFx0XHRcdDxkaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19vcHRpb25zOiB0cnVlfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5vcHRpb25zX2hvdmVyKSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfb3B0aW9uczogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGVkfT57dGhpcy5wcm9wcy5zZWxlY3RlZCA/IHRoaXMucHJvcHMuc2VsZWN0ZWQgOiAodGhpcy5wcm9wcy5vcHRpb25zID8gdGhpcy5wcm9wcy5vcHRpb25zWzBdIDogdW5kZWZpbmVkKX08L3NwYW4+XG5cdFx0XHRcdFx0XHR7c2hvd19vcHRpb25zICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT48L3NwYW4+fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtzaG93X29wdGlvbnMgJiYgPGRpdiBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMub3B0aW9ucyl9XG5cdFx0XHRcdFx0XHRzdHlsZT17e2hlaWdodDogdGhpcy5zdGF0ZS5zaG93X29wdGlvbnMgPyAoKHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggKyAxKSAqIDIyKSArICdweCcgOiAwIC8qVE9ETyBDT1JSRUNUIFZBTFVFKi99fVxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXt0aGlzLm9wdGlvbnNNb3VzZUxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaG92ZXI6IHRydWV9KTtcbiAgICAgICAgICAgIH19Pnt0aGlzLmdldE9wdGlvbnMoKX08L2Rpdj59XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgb3B0aW9uc01vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19ob3ZlcjogZmFsc2V9KTtcbiAgXHR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dfb3B0aW9uczogZmFsc2V9KVxuXHRcdH0sIDI1MCk7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICBcdGlmICghdGhpcy5wcm9wcy5vcHRpb25zKSByZXR1cm47XG4gIFx0Y29uc3QgYXJyID0gdGhpcy5wcm9wcy5vcHRpb25zLnNsaWNlKCk7XG4gIFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZCkgYXJyLnVuc2hpZnQodGhpcy5wcm9wcy5zZWxlY3RlZCk7XG4gICAgZWxzZSBhcnIudW5zaGlmdChhcnJbMF0pO1xuICBcdHJldHVybiBhcnIubWFwKChvcHRpb24sIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259IHN0eWxlPXtpbmRleCA9PT0gMCA/IHtvcGFjaXR5OiAwLjd9IDogdW5kZWZpbmVkfSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vblNlbGVjdChvcHRpb24pfX0+e29wdGlvbn08L2Rpdj5cblx0XHQpO1xuICB9XG5cbiAgb25TZWxlY3QodmFsdWUpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtzaG93X29wdGlvbnM6IGZhbHNlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19ob3ZlcjogZmFsc2V9KTtcbiAgXHR0aGlzLnByb3BzLm9uU2VsZWN0KHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoRHJvcGRvd24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCc/JTNFICUzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0lM0UgJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UgJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOm5vbmU7c3Ryb2tlOiUyMzIyMjIyMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDslN0QgJTNDL3N0eWxlJTNFICUzQ3RpdGxlJTNFYWRkJTNDL3RpdGxlJTNFICUzQ2xpbmUgY2xhc3M9J3N0MCcgeDE9JzE3JyB5MT0nMTInIHgyPSc3JyB5Mj0nMTInLyUzRSAlM0NsaW5lIGNsYXNzPSdzdDAnIHgxPScxMicgeTE9JzE3JyB4Mj0nMTInIHkyPSc3Jy8lM0UgJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2FkZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J3V0Zi04Jz8lM0UgJTNDIS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjEuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAtLSUzRSAlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7JyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSAlM0NzdHlsZSB0eXBlPSd0ZXh0L2NzcyclM0UgLnN0MCU3QmZpbGw6bm9uZTtzdHJva2U6JTIzRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyU3RCAlM0Mvc3R5bGUlM0UgJTNDdGl0bGUlM0VhZGQtaG92ZXIlM0MvdGl0bGUlM0UgJTNDbGluZSBjbGFzcz0nc3QwJyB4MT0nMTcnIHkxPScxMicgeDI9JzcnIHkyPScxMicvJTNFICUzQ2xpbmUgY2xhc3M9J3N0MCcgeDE9JzEyJyB5MT0nMTcnIHgyPScxMicgeTI9JzcnLyUzRSAlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvYWRkLWhvdmVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBpZD0nTGF5ZXJfMScgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM0UlM0NkZWZzJTNFJTNDc3R5bGUlM0UuY2xzLTElN0JmaWxsOm5vbmU7c3Ryb2tlOiUyMzIyMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4OyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VkZWwlM0MvdGl0bGUlM0UlM0NsaW5lIGNsYXNzPSdjbHMtMScgeDE9JzE1JyB5MT0nMTAnIHgyPSc1JyB5Mj0nMTAnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kZWwuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGlkPSdMYXllcl8xJyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5jbHMtMSU3QmZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7JTdEJTNDL3N0eWxlJTNFJTNDL2RlZnMlM0UlM0N0aXRsZSUzRWRlbC1ob3ZlciUzQy90aXRsZSUzRSUzQ2xpbmUgY2xhc3M9J2Nscy0xJyB4MT0nMTUnIHkxPScxMCcgeDI9JzUnIHkyPScxMCcvJTNFJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2RlbC1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0Ryb3Bkb3duLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9Ecm9wZG93bi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9Ecm9wZG93bi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5Ecm9wZG93bi1yb290LTN0MDVaIHtcXG5cXHRsaW5lLWhlaWdodDogMjFweDtcXG5cXHRtYXgtd2lkdGg6IDEwMCVcXG59XFxuLkRyb3Bkb3duLXJvb3QtM3QwNVouRHJvcGRvd24tYWx0LVRuQ09GIC5Ecm9wZG93bi1hcnJvdy0yb3VkMDphZnRlciB7XFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XFxufVxcbi5Ecm9wZG93bi1yb290LTN0MDVaLkRyb3Bkb3duLWFsdC1UbkNPRiAuRHJvcGRvd24tb3B0aW9ucy0ya1UyXyB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRcXHRjb2xvcjogIzIyMjtcXG59XFxuLkRyb3Bkb3duLWNvbnRhaW5lci1tNDRUayB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtby11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5Ecm9wZG93bi1hcnJvdy0yb3VkMCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMHB4XFxufVxcbi5Ecm9wZG93bi1hcnJvdy0yb3VkMDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uRHJvcGRvd24tb3B0aW9ucy0ya1UyXyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJhY2tncm91bmQ6ICNkZGQ7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKC40NiwuMDQsLjA3LC45Myk7XFxuXFx0LW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKC40NiwuMDQsLjA3LC45Myk7XFxuXFx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKC40NiwuMDQsLjA3LC45Myk7XFxuXFx0ei1pbmRleDogNTA7XFxufVxcbi5Ecm9wZG93bi1vcHRpb24tOExka18ge1xcblxcdHBhZGRpbmc6IDFweCAxNXB4IDAgNXB4XFxufVxcbi5Ecm9wZG93bi1vcHRpb24tOExka186aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5NiwgMTk2LCAxOTYpXFxufVxcbi5Ecm9wZG93bi1zZWxlY3QtMXJrM3kge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5Ecm9wZG93bi1zZWxlY3RlZC1UN3VzMSB7IFxcblxcdG1heC13aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XFxuXFx0bWFyZ2luOiAwIDVweDtcXG5cXHRwYWRkaW5nLXRvcDogMXB4O1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmO0FBQ0Q7R0FDRyxzREFBc0Q7Q0FDeEQ7QUFDRDtHQUNHLGlCQUFpQjtHQUNqQixZQUFZO0NBQ2Q7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWDtBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YseUNBQXlDO01BQ3JDLHFDQUFxQztVQUNqQyxpQ0FBaUM7RUFDekMsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix1REFBdUQ7Q0FDeEQ7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsOERBQThEO0NBQzlELHlEQUF5RDtDQUN6RCxzREFBc0Q7Q0FDdEQsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtFQUNFLDhCQUE4QjtDQUMvQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2Q7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLG9CQUFvQjtFQUNuQixpQkFBaUI7RUFDakIsMkJBQTJCO0tBQ3hCLHdCQUF3QjtDQUM1QlwiLFwiZmlsZVwiOlwiRHJvcGRvd24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuXFx0bGluZS1oZWlnaHQ6IDIxcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlXFxufVxcbi5yb290LmFsdCAuYXJyb3c6YWZ0ZXIge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbn1cXG4ucm9vdC5hbHQgLm9wdGlvbnMge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0Y29sb3I6ICMyMjI7XFxufVxcbi5jb250YWluZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uYXJyb3cge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTBweFxcbn1cXG4uYXJyb3c6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLm9wdGlvbnMge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZGRkO1xcblxcdGhlaWdodDogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHotaW5kZXg6IDUwO1xcbn1cXG4ub3B0aW9uIHtcXG5cXHRwYWRkaW5nOiAxcHggMTVweCAwIDVweFxcbn1cXG4ub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTYsIDE5NiwgMTk2KVxcbn1cXG4uc2VsZWN0IHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2VsZWN0ZWQgeyBcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcblxcdG1hcmdpbjogMCA1cHg7XFxuXFx0cGFkZGluZy10b3A6IDFweDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRHJvcGRvd24tcm9vdC0zdDA1WlwiLFxuXHRcImFsdFwiOiBcIkRyb3Bkb3duLWFsdC1UbkNPRlwiLFxuXHRcImFycm93XCI6IFwiRHJvcGRvd24tYXJyb3ctMm91ZDBcIixcblx0XCJvcHRpb25zXCI6IFwiRHJvcGRvd24tb3B0aW9ucy0ya1UyX1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkRyb3Bkb3duLWNvbnRhaW5lci1tNDRUa1wiLFxuXHRcIm9wdGlvblwiOiBcIkRyb3Bkb3duLW9wdGlvbi04TGRrX1wiLFxuXHRcInNlbGVjdFwiOiBcIkRyb3Bkb3duLXNlbGVjdC0xcmszeVwiLFxuXHRcInNlbGVjdGVkXCI6IFwiRHJvcGRvd24tc2VsZWN0ZWQtVDd1czFcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgaWQ9J0xheWVyXzEnIGRhdGEtbmFtZT0nTGF5ZXIgMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTNFLmNscy0xJTdCZmlsbDolMjMyMjI7JTdEJTNDL3N0eWxlJTNFJTNDL2RlZnMlM0UlM0N0aXRsZSUzRWVkaXQlM0MvdGl0bGUlM0UlM0NwYXRoIGNsYXNzPSdjbHMtMScgZD0nTTE0LjgyLDkuNDNsMS0xYTIuMzYsMi4zNiwwLDAsMCwwLTMuMzNsLS45MS0uOTFhMi4zNiwyLjM2LDAsMCwwLTMuMzMsMGwtMSwxWicvJTNFJTNDcG9seWdvbiBjbGFzcz0nY2xzLTEnIHBvaW50cz0nOS4xNiA2LjYgMy40OSAxMi4yNyAzLjQ5IDE2LjUxIDcuNzMgMTYuNTEgMTMuNCAxMC44NCA5LjE2IDYuNicvJTNFJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2VkaXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGlkPSdMYXllcl8xJyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5jbHMtMSU3QmZpbGw6JTIzZmZmOyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VlZGl0LWhvdmVyJTNDL3RpdGxlJTNFJTNDcGF0aCBjbGFzcz0nY2xzLTEnIGQ9J00xNC44Miw5LjQzbDEtMWEyLjM2LDIuMzYsMCwwLDAsMC0zLjMzbC0uOTEtLjkxYTIuMzYsMi4zNiwwLDAsMC0zLjMzLDBsLTEsMVonLyUzRSUzQ3BvbHlnb24gY2xhc3M9J2Nscy0xJyBwb2ludHM9JzkuMTYgNi42IDMuNDkgMTIuMjcgMy40OSAxNi41MSA3LjczIDE2LjUxIDEzLjQgMTAuODQgOS4xNiA2LjYnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9lZGl0LWhvdmVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2Zvcm1hdC1kdXJhdGlvbic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgRGF0YVdpbmRvdyBmcm9tICdjb21wb25lbnRzL0RhdGFXaW5kb3cnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRW50cnkuY3NzJztcbmltcG9ydCBzZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyc7XG5cbmNsYXNzIEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG9wZW46IGZhbHNlXG5cdFx0fVxuXHR9XG5cdFx0XHRcdFx0XHRcdC8vIHt0aGlzLnByb3BzLmFkZGVyICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idXR0b24sIHN0eWxlcy5zcGFjZXIpfSAvPn1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IFxuICAgICAgXHRjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnJvb3QsIHtbc3R5bGVzLmFkZGVyXTogdGhpcy5wcm9wcy5hZGRlcn0pfVxuICAgICAgXHRvbk1vdXNlRW50ZXI9e3RoaXMucHJvcHMub25Nb3VzZUVudGVyfVxuICAgICAgXHRvbk1vdXNlTGVhdmU9e3RoaXMucHJvcHMub25Nb3VzZUxlYXZlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG5cdFx0XHRcdFx0XHRcdHshdGhpcy5wcm9wcy5hZGRlciAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZXMuZGVsKX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZX0gLz59XG5cdFx0XHRcdFx0XHRcdHshdGhpcy5wcm9wcy5hZGRlciAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZXMuZWRpdCwge1tzdHlsZXMuZG9uZV06IHRoaXMucHJvcHMuZWRpdGluZ30pfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLm9uRWRpdCh0aGlzLnByb3BzLmVkaXRpbmcpfX0gLz59XG5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuYWRkZXIgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmFkZCl9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25BZGR9IC8+fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2V9PlxuXHRcdFx0XHRcdFx0XHQgIDxEcm9wZG93blxuXHRcdFx0XHRcdFx0XHQgIFx0b3B0aW9ucz17dGhpcy5wcm9wcy5zZXJ2aWNlcyA/IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VydmljZXMpIDogW119XG5cdFx0XHRcdFx0XHRcdCAgXHRzZWxlY3RlZD17dGhpcy5wcm9wcy5zZXJ2aWNlfVxuXHRcdFx0XHRcdFx0XHQgIFx0b25TZWxlY3Q9e3ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0ICBcdFx0aWYgKHZhbHVlID09PSB0aGlzLnByb3BzLnNlcnZpY2UpIHJldHVybjsgXG5cdFx0XHRcdFx0XHRcdCAgXHRcdHRoaXMucHJvcHMuZWRpdEVudHJ5KHRoaXMucHJvcHMuZW50cnlfaWQsICdzZXJ2aWNlJywgdmFsdWUpXG5cdFx0XHRcdFx0XHRcdCAgXHRcdHRoaXMucHJvcHMuZWRpdEVudHJ5KHRoaXMucHJvcHMuZW50cnlfaWQsICdhdHRyaWJ1dGVzJywge30pXG5cdFx0XHRcdFx0XHRcdCAgXHR9fSAvPlxuXHRcdFx0XHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ0fT57Zm9ybWF0KHRoaXMucHJvcHMuc3RhcnQgfHwgMCl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdC1cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lbmR9Pntmb3JtYXQodGhpcy5wcm9wcy5lbmQgfHwgMCl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YX0+XG5cdFx0XHRcdFx0XHQ8RGF0YVdpbmRvd1xuXHRcdFx0XHRcdFx0XHQvLyBhbHQ9e3RoaXMucHJvcHMuYWRkZXJ9XG5cdFx0XHRcdFx0XHRcdG9wZW49eyh0aGlzLnN0YXRlLm9wZW4gfHwgdGhpcy5wcm9wcy5hZGRlcil9XG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM9e3RoaXMucHJvcHMuYXR0cmlidXRlc31cblx0XHRcdFx0XHRcdFx0c2VydmljZXM9e3RoaXMucHJvcHMuc2VydmljZXN9XG5cdFx0XHRcdFx0XHRcdHNlcnZpY2U9e3RoaXMucHJvcHMuc2VydmljZX1cblx0XHRcdFx0XHRcdFx0ZWRpdEF0dHJpYnV0ZT17KGF0dHJpYnV0ZSwgdmFsdWUpID0+IHt0aGlzLnByb3BzLmVkaXRBdHRyaWJ1dGUodGhpcy5wcm9wcy5lbnRyeV9pZCwgYXR0cmlidXRlLCB2YWx1ZSl9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLyA8RHJvcGRvd24gXG4gIC8vIFx0b3B0aW9ucz17dGhpcy5wcm9wcy5zZXJ2aWNlcyA/IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VydmljZXMpIDogW119XG4gIC8vIFx0c2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VydmljZX1cbiAgLy8gXHRvblNlbGVjdD17dGhpcy5zZXRFbnRyeVNlcnZpY2UuYmluZCh0aGlzKX0gLz5cblxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHNlbGVjdCkoRW50cnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0VudHJ5L0VudHJ5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRhV2luZG93LmNzcyc7XG5cbmNsYXNzIERhdGFXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5yb290LCB7W3N0eWxlcy5hbHRdOiB0aGlzLnByb3BzLmFsdCwgW3N0eWxlcy5vcGVuXTogdGhpcy5wcm9wcy5vcGVufSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0e3RoaXMuZ2V0QXR0cmlidXRlcygpfVx0XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZXMoKSB7XG4gIFx0aWYgKCF0aGlzLnByb3BzLnNlcnZpY2UgfHwgIXRoaXMucHJvcHMuc2VydmljZXNcbiAgXHRcdHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VydmljZXNbdGhpcy5wcm9wcy5zZXJ2aWNlXSkubGVuZ3RoIDwgMSkgcmV0dXJuIDxoMz5ObyBBdHRyaWJ1dGVzPC9oMz47XG4gIFx0Y29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuc2VydmljZXNbdGhpcy5wcm9wcy5zZXJ2aWNlXSkubWFwKChhdHRyaWJ1dGUsIGluZGV4KSA9PiBcblx0XHRcdDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5hdHRyaWJ1dGV9PlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XG5cdFx0XHRcdFx0e2F0dHJpYnV0ZVswXX1cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlfT5cblx0XHRcdFx0XHR7dGhpcy5wYXJzZUF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSwgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZVswXV0pfVxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuICBcdHJldHVybiAoXG4gIFx0XHQ8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRlc30+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHR7YXR0cmlidXRlc31cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0KVxuICB9XG5cbiAgcGFyc2VBdHRyaWJ1dGUoYXR0cmlidXRlLCBwb3NzaWJsZSwgdmFsdWUpIHtcbiAgXHRpZiAocG9zc2libGUgPT09ICdOVU1FUklDJylcbiAgXHRcdHJldHVybiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5wcm9wcy5lZGl0QXR0cmlidXRlKGF0dHJpYnV0ZSwgZS50YXJnZXQudmFsdWUpfX0vPlxuICBcdGlmIChwb3NzaWJsZSBpbnN0YW5jZW9mIEFycmF5KVxuICBcdFx0cmV0dXJuIChcbiAgXHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0b3B0aW9ucz17cG9zc2libGV9XG5cdFx0XHRcdFx0c2VsZWN0ZWQ9e3ZhbHVlfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXt2YWx1ZSA9PiB7dGhpcy5wcm9wcy5lZGl0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpfX1cbiAgXHRcdFx0Lz5cblx0XHRcdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERhdGFXaW5kb3cpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0RhdGFXaW5kb3cvRGF0YVdpbmRvdy5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRGF0YVdpbmRvdy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRGF0YVdpbmRvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9EYXRhV2luZG93LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0RhdGFXaW5kb3cvRGF0YVdpbmRvdy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkRhdGFXaW5kb3ctcm9vdC0yMXctZyB7XFxuXFx0LyogYm9yZGVyLWxlZnQ6IDJweCB2YXIoLS1ibGFjaykgc29saWQ7ICovXFxuXFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHQvKiBoZWlnaHQ6IDA7ICovXFxuXFx0b3ZlcmZsb3c6IGhpZGRlblxcbn1cXG4uRGF0YVdpbmRvdy1yb290LTIxdy1nLkRhdGFXaW5kb3ctYWx0LTNrdmI2IGgzIHtcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4uRGF0YVdpbmRvdy1yb290LTIxdy1nLkRhdGFXaW5kb3ctb3Blbi1MZllTZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5EYXRhV2luZG93LWNvbnRhaW5lci1sWWRuLSB7XFxuXFx0XFxufVxcbi5EYXRhV2luZG93LXZhbHVlLTJOS19xIHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9EYXRhV2luZG93L0RhdGFXaW5kb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCO0FBQ0Q7R0FDRyxZQUFZO0dBQ1osaUJBQWlCO0NBQ25CO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDs7Q0FFQztBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCXCIsXCJmaWxlXCI6XCJEYXRhV2luZG93LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdC8qIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tYmxhY2spIHNvbGlkOyAqL1xcblxcdHBhZGRpbmctbGVmdDogNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0LyogaGVpZ2h0OiAwOyAqL1xcblxcdG92ZXJmbG93OiBoaWRkZW5cXG59XFxuLnJvb3QuYWx0IGgzIHtcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucm9vdC5vcGVuIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0XFxufVxcbi52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJEYXRhV2luZG93LXJvb3QtMjF3LWdcIixcblx0XCJhbHRcIjogXCJEYXRhV2luZG93LWFsdC0za3ZiNlwiLFxuXHRcIm9wZW5cIjogXCJEYXRhV2luZG93LW9wZW4tTGZZU2RcIixcblx0XCJjb250YWluZXJcIjogXCJEYXRhV2luZG93LWNvbnRhaW5lci1sWWRuLVwiLFxuXHRcInZhbHVlXCI6IFwiRGF0YVdpbmRvdy12YWx1ZS0yTktfcVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0RhdGFXaW5kb3cvRGF0YVdpbmRvdy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRW50cnkuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0VudHJ5LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0VudHJ5LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0VudHJ5L0VudHJ5LmNzc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRW50cnktcm9vdC1oQ3Bnei5FbnRyeS1hZGRlci0yUWwwTiAuRW50cnktZGF0YS1YbVZncyB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcbi5FbnRyeS1jb250YWluZXItMlcxU1cge1xcbn1cXG4uRW50cnktYmFyLVNMYTZyIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uRW50cnktaW5mby0xN0thUCB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkICMyMjIgMnB4O1xcbn1cXG4uRW50cnktc3BhY2VyLTNEaC14IHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcbn1cXG4uRW50cnktc2VydmljZS1xc0xTTiB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLkVudHJ5LXNlcnZpY2UtcXNMU04gLkVudHJ5LVNlbGVjdC1jb250cm9sLTJOX1AxIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuXFx0XFx0YmFja2dyb3VuZDogI2YwMDtcXG5cXHR9XFxuLkVudHJ5LWJ1dHRvbnMtMTBEMEoge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5FbnRyeS1idXR0b25zLTEwRDBKIC5FbnRyeS1zcGFjZXItM0RoLXgge1xcblxcdFxcdHdpZHRoOiAyNHB4O1xcblxcdFxcdGhlaWdodDogMjRweDtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG4uRW50cnktYnV0dG9uLTFZcEtRIHtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcXG5cXHQvKiBib3JkZXItcmFkaXVzOiBjYWxjKGNhbGMoMnB4ICsgdmFyKC0tZW50cnktaGVpZ2h0KSkgLyA1KTsgKi9cXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IDI0cHg7XFxuXFx0aGVpZ2h0OiAyNHB4XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1E6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1hZGQtOF9ISWkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9hZGQuc3ZnXCIpICsgXCIpO1xcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtRLkVudHJ5LWFkZC04X0hJaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2FkZC1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1EuRW50cnktZGVsLTJiM3lBIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvZGVsLnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1kZWwtMmIzeUE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnXCIpICsgXCIpO1xcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtRLkVudHJ5LWVkaXQtMmNzVWYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9lZGl0LnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LWJ1dHRvbi0xWXBLUS5FbnRyeS1lZGl0LTJjc1VmOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5FbnRyeS1idXR0b24tMVlwS1EuRW50cnktZG9uZS0yMnNWdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2RvbmUuc3ZnXCIpICsgXCIpO1xcbn1cXG4uRW50cnktYnV0dG9uLTFZcEtRLkVudHJ5LWRvbmUtMjJzVnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9kb25lLWhvdmVyLnN2Z1wiKSArIFwiKTtcXG59XFxuLkVudHJ5LXRpbWUtMldYN2Qge1xcblxcdHBhZGRpbmc6IDFweCA1cHggMCAwIDtcXG5cXHRsaW5lLWhlaWdodDogMjFweDtcXG59XFxuLkVudHJ5LWRhdGEtWG1WZ3Mge1xcblxcdG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeS9FbnRyeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtHQUNHLGtCQUFrQjtDQUNwQjtBQUNEO0NBQ0M7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsWUFBWTtDQUNaLFdBQVc7Q0FDWCxvQkFBb0I7U0FDWixhQUFhO0NBQ3JCLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0JBQW9CO1NBQ1osYUFBYTtDQUNyQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QixxQkFBcUI7Q0FDckI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakI7QUFDRjtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWDtBQUNGO0NBQ0MsMkJBQTJCO0NBQzNCLCtEQUErRDtDQUMvRCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnREFBaUQ7Q0FDbEQ7QUFDRDtFQUNFLGdEQUF1RDtDQUN4RDtBQUNEO0VBQ0UsZ0RBQWlEO0NBQ2xEO0FBQ0Q7RUFDRSxnREFBdUQ7Q0FDeEQ7QUFDRDtFQUNFLGdEQUFrRDtDQUNuRDtBQUNEO0VBQ0UsZ0RBQXdEO0NBQ3pEO0FBQ0Q7RUFDRSxnREFBa0Q7Q0FDbkQ7QUFDRDtFQUNFLGdEQUF3RDtDQUN6RDtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCXCIsXCJmaWxlXCI6XCJFbnRyeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290LmFkZGVyIC5kYXRhIHtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMjRweDtcXG59XFxuLmNvbnRhaW5lciB7XFxufVxcbi5iYXIge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmZvIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogc29saWQgIzIyMiAycHg7XFxufVxcbi5zcGFjZXIge1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxufVxcbi5zZXJ2aWNlIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4uc2VydmljZSAuU2VsZWN0LWNvbnRyb2wge1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS10YWJsZTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZjAwO1xcblxcdH1cXG4uYnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmJ1dHRvbnMgLnNwYWNlciB7XFxuXFx0XFx0d2lkdGg6IDI0cHg7XFxuXFx0XFx0aGVpZ2h0OiAyNHB4O1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbi5idXR0b24ge1xcblxcdGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IGNhbGMoY2FsYygycHggKyB2YXIoLS1lbnRyeS1oZWlnaHQpKSAvIDUpOyAqL1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHhcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbn1cXG4uYnV0dG9uLmFkZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9hZGQuc3ZnJyk7XFxufVxcbi5idXR0b24uYWRkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2FkZC1ob3Zlci5zdmcnKTtcXG59XFxuLmJ1dHRvbi5kZWwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZGVsLnN2ZycpO1xcbn1cXG4uYnV0dG9uLmRlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnJyk7XFxufVxcbi5idXR0b24uZWRpdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9lZGl0LnN2ZycpO1xcbn1cXG4uYnV0dG9uLmVkaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmcnKTtcXG59XFxuLmJ1dHRvbi5kb25lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2RvbmUuc3ZnJyk7XFxufVxcbi5idXR0b24uZG9uZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9kb25lLWhvdmVyLnN2ZycpO1xcbn1cXG4udGltZSB7XFxuXFx0cGFkZGluZzogMXB4IDVweCAwIDAgO1xcblxcdGxpbmUtaGVpZ2h0OiAyMXB4O1xcbn1cXG4uZGF0YSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDQ4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRW50cnktcm9vdC1oQ3BnelwiLFxuXHRcImFkZGVyXCI6IFwiRW50cnktYWRkZXItMlFsME5cIixcblx0XCJkYXRhXCI6IFwiRW50cnktZGF0YS1YbVZnc1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkVudHJ5LWNvbnRhaW5lci0yVzFTV1wiLFxuXHRcImJhclwiOiBcIkVudHJ5LWJhci1TTGE2clwiLFxuXHRcImluZm9cIjogXCJFbnRyeS1pbmZvLTE3S2FQXCIsXG5cdFwic3BhY2VyXCI6IFwiRW50cnktc3BhY2VyLTNEaC14XCIsXG5cdFwic2VydmljZVwiOiBcIkVudHJ5LXNlcnZpY2UtcXNMU05cIixcblx0XCJTZWxlY3QtY29udHJvbFwiOiBcIkVudHJ5LVNlbGVjdC1jb250cm9sLTJOX1AxXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkVudHJ5LWJ1dHRvbnMtMTBEMEpcIixcblx0XCJidXR0b25cIjogXCJFbnRyeS1idXR0b24tMVlwS1FcIixcblx0XCJhZGRcIjogXCJFbnRyeS1hZGQtOF9ISWlcIixcblx0XCJkZWxcIjogXCJFbnRyeS1kZWwtMmIzeUFcIixcblx0XCJlZGl0XCI6IFwiRW50cnktZWRpdC0yY3NVZlwiLFxuXHRcImRvbmVcIjogXCJFbnRyeS1kb25lLTIyc1Z0XCIsXG5cdFwidGltZVwiOiBcIkVudHJ5LXRpbWUtMldYN2RcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeS9FbnRyeS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQz94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPyUzRSAlM0MhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApIC0tJTNFICUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDIwIDIwJyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFICUzQ3N0eWxlIHR5cGU9J3RleHQvY3NzJyUzRSAuc3QwJTdCZmlsbDpub25lO3N0cm9rZTolMjMyMjIyMjI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyU3RCAlM0Mvc3R5bGUlM0UgJTNDdGl0bGUlM0VlZGl0JTNDL3RpdGxlJTNFICUzQ3BvbHlsaW5lIGNsYXNzPSdzdDAnIHBvaW50cz0nMTUuNSw2LjkgOC4yLDE0LjIgNC42LDEwLjYgJy8lM0UgJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2RvbmUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J3V0Zi04Jz8lM0UgJTNDIS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjEuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAtLSUzRSAlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7JyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSAlM0NzdHlsZSB0eXBlPSd0ZXh0L2NzcyclM0UgLnN0MCU3QmZpbGw6bm9uZTtzdHJva2U6JTIzRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDslN0QgJTNDL3N0eWxlJTNFICUzQ3RpdGxlJTNFZWRpdCUzQy90aXRsZSUzRSAlM0Nwb2x5bGluZSBjbGFzcz0nc3QwJyBwb2ludHM9JzE1LjUsNi45IDguMiwxNC4yIDQuNSwxMC42ICcvJTNFICUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kb25lLWhvdmVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vcmVhY3Qtc2VsZWN0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9yZWFjdC1zZWxlY3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL3JlYWN0LXNlbGVjdC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU2VsZWN0XFxuICogPT09PT09PT09PT09XFxuICogQ3JlYXRlZCBieSBKZWQgV2F0c29uIGFuZCBKb3NzIE1hY2tpc29uIGZvciBLZXlzdG9uZUpTLCBodHRwOi8vd3d3LmtleXN0b25lanMuY29tL1xcbiAqIGh0dHBzOi8vdHdpdHRlci5jb20vamVkd2F0c29uIGh0dHBzOi8vdHdpdHRlci5jb20vam9zc21hY2tpc29uIGh0dHBzOi8vdHdpdHRlci5jb20va2V5c3RvbmVqc1xcbiAqIE1JVCBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vSmVkV2F0c29uL3JlYWN0LXNlbGVjdFxcbiovXFxuLlNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5TZWxlY3QsXFxuLlNlbGVjdCBkaXYsXFxuLlNlbGVjdCBpbnB1dCxcXG4uU2VsZWN0IHNwYW4ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLlNlbGVjdC5pcy1kaXNhYmxlZCA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG4uU2VsZWN0LmlzLWRpc2FibGVkID4gLlNlbGVjdC1jb250cm9sOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLlNlbGVjdC5pcy1kaXNhYmxlZCAuU2VsZWN0LWFycm93LXpvbmUge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjM1O1xcbn1cXG4uU2VsZWN0LWNvbnRyb2wge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2Q5ZDlkOSAjY2NjICNiM2IzYjM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgY29sb3I6ICMzMzM7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gIGhlaWdodDogMzZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5TZWxlY3QtY29udHJvbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG4uU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uaXMtc2VhcmNoYWJsZS5pcy1vcGVuID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuLmlzLW9wZW4gPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2IzYjNiMyAjY2NjICNkOWQ5ZDk7XFxufVxcbi5pcy1vcGVuID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtYXJyb3cge1xcbiAgdG9wOiAtMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjOTk5O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHg7XFxufVxcbi5pcy1zZWFyY2hhYmxlLmlzLWZvY3VzZWQ6bm90KC5pcy1vcGVuKSA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcbi5pcy1mb2N1c2VkOm5vdCguaXMtb3BlbikgPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3ZWZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCAwIDNweCByZ2JhKDAsIDEyNiwgMjU1LCAwLjEpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCAwIDNweCByZ2JhKDAsIDEyNiwgMjU1LCAwLjEpO1xcbn1cXG4uU2VsZWN0LXBsYWNlaG9sZGVyLFxcbi5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIHtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgbGVmdDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaGFzLXZhbHVlLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgLlNlbGVjdC12YWx1ZS1sYWJlbCxcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmhhcy12YWx1ZS5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsLFxcbi5oYXMtdmFsdWUuaXMtcHNldWRvLWZvY3VzZWQuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpob3ZlcixcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6aG92ZXIsXFxuLmhhcy12YWx1ZS5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmZvY3VzLFxcbi5oYXMtdmFsdWUuaXMtcHNldWRvLWZvY3VzZWQuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpmb2N1cyB7XFxuICBjb2xvcjogIzAwN2VmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLlNlbGVjdC1pbnB1dCB7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNlbGVjdC1pbnB1dCA+IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMCBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICAvKiBGb3IgSUUgOCBjb21wYXRpYmlsaXR5ICovXFxuICBwYWRkaW5nOiA4cHggMCAxMnB4O1xcbiAgLyogRm9yIElFIDggY29tcGF0aWJpbGl0eSAqL1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG4uaXMtZm9jdXNlZCAuU2VsZWN0LWlucHV0ID4gaW5wdXQge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkIC5TZWxlY3QtaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLlNlbGVjdC1jb250cm9sOm5vdCguaXMtc2VhcmNoYWJsZSkgPiAuU2VsZWN0LWlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5TZWxlY3QtbG9hZGluZy16b25lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcbi5TZWxlY3QtbG9hZGluZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogU2VsZWN0LWFuaW1hdGlvbi1zcGluIDQwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbjogU2VsZWN0LWFuaW1hdGlvbi1zcGluIDQwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TZWxlY3QtY2xlYXItem9uZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogU2VsZWN0LWFuaW1hdGlvbi1mYWRlSW4gMjAwbXM7XFxuICBhbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tZmFkZUluIDIwMG1zO1xcbiAgY29sb3I6ICM5OTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxN3B4O1xcbn1cXG4uU2VsZWN0LWNsZWFyLXpvbmU6aG92ZXIge1xcbiAgY29sb3I6ICNEMDAyMUI7XFxufVxcbi5TZWxlY3QtY2xlYXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtY2xlYXItem9uZSB7XFxuICB3aWR0aDogMTdweDtcXG59XFxuLlNlbGVjdC1hcnJvdy16b25lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcbi5TZWxlY3QtYXJyb3cge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAyLjVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaXMtb3BlbiAuU2VsZWN0LWFycm93LFxcbi5TZWxlY3QtYXJyb3ctem9uZTpob3ZlciA+IC5TZWxlY3QtYXJyb3cge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzY2NjtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC1tdWx0aS12YWx1ZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLlNlbGVjdCAuU2VsZWN0LWFyaWEtb25seSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1mYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1mYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5TZWxlY3QtbWVudS1vdXRlciB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZTZlNmU2O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuLlNlbGVjdC1tZW51IHtcXG4gIG1heC1oZWlnaHQ6IDE5OHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLlNlbGVjdC1vcHRpb24ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG59XFxuLlNlbGVjdC1vcHRpb246bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbn1cXG4uU2VsZWN0LW9wdGlvbi5pcy1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmYWZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI2LCAyNTUsIDAuMDQpO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5TZWxlY3Qtb3B0aW9uLmlzLWZvY3VzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjVmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNiwgMjU1LCAwLjA4KTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uU2VsZWN0LW9wdGlvbi5pcy1kaXNhYmxlZCB7XFxuICBjb2xvcjogI2NjY2NjYztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLlNlbGVjdC1ub3Jlc3VsdHMge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM5OTk5OTk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LWlucHV0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5TZWxlY3QtLW11bHRpLmhhcy12YWx1ZSAuU2VsZWN0LWlucHV0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjVmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNiwgMjU1LCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMmUwZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxMjYsIDI1NSwgMC4yNCk7XFxuICBjb2xvcjogIzAwN2VmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtaWNvbixcXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSBhLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBjb2xvcjogIzAwN2VmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLlNlbGVjdC0tbXVsdGkgYS5TZWxlY3QtdmFsdWUtbGFiZWw6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzJlMGZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMTI2LCAyNTUsIDAuMjQpO1xcbiAgcGFkZGluZzogMXB4IDVweCAzcHg7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtdmFsdWUtaWNvbjpob3ZlcixcXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZWFmZDtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMywgMjMwLCAwLjA4KTtcXG4gIGNvbG9yOiAjMDA3MWU2O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmUwZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4yNCk7XFxufVxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZS1pY29uIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlM2UzO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlLWljb246aG92ZXIsXFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZS1pY29uOmZvY3VzLFxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuQGtleWZyYW1lcyBTZWxlY3QtYW5pbWF0aW9uLXNwaW4ge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBTZWxlY3QtYW5pbWF0aW9uLXNwaW4ge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztFQU1FO0FBQ0Y7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDs7OztFQUlFLCtCQUErQjtFQUMvQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UseUJBQXlCO1VBQ2pCLGlCQUFpQjtDQUMxQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7QUFDRDtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7Q0FDakQ7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixtQ0FBbUM7Q0FDcEM7QUFDRDtFQUNFLFVBQVU7RUFDViwyQ0FBMkM7RUFDM0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QiwyRkFBMkY7VUFDbkYsbUZBQW1GO0NBQzVGO0FBQ0Q7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwyQkFBMkI7S0FDeEIsd0JBQXdCO0VBQzNCLG9CQUFvQjtDQUNyQjtBQUNEOztFQUVFLFlBQVk7Q0FDYjtBQUNEOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkI7QUFDRDs7OztFQUlFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHlCQUF5QjtVQUNqQixpQkFBaUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7QUFDRDtFQUNFLCtEQUErRDtFQUMvRCx1REFBdUQ7RUFDdkQsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQkFBK0I7VUFDdkIsdUJBQXVCO0VBQy9CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxpREFBaUQ7RUFDakQseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMkNBQTJDO0VBQzNDLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0VBRUUsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7QUFDRDtFQUNFLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsZ0RBQWdEO1VBQ3hDLHdDQUF3QztFQUNoRCwrQkFBK0I7VUFDdkIsdUJBQXVCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztDQUNuQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxZQUFZO0NBQ2I7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDs7RUFFRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsZ0RBQWdEO0VBQ2hELHFCQUFxQjtDQUN0QjtBQUNEOztFQUVFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMENBQTBDO0NBQzNDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdDQUFnQztDQUNqQztBQUNEOzs7RUFHRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFO0lBQ0UsaUNBQWlDO1lBQ3pCLHlCQUF5QjtHQUNsQztDQUNGO0FBQ0Q7RUFDRTtJQUNFLGlDQUFpQztHQUNsQztDQUNGXCIsXCJmaWxlXCI6XCJyZWFjdC1zZWxlY3QuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFNlbGVjdFxcbiAqID09PT09PT09PT09PVxcbiAqIENyZWF0ZWQgYnkgSmVkIFdhdHNvbiBhbmQgSm9zcyBNYWNraXNvbiBmb3IgS2V5c3RvbmVKUywgaHR0cDovL3d3dy5rZXlzdG9uZWpzLmNvbS9cXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL2plZHdhdHNvbiBodHRwczovL3R3aXR0ZXIuY29tL2pvc3NtYWNraXNvbiBodHRwczovL3R3aXR0ZXIuY29tL2tleXN0b25lanNcXG4gKiBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL0plZFdhdHNvbi9yZWFjdC1zZWxlY3RcXG4qL1xcbi5TZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uU2VsZWN0LFxcbi5TZWxlY3QgZGl2LFxcbi5TZWxlY3QgaW5wdXQsXFxuLlNlbGVjdCBzcGFuIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5TZWxlY3QuaXMtZGlzYWJsZWQgPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuLlNlbGVjdC5pcy1kaXNhYmxlZCA+IC5TZWxlY3QtY29udHJvbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5TZWxlY3QuaXMtZGlzYWJsZWQgLlNlbGVjdC1hcnJvdy16b25lIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC4zNTtcXG59XFxuLlNlbGVjdC1jb250cm9sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDkgI2NjYyAjYjNiM2IzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uU2VsZWN0LWNvbnRyb2w6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlzLXNlYXJjaGFibGUuaXMtb3BlbiA+IC5TZWxlY3QtY29udHJvbCB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcbi5pcy1vcGVuID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNiM2IzYjMgI2NjYyAjZDlkOWQ5O1xcbn1cXG4uaXMtb3BlbiA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LWFycm93IHtcXG4gIHRvcDogLTJweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtcXG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4O1xcbn1cXG4uaXMtc2VhcmNoYWJsZS5pcy1mb2N1c2VkOm5vdCguaXMtb3BlbikgPiAuU2VsZWN0LWNvbnRyb2wge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uaXMtZm9jdXNlZDpub3QoLmlzLW9wZW4pID4gLlNlbGVjdC1jb250cm9sIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2VmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggcmdiYSgwLCAxMjYsIDI1NSwgMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggcmdiYSgwLCAxMjYsIDI1NSwgMC4xKTtcXG59XFxuLlNlbGVjdC1wbGFjZWhvbGRlcixcXG4uU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSB7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogI2FhYTtcXG4gIGxlZnQ6IDA7XFxuICBsaW5lLWhlaWdodDogMzRweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmhhcy12YWx1ZS5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIC5TZWxlY3QtdmFsdWUtbGFiZWwsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIC5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbCxcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGFzLXZhbHVlLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6aG92ZXIsXFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZC5TZWxlY3QtLXNpbmdsZSA+IC5TZWxlY3QtY29udHJvbCAuU2VsZWN0LXZhbHVlIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmhvdmVyLFxcbi5oYXMtdmFsdWUuU2VsZWN0LS1zaW5nbGUgPiAuU2VsZWN0LWNvbnRyb2wgLlNlbGVjdC12YWx1ZSBhLlNlbGVjdC12YWx1ZS1sYWJlbDpmb2N1cyxcXG4uaGFzLXZhbHVlLmlzLXBzZXVkby1mb2N1c2VkLlNlbGVjdC0tc2luZ2xlID4gLlNlbGVjdC1jb250cm9sIC5TZWxlY3QtdmFsdWUgYS5TZWxlY3QtdmFsdWUtbGFiZWw6Zm9jdXMge1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5TZWxlY3QtaW5wdXQge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TZWxlY3QtaW5wdXQgPiBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDAgbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgLyogRm9yIElFIDggY29tcGF0aWJpbGl0eSAqL1xcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcXG4gIC8qIEZvciBJRSA4IGNvbXBhdGliaWxpdHkgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLmlzLWZvY3VzZWQgLlNlbGVjdC1pbnB1dCA+IGlucHV0IHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuLmhhcy12YWx1ZS5pcy1wc2V1ZG8tZm9jdXNlZCAuU2VsZWN0LWlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5TZWxlY3QtY29udHJvbDpub3QoLmlzLXNlYXJjaGFibGUpID4gLlNlbGVjdC1pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uU2VsZWN0LWxvYWRpbmctem9uZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG4uU2VsZWN0LWxvYWRpbmcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tc3BpbiA0MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tc3BpbiA0MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMzMzM7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VsZWN0LWNsZWFyLXpvbmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNlbGVjdC1hbmltYXRpb24tZmFkZUluIDIwMG1zO1xcbiAgYW5pbWF0aW9uOiBTZWxlY3QtYW5pbWF0aW9uLWZhZGVJbiAyMDBtcztcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTdweDtcXG59XFxuLlNlbGVjdC1jbGVhci16b25lOmhvdmVyIHtcXG4gIGNvbG9yOiAjRDAwMjFCO1xcbn1cXG4uU2VsZWN0LWNsZWFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LWNsZWFyLXpvbmUge1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcbi5TZWxlY3QtYXJyb3ctem9uZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4uU2VsZWN0LWFycm93IHtcXG4gIGJvcmRlci1jb2xvcjogIzk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweCA1cHggMi41cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmlzLW9wZW4gLlNlbGVjdC1hcnJvdyxcXG4uU2VsZWN0LWFycm93LXpvbmU6aG92ZXIgPiAuU2VsZWN0LWFycm93IHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM2NjY7XFxufVxcbi5TZWxlY3QtLW11bHRpIC5TZWxlY3QtbXVsdGktdmFsdWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5TZWxlY3QgLlNlbGVjdC1hcmlhLW9ubHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIFNlbGVjdC1hbmltYXRpb24tZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uU2VsZWN0LW1lbnUtb3V0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U2ZTZlNjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcbi5TZWxlY3QtbWVudSB7XFxuICBtYXgtaGVpZ2h0OiAxOThweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5TZWxlY3Qtb3B0aW9uIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzY2NjY2NjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxufVxcbi5TZWxlY3Qtb3B0aW9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLlNlbGVjdC1vcHRpb24uaXMtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmFmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNiwgMjU1LCAwLjA0KTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uU2VsZWN0LW9wdGlvbi5pcy1mb2N1c2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4wOCk7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLlNlbGVjdC1vcHRpb24uaXMtZGlzYWJsZWQge1xcbiAgY29sb3I6ICNjY2NjY2M7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5TZWxlY3Qtbm9yZXN1bHRzIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjOTk5OTk5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC1pbnB1dCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5oYXMtdmFsdWUgLlNlbGVjdC1pbnB1dCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjYsIDI1NSwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzJlMGZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTI2LCAyNTUsIDAuMjQpO1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb24sXFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWxhYmVsIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG59XFxuLlNlbGVjdC0tbXVsdGkgYS5TZWxlY3QtdmFsdWUtbGFiZWwge1xcbiAgY29sb3I6ICMwMDdlZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5TZWxlY3QtLW11bHRpIGEuU2VsZWN0LXZhbHVlLWxhYmVsOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2MyZTBmZjtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yIGZvciBJRSA4ICovXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDEyNiwgMjU1LCAwLjI0KTtcXG4gIHBhZGRpbmc6IDFweCA1cHggM3B4O1xcbn1cXG4uU2VsZWN0LS1tdWx0aSAuU2VsZWN0LXZhbHVlLWljb246aG92ZXIsXFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVhZmQ7XFxuICAvKiBGYWxsYmFjayBjb2xvciBmb3IgSUUgOCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTMsIDIzMCwgMC4wOCk7XFxuICBjb2xvcjogIzAwNzFlNjtcXG59XFxuLlNlbGVjdC0tbXVsdGkgLlNlbGVjdC12YWx1ZS1pY29uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJlMGZmO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgZm9yIElFIDggKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI2LCAyNTUsIDAuMjQpO1xcbn1cXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuLlNlbGVjdC0tbXVsdGkuaXMtZGlzYWJsZWQgLlNlbGVjdC12YWx1ZS1pY29uOmhvdmVyLFxcbi5TZWxlY3QtLW11bHRpLmlzLWRpc2FibGVkIC5TZWxlY3QtdmFsdWUtaWNvbjpmb2N1cyxcXG4uU2VsZWN0LS1tdWx0aS5pcy1kaXNhYmxlZCAuU2VsZWN0LXZhbHVlLWljb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcbkBrZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1zcGluIHtcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgU2VsZWN0LWFuaW1hdGlvbi1zcGluIHtcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2Zyb21KU30gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZm9ybWF0LWR1cmF0aW9uJztcbmltcG9ydCBBV1MgZnJvbSAnYXdzLXNkayc7XG5cbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIHNldFNlcnZpY2VzLFxuICBzZXRDdXJFeGFtcGxlSUQsXG4gIHNldEN1ckVudHJ5SUQsXG4gIHNldEhvdmVyRW50cnlJRCxcbiAgZWRpdEVudHJ5LFxuICBlZGl0RW50cnlBdHRyaWJ1dGUsXG4gIGFkZEVudHJ5LFxuICBwdXNoRXhhbXBsZUVudHJ5LFxuICBkZWxFeGFtcGxlRW50cnksXG4gIGRlbEV4YW1wbGUsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvcnVudGltZSc7XG5pbXBvcnQge3RvSlN9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBBdWRpb0NsaXBwZXIgZnJvbSAnY29tcG9uZW50cy9DbGFzc2lmeS9BdWRpb0NsaXBwZXInO1xuaW1wb3J0IEltcG9ydCBmcm9tICdjb21wb25lbnRzL0NsYXNzaWZ5L0ltcG9ydCc7XG5pbXBvcnQgRW50cnkgZnJvbSAnY29tcG9uZW50cy9DbGFzc2lmeS9FbnRyeSc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DbGFzc2lmeS5jc3MnO1xuXG5jbGFzcyBDbGFzc2lmeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIHRoaXMuczM7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5mZXRjaFNlcnZpY2VzKCk7XG4gICAgdGhpcy5mZXRjaENyZWRlbnRpYWxzKCkudGhlbihjcmVkZW50aWFscyA9PiB7XG4gICAgICBBV1MuY29uZmlnLnVwZGF0ZSh7YWNjZXNzS2V5SWQ6IGNyZWRlbnRpYWxzLkFXU19BQ0NFU1NfS0VZX0lELCBzZWNyZXRBY2Nlc3NLZXk6IGNyZWRlbnRpYWxzLkFXU19TRUNSRVRfQUNDRVNTX0tFWX0pO1xuICAgICAgdGhpcy5zMyA9IG5ldyBBV1MuUzMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBleGFtcGxlID0gdGhpcy5wcm9wcy5leGFtcGxlc1t0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkXTtcbiAgICBjb25zdCB0ID0ge2V4YW1wbGVzOiBbe2VudHJpZXM6IFt7fV19XX1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBwZXJ9PlxuICAgICAgICAgICAgPEF1ZGlvQ2xpcHBlclxuICAgICAgICAgICAgICBzcmM9e2V4YW1wbGUgPyBleGFtcGxlLnNyYyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZW50cmllcz17ZXhhbXBsZSA/IGV4YW1wbGUuZW50cmllcyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgY3VyX2VudHJ5X2lkPXt0aGlzLnByb3BzLmN1cl9lbnRyeV9pZCB8fCAwfVxuICAgICAgICAgICAgICBob3Zlcl9lbnRyeV9pZD17dGhpcy5wcm9wcy5ob3Zlcl9lbnRyeV9pZH1cbiAgICAgICAgICAgICAgZHVyYXRpb249e2V4YW1wbGUgPyBleGFtcGxlLmR1cmF0aW9uIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBlZGl0RW50cnk9eyhhdHRyLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdEVudHJ5KHtcbiAgICAgICAgICAgICAgICAgIGV4YW1wbGVfaWQ6IHRoaXMucHJvcHMuY3VyX2V4YW1wbGVfaWQsXG4gICAgICAgICAgICAgICAgICBlbnRyeV9pZDogdGhpcy5wcm9wcy5jdXJfZW50cnlfaWQgfHwgMCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGF0dHIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaW1wb3J0LCBzdHlsZXMuY29sKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wb3J0X2NvbnR9PlxuICAgICAgICAgICAgICAgIDxJbXBvcnQgY3JlYXRlRXhhbXBsZT17dGhpcy5jcmVhdGVFeGFtcGxlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0gb25DbGljaz17dGhpcy5zdWJtaXRFeGFtcGxlLmJpbmQodGhpcyl9PlN1Ym1pdCBFeGFtcGxlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVldWV9PlxuICAgICAgICAgICAgICAgIDxoMj5FeGFtcGxlczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGFtcGxlc30+e3RoaXMuZ2V0RXhhbXBsZXMoKX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5lZGl0LCBzdHlsZXMuY29sKX0+XG4gICAgICAgICAgICAgIDxoMT57ZXhhbXBsZSA/IGV4YW1wbGUubmFtZSA6ICdObyBFeGFtcGxlIFNlbGVjdGVkJ308L2gxPlxuICAgICAgICAgICAgICA8aDI+QWRkIEVudHJpZXM8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVudHJpZXNfY29udH0+XG4gICAgICAgICAgICAgICAge2V4YW1wbGUgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyeV9hZGRlcn0+XG4gICAgICAgICAgICAgICAgICAgPEVudHJ5XG4gICAgICAgICAgICAgICAgICAgIGFkZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBlbnRyeV9pZD17MH1cbiAgICAgICAgICAgICAgICAgICAgZXhhbXBsZV9pZD17dGhpcy5wcm9wcy5jdXJfZXhhbXBsZV9pZH1cbiAgICAgICAgICAgICAgICAgICAgc2VydmljZXM9e3RoaXMucHJvcHMuc2VydmljZXN9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRFbnRyeT17dGhpcy5lZGl0RW50cnkuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgZWRpdEF0dHJpYnV0ZT17dGhpcy5lZGl0RW50cnlBdHRyaWJ1dGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25BZGQ9eygpID0+IHt0aGlzLnB1c2hFbnRyeShleGFtcGxlLmR1cmF0aW9uKX19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3RoaXMucHJvcHMuc2V0SG92ZXJFbnRyeUlEKHtlbnRyeV9pZDogMH0pfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7dGhpcy5wcm9wcy5zZXRIb3ZlckVudHJ5SUQoe2VudHJ5X2lkOiB1bmRlZmluZWR9KX19XG4gICAgICAgICAgICAgICAgICAgIHsuLi5leGFtcGxlLmVudHJpZXNbMF19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cmllc30+e3RoaXMuZ2V0RW50cmllcygpfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmRhdGEsIHN0eWxlcy5jb2wpfT5cbiAgICAgICAgICAgICAgPGgyPkRhdGE8L2gyPlxuICAgICAgICAgICAgICA8aDM+Tm8gRGF0YTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvd2VyfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzdWJtaXRFeGFtcGxlKGF0dGVtcHQ9MCkge1xuICAgIC8vIFRPRE8gXG4gICAgLy8gTWFrZSBzdXJlIHVzZXJzIGNhbid0IG1lc3Mgd2l0aCBpbnRlcmZhY2UgZHVyaW5nIHRoaXMgcHJvY2Vzc1xuICAgIGNvbnN0IGV4YW1wbGUgPSB0aGlzLnByb3BzLmV4YW1wbGVzW3RoaXMucHJvcHMuY3VyX2V4YW1wbGVfaWRdO1xuICAgIGlmICghZXhhbXBsZSkgcmV0dXJuO1xuICAgIHRoaXMuZmV0Y2hDcmVkZW50aWFscygpXG4gICAgLnRoZW4oY3JlZGVudGlhbHMgPT4ge1xuICAgICAgdGhpcy5mZXRjaEZpbGVuYW1lKClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZEV4YW1wbGUoY3JlZGVudGlhbHMsIGV4YW1wbGUuZmlsZSwgZGF0YS5maWxlbmFtZSArIGV4YW1wbGUudHlwZS5yZXBsYWNlKC9hdWRpb1xcLy8sICcuJykpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwbG9hZEVudHJpZXMoZXhhbXBsZS5lbnRyaWVzLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih0aGlzLmdldERlZmF1bHRTZXJ2aWNlVmFsdWVzKGVudHJ5LnNlcnZpY2UpLCBlbnRyeS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IGVudHJ5LnN0YXJ0LFxuICAgICAgICAgICAgICBlbmRfdGltZTogZW50cnkuZW5kLFxuICAgICAgICAgICAgICBzZXJ2aWNlOiBlbnRyeS5zZXJ2aWNlLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICBtZWRpYTogZGF0YS5maWxlbmFtZSArIGV4YW1wbGUudHlwZS5yZXBsYWNlKC9hdWRpb1xcLy8sICcuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7Y29uc29sZS5sb2coMSk7dGhpcy5yZW1vdmVFeGFtcGxlKHRoaXMucHJvcHMuY3VyX2V4YW1wbGVfaWQpfSlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERlZmF1bHRTZXJ2aWNlVmFsdWVzKHNlcnZpY2UpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlcnZpY2VzW3NlcnZpY2VdKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgaWYgKGF0dHJbMV0gaW5zdGFuY2VvZiBBcnJheSkgb2JqW2F0dHJbMF1dID0gYXR0clsxXVswXTtcbiAgICAgIGVsc2Ugb2JqW2F0dHJbMF1dID0gYXR0clsxXTtcbiAgICB9KVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmZXRjaENyZWRlbnRpYWxzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cDovL2JhY2tlbmQuY2VudHJlZS54eXo6NTAwMC9nZXRfZGF0YV9zdG9yYWdlX2NyZWRlbnRpYWxzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQmFzaWMgXCIgKyBidG9hKFwiYjRlZDIxOGUtMGVmNi00YzBhLWI3ZTMtYWM4NmU2ZWRmZmIyOm1ha2VfYW1lcmljYV9ncmVhdF9hZ2FpblwiKSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpLCByZWFzb24gPT4gcmVqZWN0KHJlYXNvbikpXG4gICAgICAudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hGaWxlbmFtZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2goJ2h0dHA6Ly9iYWNrZW5kLmNlbnRyZWUueHl6OjUwMDAvZ2V0X25ld19maWxlbmFtZScsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCksIHJlYXNvbiA9PiByZWplY3QocmVhc29uKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRFeGFtcGxlKGNyZWRlbnRpYWxzLCBmaWxlLCBmaWxlbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjcmVkZW50aWFscywgZmlsZSwgZmlsZW5hbWUpO1xuICAgICAgdmFyIHBhcmFtcyA9IHtCdWNrZXQ6IGNyZWRlbnRpYWxzLkJVQ0tFVF9OQU1FLCBLZXk6IFwiY2xhc3NpZmljYXRpb25zL1wiICsgZmlsZW5hbWUsIEJvZHk6IGZpbGV9Oy8vbmV3IEZpbGUoW2ZpbGVdLCBmaWxlbmFtZSlcbiAgICAgIHRoaXMuczMudXBsb2FkKHBhcmFtcywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIsIGRhdGEpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHVwbG9hZEVudHJpZXMoZW50cmllcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndXBsb2FkaW5nIGVudGlyZXMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVudHJpZXMpO1xuICAgICAgZmV0Y2goJ2h0dHA6Ly9iYWNrZW5kLmNlbnRyZWUueHl6OjUwMDAvYWRkX2NsYXNzaWZpY2F0aW9ucycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQmFzaWMgXCIgKyBidG9hKFwiYjRlZDIxOGUtMGVmNi00YzBhLWI3ZTMtYWM4NmU2ZWRmZmIyOm1ha2VfYW1lcmljYV9ncmVhdF9hZ2FpblwiKSxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyaWVzKVxuICAgICAgfSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRXhhbXBsZShuYW1lLCBzcmMsIHR5cGUsIGZpbGUsIGR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzcmM6IHNyYyxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBmaWxlOiBmaWxlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZW50cmllczogW3RoaXMuY3JlYXRlRW50cnkoZHVyYXRpb24pXVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV4YW1wbGUoZXhhbXBsZV9pZCkge1xuICAgIHRoaXMucHJvcHMuc2V0Q3VyRXhhbXBsZUlEKHtleGFtcGxlX2lkOiAwfSk7XG4gICAgdGhpcy5wcm9wcy5kZWxFeGFtcGxlKHtleGFtcGxlX2lkOiBleGFtcGxlX2lkfSlcbiAgfVxuXG4gIGNyZWF0ZUVudHJ5KGR1cmF0aW9uLCBzdGFydCwgZW5kLCBzZXJ2aWNlLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiAoc3RhcnQgfHwgMCksXG4gICAgICBlbmQ6IChlbmQgfHwgZHVyYXRpb24pLFxuICAgICAgc2VydmljZTogKHNlcnZpY2UgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZXJ2aWNlcylbMF0pLFxuICAgICAgYXR0cmlidXRlczogKGF0dHJpYnV0ZXMgfHwge30pXG4gICAgfVxuICB9XG5cbiAgcHVzaEVudHJ5KGR1cmF0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy5wdXNoRXhhbXBsZUVudHJ5KHtcbiAgICAgIGV4YW1wbGVfaWQ6IHRoaXMucHJvcHMuY3VyX2V4YW1wbGVfaWQsXG4gICAgICBlbnRyeTogdGhpcy5jcmVhdGVFbnRyeShkdXJhdGlvbilcbiAgICB9KTtcbiAgfVxuXG4gIGVkaXRFbnRyeShlbnRyeV9pZCwgbmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmVkaXRFbnRyeSh7XG4gICAgICBleGFtcGxlX2lkOiB0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkLFxuICAgICAgZW50cnlfaWQ6IGVudHJ5X2lkLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBlZGl0RW50cnlBdHRyaWJ1dGUoZW50cnlfaWQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmVkaXRFbnRyeUF0dHJpYnV0ZSh7XG4gICAgICBleGFtcGxlX2lkOiB0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkLFxuICAgICAgZW50cnlfaWQ6IGVudHJ5X2lkLFxuICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KVxuICB9XG5cbiAgZGVsRW50cnkoZW50cnlfaWQpIHtcbiAgICB0aGlzLnByb3BzLmRlbEV4YW1wbGVFbnRyeSh7XG4gICAgICBleGFtcGxlX2lkOiB0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkLFxuICAgICAgZW50cnlfaWQ6IGVudHJ5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXhhbXBsZXMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4YW1wbGVzIHx8IHRoaXMucHJvcHMuZXhhbXBsZXMubGVuZ3RoIDwgMSkgcmV0dXJuIDxoMz5ObyBFeGFtcGxlczwvaDM+O1xuICAgIHJldHVybiB0aGlzLnByb3BzLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZXhhbXBsZSwge1tzdHlsZXMuc2VsZWN0ZWRdOiBpbmRleCA9PSB0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkfSl9XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIHRpdGxlPXtleGFtcGxlLm5hbWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLnNldEN1ckV4YW1wbGVJRCh7ZXhhbXBsZV9pZDogaW5kZXh9KX19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4YW1wbGVfbmFtZX0+IHtleGFtcGxlLm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhhbXBsZV9sZW5ndGh9Pkxlbmd0aDoge2Zvcm1hdChleGFtcGxlLmR1cmF0aW9uKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZXhhbXBsZXMgfHwgdGhpcy5wcm9wcy5leGFtcGxlcy5sZW5ndGggPCAxXG4gICAgICB8fCB0aGlzLnByb3BzLmV4YW1wbGVzW3RoaXMucHJvcHMuY3VyX2V4YW1wbGVfaWRdLmVudHJpZXMubGVuZ3RoIDwgMikgcmV0dXJuIDxoMz5ObyBFbnRyaWVzPC9oMz47XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZXhhbXBsZXNbdGhpcy5wcm9wcy5jdXJfZXhhbXBsZV9pZF0uZW50cmllcy5zbGljZSgxKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgPEVudHJ5IFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBlbnRyeV9pZD17aW5kZXggKyAxfVxuICAgICAgICBleGFtcGxlX2lkPXt0aGlzLnByb3BzLmN1cl9leGFtcGxlX2lkfVxuICAgICAgICBzZXJ2aWNlcz17dGhpcy5wcm9wcy5zZXJ2aWNlc31cbiAgICAgICAgZWRpdEVudHJ5PXt0aGlzLmVkaXRFbnRyeS5iaW5kKHRoaXMpfVxuICAgICAgICBlZGl0QXR0cmlidXRlPXt0aGlzLmVkaXRFbnRyeUF0dHJpYnV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICBvbkRlbGV0ZT17KCkgPT4ge3RoaXMuZGVsRW50cnkoaW5kZXggKyAxKX19XG4gICAgICAgIG9uRWRpdD17KGRvbmUpID0+IHt0aGlzLnByb3BzLnNldEN1ckVudHJ5SUQoe2VudHJ5X2lkOiBkb25lID8gMCA6IGluZGV4ICsgMX0pfX1cbiAgICAgICAgZWRpdGluZz17dGhpcy5wcm9wcy5jdXJfZW50cnlfaWQgPT0gaW5kZXggKyAxfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHt0aGlzLnByb3BzLnNldEhvdmVyRW50cnlJRCh7ZW50cnlfaWQ6IGluZGV4ICsgMX0pfX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7dGhpcy5wcm9wcy5zZXRIb3ZlckVudHJ5SUQoe2VudHJ5X2lkOiB1bmRlZmluZWR9KX19XG4gICAgICAgIHsuLi5lbnRyeX0gLz5cbiAgICApKTtcbiAgfVxuXG4gIGZldGNoU2VydmljZXMoYXR0ZW1wdD0wKSB7XG4gICAgaWYgKGF0dGVtcHQgPT09IDUpIHtcbiAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGZldGNoIHNlcnZpY2VzXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmZXRjaCgnaHR0cDovL2JhY2tlbmQuY2VudHJlZS54eXo6NTAwMC9nZXRfdXNlcl9zZXJ2aWNlcycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJGZXRjaCBFcnJvclwiKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cDovL2JhY2tlbmQuY2VudHJlZS54eXo6NTAwMC9nZXRfc2VydmljZXNfYXR0cmlidXRlcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQmFzaWMgXCIgKyBidG9hKFwiYjRlZDIxOGUtMGVmNi00YzBhLWI3ZTMtYWM4NmU2ZWRmZmIyOm1ha2VfYW1lcmljYV9ncmVhdF9hZ2FpblwiKSxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7c2VydmljZV9uYW1lczogZGF0YX0pXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRTZXJ2aWNlcyh7c2VydmljZXM6IGRhdGF9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mZXRjaFNlcnZpY2VzKGF0dGVtcHQgKyAxKSwgYXR0ZW1wdCAqIGF0dGVtcHQgKiAzMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IHN0YXRlID0+IHtcbiAgY29uc3QgcyA9IHN0YXRlLnRvSlMoKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2aWNlczogcy5ydW50aW1lLnNlcnZpY2VzLFxuICAgIGV4YW1wbGVzOiBzLnJ1bnRpbWUuZXhhbXBsZXMsXG4gICAgY3VyX2V4YW1wbGVfaWQ6IHMucnVudGltZS5jdXJfZXhhbXBsZV9pZCxcbiAgICBjdXJfZW50cnlfaWQ6IHMucnVudGltZS5jdXJfZW50cnlfaWQsXG4gICAgaG92ZXJfZW50cnlfaWQ6IHMucnVudGltZS5ob3Zlcl9lbnRyeV9pZCxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaCA9IChkaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKHtcbiAgc2V0U2VydmljZXM6IHNldFNlcnZpY2VzLFxuICBzZXRDdXJFeGFtcGxlSUQ6IHNldEN1ckV4YW1wbGVJRCxcbiAgc2V0Q3VyRW50cnlJRDogc2V0Q3VyRW50cnlJRCxcbiAgc2V0SG92ZXJFbnRyeUlEOiBzZXRIb3ZlckVudHJ5SUQsXG4gIGVkaXRFbnRyeTogZWRpdEVudHJ5LFxuICBlZGl0RW50cnlBdHRyaWJ1dGU6IGVkaXRFbnRyeUF0dHJpYnV0ZSxcbiAgcHVzaEV4YW1wbGVFbnRyeTogcHVzaEV4YW1wbGVFbnRyeSxcbiAgZGVsRXhhbXBsZUVudHJ5OiBkZWxFeGFtcGxlRW50cnksXG4gIGRlbEV4YW1wbGU6IGRlbEV4YW1wbGUsXG59LCBkaXNwYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKSh3aXRoU3R5bGVzKHN0eWxlcykoQ2xhc3NpZnkpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2NsYXNzaWZ5L2NsYXNzaWZ5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gSW1wb3J0IENvbXBvbmVudHNcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F1ZGlvQ2xpcHBlci5jc3MnO1xuXG5jbGFzcyBBdWRpb0NsaXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGxheWluZzogZmFsc2UsXG5cdFx0XHRzaWRlOiBudWxsLFxuXHRcdFx0cHJvZ3Jlc3M6IDAsXG5cdFx0fVxuXHRcdHRoaXMuYm91bmRzID0gbnVsbDtcblx0XHR0aGlzLmhvdmVyID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkID0gbnVsbDtcblxuXHRcdHRoaXMuZ2V0UmVjdCA9IHRoaXMuZ2V0UmVjdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud2luZG93TW91c2VNb3ZlID0gdGhpcy53aW5kb3dNb3VzZU1vdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLndpbmRvd01vdXNlVXAgPSB0aGlzLndpbmRvd01vdXNlVXAuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuZ2V0UmVjdCgpO1xuXHRcdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8oKTtcblx0XHR0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IHRoaXMuYXVkaW8uY3VycmVudFRpbWUgLyB0aGlzLmF1ZGlvLmR1cmF0aW9uIH0pO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IDAgfSk7XG5cdFx0fSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZ2V0UmVjdCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMud2luZG93TW91c2VNb3ZlKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMud2luZG93TW91c2VVcCk7XG5cdH1cblxuXHR3aW5kb3dNb3VzZU1vdmUoZSkge1xuICBcdGlmICghdGhpcy5wcm9wcy5lbnRyaWVzKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWQgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bGV0IHggPSAoZS5jbGllbnRYIC0gdGhpcy5ib3VuZHMubGVmdCkgLyB0aGlzLmJvdW5kcy53aWR0aDtcblx0XHRpZiAoeCA8IDApIHggPSAwO1xuXHRcdGVsc2UgaWYgKHggPiAxKSB4ID0gMTtcblx0XHRpZiAodGhpcy5zZWxlY3RlZCA9PT0gJ3NlbGVjdGlvbicpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gdGhpcy5wcm9wcy5lbnRyaWVzW3RoaXMucHJvcHMuY3VyX2VudHJ5X2lkXTtcblx0ICBcdGNvbnN0IG1pZCA9IChlbnRyeS5zdGFydCArIGVudHJ5LmVuZCkgLyAoMiAqIHRoaXMucHJvcHMuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNpZGU6IHggPCBtaWQgPyAnbGVmdCcgOiAncmlnaHQnIH0pO1xuXHRcdFx0dGhpcy5wcm9wcy5lZGl0RW50cnkodGhpcy5zdGF0ZS5zaWRlID09PSAnbGVmdCcgPyAnc3RhcnQnIDogJ2VuZCcsIHggKiB0aGlzLnByb3BzLmR1cmF0aW9uKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT09ICdwcm9ncmVzcycgJiYgdGhpcy5hdWRpbykge1xuXHRcdFx0dGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHRoaXMuYXVkaW8uZHVyYXRpb24gKiB4O1xuXHRcdH1cblx0fVxuXG5cdHdpbmRvd01vdXNlVXAoKSB7XG4gIFx0aWYgKCF0aGlzLnByb3BzLmVudHJpZXMpIHJldHVybjtcblx0XHR0aGlzLnNlbGVjdGVkID0gbnVsbDtcblx0XHRpZiAoIXRoaXMuaG92ZXIpIHRoaXMuc2V0U3RhdGUoeyBzaWRlOiBudWxsIH0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZ2V0UmVjdCk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMud2luZG93TW91c2VNb3ZlKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMud2luZG93TW91c2VVcCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHQpIHtcblx0XHRpZiAobmV4dC5zcmMgJiYgKCF0aGlzLmF1ZGlvIHx8IG5leHQuc3JjICE9IHRoaXMuYXVkaW8uc3JjKSlcblx0XHRcdHRoaXMuc2V0QXVkaW8obmV4dC5zcmMpO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IHRyYWNrRm5zID0ge1xuICBcdFx0cmVmOiAocikgPT4geyB0aGlzLnRyYWNrID0gcjsgfSxcblx0XHRcdG9uTW91c2VNb3ZlOiB0aGlzLnRyYWNrSG92ZXIuYmluZCh0aGlzKSxcblx0XHRcdG9uTW91c2VMZWF2ZTogdGhpcy50cmFja0xlYXZlLmJpbmQodGhpcyksXG5cdFx0XHRvbk1vdXNlRG93bjogdGhpcy50cmFja0Rvd24uYmluZCh0aGlzKSxcblx0XHR9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLnJlc2V0KX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfT48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwge1tzdHlsZXMucGxheV06ICF0aGlzLnN0YXRlLnBsYXlpbmcsIFtzdHlsZXMucGF1c2VdOiB0aGlzLnN0YXRlLnBsYXlpbmd9KX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50b2dnbGVQbGF5LmJpbmQodGhpcyl9Pjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrfSB7Li4udHJhY2tGbnN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnNlbGVjdGlvbnMsIHsgW3N0eWxlcy5sZWZ0XTogdGhpcy5zdGF0ZS5zaWRlID09PSAnbGVmdCcsIFtzdHlsZXMucmlnaHRdOiB0aGlzLnN0YXRlLnNpZGUgPT09ICdyaWdodCcgfSl9IFxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHsgdGhpcy5ob3ZlciA9ICdzZWxlY3Rpb24nIH19PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5nZXRTZWxlY3Rpb25zKCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9IFxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHsgdGhpcy5ob3ZlciA9ICdwcm9ncmVzcycgfX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ19iYXJ9IHN0eWxlPXt7d2lkdGg6ICgxMDAgKiB0aGlzLnN0YXRlLnByb2dyZXNzKSArICAnJSd9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzZXRBdWRpbyhibG9iKSB7XG4gIFx0dGhpcy5hdWRpby5zcmMgPSBibG9iO1xuICBcdHRoaXMuYXVkaW8ubG9hZCgpO1xuICB9XG5cbiAgdG9nZ2xlUGxheSgpIHtcbiAgXHRpZiAodGhpcy5zdGF0ZS5wbGF5aW5nKSB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gIFx0ZWxzZSB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgXHR0aGlzLnNldFN0YXRlKHByZXYgPT4gKHsgcGxheWluZzogIXByZXYucGxheWluZ30pKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICBcdGlmICghdGhpcy5hdWRpbykgcmV0dXJuO1xuXHRcdHRoaXMuYXVkaW8ucGF1c2UoKTtcblx0XHR0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblx0XHR0aGlzLnNldFN0YXRlKHByZXYgPT4geyBwbGF5aW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRyYWNrSG92ZXIoZSkge1xuICBcdGlmICghdGhpcy5wcm9wcy5lbnRyaWVzKSByZXR1cm47XG4gIFx0Y29uc3QgeCA9IChlLmNsaWVudFggLSB0aGlzLmJvdW5kcy5sZWZ0KSAvIHRoaXMuYm91bmRzLndpZHRoO1xuXHRcdGlmICh0aGlzLmhvdmVyID09PSAnc2VsZWN0aW9uJyAmJiAhKHRoaXMuc2VsZWN0ZWQgPT09ICdzZWxlY3Rpb24nKSkge1xuXHRcdFx0Y29uc3QgZW50cnkgPSB0aGlzLnByb3BzLmVudHJpZXNbdGhpcy5wcm9wcy5jdXJfZW50cnlfaWRdO1xuXHQgIFx0Y29uc3QgbWlkID0gKGVudHJ5LnN0YXJ0ICsgZW50cnkuZW5kKSAvICgyICogdGhpcy5wcm9wcy5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2lkZTogeCA8IG1pZCA/ICdsZWZ0JyA6ICdyaWdodCcgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaWRlOiBudWxsIH0pO1xuXHRcdH1cbiAgfVxuXG4gIHRyYWNrTGVhdmUoKSB7XG4gIFx0dGhpcy5ob3ZlciA9IG51bGw7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7IHNpZGU6IG51bGwgfSk7XG4gIH1cblxuICB0cmFja0Rvd24oZSkge1xuICBcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmhvdmVyO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9ucygpIHtcbiAgXHRpZiAoIXRoaXMucHJvcHMuZW50cmllcykgcmV0dXJuO1xuICBcdHJldHVybiB0aGlzLnByb3BzLmVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgXHRcdGNvbnN0IHN0YXJ0ID0gMTAwICogKGVudHJ5LnN0YXJ0IC8gdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIFx0XHRjb25zdCBlbmQgPSAxMDAgKiAoKGVudHJ5LmVuZCAtIGVudHJ5LnN0YXJ0KSAvIHRoaXMucHJvcHMuZHVyYXRpb24pO1xuXHRcdFx0cmV0dXJuIDxkaXZcblx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zZWxfYmFyLCB7XG5cdFx0XHRcdFx0W3N0eWxlcy5jdXJyZW50XTogaW5kZXggPT09IHRoaXMucHJvcHMuY3VyX2VudHJ5X2lkLFxuXHRcdFx0XHRcdFtzdHlsZXMuaG92ZXJdOiBpbmRleCA9PT0gdGhpcy5wcm9wcy5ob3Zlcl9lbnRyeV9pZFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0c3R5bGU9e3tsZWZ0OiBzdGFydCArICclJywgd2lkdGg6IGVuZCArICclJ319Lz47XG4gIFx0fSk7XG4gIH1cblxuICBnZXRSZWN0KCkge1xuXHRcdHRoaXMuYm91bmRzID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy50cmFjaykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEF1ZGlvQ2xpcHBlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvQXVkaW9DbGlwcGVyL0F1ZGlvQ2xpcHBlci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vQXVkaW9DbGlwcGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9BdWRpb0NsaXBwZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vQXVkaW9DbGlwcGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0F1ZGlvQ2xpcHBlci9BdWRpb0NsaXBwZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uQXVkaW9DbGlwcGVyLXJvb3QtMjFCdjEge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLkF1ZGlvQ2xpcHBlci1jb250YWluZXItM05xSjQge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSB7XFxuXFx0YmFja2dyb3VuZDogI2NjYztcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4uQXVkaW9DbGlwcGVyLWNvbnRyb2xzLTJGSk01IC5BdWRpb0NsaXBwZXItYnV0dG9uLTF5R3NxIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0d2lkdGg6IDMwcHg7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcdC1vLXVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR9XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSAuQXVkaW9DbGlwcGVyLXBsYXktRUVkVlo6YWZ0ZXIge1xcblxcdFxcdGNvbnRlbnQ6ICcnO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR3aWR0aDogMDtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0XFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRcXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxN3B4O1xcblxcdFxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzU1NTtcXG5cXHR9XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSAuQXVkaW9DbGlwcGVyLXBsYXktRUVkVlo6aG92ZXI6YWZ0ZXIge1xcblxcdFxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzRlN2ZjNjtcXG5cXHR9XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSAuQXVkaW9DbGlwcGVyLXBhdXNlLTNDaHF3OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSAuQXVkaW9DbGlwcGVyLXBhdXNlLTNDaHF3OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiBjYWxjKDUwJSArIDVweCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5BdWRpb0NsaXBwZXItY29udHJvbHMtMkZKTTUgLkF1ZGlvQ2xpcHBlci1wYXVzZS0zQ2hxdzpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNGU3ZmM2O1xcbn1cXG4uQXVkaW9DbGlwcGVyLWNvbnRyb2xzLTJGSk01IC5BdWRpb0NsaXBwZXItcGF1c2UtM0NocXc6aG92ZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxufVxcbi5BdWRpb0NsaXBwZXItY29udHJvbHMtMkZKTTUgLkF1ZGlvQ2xpcHBlci1yZXNldC0yS2dUWjphZnRlciB7XFxuXFx0XFx0Y29udGVudDogJyc7XFxuXFx0XFx0YmFja2dyb3VuZDogIzU1NTtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDE2cHg7XFxuXFx0XFx0aGVpZ2h0OiAxNnB4O1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdFxcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0XFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuLkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNSAuQXVkaW9DbGlwcGVyLXJlc2V0LTJLZ1RaOmhvdmVyOmFmdGVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZTY0O1xcblxcdH1cXG4uQXVkaW9DbGlwcGVyLXRyYWNrLTM0QTZlIHtcXG5cXHRiYWNrZ3JvdW5kOiAjY2NjO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcbn1cXG4uQXVkaW9DbGlwcGVyLXNlbGVjdGlvbnMtMkYza3cge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IDEwMCVcXG59XFxuLkF1ZGlvQ2xpcHBlci1zZWxlY3Rpb25zLTJGM2t3LkF1ZGlvQ2xpcHBlci1sZWZ0LTN6Vk8zIC5BdWRpb0NsaXBwZXItY3VycmVudC1tU2Q0cDphZnRlciB7XFxuICBsZWZ0OiAtNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5BdWRpb0NsaXBwZXItc2VsZWN0aW9ucy0yRjNrdy5BdWRpb0NsaXBwZXItcmlnaHQtMkFQajMgLkF1ZGlvQ2xpcHBlci1jdXJyZW50LW1TZDRwOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcmlnaHQ6IC01cHg7XFxufVxcbi5BdWRpb0NsaXBwZXItc2VsX2Jhci0zTTJEYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYWE7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgI2FhYTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHQvKiB3aWR0aDogNjAlOyAqL1xcblxcdHRvcDogMDtcXG5cXHQvKiBsZWZ0OiAyMCU7ICovXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxuXFx0LW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2VcXG59XFxuLkF1ZGlvQ2xpcHBlci1zZWxfYmFyLTNNMkRiLkF1ZGlvQ2xpcHBlci1jdXJyZW50LW1TZDRwIHtcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxuICBib3JkZXItY29sb3I6ICM5MTkxOTE7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4uQXVkaW9DbGlwcGVyLXNlbF9iYXItM00yRGI6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICM5MTkxOTE7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIHRvcDogLTVweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLkF1ZGlvQ2xpcHBlci1zZWxfYmFyLTNNMkRiLkF1ZGlvQ2xpcHBlci1ob3Zlci0zaU0xeiB7XFxuICBiYWNrZ3JvdW5kOiAjN2U5Y2NjO1xcbiAgYm9yZGVyLWNvbG9yOiAjNjQ4NGI3O1xcbiAgei1pbmRleDogNTtcXG59XFxuLkF1ZGlvQ2xpcHBlci1wcm9ncmVzcy1lVkRZSiB7XFxuXFx0YmFja2dyb3VuZDogIzYxNjE2MTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAtNTAlO1xcblxcdGhlaWdodDogMTBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHR6LWluZGV4OiA2O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5BdWRpb0NsaXBwZXItcHJvZ19iYXItMU9mMDAge1xcblxcdGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8vIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zIGxpbmVhcjtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvQXVkaW9DbGlwcGVyL0F1ZGlvQ2xpcHBlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCxlQUFlO0NBQ2Y7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7QUFDRjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztNQUNyQyxxQ0FBcUM7VUFDakMsaUNBQWlDO0VBQ3pDLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsdURBQXVEO0VBQ3ZEO0FBQ0Y7RUFDRSwwREFBMEQ7RUFDMUQ7QUFDRjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7TUFDckMscUNBQXFDO1VBQ2pDLGlDQUFpQztDQUMxQztBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztNQUNyQyxxQ0FBcUM7VUFDakMsaUNBQWlDO0NBQzFDO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztNQUNyQyxxQ0FBcUM7VUFDakMsaUNBQWlDO0VBQ3pDO0FBQ0Y7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZixZQUFZO0NBQ2I7QUFDRDtDQUNDLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLCtCQUErQjtTQUN2Qix1QkFBdUI7Q0FDL0IsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpRUFBaUU7Q0FDakUsNERBQTREO0NBQzVELHdEQUF3RDtDQUN4RDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7TUFDN0IsNkJBQTZCO1VBQ3pCLHlCQUF5QjtDQUNsQztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixXQUFXO0NBQ1o7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGFBQWE7Q0FDYixZQUFZO0NBQ1osb0NBQW9DO0tBQ2hDLGdDQUFnQztTQUM1Qiw0QkFBNEI7Q0FDcEMsV0FBVztDQUNYLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixTQUFTO0NBQ1QsYUFBYTtDQUNiLGtDQUFrQztDQUNsQ1wiLFwiZmlsZVwiOlwiQXVkaW9DbGlwcGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG4uY29udHJvbHMge1xcblxcdGJhY2tncm91bmQ6ICNjY2M7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAwIDVweDtcXG59XFxuLmNvbnRyb2xzIC5idXR0b24ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR3aWR0aDogMzBweDtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRcXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdH1cXG4uY29udHJvbHMgLnBsYXk6YWZ0ZXIge1xcblxcdFxcdGNvbnRlbnQ6ICcnO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR3aWR0aDogMDtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0XFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRcXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxN3B4O1xcblxcdFxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzU1NTtcXG5cXHR9XFxuLmNvbnRyb2xzIC5wbGF5OmhvdmVyOmFmdGVyIHtcXG5cXHRcXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM0ZTdmYzY7XFxuXFx0fVxcbi5jb250cm9scyAucGF1c2U6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uY29udHJvbHMgLnBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiBjYWxjKDUwJSArIDVweCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5jb250cm9scyAucGF1c2U6aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG59XFxuLmNvbnRyb2xzIC5wYXVzZTpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG59XFxuLmNvbnRyb2xzIC5yZXNldDphZnRlciB7XFxuXFx0XFx0Y29udGVudDogJyc7XFxuXFx0XFx0YmFja2dyb3VuZDogIzU1NTtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDE2cHg7XFxuXFx0XFx0aGVpZ2h0OiAxNnB4O1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdFxcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0XFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuLmNvbnRyb2xzIC5yZXNldDpob3ZlcjphZnRlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2U2NDtcXG5cXHR9XFxuLnRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjY2NjO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcbn1cXG4uc2VsZWN0aW9ucyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGhlaWdodDogMTAwJVxcbn1cXG4uc2VsZWN0aW9ucy5sZWZ0IC5jdXJyZW50OmFmdGVyIHtcXG4gIGxlZnQ6IC01cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNlbGVjdGlvbnMucmlnaHQgLmN1cnJlbnQ6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICByaWdodDogLTVweDtcXG59XFxuLnNlbF9iYXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWFhO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNhYWE7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Lyogd2lkdGg6IDYwJTsgKi9cXG5cXHR0b3A6IDA7XFxuXFx0LyogbGVmdDogMjAlOyAqL1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcblxcdC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlXFxufVxcbi5zZWxfYmFyLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZDogI2FhYTtcXG4gIGJvcmRlci1jb2xvcjogIzkxOTE5MTtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5zZWxfYmFyOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjOTE5MTkxO1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHdpZHRoOiA4cHg7XFxuICB0b3A6IC01cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5zZWxfYmFyLmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM3ZTljY2M7XFxuICBib3JkZXItY29sb3I6ICM2NDg0Yjc7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4ucHJvZ3Jlc3Mge1xcblxcdGJhY2tncm91bmQ6ICM2MTYxNjE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogLTUwJTtcXG5cXHRoZWlnaHQ6IDEwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0ei1pbmRleDogNjtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1vLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ucHJvZ19iYXIge1xcblxcdGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8vIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zIGxpbmVhcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJBdWRpb0NsaXBwZXItcm9vdC0yMUJ2MVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkF1ZGlvQ2xpcHBlci1jb250YWluZXItM05xSjRcIixcblx0XCJjb250cm9sc1wiOiBcIkF1ZGlvQ2xpcHBlci1jb250cm9scy0yRkpNNVwiLFxuXHRcImJ1dHRvblwiOiBcIkF1ZGlvQ2xpcHBlci1idXR0b24tMXlHc3FcIixcblx0XCJwbGF5XCI6IFwiQXVkaW9DbGlwcGVyLXBsYXktRUVkVlpcIixcblx0XCJwYXVzZVwiOiBcIkF1ZGlvQ2xpcHBlci1wYXVzZS0zQ2hxd1wiLFxuXHRcInJlc2V0XCI6IFwiQXVkaW9DbGlwcGVyLXJlc2V0LTJLZ1RaXCIsXG5cdFwidHJhY2tcIjogXCJBdWRpb0NsaXBwZXItdHJhY2stMzRBNmVcIixcblx0XCJzZWxlY3Rpb25zXCI6IFwiQXVkaW9DbGlwcGVyLXNlbGVjdGlvbnMtMkYza3dcIixcblx0XCJsZWZ0XCI6IFwiQXVkaW9DbGlwcGVyLWxlZnQtM3pWTzNcIixcblx0XCJjdXJyZW50XCI6IFwiQXVkaW9DbGlwcGVyLWN1cnJlbnQtbVNkNHBcIixcblx0XCJyaWdodFwiOiBcIkF1ZGlvQ2xpcHBlci1yaWdodC0yQVBqM1wiLFxuXHRcInNlbF9iYXJcIjogXCJBdWRpb0NsaXBwZXItc2VsX2Jhci0zTTJEYlwiLFxuXHRcImhvdmVyXCI6IFwiQXVkaW9DbGlwcGVyLWhvdmVyLTNpTTF6XCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJBdWRpb0NsaXBwZXItcHJvZ3Jlc3MtZVZEWUpcIixcblx0XCJwcm9nX2JhclwiOiBcIkF1ZGlvQ2xpcHBlci1wcm9nX2Jhci0xT2YwMFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0F1ZGlvQ2xpcHBlci9BdWRpb0NsaXBwZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2FkZEV4YW1wbGVzfSBmcm9tICdjb21wb25lbnRzLy4uL2FjdGlvbnMvcnVudGltZSc7XG5cbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5cbmltcG9ydCBhcnJvdyBmcm9tICcuL2Fycm93LnN2Zyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1wb3J0LmNzcyc7XG5cbmNsYXNzIEltcG9ydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmaWxlczogW11cblx0XHR9XG5cdH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICBcdFx0PERyb3B6b25lIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmV9XG4gICAgICAgICAgICBhY2NlcHQ9XCJhdWRpby8qXCJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX1cbiAgICAgICAgICAgIHJlamVjdENsYXNzTmFtZT17c3R5bGVzLnJlamVjdH1cbiAgICAgICAgICAgIG9uRHJvcD17KGFjY2VwdCwgcmVqZWN0KSA9PiB7dGhpcy5oYW5kbGVEcm9wKGFjY2VwdCl9fT5cbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjMgMzFcIj5cbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5hcnJvdzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8cG9seWxpbmUgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gcG9pbnRzPVwiMS41IDE5LjUgMTEuNSAyOS41IDIxLjUgMTkuNVwiLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9IHgxPVwiMTEuNVwiIHkxPVwiMjkuNVwiIHgyPVwiMTEuNVwiIHkyPVwiMS41XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWR9PkNsaWNrIHRvIFVwbG9hZCBGaWxlczwvaDI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmRyYWd9Pm9yIGRyYWcgZm9sZGVyPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0XHQ8L0Ryb3B6b25lPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25maXJtYXRpb259PkZpbGVzIEFkZGVkPC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVEcm9wKGZpbGVzKSB7XG4gICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPCAxKSBhbGVydChcIkZpbGV0eXBlIE5vdCBTdXBwb3J0ZWRcXG5BdWRpbyBGaWxlIFJlcXVpcmVkXCIpO1xuICAgIGVsc2UgdGhpcy5wYXJzZUZpbGVzKGZpbGVzKS50aGVuKGZpbGVzID0+IHt0aGlzLnByb3BzLmFkZEV4YW1wbGVzKHtleGFtcGxlczogZmlsZXN9KX0pO1xuICB9XG5cbiAgcGFyc2VGaWxlcyhmaWxlcykge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChmaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhmaWxlLnByZXZpZXcpO1xuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMucHJvcHMuY3JlYXRlRXhhbXBsZShmaWxlLm5hbWUsIGZpbGUucHJldmlldywgZmlsZS50eXBlLCBmaWxlLCBhdWRpby5kdXJhdGlvbiAqIDEwMDApKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gIGFkZEV4YW1wbGVzOiBhZGRFeGFtcGxlcyxcbn0sIGRpc3BhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaCkod2l0aFN0eWxlcyhzdHlsZXMpKEltcG9ydCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9DbGFzc2lmeS9JbXBvcnQvSW1wb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L2Fycm93LnN2Zz9jNzkyZTg2ZFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L2Fycm93LnN2Z1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSW1wb3J0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9JbXBvcnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSW1wb3J0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0NsYXNzaWZ5L0ltcG9ydC9JbXBvcnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uSW1wb3J0LXJvb3QtMXI5OEsge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5JbXBvcnQtY29udGFpbmVyLXRMUW1lIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbiAgLyogei1pbmRleDogMTsgKi9cXG59XFxuLkltcG9ydC1saW5lLTFVWWc3IHtcXG5cXHRmaWxsOm5vbmU7XFxuXFx0c3Ryb2tlOiMyMjI7XFxuXFx0c3Ryb2tlLWxpbmVjYXA6cm91bmQ7XFxuXFx0c3Ryb2tlLWxpbmVqb2luOnJvdW5kO1xcblxcdHN0cm9rZS13aWR0aDozcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHN0cm9rZSAwLjI1cyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogc3Ryb2tlIDAuMjVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBzdHJva2UgMC4yNXMgZWFzZTtcXG59XFxuLkltcG9ydC1kcm9wem9uZS1vaF9MaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJVxcbn1cXG4uSW1wb3J0LWRyb3B6b25lLW9oX0xoLkltcG9ydC1hY3RpdmUtMjdxajcge1xcbiAgYmFja2dyb3VuZDogIzlmZGQ1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uSW1wb3J0LWRyb3B6b25lLW9oX0xoLkltcG9ydC1hY3RpdmUtMjdxajcgLkltcG9ydC1saW5lLTFVWWc3IHtcXG5cXHRcXHRcXHRzdHJva2U6ICNmZmY7XFxufVxcbi5JbXBvcnQtZHJvcHpvbmUtb2hfTGguSW1wb3J0LWFjdGl2ZS0yN3FqNyAuSW1wb3J0LWJvcmRlci0yaGdZOSB7XFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG4uSW1wb3J0LWRyb3B6b25lLW9oX0xoLkltcG9ydC1hY3RpdmUtMjdxajcgLkltcG9ydC1hcnJvdy0zQkVSaiB7XFxuXFx0XFx0XFx0LXdlYmtpdC1hbmltYXRpb246IEltcG9ydC1Nb3ZlVXBEb3duLTJjWnAtIDEuMjVzIGVhc2UgaW5maW5pdGU7XFxuXFx0XFx0XFx0YW5pbWF0aW9uOiBJbXBvcnQtTW92ZVVwRG93bi0yY1pwLSAxLjI1cyBlYXNlIGluZmluaXRlO1xcbn1cXG4uSW1wb3J0LWRyb3B6b25lLW9oX0xoLkltcG9ydC1yZWplY3QtYnUzX0wge1xcbiAgYmFja2dyb3VuZDogI2U2NDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uSW1wb3J0LWRyb3B6b25lLW9oX0xoLkltcG9ydC1yZWplY3QtYnUzX0wgLkltcG9ydC1saW5lLTFVWWc3IHtcXG5cXHRcXHRcXHRzdHJva2U6ICNmZmY7XFxufVxcbi5JbXBvcnQtZHJvcHpvbmUtb2hfTGguSW1wb3J0LXJlamVjdC1idTNfTCAuSW1wb3J0LWJvcmRlci0yaGdZOSB7XFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgSW1wb3J0LU1vdmVVcERvd24tMmNacC0ge1xcbiAgMCUge1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3R0b206IDEwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIEltcG9ydC1Nb3ZlVXBEb3duLTJjWnAtIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvdHRvbTogMDtcXG4gIH1cXG59XFxuLkltcG9ydC1ib3JkZXItMmhnWTkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XFxuXFx0Ym9yZGVyOiAycHggZGFzaGVkICMyMjI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcXG5cXHQtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcXG5cXHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcXG59XFxuLkltcG9ydC10ZXh0LXUyYnBzIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uSW1wb3J0LXRleHQtdTJicHMgLkltcG9ydC1hcnJvdy0zQkVSaiB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdpZHRoOiAyNnB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDNweDtcXG5cXHR9XFxuLkltcG9ydC10ZXh0LXUyYnBzIC5JbXBvcnQtdXBsb2FkLTNtLXdfIHtcXG5cXHRcXHRmb250LXNpemU6IDE2cHg7XFxuXFx0XFx0bWFyZ2luOiAzcHggMDtcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdH1cXG4uSW1wb3J0LXRleHQtdTJicHMgLkltcG9ydC1kcmFnLWpQbDNBIHtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbmlucHV0IHtcXG5cXHRwb2ludGVyLWV2ZW50czogYWxsO1xcblxcdG9wYWNpdHk6IDAuMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOjA7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6MDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9DbGFzc2lmeS9JbXBvcnQvSW1wb3J0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixpQkFBaUI7RUFDaEIsc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyw4QkFBOEI7Q0FDL0I7QUFDRDtDQUNDLG1CQUFtQjtFQUNsQiw0REFBNEQ7RUFDNUQsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCxZQUFZO0VBQ1osWUFBWTtDQUNiO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtDQUNiO0FBQ0Q7R0FDRyxhQUFhO0NBQ2Y7QUFDRDtHQUNHLG1CQUFtQjtDQUNyQjtBQUNEO0dBQ0csK0RBQWtEO0dBQ2xELHVEQUEwQztDQUM1QztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0dBQ0csYUFBYTtDQUNmO0FBQ0Q7R0FDRyxtQkFBbUI7Q0FDckI7QUFDRDtFQUNFO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLFVBQVU7R0FDWDtDQUNGO0FBQ0Q7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxVQUFVO0dBQ1g7Q0FDRjtBQUNEO0NBQ0MsbUJBQW1CO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO01BQ3JDLHFDQUFxQztVQUNqQyxpQ0FBaUM7RUFDekMseUJBQXlCO0NBQzFCLDBCQUEwQjtDQUMxQix3QkFBd0I7Q0FDeEIsNENBQTRDO0NBQzVDLHVDQUF1QztDQUN2QyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHlDQUF5QztLQUNyQyxxQ0FBcUM7U0FDakMsaUNBQWlDO0NBQ3pDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakI7QUFDRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWO0FBQ0Y7Q0FDQyxvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixNQUFNO0NBQ04sUUFBUTtDQUNSLFVBQVU7Q0FDVixRQUFRO0NBQ1IsWUFBWTtDQUNaLFlBQVk7Q0FDWixjQUFjO0NBQ2RcIixcImZpbGVcIjpcIkltcG9ydC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbiAgLyogei1pbmRleDogMTsgKi9cXG59XFxuLmxpbmUge1xcblxcdGZpbGw6bm9uZTtcXG5cXHRzdHJva2U6IzIyMjtcXG5cXHRzdHJva2UtbGluZWNhcDpyb3VuZDtcXG5cXHRzdHJva2UtbGluZWpvaW46cm91bmQ7XFxuXFx0c3Ryb2tlLXdpZHRoOjNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogc3Ryb2tlIDAuMjVzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBzdHJva2UgMC4yNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHN0cm9rZSAwLjI1cyBlYXNlO1xcbn1cXG4uZHJvcHpvbmUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZSwgYmFja2dyb3VuZCAwLjI1cyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZSwgYmFja2dyb3VuZCAwLjI1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZSwgYmFja2dyb3VuZCAwLjI1cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCVcXG59XFxuLmRyb3B6b25lLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjOWZkZDVlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5kcm9wem9uZS5hY3RpdmUgLmxpbmUge1xcblxcdFxcdFxcdHN0cm9rZTogI2ZmZjtcXG59XFxuLmRyb3B6b25lLmFjdGl2ZSAuYm9yZGVyIHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbi5kcm9wem9uZS5hY3RpdmUgLmFycm93IHtcXG5cXHRcXHRcXHQtd2Via2l0LWFuaW1hdGlvbjogTW92ZVVwRG93biAxLjI1cyBlYXNlIGluZmluaXRlO1xcblxcdFxcdFxcdGFuaW1hdGlvbjogTW92ZVVwRG93biAxLjI1cyBlYXNlIGluZmluaXRlO1xcbn1cXG4uZHJvcHpvbmUucmVqZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNlNjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmRyb3B6b25lLnJlamVjdCAubGluZSB7XFxuXFx0XFx0XFx0c3Ryb2tlOiAjZmZmO1xcbn1cXG4uZHJvcHpvbmUucmVqZWN0IC5ib3JkZXIge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIE1vdmVVcERvd24ge1xcbiAgMCUge1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3R0b206IDEwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xcbiAgMCUge1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3R0b206IDEwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uYm9yZGVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xcblxcdGJvcmRlcjogMnB4IGRhc2hlZCAjMjIyO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XFxuXFx0LW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XFxufVxcbi50ZXh0IHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dCAuYXJyb3cge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR3aWR0aDogMjZweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzcHg7XFxuXFx0fVxcbi50ZXh0IC51cGxvYWQge1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRcXHRtYXJnaW46IDNweCAwO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0fVxcbi50ZXh0IC5kcmFnIHtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbmlucHV0IHtcXG5cXHRwb2ludGVyLWV2ZW50czogYWxsO1xcblxcdG9wYWNpdHk6IDAuMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOjA7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6MDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkltcG9ydC1yb290LTFyOThLXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSW1wb3J0LWNvbnRhaW5lci10TFFtZVwiLFxuXHRcImxpbmVcIjogXCJJbXBvcnQtbGluZS0xVVlnN1wiLFxuXHRcImRyb3B6b25lXCI6IFwiSW1wb3J0LWRyb3B6b25lLW9oX0xoXCIsXG5cdFwiYWN0aXZlXCI6IFwiSW1wb3J0LWFjdGl2ZS0yN3FqN1wiLFxuXHRcImJvcmRlclwiOiBcIkltcG9ydC1ib3JkZXItMmhnWTlcIixcblx0XCJhcnJvd1wiOiBcIkltcG9ydC1hcnJvdy0zQkVSalwiLFxuXHRcIk1vdmVVcERvd25cIjogXCJJbXBvcnQtTW92ZVVwRG93bi0yY1pwLVwiLFxuXHRcInJlamVjdFwiOiBcIkltcG9ydC1yZWplY3QtYnUzX0xcIixcblx0XCJ0ZXh0XCI6IFwiSW1wb3J0LXRleHQtdTJicHNcIixcblx0XCJ1cGxvYWRcIjogXCJJbXBvcnQtdXBsb2FkLTNtLXdfXCIsXG5cdFwiZHJhZ1wiOiBcIkltcG9ydC1kcmFnLWpQbDNBXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvQ2xhc3NpZnkvSW1wb3J0L0ltcG9ydC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0NsYXNzaWZ5LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9DbGFzc2lmeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9DbGFzc2lmeS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2NsYXNzaWZ5L0NsYXNzaWZ5LmNzc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uQ2xhc3NpZnktcm9vdC0yN3pCcSB7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLkNsYXNzaWZ5LXJvb3QtMjd6QnEgaDMge1xcbiAgXFx0Zm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbi5DbGFzc2lmeS1yb290LTI3ekJxIGgxIHtcXG4gIFxcdG1hcmdpbjogMDtcXG5cXHRcXHR3cmFwOiBlbGxpcHNpcztcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdCAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdCAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB9XFxuLkNsYXNzaWZ5LWNvbnRhaW5lci11cWU5VyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC1vLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLkNsYXNzaWZ5LXVwcGVyLTExT2NKIHtcXG5cXG59XFxuLkNsYXNzaWZ5LW1pZC1mVzdqViB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxufVxcbi5DbGFzc2lmeS1sb3dlci1iOGtoaiB7XFxuXFx0XFxufVxcbi5DbGFzc2lmeS1jb2wtR0ltUUkge1xcblxcdC8qIC13ZWJraXQtZmxleDogMTtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHRmbGV4OiAxOyAqL1xcblxcdG1hcmdpbi1sZWZ0OiAyMHB4XFxufVxcbi5DbGFzc2lmeS1pbXBvcnQtZ1ROc0Ege1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC1vLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHR3aWR0aDogMjAwcHg7XFxufVxcbi5DbGFzc2lmeS1pbXBvcnQtZ1ROc0EgLkNsYXNzaWZ5LWltcG9ydF9jb250LTFYQWJ0IHtcXG5cXHRcXHRoZWlnaHQ6IDIwMHB4O1xcblxcdH1cXG4uQ2xhc3NpZnktcXVldWUtWUdrcFQge1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuXFx0LW8tZmxleC1mbG93OiBjb2x1bW47XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uQ2xhc3NpZnktZXhhbXBsZXMtMmYxRFAge1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG59XFxuLkNsYXNzaWZ5LWV4YW1wbGUtNTFCX2Ige1xcblxcdHBhZGRpbmc6IDVweCA3cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyXFxufVxcbi5DbGFzc2lmeS1leGFtcGxlLTUxQl9iLkNsYXNzaWZ5LXNlbGVjdGVkLTFBWENfIHtcXG4gIGJhY2tncm91bmQ6ICM5ZmRkNWU7XFxuICBjb2xvcjogcmdiKDU3LCA5MywgMjApO1xcbn1cXG4uQ2xhc3NpZnktZXhhbXBsZS01MUJfYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5DbGFzc2lmeS1leGFtcGxlLTUxQl9iIC5DbGFzc2lmeS1leGFtcGxlX25hbWUtMnI1SGYge1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0d3JhcDogZWxsaXBzaXM7XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHQgIG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHQgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdCAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLkNsYXNzaWZ5LWV4YW1wbGUtNTFCX2IgLkNsYXNzaWZ5LWV4YW1wbGVfbGVuZ3RoLTNsd1lQIHtcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLkNsYXNzaWZ5LXN1Ym1pdC0yVFBpMSB7XFxuXFx0YmFja2dyb3VuZDogIzIyMjtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXG59XFxuLkNsYXNzaWZ5LXN1Ym1pdC0yVFBpMTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE1MywgNjcsIDIwKTtcXG4gIGJhY2tncm91bmQ6ICNlZDllNzI7XFxufVxcbi5DbGFzc2lmeS1lZGl0LTFYSERzIHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC1vLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLkNsYXNzaWZ5LWVudHJ5X2FkZGVyLTFuakNpIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XFxuXFx0cGFkZGluZzogNXB4IDdweDtcXG59XFxuLkNsYXNzaWZ5LWVudHJpZXMtM0dtNXAge1xcblxcdHBhZGRpbmc6IDVweCA3cHg7XFxuXFx0LW1vei1mbGV4OiAxO1xcblxcdC1tcy1mbGV4OiAxO1xcblxcdC1vLWZsZXg6IDE7XFxuXFx0LXdlYmtpdC1ib3gtZmxleDogMTtcXG5cXHQgICAgICAgIGZsZXg6IDEgMSAwJTtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uQ2xhc3NpZnktZGF0YS1xQ2ZQdyB7XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAyMHB4ICovXFxufVxcbi5DbGFzc2lmeS1lbnRyaWVzX2NvbnQtR1Z3X2kge1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuXFx0LW8tZmxleC1mbG93OiBjb2x1bW47XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvcm91dGVzL2NsYXNzaWZ5L0NsYXNzaWZ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtDQUNDLDJCQUEyQjtFQUMxQixrQkFBa0I7Q0FDbkI7QUFDRDtHQUNHLGdCQUFnQjtHQUNoQjtBQUNIO0dBQ0csVUFBVTtFQUNYLGVBQWU7RUFDZixvQkFBb0I7R0FDbkIsaUJBQWlCO0dBQ2pCLDJCQUEyQjtNQUN4Qix3QkFBd0I7R0FDM0I7QUFDSDtDQUNDLGFBQWE7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7Q0FDZixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qiw4QkFBOEI7U0FDdEIsa0JBQWtCO0NBQzFCO0FBQ0Q7O0NBRUM7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsWUFBWTtDQUNaLFdBQVc7Q0FDWCxvQkFBb0I7U0FDWixhQUFhO0NBQ3JCO0FBQ0Q7O0NBRUM7QUFDRDtDQUNDOzs7O1lBSVc7Q0FDWCxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLDhCQUE4QjtTQUN0QixrQkFBa0I7Q0FDMUIsYUFBYTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Q7QUFDRjtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osV0FBVztDQUNYLG9CQUFvQjtTQUNaLGFBQWE7Q0FDckIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IsOEJBQThCO1NBQ3RCLGtCQUFrQjtDQUMxQjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0JBQW9CO1NBQ1osYUFBYTtDQUNyQixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Y7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtHQUNuQixpQkFBaUI7R0FDakIsMkJBQTJCO01BQ3hCLHdCQUF3QjtHQUMzQixpQkFBaUI7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Y7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7QUFDRDtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qiw4QkFBOEI7U0FDdEIsa0JBQWtCO0NBQzFCO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEMsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0JBQW9CO1NBQ1osYUFBYTtDQUNyQixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0JBQW9CO1NBQ1osYUFBYTtDQUNyQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qiw4QkFBOEI7U0FDdEIsa0JBQWtCO0NBQzFCXCIsXCJmaWxlXCI6XCJDbGFzc2lmeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi5yb290IGgzIHtcXG4gIFxcdGZvbnQtc2l6ZTogMTdweDtcXG4gIH1cXG4ucm9vdCBoMSB7XFxuICBcXHRtYXJnaW46IDA7XFxuXFx0XFx0d3JhcDogZWxsaXBzaXM7XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHQgIG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHQgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcbi5jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtby1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdCAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi51cHBlciB7XFxuXFxufVxcbi5taWQge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWFyZ2luLXRvcDogMTVweDtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcbn1cXG4ubG93ZXIge1xcblxcdFxcbn1cXG4uY29sIHtcXG5cXHQvKiAtd2Via2l0LWZsZXg6IDE7XFxuXFx0LW1vei1mbGV4OiAxO1xcblxcdC1tcy1mbGV4OiAxO1xcblxcdC1vLWZsZXg6IDE7XFxuXFx0ZmxleDogMTsgKi9cXG5cXHRtYXJnaW4tbGVmdDogMjBweFxcbn1cXG4uaW1wb3J0IHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtby1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdCAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFx0d2lkdGg6IDIwMHB4O1xcbn1cXG4uaW1wb3J0IC5pbXBvcnRfY29udCB7XFxuXFx0XFx0aGVpZ2h0OiAyMDBweDtcXG5cXHR9XFxuLnF1ZXVlIHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC1vLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmV4YW1wbGVzIHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5leGFtcGxlIHtcXG5cXHRwYWRkaW5nOiA1cHggN3B4O1xcblxcdGN1cnNvcjogcG9pbnRlclxcbn1cXG4uZXhhbXBsZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjOWZkZDVlO1xcbiAgY29sb3I6IHJnYig1NywgOTMsIDIwKTtcXG59XFxuLmV4YW1wbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZXhhbXBsZSAuZXhhbXBsZV9uYW1lIHtcXG5cXHRcXHRmb250LXNpemU6IDE2cHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHdyYXA6IGVsbGlwc2lzO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0ICBvdmVyZmxvdzogaGlkZGVuO1xcblxcdCAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0ICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHQgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5leGFtcGxlIC5leGFtcGxlX2xlbmd0aCB7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHRmb250LXNpemU6IDE0cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5zdWJtaXQge1xcblxcdGJhY2tncm91bmQ6ICMyMjI7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyXFxufVxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYigxNTMsIDY3LCAyMCk7XFxuICBiYWNrZ3JvdW5kOiAjZWQ5ZTcyO1xcbn1cXG4uZWRpdCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtby1mbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdCAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5lbnRyeV9hZGRlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xcblxcdHBhZGRpbmc6IDVweCA3cHg7XFxufVxcbi5lbnRyaWVzIHtcXG5cXHRwYWRkaW5nOiA1cHggN3B4O1xcblxcdC1tb3otZmxleDogMTtcXG5cXHQtbXMtZmxleDogMTtcXG5cXHQtby1mbGV4OiAxO1xcblxcdC13ZWJraXQtYm94LWZsZXg6IDE7XFxuXFx0ICAgICAgICBmbGV4OiAxIDEgMCU7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmRhdGEge1xcblxcdC8qIG1hcmdpbi1yaWdodDogMjBweCAqL1xcbn1cXG4uZW50cmllc19jb250IHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC1vLWZsZXgtZmxvdzogY29sdW1uO1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJDbGFzc2lmeS1yb290LTI3ekJxXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiQ2xhc3NpZnktY29udGFpbmVyLXVxZTlXXCIsXG5cdFwidXBwZXJcIjogXCJDbGFzc2lmeS11cHBlci0xMU9jSlwiLFxuXHRcIm1pZFwiOiBcIkNsYXNzaWZ5LW1pZC1mVzdqVlwiLFxuXHRcImxvd2VyXCI6IFwiQ2xhc3NpZnktbG93ZXItYjhraGpcIixcblx0XCJjb2xcIjogXCJDbGFzc2lmeS1jb2wtR0ltUUlcIixcblx0XCJpbXBvcnRcIjogXCJDbGFzc2lmeS1pbXBvcnQtZ1ROc0FcIixcblx0XCJpbXBvcnRfY29udFwiOiBcIkNsYXNzaWZ5LWltcG9ydF9jb250LTFYQWJ0XCIsXG5cdFwicXVldWVcIjogXCJDbGFzc2lmeS1xdWV1ZS1ZR2twVFwiLFxuXHRcImV4YW1wbGVzXCI6IFwiQ2xhc3NpZnktZXhhbXBsZXMtMmYxRFBcIixcblx0XCJleGFtcGxlXCI6IFwiQ2xhc3NpZnktZXhhbXBsZS01MUJfYlwiLFxuXHRcInNlbGVjdGVkXCI6IFwiQ2xhc3NpZnktc2VsZWN0ZWQtMUFYQ19cIixcblx0XCJleGFtcGxlX25hbWVcIjogXCJDbGFzc2lmeS1leGFtcGxlX25hbWUtMnI1SGZcIixcblx0XCJleGFtcGxlX2xlbmd0aFwiOiBcIkNsYXNzaWZ5LWV4YW1wbGVfbGVuZ3RoLTNsd1lQXCIsXG5cdFwic3VibWl0XCI6IFwiQ2xhc3NpZnktc3VibWl0LTJUUGkxXCIsXG5cdFwiZWRpdFwiOiBcIkNsYXNzaWZ5LWVkaXQtMVhIRHNcIixcblx0XCJlbnRyeV9hZGRlclwiOiBcIkNsYXNzaWZ5LWVudHJ5X2FkZGVyLTFuakNpXCIsXG5cdFwiZW50cmllc1wiOiBcIkNsYXNzaWZ5LWVudHJpZXMtM0dtNXBcIixcblx0XCJkYXRhXCI6IFwiQ2xhc3NpZnktZGF0YS1xQ2ZQd1wiLFxuXHRcImVudHJpZXNfY29udFwiOiBcIkNsYXNzaWZ5LWVudHJpZXNfY29udC1HVndfaVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvY2xhc3NpZnkvQ2xhc3NpZnkuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEvQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBWkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUxBO0FBREE7QUFnQkE7QUFuQkE7QUFDQTtBQXFCQTs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBYkE7QUFDQTtBQWVBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBaEJBO0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUNBO0FBa0VBOzs7Ozs7QUMzRUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakJBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFiQTtBQVJBO0FBNEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUE3QkE7QUFKQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdEQTtBQStEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQTVDQTtBQUNBO0FBOENBOzs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6QkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQUhBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBL0JBO0FBb0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJEQTtBQURBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFyU0E7QUFDQTtBQXVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBUEE7QUFEQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUpBO0FBQ0E7QUE0SkE7Ozs7Ozs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBTkE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFEQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqREE7QUFDQTtBQW1EQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7QUNyRUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=