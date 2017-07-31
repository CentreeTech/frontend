require("source-map-support").install();
exports.ids = [0];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/AudioPlayer/AudioPlayer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.AudioPlayer-root-3Q98F {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tbackground: #ddd;\n\t\n}\n.AudioPlayer-controls-1xUbq {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.AudioPlayer-controls-1xUbq .AudioPlayer-button-H2nxX {\n\t\t-webkit-backface-visibility: hidden;\n\t\tmargin: 10px 0 10px 10px;\n\t}\n.AudioPlayer-controls-1xUbq .AudioPlayer-play-3L8JB {\n\t\tborder-top: 10px solid transparent;\n    border-left: 16px solid #000;\n    border-bottom: 10px solid transparent;\n    cursor: pointer\n\t}\n.AudioPlayer-controls-1xUbq .AudioPlayer-play-3L8JB:hover {\n  border-left-color: #2b5;\n}\n.AudioPlayer-controls-1xUbq .AudioPlayer-pause-117ZC {\n\t\tdisplay: none;\n\t\twidth: 5px;\n    height: 20px;\n    border-right: 6px solid #000;\n    border-left: 6px solid #000;\n    cursor: pointer\n\t}\n.AudioPlayer-controls-1xUbq .AudioPlayer-pause-117ZC:hover {\n  border-color: #48d;\n}\n.AudioPlayer-progress-3fBL0 {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 0%;\n\t        flex: 1 1 0%\n}\n.AudioPlayer-bar-2Va6E {\n\twidth: 100%;\n\tbackground: #000;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/AudioPlayer/AudioPlayer.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,iBAAiB;;CAEjB;AACD;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd;AACD;EACE,oCAAoC;EACpC,yBAAyB;EACzB;AACF;EACE,mCAAmC;IACjC,6BAA6B;IAC7B,sCAAsC;IACtC,eAAe;EACjB;AACF;EACE,wBAAwB;CACzB;AACD;EACE,cAAc;EACd,WAAW;IACT,aAAa;IACb,6BAA6B;IAC7B,4BAA4B;IAC5B,eAAe;EACjB;AACF;EACE,mBAAmB;CACpB;AACD;CACC,oBAAoB;KAChB,iBAAiB;SACb,YAAY;CACpB;AACD;CACC,YAAY;CACZ,iBAAiB;CACjB","file":"AudioPlayer.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tbackground: #ddd;\n\t\n}\n.controls {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.controls .button {\n\t\t-webkit-backface-visibility: hidden;\n\t\tmargin: 10px 0 10px 10px;\n\t}\n.controls .play {\n\t\tborder-top: 10px solid transparent;\n    border-left: 16px solid #000;\n    border-bottom: 10px solid transparent;\n    cursor: pointer\n\t}\n.controls .play:hover {\n  border-left-color: #2b5;\n}\n.controls .pause {\n\t\tdisplay: none;\n\t\twidth: 5px;\n    height: 20px;\n    border-right: 6px solid #000;\n    border-left: 6px solid #000;\n    cursor: pointer\n\t}\n.controls .pause:hover {\n  border-color: #48d;\n}\n.progress {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 0%;\n\t        flex: 1 1 0%\n}\n.bar {\n\twidth: 100%;\n\tbackground: #000;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "AudioPlayer-root-3Q98F",
	"controls": "AudioPlayer-controls-1xUbq",
	"button": "AudioPlayer-button-H2nxX",
	"play": "AudioPlayer-play-3L8JB",
	"pause": "AudioPlayer-pause-117ZC",
	"progress": "AudioPlayer-progress-3fBL0",
	"bar": "AudioPlayer-bar-2Va6E"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/DataContainer/DataContainer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.DataContainer-root-2QMYU {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground: #69e;\n\twidth: 0;\n\toverflow: hidden;\n\tz-index: 10;\n\tmax-width: 0px;\n\t-webkit-transition: max-width 0s linear;\n\t-o-transition: max-width 0s linear;\n\ttransition: max-width 0s linear;\n}\n.DataContainer-root-2QMYU .DataContainer-close-2Tb1n:hover {\n\t\tbackground: #222\n\t}\n.DataContainer-root-2QMYU .DataContainer-close-2Tb1n:hover:after {\n  background: #69e;\n}\n.DataContainer-root-2QMYU .DataContainer-close-2Tb1n:hover:before {\n  background: #69e;\n}\n.DataContainer-root-2QMYU p {\n\t\tfont-weight: 700;\n\t}\n.DataContainer-root-2QMYU.DataContainer-active-3yBXc {\n  width: 200px;\n}\n.DataContainer-root-2QMYU.DataContainer-animate-2SEjZ {\n  max-width: 200px;\n  -webkit-transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n  -o-transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n  transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n}\n.DataContainer-root-2QMYU.DataContainer-out-1Dt01 {\n  left: 451px;\n}\n@-webkit-keyframes DataContainer-load-o6GuR {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height: 500px;\n  }\n}\n@keyframes DataContainer-load-o6GuR {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height: 500px;\n  }\n}\naudio {\n\twidth: 100%;\n}\n.DataContainer-data_container-2Y_kM {\n\tpadding: 10px;\n}\n.DataContainer-close-2Tb1n {\n\theight: 24px;\n\twidth: 24px;\n\tfloat: right;\n\tposition: relative;\n\tmargin: 3px 3px;\n\tborder-radius: 100%;\n\tcursor: pointer\n}\n.DataContainer-close-2Tb1n:after {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n}\n.DataContainer-close-2Tb1n:before {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  /*z-index: 100;\n */\n}\n.DataContainer-close-2Tb1n:hover {\n  background: #222;\n}\n.DataContainer-close-2Tb1n:hover:after {\n  background: #69e;\n}\n.DataContainer-close-2Tb1n:hover:before {\n  background: #69e;\n}\n.DataContainer-nav-2MfPP {\n\theight: 30px;\n\tposition: relative;\n}\n.DataContainer-nav-2MfPP p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tfont-weight: 400;\n\t}\n.DataContainer-timestamp-3XJhn {\n\n\twhite-space: nowrap;\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/DataContainer/DataContainer.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,mBAAmB;CACnB,OAAO;CACP,QAAQ;CACR,iBAAiB;CACjB,SAAS;CACT,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,wCAAwC;CACxC,mCAAmC;CACnC,gCAAgC;CAChC;AACD;EACE,gBAAgB;EAChB;AACF;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB;AACF;EACE,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,2DAA2D;EAC3D,sDAAsD;EACtD,mDAAmD;CACpD;AACD;EACE,YAAY;CACb;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,kBAAkB;GACnB;CACF;AACD;CACC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,oBAAoB;CACpB,eAAe;CACf;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,wDAAwD;MACpD,oDAAoD;UAChD,gDAAgD;CACzD;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,uDAAuD;MACnD,mDAAmD;UAC/C,+CAA+C;EACvD;GACC;CACF;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;CACC,aAAa;CACb,mBAAmB;CACnB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB;AACF;;CAEC,oBAAoB;CACpB","file":"DataContainer.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground: #69e;\n\twidth: 0;\n\toverflow: hidden;\n\tz-index: 10;\n\tmax-width: 0px;\n\t-webkit-transition: max-width 0s linear;\n\t-o-transition: max-width 0s linear;\n\ttransition: max-width 0s linear;\n}\n.root .close:hover {\n\t\tbackground: #222\n\t}\n.root .close:hover:after {\n  background: #69e;\n}\n.root .close:hover:before {\n  background: #69e;\n}\n.root p {\n\t\tfont-weight: 700;\n\t}\n.root.active {\n  width: 200px;\n}\n.root.animate {\n  max-width: 200px;\n  -webkit-transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n  -o-transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n  transition: all 0.5s cubic-bezier(.44,.15,.34,.98);\n}\n.root.out {\n  left: 451px;\n}\n@-webkit-keyframes load {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height: 500px;\n  }\n}\n@keyframes load {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height: 500px;\n  }\n}\naudio {\n\twidth: 100%;\n}\n.data_container {\n\tpadding: 10px;\n}\n.close {\n\theight: 24px;\n\twidth: 24px;\n\tfloat: right;\n\tposition: relative;\n\tmargin: 3px 3px;\n\tborder-radius: 100%;\n\tcursor: pointer\n}\n.close:after {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n}\n.close:before {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  /*z-index: 100;\n */\n}\n.close:hover {\n  background: #222;\n}\n.close:hover:after {\n  background: #69e;\n}\n.close:hover:before {\n  background: #69e;\n}\n.nav {\n\theight: 30px;\n\tposition: relative;\n}\n.nav p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tfont-weight: 400;\n\t}\n.timestamp {\n\n\twhite-space: nowrap;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "DataContainer-root-2QMYU",
	"close": "DataContainer-close-2Tb1n",
	"active": "DataContainer-active-3yBXc",
	"animate": "DataContainer-animate-2SEjZ",
	"out": "DataContainer-out-1Dt01",
	"data_container": "DataContainer-data_container-2Y_kM",
	"nav": "DataContainer-nav-2MfPP",
	"timestamp": "DataContainer-timestamp-3XJhn",
	"load": "DataContainer-load-o6GuR"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Entry/Entry.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Entry-root-2FX5Z {\n\tcolor: #222;\n\tmargin: 0;\n\tfont-size: 14px\n}\n.Entry-root-2FX5Z.Entry-active-2PMua .Entry-data-1Z87g {\n  background: #4e7fc6;\n  color: #fff;\n}\n.Entry-root-2FX5Z.Entry-active-2PMua .Entry-data-1Z87g .Entry-arrow-ZhVn- {\n\t\t\tborder-color: #fff;\n}\n.Entry-root-2FX5Z.Entry-active-2PMua .Entry-data-1Z87g:hover {\n  background: #222;\n  color: #fff;\n}\n.Entry-root-2FX5Z.Entry-active-2PMua .Entry-stream-3QNPL {\n  display: block;\n}\n.Entry-root-2FX5Z h2 {\n\t\tmargin: 0;\n\t\tfont-size: 18px;\n\t\twidth: calc(100% - 20px);\n}\n.Entry-container-2e-fy {\n\tcursor: pointer;\n\t\n}\n.Entry-data-1Z87g:hover {\n  background: #222;\n  color: #fff;\n}\n.Entry-data-1Z87g:hover .Entry-arrow-ZhVn- {\n\t\t\tborder-color: #fff;\n}\n.Entry-data-1Z87g {\n  position: relative;\n  padding: 5px;\n}\n.Entry-arrow-ZhVn- {\n\twidth: 10px;\n\theight: 10px;\n\tposition: absolute;\n\t-webkit-transform: translateY(-50%) rotate(-45deg);\n\t    -ms-transform: translateY(-50%) rotate(-45deg);\n\t        transform: translateY(-50%) rotate(-45deg);\n\ttop: 50%;\n\tright: 10px;\n\tborder: 2px solid rgba(34, 34, 34, 0.2);\n\tborder-top: none;\n\tborder-left: none;\n}\n.Entry-stream-3QNPL {\n\tcolor: rgb(135, 212, 53);\n\tbackground: #fff;\n\tpadding: 5px;\n\tdisplay: none\n}\n.Entry-stream-3QNPL:hover {\n  background: rgb(135, 212, 53);\n  color: #fff;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Entry/Entry.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,YAAY;CACZ,UAAU;CACV,eAAe;CACf;AACD;EACE,oBAAoB;EACpB,YAAY;CACb;AACD;GACG,mBAAmB;CACrB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,UAAU;EACV,gBAAgB;EAChB,yBAAyB;CAC1B;AACD;CACC,gBAAgB;;CAEhB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;GACG,mBAAmB;CACrB;AACD;EACE,mBAAmB;EACnB,aAAa;CACd;AACD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,mDAAmD;KAC/C,+CAA+C;SAC3C,2CAA2C;CACnD,SAAS;CACT,YAAY;CACZ,wCAAwC;CACxC,iBAAiB;CACjB,kBAAkB;CAClB;AACD;CACC,yBAAyB;CACzB,iBAAiB;CACjB,aAAa;CACb,aAAa;CACb;AACD;EACE,8BAA8B;EAC9B,YAAY;CACb","file":"Entry.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tcolor: #222;\n\tmargin: 0;\n\tfont-size: 14px\n}\n.root.active .data {\n  background: #4e7fc6;\n  color: #fff;\n}\n.root.active .data .arrow {\n\t\t\tborder-color: #fff;\n}\n.root.active .data:hover {\n  background: #222;\n  color: #fff;\n}\n.root.active .stream {\n  display: block;\n}\n.root h2 {\n\t\tmargin: 0;\n\t\tfont-size: 18px;\n\t\twidth: calc(100% - 20px);\n}\n.container {\n\tcursor: pointer;\n\t\n}\n.data:hover {\n  background: #222;\n  color: #fff;\n}\n.data:hover .arrow {\n\t\t\tborder-color: #fff;\n}\n.data {\n  position: relative;\n  padding: 5px;\n}\n.arrow {\n\twidth: 10px;\n\theight: 10px;\n\tposition: absolute;\n\t-webkit-transform: translateY(-50%) rotate(-45deg);\n\t    -ms-transform: translateY(-50%) rotate(-45deg);\n\t        transform: translateY(-50%) rotate(-45deg);\n\ttop: 50%;\n\tright: 10px;\n\tborder: 2px solid rgba(34, 34, 34, 0.2);\n\tborder-top: none;\n\tborder-left: none;\n}\n.stream {\n\tcolor: rgb(135, 212, 53);\n\tbackground: #fff;\n\tpadding: 5px;\n\tdisplay: none\n}\n.stream:hover {\n  background: rgb(135, 212, 53);\n  color: #fff;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Entry-root-2FX5Z",
	"active": "Entry-active-2PMua",
	"data": "Entry-data-1Z87g",
	"arrow": "Entry-arrow-ZhVn-",
	"stream": "Entry-stream-3QNPL",
	"container": "Entry-container-2e-fy"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Event/Event.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Event-root-2SITg {\n\tcolor: #222;\n\tmargin: 0;\n\tfont-size: 14px;\n\twidth: 100%;\n\tposition: relative\n}\n.Event-root-2SITg.Event-unseen-3a1nv {\n  background: #ee4935;\n  color: rgb(56, 10, 5);\n}\n.Event-root-2SITg.Event-unseen-3a1nv .Event-container-13dby:hover {\n\t\t\tcolor: #ee4935;\n}\n.Event-root-2SITg.Event-unseen-3a1nv .Event-container-13dby:hover .Event-arrow-2H7Sd {\n\t\t\t\tborder-color: #ee4935;\n\t\t\t}\n.Event-container-13dby {\n\t/* border-bottom: 1px color(var(--black) a(10%)) solid; */\n\tcursor: pointer;\n\tpadding: 5px 5px 5px 10px;\n\tposition: relative;\n\twhite-space: nowrap\n}\n.Event-container-13dby:hover {\n  background: #222;\n  /*#4e7fc6;\n */\n  color: #fff;\n}\n.Event-container-13dby:hover .Event-arrow-2H7Sd {\n\t\t\tborder-color: #fff;\n}\nh2 {\n\tmargin: 0;\n\tfont-size: 20px;\n}\n.Event-arrow-2H7Sd {\n\twidth: 7px;\n\theight: 7px;\n\tposition: absolute;\n\t-webkit-transform: translateY(-50%) rotate(-45deg);\n\t    -ms-transform: translateY(-50%) rotate(-45deg);\n\t        transform: translateY(-50%) rotate(-45deg);\n\ttop: 50%;\n\tright: 10px;\n\tborder: 2px solid rgba(34, 34, 34, 0.2);\n\tborder-top: none;\n\tborder-left: none;\n}\n/* .data {\n\tdisplay: none;\n\tbackground: #4e7fc6;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 300px;\n\theight: 100%;\n\ttransform: translateX(100%);\n\tz-index: 5;\n} */", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Event/Event.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,YAAY;CACZ,UAAU;CACV,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB;AACD;EACE,oBAAoB;EACpB,sBAAsB;CACvB;AACD;GACG,eAAe;CACjB;AACD;IACI,sBAAsB;IACtB;AACJ;CACC,0DAA0D;CAC1D,gBAAgB;CAChB,0BAA0B;CAC1B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;EACE,iBAAiB;EACjB;GACC;EACD,YAAY;CACb;AACD;GACG,mBAAmB;CACrB;AACD;CACC,UAAU;CACV,gBAAgB;CAChB;AACD;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,mDAAmD;KAC/C,+CAA+C;SAC3C,2CAA2C;CACnD,SAAS;CACT,YAAY;CACZ,wCAAwC;CACxC,iBAAiB;CACjB,kBAAkB;CAClB;AACD;;;;;;;;;;IAUI","file":"Event.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tcolor: #222;\n\tmargin: 0;\n\tfont-size: 14px;\n\twidth: 100%;\n\tposition: relative\n}\n.root.unseen {\n  background: #ee4935;\n  color: rgb(56, 10, 5);\n}\n.root.unseen .container:hover {\n\t\t\tcolor: #ee4935;\n}\n.root.unseen .container:hover .arrow {\n\t\t\t\tborder-color: #ee4935;\n\t\t\t}\n.container {\n\t/* border-bottom: 1px color(var(--black) a(10%)) solid; */\n\tcursor: pointer;\n\tpadding: 5px 5px 5px 10px;\n\tposition: relative;\n\twhite-space: nowrap\n}\n.container:hover {\n  background: #222;\n  /*#4e7fc6;\n */\n  color: #fff;\n}\n.container:hover .arrow {\n\t\t\tborder-color: #fff;\n}\nh2 {\n\tmargin: 0;\n\tfont-size: 20px;\n}\n.arrow {\n\twidth: 7px;\n\theight: 7px;\n\tposition: absolute;\n\t-webkit-transform: translateY(-50%) rotate(-45deg);\n\t    -ms-transform: translateY(-50%) rotate(-45deg);\n\t        transform: translateY(-50%) rotate(-45deg);\n\ttop: 50%;\n\tright: 10px;\n\tborder: 2px solid rgba(34, 34, 34, 0.2);\n\tborder-top: none;\n\tborder-left: none;\n}\n/* .data {\n\tdisplay: none;\n\tbackground: #4e7fc6;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 300px;\n\theight: 100%;\n\ttransform: translateX(100%);\n\tz-index: 5;\n} */"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Event-root-2SITg",
	"unseen": "Event-unseen-3a1nv",
	"container": "Event-container-13dby",
	"arrow": "Event-arrow-2H7Sd"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/EventData/EventData.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.EventData-root-1lL_m {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tz-index: 100;\n\t-webkit-transform: translateX(100%);\n\t    -ms-transform: translateX(100%);\n\t        transform: translateX(100%);\n\tbackground: #69e;\n\twidth: 0;\n\toverflow: hidden\n}\n.EventData-root-1lL_m.EventData-active-1ppMd {\n  width: 200px;\n}\n.EventData-active-1ppMd {\n\twidth: 200px;\n}\naudio {\n\twidth: 100%;\n}\n.EventData-container--PwvG {\n\tpadding: 10px;\n}\n.EventData-nav-NiQQc {\n\theight: 30px;\n\tposition: relative;\n}\n.EventData-nav-NiQQc p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n.EventData-close_events-CXs_5 {\n\tborder-radius: 100%;\n\tcursor: pointer;\n\tfloat: right;\n\tmargin: 3px 3px;\n\tposition: relative;\n\twidth: 24px;\n\theight: 24px\n}\n.EventData-close_events-CXs_5:after, .EventData-close_events-CXs_5:before {\n  background: #222;\n  border-radius: 2px;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.EventData-close_events-CXs_5:after {\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  width: 2px;\n  height: 18px;\n}\n.EventData-close_events-CXs_5:before {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  width: 2px;\n  height: 18px;\n}\n.EventData-close_events-CXs_5:hover {\n  background: #222\n}\n.EventData-close_events-CXs_5:hover:after, .EventData-close_events-CXs_5:hover:before {\n  background: #69e;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/EventData/EventData.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,mBAAmB;CACnB,OAAO;CACP,SAAS;CACT,aAAa;CACb,oCAAoC;KAChC,gCAAgC;SAC5B,4BAA4B;CACpC,iBAAiB;CACjB,SAAS;CACT,gBAAgB;CAChB;AACD;EACE,aAAa;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb,mBAAmB;CACnB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,OAAO;EACP,QAAQ;EACR;AACF;CACC,oBAAoB;CACpB,gBAAgB;CAChB,aAAa;CACb,gBAAgB;CAChB,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;CACX;AACD;EACE,uDAAuD;MACnD,mDAAmD;UAC/C,+CAA+C;EACvD,WAAW;EACX,aAAa;CACd;AACD;EACE,wDAAwD;MACpD,oDAAoD;UAChD,gDAAgD;EACxD,WAAW;EACX,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB","file":"EventData.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tz-index: 100;\n\t-webkit-transform: translateX(100%);\n\t    -ms-transform: translateX(100%);\n\t        transform: translateX(100%);\n\tbackground: #69e;\n\twidth: 0;\n\toverflow: hidden\n}\n.root.active {\n  width: 200px;\n}\n.active {\n\twidth: 200px;\n}\naudio {\n\twidth: 100%;\n}\n.container {\n\tpadding: 10px;\n}\n.nav {\n\theight: 30px;\n\tposition: relative;\n}\n.nav p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n.close_events {\n\tborder-radius: 100%;\n\tcursor: pointer;\n\tfloat: right;\n\tmargin: 3px 3px;\n\tposition: relative;\n\twidth: 24px;\n\theight: 24px\n}\n.close_events:after, .close_events:before {\n  background: #222;\n  border-radius: 2px;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.close_events:after {\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  width: 2px;\n  height: 18px;\n}\n.close_events:before {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  width: 2px;\n  height: 18px;\n}\n.close_events:hover {\n  background: #222\n}\n.close_events:hover:after, .close_events:hover:before {\n  background: #69e;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "EventData-root-1lL_m",
	"active": "EventData-active-1ppMd",
	"container": "EventData-container--PwvG",
	"nav": "EventData-nav-NiQQc",
	"close_events": "EventData-close_events-CXs_5"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Header/Header.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Header-root-O9oW9 {\n  background: #222;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.Header-container-qQ2mF {\n  height: 55px;\n}\n.Header-brand-2oS_y {\n  color: #fff;\n  text-decoration: none;\n  font-size: 36px;\n}\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n  font-family: 'Montserrat';\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.Header-adornment-29qSQ {\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n}\n.Header-yellow-x9Qq9 {\n  background: #f2ca70;\n  -webkit-box-flex: 5;\n      -ms-flex: 5 1 0%;\n          flex: 5 1 0%;\n}\n.Header-orange-1e3KN{\n  background: #ed9e72;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.Header-dgreen-CHKk9{\n  background: #9fdd5e;\n  -webkit-box-flex: 14;\n      -ms-flex: 14 1 0%;\n          flex: 14 1 0%;\n}\n.Header-lgreen-fwjmE{\n  background: #caed72;\n  -webkit-box-flex: 5;\n      -ms-flex: 5 1 0%;\n          flex: 5 1 0%;\n}\n.Header-dblue-2oxlm{\n  background: #4e7fc6;\n  -webkit-box-flex: 20;\n      -ms-flex: 20 1 0%;\n          flex: 20 1 0%;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Header/Header.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,UAAU;EACV,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,qBAAqB;MACjB,kBAAkB;UACd,cAAc;CACvB;AACD;EACE,oBAAoB;EACpB,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,oBAAoB;EACpB,qBAAqB;MACjB,kBAAkB;UACd,cAAc;CACvB","file":"Header.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n  background: #222;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.container {\n  height: 55px;\n}\n.brand {\n  color: #fff;\n  text-decoration: none;\n  font-size: 36px;\n}\n.brandTxt {\n  margin-left: 10px;\n  font-family: 'Montserrat';\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.adornment {\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n}\n.yellow {\n  background: #f2ca70;\n  -webkit-box-flex: 5;\n      -ms-flex: 5 1 0%;\n          flex: 5 1 0%;\n}\n.orange{\n  background: #ed9e72;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.dgreen{\n  background: #9fdd5e;\n  -webkit-box-flex: 14;\n      -ms-flex: 14 1 0%;\n          flex: 14 1 0%;\n}\n.lgreen{\n  background: #caed72;\n  -webkit-box-flex: 5;\n      -ms-flex: 5 1 0%;\n          flex: 5 1 0%;\n}\n.dblue{\n  background: #4e7fc6;\n  -webkit-box-flex: 20;\n      -ms-flex: 20 1 0%;\n          flex: 20 1 0%;\n}"],"sourceRoot":""}]);

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

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Layout/Layout.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n.Layout-content-ciN7r {\n  margin-top: 55px;\n}\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\nbody {\n  margin: 0;\n}\na {\n  color: #0074c2;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Layout/Layout.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;;;;GAIG;AACH;EACE,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,0DAA0D;EAC1D,mBAAmB,CAAC,WAAW;CAChC;AACD;EACE,UAAU;CACX;AACD;EACE,eAAe;CAChB;AACD;;;;;;GAMG;AACH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;;GAEG;AACH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;AACD;;;;GAIG;AACH;;;;;;EAME,uBAAuB;CACxB;AACD;;GAEG;AACH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;AACD;;GAEG;AACH;EACE,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;AACD;;;;gFAIgF;AAChF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n.content {\n  margin-top: 55px;\n}\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Roboto Condensed', 'Montserrat', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\nbody {\n  margin: 0;\n}\na {\n  color: #0074c2;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"content": "Layout-content-ciN7r"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 10px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,iBAAiB;CAClB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 10px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"highlight": "Navigation-highlight-2UNlq",
	"spacer": "Navigation-spacer-3vZVG"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Sidebar/Sidebar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Sidebar-root-15HjS {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n  height: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.Sidebar-devices-u7CGm {\n  background: #fff;\n  border-right: 1px solid rgba(34, 34, 34, 0.1);\n\tposition: absolute;\n  width: 250px;\n  height: 100%;\n  z-index: 5;\n}\n.Sidebar-events-2xwss {\n\tmargin-left: 50px;\n\t-webkit-transition: margin-left 0.5s ease;\n\t-o-transition: margin-left 0.5s ease;\n\ttransition: margin-left 0.5s ease;\n\twidth: 200px;\n\theight: 100%\n}\n.Sidebar-events-2xwss.Sidebar-active-sU__6 {\n  margin-left: 250px;\n}\n.Sidebar-event_container-3mg57 {\n\theight: calc(100% - 30px);\n\toverflow-y: auto;\n}\n.Sidebar-nav-2VCtn {\n\theight: 30px;\n\tposition: relative;\n}\n.Sidebar-nav-2VCtn p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tfont-weight: 400;\n\t}\n.Sidebar-entry_container-1mJqH {\n\theight: calc(100% - 30px);\n\toverflow-y: auto;\n}\n.Sidebar-close-3SrH7 {\n\tborder-radius: 100%;\n\tcursor: pointer;\n\tfloat: right;\n\tmargin: 3px 3px;\n\tposition: relative;\n\twidth: 24px;\n\theight: 24px\n}\n.Sidebar-close-3SrH7:after, .Sidebar-close-3SrH7:before {\n  background: #222;\n  border-radius: 2px;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.Sidebar-close-3SrH7:after {\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  width: 2px;\n  height: 18px;\n}\n.Sidebar-close-3SrH7:before {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  width: 2px;\n  height: 18px;\n}\n.Sidebar-close-3SrH7:hover {\n  background: #e64;\n}\n.Sidebar-close-3SrH7:hover:after, .Sidebar-close-3SrH7:hover:before {\n  background: #fff;\n}\n.Sidebar-placeholder-1ejqK {\n\tcolor: #aaa;\n}\n.Sidebar-placeholder-1ejqK h2 {\n\t\tfont-size: 12pt;\n\t\tfont-weight: 400;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t}\n@-webkit-keyframes Sidebar-rotate-HJHoW {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n@keyframes Sidebar-rotate-HJHoW {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n.Sidebar-spinner-2NsvF {\n  -webkit-animation: Sidebar-rotate-HJHoW 1s linear infinite;\n          animation: Sidebar-rotate-HJHoW 1s linear infinite;\n  margin: 0 auto;\n  position: relative;\n\twidth: 20px;\n\theight: 20px\n}\n.Sidebar-spinner-2NsvF:after {\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border: 2px solid #aaa;\n  border-bottom: 0;\n  content: '';\n  display: block;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 20px;\n  height: 10px;\n  z-index: 1000;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Sidebar/Sidebar.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;EACb,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;CACT;AACD;EACE,iBAAiB;EACjB,8CAA8C;CAC/C,mBAAmB;EAClB,aAAa;EACb,aAAa;EACb,WAAW;CACZ;AACD;CACC,kBAAkB;CAClB,0CAA0C;CAC1C,qCAAqC;CACrC,kCAAkC;CAClC,aAAa;CACb,YAAY;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;CACC,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,aAAa;CACb,mBAAmB;CACnB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB;AACF;CACC,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB,gBAAgB;CAChB,aAAa;CACb,gBAAgB;CAChB,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;CACX;AACD;EACE,uDAAuD;MACnD,mDAAmD;UAC/C,+CAA+C;EACvD,WAAW;EACX,aAAa;CACd;AACD;EACE,wDAAwD;MACpD,oDAAoD;UAChD,gDAAgD;EACxD,WAAW;EACX,aAAa;CACd;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;CACC,YAAY;CACZ;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;EAC1B;AACF;EACE,MAAM,gCAAgC,uBAAuB,CAAC;EAC9D,IAAI,kCAAkC,yBAAyB,CAAC;CACjE;AACD;EACE,MAAM,gCAAgC,uBAAuB,CAAC;EAC9D,IAAI,kCAAkC,yBAAyB,CAAC;CACjE;AACD;EACE,2DAA6C;UACrC,mDAAqC;EAC7C,eAAe;EACf,mBAAmB;CACpB,YAAY;CACZ,YAAY;CACZ;AACD;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,cAAc;CACf","file":"Sidebar.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n  height: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.devices {\n  background: #fff;\n  border-right: 1px solid rgba(34, 34, 34, 0.1);\n\tposition: absolute;\n  width: 250px;\n  height: 100%;\n  z-index: 5;\n}\n.events {\n\tmargin-left: 50px;\n\t-webkit-transition: margin-left 0.5s ease;\n\t-o-transition: margin-left 0.5s ease;\n\ttransition: margin-left 0.5s ease;\n\twidth: 200px;\n\theight: 100%\n}\n.events.active {\n  margin-left: 250px;\n}\n.event_container {\n\theight: calc(100% - 30px);\n\toverflow-y: auto;\n}\n.nav {\n\theight: 30px;\n\tposition: relative;\n}\n.nav p {\n\t\tposition: absolute;\n\t\tdisplay: inline-block;\n\t\tline-height: 30px;\n\t\tpadding: 2px 5px 5px 10px;\n\t\tmargin: 0;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tfont-weight: 400;\n\t}\n.entry_container {\n\theight: calc(100% - 30px);\n\toverflow-y: auto;\n}\n.close {\n\tborder-radius: 100%;\n\tcursor: pointer;\n\tfloat: right;\n\tmargin: 3px 3px;\n\tposition: relative;\n\twidth: 24px;\n\theight: 24px\n}\n.close:after, .close:before {\n  background: #222;\n  border-radius: 2px;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.close:after {\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  width: 2px;\n  height: 18px;\n}\n.close:before {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  width: 2px;\n  height: 18px;\n}\n.close:hover {\n  background: #e64;\n}\n.close:hover:after, .close:hover:before {\n  background: #fff;\n}\n.placeholder {\n\tcolor: #aaa;\n}\n.placeholder h2 {\n\t\tfont-size: 12pt;\n\t\tfont-weight: 400;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t}\n@-webkit-keyframes rotate {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n@keyframes rotate {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n.spinner {\n  -webkit-animation: rotate 1s linear infinite;\n          animation: rotate 1s linear infinite;\n  margin: 0 auto;\n  position: relative;\n\twidth: 20px;\n\theight: 20px\n}\n.spinner:after {\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border: 2px solid #aaa;\n  border-bottom: 0;\n  content: '';\n  display: block;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 20px;\n  height: 10px;\n  z-index: 1000;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Sidebar-root-15HjS",
	"devices": "Sidebar-devices-u7CGm",
	"events": "Sidebar-events-2xwss",
	"active": "Sidebar-active-sU__6",
	"event_container": "Sidebar-event_container-3mg57",
	"nav": "Sidebar-nav-2VCtn",
	"entry_container": "Sidebar-entry_container-1mJqH",
	"close": "Sidebar-close-3SrH7",
	"placeholder": "Sidebar-placeholder-1ejqK",
	"spinner": "Sidebar-spinner-2NsvF",
	"rotate": "Sidebar-rotate-HJHoW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700);", ""]);

// module
exports.push([module.i, "\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Home-root-1avl7 {\n  height: calc(100vh - 55px);\n}\n.Home-container-3YPN- {\n  position: relative;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Home-stream-37eRL {\n\tdisplay: none;\n\tposition: fixed;\n\twidth: 50%;\n\theight: 50%;\n\tbackground: #fff;\n\tz-index: 1000;\n\ttop: 25%;\n\tleft: 25%;\n\t-webkit-box-shadow: 0 0 20px 0px rgba(34, 34, 34, 0.3);\n\t        box-shadow: 0 0 20px 0px rgba(34, 34, 34, 0.3)\n}\n.Home-stream-37eRL.Home-active-2pdKw {\n  display: block;\n}\n.Home-close-2UK1o {\n\theight: 24px;\n\twidth: 24px;\n\tfloat: right;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tmargin: 3px 3px;\n\tborder-radius: 100%;\n\tcursor: pointer\n}\n.Home-close-2UK1o:after {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n}\n.Home-close-2UK1o:before {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  /*z-index: 100;\n */\n}\n.Home-close-2UK1o:hover {\n  background: #e64;\n}\n.Home-close-2UK1o:hover:after {\n  background: #fff;\n}\n.Home-close-2UK1o:hover:before {\n  background: #fff;\n}", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/routes/home/Home.css"],"names":[],"mappings":";AAEA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;CACC,cAAc;CACd,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,cAAc;CACd,SAAS;CACT,UAAU;CACV,uDAAuD;SAC/C,8CAA8C;CACtD;AACD;EACE,eAAe;CAChB;AACD;CACC,aAAa;CACb,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,OAAO;CACP,SAAS;CACT,gBAAgB;CAChB,oBAAoB;CACpB,eAAe;CACf;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,wDAAwD;MACpD,oDAAoD;UAChD,gDAAgD;CACzD;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,uDAAuD;MACnD,mDAAmD;UAC/C,+CAA+C;EACvD;GACC;CACF;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB","file":"Home.css","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto+Condensed:300,400,700');\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.root {\n  height: calc(100vh - 55px);\n}\n.container {\n  position: relative;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.stream {\n\tdisplay: none;\n\tposition: fixed;\n\twidth: 50%;\n\theight: 50%;\n\tbackground: #fff;\n\tz-index: 1000;\n\ttop: 25%;\n\tleft: 25%;\n\t-webkit-box-shadow: 0 0 20px 0px rgba(34, 34, 34, 0.3);\n\t        box-shadow: 0 0 20px 0px rgba(34, 34, 34, 0.3)\n}\n.stream.active {\n  display: block;\n}\n.close {\n\theight: 24px;\n\twidth: 24px;\n\tfloat: right;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tmargin: 3px 3px;\n\tborder-radius: 100%;\n\tcursor: pointer\n}\n.close:after {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n      -ms-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n}\n.close:before {\n  position: absolute;\n  content: '';\n  width: 2px;\n  height: 18px;\n  background: #222;\n  top: 50%;\n  left: 50%;\n  border-radius: 2px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n      -ms-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  /*z-index: 100;\n */\n}\n.close:hover {\n  background: #e64;\n}\n.close:hover:after {\n  background: #fff;\n}\n.close:hover:before {\n  background: #fff;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Home-root-1avl7",
	"container": "Home-container-3YPN-",
	"stream": "Home-stream-37eRL",
	"active": "Home-active-2pdKw",
	"close": "Home-close-2UK1o"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./node_modules/normalize.css/normalize.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/samcrane/Documents/Centree/Repositories/centree_webapp/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./node_modules/normalize.css/normalize.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./node_modules/normalize.css/normalize.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./node_modules/normalize.css/normalize.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/AudioPlayer/AudioPlayer.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/AudioPlayer/AudioPlayer.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/AudioPlayer/AudioPlayer.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/AudioPlayer/AudioPlayer.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/AudioPlayer/AudioPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AudioPlayer_css__ = __webpack_require__("./src/components/AudioPlayer/AudioPlayer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AudioPlayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AudioPlayer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/AudioPlayer/AudioPlayer.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class AudioPlayer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      progress: 0,
      loading: false,
      playing: false
    };
  }

  // componentDidMount() {
  //    let t = this;
  // 	t.context = new AudioContext();
  // 	t.source = null;
  //    var req = new XMLHttpRequest();
  //    req.open("GET", "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav", true);
  //    req.responseType = "arraybuffer";
  //    t.setState({loading: true});
  //    req.onload = function() {
  //      t.setState({loading: false});
  //      t.process(req.response);
  //    };
  //    req.send();
  // }

  // componentWillUpdate() {
  //   let t = this;
  //   if (!t.source) return;
  //   t.source.start(t.context.currentTime);
  //   t.source.stop(t.context.currentTime);
  //   t.source.disconnect(t.context.destination);
  //   t.source = null;
  // }

  componentDidUpdate() {
    //   let t = this;
    //   var request = new XMLHttpRequest();
    //   request.open("GET", "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav", true);
    //   request.responseType = "arraybuffer";
    //   request.onload = function() {
    //     var data = request.response;
    //     t.process(data);
    //   };
    //   request.send();
  }

  render() {
    console.log(this.props);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__AudioPlayer_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'audio',
        { controls: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav", type: 'audio/wav', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })
      )
    );
  }
  // <div className={s.controls}>
  //         <div className={classNames(s.play, s.button)} onClick={this.play.bind(this)}></div>
  //         <div className={classNames(s.pause, s.button)}></div>
  //       </div>
  //       <div className={s.progress}>
  //         <div className={s.bar}></div>
  //       </div>

  play() {
    this.source.start(this.context.currentTime);
  }

  process(data) {
    let t = this;
    console.log(data);
    t.source = t.context.createBufferSource();
    t.context.decodeAudioData(data, function (buffer) {
      t.source.buffer = buffer;
      t.source.connect(t.context.destination);
    });
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__AudioPlayer_css___default.a)(AudioPlayer));

/***/ }),

/***/ "./src/components/DataContainer/DataContainer.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/DataContainer/DataContainer.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/DataContainer/DataContainer.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/DataContainer/DataContainer.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/DataContainer/DataContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataContainer_css__ = __webpack_require__("./src/components/DataContainer/DataContainer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DataContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_AudioPlayer__ = __webpack_require__("./src/components/AudioPlayer/AudioPlayer.js");
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/DataContainer/DataContainer.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










class DataContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentWillUpdate() {
    __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this).classList.remove(__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.animate);
  }

  componentDidUpdate() {
    var e = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);
    setTimeout(function () {
      e.classList.add(__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.animate);
    }, 10);
    if (this.audio) this.audio.load();
  }

  render() {
    var url = "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav";
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.root, __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.animate, { [__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.active]: this.props.active }, { [__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.out]: this.props.events_shown }), __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          'Event'
        ),
        this.props.event && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.close, onClick: () => {
            this.props.toggleData(false);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        })
      ),
      this.props.event && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.data_container, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a.timestamp, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          this.props.event.created_at
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'audio',
          { ref: audio => {
              this.audio = audio;
            }, controls: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: url, type: 'audio/wav', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__DataContainer_css___default.a)(DataContainer));

