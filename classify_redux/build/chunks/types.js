require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 107:
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

/***/ 108:
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

/***/ 109:
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_runtime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_Service_ServiceEntry__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_Service_CreateType__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Types_css__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Types_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Types_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
















var _ref = _jsx('h2', {}, void 0, 'Types');

var _ref2 = _jsx('h2', {}, void 0, 'Create Type');

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
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.container
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.type_cont
    }, void 0, _ref, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.types
    }, void 0, this.getTypes())), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.create_cont
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_9_components_Service_CreateType__["a" /* default */], {
      onRef: ref => {
        this.createType = ref;
      },
      edit_attrs: this.state.cur_service ? this.props.services[this.state.cur_service] : undefined,
      edit_name: this.state.cur_service
    })), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.buttons
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.submit,
      onClick: this.submitService.bind(this)
    }, void 0, 'Submit'))));
  }

  getTypes() {
    if (!this.props.services || Object.keys(this.props.services).length < 1) return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_10__Types_css___default.a.alert
    }, void 0, 'No Types');
    return Object.entries(this.props.services).map(service => _jsx(__WEBPACK_IMPORTED_MODULE_8_components_Service_ServiceEntry__["a" /* default */], {
      service: service[0],
      attributes: service[1],
      onEdit: this.setEditType.bind(this)
    }, service[0]));
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Service_EditDataWindow__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();










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
		return _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.root
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.container
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.bar,
			onClick: this.toggleDataWindow.bind(this)
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.buttons
		}, void 0, _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.button, this.state.minimize ? __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.max : __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.min)
		})), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.infobar
		}, void 0, _jsx('span', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.name
		}, void 0, this.props.service))), _jsx('div', {
			className: __WEBPACK_IMPORTED_MODULE_5__ServiceEntry_css___default.a.datawindow,
			style: { height: this.state.minimize ? 0 : this.dataWindowBound.height }
		}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_components_Service_EditDataWindow__["a" /* default */], {
			attributes: this.props.attributes,
			onRef: dataWindow => {
				this.dataWindow = dataWindow;
			}
		}))));
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(129);
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._2q68U{font-weight:700;margin-bottom:5px}._3vEDE{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;background:#222;color:#fff;cursor:pointer}._38MKg{-moz-flex:1;-ms-flex:1;-o-flex:1;-webkit-box-flex:1;flex:1 1 0%;padding-left:3px;height:22px;line-height:22px;letter-spacing:1px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}._1IfcC{padding-left:50px;overflow:hidden;-webkit-transition:height .6s cubic-bezier(.62,.06,.07,.99);-o-transition:height .6s cubic-bezier(.62,.06,.07,.99);transition:height .6s cubic-bezier(.62,.06,.07,.99)}._3WKI9{font-size:18px}._3dGfu{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex}._2ctYe{background-size:22px 22px;width:22px;height:22px}._2ctYe:hover{background:#fff}._2ctYe._2abPi{background-image:url(" + __webpack_require__(90) + ")}._2ctYe._2abPi:hover{background-image:url(" + __webpack_require__(89) + ")}._2ctYe._2_Sps{background-image:url(" + __webpack_require__(92) + ")}._2ctYe._2_Sps:hover{background-image:url(" + __webpack_require__(91) + ")}._2ctYe._3lqqQ{background-image:url(" + __webpack_require__(96) + ")}._2ctYe._3lqqQ:hover{background-image:url(" + __webpack_require__(95) + ")}._2ctYe._2Ufvi{display:none}", ""]);

// exports
exports.locals = {
	"root": "_2q68U",
	"bar": "_3vEDE",
	"infobar": "_38MKg",
	"datawindow": "_1IfcC",
	"name": "_3WKI9",
	"buttons": "_3dGfu",
	"button": "_2ctYe",
	"max": "_2abPi",
	"min": "_2_Sps",
	"edit": "_3lqqQ",
	"invisible": "_2Ufvi"
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutability_helper__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Dropdown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateType_css__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__CreateType_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();










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
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.container
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.type
    }, void 0, _jsx('input', {
      type: 'text',
      value: this.state.name,
      placeholder: 'Service Name',
      onChange: e => {
        this.setState({ name: e.target.value });
      }
    })), _jsx('table', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attributes
    }, void 0, _jsx('tbody', {}, void 0, this.getAttributes()))));
  }

  getAttributes() {
    return Object.entries(this.state.attributes).map((entry, index) => _jsx('tr', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attribute
    }, index, _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button,
      onClick: () => {
        this.removeAttribute(entry[0]);
      }
    })), _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.name
    }, void 0, entry[0])), _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.options
    }, void 0, this.parseAttribute(entry[1], entry[0]))))).concat([_jsx('tr', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.attribute
    }, '-1', _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.add),
      onClick: this.addAttribute.bind(this)
    })), _jsx('td', {}, void 0, _jsx('input', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.name,
      type: 'text',
      placeholder: 'Attribute',
      onChange: e => {
        this.setState({ new_attr_name: e.target.value });
      },
      value: this.state.new_attr_name
    })), _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.options
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_components_Dropdown__["a" /* default */], {
      options: ['NUMERIC', 'ENUM'],
      selected: this.state.new_attr_type,
      onSelect: option => this.setState({ new_attr_type: option })
    }))))]);
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
    if (typeof attr === 'string') return attr;else if (attr instanceof Array) return _jsx('table', {}, void 0, _jsx('tbody', {}, void 0, attr.map((item, index) => _jsx('tr', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.option
    }, index, _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button,
      onClick: () => {
        this.removeAttributeOption(type, index);
      }
    })), _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.value
    }, void 0, item)))).concat([_jsx(AddAttributeOption, {
      type: type,
      onClick: this.addAttributeOption.bind(this)
    }, '-1')])));
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
    return _jsx('tr', {
      className: __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.option_adder
    }, '-1', _jsx('td', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.button, __WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a.add),
      onClick: () => {
        this.props.onClick(this.props.type, this.state.option);
        this.setState({ option: '' });
      }
    })), _jsx('td', {}, void 0, _jsx('input', {
      type: 'text',
      placeholder: 'Add Item',
      value: this.state.option,
      onChange: e => {
        this.setState({ option: e.target.value });
      }
    })));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_5__CreateType_css___default.a)(CreateType));

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(132);
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._1iwHM{margin-top:5px;font-weight:400}._1iwHM input{font-family:Roboto Condensed,Montserrat,sans-serif;text-transform:uppercase;border:none}._1iwHM td{vertical-align:top}._1iwHM ul{list-style:none;margin:0;padding:0}.vb_op{background:#222;padding:2px 7px}.vb_op input{background:#222;color:#fff;font-size:20px;font-weight:700;width:100%}.vb_op input::-webkit-input-placeholder{color:hsla(0,0%,100%,.4)}.vb_op input:-ms-input-placeholder{color:hsla(0,0%,100%,.4)}.vb_op input::placeholder{color:hsla(0,0%,100%,.4)}._1a-Dk{background-image:url(" + __webpack_require__(91) + ");background-size:20px 20px;width:20px;height:20px}._1a-Dk:hover{background:#222;background-image:url(" + __webpack_require__(92) + ")}._1a-Dk.J_R18{background-image:url(" + __webpack_require__(89) + ")}._1a-Dk.J_R18:hover{background-image:url(" + __webpack_require__(90) + ")}._2GOJB{font-weight:700}input::-webkit-input-placeholder{font-weight:400}input:-ms-input-placeholder{font-weight:400}input::placeholder{font-weight:400}", ""]);

// exports
exports.locals = {
	"root": "_1iwHM",
	"type": "vb_op",
	"button": "_1a-Dk",
	"add": "J_R18",
	"name": "_2GOJB"
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(134);
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "._3SCXa{text-transform:uppercase;line-height:normal}._1cYKL{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px}.rH4P0{width:400px;margin-left:20px}._3cuk6{margin-top:5px}._2ZHLC{margin-left:20px}h2{font-size:24px;line-height:18px;font-weight:400;margin:0 0 10px 10px}.LKHMd{margin:28px 0 0 20px;background:#222;border:5px solid #222;color:#fff;cursor:pointer;display:inline-block;letter-spacing:1px;padding:5px;font-size:30px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.LKHMd:hover{background:#fff;color:#222}._2ZHLC{width:400px}", ""]);

