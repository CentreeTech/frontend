require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 108:
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

/***/ 109:
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

/***/ 110:
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_runtime__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_Service_ServiceEntry__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_Service_CreateType__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Types_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Types_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Types_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/types/Types.js';















class Types extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cur_service: null
    };
  }

  componentDidMount() {
    this.fetchServices();
  }

  render() {
    console.log(2);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.type_cont, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'Types'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.types, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            this.getTypes()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.create_cont, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            'Create Type'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_components_Service_CreateType__["a" /* default */], { onRef: ref => {
              this.createType = ref;
            }, edit_attrs: this.state.cur_service ? this.props.services[this.state.cur_service] : undefined, edit_name: this.state.cur_service, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.buttons, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.submit, onClick: this.submitService.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            'Submit'
          )
        )
      )
    );
  }

  getTypes() {
    if (!this.props.services || Object.keys(this.props.services).length < 1) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.alert, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      },
      'No Types'
    );
    return Object.entries(this.props.services).map(service => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_components_Service_ServiceEntry__["a" /* default */], { key: service[0], service: service[0], attributes: service[1], onEdit: this.setEditType.bind(this), __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }));
  }

  setEditType(service) {
    this.setState({ cur_service: service });
  }

  submitService() {
    const name = this.createType.state.name;
    const attrs = this.createType.state.attributes;
    if (name.length < 1) {
      alert("Service must have name");
      return;
    }
    // console.log(name, attrs);
    fetch('http://backend.centree.xyz:5000/add_service', {
      method: 'POST',
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ service_name: name, attributes: attrs })
    }).then(() => {
      fetch('http://backend.centree.xyz:5000/add_user_service', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
      }).then(this.fetchServices.bind(this));
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

const mapDispatch = dispatch => __WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"]({
  setServices: __WEBPACK_IMPORTED_MODULE_6__actions_runtime__["k" /* setServices */]
}, dispatch);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"](mapState, mapDispatch)(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_10__Types_css___default.a)(Types)));

/***/ }),

/***/ 128:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Service_EditDataWindow__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/ServiceEntry/ServiceEntry.js';









class ServiceEntry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			minimize: true
		};
		this.dataWindowBound;
	}

	componentDidMount() {
		this.dataWindowBound = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.dataWindow).getBoundingClientRect();
	}

	componentDidRecieveProps(next) {
		if (this.dataWindow && Object.keys(next.attributes).length !== Object.keys(this.props.attributes).length) this.dataWindowBound = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.dataWindow).getBoundingClientRect();
	}

	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.root, __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 31
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.bar, onClick: this.toggleDataWindow.bind(this), __source: {
							fileName: _jsxFileName,
							lineNumber: 32
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.buttons, __source: {
								fileName: _jsxFileName,
								lineNumber: 33
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.button, this.state.minimize ? __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.max : __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.min), __source: {
								fileName: _jsxFileName,
								lineNumber: 36
							},
							__self: this
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.infobar, __source: {
								fileName: _jsxFileName,
								lineNumber: 38
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'span',
							{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.name, __source: {
									fileName: _jsxFileName,
									lineNumber: 39
								},
								__self: this
							},
							this.props.service
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.datawindow,
						style: { height: this.state.minimize ? 0 : this.dataWindowBound.height }, __source: {
							fileName: _jsxFileName,
							lineNumber: 42
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Service_EditDataWindow__["a" /* default */], { attributes: this.props.attributes, onRef: dataWindow => {
							this.dataWindow = dataWindow;
						}, __source: {
							fileName: _jsxFileName,
							lineNumber: 44
						},
						__self: this
					})
				)
			)
		);
	}

	toggleDataWindow() {
		console.log(1);
		this.setState(prev => ({ minimize: !prev.minimize }));
	}

	editEntry(e) {
		this.props.onEdit(this.props.service);
		this.setState(prev => ({ minimize: false }));
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a)(ServiceEntry));

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(130);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ServiceEntry.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ServiceEntry.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.ServiceEntry-root-2kwHD {\n\tfont-weight: 700;\n\tmargin-bottom: 5px;\n}\n.ServiceEntry-bar-1wIb6 {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tbackground: #222;\n\tcolor: #fff;\n\tcursor: pointer;\n}\n.ServiceEntry-infobar-1-_-n {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tpadding-left: 3px;\n\t/* padding-top: 2px; */\n\theight: 22px;\n\tline-height: 22px;\n\tletter-spacing: 1px;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n.ServiceEntry-datawindow-1_eEn {\n\tpadding-left: 50px;\n\toverflow: hidden;\n\t-webkit-transition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n\t-o-transition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n\ttransition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n}\n.ServiceEntry-name-1Gros {\n\tfont-size: 18px;\n}\n.ServiceEntry-buttons-J0X50 {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.ServiceEntry-button-IBPui {\n\tbackground-size: 22px 22px;\n\t/* border-radius: calc(22px / 5); */\n\twidth: 22px;\n\theight: 22px\n}\n.ServiceEntry-button-IBPui:hover {\n  background: #fff;\n}\n.ServiceEntry-button-IBPui.ServiceEntry-max-2mAwM {\n  background-image: url(" + __webpack_require__(91) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-max-2mAwM:hover {\n  background-image: url(" + __webpack_require__(90) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-min-33onU {\n  background-image: url(" + __webpack_require__(93) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-min-33onU:hover {\n  background-image: url(" + __webpack_require__(92) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-edit-2TMJ8 {\n  background-image: url(" + __webpack_require__(97) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-edit-2TMJ8:hover {\n  background-image: url(" + __webpack_require__(96) + ");\n}\n.ServiceEntry-button-IBPui.ServiceEntry-invisible-1Cbn5 {\n  display: none;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/ServiceEntry/ServiceEntry.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,iBAAiB;CACjB,YAAY;CACZ,gBAAgB;CAChB;AACD;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,oBAAoB;SACZ,aAAa;CACrB,kBAAkB;CAClB,uBAAuB;CACvB,aAAa;CACb,kBAAkB;CAClB,oBAAoB;CACpB,0BAA0B;CAC1B,uBAAuB;CACvB,sBAAsB;CACtB,qBAAqB;CACrB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,iBAAiB;CACjB,8DAA8D;CAC9D,yDAAyD;CACzD,sDAAsD;CACtD;AACD;CACC,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;CACC,2BAA2B;CAC3B,oCAAoC;CACpC,YAAY;CACZ,YAAY;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gDAAuD;CACxD;AACD;EACE,gDAAiD;CAClD;AACD;EACE,gDAAuD;CACxD;AACD;EACE,gDAAiD;CAClD;AACD;EACE,gDAAwD;CACzD;AACD;EACE,gDAAkD;CACnD;AACD;EACE,cAAc;CACf","file":"ServiceEntry.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tfont-weight: 700;\n\tmargin-bottom: 5px;\n}\n.bar {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tbackground: #222;\n\tcolor: #fff;\n\tcursor: pointer;\n}\n.infobar {\n\t-moz-flex: 1;\n\t-ms-flex: 1;\n\t-o-flex: 1;\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 0%;\n\tpadding-left: 3px;\n\t/* padding-top: 2px; */\n\theight: 22px;\n\tline-height: 22px;\n\tletter-spacing: 1px;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n.datawindow {\n\tpadding-left: 50px;\n\toverflow: hidden;\n\t-webkit-transition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n\t-o-transition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n\ttransition: height 0.6s cubic-bezier(.62,.06,.07,.99);\n}\n.name {\n\tfont-size: 18px;\n}\n.buttons {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.button {\n\tbackground-size: 22px 22px;\n\t/* border-radius: calc(22px / 5); */\n\twidth: 22px;\n\theight: 22px\n}\n.button:hover {\n  background: #fff;\n}\n.button.max {\n  background-image: url('../../resources/add-hover.svg');\n}\n.button.max:hover {\n  background-image: url('../../resources/add.svg');\n}\n.button.min {\n  background-image: url('../../resources/del-hover.svg');\n}\n.button.min:hover {\n  background-image: url('../../resources/del.svg');\n}\n.button.edit {\n  background-image: url('../../resources/edit-hover.svg');\n}\n.button.edit:hover {\n  background-image: url('../../resources/edit.svg');\n}\n.button.invisible {\n  display: none;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "ServiceEntry-root-2kwHD",
	"bar": "ServiceEntry-bar-1wIb6",
	"infobar": "ServiceEntry-infobar-1-_-n",
	"datawindow": "ServiceEntry-datawindow-1_eEn",
	"name": "ServiceEntry-name-1Gros",
	"buttons": "ServiceEntry-buttons-J0X50",
	"button": "ServiceEntry-button-IBPui",
	"max": "ServiceEntry-max-2mAwM",
	"min": "ServiceEntry-min-33onU",
	"edit": "ServiceEntry-edit-2TMJ8",
	"invisible": "ServiceEntry-invisible-1Cbn5"
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutability_helper__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Dropdown__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateType_css__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__CreateType_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/CreateType/CreateType.js';









class CreateType extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      attributes: {},
      new_attr_name: '',
      new_attr_type: 'ENUM'
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentWillReceiveProps(props) {
    if (!props.edit_name) return;
    this.setState({
      name: props.edit_name,
      attributes: props.edit_attrs
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.type, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.name, placeholder: 'Service Name', onChange: e => {
              this.setState({ name: e.target.value });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'table',
          { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attributes, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tbody',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            this.getAttributes()
          )
        )
      )
    );
  }

  getAttributes() {
    return Object.entries(this.state.attributes).map((entry, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tr',
      { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attribute, key: index, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, onClick: () => {
            this.removeAttribute(entry[0]);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          entry[0]
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.options, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          this.parseAttribute(entry[1], entry[0])
        )
      )
    )).concat([__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tr',
      { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attribute, key: '-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.add), onClick: this.addAttribute.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.name,
          type: 'text',
          placeholder: 'Attribute',
          onChange: e => {
            this.setState({ new_attr_name: e.target.value });
          },
          value: this.state.new_attr_name, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.options, __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Dropdown__["a" /* default */], {
            options: ['NUMERIC', 'ENUM'],
            selected: this.state.new_attr_type,
            onSelect: option => this.setState({ new_attr_type: option }), __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          })
        )
      )
    )]);
  }

  addAttribute() {
    let type;
    if (this.state.new_attr_type === 'NUMERIC') type = 'NUMERIC';else if (this.state.new_attr_type === 'ENUM') type = [];else type = null;
    this.setState(prev => __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default.a(prev, {
      attributes: { $merge: { [this.state.new_attr_name]: type } },
      new_attr_name: { $set: '' }
    }));
  }

  removeAttribute(type) {
    this.setState(prev => __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default.a(prev, {
      attributes: { $unset: [type] }
    }));
  }

  parseAttribute(attr, type) {
    if (typeof attr === 'string') return attr;else if (attr instanceof Array) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'table',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tbody',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        attr.map((item, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          { key: index, className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.option, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, onClick: () => {
                this.removeAttributeOption(type, index);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.value, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                },
                __self: this
              },
              item
            )
          )
        )).concat([__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AddAttributeOption, { key: '-1', type: type, onClick: this.addAttributeOption.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        })])
      )
    );
  }

  addAttributeOption(type, val) {
    this.setState(prev => __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default.a(prev, {
      attributes: { [type]: { $push: [val] } }
    }));
  }

  removeAttributeOption(type, index) {
    this.setState(prev => __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default.a(prev, {
      attributes: { [type]: { $splice: [[index, 1]] } }
    }));
  }
}