/***/ }),

/***/ "./src/components/Entry/Entry.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Entry/Entry.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Entry/Entry.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Entry/Entry.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Entry/Entry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Entry_css__ = __webpack_require__("./src/components/Entry/Entry.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Entry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Entry_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Entry/Entry.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Entry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelectDevice = this.handleSelectDevice.bind(this);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.active]: this.props.current }), __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.data, onClick: this.handleSelectDevice, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.name, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            this.props.name
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.latest, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            'updated: ',
            this.props.latest
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a.arrow, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          })
        )
      )
    );
  }
  handleSelectDevice() {
    this.props.setCurDevice(this.props.id);
    this.props.toggleEvents();
    this.props.setDeviceAlert(this.props.id, false);
  }

  // <div className={s.stream} onClick={this.props.viewStream}>Click to view stream</div>
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Entry_css___default.a)(Entry));

/***/ }),

/***/ "./src/components/Event/Event.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Event/Event.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Event/Event.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Event/Event.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Event/Event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event_css__ = __webpack_require__("./src/components/Event/Event.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Event_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_runtime__ = __webpack_require__("./src/actions/runtime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Event/Event.js';
/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/










class Event extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props, context) {
		super(props, context);
		this.handleToggleData = this.handleToggleData.bind(this);
	}

	render() {
		if (this.props.onRef) {
			this.props.onRef(this);
		}
		let p = this.props;
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_7_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.root, { [__WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.unseen]: !p.seen }), onMouseEnter: this.props.onMouseEnter, __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.container, onClick: this.handleToggleData, __source: {
						fileName: _jsxFileName,
						lineNumber: 30
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ className: __WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.type, __source: {
							fileName: _jsxFileName,
							lineNumber: 31
						},
						__self: this
					},
					this.props.type
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: __WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.time, __source: {
							fileName: _jsxFileName,
							lineNumber: 32
						},
						__self: this
					},
					'time: ',
					new Date(this.props.time).toISOString().substring(0, 19).replace('T', ' ')
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__Event_css___default.a.arrow, __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					},
					__self: this
				})
			)
		);
	}

	handleToggleData() {
		let p = this.props;
		p.toggleData();
		p.setCurEvent(p.id);
		p.setEventSeen(p.id, p.device_id, true);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Event_css___default.a)(Event));

