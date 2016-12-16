/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)
	
	__weex_define__('@weex-component/2db5b02b2b2467ace4cdd68021452568', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/2db5b02b2b2467ace4cdd68021452568',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "hd"
	      ],
	      "attr": {
	        "value": "Weex-Percentage-Circle"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "weex-percentage-circle",
	          "attr": {
	            "borderwidth": "2",
	            "color": "#1ba1e2",
	            "percent": "30",
	            "radius": "100"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "weex-percentage-circle",
	          "attr": {
	            "borderwidth": "2",
	            "color": "#000",
	            "percent": "80",
	            "radius": "100"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "weex-percentage-circle",
	          "attr": {
	            "borderwidth": "5",
	            "color": "#e74c3c",
	            "percent": "100",
	            "radius": "60"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignSelf": "center",
	    "alignItems": "center"
	  },
	  "hd": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "fontSize": 22
	  },
	  "item": {
	    "flex": 1,
	    "marginBottom": 20
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    message: 'Welcome to Use Weexpack!',
	    quotes: 'A Tool Help To Build WEEX Faster'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../vcdemo/node_modules/weex-loader/lib/script.js!babel-loader?presets[]=/Users/ali-130257n/www/weex-percentage-circle/vcdemo/node_modules/babel-preset-es2015&presets=/Users/ali-130257n/www/weex-percentage-circle/vcdemo/node_modules/babel-preset-es2015&plugins[]=/Users/ali-130257n/www/weex-percentage-circle/vcdemo/node_modules/babel-plugin-transform-runtime&plugins=/Users/ali-130257n/www/weex-percentage-circle/vcdemo/node_modules/babel-plugin-transform-runtime&comments=false!./../vcdemo/node_modules/weex-loader/lib/extract.js?index=0&type=scripts!./weex-percentage-circle.we\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	__weex_define__('@weex-component/weex-percentage-circle', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "circle"
	  ],
	  "style": {
	    "width": function () {return this.radius*2},
	    "height": function () {return this.radius*2},
	    "borderRadius": function () {return this.radius}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left-wrap"
	      ],
	      "style": {
	        "width": function () {return this.radius},
	        "height": function () {return this.radius*2},
	        "left": 0
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "loader"
	          ],
	          "id": "id1",
	          "style": {
	            "left": function () {return this.radius},
	            "width": function () {return this.radius},
	            "height": function () {return this.radius*2},
	            "borderTopLeftRadius": 0,
	            "borderBottomLeftRadius": 0,
	            "backgroundColor": function () {return this.color}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "right-wrap"
	      ],
	      "style": {
	        "width": function () {return this.radius},
	        "height": function () {return this.radius*2},
	        "left": function () {return this.radius}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "loader"
	          ],
	          "id": "id2",
	          "style": {
	            "left": function () {return -this.radius},
	            "width": function () {return this.radius},
	            "height": function () {return this.radius*2},
	            "borderTopRightRadius": 0,
	            "borderBottomRightRadius": 0,
	            "backgroundColor": function () {return this.color}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "inner-circle"
	      ],
	      "style": {
	        "width": function () {return (this.radius-this.borderWidth)*2},
	        "height": function () {return (this.radius-this.borderWidth)*2},
	        "borderRadius": function () {return this.radius-this.borderWidth},
	        "backgroundColor": "#ffffff"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "color": function () {return this.textColor}
	          },
	          "attr": {
	            "value": function () {return (this.percent) + '%'}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "circle": {
	    "overflow": "hidden",
	    "position": "relative",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#e3e3e3"
	  },
	  "left-wrap": {
	    "overflow": "hidden",
	    "position": "absolute",
	    "top": 0
	  },
	  "right-wrap": {
	    "overflow": "hidden",
	    "position": "absolute",
	    "top": 0
	  },
	  "loader": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "borderRadius": 1000
	  },
	  "loader2": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "borderRadius": 1000
	  },
	  "inner-circle": {
	    "position": "relative",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "text": {
	    "fontSize": 11,
	    "color": "#888888"
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM3YTNhYTY2NDI3MjgxYTMwM2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2ZjYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2RkZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlPzg2ZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlIiwid2VicGFjazovLy8uLi9zcmMvd2VleC1wZXJjZW50YWdlLWNpcmNsZS53ZSIsIndlYnBhY2s6Ly8vLi4vc3JjL3dlZXgtcGVyY2VudGFnZS1jaXJjbGUud2U/NzRmYyIsIndlYnBhY2s6Ly8vLi4vc3JjL3dlZXgtcGVyY2VudGFnZS1jaXJjbGUud2U/NDE4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDbUJBLHFCQUNBOzs7Y0FHQTthQUVBO0FBSEE7QUFEQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIscUJBQXFCO0FBQy9DLDRCQUEyQixxQkFBcUI7QUFDaEQsa0NBQWlDO0FBQ2pDLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixtQkFBbUI7QUFDakQsZ0NBQStCLHFCQUFxQjtBQUNwRDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLG1CQUFtQjtBQUNwRCxtQ0FBa0MsbUJBQW1CO0FBQ3JELG9DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLG1CQUFtQjtBQUNqRCxnQ0FBK0IscUJBQXFCO0FBQ3BELDhCQUE2QjtBQUM3QixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxvQkFBb0I7QUFDckQsbUNBQWtDLG1CQUFtQjtBQUNyRCxvQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4Qix3Q0FBd0M7QUFDdEUsZ0NBQStCLHdDQUF3QztBQUN2RSxzQ0FBcUMsb0NBQW9DO0FBQ3pFO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDLFlBQVc7QUFDWDtBQUNBLG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYzdhM2FhNjY0MjcyODFhMzAzZCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2FsaS0xMzAyNTduL3d3dy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlL3ZjZGVtby9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvd2VleC1wZXJjZW50YWdlLWNpcmNsZS92Y2RlbW8vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvd2VleC1wZXJjZW50YWdlLWNpcmNsZS92Y2RlbW8vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvd2VleC1wZXJjZW50YWdlLWNpcmNsZS92Y2RlbW8vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzJkYjViMDJiMmIyNDY3YWNlNGNkZDY4MDIxNDUyNTY4JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzJkYjViMDJiMmIyNDY3YWNlNGNkZDY4MDIxNDUyNTY4Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaGRcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogXCJXZWV4LVBlcmNlbnRhZ2UtQ2lyY2xlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwid2VleC1wZXJjZW50YWdlLWNpcmNsZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImJvcmRlcndpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxYmExZTJcIixcbiAgICAgICAgICAgIFwicGVyY2VudFwiOiBcIjMwXCIsXG4gICAgICAgICAgICBcInJhZGl1c1wiOiBcIjEwMFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcIndlZXgtcGVyY2VudGFnZS1jaXJjbGVcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJib3JkZXJ3aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICBcInBlcmNlbnRcIjogXCI4MFwiLFxuICAgICAgICAgICAgXCJyYWRpdXNcIjogXCIxMDBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiYm9yZGVyd2lkdGhcIjogXCI1XCIsXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2U3NGMzY1wiLFxuICAgICAgICAgICAgXCJwZXJjZW50XCI6IFwiMTAwXCIsXG4gICAgICAgICAgICBcInJhZGl1c1wiOiBcIjYwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmRleC53ZVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaGRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjAsXG4gICAgXCJmb250U2l6ZVwiOiAyMlxuICB9LFxuICBcIml0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDIwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmRleC53ZVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgPHRleHQgY2xhc3M9XCJoZFwiPldlZXgtUGVyY2VudGFnZS1DaXJjbGU8L3RleHQ+XG4gICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDx3ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlIGJvcmRlcldpZHRoPVwiMlwiIGNvbG9yPVwiIzFiYTFlMlwiIHBlcmNlbnQ9XCIzMFwiIHJhZGl1cz1cIjEwMFwiPjwvd2VleC1wZXJjZW50YWdlLWNpcmNsZT4gXG4gICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDx3ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlIGJvcmRlcldpZHRoPVwiMlwiIGNvbG9yPVwiIzAwMFwiIHBlcmNlbnQ9XCI4MFwiIHJhZGl1cz1cIjEwMFwiPjwvd2VleC1wZXJjZW50YWdlLWNpcmNsZT4gXG4gICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDx3ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlIGJvcmRlcldpZHRoPVwiNVwiIGNvbG9yPVwiI2U3NGMzY1wiIHBlcmNlbnQ9XCIxMDBcIiByYWRpdXM9XCI2MFwiPjwvd2VleC1wZXJjZW50YWdlLWNpcmNsZT4gXG4gICAgIDwvZGl2PlxuICAgICBcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZHtcbiAgICBwYWRkaW5nLXRvcDoyMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjA7XG4gICAgZm9udC1zaXplOiAyMjtcbiAgfVxuICAuaXRlbXtcbiAgICBmbGV4OjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIHJlcXVpcmUoJy4uLy4uL3NyYy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlLndlJylcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgdG8gVXNlIFdlZXhwYWNrIScsXG4gICAgICBxdW90ZXM6ICdBIFRvb2wgSGVscCBUbyBCdWlsZCBXRUVYIEZhc3RlcicsXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC53ZT8zOGIyMDk4NSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vdmNkZW1vL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL3ZjZGVtby9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vdmNkZW1vL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd2VleC1wZXJjZW50YWdlLWNpcmNsZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi92Y2RlbW8vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vdmNkZW1vL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi92Y2RlbW8vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi92Y2RlbW8vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L3dlZXgtcGVyY2VudGFnZS1jaXJjbGUvdmNkZW1vL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlL3ZjZGVtby9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109L1VzZXJzL2FsaS0xMzAyNTduL3d3dy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlL3ZjZGVtby9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlL3ZjZGVtby9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vdmNkZW1vL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3dlZXgtcGVyY2VudGFnZS1jaXJjbGUud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd2VleC1wZXJjZW50YWdlLWNpcmNsZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL3dlZXgtcGVyY2VudGFnZS1jaXJjbGUud2Vcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjaXJjbGVcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcIndpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXMqMn0sXG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhZGl1cyoyfSxcbiAgICBcImJvcmRlclJhZGl1c1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFkaXVzfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIndpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXN9LFxuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFkaXVzKjJ9LFxuICAgICAgICBcImxlZnRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsb2FkZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpZFwiOiBcImlkMVwiLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJsZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXN9LFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFkaXVzfSxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXMqMn0sXG4gICAgICAgICAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogMCxcbiAgICAgICAgICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiAwLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtd3JhcFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwid2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhZGl1c30sXG4gICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXMqMn0sXG4gICAgICAgIFwibGVmdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFkaXVzfVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsb2FkZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpZFwiOiBcImlkMlwiLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJsZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gLXRoaXMucmFkaXVzfSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhZGl1c30sXG4gICAgICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFkaXVzKjJ9LFxuICAgICAgICAgICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiAwLFxuICAgICAgICAgICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiAwLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5uZXItY2lyY2xlXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnJhZGl1cy10aGlzLmJvcmRlcldpZHRoKSoyfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5yYWRpdXMtdGhpcy5ib3JkZXJXaWR0aCkqMn0sXG4gICAgICAgIFwiYm9yZGVyUmFkaXVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYWRpdXMtdGhpcy5ib3JkZXJXaWR0aH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0Q29sb3J9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnBlcmNlbnQpICsgJyUnfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4uL3NyYy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlLndlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNpcmNsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlM2UzZTNcIlxuICB9LFxuICBcImxlZnQtd3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDBcbiAgfSxcbiAgXCJyaWdodC13cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMFxuICB9LFxuICBcImxvYWRlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDAwXG4gIH0sXG4gIFwibG9hZGVyMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDAwXG4gIH0sXG4gIFwiaW5uZXItY2lyY2xlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDExLFxuICAgIFwiY29sb3JcIjogXCIjODg4ODg4XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4uL3NyYy93ZWV4LXBlcmNlbnRhZ2UtY2lyY2xlLndlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=