class AddAttributeOption extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      option: ''
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tr',
      { key: '-1', className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.option_adder, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.add),
          onClick: () => {
            this.props.onClick(this.props.type, this.state.option);
            this.setState({ option: '' });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          placeholder: 'Add Item',
          value: this.state.option,
          onChange: e => {
            this.setState({ option: e.target.value });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a)(CreateType));

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(133);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./CreateType.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./CreateType.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.CreateType-root-29Ggh {\n\tmargin-top: 5px;\n\tfont-weight: 400;\n}\n.CreateType-root-29Ggh input {\n\t\tfont-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n\t\ttext-transform: uppercase;\n\t\tborder: none;\n\t\t/* line-height: 0; */\n\t}\n.CreateType-root-29Ggh td {\n\t\tvertical-align: top;\n\t}\n.CreateType-root-29Ggh ul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n.CreateType-type-uySKr {\n\tbackground: #222;\n\tpadding: 2px 7px;\n}\n.CreateType-type-uySKr input {\n\t\tbackground: #222;\n\t\tcolor: #fff;\n\t\tfont-size: 20px;\n\t\tfont-weight: 700;\n\t\twidth: 100%\n\t}\n.CreateType-type-uySKr input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.CreateType-type-uySKr input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.CreateType-type-uySKr input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.CreateType-button-1h5_F {\n\tbackground-image: url(" + __webpack_require__(92) + ");\n\tbackground-size: 20px 20px;\n\t/* border-radius: 4px; */\n\twidth: 20px;\n\theight: 20px\n}\n.CreateType-button-1h5_F:hover {\n  background: #222;\n  background-image: url(" + __webpack_require__(93) + ");\n}\n.CreateType-button-1h5_F.CreateType-add-apFQk {\n  background-image: url(" + __webpack_require__(90) + ");\n}\n.CreateType-button-1h5_F.CreateType-add-apFQk:hover {\n  background-image: url(" + __webpack_require__(91) + ");\n}\n.CreateType-name-10NB7 {\n\tfont-weight: 700;\n}\ninput::-webkit-input-placeholder {\n\tfont-weight: 400;\n}\ninput:-ms-input-placeholder {\n\tfont-weight: 400;\n}\ninput::placeholder {\n\tfont-weight: 400;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/components/Service/CreateType/CreateType.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,gBAAgB;CAChB,iBAAiB;CACjB;AACD;EACE,0DAA0D;EAC1D,0BAA0B;EAC1B,aAAa;EACb,qBAAqB;EACrB;AACF;EACE,oBAAoB;EACpB;AACF;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX;AACF;CACC,iBAAiB;CACjB,iBAAiB;CACjB;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX;AACF;EACE,gCAAgC;CACjC;AACD;EACE,gCAAgC;CACjC;AACD;EACE,gCAAgC;CACjC;AACD;CACC,gDAAiD;CACjD,2BAA2B;CAC3B,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ;AACD;EACE,iBAAiB;EACjB,gDAAuD;CACxD;AACD;EACE,gDAAiD;CAClD;AACD;EACE,gDAAuD;CACxD;AACD;CACC,iBAAiB;CACjB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,iBAAiB;CACjB","file":"CreateType.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tmargin-top: 5px;\n\tfont-weight: 400;\n}\n.root input {\n\t\tfont-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n\t\ttext-transform: uppercase;\n\t\tborder: none;\n\t\t/* line-height: 0; */\n\t}\n.root td {\n\t\tvertical-align: top;\n\t}\n.root ul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n.type {\n\tbackground: #222;\n\tpadding: 2px 7px;\n}\n.type input {\n\t\tbackground: #222;\n\t\tcolor: #fff;\n\t\tfont-size: 20px;\n\t\tfont-weight: 700;\n\t\twidth: 100%\n\t}\n.type input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.type input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.type input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.button {\n\tbackground-image: url('../../resources/del.svg');\n\tbackground-size: 20px 20px;\n\t/* border-radius: 4px; */\n\twidth: 20px;\n\theight: 20px\n}\n.button:hover {\n  background: #222;\n  background-image: url('../../resources/del-hover.svg');\n}\n.button.add {\n  background-image: url('../../resources/add.svg');\n}\n.button.add:hover {\n  background-image: url('../../resources/add-hover.svg');\n}\n.name {\n\tfont-weight: 700;\n}\ninput::-webkit-input-placeholder {\n\tfont-weight: 400;\n}\ninput:-ms-input-placeholder {\n\tfont-weight: 400;\n}\ninput::placeholder {\n\tfont-weight: 400;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "CreateType-root-29Ggh",
	"type": "CreateType-type-uySKr",
	"button": "CreateType-button-1h5_F",
	"add": "CreateType-add-apFQk",
	"name": "CreateType-name-10NB7"
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(135);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Types.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Types.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Types-root-2ix9o {\n  text-transform: uppercase;\n  line-height: normal;\n}\n.Types-container-2CBIU {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n}\n.Types-type_cont-1DtGo {\n  width: 400px;\n  margin-left: 20px;\n}\n.Types-types-33zOJ {\n  margin-top: 5px;\n}\n.Types-create_cont-2N3Cx {\n  margin-left: 20px;\n}\nh2 {\n  font-size: 24px;\n  line-height: 18px;\n  font-weight: 400;\n  margin: 0 0 10px 10px;\n}\n.Types-submit-1tC8Z {\n  margin: 28px 0 0 20px;\n  background: #222;\n  border: 5px solid #222;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  letter-spacing: 1px;\n  padding: 5px;\n  font-size: 30px;\n  font-weight: 700;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none\n}\n.Types-submit-1tC8Z:hover {\n  background: #fff;\n  color: #222;\n}\n.Types-create_cont-2N3Cx {\n  width: 400px;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/types/Types.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;CACvB;AACD;EACE,sBAAsB;EACtB,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,aAAa;CACd","file":"Types.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n  text-transform: uppercase;\n  line-height: normal;\n}\n.container {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n}\n.type_cont {\n  width: 400px;\n  margin-left: 20px;\n}\n.types {\n  margin-top: 5px;\n}\n.create_cont {\n  margin-left: 20px;\n}\nh2 {\n  font-size: 24px;\n  line-height: 18px;\n  font-weight: 400;\n  margin: 0 0 10px 10px;\n}\n.submit {\n  margin: 28px 0 0 20px;\n  background: #222;\n  border: 5px solid #222;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  letter-spacing: 1px;\n  padding: 5px;\n  font-size: 30px;\n  font-weight: 700;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none\n}\n.submit:hover {\n  background: #fff;\n  color: #222;\n}\n.create_cont {\n  width: 400px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Types-root-2ix9o",
	"container": "Types-container-2CBIU",
	"type_cont": "Types-type_cont-1DtGo",
	"types": "Types-types-33zOJ",
	"create_cont": "Types-create_cont-2N3Cx",
	"submit": "Types-submit-1tC8Z"
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Types__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(76);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/src/routes/types/index.js';
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
    chunks: ['types'],
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Types__["a" /* default */], {
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

/***/ 74:
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

/***/ 76:
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

/***/ 77:
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

/***/ 78:
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

/***/ 82:
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

/***/ 83:
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

/***/ 84:
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/classify_redux/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 86:
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

/***/ 87:
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

/***/ 89:
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

/***/ 90:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd-hover%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23222;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel-hover%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),

/***/ 94:
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

/***/ 95:
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

/***/ 96:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit-hover%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3R5cGVzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuanM/YzdiZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL0VkaXREYXRhV2luZG93L0VkaXREYXRhV2luZG93LmNzcz83ZTZhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuY3NzPzgwYWIqIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvcm91dGVzL3R5cGVzL1R5cGVzLmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL1NlcnZpY2VFbnRyeS9TZXJ2aWNlRW50cnkuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL1NlcnZpY2UvU2VydmljZUVudHJ5L1NlcnZpY2VFbnRyeS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VydmljZS9TZXJ2aWNlRW50cnkvU2VydmljZUVudHJ5LmNzcz9iYTkwIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL0NyZWF0ZVR5cGUvQ3JlYXRlVHlwZS5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvU2VydmljZS9DcmVhdGVUeXBlL0NyZWF0ZVR5cGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvQ3JlYXRlVHlwZS9DcmVhdGVUeXBlLmNzcz9mNmZlIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvcm91dGVzL3R5cGVzL1R5cGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3R5cGVzL1R5cGVzLmNzcz9kYmE5IiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvcm91dGVzL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanM/ZjIwYSoiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanM/Mzk1YyoiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanM/MzY0ZSoiLCJ3ZWJwYWNrOi8vL3NyYy9oaXN0b3J5LmpzPzZkMTAqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanM/NjQ1YSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz81NjUzKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz9kMTMxKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3M/MzQ5OSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzgxZGEqKiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzkxODkqKiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzVjOWEqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz80NDg3KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3M/ODhhZioqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5qcz9kYWU4KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvYWRkLnN2Zz80YmVmKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvYWRkLWhvdmVyLnN2Zz9hOTE2KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZGVsLnN2Zz82ZmJlKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZGVsLWhvdmVyLnN2Zz80OTUyKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5jc3M/NWQ0ZCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzPzVkZGYqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZWRpdC5zdmc/MDQ5NioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2VkaXQtaG92ZXIuc3ZnP2I1MWQqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbi8vIEltcG9ydCBDb21wb25lbnRzXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FZGl0RGF0YVdpbmRvdy5jc3MnO1xuXG5jbGFzcyBFZGl0RGF0YVdpbmRvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0XHR7dGhpcy5nZXRBdHRyaWJ1dGVzKCl9XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMub25SZWYodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5ub3VudCgpIHtcblx0XHR0aGlzLnByb3BzLm9uUmVmKHVuZGVmaW5lZCk7XG5cdH1cblxuICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5hdHRyaWJ1dGVzIHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYXR0cmlidXRlcykubGVuZ3RoIDwgMSlcbiAgICBcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsZXJ0fT5ObyBBdHRyaWJ1dGVzPC9kaXY+O1xuICBcdHJldHVybiA8dGFibGU+PHRib2R5PntPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmF0dHJpYnV0ZXMpLm1hcChlbnRyeSA9PiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRlfSBrZXk9e2VudHJ5WzBdfT5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntlbnRyeVswXX08L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc30+e3RoaXMucGFyc2VBdHRyaWJ1dGUoZW50cnlbMV0pfTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdCkpfTwvdGJvZHk+PC90YWJsZT5cbiAgfVxuXG4gIHBhcnNlQXR0cmlidXRlKGF0dHIpIHtcblx0XHRpZiAoYXR0ciBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRyZXR1cm4gPHVsPnthdHRyLm1hcChhID0+ICg8bGkga2V5PXthfSBjbGFzc05hbWU9e3N0eWxlcy5hcnJheWl0ZW19PnthfTwvbGk+KSl9PC91bD5cblx0XHR9IGVsc2UgaWYgKGF0dHIgPT09ICdOVU1FUklDJykge1xuXHRcdFx0cmV0dXJuICdOdW1lcmljJztcblx0XHR9IGVsc2UgaWYgKGF0dHIgPT09ICdTVFJJTkcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShFZGl0RGF0YVdpbmRvdyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvU2VydmljZS9FZGl0RGF0YVdpbmRvdy9FZGl0RGF0YVdpbmRvdy5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRWRpdERhdGFXaW5kb3cuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0VkaXREYXRhV2luZG93LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0VkaXREYXRhV2luZG93LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cvRWRpdERhdGFXaW5kb3cuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5FZGl0RGF0YVdpbmRvdy1yb290LTItVGk2IHVsIHtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiAjZTMyOyAqL1xcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0cGFkZGluZzogMDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbi5FZGl0RGF0YVdpbmRvdy1yb290LTItVGk2IHRhYmxlIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXHR9XFxuLkVkaXREYXRhV2luZG93LWF0dHJpYnV0ZS1nUjJvMCB7XFxuXFx0LyogYmFja2dyb3VuZDogIzM0YzsgKi9cXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcbi5FZGl0RGF0YVdpbmRvdy1uYW1lLVVyT2FRIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiAjNWU2OyAqL1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5FZGl0RGF0YVdpbmRvdy1vcHRpb25zLURmczFnIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiAjYzJjOyAqL1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcbi5FZGl0RGF0YVdpbmRvdy1hbGVydC0yUTRMNiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvU2VydmljZS9FZGl0RGF0YVdpbmRvdy9FZGl0RGF0YVdpbmRvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1Y7QUFDRjtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0NBQ0MsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQlwiLFwiZmlsZVwiOlwiRWRpdERhdGFXaW5kb3cuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB1bCB7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogI2UzMjsgKi9cXG5cXHRcXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG4ucm9vdCB0YWJsZSB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxuXFx0fVxcbi5hdHRyaWJ1dGUge1xcblxcdC8qIGJhY2tncm91bmQ6ICMzNGM7ICovXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubmFtZSB7XFxuXFx0LyogYmFja2dyb3VuZDogIzVlNjsgKi9cXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ub3B0aW9ucyB7XFxuXFx0LyogYmFja2dyb3VuZDogI2MyYzsgKi9cXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG4uYWxlcnQge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRWRpdERhdGFXaW5kb3ctcm9vdC0yLVRpNlwiLFxuXHRcImF0dHJpYnV0ZVwiOiBcIkVkaXREYXRhV2luZG93LWF0dHJpYnV0ZS1nUjJvMFwiLFxuXHRcIm5hbWVcIjogXCJFZGl0RGF0YVdpbmRvdy1uYW1lLVVyT2FRXCIsXG5cdFwib3B0aW9uc1wiOiBcIkVkaXREYXRhV2luZG93LW9wdGlvbnMtRGZzMWdcIixcblx0XCJhbGVydFwiOiBcIkVkaXREYXRhV2luZG93LWFsZXJ0LTJRNEw2XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvU2VydmljZS9FZGl0RGF0YVdpbmRvdy9FZGl0RGF0YVdpbmRvdy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMzIGZyb20gJ2F3cy1zZGsvY2xpZW50cy9zMyc7XG5cbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIHNldFNlcnZpY2VzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3J1bnRpbWUnO1xuaW1wb3J0IHt0b0pTfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgU2VydmljZUVudHJ5IGZyb20gJ2NvbXBvbmVudHMvU2VydmljZS9TZXJ2aWNlRW50cnknO1xuaW1wb3J0IENyZWF0ZVR5cGUgZnJvbSAnY29tcG9uZW50cy9TZXJ2aWNlL0NyZWF0ZVR5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVHlwZXMuY3NzJztcblxuY2xhc3MgVHlwZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VyX3NlcnZpY2U6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoU2VydmljZXMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygyKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBlX2NvbnR9PlxuICAgICAgICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZXN9Pnt0aGlzLmdldFR5cGVzKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVfY29udH0+XG4gICAgICAgICAgICA8aDI+Q3JlYXRlIFR5cGU8L2gyPlxuICAgICAgICAgICAgPENyZWF0ZVR5cGUgb25SZWY9e3JlZiA9PiB7dGhpcy5jcmVhdGVUeXBlID0gcmVmfX0gZWRpdF9hdHRycz17dGhpcy5zdGF0ZS5jdXJfc2VydmljZSA/IHRoaXMucHJvcHMuc2VydmljZXNbdGhpcy5zdGF0ZS5jdXJfc2VydmljZV0gOiB1bmRlZmluZWR9IGVkaXRfbmFtZT17dGhpcy5zdGF0ZS5jdXJfc2VydmljZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0gb25DbGljaz17dGhpcy5zdWJtaXRTZXJ2aWNlLmJpbmQodGhpcyl9PlN1Ym1pdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2VydmljZXMgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZXJ2aWNlcykubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnR9Pk5vIFR5cGVzPC9kaXY+XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuc2VydmljZXMpLm1hcChzZXJ2aWNlID0+IChcbiAgICAgIDxTZXJ2aWNlRW50cnkga2V5PXtzZXJ2aWNlWzBdfSBzZXJ2aWNlPXtzZXJ2aWNlWzBdfSBhdHRyaWJ1dGVzPXtzZXJ2aWNlWzFdfSBvbkVkaXQ9e3RoaXMuc2V0RWRpdFR5cGUuYmluZCh0aGlzKX0vPlxuICAgICkpO1xuICB9XG5cbiAgc2V0RWRpdFR5cGUoc2VydmljZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cl9zZXJ2aWNlOiBzZXJ2aWNlfSk7XG4gIH1cblxuICBzdWJtaXRTZXJ2aWNlKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNyZWF0ZVR5cGUuc3RhdGUubmFtZTtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuY3JlYXRlVHlwZS5zdGF0ZS5hdHRyaWJ1dGVzO1xuICAgIGlmIChuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIGFsZXJ0KFwiU2VydmljZSBtdXN0IGhhdmUgbmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cobmFtZSwgYXR0cnMpO1xuICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2FkZF9zZXJ2aWNlJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtzZXJ2aWNlX25hbWU6IG5hbWUsIGF0dHJpYnV0ZXM6IGF0dHJzfSlcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2FkZF91c2VyX3NlcnZpY2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJhc2ljIFwiICsgYnRvYShcImI0ZWQyMThlLTBlZjYtNGMwYS1iN2UzLWFjODZlNmVkZmZiMjptYWtlX2FtZXJpY2FfZ3JlYXRfYWdhaW5cIiksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe25hbWU6IG5hbWV9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHRoaXMuZmV0Y2hTZXJ2aWNlcy5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgZmV0Y2hTZXJ2aWNlcyhhdHRlbXB0PTApIHtcbiAgICBpZiAoYXR0ZW1wdCA9PT0gNSkge1xuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gZmV0Y2ggc2VydmljZXNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2dldF91c2VyX3NlcnZpY2VzJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJhc2ljIFwiICsgYnRvYShcImI0ZWQyMThlLTBlZjYtNGMwYS1iN2UzLWFjODZlNmVkZmZiMjptYWtlX2FtZXJpY2FfZ3JlYXRfYWdhaW5cIiksXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihcIkZldGNoIEVycm9yXCIpXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGZldGNoKCdodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2dldF9zZXJ2aWNlc19hdHRyaWJ1dGVzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtzZXJ2aWNlX25hbWVzOiBkYXRhfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldFNlcnZpY2VzKHtzZXJ2aWNlczogZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZldGNoU2VydmljZXMoYXR0ZW1wdCArIDEpLCBhdHRlbXB0ICogYXR0ZW1wdCAqIDMwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gc3RhdGUgPT4ge1xuICBjb25zdCBzID0gc3RhdGUudG9KUygpO1xuICByZXR1cm4ge1xuICAgIHNlcnZpY2VzOiBzLnJ1bnRpbWUuc2VydmljZXMsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gIHNldFNlcnZpY2VzOiBzZXRTZXJ2aWNlcyxcbn0sIGRpc3BhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKHdpdGhTdHlsZXMoc3R5bGVzKShUeXBlcykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvdHlwZXMvVHlwZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgRGF0YVdpbmRvdyBmcm9tICdjb21wb25lbnRzL1NlcnZpY2UvRWRpdERhdGFXaW5kb3cnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VydmljZUVudHJ5LmNzcyc7XG5cbmNsYXNzIFNlcnZpY2VFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtaW5pbWl6ZTogdHJ1ZVxuXHRcdH07XG5cdFx0dGhpcy5kYXRhV2luZG93Qm91bmQ7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmRhdGFXaW5kb3dCb3VuZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuZGF0YVdpbmRvdykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRSZWNpZXZlUHJvcHMobmV4dCkge1xuXHRcdGlmICh0aGlzLmRhdGFXaW5kb3cgJiYgT2JqZWN0LmtleXMobmV4dC5hdHRyaWJ1dGVzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYXR0cmlidXRlcykubGVuZ3RoKVxuXHRcdFx0dGhpcy5kYXRhV2luZG93Qm91bmQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmRhdGFXaW5kb3cpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRGF0YVdpbmRvdy5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG5cdFx0XHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idXR0b24sIHN0eWxlcy5lZGl0KX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmVkaXRFbnRyeS5iaW5kKHRoaXMpfS8+Ki99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idXR0b24sICh0aGlzLnN0YXRlLm1pbmltaXplID8gc3R5bGVzLm1heCA6IHN0eWxlcy5taW4pKX0vPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9iYXJ9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dGhpcy5wcm9wcy5zZXJ2aWNlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YXdpbmRvd31cblx0XHRcdFx0XHRcdHN0eWxlPXt7aGVpZ2h0OiAodGhpcy5zdGF0ZS5taW5pbWl6ZSA/IDAgOiB0aGlzLmRhdGFXaW5kb3dCb3VuZC5oZWlnaHQpfX0+XG5cdFx0XHRcdFx0XHQ8RGF0YVdpbmRvdyBhdHRyaWJ1dGVzPXt0aGlzLnByb3BzLmF0dHJpYnV0ZXN9IG9uUmVmPXtkYXRhV2luZG93ID0+IHt0aGlzLmRhdGFXaW5kb3cgPSBkYXRhV2luZG93fX0vPlxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICB0b2dnbGVEYXRhV2luZG93KCkge1xuICBcdGNvbnNvbGUubG9nKDEpXG4gIFx0dGhpcy5zZXRTdGF0ZShwcmV2ID0+ICh7bWluaW1pemU6ICFwcmV2Lm1pbmltaXplfSkpO1xuICB9XG5cbiAgZWRpdEVudHJ5KGUpIHtcbiAgXHR0aGlzLnByb3BzLm9uRWRpdCh0aGlzLnByb3BzLnNlcnZpY2UpXG4gIFx0dGhpcy5zZXRTdGF0ZShwcmV2ID0+ICh7bWluaW1pemU6IGZhbHNlfSkpO1xuICBcdGlmICghZSkgdmFyIGUgPSB3aW5kb3cuZXZlbnQ7XG4gICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2VydmljZUVudHJ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9TZXJ2aWNlL1NlcnZpY2VFbnRyeS9TZXJ2aWNlRW50cnkuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL1NlcnZpY2VFbnRyeS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vU2VydmljZUVudHJ5LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL1NlcnZpY2VFbnRyeS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL1NlcnZpY2VFbnRyeS9TZXJ2aWNlRW50cnkuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uU2VydmljZUVudHJ5LXJvb3QtMmt3SEQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uU2VydmljZUVudHJ5LWJhci0xd0liNiB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kOiAjMjIyO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLlNlcnZpY2VFbnRyeS1pbmZvYmFyLTEtXy1uIHtcXG5cXHQtbW96LWZsZXg6IDE7XFxuXFx0LW1zLWZsZXg6IDE7XFxuXFx0LW8tZmxleDogMTtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlO1xcblxcdHBhZGRpbmctbGVmdDogM3B4O1xcblxcdC8qIHBhZGRpbmctdG9wOiAycHg7ICovXFxuXFx0aGVpZ2h0OiAyMnB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyMnB4O1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtby11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLlNlcnZpY2VFbnRyeS1kYXRhd2luZG93LTFfZUVuIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcblxcdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcbn1cXG4uU2VydmljZUVudHJ5LW5hbWUtMUdyb3Mge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG59XFxuLlNlcnZpY2VFbnRyeS1idXR0b25zLUowWDUwIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aSB7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XFxuXFx0LyogYm9yZGVyLXJhZGl1czogY2FsYygyMnB4IC8gNSk7ICovXFxuXFx0d2lkdGg6IDIycHg7XFxuXFx0aGVpZ2h0OiAyMnB4XFxufVxcbi5TZXJ2aWNlRW50cnktYnV0dG9uLUlCUHVpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5TZXJ2aWNlRW50cnktYnV0dG9uLUlCUHVpLlNlcnZpY2VFbnRyeS1tYXgtMm1Bd00ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9hZGQtaG92ZXIuc3ZnXCIpICsgXCIpO1xcbn1cXG4uU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aS5TZXJ2aWNlRW50cnktbWF4LTJtQXdNOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9yZXNvdXJjZXMvYWRkLnN2Z1wiKSArIFwiKTtcXG59XFxuLlNlcnZpY2VFbnRyeS1idXR0b24tSUJQdWkuU2VydmljZUVudHJ5LW1pbi0zM29uVSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2RlbC1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5TZXJ2aWNlRW50cnktYnV0dG9uLUlCUHVpLlNlcnZpY2VFbnRyeS1taW4tMzNvblU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9kZWwuc3ZnXCIpICsgXCIpO1xcbn1cXG4uU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aS5TZXJ2aWNlRW50cnktZWRpdC0yVE1KOCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2VkaXQtaG92ZXIuc3ZnXCIpICsgXCIpO1xcbn1cXG4uU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aS5TZXJ2aWNlRW50cnktZWRpdC0yVE1KODpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2VkaXQuc3ZnXCIpICsgXCIpO1xcbn1cXG4uU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aS5TZXJ2aWNlRW50cnktaW52aXNpYmxlLTFDYm41IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL1NlcnZpY2UvU2VydmljZUVudHJ5L1NlcnZpY2VFbnRyeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLFdBQVc7Q0FDWCxvQkFBb0I7U0FDWixhQUFhO0NBQ3JCLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQiw4REFBOEQ7Q0FDOUQseURBQXlEO0NBQ3pELHNEQUFzRDtDQUN0RDtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osWUFBWTtDQUNaO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdEQUF1RDtDQUN4RDtBQUNEO0VBQ0UsZ0RBQWlEO0NBQ2xEO0FBQ0Q7RUFDRSxnREFBdUQ7Q0FDeEQ7QUFDRDtFQUNFLGdEQUFpRDtDQUNsRDtBQUNEO0VBQ0UsZ0RBQXdEO0NBQ3pEO0FBQ0Q7RUFDRSxnREFBa0Q7Q0FDbkQ7QUFDRDtFQUNFLGNBQWM7Q0FDZlwiLFwiZmlsZVwiOlwiU2VydmljZUVudHJ5LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uYmFyIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQ6ICMyMjI7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5mb2JhciB7XFxuXFx0LW1vei1mbGV4OiAxO1xcblxcdC1tcy1mbGV4OiAxO1xcblxcdC1vLWZsZXg6IDE7XFxuXFx0LXdlYmtpdC1ib3gtZmxleDogMTtcXG5cXHQgICAgICAgIGZsZXg6IDEgMSAwJTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDNweDtcXG5cXHQvKiBwYWRkaW5nLXRvcDogMnB4OyAqL1xcblxcdGhlaWdodDogMjJweDtcXG5cXHRsaW5lLWhlaWdodDogMjJweDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5kYXRhd2luZG93IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcblxcdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjZzIGN1YmljLWJlemllciguNjIsLjA2LC4wNywuOTkpO1xcbn1cXG4ubmFtZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XFxuXFx0LyogYm9yZGVyLXJhZGl1czogY2FsYygyMnB4IC8gNSk7ICovXFxuXFx0d2lkdGg6IDIycHg7XFxuXFx0aGVpZ2h0OiAyMnB4XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmJ1dHRvbi5tYXgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvYWRkLWhvdmVyLnN2ZycpO1xcbn1cXG4uYnV0dG9uLm1heDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9hZGQuc3ZnJyk7XFxufVxcbi5idXR0b24ubWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2RlbC1ob3Zlci5zdmcnKTtcXG59XFxuLmJ1dHRvbi5taW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZGVsLnN2ZycpO1xcbn1cXG4uYnV0dG9uLmVkaXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmcnKTtcXG59XFxuLmJ1dHRvbi5lZGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2VkaXQuc3ZnJyk7XFxufVxcbi5idXR0b24uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiU2VydmljZUVudHJ5LXJvb3QtMmt3SERcIixcblx0XCJiYXJcIjogXCJTZXJ2aWNlRW50cnktYmFyLTF3SWI2XCIsXG5cdFwiaW5mb2JhclwiOiBcIlNlcnZpY2VFbnRyeS1pbmZvYmFyLTEtXy1uXCIsXG5cdFwiZGF0YXdpbmRvd1wiOiBcIlNlcnZpY2VFbnRyeS1kYXRhd2luZG93LTFfZUVuXCIsXG5cdFwibmFtZVwiOiBcIlNlcnZpY2VFbnRyeS1uYW1lLTFHcm9zXCIsXG5cdFwiYnV0dG9uc1wiOiBcIlNlcnZpY2VFbnRyeS1idXR0b25zLUowWDUwXCIsXG5cdFwiYnV0dG9uXCI6IFwiU2VydmljZUVudHJ5LWJ1dHRvbi1JQlB1aVwiLFxuXHRcIm1heFwiOiBcIlNlcnZpY2VFbnRyeS1tYXgtMm1Bd01cIixcblx0XCJtaW5cIjogXCJTZXJ2aWNlRW50cnktbWluLTMzb25VXCIsXG5cdFwiZWRpdFwiOiBcIlNlcnZpY2VFbnRyeS1lZGl0LTJUTUo4XCIsXG5cdFwiaW52aXNpYmxlXCI6IFwiU2VydmljZUVudHJ5LWludmlzaWJsZS0xQ2JuNVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvU2VydmljZUVudHJ5L1NlcnZpY2VFbnRyeS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DcmVhdGVUeXBlLmNzcyc7XG5cbmNsYXNzIENyZWF0ZVR5cGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIG5ld19hdHRyX25hbWU6ICcnLFxuICAgICAgbmV3X2F0dHJfdHlwZTogJ0VOVU0nLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25SZWYodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVmKHVuZGVmaW5lZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcy5lZGl0X25hbWUpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IHByb3BzLmVkaXRfbmFtZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHByb3BzLmVkaXRfYXR0cnNcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZX0+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gcGxhY2Vob2xkZXI9XCJTZXJ2aWNlIE5hbWVcIiBvbkNoYW5nZT17ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7bmFtZTogZS50YXJnZXQudmFsdWV9KX19Lz48L2Rpdj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRlc30+PHRib2R5Pnt0aGlzLmdldEF0dHJpYnV0ZXMoKX08L3Rib2R5PjwvdGFibGU+XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgZ2V0QXR0cmlidXRlcygpIHtcbiAgXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5hdHRyaWJ1dGVzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0ZX0ga2V5PXtpbmRleH0+XG5cdFx0XHRcdDx0ZD48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3RoaXMucmVtb3ZlQXR0cmlidXRlKGVudHJ5WzBdKX19PjwvZGl2PjwvdGQ+XG5cdFx0XHRcdDx0ZD48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntlbnRyeVswXX08L2Rpdj48L3RkPlxuXHRcdFx0XHQ8dGQ+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zfT57dGhpcy5wYXJzZUF0dHJpYnV0ZShlbnRyeVsxXSwgZW50cnlbMF0pfTwvZGl2PjwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdCkpLmNvbmNhdChbXG4gICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRlfSBrZXk9XCItMVwiPlxuICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmFkZCl9IG9uQ2xpY2s9e3RoaXMuYWRkQXR0cmlidXRlLmJpbmQodGhpcyl9PjwvZGl2PjwvdGQ+XG4gICAgICAgIDx0ZD48aW5wdXQgXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdHRyaWJ1dGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHt0aGlzLnNldFN0YXRlKHtuZXdfYXR0cl9uYW1lOiBlLnRhcmdldC52YWx1ZX0pfX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdfYXR0cl9uYW1lfS8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnN9PlxuICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgb3B0aW9ucz17WydOVU1FUklDJywgJ0VOVU0nXX1cbiAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLm5ld19hdHRyX3R5cGV9XG4gICAgICAgICAgICBvblNlbGVjdD17KG9wdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7bmV3X2F0dHJfdHlwZTogb3B0aW9ufSl9Lz5cbiAgICAgICAgPC9kaXY+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgXSlcbiAgfVxuXG4gIGFkZEF0dHJpYnV0ZSgpIHtcbiAgICBsZXQgdHlwZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5uZXdfYXR0cl90eXBlID09PSAnTlVNRVJJQycpIHR5cGUgPSAnTlVNRVJJQyc7XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5uZXdfYXR0cl90eXBlID09PSAnRU5VTScpIHR5cGUgPSBbXTtcbiAgICBlbHNlIHR5cGUgPSBudWxsOyBcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gdXBkYXRlKHByZXYsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHskbWVyZ2U6IHtbdGhpcy5zdGF0ZS5uZXdfYXR0cl9uYW1lXTogdHlwZX19LFxuICAgICAgbmV3X2F0dHJfbmFtZTogeyRzZXQ6ICcnfVxuICAgIH0pKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKHR5cGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gdXBkYXRlKHByZXYsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHskdW5zZXQ6IFt0eXBlXX1cbiAgICB9KSlcbiAgfVxuXG4gIHBhcnNlQXR0cmlidXRlKGF0dHIsIHR5cGUpIHtcbiAgXHRpZiAodHlwZW9mIGF0dHIgPT09ICdzdHJpbmcnKVxuICBcdFx0cmV0dXJuIGF0dHI7XG4gIFx0ZWxzZSBpZiAoYXR0ciBpbnN0YW5jZW9mIEFycmF5KVxuICBcdFx0cmV0dXJuIDx0YWJsZT48dGJvZHk+e2F0dHIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHt0aGlzLnJlbW92ZUF0dHJpYnV0ZU9wdGlvbih0eXBlLCBpbmRleCl9fS8+PC90ZD5cbiAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+e2l0ZW19PC9kaXY+PC90ZD5cbiAgICAgICAgPC90cj5cblx0XHRcdCkpLmNvbmNhdChbXG4gICAgICAgIDxBZGRBdHRyaWJ1dGVPcHRpb24ga2V5PVwiLTFcIiB0eXBlPXt0eXBlfSBvbkNsaWNrPXt0aGlzLmFkZEF0dHJpYnV0ZU9wdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICBdKX08L3Rib2R5PjwvdGFibGU+O1xuICB9XG5cbiAgYWRkQXR0cmlidXRlT3B0aW9uKHR5cGUsIHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldiA9PiB1cGRhdGUocHJldiwge1xuICAgICAgYXR0cmlidXRlczoge1t0eXBlXTogeyRwdXNoOiBbdmFsXX19XG4gICAgfSkpO1xuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlT3B0aW9uKHR5cGUsIGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+IHVwZGF0ZShwcmV2LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB7W3R5cGVdOiB7JHNwbGljZTogW1tpbmRleCwgMV1dfX1cbiAgICB9KSlcbiAgfVxufVxuXG5jbGFzcyBBZGRBdHRyaWJ1dGVPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT1cIi0xXCIgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uX2FkZGVyfT5cbiAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5idXR0b24sIHN0eWxlcy5hZGQpfSBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy50eXBlLCB0aGlzLnN0YXRlLm9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb246ICcnfSlcbiAgICAgICAgICB9fS8+PC90ZD5cbiAgICAgICAgPHRkPjxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgSXRlbVwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHt0aGlzLnNldFN0YXRlKHtvcHRpb246IGUudGFyZ2V0LnZhbHVlfSl9fS8+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ3JlYXRlVHlwZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvU2VydmljZS9DcmVhdGVUeXBlL0NyZWF0ZVR5cGUuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0NyZWF0ZVR5cGUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0NyZWF0ZVR5cGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vQ3JlYXRlVHlwZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlL0NyZWF0ZVR5cGUvQ3JlYXRlVHlwZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5DcmVhdGVUeXBlLXJvb3QtMjlHZ2gge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG4uQ3JlYXRlVHlwZS1yb290LTI5R2doIGlucHV0IHtcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0LyogbGluZS1oZWlnaHQ6IDA7ICovXFxuXFx0fVxcbi5DcmVhdGVUeXBlLXJvb3QtMjlHZ2ggdGQge1xcblxcdFxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0fVxcbi5DcmVhdGVUeXBlLXJvb3QtMjlHZ2ggdWwge1xcblxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0fVxcbi5DcmVhdGVUeXBlLXR5cGUtdXlTS3Ige1xcblxcdGJhY2tncm91bmQ6ICMyMjI7XFxuXFx0cGFkZGluZzogMnB4IDdweDtcXG59XFxuLkNyZWF0ZVR5cGUtdHlwZS11eVNLciBpbnB1dCB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzIyMjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHR3aWR0aDogMTAwJVxcblxcdH1cXG4uQ3JlYXRlVHlwZS10eXBlLXV5U0tyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcbi5DcmVhdGVUeXBlLXR5cGUtdXlTS3IgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcbi5DcmVhdGVUeXBlLXR5cGUtdXlTS3IgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcbi5DcmVhdGVUeXBlLWJ1dHRvbi0xaDVfRiB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL3Jlc291cmNlcy9kZWwuc3ZnXCIpICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cXG5cXHR3aWR0aDogMjBweDtcXG5cXHRoZWlnaHQ6IDIwcHhcXG59XFxuLkNyZWF0ZVR5cGUtYnV0dG9uLTFoNV9GOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2RlbC1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5DcmVhdGVUeXBlLWJ1dHRvbi0xaDVfRi5DcmVhdGVUeXBlLWFkZC1hcEZRayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2FkZC5zdmdcIikgKyBcIik7XFxufVxcbi5DcmVhdGVUeXBlLWJ1dHRvbi0xaDVfRi5DcmVhdGVUeXBlLWFkZC1hcEZRazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcmVzb3VyY2VzL2FkZC1ob3Zlci5zdmdcIikgKyBcIik7XFxufVxcbi5DcmVhdGVUeXBlLW5hbWUtMTBOQjcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvU2VydmljZS9DcmVhdGVUeXBlL0NyZWF0ZVR5cGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCO0FBQ0Q7RUFDRSwwREFBMEQ7RUFDMUQsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixxQkFBcUI7RUFDckI7QUFDRjtFQUNFLG9CQUFvQjtFQUNwQjtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1g7QUFDRjtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1g7QUFDRjtFQUNFLGdDQUFnQztDQUNqQztBQUNEO0VBQ0UsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxnQ0FBZ0M7Q0FDakM7QUFDRDtDQUNDLGdEQUFpRDtDQUNqRCwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnREFBdUQ7Q0FDeEQ7QUFDRDtFQUNFLGdEQUFpRDtDQUNsRDtBQUNEO0VBQ0UsZ0RBQXVEO0NBQ3hEO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakJcIixcImZpbGVcIjpcIkNyZWF0ZVR5cGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5yb290IGlucHV0IHtcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0LyogbGluZS1oZWlnaHQ6IDA7ICovXFxuXFx0fVxcbi5yb290IHRkIHtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcblxcdH1cXG4ucm9vdCB1bCB7XFxuXFx0XFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0cGFkZGluZzogMDtcXG5cXHR9XFxuLnR5cGUge1xcblxcdGJhY2tncm91bmQ6ICMyMjI7XFxuXFx0cGFkZGluZzogMnB4IDdweDtcXG59XFxuLnR5cGUgaW5wdXQge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyMjI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0d2lkdGg6IDEwMCVcXG5cXHR9XFxuLnR5cGUgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG59XFxuLnR5cGUgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcbi50eXBlIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9kZWwuc3ZnJyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxuXFx0LyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweFxcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnJyk7XFxufVxcbi5idXR0b24uYWRkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcmVzb3VyY2VzL2FkZC5zdmcnKTtcXG59XFxuLmJ1dHRvbi5hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9yZXNvdXJjZXMvYWRkLWhvdmVyLnN2ZycpO1xcbn1cXG4ubmFtZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkNyZWF0ZVR5cGUtcm9vdC0yOUdnaFwiLFxuXHRcInR5cGVcIjogXCJDcmVhdGVUeXBlLXR5cGUtdXlTS3JcIixcblx0XCJidXR0b25cIjogXCJDcmVhdGVUeXBlLWJ1dHRvbi0xaDVfRlwiLFxuXHRcImFkZFwiOiBcIkNyZWF0ZVR5cGUtYWRkLWFwRlFrXCIsXG5cdFwibmFtZVwiOiBcIkNyZWF0ZVR5cGUtbmFtZS0xME5CN1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL1NlcnZpY2UvQ3JlYXRlVHlwZS9DcmVhdGVUeXBlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vVHlwZXMuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL1R5cGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL1R5cGVzLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvdHlwZXMvVHlwZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uVHlwZXMtcm9vdC0yaXg5byB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuLlR5cGVzLWNvbnRhaW5lci0yQ0JJVSB7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4uVHlwZXMtdHlwZV9jb250LTFEdEdvIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uVHlwZXMtdHlwZXMtMzN6T0oge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uVHlwZXMtY3JlYXRlX2NvbnQtMk4zQ3gge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMCAwIDEwcHggMTBweDtcXG59XFxuLlR5cGVzLXN1Ym1pdC0xdEM4WiB7XFxuICBtYXJnaW46IDI4cHggMCAwIDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmVcXG59XFxuLlR5cGVzLXN1Ym1pdC0xdEM4Wjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMyMjI7XFxufVxcbi5UeXBlcy1jcmVhdGVfY29udC0yTjNDeCB7XFxuICB3aWR0aDogNDAwcHg7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9yb3V0ZXMvdHlwZXMvVHlwZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxhQUFhO0NBQ2RcIixcImZpbGVcIjpcIlR5cGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLnR5cGVfY29udCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLnR5cGVzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmNyZWF0ZV9jb250IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XFxufVxcbi5zdWJtaXQge1xcbiAgbWFyZ2luOiAyOHB4IDAgMCAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lXFxufVxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG4uY3JlYXRlX2NvbnQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlR5cGVzLXJvb3QtMml4OW9cIixcblx0XCJjb250YWluZXJcIjogXCJUeXBlcy1jb250YWluZXItMkNCSVVcIixcblx0XCJ0eXBlX2NvbnRcIjogXCJUeXBlcy10eXBlX2NvbnQtMUR0R29cIixcblx0XCJ0eXBlc1wiOiBcIlR5cGVzLXR5cGVzLTMzek9KXCIsXG5cdFwiY3JlYXRlX2NvbnRcIjogXCJUeXBlcy1jcmVhdGVfY29udC0yTjNDeFwiLFxuXHRcInN1Ym1pdFwiOiBcIlR5cGVzLXN1Ym1pdC0xdEM4WlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvdHlwZXMvVHlwZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR5cGVzIGZyb20gJy4vVHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsndHlwZXMnXSxcbiAgICB0aXRsZTogJ0NsYXNzVUknLFxuICAgIGNvbXBvbmVudDogPExheW91dD48VHlwZXMvPjwvTGF5b3V0PixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvdHlwZXMvaW5kZXguanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IG51bGwsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoaXN0b3J5LnB1c2godGhpcy5wcm9wcy50byk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPGEgaHJlZj17dG99IHsuLi5wcm9wc30gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e2NoaWxkcmVufTwvYT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG4vLyBleHRlcm5hbC1nbG9iYWwgc3R5bGVzIG11c3QgYmUgaW1wb3J0ZWQgaW4geW91ciBKUy5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcblxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0gdG89XCIvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZFR4dH0+Q2xhc3NVSTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG9ybm1lbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy55ZWxsb3d9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmFuZ2V9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZ3JlZW59PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZ3JlZW59PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYmx1ZX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbi8vIE5hdmlnYXRpb24gbWFuYWdlciwgZS5nLiBoaXN0b3J5LnB1c2goJy9ob21lJylcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tamFja3Nvbi9oaXN0b3J5XG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5CUk9XU0VSICYmIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hpc3RvcnkuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fSByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvXCI+Q2xhc3NpZnk8L0xpbms+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi90eXBlc1wiPlR5cGVzPC9MaW5rPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbW9kZWxcIj5Nb2RlbDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+IHwgPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbG9naW5cIj5Mb2cgaW48L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9Pm9yPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e2N4KHMubGluaywgcy5oaWdobGlnaHQpfSB0bz1cIi9yZWdpc3RlclwiPlNpZ24gdXA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTmF2aWdhdGlvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9OYXZpZ2F0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL05hdmlnYXRpb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUsXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTphY3RpdmUsXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWhpZ2hsaWdodC0yVU5scSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWhpZ2hsaWdodC0yVU5scTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5OYXZpZ2F0aW9uLXNwYWNlci0zdlpWRyB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9jbGFzc2lmeV9yZWR1eC9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDs7O0VBR0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQ1wiLFwiZmlsZVwiOlwiTmF2aWdhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4ucm9vdCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjEyNWVtOyAvKiB+MThweCAqL1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oaWdobGlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbi1yb290LTJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb24tbGluay1OdGwzNVwiLFxuXHRcImhpZ2hsaWdodFwiOiBcIk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxXCIsXG5cdFwic3BhY2VyXCI6IFwiTmF2aWdhdGlvbi1zcGFjZXItM3ZaVkdcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hlYWRlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hlYWRlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5IZWFkZXItcm9vdC1POW9XOSB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLkhlYWRlci1jb250YWluZXItcVEybUYge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kLTJvU195IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kVHh0LTIzMGFIIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uSGVhZGVyLWFkb3JubWVudC0yOXFTUSB7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5IZWFkZXIteWVsbG93LXg5UXE5IHtcXG4gIGJhY2tncm91bmQ6ICNmMmNhNzA7XFxuICAtbW96LWZsZXg6IDU7XFxuICAtbXMtZmxleDogNTtcXG4gIC1vLWZsZXg6IDU7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgICAgICBmbGV4OiA1IDEgMCU7XFxufVxcbi5IZWFkZXItb3JhbmdlLTFlM0tOe1xcbiAgYmFja2dyb3VuZDogI2VkOWU3MjtcXG4gIC1tb3otZmxleDogMTtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgLW8tZmxleDogMTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLkhlYWRlci1kZ3JlZW4tQ0hLazl7XFxuICBiYWNrZ3JvdW5kOiAjOWZkZDVlO1xcbiAgLW1vei1mbGV4OiAxNDtcXG4gIC1tcy1mbGV4OiAxNDtcXG4gIC1vLWZsZXg6IDE0O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTQ7XFxuICAgICAgICAgIGZsZXg6IDE0IDEgMCU7XFxufVxcbi5IZWFkZXItbGdyZWVuLWZ3am1Fe1xcbiAgYmFja2dyb3VuZDogI2NhZWQ3MjtcXG4gIC1tb3otZmxleDogNTtcXG4gIC1tcy1mbGV4OiA1O1xcbiAgLW8tZmxleDogNTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLkhlYWRlci1kYmx1ZS0yb3hsbXtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICAtbW96LWZsZXg6IDEwO1xcbiAgLW1zLWZsZXg6IDEwO1xcbiAgLW8tZmxleDogMTA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgZmxleDogMTAgMSAwJTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7VUFDWixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO1VBQ1osYUFBYTtDQUN0QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtVQUNiLGNBQWM7Q0FDdkI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7VUFDWixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO1VBQ2IsY0FBYztDQUN2QlwiLFwiZmlsZVwiOlwiSGVhZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcbi5icmFuZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuLmJyYW5kVHh0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uYWRvcm5tZW50IHtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLnllbGxvdyB7XFxuICBiYWNrZ3JvdW5kOiAjZjJjYTcwO1xcbiAgLW1vei1mbGV4OiA1O1xcbiAgLW1zLWZsZXg6IDU7XFxuICAtby1mbGV4OiA1O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogNTtcXG4gICAgICAgICAgZmxleDogNSAxIDAlO1xcbn1cXG4ub3Jhbmdle1xcbiAgYmFja2dyb3VuZDogI2VkOWU3MjtcXG4gIC1tb3otZmxleDogMTtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgLW8tZmxleDogMTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLmRncmVlbntcXG4gIGJhY2tncm91bmQ6ICM5ZmRkNWU7XFxuICAtbW96LWZsZXg6IDE0O1xcbiAgLW1zLWZsZXg6IDE0O1xcbiAgLW8tZmxleDogMTQ7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxNDtcXG4gICAgICAgICAgZmxleDogMTQgMSAwJTtcXG59XFxuLmxncmVlbntcXG4gIGJhY2tncm91bmQ6ICNjYWVkNzI7XFxuICAtbW96LWZsZXg6IDU7XFxuICAtbXMtZmxleDogNTtcXG4gIC1vLWZsZXg6IDU7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgICAgICBmbGV4OiA1IDEgMCU7XFxufVxcbi5kYmx1ZXtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICAtbW96LWZsZXg6IDEwO1xcbiAgLW1zLWZsZXg6IDEwO1xcbiAgLW8tZmxleDogMTA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgZmxleDogMTAgMSAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIZWFkZXItcm9vdC1POW9XOVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlci1jb250YWluZXItcVEybUZcIixcblx0XCJicmFuZFwiOiBcIkhlYWRlci1icmFuZC0yb1NfeVwiLFxuXHRcImJyYW5kVHh0XCI6IFwiSGVhZGVyLWJyYW5kVHh0LTIzMGFIXCIsXG5cdFwiYWRvcm5tZW50XCI6IFwiSGVhZGVyLWFkb3JubWVudC0yOXFTUVwiLFxuXHRcInllbGxvd1wiOiBcIkhlYWRlci15ZWxsb3cteDlRcTlcIixcblx0XCJvcmFuZ2VcIjogXCJIZWFkZXItb3JhbmdlLTFlM0tOXCIsXG5cdFwiZGdyZWVuXCI6IFwiSGVhZGVyLWRncmVlbi1DSEtrOVwiLFxuXHRcImxncmVlblwiOiBcIkhlYWRlci1sZ3JlZW4tZndqbUVcIixcblx0XCJkYmx1ZVwiOiBcIkhlYWRlci1kYmx1ZS0yb3hsbVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvY2xhc3NpZnlfcmVkdXgvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0RUFBNEU7O0FBRTVFO2dGQUNnRjs7QUFFaEY7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywrQkFBK0IsQ0FBQyxPQUFPO0NBQ3hDOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7T0FFTyxPQUFPO0VBQ1osZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCLENBQUMsT0FBTztFQUN4QyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usb0JBQW9CLENBQUMsT0FBTztFQUM1QiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLDBDQUEwQztVQUNsQyxrQ0FBa0MsQ0FBQyxPQUFPO0NBQ25EOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxvQkFBb0I7Q0FDckI7O0FBRUQ7OztHQUdHOztBQUVIOzs7RUFHRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIOztFQUVFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7Ozs7O0VBS0Usd0JBQXdCLENBQUMsT0FBTztFQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsVUFBVSxDQUFDLE9BQU87Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1FBQ1EsT0FBTztFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7U0FDUyxPQUFPO0VBQ2QscUJBQXFCO0NBQ3RCOztBQUVEOzs7O0dBSUc7O0FBRUg7Ozs7RUFJRSwyQkFBMkIsQ0FBQyxPQUFPO0NBQ3BDOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLCtCQUErQjtDQUNoQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDs7Ozs7R0FLRzs7QUFFSDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUIsQ0FBQyxPQUFPO0VBQ3ZDLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsV0FBVyxDQUFDLE9BQU87RUFDbkIsb0JBQW9CLENBQUMsT0FBTztDQUM3Qjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxzQkFBc0IsQ0FBQyxPQUFPO0VBQzlCLHlCQUF5QixDQUFDLE9BQU87Q0FDbEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxXQUFXLENBQUMsT0FBTztDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxhQUFhO0NBQ2Q7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxxQkFBcUIsQ0FBQyxPQUFPO0NBQzlCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHlCQUF5QjtDQUMxQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGNBQWMsQ0FBQyxPQUFPO0NBQ3ZCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJub3JtYWxpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZSxcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9MYXlvdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9MYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuLkxheW91dC1jb250ZW50LWNpTjdyIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4vKlxcbiAqIEJhc2Ugc3R5bGVzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5odG1sIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiB+MTZweDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjMDA3NGMyO1xcbn1cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5oMyB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC43KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEOzs7O0dBSUc7QUFDSDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7QUFDRDs7Z0ZBRWdGO0FBQ2hGO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLENBQUMsWUFBWTtFQUM1QiwwREFBMEQ7RUFDMUQsbUJBQW1CLENBQUMsV0FBVztDQUNoQztBQUNEO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixVQUFVO0NBQ1g7QUFDRDs7Ozs7O0dBTUc7QUFDSDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDs7R0FFRztBQUNIO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0NBQ1o7QUFDRDs7OztHQUlHO0FBQ0g7Ozs7OztFQU1FLHVCQUF1QjtDQUN4QjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDs7Z0ZBRWdGO0FBQ2hGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7Ozs7Z0ZBSWdGO0FBQ2hGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi8qXFxuICogbm9ybWFsaXplLmNzcyBpcyBpbXBvcnRlZCBpbiBKUyBmaWxlLlxcbiAqIElmIHlvdSBpbXBvcnQgZXh0ZXJuYWwgQ1NTIGZpbGUgZnJvbSB5b3VyIGludGVybmFsIENTU1xcbiAqIHRoZW4gaXQgd2lsbCBiZSBpbmxpbmVkIGFuZCBwcm9jZXNzZWQgd2l0aCBDU1MgbW9kdWxlcy5cXG4gKi9cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuNyk7XFxuICBtYXJnaW46IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRleHQtc2hhZG93IGluIHNlbGVjdGlvbiBoaWdobGlnaHQ6XFxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXFxuICpcXG4gKiBUaGVzZSBzZWxlY3Rpb24gcnVsZSBzZXRzIGhhdmUgdG8gYmUgc2VwYXJhdGUuXFxuICogQ3VzdG9taXplIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHlvdXIgZGVzaWduLlxcbiAqL1xcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbi8qXFxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxcbiAqL1xcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcXG4gKiBpbWFnZXMsIHZpZGVvcyBhbmQgdGhlIGJvdHRvbSBvZiB0aGVpciBjb250YWluZXJzOlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcXG4gKi9cXG5hdWRpbyxcXG5jYW52YXMsXFxuaWZyYW1lLFxcbmltZyxcXG5zdmcsXFxudmlkZW8ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLypcXG4gKiBSZW1vdmUgZGVmYXVsdCBmaWVsZHNldCBzdHlsZXMuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLypcXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG4vKlxcbiAqIEJyb3dzZXIgdXBncmFkZSBwcm9tcHRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpnbG9iYWwoLmJyb3dzZXJ1cGdyYWRlKSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG4vKlxcbiAqIFByaW50IHN0eWxlc1xcbiAqIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OlxcbiAqIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1lZGlhIHByaW50IHtcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cihocmVmKSAnKSc7XFxuICB9XFxuXFxuICBhYmJyW3RpdGxlXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIodGl0bGUpICcpJztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxcbiAgICogb3IgdXNlIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbFxcbiAgICovXFxuXFxuICBhW2hyZWZePScjJ106OmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG5cXG4gIHByZSxcXG4gIGJsb2NrcXVvdGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICAvKlxcbiAgICogUHJpbnRpbmcgVGFibGVzOlxcbiAgICogaHR0cDovL2Nzcy1kaXNjdXNzLmluY3V0aW8uY29tL3dpa2kvUHJpbnRpbmdfVGFibGVzXFxuICAgKi9cXG5cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgfVxcblxcbiAgdHIsXFxuICBpbWcge1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHAsXFxuICBoMixcXG4gIGgzIHtcXG4gICAgb3JwaGFuczogMztcXG4gICAgd2lkb3dzOiAzO1xcbiAgfVxcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGVudFwiOiBcIkxheW91dC1jb250ZW50LWNpTjdyXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gSW1wb3J0IENvbXBvbmVudHNcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3Bkb3duLmNzcyc7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dfb3B0aW9uczogZmFsc2UsXG5cdFx0XHRvcHRpb25zX2hvdmVyOiBmYWxzZSxcblx0XHR9XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBzaG93X29wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgJiYgdGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5yb290LCB7W3N0eWxlcy5hbHRdOiB0aGlzLnByb3BzLmFsdH0pfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cblx0XHRcdFx0XHQ8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfb3B0aW9uczogdHJ1ZX0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3B0aW9uc19ob3ZlcikgXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X29wdGlvbnM6IGZhbHNlfSlcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgfX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZH0+e3RoaXMucHJvcHMuc2VsZWN0ZWQgPyB0aGlzLnByb3BzLnNlbGVjdGVkIDogKHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9uc1swXSA6IHVuZGVmaW5lZCl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0e3Nob3dfb3B0aW9ucyAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30+PC9zcGFuPn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7c2hvd19vcHRpb25zICYmIDxkaXYgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm9wdGlvbnMpfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3toZWlnaHQ6IHRoaXMuc3RhdGUuc2hvd19vcHRpb25zID8gKCh0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoICsgMSkgKiAyMikgKyAncHgnIDogMCAvKlRPRE8gQ09SUkVDVCBWQUxVRSovfX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy5vcHRpb25zTW91c2VMZWF2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2hvdmVyOiB0cnVlfSk7XG4gICAgICAgICAgICB9fT57dGhpcy5nZXRPcHRpb25zKCl9PC9kaXY+fVxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIG9wdGlvbnNNb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaG92ZXI6IGZhbHNlfSk7XG4gIFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93X29wdGlvbnM6IGZhbHNlfSlcblx0XHR9LCAyNTApO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgXHRpZiAoIXRoaXMucHJvcHMub3B0aW9ucykgcmV0dXJuO1xuICBcdGNvbnN0IGFyciA9IHRoaXMucHJvcHMub3B0aW9ucy5zbGljZSgpO1xuICBcdGlmKHRoaXMucHJvcHMuc2VsZWN0ZWQpIGFyci51bnNoaWZ0KHRoaXMucHJvcHMuc2VsZWN0ZWQpO1xuICAgIGVsc2UgYXJyLnVuc2hpZnQoYXJyWzBdKTtcbiAgXHRyZXR1cm4gYXJyLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBzdHlsZT17aW5kZXggPT09IDAgPyB7b3BhY2l0eTogMC43fSA6IHVuZGVmaW5lZH0gb25DbGljaz17KCkgPT4ge3RoaXMub25TZWxlY3Qob3B0aW9uKX19PntvcHRpb259PC9kaXY+XG5cdFx0KTtcbiAgfVxuXG4gIG9uU2VsZWN0KHZhbHVlKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7c2hvd19vcHRpb25zOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaG92ZXI6IGZhbHNlfSk7XG4gIFx0dGhpcy5wcm9wcy5vblNlbGVjdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERyb3Bkb3duKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQz94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPyUzRSAlM0MhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApIC0tJTNFICUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDI0IDI0JyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFICUzQ3N0eWxlIHR5cGU9J3RleHQvY3NzJyUzRSAuc3QwJTdCZmlsbDpub25lO3N0cm9rZTolMjMyMjIyMjI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7JTdEICUzQy9zdHlsZSUzRSAlM0N0aXRsZSUzRWFkZCUzQy90aXRsZSUzRSAlM0NsaW5lIGNsYXNzPSdzdDAnIHgxPScxNycgeTE9JzEyJyB4Mj0nNycgeTI9JzEyJy8lM0UgJTNDbGluZSBjbGFzcz0nc3QwJyB4MT0nMTInIHkxPScxNycgeDI9JzEyJyB5Mj0nNycvJTNFICUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9hZGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCc/JTNFICUzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0lM0UgJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UgJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOm5vbmU7c3Ryb2tlOiUyM0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDslN0QgJTNDL3N0eWxlJTNFICUzQ3RpdGxlJTNFYWRkLWhvdmVyJTNDL3RpdGxlJTNFICUzQ2xpbmUgY2xhc3M9J3N0MCcgeDE9JzE3JyB5MT0nMTInIHgyPSc3JyB5Mj0nMTInLyUzRSAlM0NsaW5lIGNsYXNzPSdzdDAnIHgxPScxMicgeTE9JzE3JyB4Mj0nMTInIHkyPSc3Jy8lM0UgJTNDL3N2ZyUzRVxcXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVzb3VyY2VzL2FkZC1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgaWQ9J0xheWVyXzEnIGRhdGEtbmFtZT0nTGF5ZXIgMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTNFLmNscy0xJTdCZmlsbDpub25lO3N0cm9rZTolMjMyMjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDslN0QlM0Mvc3R5bGUlM0UlM0MvZGVmcyUzRSUzQ3RpdGxlJTNFZGVsJTNDL3RpdGxlJTNFJTNDbGluZSBjbGFzcz0nY2xzLTEnIHgxPScxNScgeTE9JzEwJyB4Mj0nNScgeTI9JzEwJy8lM0UlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZGVsLnN2Z1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBpZD0nTGF5ZXJfMScgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM0UlM0NkZWZzJTNFJTNDc3R5bGUlM0UuY2xzLTElN0JmaWxsOm5vbmU7c3Ryb2tlOiUyM2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4OyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VkZWwtaG92ZXIlM0MvdGl0bGUlM0UlM0NsaW5lIGNsYXNzPSdjbHMtMScgeDE9JzE1JyB5MT0nMTAnIHgyPSc1JyB5Mj0nMTAnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9kZWwtaG92ZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9Ecm9wZG93bi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRHJvcGRvd24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRHJvcGRvd24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRHJvcGRvd24tcm9vdC0zdDA1WiB7XFxuXFx0bGluZS1oZWlnaHQ6IDIxcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlXFxufVxcbi5Ecm9wZG93bi1yb290LTN0MDVaLkRyb3Bkb3duLWFsdC1UbkNPRiAuRHJvcGRvd24tYXJyb3ctMm91ZDA6YWZ0ZXIge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbn1cXG4uRHJvcGRvd24tcm9vdC0zdDA1Wi5Ecm9wZG93bi1hbHQtVG5DT0YgLkRyb3Bkb3duLW9wdGlvbnMtMmtVMl8ge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0Y29sb3I6ICMyMjI7XFxufVxcbi5Ecm9wZG93bi1jb250YWluZXItbTQ0VGsge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uRHJvcGRvd24tYXJyb3ctMm91ZDAge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTBweFxcbn1cXG4uRHJvcGRvd24tYXJyb3ctMm91ZDA6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLkRyb3Bkb3duLW9wdGlvbnMtMmtVMl8ge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZGRkO1xcblxcdGhlaWdodDogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllciguNDYsLjA0LC4wNywuOTMpO1xcblxcdHotaW5kZXg6IDUwO1xcbn1cXG4uRHJvcGRvd24tb3B0aW9uLThMZGtfIHtcXG5cXHRwYWRkaW5nOiAxcHggMTVweCAwIDVweFxcbn1cXG4uRHJvcGRvd24tb3B0aW9uLThMZGtfOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTYsIDE5NiwgMTk2KVxcbn1cXG4uRHJvcGRvd24tc2VsZWN0LTFyazN5IHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uRHJvcGRvd24tc2VsZWN0ZWQtVDd1czEgeyBcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcblxcdG1hcmdpbjogMCA1cHg7XFxuXFx0cGFkZGluZy10b3A6IDFweDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL2NsYXNzaWZ5X3JlZHV4L3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjtBQUNEO0dBQ0csc0RBQXNEO0NBQ3hEO0FBQ0Q7R0FDRyxpQkFBaUI7R0FDakIsWUFBWTtDQUNkO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1g7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlDQUF5QztNQUNyQyxxQ0FBcUM7VUFDakMsaUNBQWlDO0VBQ3pDLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsdURBQXVEO0NBQ3hEO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLDhEQUE4RDtDQUM5RCx5REFBeUQ7Q0FDekQsc0RBQXNEO0NBQ3RELFlBQVk7Q0FDWjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7RUFDRSw4QkFBOEI7Q0FDL0I7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixvQkFBb0I7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtLQUN4Qix3QkFBd0I7Q0FDNUJcIixcImZpbGVcIjpcIkRyb3Bkb3duLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGxpbmUtaGVpZ2h0OiAyMXB4O1xcblxcdG1heC13aWR0aDogMTAwJVxcbn1cXG4ucm9vdC5hbHQgLmFycm93OmFmdGVyIHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcXG59XFxuLnJvb3QuYWx0IC5vcHRpb25zIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdFxcdGNvbG9yOiAjMjIyO1xcbn1cXG4uY29udGFpbmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1vLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuLmFycm93IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwcHhcXG59XFxuLmFycm93OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XFxuICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5vcHRpb25zIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZDogI2RkZDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHQtby10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoLjQ2LC4wNCwuMDcsLjkzKTtcXG5cXHR6LWluZGV4OiA1MDtcXG59XFxuLm9wdGlvbiB7XFxuXFx0cGFkZGluZzogMXB4IDE1cHggMCA1cHhcXG59XFxuLm9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk2LCAxOTYsIDE5NilcXG59XFxuLnNlbGVjdCB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLnNlbGVjdGVkIHsgXFxuXFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG5cXHRtYXJnaW46IDAgNXB4O1xcblxcdHBhZGRpbmctdG9wOiAxcHg7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkRyb3Bkb3duLXJvb3QtM3QwNVpcIixcblx0XCJhbHRcIjogXCJEcm9wZG93bi1hbHQtVG5DT0ZcIixcblx0XCJhcnJvd1wiOiBcIkRyb3Bkb3duLWFycm93LTJvdWQwXCIsXG5cdFwib3B0aW9uc1wiOiBcIkRyb3Bkb3duLW9wdGlvbnMtMmtVMl9cIixcblx0XCJjb250YWluZXJcIjogXCJEcm9wZG93bi1jb250YWluZXItbTQ0VGtcIixcblx0XCJvcHRpb25cIjogXCJEcm9wZG93bi1vcHRpb24tOExka19cIixcblx0XCJzZWxlY3RcIjogXCJEcm9wZG93bi1zZWxlY3QtMXJrM3lcIixcblx0XCJzZWxlY3RlZFwiOiBcIkRyb3Bkb3duLXNlbGVjdGVkLVQ3dXMxXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd24vRHJvcGRvd24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGlkPSdMYXllcl8xJyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5jbHMtMSU3QmZpbGw6JTIzMjIyOyU3RCUzQy9zdHlsZSUzRSUzQy9kZWZzJTNFJTNDdGl0bGUlM0VlZGl0JTNDL3RpdGxlJTNFJTNDcGF0aCBjbGFzcz0nY2xzLTEnIGQ9J00xNC44Miw5LjQzbDEtMWEyLjM2LDIuMzYsMCwwLDAsMC0zLjMzbC0uOTEtLjkxYTIuMzYsMi4zNiwwLDAsMC0zLjMzLDBsLTEsMVonLyUzRSUzQ3BvbHlnb24gY2xhc3M9J2Nscy0xJyBwb2ludHM9JzkuMTYgNi42IDMuNDkgMTIuMjcgMy40OSAxNi41MSA3LjczIDE2LjUxIDEzLjQgMTAuODQgOS4xNiA2LjYnLyUzRSUzQy9zdmclM0VcXFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jlc291cmNlcy9lZGl0LnN2Z1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBpZD0nTGF5ZXJfMScgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM0UlM0NkZWZzJTNFJTNDc3R5bGUlM0UuY2xzLTElN0JmaWxsOiUyM2ZmZjslN0QlM0Mvc3R5bGUlM0UlM0MvZGVmcyUzRSUzQ3RpdGxlJTNFZWRpdC1ob3ZlciUzQy90aXRsZSUzRSUzQ3BhdGggY2xhc3M9J2Nscy0xJyBkPSdNMTQuODIsOS40M2wxLTFhMi4zNiwyLjM2LDAsMCwwLDAtMy4zM2wtLjkxLS45MWEyLjM2LDIuMzYsMCwwLDAtMy4zMywwbC0xLDFaJy8lM0UlM0Nwb2x5Z29uIGNsYXNzPSdjbHMtMScgcG9pbnRzPSc5LjE2IDYuNiAzLjQ5IDEyLjI3IDMuNDkgMTYuNTEgNy43MyAxNi41MSAxMy40IDEwLjg0IDkuMTYgNi42Jy8lM0UlM0Mvc3ZnJTNFXFxcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yZXNvdXJjZXMvZWRpdC1ob3Zlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBekdBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBWEE7QUFEQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcERBO0FBQ0E7QUFzREE7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQVRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBMUdBO0FBQ0E7QUE0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBYUE7QUF2QkE7QUFDQTtBQXlCQTs7Ozs7OztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUEyQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBL0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBTEE7QUFEQTtBQWdCQTtBQW5CQTtBQUNBO0FBcUJBOzs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQWJBO0FBQ0E7QUFlQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBaEJBO0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUNBO0FBa0VBOzs7Ozs7O0FDM0VBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=