/***/ }),

/***/ "./src/components/EventData/EventData.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/EventData/EventData.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/EventData/EventData.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/EventData/EventData.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/EventData/EventData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventData_css__ = __webpack_require__("./src/components/EventData/EventData.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventData_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__EventData_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/EventData/EventData.js';
/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/







class EventData extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		if (this.props.eventData.sound_file) {
			let context = new AudioContext();
			let source = context.createBufferSource();
			context.decodeAudioData(this.props.eventData.sound_file, function (buffer) {
				source.buffer = buffer;
				source.connect(context.destination);
				// source.start();
			});
		}
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_2__EventData_css___default.a.root, __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_2__EventData_css___default.a.nav, __source: {
						fileName: _jsxFileName,
						lineNumber: 29
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 30
						},
						__self: this
					},
					'Event'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__EventData_css___default.a.close_events, onClick: () => {
						this.handleToggleEvents(false).bind(this);
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 31
					},
					__self: this
				})
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_2__EventData_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'audio',
					{ controls: true, __source: {
							fileName: _jsxFileName,
							lineNumber: 34
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: 'horse.ogg', type: 'audio/ogg', __source: {
							fileName: _jsxFileName,
							lineNumber: 35
						},
						__self: this
					}),
					'Your browser does not support the audio element.'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 38
						},
						__self: this
					},
					this.props.eventData.other_media
				)
			)
		);
	}
	handleToggleEvents() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__EventData_css___default.a)(EventData));

/***/ }),

/***/ "./src/components/Header/Header.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Header/Header.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Header/Header.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Header/Header.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation__ = __webpack_require__("./src/components/Navigation/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__("./src/components/Header/Header.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Header/Header.js';
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
            'SmartBloc'
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

/***/ "./src/components/Layout/Layout.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Layout/Layout.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Layout/Layout.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Layout/Layout.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./src/components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css__ = __webpack_require__("./src/components/Layout/Layout.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Layout_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Layout/Layout.js';
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

/***/ "./src/components/Link/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__("./src/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Link/Link.js';

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

/***/ "./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__("./src/components/Navigation/Navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__("./src/components/Link/Link.js");
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Navigation/Navigation.js';
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        'About'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        'Contact'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        ' | '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/login', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        'Log in'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        'or'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight), to: '/register', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
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

/***/ "./src/components/Sidebar/Sidebar.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Sidebar/Sidebar.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Sidebar/Sidebar.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Sidebar/Sidebar.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_DataContainer__ = __webpack_require__("./src/components/DataContainer/DataContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Entry__ = __webpack_require__("./src/components/Entry/Entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Event__ = __webpack_require__("./src/components/Event/Event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_EventData__ = __webpack_require__("./src/components/EventData/EventData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Sidebar_css__ = __webpack_require__("./src/components/Sidebar/Sidebar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Sidebar_css__);
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/components/Sidebar/Sidebar.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */












class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show_events: false,
      show_data: false
    };
    this.toggleEvents = this.toggleEvents.bind(this);
    this.toggleData = this.toggleData.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.devices, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.entry_container, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          this.getDevices()
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.events, { [__WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.active]: this.state.show_events }), __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.nav, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            'Events'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.close, onClick: () => {
              this.toggleEvents(false);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.event_container, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          this.getEvents()
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_DataContainer__["a" /* default */], {
        visible: this.state.show_data,
        events_visible: this.state.show_events,
        event: this.props.events && this.props.cur_device ? this.props.events[this.props.cur_device][this.props.cur_event] : undefined,
        device_id: this.props.cur_device,
        event_id: this.props.cur_event,
        toggleData: this.toggleData.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })
    );
  }

  getDevices() {
    if (this.props.loading_devices) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.placeholder, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        'Loading Devices'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.spinner, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })
    );

    var devices = this.props.devices;
    if (!devices) return;

    return Object.keys(devices).map(k => {
      const device = devices[k];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Entry__["a" /* default */], {
        key: k,
        id: k,
        name: device.name,
        latest: device.latest,
        current: this.props.cur_device == k && this.state.show_events,
        toggleEvents: this.toggleEvents,
        setCurDevice: this.props.setCurDevice,
        setDeviceAlert: this.props.setDeviceAlert,
        viewStream: this.props.viewStream,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      });
    });
  }

  getEvents() {
    const events = this.props.events;
    const device = this.props.cur_device;

    if (!device) return;

    if (!events[device] || Object.keys(events[device]).length == 0) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a.placeholder, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          },
          'No New Events'
        )
      );
    }

    return Object.keys(events[device]).sort((a, b) => {
      return new Date(events[device][b].created_at) - new Date(events[device][a].created_at);
    }).map(k => {
      const event = events[device][k];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components_Event__["a" /* default */], {
        key: k,
        id: k,
        time: event.reported_at,
        seen: event.seen,
        type: event.service_name,
        device_id: device,
        setCurEvent: this.props.setCurEvent,
        toggleData: this.toggleData,
        setEventSeen: this.props.setEventSeen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      });
    });
  }

  toggleEvents(s = true) {
    this.setState({ show_events: s });
    if (!s) this.setState({ show_data: false });
  }

  toggleData(s = true) {
    this.setState({ show_data: s });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_7__Sidebar_css___default.a)(Sidebar));

/***/ }),

/***/ "./src/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(31);
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

/***/ "./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/routes/home/Home.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/routes/home/Home.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/routes/home/Home.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_google_maps__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_Sidebar__ = __webpack_require__("./src/components/Sidebar/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__marker_png__ = __webpack_require__("./src/routes/home/marker.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__marker_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__marker_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__marker_alert_png__ = __webpack_require__("./src/routes/home/marker-alert.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__marker_alert_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__marker_alert_png__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/routes/home/Home.js',
    _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








// import jsmpeg from 'jsmpeg';







const DeviceMap = __WEBPACK_IMPORTED_MODULE_5_react_google_maps__["withGoogleMap"](props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_5_react_google_maps__["GoogleMap"],
  {
    defaultZoom: 8,
    center: props.center, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: _this
  },
  props.markers.map(marker => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_google_maps__["Marker"], _extends({}, marker, { onClick: () => props.onMarkerClick(marker), __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: _this
  })))
));

class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      devices: {},
      events: {},
      loading_devices: true,
      cur_device: null,
      cur_event: null
    };
    this.latestEvent = new Date(new Date() - __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* EVENT_RECENT_WINDOW */]).toISOString().substring(0, 19).replace('T', ' '); //'2017-06-30 16:56:54';
  }
  componentDidMount() {
    this.fetchDevices(() => {
      this.fetchEvents(true);
      setInterval(() => {
        this.fetchEvents();
      }, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* EVENT_UPDATE_MILLIS */]);
    });
    // var ctx = this.streamer.getContext('2d');
    // ctx.fillStyle = '#34e';
    // ctx.fillText('Loading...', this.streamer.width/2-30, this.streamer.height/3);

    // // Setup the WebSocket connection and start the player
    // var client = new WebSocket('ws://${ADDRESS}/');
    // var player = new jsmpeg(client, {canvas:this.streamer});
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_8__Home_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__Home_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components_Sidebar__["a" /* default */], {
          onRef: ref => {
            this.sidebar = ref;
          },
          events: this.state.events,
          devices: this.state.devices,
          cur_event: this.state.cur_event,
          cur_device: this.state.cur_device,
          setDeviceAlert: this.setDeviceAlert.bind(this),
          setEventSeen: this.setEventSeen.bind(this),
          setCurDevice: this.setCurDevice.bind(this),
          setCurEvent: this.setCurEvent.bind(this),
          loading_devices: this.state.loading_devices,
          viewStream: () => this.toggleStream(true),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DeviceMap, {
          containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: `100%`, flex: '1' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }),
          mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: `100%` }, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }),
          onMarkerClick: this.handleMarkerClick.bind(this),
          center: this.state.cur_device ? this.state.devices[this.state.cur_device].location : { lat: 33, lng: -84 },
          markers: this.mapMarkers(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        })
      )
    );
  }

  // <div className={classNames(styles.stream, {[styles.active]: this.state.stream})}>
  //           {/*H264 STREAM HERE
  //             It should work if you just associate a link into device.stream
  //             If it's an API call, however, see Server.js:88 and DataContainer.js:34*/}
  //           <div className={styles.close} onClick={() => this.toggleStream(false)}></div>
  //           <canvas ref={ref=>{this.streamer = ref}} style={{width:"100%", height:"100%"}}>
  //             <p>
  //               Please use a browser that supports the Canvas Element, like
  //               <a href="http://www.google.com/chrome">Chrome</a>,
  //               <a href="http://www.mozilla.com/firefox/">Firefox</a>,
  //               <a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
  //             </p>
  //           </canvas>
  //         </div>

  fetchDevices(postFunc, attempt = 0) {
    if (attempt === 5) {
      alert("Unable to fetch devices");
      return;
    }
    fetch("http://backend.centree.xyz:5000/list_user_devices", {
      method: "GET",
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) return res.json();else throw new Error("Fetch Error");
    }).then(function (data) {
      this.setState({ loading_devices: false });
      Object.entries(data).forEach(device => {
        if (!(device[0] in this.state.devices)) this.addDevice(device[0], Object.assign(device[1], { location: this.parseLocation(device[1].location) }));
      });
      if (postFunc) postFunc();
    }.bind(this)).catch(() => {
      setTimeout(() => this.fetchDevices(postfunc, attempt + 1), attempt * attempt * 3000);
    });
  }

  fetchEvents(isInitial = false) {
    fetch("http://backend.centree.xyz:5000/list_new_events", {
      method: "POST",
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "timestamp": this.latestEvent
      })
    }).then(res => {
      if (res.ok) return res.json();else throw new Error("Fetch Error");
    }).then(function (data) {
      this.latestEvent = data.most_recent_event_timestamp || this.latestEvent;

      Object.entries(data.events).forEach(device => {
        if (!this.state.devices[device[0]]) this.fetchDevices();

        if (!isInitial && this.sidebar.state.cur_device !== device[0] && !this.sidebar.state.show_events) this.alertMarker(device[0]);

        this.setDeviceLatest(device[0], this.latestEvent);

        const events = device[1];
        Object.keys(events).forEach(event_id => {
          const event = events[event_id];
          event.seen = isInitial;
        });

        this.addEvents(device[0], events);
      });
    }.bind(this)).catch(e => {
      console.log("failed to fetch events");
    });
  }

  toggleStream(val) {
    this.setState({ stream: val });
  }

  mapMarkers() {
    return Object.entries(this.state.devices).map(device => ({
      key: device[0],
      position: device[1].location,
      icon: this.state.devices[device[0]].alerted ? __WEBPACK_IMPORTED_MODULE_10__marker_alert_png___default.a : __WEBPACK_IMPORTED_MODULE_9__marker_png___default.a
    }));
  }

  parseLocation(locstring) {
    var latlng = locstring.split(',');
    return { lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1]) };
  }

  handleMarkerClick(target) {
    this.setDeviceAlert(target.key, false);
    this.setCurDevice(target.key);
    this.sidebar.toggleEvents();
  }

  setCurDevice(device) {
    console.log(device);
    this.setState({ cur_device: device });
  }

  setCurEvent(event) {
    this.setState({ cur_event: event });
  }

  setEventSeen(event_id, device_id, val) {
    this.setState(prev => {
      return __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default.a(prev, {
        events: { [device_id]: { [event_id]: { seen: { $set: val } } } }
      });
    });
  }

  setDeviceAlert(device_id, val) {
    this.setState(prev => {
      return __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default.a(prev, {
        devices: { [device_id]: { alerted: { $set: val } } }
      });
    });
  }

  addDevice(device_id, device) {
    this.setState(prev => {
      return __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default.a(prev, {
        devices: { [device_id]: { $set: device } },
        events: { [device_id]: { $set: {} } }
      });
    });
  }

  setDeviceLatest(device_id, latest) {
    this.setState(prev => __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default.a(prev, {
      devices: { [device_id]: { $merge: { latest: latest } } }
    }));
  }

  addEvents(device_id, events) {
    this.setState(prev => {
      return __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default.a(prev, {
        events: { [device_id]: { $merge: events } }
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_8__Home_css___default.a)(Home));

/***/ }),

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__("./src/routes/home/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = '/Users/samcrane/Documents/Centree/Repositories/centree_webapp/src/routes/home/index.js';

let action = (() => {
  var _ref = _asyncToGenerator(function* ({ fetch }) {
    return {
      chunks: ['home'],
      title: 'SmartBloc',
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })
      )
    };
  });

  return function action(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/home/marker-alert.png":
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/home/marker-alert.png?33932526";

/***/ }),