// exports
exports.locals = {
	"root": "_3SCXa",
	"container": "_1cYKL",
	"type_cont": "rH4P0",
	"types": "_3cuk6",
	"create_cont": "_2ZHLC",
	"submit": "LKHMd"
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Types__ = __webpack_require__(126);
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





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Types__["a" /* default */], {}));

function action() {
  return {
    chunks: ['types'],
    title: 'ClassUI',
    component: _ref
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 73:
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

/***/ 75:
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

/***/ 76:
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

/***/ 77:
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

/***/ 78:
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

/***/ 82:
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

/***/ 83:
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),

/***/ 85:
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

/***/ 86:
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

/***/ 88:
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

/***/ 89:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23222222;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;%7D %3C/style%3E %3Ctitle%3Eadd-hover%3C/title%3E %3Cline class='st0' x1='17' y1='12' x2='7' y2='12'/%3E %3Cline class='st0' x1='12' y1='17' x2='12' y2='7'/%3E %3C/svg%3E\""

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23222;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Edel-hover%3C/title%3E%3Cline class='cls-1' x1='15' y1='10' x2='5' y2='10'/%3E%3C/svg%3E\""

/***/ }),

/***/ 93:
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

/***/ 94:
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

/***/ 95:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eedit-hover%3C/title%3E%3Cpath class='cls-1' d='M14.82,9.43l1-1a2.36,2.36,0,0,0,0-3.33l-.91-.91a2.36,2.36,0,0,0-3.33,0l-1,1Z'/%3E%3Cpolygon class='cls-1' points='9.16 6.6 3.49 12.27 3.49 16.51 7.73 16.51 13.4 10.84 9.16 6.6'/%3E%3C/svg%3E\""

/***/ })

};;
//# sourceMappingURL=types.js.map