/***/ "./src/routes/home/marker.png":
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/home/marker.png?f2195ac7";

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hvbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdWRpb1BsYXllci9BdWRpb1BsYXllci5jc3M/MGFiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXIuY3NzPzM3MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRW50cnkvRW50cnkuY3NzPzJhY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQvRXZlbnQuY3NzP2FhYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREYXRhL0V2ZW50RGF0YS5jc3M/MWNmYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcz84MWRhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzPzg4YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz9kMTMxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5jc3M/MGI1YSIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2hvbWUvSG9tZS5jc3M/MTA4NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzVjOWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz85MTg5IiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9BdWRpb1BsYXllci9BdWRpb1BsYXllci5jc3MiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0F1ZGlvUGxheWVyL0F1ZGlvUGxheWVyLmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXIuY3NzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXIuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0VudHJ5L0VudHJ5LmNzcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvRW50cnkvRW50cnkuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0V2ZW50L0V2ZW50LmNzcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvRXZlbnQvRXZlbnQuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0V2ZW50RGF0YS9FdmVudERhdGEuY3NzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9FdmVudERhdGEvRXZlbnREYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzM0OTkiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3M/NDQ4NyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvTGluay9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3M/NTY1MyIsIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuY3NzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9oaXN0b3J5LmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvcm91dGVzL2hvbWUvSG9tZS5jc3MiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvcm91dGVzL2hvbWUvaW5kZXguanMiLCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9yb3V0ZXMvaG9tZS9tYXJrZXItYWxlcnQucG5nIiwiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvcm91dGVzL2hvbWUvbWFya2VyLnBuZyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkF1ZGlvUGxheWVyLXJvb3QtM1E5OEYge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZDogI2RkZDtcXG5cXHRcXG59XFxuLkF1ZGlvUGxheWVyLWNvbnRyb2xzLTF4VWJxIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uQXVkaW9QbGF5ZXItY29udHJvbHMtMXhVYnEgLkF1ZGlvUGxheWVyLWJ1dHRvbi1IMm54WCB7XFxuXFx0XFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0XFx0bWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcblxcdH1cXG4uQXVkaW9QbGF5ZXItY29udHJvbHMtMXhVYnEgLkF1ZGlvUGxheWVyLXBsYXktM0w4SkIge1xcblxcdFxcdGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcblxcdH1cXG4uQXVkaW9QbGF5ZXItY29udHJvbHMtMXhVYnEgLkF1ZGlvUGxheWVyLXBsYXktM0w4SkI6aG92ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyYjU7XFxufVxcbi5BdWRpb1BsYXllci1jb250cm9scy0xeFVicSAuQXVkaW9QbGF5ZXItcGF1c2UtMTE3WkMge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0d2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMwMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcblxcdH1cXG4uQXVkaW9QbGF5ZXItY29udHJvbHMtMXhVYnEgLkF1ZGlvUGxheWVyLXBhdXNlLTExN1pDOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzQ4ZDtcXG59XFxuLkF1ZGlvUGxheWVyLXByb2dyZXNzLTNmQkwwIHtcXG5cXHQtd2Via2l0LWJveC1mbGV4OiAxO1xcblxcdCAgICAtbXMtZmxleDogMSAxIDAlO1xcblxcdCAgICAgICAgZmxleDogMSAxIDAlXFxufVxcbi5BdWRpb1BsYXllci1iYXItMlZhNkUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6ICMwMDA7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL0F1ZGlvUGxheWVyL0F1ZGlvUGxheWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGlCQUFpQjs7Q0FFakI7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkO0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCO0FBQ0Y7RUFDRSxtQ0FBbUM7SUFDakMsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxlQUFlO0VBQ2pCO0FBQ0Y7RUFDRSx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0lBQ1QsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjtBQUNGO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7Q0FDQyxvQkFBb0I7S0FDaEIsaUJBQWlCO1NBQ2IsWUFBWTtDQUNwQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQlwiLFwiZmlsZVwiOlwiQXVkaW9QbGF5ZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQ6ICNkZGQ7XFxuXFx0XFxufVxcbi5jb250cm9scyB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRyb2xzIC5idXR0b24ge1xcblxcdFxcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdFxcdG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXG5cXHR9XFxuLmNvbnRyb2xzIC5wbGF5IHtcXG5cXHRcXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMTZweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG5cXHR9XFxuLmNvbnRyb2xzIC5wbGF5OmhvdmVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMmI1O1xcbn1cXG4uY29udHJvbHMgLnBhdXNlIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG5cXHR9XFxuLmNvbnRyb2xzIC5wYXVzZTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM0OGQ7XFxufVxcbi5wcm9ncmVzcyB7XFxuXFx0LXdlYmtpdC1ib3gtZmxleDogMTtcXG5cXHQgICAgLW1zLWZsZXg6IDEgMSAwJTtcXG5cXHQgICAgICAgIGZsZXg6IDEgMSAwJVxcbn1cXG4uYmFyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkF1ZGlvUGxheWVyLXJvb3QtM1E5OEZcIixcblx0XCJjb250cm9sc1wiOiBcIkF1ZGlvUGxheWVyLWNvbnRyb2xzLTF4VWJxXCIsXG5cdFwiYnV0dG9uXCI6IFwiQXVkaW9QbGF5ZXItYnV0dG9uLUgybnhYXCIsXG5cdFwicGxheVwiOiBcIkF1ZGlvUGxheWVyLXBsYXktM0w4SkJcIixcblx0XCJwYXVzZVwiOiBcIkF1ZGlvUGxheWVyLXBhdXNlLTExN1pDXCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJBdWRpb1BsYXllci1wcm9ncmVzcy0zZkJMMFwiLFxuXHRcImJhclwiOiBcIkF1ZGlvUGxheWVyLWJhci0yVmE2RVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0F1ZGlvUGxheWVyL0F1ZGlvUGxheWVyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIvQXVkaW9QbGF5ZXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRGF0YUNvbnRhaW5lci1yb290LTJRTVlVIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZDogIzY5ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHotaW5kZXg6IDEwO1xcblxcdG1heC13aWR0aDogMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LXdpZHRoIDBzIGxpbmVhcjtcXG5cXHQtby10cmFuc2l0aW9uOiBtYXgtd2lkdGggMHMgbGluZWFyO1xcblxcdHRyYW5zaXRpb246IG1heC13aWR0aCAwcyBsaW5lYXI7XFxufVxcbi5EYXRhQ29udGFpbmVyLXJvb3QtMlFNWVUgLkRhdGFDb250YWluZXItY2xvc2UtMlRiMW46aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyMjJcXG5cXHR9XFxuLkRhdGFDb250YWluZXItcm9vdC0yUU1ZVSAuRGF0YUNvbnRhaW5lci1jbG9zZS0yVGIxbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNjllO1xcbn1cXG4uRGF0YUNvbnRhaW5lci1yb290LTJRTVlVIC5EYXRhQ29udGFpbmVyLWNsb3NlLTJUYjFuOmhvdmVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjNjllO1xcbn1cXG4uRGF0YUNvbnRhaW5lci1yb290LTJRTVlVIHAge1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0fVxcbi5EYXRhQ29udGFpbmVyLXJvb3QtMlFNWVUuRGF0YUNvbnRhaW5lci1hY3RpdmUtM3lCWGMge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uRGF0YUNvbnRhaW5lci1yb290LTJRTVlVLkRhdGFDb250YWluZXItYW5pbWF0ZS0yU0VqWiB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjQ0LC4xNSwuMzQsLjk4KTtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllciguNDQsLjE1LC4zNCwuOTgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC40NCwuMTUsLjM0LC45OCk7XFxufVxcbi5EYXRhQ29udGFpbmVyLXJvb3QtMlFNWVUuRGF0YUNvbnRhaW5lci1vdXQtMUR0MDEge1xcbiAgbGVmdDogNDUxcHg7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBEYXRhQ29udGFpbmVyLWxvYWQtbzZHdVIge1xcbiAgMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIERhdGFDb250YWluZXItbG9hZC1vNkd1UiB7XFxuICAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICB9XFxufVxcbmF1ZGlvIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLkRhdGFDb250YWluZXItZGF0YV9jb250YWluZXItMllfa00ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbi5EYXRhQ29udGFpbmVyLWNsb3NlLTJUYjFuIHtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0d2lkdGg6IDI0cHg7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDNweCAzcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXG59XFxuLkRhdGFDb250YWluZXItY2xvc2UtMlRiMW46YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4uRGF0YUNvbnRhaW5lci1jbG9zZS0yVGIxbjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgLyp6LWluZGV4OiAxMDA7XFxuICovXFxufVxcbi5EYXRhQ29udGFpbmVyLWNsb3NlLTJUYjFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcbi5EYXRhQ29udGFpbmVyLWNsb3NlLTJUYjFuOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICM2OWU7XFxufVxcbi5EYXRhQ29udGFpbmVyLWNsb3NlLTJUYjFuOmhvdmVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjNjllO1xcbn1cXG4uRGF0YUNvbnRhaW5lci1uYXYtMk1mUFAge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5EYXRhQ29udGFpbmVyLW5hdi0yTWZQUCBwIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcblxcdFxcdHBhZGRpbmc6IDJweCA1cHggNXB4IDEwcHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0fVxcbi5EYXRhQ29udGFpbmVyLXRpbWVzdGFtcC0zWEpobiB7XFxuXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvRGF0YUNvbnRhaW5lci9EYXRhQ29udGFpbmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7Ozs7Ozs7R0FPRztBQUNIOzs7Ozs7O0dBT0c7QUFDSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7O0VBRTlNOztnRkFFOEU7Q0FDL0U7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysd0NBQXdDO0NBQ3hDLG1DQUFtQztDQUNuQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsMkRBQTJEO0VBQzNELHNEQUFzRDtFQUN0RCxtREFBbUQ7Q0FDcEQ7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsd0RBQXdEO01BQ3BELG9EQUFvRDtVQUNoRCxnREFBZ0Q7Q0FDekQ7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsdURBQXVEO01BQ25ELG1EQUFtRDtVQUMvQywrQ0FBK0M7RUFDdkQ7R0FDQztDQUNGO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0NBRUMsb0JBQW9CO0NBQ3BCXCIsXCJmaWxlXCI6XCJEYXRhQ29udGFpbmVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQ6ICM2OWU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR6LWluZGV4OiAxMDtcXG5cXHRtYXgtd2lkdGg6IDBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG1heC13aWR0aCAwcyBsaW5lYXI7XFxuXFx0LW8tdHJhbnNpdGlvbjogbWF4LXdpZHRoIDBzIGxpbmVhcjtcXG5cXHR0cmFuc2l0aW9uOiBtYXgtd2lkdGggMHMgbGluZWFyO1xcbn1cXG4ucm9vdCAuY2xvc2U6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyMjJcXG5cXHR9XFxuLnJvb3QgLmNsb3NlOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICM2OWU7XFxufVxcbi5yb290IC5jbG9zZTpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzY5ZTtcXG59XFxuLnJvb3QgcCB7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR9XFxuLnJvb3QuYWN0aXZlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLnJvb3QuYW5pbWF0ZSB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjQ0LC4xNSwuMzQsLjk4KTtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllciguNDQsLjE1LC4zNCwuOTgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC40NCwuMTUsLjM0LC45OCk7XFxufVxcbi5yb290Lm91dCB7XFxuICBsZWZ0OiA0NTFweDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQge1xcbiAgMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxvYWQge1xcbiAgMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbn1cXG5hdWRpbyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5kYXRhX2NvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuLmNsb3NlIHtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0d2lkdGg6IDI0cHg7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDNweCAzcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXG59XFxuLmNsb3NlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLmNsb3NlOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAvKnotaW5kZXg6IDEwMDtcXG4gKi9cXG59XFxuLmNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcbi5jbG9zZTpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNjllO1xcbn1cXG4uY2xvc2U6aG92ZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICM2OWU7XFxufVxcbi5uYXYge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5uYXYgcCB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRsaW5lLWhlaWdodDogMzBweDtcXG5cXHRcXHRwYWRkaW5nOiAycHggNXB4IDVweCAxMHB4O1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdH1cXG4udGltZXN0YW1wIHtcXG5cXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkRhdGFDb250YWluZXItcm9vdC0yUU1ZVVwiLFxuXHRcImNsb3NlXCI6IFwiRGF0YUNvbnRhaW5lci1jbG9zZS0yVGIxblwiLFxuXHRcImFjdGl2ZVwiOiBcIkRhdGFDb250YWluZXItYWN0aXZlLTN5QlhjXCIsXG5cdFwiYW5pbWF0ZVwiOiBcIkRhdGFDb250YWluZXItYW5pbWF0ZS0yU0VqWlwiLFxuXHRcIm91dFwiOiBcIkRhdGFDb250YWluZXItb3V0LTFEdDAxXCIsXG5cdFwiZGF0YV9jb250YWluZXJcIjogXCJEYXRhQ29udGFpbmVyLWRhdGFfY29udGFpbmVyLTJZX2tNXCIsXG5cdFwibmF2XCI6IFwiRGF0YUNvbnRhaW5lci1uYXYtMk1mUFBcIixcblx0XCJ0aW1lc3RhbXBcIjogXCJEYXRhQ29udGFpbmVyLXRpbWVzdGFtcC0zWEpoblwiLFxuXHRcImxvYWRcIjogXCJEYXRhQ29udGFpbmVyLWxvYWQtbzZHdVJcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRW50cnktcm9vdC0yRlg1WiB7XFxuXFx0Y29sb3I6ICMyMjI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMTRweFxcbn1cXG4uRW50cnktcm9vdC0yRlg1Wi5FbnRyeS1hY3RpdmUtMlBNdWEgLkVudHJ5LWRhdGEtMVo4N2cge1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uRW50cnktcm9vdC0yRlg1Wi5FbnRyeS1hY3RpdmUtMlBNdWEgLkVudHJ5LWRhdGEtMVo4N2cgLkVudHJ5LWFycm93LVpoVm4tIHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbi5FbnRyeS1yb290LTJGWDVaLkVudHJ5LWFjdGl2ZS0yUE11YSAuRW50cnktZGF0YS0xWjg3Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5FbnRyeS1yb290LTJGWDVaLkVudHJ5LWFjdGl2ZS0yUE11YSAuRW50cnktc3RyZWFtLTNRTlBMIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uRW50cnktcm9vdC0yRlg1WiBoMiB7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcbi5FbnRyeS1jb250YWluZXItMmUtZnkge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXG59XFxuLkVudHJ5LWRhdGEtMVo4N2c6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uRW50cnktZGF0YS0xWjg3Zzpob3ZlciAuRW50cnktYXJyb3ctWmhWbi0ge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuLkVudHJ5LWRhdGEtMVo4N2cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uRW50cnktYXJyb3ctWmhWbi0ge1xcblxcdHdpZHRoOiAxMHB4O1xcblxcdGhlaWdodDogMTBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0dG9wOiA1MCU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xcblxcdGJvcmRlci10b3A6IG5vbmU7XFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi5FbnRyeS1zdHJlYW0tM1FOUEwge1xcblxcdGNvbG9yOiByZ2IoMTM1LCAyMTIsIDUzKTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRkaXNwbGF5OiBub25lXFxufVxcbi5FbnRyeS1zdHJlYW0tM1FOUEw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzNSwgMjEyLCA1Myk7XFxuICBjb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvRW50cnkvRW50cnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQzs7RUFFOU07O2dGQUU4RTtDQUMvRTtBQUNEO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixlQUFlO0NBQ2Y7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7QUFDRDtHQUNHLG1CQUFtQjtDQUNyQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7Q0FDMUI7QUFDRDtDQUNDLGdCQUFnQjs7Q0FFaEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFDRDtHQUNHLG1CQUFtQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbURBQW1EO0tBQy9DLCtDQUErQztTQUMzQywyQ0FBMkM7Q0FDbkQsU0FBUztDQUNULFlBQVk7Q0FDWix3Q0FBd0M7Q0FDeEMsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsYUFBYTtDQUNiO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtDQUNiXCIsXCJmaWxlXCI6XCJFbnRyeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGNvbG9yOiAjMjIyO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDE0cHhcXG59XFxuLnJvb3QuYWN0aXZlIC5kYXRhIHtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnJvb3QuYWN0aXZlIC5kYXRhIC5hcnJvdyB7XFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG4ucm9vdC5hY3RpdmUgLmRhdGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucm9vdC5hY3RpdmUgLnN0cmVhbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnJvb3QgaDIge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG4uY29udGFpbmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFxufVxcbi5kYXRhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmRhdGE6aG92ZXIgLmFycm93IHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbi5kYXRhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmFycm93IHtcXG5cXHR3aWR0aDogMTBweDtcXG5cXHRoZWlnaHQ6IDEwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcXG5cXHRib3JkZXItdG9wOiBub25lO1xcblxcdGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4uc3RyZWFtIHtcXG5cXHRjb2xvcjogcmdiKDEzNSwgMjEyLCA1Myk7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0ZGlzcGxheTogbm9uZVxcbn1cXG4uc3RyZWFtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzUsIDIxMiwgNTMpO1xcbiAgY29sb3I6ICNmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRW50cnktcm9vdC0yRlg1WlwiLFxuXHRcImFjdGl2ZVwiOiBcIkVudHJ5LWFjdGl2ZS0yUE11YVwiLFxuXHRcImRhdGFcIjogXCJFbnRyeS1kYXRhLTFaODdnXCIsXG5cdFwiYXJyb3dcIjogXCJFbnRyeS1hcnJvdy1aaFZuLVwiLFxuXHRcInN0cmVhbVwiOiBcIkVudHJ5LXN0cmVhbS0zUU5QTFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkVudHJ5LWNvbnRhaW5lci0yZS1meVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0VudHJ5L0VudHJ5LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRW50cnkvRW50cnkuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRXZlbnQtcm9vdC0yU0lUZyB7XFxuXFx0Y29sb3I6ICMyMjI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmVcXG59XFxuLkV2ZW50LXJvb3QtMlNJVGcuRXZlbnQtdW5zZWVuLTNhMW52IHtcXG4gIGJhY2tncm91bmQ6ICNlZTQ5MzU7XFxuICBjb2xvcjogcmdiKDU2LCAxMCwgNSk7XFxufVxcbi5FdmVudC1yb290LTJTSVRnLkV2ZW50LXVuc2Vlbi0zYTFudiAuRXZlbnQtY29udGFpbmVyLTEzZGJ5OmhvdmVyIHtcXG5cXHRcXHRcXHRjb2xvcjogI2VlNDkzNTtcXG59XFxuLkV2ZW50LXJvb3QtMlNJVGcuRXZlbnQtdW5zZWVuLTNhMW52IC5FdmVudC1jb250YWluZXItMTNkYnk6aG92ZXIgLkV2ZW50LWFycm93LTJIN1NkIHtcXG5cXHRcXHRcXHRcXHRib3JkZXItY29sb3I6ICNlZTQ5MzU7XFxuXFx0XFx0XFx0fVxcbi5FdmVudC1jb250YWluZXItMTNkYnkge1xcblxcdC8qIGJvcmRlci1ib3R0b206IDFweCBjb2xvcih2YXIoLS1ibGFjaykgYSgxMCUpKSBzb2xpZDsgKi9cXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcFxcbn1cXG4uRXZlbnQtY29udGFpbmVyLTEzZGJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICAvKiM0ZTdmYzY7XFxuICovXFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLkV2ZW50LWNvbnRhaW5lci0xM2RieTpob3ZlciAuRXZlbnQtYXJyb3ctMkg3U2Qge1xcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuaDIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcbi5FdmVudC1hcnJvdy0ySDdTZCB7XFxuXFx0d2lkdGg6IDdweDtcXG5cXHRoZWlnaHQ6IDdweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuXFx0dG9wOiA1MCU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xcblxcdGJvcmRlci10b3A6IG5vbmU7XFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi8qIC5kYXRhIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG5cXHR6LWluZGV4OiA1O1xcbn0gKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9FdmVudC9FdmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7R0FDRyxlQUFlO0NBQ2pCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjtDQUNDLDBEQUEwRDtDQUMxRCxnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQjtHQUNDO0VBQ0QsWUFBWTtDQUNiO0FBQ0Q7R0FDRyxtQkFBbUI7Q0FDckI7QUFDRDtDQUNDLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG1EQUFtRDtLQUMvQywrQ0FBK0M7U0FDM0MsMkNBQTJDO0NBQ25ELFNBQVM7Q0FDVCxZQUFZO0NBQ1osd0NBQXdDO0NBQ3hDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEI7QUFDRDs7Ozs7Ozs7OztJQVVJXCIsXCJmaWxlXCI6XCJFdmVudC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGNvbG9yOiAjMjIyO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlXFxufVxcbi5yb290LnVuc2VlbiB7XFxuICBiYWNrZ3JvdW5kOiAjZWU0OTM1O1xcbiAgY29sb3I6IHJnYig1NiwgMTAsIDUpO1xcbn1cXG4ucm9vdC51bnNlZW4gLmNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0XFx0Y29sb3I6ICNlZTQ5MzU7XFxufVxcbi5yb290LnVuc2VlbiAuY29udGFpbmVyOmhvdmVyIC5hcnJvdyB7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAjZWU0OTM1O1xcblxcdFxcdFxcdH1cXG4uY29udGFpbmVyIHtcXG5cXHQvKiBib3JkZXItYm90dG9tOiAxcHggY29sb3IodmFyKC0tYmxhY2spIGEoMTAlKSkgc29saWQ7ICovXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXBcXG59XFxuLmNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgLyojNGU3ZmM2O1xcbiAqL1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb250YWluZXI6aG92ZXIgLmFycm93IHtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbmgyIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG4uYXJyb3cge1xcblxcdHdpZHRoOiA3cHg7XFxuXFx0aGVpZ2h0OiA3cHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcXG5cXHRib3JkZXItdG9wOiBub25lO1xcblxcdGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4vKiAuZGF0YSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiAjNGU3ZmM2O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuXFx0ei1pbmRleDogNTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJFdmVudC1yb290LTJTSVRnXCIsXG5cdFwidW5zZWVuXCI6IFwiRXZlbnQtdW5zZWVuLTNhMW52XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRXZlbnQtY29udGFpbmVyLTEzZGJ5XCIsXG5cdFwiYXJyb3dcIjogXCJFdmVudC1hcnJvdy0ySDdTZFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0V2ZW50L0V2ZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRXZlbnQvRXZlbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4uRXZlbnREYXRhLXJvb3QtMWxMX20ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdGJhY2tncm91bmQ6ICM2OWU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlblxcbn1cXG4uRXZlbnREYXRhLXJvb3QtMWxMX20uRXZlbnREYXRhLWFjdGl2ZS0xcHBNZCB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5FdmVudERhdGEtYWN0aXZlLTFwcE1kIHtcXG5cXHR3aWR0aDogMjAwcHg7XFxufVxcbmF1ZGlvIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLkV2ZW50RGF0YS1jb250YWluZXItLVB3dkcge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbi5FdmVudERhdGEtbmF2LU5pUVFjIHtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uRXZlbnREYXRhLW5hdi1OaVFRYyBwIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcblxcdFxcdHBhZGRpbmc6IDJweCA1cHggNXB4IDEwcHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdH1cXG4uRXZlbnREYXRhLWNsb3NlX2V2ZW50cy1DWHNfNSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdG1hcmdpbjogM3B4IDNweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDI0cHg7XFxuXFx0aGVpZ2h0OiAyNHB4XFxufVxcbi5FdmVudERhdGEtY2xvc2VfZXZlbnRzLUNYc181OmFmdGVyLCAuRXZlbnREYXRhLWNsb3NlX2V2ZW50cy1DWHNfNTpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi5FdmVudERhdGEtY2xvc2VfZXZlbnRzLUNYc181OmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5FdmVudERhdGEtY2xvc2VfZXZlbnRzLUNYc181OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uRXZlbnREYXRhLWNsb3NlX2V2ZW50cy1DWHNfNTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyXFxufVxcbi5FdmVudERhdGEtY2xvc2VfZXZlbnRzLUNYc181OmhvdmVyOmFmdGVyLCAuRXZlbnREYXRhLWNsb3NlX2V2ZW50cy1DWHNfNTpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzY5ZTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvRXZlbnREYXRhL0V2ZW50RGF0YS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLFNBQVM7Q0FDVCxhQUFhO0NBQ2Isb0NBQW9DO0tBQ2hDLGdDQUFnQztTQUM1Qiw0QkFBNEI7Q0FDcEMsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0NBQ0MsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSO0FBQ0Y7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixZQUFZO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBQ0Q7RUFDRSx1REFBdUQ7TUFDbkQsbURBQW1EO1VBQy9DLCtDQUErQztFQUN2RCxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSx3REFBd0Q7TUFDcEQsb0RBQW9EO1VBQ2hELGdEQUFnRDtFQUN4RCxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiRXZlbnREYXRhLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuXFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuXFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuXFx0YmFja2dyb3VuZDogIzY5ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuXFxufVxcbi5yb290LmFjdGl2ZSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5hY3RpdmUge1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuYXVkaW8ge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubmF2IHtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubmF2IHAge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxuXFx0XFx0cGFkZGluZzogMnB4IDVweCA1cHggMTBweDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0fVxcbi5jbG9zZV9ldmVudHMge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW46IDNweCAzcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAyNHB4O1xcblxcdGhlaWdodDogMjRweFxcbn1cXG4uY2xvc2VfZXZlbnRzOmFmdGVyLCAuY2xvc2VfZXZlbnRzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmNsb3NlX2V2ZW50czphZnRlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uY2xvc2VfZXZlbnRzOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uY2xvc2VfZXZlbnRzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjJcXG59XFxuLmNsb3NlX2V2ZW50czpob3ZlcjphZnRlciwgLmNsb3NlX2V2ZW50czpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzY5ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJFdmVudERhdGEtcm9vdC0xbExfbVwiLFxuXHRcImFjdGl2ZVwiOiBcIkV2ZW50RGF0YS1hY3RpdmUtMXBwTWRcIixcblx0XCJjb250YWluZXJcIjogXCJFdmVudERhdGEtY29udGFpbmVyLS1Qd3ZHXCIsXG5cdFwibmF2XCI6IFwiRXZlbnREYXRhLW5hdi1OaVFRY1wiLFxuXHRcImNsb3NlX2V2ZW50c1wiOiBcIkV2ZW50RGF0YS1jbG9zZV9ldmVudHMtQ1hzXzVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9FdmVudERhdGEvRXZlbnREYXRhLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRXZlbnREYXRhL0V2ZW50RGF0YS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5IZWFkZXItcm9vdC1POW9XOSB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLkhlYWRlci1jb250YWluZXItcVEybUYge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kLTJvU195IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uSGVhZGVyLWJyYW5kVHh0LTIzMGFIIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uSGVhZGVyLWFkb3JubWVudC0yOXFTUSB7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5IZWFkZXIteWVsbG93LXg5UXE5IHtcXG4gIGJhY2tncm91bmQ6ICNmMmNhNzA7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgIC1tcy1mbGV4OiA1IDEgMCU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLkhlYWRlci1vcmFuZ2UtMWUzS057XFxuICBiYWNrZ3JvdW5kOiAjZWQ5ZTcyO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMSAxIDAlO1xcbiAgICAgICAgICBmbGV4OiAxIDEgMCU7XFxufVxcbi5IZWFkZXItZGdyZWVuLUNIS2s5e1xcbiAgYmFja2dyb3VuZDogIzlmZGQ1ZTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE0O1xcbiAgICAgIC1tcy1mbGV4OiAxNCAxIDAlO1xcbiAgICAgICAgICBmbGV4OiAxNCAxIDAlO1xcbn1cXG4uSGVhZGVyLWxncmVlbi1md2ptRXtcXG4gIGJhY2tncm91bmQ6ICNjYWVkNzI7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgIC1tcy1mbGV4OiA1IDEgMCU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLkhlYWRlci1kYmx1ZS0yb3hsbXtcXG4gIGJhY2tncm91bmQ6ICM0ZTdmYzY7XFxuICAtd2Via2l0LWJveC1mbGV4OiAyMDtcXG4gICAgICAtbXMtZmxleDogMjAgMSAwJTtcXG4gICAgICAgICAgZmxleDogMjAgMSAwJTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7TUFDaEIsaUJBQWlCO1VBQ2IsYUFBYTtDQUN0QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtNQUNoQixpQkFBaUI7VUFDYixhQUFhO0NBQ3RCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO01BQ2pCLGtCQUFrQjtVQUNkLGNBQWM7Q0FDdkI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7TUFDaEIsaUJBQWlCO1VBQ2IsYUFBYTtDQUN0QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtNQUNqQixrQkFBa0I7VUFDZCxjQUFjO0NBQ3ZCXCIsXCJmaWxlXCI6XCJIZWFkZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMCcpO1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuLmJyYW5kIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uYnJhbmRUeHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5hZG9ybm1lbnQge1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQ6ICNmMmNhNzA7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgIC1tcy1mbGV4OiA1IDEgMCU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLm9yYW5nZXtcXG4gIGJhY2tncm91bmQ6ICNlZDllNzI7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgMCU7XFxuICAgICAgICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuLmRncmVlbntcXG4gIGJhY2tncm91bmQ6ICM5ZmRkNWU7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxNDtcXG4gICAgICAtbXMtZmxleDogMTQgMSAwJTtcXG4gICAgICAgICAgZmxleDogMTQgMSAwJTtcXG59XFxuLmxncmVlbntcXG4gIGJhY2tncm91bmQ6ICNjYWVkNzI7XFxuICAtd2Via2l0LWJveC1mbGV4OiA1O1xcbiAgICAgIC1tcy1mbGV4OiA1IDEgMCU7XFxuICAgICAgICAgIGZsZXg6IDUgMSAwJTtcXG59XFxuLmRibHVle1xcbiAgYmFja2dyb3VuZDogIzRlN2ZjNjtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDIwO1xcbiAgICAgIC1tcy1mbGV4OiAyMCAxIDAlO1xcbiAgICAgICAgICBmbGV4OiAyMCAxIDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkhlYWRlci1yb290LU85b1c5XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyLWNvbnRhaW5lci1xUTJtRlwiLFxuXHRcImJyYW5kXCI6IFwiSGVhZGVyLWJyYW5kLTJvU195XCIsXG5cdFwiYnJhbmRUeHRcIjogXCJIZWFkZXItYnJhbmRUeHQtMjMwYUhcIixcblx0XCJhZG9ybm1lbnRcIjogXCJIZWFkZXItYWRvcm5tZW50LTI5cVNRXCIsXG5cdFwieWVsbG93XCI6IFwiSGVhZGVyLXllbGxvdy14OVFxOVwiLFxuXHRcIm9yYW5nZVwiOiBcIkhlYWRlci1vcmFuZ2UtMWUzS05cIixcblx0XCJkZ3JlZW5cIjogXCJIZWFkZXItZGdyZWVuLUNIS2s5XCIsXG5cdFwibGdyZWVuXCI6IFwiSGVhZGVyLWxncmVlbi1md2ptRVwiLFxuXHRcImRibHVlXCI6IFwiSGVhZGVyLWRibHVlLTJveGxtXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi8qXFxuICogbm9ybWFsaXplLmNzcyBpcyBpbXBvcnRlZCBpbiBKUyBmaWxlLlxcbiAqIElmIHlvdSBpbXBvcnQgZXh0ZXJuYWwgQ1NTIGZpbGUgZnJvbSB5b3VyIGludGVybmFsIENTU1xcbiAqIHRoZW4gaXQgd2lsbCBiZSBpbmxpbmVkIGFuZCBwcm9jZXNzZWQgd2l0aCBDU1MgbW9kdWxlcy5cXG4gKi9cXG4uTGF5b3V0LWNvbnRlbnQtY2lON3Ige1xcbiAgbWFyZ2luLXRvcDogNTVweDtcXG59XFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjMDA3NGMyO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxcbiAqIGh0dHBzOi8vdHdpdHRlci5jb20vbWlrZXRheWxyL3N0YXR1cy8xMjIyODgwNTMwMVxcbiAqXFxuICogVGhlc2Ugc2VsZWN0aW9uIHJ1bGUgc2V0cyBoYXZlIHRvIGJlIHNlcGFyYXRlLlxcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cXG4gKi9cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG4vKlxcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcXG4gKi9cXG5ociB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGhlIGdhcCBiZXR3ZWVuIGF1ZGlvLCBjYW52YXMsIGlmcmFtZXMsXFxuICogaW1hZ2VzLCB2aWRlb3MgYW5kIHRoZSBib3R0b20gb2YgdGhlaXIgY29udGFpbmVyczpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvNDQwXFxuICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbmlmcmFtZSxcXG5pbWcsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi8qXFxuICogUmVtb3ZlIGRlZmF1bHQgZmllbGRzZXQgc3R5bGVzLlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXFxuICovXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuLypcXG4gKiBCcm93c2VyIHVwZ3JhZGUgcHJvbXB0XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYnJvd3NlcnVwZ3JhZGUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuLypcXG4gKiBQcmludCBzdHlsZXNcXG4gKiBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDpcXG4gKiBodHRwOi8vd3d3LnBocGllZC5jb20vZGVsYXktbG9hZGluZy15b3VyLXByaW50LWNzcy9cXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBtZWRpYSBwcmludCB7XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvKiBCbGFjayBwcmludHMgZmFzdGVyOiBodHRwOi8vd3d3LnNhbmJlaWppLmNvbS9hcmNoaXZlcy85NTMgKi9cXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgYSxcXG4gIGE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcblxcbiAgYVtocmVmXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIoaHJlZikgJyknO1xcbiAgfVxcblxcbiAgYWJiclt0aXRsZV06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOjphZnRlcixcXG4gIGFbaHJlZl49J2phdmFzY3JpcHQ6J106OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuXFxuICBwcmUsXFxuICBibG9ja3F1b3RlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIFByaW50aW5nIFRhYmxlczpcXG4gICAqIGh0dHA6Ly9jc3MtZGlzY3Vzcy5pbmN1dGlvLmNvbS93aWtpL1ByaW50aW5nX1RhYmxlc1xcbiAgICovXFxuXFxuICB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gIH1cXG5cXG4gIHRyLFxcbiAgaW1nIHtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBwLFxcbiAgaDIsXFxuICBoMyB7XFxuICAgIG9ycGhhbnM6IDM7XFxuICAgIHdpZG93czogMztcXG4gIH1cXG5cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcXG4gIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Ozs7R0FJRztBQUNIO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7O2dGQUVnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxDQUFDLFlBQVk7RUFDNUIsMERBQTBEO0VBQzFELG1CQUFtQixDQUFDLFdBQVc7Q0FDaEM7QUFDRDtFQUNFLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEOzs7Ozs7R0FNRztBQUNIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUNEOztHQUVHO0FBQ0g7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjtBQUNEOzs7O0dBSUc7QUFDSDs7Ozs7O0VBTUUsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztDQUNaO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEOztnRkFFZ0Y7QUFDaEY7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDs7OztnRkFJZ0Y7QUFDaEY7RUFDRTs7O0lBR0UsbUNBQW1DO0lBQ25DLHVCQUF1QixDQUFDLCtEQUErRDtJQUN2RixvQ0FBb0M7WUFDNUIsNEJBQTRCO0lBQ3BDLDZCQUE2QjtHQUM5Qjs7RUFFRDs7SUFFRSwyQkFBMkI7R0FDNUI7O0VBRUQ7SUFDRSw2QkFBNkI7R0FDOUI7O0VBRUQ7SUFDRSw4QkFBOEI7R0FDL0I7O0VBRUQ7OztLQUdHOztFQUVIOztJQUVFLFlBQVk7R0FDYjs7RUFFRDs7SUFFRSx1QkFBdUI7SUFDdkIseUJBQXlCO0dBQzFCOztFQUVEOzs7S0FHRzs7RUFFSDtJQUNFLDRCQUE0QjtHQUM3Qjs7RUFFRDs7SUFFRSx5QkFBeUI7R0FDMUI7O0VBRUQ7SUFDRSwyQkFBMkI7R0FDNUI7O0VBRUQ7OztJQUdFLFdBQVc7SUFDWCxVQUFVO0dBQ1g7O0VBRUQ7O0lBRUUsd0JBQXdCO0dBQ3pCO0NBQ0ZcIixcImZpbGVcIjpcIkxheW91dC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSb2JvdG8rQ29uZGVuc2VkOjMwMCw0MDAsNzAwJyk7XFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLypcXG4gKiBub3JtYWxpemUuY3NzIGlzIGltcG9ydGVkIGluIEpTIGZpbGUuXFxuICogSWYgeW91IGltcG9ydCBleHRlcm5hbCBDU1MgZmlsZSBmcm9tIHlvdXIgaW50ZXJuYWwgQ1NTXFxuICogdGhlbiBpdCB3aWxsIGJlIGlubGluZWQgYW5kIHByb2Nlc3NlZCB3aXRoIENTUyBtb2R1bGVzLlxcbiAqL1xcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDU1cHg7XFxufVxcbi8qXFxuICogQmFzZSBzdHlsZXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmh0bWwge1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxZW07IC8qIH4xNnB4OyAqL1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1OyAvKiB+MjJweCAqL1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuOmdsb2JhbCguYnJvd3NlcnVwZ3JhZGUpIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiTGF5b3V0LWNvbnRlbnQtY2lON3JcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4uTmF2aWdhdGlvbi1yb290LTJnY0p4IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLk5hdmlnYXRpb24taGlnaGxpZ2h0LTJVTmxxOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLk5hdmlnYXRpb24tc3BhY2VyLTN2WlZHIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2FtY3JhbmUvRG9jdW1lbnRzL0NlbnRyZWUvUmVwb3NpdG9yaWVzL2NlbnRyZWVfd2ViYXBwL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUIsQ0FBQyxXQUFXO0NBQ2hDOztBQUVEOzs7RUFHRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtDQUNiOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsZ0NBQWdDO0NBQ2pDXCIsXCJmaWxlXCI6XCJOYXZpZ2F0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi5yb290IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5saW5rLFxcbi5saW5rOmFjdGl2ZSxcXG4ubGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uLXJvb3QtMmdjSnhcIixcblx0XCJsaW5rXCI6IFwiTmF2aWdhdGlvbi1saW5rLU50bDM1XCIsXG5cdFwiaGlnaGxpZ2h0XCI6IFwiTmF2aWdhdGlvbi1oaWdobGlnaHQtMlVObHFcIixcblx0XCJzcGFjZXJcIjogXCJOYXZpZ2F0aW9uLXNwYWNlci0zdlpWR1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5TaWRlYmFyLXJvb3QtMTVIalMge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uU2lkZWJhci1kZXZpY2VzLXU3Q0dtIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDM0LCAzNCwgMzQsIDAuMSk7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogNTtcXG59XFxuLlNpZGViYXItZXZlbnRzLTJ4d3NzIHtcXG5cXHRtYXJnaW4tbGVmdDogNTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXMgZWFzZTtcXG5cXHQtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzIGVhc2U7XFxuXFx0dHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cyBlYXNlO1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXHRoZWlnaHQ6IDEwMCVcXG59XFxuLlNpZGViYXItZXZlbnRzLTJ4d3NzLlNpZGViYXItYWN0aXZlLXNVX182IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuLlNpZGViYXItZXZlbnRfY29udGFpbmVyLTNtZzU3IHtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5TaWRlYmFyLW5hdi0yVkN0biB7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNpZGViYXItbmF2LTJWQ3RuIHAge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxuXFx0XFx0cGFkZGluZzogMnB4IDVweCA1cHggMTBweDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHR9XFxuLlNpZGViYXItZW50cnlfY29udGFpbmVyLTFtSnFIIHtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5TaWRlYmFyLWNsb3NlLTNTckg3IHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luOiAzcHggM3B4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHhcXG59XFxuLlNpZGViYXItY2xvc2UtM1NySDc6YWZ0ZXIsIC5TaWRlYmFyLWNsb3NlLTNTckg3OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLlNpZGViYXItY2xvc2UtM1NySDc6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLlNpZGViYXItY2xvc2UtM1NySDc6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5TaWRlYmFyLWNsb3NlLTNTckg3OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNjQ7XFxufVxcbi5TaWRlYmFyLWNsb3NlLTNTckg3OmhvdmVyOmFmdGVyLCAuU2lkZWJhci1jbG9zZS0zU3JINzpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLlNpZGViYXItcGxhY2Vob2xkZXItMWVqcUsge1xcblxcdGNvbG9yOiAjYWFhO1xcbn1cXG4uU2lkZWJhci1wbGFjZWhvbGRlci0xZWpxSyBoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxMnB0O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0fVxcbkAtd2Via2l0LWtleWZyYW1lcyBTaWRlYmFyLXJvdGF0ZS1ISkhvVyB7XFxuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpfVxcbn1cXG5Aa2V5ZnJhbWVzIFNpZGViYXItcm90YXRlLUhKSG9XIHtcXG4gIGZyb20gey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XFxuICB0byB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxufVxcbi5TaWRlYmFyLXNwaW5uZXItMk5zdkYge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNpZGViYXItcm90YXRlLUhKSG9XIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBTaWRlYmFyLXJvdGF0ZS1ISkhvVyAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRoZWlnaHQ6IDIwcHhcXG59XFxuLlNpZGViYXItc3Bpbm5lci0yTnN2RjphZnRlciB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycHg7XFxuICBsZWZ0OiAtMnB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7Q0FDQyxxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGNBQWM7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0NBQ1Q7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQiw4Q0FBOEM7Q0FDL0MsbUJBQW1CO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztDQUNaO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsMENBQTBDO0NBQzFDLHFDQUFxQztDQUNyQyxrQ0FBa0M7Q0FDbEMsYUFBYTtDQUNiLFlBQVk7Q0FDWjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCO0FBQ0Y7Q0FDQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixZQUFZO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBQ0Q7RUFDRSx1REFBdUQ7TUFDbkQsbURBQW1EO1VBQy9DLCtDQUErQztFQUN2RCxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSx3REFBd0Q7TUFDcEQsb0RBQW9EO1VBQ2hELGdEQUFnRDtFQUN4RCxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUI7QUFDRjtFQUNFLE1BQU0sZ0NBQWdDLHVCQUF1QixDQUFDO0VBQzlELElBQUksa0NBQWtDLHlCQUF5QixDQUFDO0NBQ2pFO0FBQ0Q7RUFDRSxNQUFNLGdDQUFnQyx1QkFBdUIsQ0FBQztFQUM5RCxJQUFJLGtDQUFrQyx5QkFBeUIsQ0FBQztDQUNqRTtBQUNEO0VBQ0UsMkRBQTZDO1VBQ3JDLG1EQUFxQztFQUM3QyxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7QUFDRDtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJTaWRlYmFyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLnJvb3Qge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZGV2aWNlcyB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjEpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5ldmVudHMge1xcblxcdG1hcmdpbi1sZWZ0OiA1MHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cyBlYXNlO1xcblxcdC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXMgZWFzZTtcXG5cXHR0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzIGVhc2U7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGhlaWdodDogMTAwJVxcbn1cXG4uZXZlbnRzLmFjdGl2ZSB7XFxuICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbi5ldmVudF9jb250YWluZXIge1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG59XFxuLm5hdiB7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5hdiBwIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcblxcdFxcdHBhZGRpbmc6IDJweCA1cHggNXB4IDEwcHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0fVxcbi5lbnRyeV9jb250YWluZXIge1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmNsb3NlIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luOiAzcHggM3B4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHhcXG59XFxuLmNsb3NlOmFmdGVyLCAuY2xvc2U6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG4uY2xvc2U6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLmNsb3NlOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U2NDtcXG59XFxuLmNsb3NlOmhvdmVyOmFmdGVyLCAuY2xvc2U6aG92ZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5wbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNhYWE7XFxufVxcbi5wbGFjZWhvbGRlciBoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxMnB0O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0fVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG59XFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG59XFxuLnNwaW5uZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweFxcbn1cXG4uc3Bpbm5lcjphZnRlciB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycHg7XFxuICBsZWZ0OiAtMnB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlNpZGViYXItcm9vdC0xNUhqU1wiLFxuXHRcImRldmljZXNcIjogXCJTaWRlYmFyLWRldmljZXMtdTdDR21cIixcblx0XCJldmVudHNcIjogXCJTaWRlYmFyLWV2ZW50cy0yeHdzc1wiLFxuXHRcImFjdGl2ZVwiOiBcIlNpZGViYXItYWN0aXZlLXNVX182XCIsXG5cdFwiZXZlbnRfY29udGFpbmVyXCI6IFwiU2lkZWJhci1ldmVudF9jb250YWluZXItM21nNTdcIixcblx0XCJuYXZcIjogXCJTaWRlYmFyLW5hdi0yVkN0blwiLFxuXHRcImVudHJ5X2NvbnRhaW5lclwiOiBcIlNpZGViYXItZW50cnlfY29udGFpbmVyLTFtSnFIXCIsXG5cdFwiY2xvc2VcIjogXCJTaWRlYmFyLWNsb3NlLTNTckg3XCIsXG5cdFwicGxhY2Vob2xkZXJcIjogXCJTaWRlYmFyLXBsYWNlaG9sZGVyLTFlanFLXCIsXG5cdFwic3Bpbm5lclwiOiBcIlNpZGViYXItc3Bpbm5lci0yTnN2RlwiLFxuXHRcInJvdGF0ZVwiOiBcIlNpZGViYXItcm90YXRlLUhKSG9XXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAvKlxcbiAgICogQ29sb3JzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG59XFxuLkhvbWUtcm9vdC0xYXZsNyB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcXG59XFxuLkhvbWUtY29udGFpbmVyLTNZUE4tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uSG9tZS1zdHJlYW0tMzdlUkwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0aGVpZ2h0OiA1MCU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHR6LWluZGV4OiAxMDAwO1xcblxcdHRvcDogMjUlO1xcblxcdGxlZnQ6IDI1JTtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyMHB4IDBweCByZ2JhKDM0LCAzNCwgMzQsIDAuMyk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjMpXFxufVxcbi5Ib21lLXN0cmVhbS0zN2VSTC5Ib21lLWFjdGl2ZS0ycGRLdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLkhvbWUtY2xvc2UtMlVLMW8ge1xcblxcdGhlaWdodDogMjRweDtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRtYXJnaW46IDNweCAzcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXG59XFxuLkhvbWUtY2xvc2UtMlVLMW86YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4uSG9tZS1jbG9zZS0yVUsxbzpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgLyp6LWluZGV4OiAxMDA7XFxuICovXFxufVxcbi5Ib21lLWNsb3NlLTJVSzFvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNjQ7XFxufVxcbi5Ib21lLWNsb3NlLTJVSzFvOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5Ib21lLWNsb3NlLTJVSzFvOmhvdmVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NhbWNyYW5lL0RvY3VtZW50cy9DZW50cmVlL1JlcG9zaXRvcmllcy9jZW50cmVlX3dlYmFwcC9zcmMvcm91dGVzL2hvbWUvSG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDOztFQUU5TTs7Z0ZBRThFO0NBQy9FO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0NBQ2Y7QUFDRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsdURBQXVEO1NBQy9DLDhDQUE4QztDQUN0RDtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsd0RBQXdEO01BQ3BELG9EQUFvRDtVQUNoRCxnREFBZ0Q7Q0FDekQ7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsdURBQXVEO01BQ25ELG1EQUFtRDtVQUMvQywrQ0FBK0M7RUFDdkQ7R0FDQztDQUNGO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCXCIsXCJmaWxlXCI6XCJIb21lLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJvYm90bytDb25kZW5zZWQ6MzAwLDQwMCw3MDAnKTtcXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucm9vdCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnN0cmVhbSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRoZWlnaHQ6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHotaW5kZXg6IDEwMDA7XFxuXFx0dG9wOiAyNSU7XFxuXFx0bGVmdDogMjUlO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC4zKTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDBweCByZ2JhKDM0LCAzNCwgMzQsIDAuMylcXG59XFxuLnN0cmVhbS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jbG9zZSB7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHdpZHRoOiAyNHB4O1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdG1hcmdpbjogM3B4IDNweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdGN1cnNvcjogcG9pbnRlclxcbn1cXG4uY2xvc2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4uY2xvc2U6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIC8qei1pbmRleDogMTAwO1xcbiAqL1xcbn1cXG4uY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U2NDtcXG59XFxuLmNsb3NlOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5jbG9zZTpob3ZlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIb21lLXJvb3QtMWF2bDdcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lLWNvbnRhaW5lci0zWVBOLVwiLFxuXHRcInN0cmVhbVwiOiBcIkhvbWUtc3RyZWFtLTM3ZVJMXCIsXG5cdFwiYWN0aXZlXCI6IFwiSG9tZS1hY3RpdmUtMnBkS3dcIixcblx0XCJjbG9zZVwiOiBcIkhvbWUtY2xvc2UtMlVLMW9cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2hvbWUvSG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zYW1jcmFuZS9Eb2N1bWVudHMvQ2VudHJlZS9SZXBvc2l0b3JpZXMvY2VudHJlZV93ZWJhcHAvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0RUFBNEU7O0FBRTVFO2dGQUNnRjs7QUFFaEY7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywrQkFBK0IsQ0FBQyxPQUFPO0NBQ3hDOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7T0FFTyxPQUFPO0VBQ1osZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCLENBQUMsT0FBTztFQUN4QyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usb0JBQW9CLENBQUMsT0FBTztFQUM1QiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGtDQUFrQyxDQUFDLE9BQU87Q0FDM0M7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUscUJBQXFCO0NBQ3RCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLG9CQUFvQjtDQUNyQjs7QUFFRDs7O0dBR0c7O0FBRUg7OztFQUdFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7O0VBRUUsc0JBQXNCO0NBQ3ZCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFVBQVU7Q0FDWDs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7Ozs7RUFLRSx3QkFBd0IsQ0FBQyxPQUFPO0VBQ2hDLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsa0JBQWtCLENBQUMsT0FBTztFQUMxQixVQUFVLENBQUMsT0FBTztDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7UUFDUSxPQUFPO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtTQUNTLE9BQU87RUFDZCxxQkFBcUI7Q0FDdEI7O0FBRUQ7Ozs7R0FJRzs7QUFFSDs7OztFQUlFLDJCQUEyQixDQUFDLE9BQU87Q0FDcEM7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsK0JBQStCO0NBQ2hDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QixDQUFDLE9BQU87RUFDdkMsZUFBZSxDQUFDLE9BQU87RUFDdkIsZUFBZSxDQUFDLE9BQU87RUFDdkIsZ0JBQWdCLENBQUMsT0FBTztFQUN4QixXQUFXLENBQUMsT0FBTztFQUNuQixvQkFBb0IsQ0FBQyxPQUFPO0NBQzdCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLHNCQUFzQixDQUFDLE9BQU87RUFDOUIseUJBQXlCLENBQUMsT0FBTztDQUNsQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLCtCQUErQjtVQUN2Qix1QkFBdUIsQ0FBQyxPQUFPO0VBQ3ZDLFdBQVcsQ0FBQyxPQUFPO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLGFBQWE7Q0FDZDs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHFCQUFxQixDQUFDLE9BQU87Q0FDOUI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUseUJBQXlCO0NBQzFCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsY0FBYyxDQUFDLE9BQU87Q0FDdkI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O0VBRUUsZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0NBQ2ZcIixcImZpbGVcIjpcIm5vcm1hbGl6ZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxcbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wic291cmNlTWFwXCI6dHJ1ZSxcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9BdWRpb1BsYXllci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vQXVkaW9QbGF5ZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vQXVkaW9QbGF5ZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIvQXVkaW9QbGF5ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzL0F1ZGlvUGxheWVyL0F1ZGlvUGxheWVyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0F1ZGlvUGxheWVyLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBBdWRpb1BsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwcm9ncmVzczogMCxcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGxheWluZzogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gLy8gICAgbGV0IHQgPSB0aGlzO1xuXHQvLyBcdHQuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblx0Ly8gXHR0LnNvdXJjZSA9IG51bGw7XG4gLy8gICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIC8vICAgIHJlcS5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvL1wiICsgdGhpcy5wcm9wcy5kZXZpY2VfaWQgKyBcIi9cIiArIHRoaXMucHJvcHMuZXZlbnRfaWQgKyBcIi53YXZcIiwgdHJ1ZSk7XG4gLy8gICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAvLyAgICB0LnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSk7XG4gLy8gICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuIC8vICAgICAgdC5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAvLyAgICAgIHQucHJvY2VzcyhyZXEucmVzcG9uc2UpO1xuIC8vICAgIH07XG4gLy8gICAgcmVxLnNlbmQoKTtcblx0Ly8gfVxuXG4gIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gIC8vICAgbGV0IHQgPSB0aGlzO1xuICAvLyAgIGlmICghdC5zb3VyY2UpIHJldHVybjtcbiAgLy8gICB0LnNvdXJjZS5zdGFydCh0LmNvbnRleHQuY3VycmVudFRpbWUpO1xuICAvLyAgIHQuc291cmNlLnN0b3AodC5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgLy8gICB0LnNvdXJjZS5kaXNjb25uZWN0KHQuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gIC8vICAgdC5zb3VyY2UgPSBudWxsO1xuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAvLyAgIGxldCB0ID0gdGhpcztcbiAgLy8gICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAvLyAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWRpby9cIiArIHRoaXMucHJvcHMuZGV2aWNlX2lkICsgXCIvXCIgKyB0aGlzLnByb3BzLmV2ZW50X2lkICsgXCIud2F2XCIsIHRydWUpO1xuICAvLyAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICAvLyAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgICB2YXIgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2U7XG4gIC8vICAgICB0LnByb2Nlc3MoZGF0YSk7XG4gIC8vICAgfTtcbiAgLy8gICByZXF1ZXN0LnNlbmQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPjxzb3VyY2Ugc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWRpby9cIiArIHRoaXMucHJvcHMuZGV2aWNlX2lkICsgXCIvXCIgKyB0aGlzLnByb3BzLmV2ZW50X2lkICsgXCIud2F2XCJ9IHR5cGU9XCJhdWRpby93YXZcIi8+PC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgLy8gPGRpdiBjbGFzc05hbWU9e3MuY29udHJvbHN9PlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHMucGxheSwgcy5idXR0b24pfSBvbkNsaWNrPXt0aGlzLnBsYXkuYmluZCh0aGlzKX0+PC9kaXY+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMocy5wYXVzZSwgcy5idXR0b24pfT48L2Rpdj5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByb2dyZXNzfT5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iYXJ9PjwvZGl2PlxuICAvLyAgICAgICA8L2Rpdj5cblxuICBwbGF5KCkge1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gIH1cblxuICBwcm9jZXNzKGRhdGEpIHtcbiAgICBsZXQgdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdC5zb3VyY2UgPSB0LmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgdC5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShkYXRhLCBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIHQuc291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgIHQuc291cmNlLmNvbm5lY3QodC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEF1ZGlvUGxheWVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BdWRpb1BsYXllci9BdWRpb1BsYXllci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRGF0YUNvbnRhaW5lci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRGF0YUNvbnRhaW5lci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9EYXRhQ29udGFpbmVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0RhdGFDb250YWluZXIvRGF0YUNvbnRhaW5lci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvRGF0YUNvbnRhaW5lci9EYXRhQ29udGFpbmVyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0RhdGFDb250YWluZXIuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gJ2NvbXBvbmVudHMvQXVkaW9QbGF5ZXInO1xuXG5jbGFzcyBEYXRhQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XG5cdGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuY2xhc3NMaXN0LnJlbW92ZShzLmFuaW1hdGUpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICBlLmNsYXNzTGlzdC5hZGQocy5hbmltYXRlKTtcbiAgICB9LCAxMCk7XG4gICAgaWYgKHRoaXMuYXVkaW8pdGhpcy5hdWRpby5sb2FkKCk7XG5cdH1cblxuICByZW5kZXIoKSB7XG4gIFx0dmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvL1wiICsgdGhpcy5wcm9wcy5kZXZpY2VfaWQgKyBcIi9cIiArIHRoaXMucHJvcHMuZXZlbnRfaWQgKyBcIi53YXZcIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMocy5yb290LCBzLmFuaW1hdGUsIHtbcy5hY3RpdmVdOiB0aGlzLnByb3BzLmFjdGl2ZX0sIHtbcy5vdXRdOiB0aGlzLnByb3BzLmV2ZW50c19zaG93bn0pfT5cblx0ICAgICAgPGRpdiBjbGFzc05hbWU9e3MubmF2fT5cblx0ICAgICAgICA8cD5FdmVudDwvcD5cblx0ICAgICAgICB7dGhpcy5wcm9wcy5ldmVudCAmJiA8ZGl2IGNsYXNzTmFtZT17cy5jbG9zZX0gb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMudG9nZ2xlRGF0YShmYWxzZSl9fT48L2Rpdj59XG5cdCAgICAgIDwvZGl2PlxuXHQgICAgICB7dGhpcy5wcm9wcy5ldmVudCAmJiA8ZGl2IGNsYXNzTmFtZT17cy5kYXRhX2NvbnRhaW5lcn0+XG5cdCAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnRpbWVzdGFtcH0+e3RoaXMucHJvcHMuZXZlbnQuY3JlYXRlZF9hdH08L3NwYW4+XG5cdCAgICAgICAgPGF1ZGlvIHJlZj17KGF1ZGlvKSA9PiB7IHRoaXMuYXVkaW8gPSBhdWRpbzsgfX0gY29udHJvbHM+PHNvdXJjZSBzcmM9e3VybH0gdHlwZT1cImF1ZGlvL3dhdlwiLz48L2F1ZGlvPlxuXHQgICAgICA8L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRGF0YUNvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRGF0YUNvbnRhaW5lci9EYXRhQ29udGFpbmVyLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FbnRyeS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRW50cnkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRW50cnkuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRW50cnkvRW50cnkuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzL0VudHJ5L0VudHJ5LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0VudHJ5LmNzcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdERldmljZSA9IHRoaXMuaGFuZGxlU2VsZWN0RGV2aWNlLmJpbmQodGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzLnJvb3QsIHtbcy5hY3RpdmVdOiB0aGlzLnByb3BzLmN1cnJlbnR9KX0gPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRhdGF9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0RGV2aWNlfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3MubmFtZX0+e3RoaXMucHJvcHMubmFtZX08L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmxhdGVzdH0+dXBkYXRlZDoge3RoaXMucHJvcHMubGF0ZXN0fTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFycm93fT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGhhbmRsZVNlbGVjdERldmljZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldEN1ckRldmljZSh0aGlzLnByb3BzLmlkKTtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUV2ZW50cygpO1xuICAgIHRoaXMucHJvcHMuc2V0RGV2aWNlQWxlcnQodGhpcy5wcm9wcy5pZCwgZmFsc2UpO1xuICB9XG5cbiAgLy8gPGRpdiBjbGFzc05hbWU9e3Muc3RyZWFtfSBvbkNsaWNrPXt0aGlzLnByb3BzLnZpZXdTdHJlYW19PkNsaWNrIHRvIHZpZXcgc3RyZWFtPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRW50cnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0VudHJ5L0VudHJ5LmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FdmVudC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRXZlbnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRXZlbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnQvRXZlbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzL0V2ZW50L0V2ZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuKlxuKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRXZlbnQuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtzZXRSdW50aW1lVmFyaWFibGV9IGZyb20gJy4uLy4uL2FjdGlvbnMvcnVudGltZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLmhhbmRsZVRvZ2dsZURhdGEgPSB0aGlzLmhhbmRsZVRvZ2dsZURhdGEuYmluZCh0aGlzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vblJlZikge3RoaXMucHJvcHMub25SZWYodGhpcyk7fVxuXHRcdGxldCBwID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMocy5yb290LCB7W3MudW5zZWVuXTogIXAuc2Vlbn0pfSBvbk1vdXNlRW50ZXI9e3RoaXMucHJvcHMub25Nb3VzZUVudGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZURhdGF9PlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9e3MudHlwZX0+e3RoaXMucHJvcHMudHlwZX08L2gyPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17cy50aW1lfT50aW1lOiB7bmV3IERhdGUodGhpcy5wcm9wcy50aW1lKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxOSkucmVwbGFjZSgnVCcsICcgJyl9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmFycm93fT48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0aGFuZGxlVG9nZ2xlRGF0YSgpIHtcblx0XHRsZXQgcCA9IHRoaXMucHJvcHM7XG5cdFx0cC50b2dnbGVEYXRhKCk7XG5cdFx0cC5zZXRDdXJFdmVudChwLmlkKTtcblx0XHRwLnNldEV2ZW50U2VlbihwLmlkLCBwLmRldmljZV9pZCwgdHJ1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShFdmVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0V2ZW50L0V2ZW50LmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FdmVudERhdGEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0V2ZW50RGF0YS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FdmVudERhdGEuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREYXRhL0V2ZW50RGF0YS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvRXZlbnREYXRhL0V2ZW50RGF0YS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbipcbiogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0V2ZW50RGF0YS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgRXZlbnREYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmV2ZW50RGF0YS5zb3VuZF9maWxlKSB7XG5cdFx0XHRsZXQgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblx0XHRcdGxldCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdFx0Y29udGV4dC5kZWNvZGVBdWRpb0RhdGEodGhpcy5wcm9wcy5ldmVudERhdGEuc291bmRfZmlsZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0XHRcdHNvdXJjZS5idWZmZXIgPSBidWZmZXI7XG5cdFx0XHRcdHNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAvLyBzb3VyY2Uuc3RhcnQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLm5hdn0+XG4gICAgICAgICAgPHA+RXZlbnQ8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY2xvc2VfZXZlbnRzfSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVUb2dnbGVFdmVudHMoZmFsc2UpLmJpbmQodGhpcyl9fT48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0PGF1ZGlvIGNvbnRyb2xzPlxuXHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCJob3JzZS5vZ2dcIiB0eXBlPVwiYXVkaW8vb2dnXCIvPlxuXHRcdFx0XHRcdFx0WW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIGVsZW1lbnQuXG5cdFx0XHRcdFx0PC9hdWRpbz5cblx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5ldmVudERhdGEub3RoZXJfbWVkaWF9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0aGFuZGxlVG9nZ2xlRXZlbnRzKCkge1xuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShFdmVudERhdGEpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9FdmVudERhdGEvRXZlbnREYXRhLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hlYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0gdG89XCIvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZFR4dH0+U21hcnRCbG9jPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkb3JubWVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnllbGxvd30+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yYW5nZX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRncmVlbn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxncmVlbn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRibHVlfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTGF5b3V0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0IHMgZnJvbSAnLi9MYXlvdXQuY3NzJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250ZW50fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhub3JtYWxpemVDc3MsIHMpKExheW91dCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogbnVsbCxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8YSBocmVmPXt0b30gey4uLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57Y2hpbGRyZW59PC9hPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTmF2aWdhdGlvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vTmF2aWdhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vTmF2aWdhdGlvbi5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9PiB8IDwvc3Bhbj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9IHRvPVwiL2xvZ2luXCI+TG9nIGluPC9MaW5rPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT5vcjwvc3Bhbj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjeChzLmxpbmssIHMuaGlnaGxpZ2h0KX0gdG89XCIvcmVnaXN0ZXJcIj5TaWduIHVwPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE5hdmlnYXRpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vU2lkZWJhci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vU2lkZWJhci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9TaWRlYmFyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IERhdGFDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9EYXRhQ29udGFpbmVyJztcbmltcG9ydCBFbnRyeSBmcm9tICdjb21wb25lbnRzL0VudHJ5JztcbmltcG9ydCBFdmVudCBmcm9tICdjb21wb25lbnRzL0V2ZW50JztcbmltcG9ydCBFdmVudERhdGEgZnJvbSAnY29tcG9uZW50cy9FdmVudERhdGEnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZWJhci5jc3MnO1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dfZXZlbnRzOiBmYWxzZSxcbiAgICAgIHNob3dfZGF0YTogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUV2ZW50cyA9IHRoaXMudG9nZ2xlRXZlbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEYXRhID0gdGhpcy50b2dnbGVEYXRhLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVmKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlZih1bmRlZmluZWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldmljZXN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cnlfY29udGFpbmVyfT57dGhpcy5nZXREZXZpY2VzKCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZXZlbnRzLCB7IFtzdHlsZXMuYWN0aXZlXTogdGhpcy5zdGF0ZS5zaG93X2V2ZW50cyB9KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgPHA+RXZlbnRzPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17KCkgPT4ge3RoaXMudG9nZ2xlRXZlbnRzKGZhbHNlKX19PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGFpbmVyfSA+e3RoaXMuZ2V0RXZlbnRzKCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGF0YUNvbnRhaW5lclxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2hvd19kYXRhfVxuICAgICAgICAgIGV2ZW50c192aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dfZXZlbnRzfVxuICAgICAgICAgIGV2ZW50PXsodGhpcy5wcm9wcy5ldmVudHMgJiYgdGhpcy5wcm9wcy5jdXJfZGV2aWNlKSA/IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMucHJvcHMuY3VyX2RldmljZV1bdGhpcy5wcm9wcy5jdXJfZXZlbnRdIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRldmljZV9pZD17dGhpcy5wcm9wcy5jdXJfZGV2aWNlfVxuICAgICAgICAgIGV2ZW50X2lkPXt0aGlzLnByb3BzLmN1cl9ldmVudH1cbiAgICAgICAgICB0b2dnbGVEYXRhPXt0aGlzLnRvZ2dsZURhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXREZXZpY2VzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmdfZGV2aWNlcylcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZWhvbGRlcn0+XG4gICAgICAgIDxoMj5Mb2FkaW5nIERldmljZXM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwaW5uZXJ9PjwvZGl2PlxuICAgICAgPC9kaXY+KTtcblxuICAgIHZhciBkZXZpY2VzID0gdGhpcy5wcm9wcy5kZXZpY2VzO1xuICAgIGlmICghZGV2aWNlcykgcmV0dXJuO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRldmljZXMpLm1hcCgoaykgPT4ge1xuICAgICAgY29uc3QgZGV2aWNlID0gZGV2aWNlc1trXTtcbiAgICAgIHJldHVybiA8RW50cnkgXG4gICAgICAgIGtleT17a31cbiAgICAgICAgaWQ9e2t9XG4gICAgICAgIG5hbWU9e2RldmljZS5uYW1lfVxuICAgICAgICBsYXRlc3Q9e2RldmljZS5sYXRlc3R9XG4gICAgICAgIGN1cnJlbnQ9eyh0aGlzLnByb3BzLmN1cl9kZXZpY2UgPT0gayAmJiB0aGlzLnN0YXRlLnNob3dfZXZlbnRzKX1cbiAgICAgICAgdG9nZ2xlRXZlbnRzPXt0aGlzLnRvZ2dsZUV2ZW50c31cbiAgICAgICAgc2V0Q3VyRGV2aWNlPXt0aGlzLnByb3BzLnNldEN1ckRldmljZX1cbiAgICAgICAgc2V0RGV2aWNlQWxlcnQ9e3RoaXMucHJvcHMuc2V0RGV2aWNlQWxlcnR9XG4gICAgICAgIHZpZXdTdHJlYW09e3RoaXMucHJvcHMudmlld1N0cmVhbX1cbiAgICAgIC8+XG4gICAgfSk7XG4gIH1cblxuICBnZXRFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHM7XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5wcm9wcy5jdXJfZGV2aWNlO1xuXG4gICAgaWYgKCFkZXZpY2UpIHJldHVybjtcblxuICAgIGlmICghZXZlbnRzW2RldmljZV0gfHwgT2JqZWN0LmtleXMoZXZlbnRzW2RldmljZV0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhY2Vob2xkZXJ9PlxuICAgICAgICA8aDI+Tm8gTmV3IEV2ZW50czwvaDI+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhldmVudHNbZGV2aWNlXSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGV2ZW50c1tkZXZpY2VdW2JdLmNyZWF0ZWRfYXQpIC0gbmV3IERhdGUoZXZlbnRzW2RldmljZV1bYV0uY3JlYXRlZF9hdCk7XG4gICAgfSkubWFwKChrKSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tkZXZpY2VdW2tdO1xuICAgICAgcmV0dXJuIDxFdmVudCBcbiAgICAgICAga2V5PXtrfVxuICAgICAgICBpZD17a31cbiAgICAgICAgdGltZT17ZXZlbnQucmVwb3J0ZWRfYXR9XG4gICAgICAgIHNlZW49e2V2ZW50LnNlZW59XG4gICAgICAgIHR5cGU9e2V2ZW50LnNlcnZpY2VfbmFtZX1cbiAgICAgICAgZGV2aWNlX2lkPXtkZXZpY2V9XG4gICAgICAgIHNldEN1ckV2ZW50PXt0aGlzLnByb3BzLnNldEN1ckV2ZW50fVxuICAgICAgICB0b2dnbGVEYXRhPXt0aGlzLnRvZ2dsZURhdGF9XG4gICAgICAgIHNldEV2ZW50U2Vlbj17dGhpcy5wcm9wcy5zZXRFdmVudFNlZW59XG4gICAgICAvPlxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRXZlbnRzKHM9dHJ1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2V2ZW50czogcyB9KTtcbiAgICBpZiAoIXMpIHRoaXMuc2V0U3RhdGUoe3Nob3dfZGF0YTogZmFsc2V9KTtcbiAgfVxuXG4gIHRvZ2dsZURhdGEocz10cnVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfZGF0YTogcyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lkZWJhcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbi8vIE5hdmlnYXRpb24gbWFuYWdlciwgZS5nLiBoaXN0b3J5LnB1c2goJy9ob21lJylcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tamFja3Nvbi9oaXN0b3J5XG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5CUk9XU0VSICYmIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hpc3RvcnkuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hvbWUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vSG9tZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2hvbWUvSG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3JvdXRlcy9ob21lL0hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QtYWRkb25zLXVwZGF0ZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHtFVkVOVF9VUERBVEVfTUlMTElTLCBFVkVOVF9SRUNFTlRfV0lORE9XfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHt3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlcn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbi8vIGltcG9ydCBqc21wZWcgZnJvbSAnanNtcGVnJztcblxuaW1wb3J0IFNpZGViYXIgZnJvbSAnY29tcG9uZW50cy9TaWRlYmFyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hvbWUuY3NzJztcbmltcG9ydCBtYXJrZXIgZnJvbSAnLi9tYXJrZXIucG5nJztcbmltcG9ydCBtYXJrZXJBbGVydCBmcm9tICcuL21hcmtlci1hbGVydC5wbmcnO1xuXG5jb25zdCBEZXZpY2VNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcbiAgPEdvb2dsZU1hcFxuICAgIGRlZmF1bHRab29tPXs4fVxuICAgIGNlbnRlcj17cHJvcHMuY2VudGVyfT5cbiAgICB7cHJvcHMubWFya2Vycy5tYXAobWFya2VyID0+IChcbiAgICAgIDxNYXJrZXIgey4uLm1hcmtlcn0gb25DbGljaz17KCkgPT4gcHJvcHMub25NYXJrZXJDbGljayhtYXJrZXIpfS8+XG4gICAgKSl9XG4gIDwvR29vZ2xlTWFwPlxuKSk7XG5cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZXZpY2VzOiB7fSxcbiAgICAgIGV2ZW50czoge30sXG4gICAgICBsb2FkaW5nX2RldmljZXM6IHRydWUsXG4gICAgICBjdXJfZGV2aWNlOiBudWxsLFxuICAgICAgY3VyX2V2ZW50OiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5sYXRlc3RFdmVudCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkgLSBFVkVOVF9SRUNFTlRfV0lORE9XKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxOSkucmVwbGFjZSgnVCcsICcgJyk7IC8vJzIwMTctMDYtMzAgMTY6NTY6NTQnO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEZXZpY2VzKCgpID0+IHtcbiAgICAgIHRoaXMuZmV0Y2hFdmVudHModHJ1ZSk7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmV0Y2hFdmVudHMoKVxuICAgICAgfSwgRVZFTlRfVVBEQVRFX01JTExJUyk7XG4gICAgfSk7XG4gICAgLy8gdmFyIGN0eCA9IHRoaXMuc3RyZWFtZXIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJyMzNGUnO1xuICAgIC8vIGN0eC5maWxsVGV4dCgnTG9hZGluZy4uLicsIHRoaXMuc3RyZWFtZXIud2lkdGgvMi0zMCwgdGhpcy5zdHJlYW1lci5oZWlnaHQvMyk7XG5cbiAgICAvLyAvLyBTZXR1cCB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gYW5kIHN0YXJ0IHRoZSBwbGF5ZXJcbiAgICAvLyB2YXIgY2xpZW50ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8ke0FERFJFU1N9LycpO1xuICAgIC8vIHZhciBwbGF5ZXIgPSBuZXcganNtcGVnKGNsaWVudCwge2NhbnZhczp0aGlzLnN0cmVhbWVyfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgIG9uUmVmPXtyZWYgPT4geyB0aGlzLnNpZGViYXIgPSByZWYgfX1cbiAgICAgICAgICAgIGV2ZW50cz17dGhpcy5zdGF0ZS5ldmVudHN9XG4gICAgICAgICAgICBkZXZpY2VzPXt0aGlzLnN0YXRlLmRldmljZXN9XG4gICAgICAgICAgICBjdXJfZXZlbnQ9e3RoaXMuc3RhdGUuY3VyX2V2ZW50fVxuICAgICAgICAgICAgY3VyX2RldmljZT17dGhpcy5zdGF0ZS5jdXJfZGV2aWNlfVxuICAgICAgICAgICAgc2V0RGV2aWNlQWxlcnQ9e3RoaXMuc2V0RGV2aWNlQWxlcnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNldEV2ZW50U2Vlbj17dGhpcy5zZXRFdmVudFNlZW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNldEN1ckRldmljZT17dGhpcy5zZXRDdXJEZXZpY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNldEN1ckV2ZW50PXt0aGlzLnNldEN1ckV2ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBsb2FkaW5nX2RldmljZXM9e3RoaXMuc3RhdGUubG9hZGluZ19kZXZpY2VzfVxuICAgICAgICAgICAgdmlld1N0cmVhbT17KCkgPT4gdGhpcy50b2dnbGVTdHJlYW0odHJ1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGV2aWNlTWFwXG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50PXs8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWAsIGZsZXg6ICcxJ319IC8+fVxuICAgICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17e2hlaWdodDogYDEwMCVgfX0gLz59XG4gICAgICAgICAgICBvbk1hcmtlckNsaWNrPXt0aGlzLmhhbmRsZU1hcmtlckNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBjZW50ZXI9e3RoaXMuc3RhdGUuY3VyX2RldmljZSA/IHRoaXMuc3RhdGUuZGV2aWNlc1t0aGlzLnN0YXRlLmN1cl9kZXZpY2VdLmxvY2F0aW9uIDoge2xhdDogMzMsIGxuZzogLTg0fX1cbiAgICAgICAgICAgIG1hcmtlcnM9e3RoaXMubWFwTWFya2VycygpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zdHJlYW0sIHtbc3R5bGVzLmFjdGl2ZV06IHRoaXMuc3RhdGUuc3RyZWFtfSl9PlxuICAvLyAgICAgICAgICAgey8qSDI2NCBTVFJFQU0gSEVSRVxuICAvLyAgICAgICAgICAgICBJdCBzaG91bGQgd29yayBpZiB5b3UganVzdCBhc3NvY2lhdGUgYSBsaW5rIGludG8gZGV2aWNlLnN0cmVhbVxuICAvLyAgICAgICAgICAgICBJZiBpdCdzIGFuIEFQSSBjYWxsLCBob3dldmVyLCBzZWUgU2VydmVyLmpzOjg4IGFuZCBEYXRhQ29udGFpbmVyLmpzOjM0Ki99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZVN0cmVhbShmYWxzZSl9PjwvZGl2PlxuICAvLyAgICAgICAgICAgPGNhbnZhcyByZWY9e3JlZj0+e3RoaXMuc3RyZWFtZXIgPSByZWZ9fSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cbiAgLy8gICAgICAgICAgICAgPHA+XG4gIC8vICAgICAgICAgICAgICAgUGxlYXNlIHVzZSBhIGJyb3dzZXIgdGhhdCBzdXBwb3J0cyB0aGUgQ2FudmFzIEVsZW1lbnQsIGxpa2VcbiAgLy8gICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5nb29nbGUuY29tL2Nocm9tZVwiPkNocm9tZTwvYT4sXG4gIC8vICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubW96aWxsYS5jb20vZmlyZWZveC9cIj5GaXJlZm94PC9hPixcbiAgLy8gICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5hcHBsZS5jb20vc2FmYXJpL1wiPlNhZmFyaTwvYT4gb3IgSW50ZXJuZXQgRXhwbG9yZXIgMTBcbiAgLy8gICAgICAgICAgICAgPC9wPlxuICAvLyAgICAgICAgICAgPC9jYW52YXM+XG4gIC8vICAgICAgICAgPC9kaXY+XG5cbiAgZmV0Y2hEZXZpY2VzKHBvc3RGdW5jLCBhdHRlbXB0PTApIHtcbiAgICBpZiAoYXR0ZW1wdCA9PT0gNSkge1xuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gZmV0Y2ggZGV2aWNlc1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmV0Y2goXCJodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2xpc3RfdXNlcl9kZXZpY2VzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIiwgXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCYXNpYyBcIiArIGJ0b2EoXCJiNGVkMjE4ZS0wZWY2LTRjMGEtYjdlMy1hYzg2ZTZlZGZmYjI6bWFrZV9hbWVyaWNhX2dyZWF0X2FnYWluXCIpLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJGZXRjaCBFcnJvclwiKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdfZGV2aWNlczogZmFsc2UgfSk7XG4gICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKGRldmljZSA9PiB7XG4gICAgICAgIGlmICghKGRldmljZVswXSBpbiB0aGlzLnN0YXRlLmRldmljZXMpKVxuICAgICAgICAgIHRoaXMuYWRkRGV2aWNlKGRldmljZVswXSwgT2JqZWN0LmFzc2lnbihkZXZpY2VbMV0sIFxuICAgICAgICAgICAge2xvY2F0aW9uOiB0aGlzLnBhcnNlTG9jYXRpb24oZGV2aWNlWzFdLmxvY2F0aW9uKX0pKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHBvc3RGdW5jKSBwb3N0RnVuYygpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZldGNoRGV2aWNlcyhwb3N0ZnVuYywgYXR0ZW1wdCArIDEpLCBhdHRlbXB0ICogYXR0ZW1wdCAqIDMwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hFdmVudHMoaXNJbml0aWFsPWZhbHNlKSB7XG4gICAgZmV0Y2goXCJodHRwOi8vYmFja2VuZC5jZW50cmVlLnh5ejo1MDAwL2xpc3RfbmV3X2V2ZW50c1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJhc2ljIFwiICsgYnRvYShcImI0ZWQyMThlLTBlZjYtNGMwYS1iN2UzLWFjODZlNmVkZmZiMjptYWtlX2FtZXJpY2FfZ3JlYXRfYWdhaW5cIiksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidGltZXN0YW1wXCIgOiB0aGlzLmxhdGVzdEV2ZW50XG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJGZXRjaCBFcnJvclwiKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5sYXRlc3RFdmVudCA9IGRhdGEubW9zdF9yZWNlbnRfZXZlbnRfdGltZXN0YW1wIHx8IHRoaXMubGF0ZXN0RXZlbnQ7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZXZlbnRzKS5mb3JFYWNoKGRldmljZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kZXZpY2VzW2RldmljZVswXV0pXG4gICAgICAgICAgdGhpcy5mZXRjaERldmljZXMoKTtcblxuICAgICAgICBpZiAoIWlzSW5pdGlhbCAmJiB0aGlzLnNpZGViYXIuc3RhdGUuY3VyX2RldmljZSAhPT0gZGV2aWNlWzBdICYmICF0aGlzLnNpZGViYXIuc3RhdGUuc2hvd19ldmVudHMpXG4gICAgICAgICAgdGhpcy5hbGVydE1hcmtlcihkZXZpY2VbMF0pO1xuXG4gICAgICAgIHRoaXMuc2V0RGV2aWNlTGF0ZXN0KGRldmljZVswXSwgdGhpcy5sYXRlc3RFdmVudCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gZGV2aWNlWzFdO1xuICAgICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnRfaWQgPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50X2lkXTtcbiAgICAgICAgICBldmVudC5zZWVuID0gaXNJbml0aWFsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50cyhkZXZpY2VbMF0sIGV2ZW50cyk7XG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpXG4gICAgLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZmV0Y2ggZXZlbnRzXCIpXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVTdHJlYW0odmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RyZWFtOiB2YWx9KTtcbiAgfVxuXG4gIG1hcE1hcmtlcnMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUuZGV2aWNlcykubWFwKGRldmljZSA9PiAoe1xuICAgICAga2V5OiBkZXZpY2VbMF0sXG4gICAgICBwb3NpdGlvbjogZGV2aWNlWzFdLmxvY2F0aW9uLFxuICAgICAgaWNvbjogdGhpcy5zdGF0ZS5kZXZpY2VzW2RldmljZVswXV0uYWxlcnRlZCA/IG1hcmtlckFsZXJ0IDogbWFya2VyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHBhcnNlTG9jYXRpb24obG9jc3RyaW5nKSB7XG4gICAgdmFyIGxhdGxuZyA9IGxvY3N0cmluZy5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB7bGF0OiBwYXJzZUZsb2F0KGxhdGxuZ1swXSksIGxuZzogcGFyc2VGbG9hdChsYXRsbmdbMV0pfVxuICB9XG5cbiAgaGFuZGxlTWFya2VyQ2xpY2sodGFyZ2V0KSB7XG4gICAgdGhpcy5zZXREZXZpY2VBbGVydCh0YXJnZXQua2V5LCBmYWxzZSk7XG4gICAgdGhpcy5zZXRDdXJEZXZpY2UodGFyZ2V0LmtleSlcbiAgICB0aGlzLnNpZGViYXIudG9nZ2xlRXZlbnRzKCk7XG4gIH1cblxuICBzZXRDdXJEZXZpY2UoZGV2aWNlKSB7XG4gICAgY29uc29sZS5sb2coZGV2aWNlKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJfZGV2aWNlOiBkZXZpY2UgfSk7XG4gIH1cblxuICBzZXRDdXJFdmVudChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJfZXZlbnQ6IGV2ZW50IH0pO1xuICB9XG5cbiAgc2V0RXZlbnRTZWVuKGV2ZW50X2lkLCBkZXZpY2VfaWQsIHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldiA9PiB7XG4gICAgICByZXR1cm4gdXBkYXRlKHByZXYsIHtcbiAgICAgICAgZXZlbnRzOiB7W2RldmljZV9pZF06IHtbZXZlbnRfaWRdOiB7c2VlbjogeyRzZXQ6IHZhbH19fX1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGV2aWNlQWxlcnQoZGV2aWNlX2lkLCB2YWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgcmV0dXJuIHVwZGF0ZShwcmV2LCB7XG4gICAgICAgIGRldmljZXM6IHtbZGV2aWNlX2lkXToge2FsZXJ0ZWQ6IHskc2V0OiB2YWx9fX1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRGV2aWNlKGRldmljZV9pZCwgZGV2aWNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIHJldHVybiB1cGRhdGUocHJldiwge1xuICAgICAgICBkZXZpY2VzOiB7W2RldmljZV9pZF06IHskc2V0OiBkZXZpY2V9fSxcbiAgICAgICAgZXZlbnRzOiB7W2RldmljZV9pZF06IHskc2V0OiB7fX19XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldERldmljZUxhdGVzdChkZXZpY2VfaWQsIGxhdGVzdCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldiA9PiB1cGRhdGUocHJldiwge1xuICAgICAgZGV2aWNlczoge1tkZXZpY2VfaWRdOiB7JG1lcmdlOiB7bGF0ZXN0OiBsYXRlc3R9fX1cbiAgICB9KSlcbiAgfVxuXG4gIGFkZEV2ZW50cyhkZXZpY2VfaWQsIGV2ZW50cykge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldiA9PiB7XG4gICAgICByZXR1cm4gdXBkYXRlKHByZXYsIHtcbiAgICAgICAgZXZlbnRzOiB7W2RldmljZV9pZF06IHskbWVyZ2U6IGV2ZW50c319XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBmZXRjaCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2hvbWUnXSxcbiAgICB0aXRsZTogJ1NtYXJ0QmxvYycsXG4gICAgY29tcG9uZW50OiA8TGF5b3V0PjxIb21lLz48L0xheW91dD4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2hvbWUvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9zcmMvcm91dGVzL2hvbWUvbWFya2VyLWFsZXJ0LnBuZz8zMzkzMjUyNlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9ob21lL21hcmtlci1hbGVydC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3JvdXRlcy9ob21lL21hcmtlci1hbGVydC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvc3JjL3JvdXRlcy9ob21lL21hcmtlci5wbmc/ZjIxOTVhYzdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvaG9tZS9tYXJrZXIucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9yb3V0ZXMvaG9tZS9tYXJrZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUVBO0FBQ0E7QUE0RUE7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFXQTtBQTVCQTtBQUNBO0FBOEJBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUEyQkE7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUxBO0FBY0E7QUFDQTtBQTNCQTtBQUNBO0FBK0JBOzs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBTEE7QUFEQTtBQWdCQTtBQW5CQTtBQUNBO0FBcUJBOzs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEvQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUEyQkE7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQVpBO0FBQ0E7QUFjQTs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzR0E7QUFDQTtBQTZHQTs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBREE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXJOQTtBQUNBO0FBdU5BOzs7Ozs7Ozs7Ozs7Ozs7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQVBBOzs7Ozs7O0FBYkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Ozs7Ozs7QUNyQkE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9