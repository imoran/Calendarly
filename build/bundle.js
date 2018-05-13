/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/homepage */ \"./src/script/homepage/homepage.js\");\n\nconst root = document.getElementById('root');\n\nroot.appendChild(Object(_homepage_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack:///./src/script/app.js?");

/***/ }),

/***/ "./src/script/calendar/available.js":
/*!******************************************!*\
  !*** ./src/script/calendar/available.js ***!
  \******************************************/
/*! exports provided: confirmTime, availableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmTime\", function() { return confirmTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"availableTime\", function() { return availableTime; });\nconst times = {\n\t8: '8:00 AM',\n\t9: '9:00 AM',\n\t10: '10:00 AM',\n\t11: '11:00 AM',\n\t12: '12:00 PM',\n\t13: '1:00 PM',\n\t14: '2:00 PM',\n\t15: '3:00 PM',\n\t16: '4:00 PM',\n\t17: '5:00 PM'\n};\n\nconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n\t\"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\nconst SERVICES = [  \"Computer Support\",\n  \t\t\t\t\t\t\t\t\t\"Printer Setup\",\n  \t\t\t\t\t\t\t\t\t\"Wifi Solution\",\n  \t\t\t\t\t\t\t\t\t\"Virus Removal\",\n  \t\t\t\t\t\t\t\t\t\"Electronic Setup\",\n  \t\t\t\t\t\t\t\t\t\"PC Tune-Up\",\n  \t\t\t\t\t\t\t\t\t\"Data Backup\"\n\t\t\t\t\t\t\t\t\t];\n\nconst currentDate = new Date();\nconst currentYear = currentDate.getFullYear();\nconst currentMonth = currentDate.getMonth();\nconst currentHour = currentDate.getHours();\nvar confirmTime = '';\n\nconst availableTime = (date) => {\n\tlet parent = document.createElement('ul');\n\tparent.classList.add(\"modal-Time\");\n\tlet c = currentDate.getDate();\n\n\t// console.log(\"currentHour \", currentHour);\n\tfor (var i = 8; i < 18; i++) {\n\t\tif((c == date && currentHour < i) || (c < date)) {\n\t\t\tlet li = document.createElement('li');\n\t\t\tlet text = document.createTextNode(times[i]);\n\t\t\tli.appendChild(text);\n\t\t\tli.onclick = function() {\n\t\t\t\tconst ul = document.getElementsByClassName('modal-Time')[0];\n\t\t\t\tul.childNodes.forEach(l => {\n\t\t\t\t\tl.removeAttribute(\"id\");\n\t\t\t\t});\n\t\t\t\tli.setAttribute('id', 'modal-Time-color');\n\t\t\t\tlet time = li.innerHTML;\n\t\t\t\tlet service = document.getElementsByTagName('select')[0].selectedIndex;\n\t\t\t\tconfirmTime = `You made an appointment for ${SERVICES[service]} ${monthNames[currentMonth]} ${date}, ${currentYear} at ${time}.`;\n\t\t\t};\n\t\t\tparent.appendChild(li);\n\t\t}\n\t}\n\treturn parent;\n};\n\n\n//# sourceURL=webpack:///./src/script/calendar/available.js?");

/***/ }),

/***/ "./src/script/calendar/calendar.js":
/*!*****************************************!*\
  !*** ./src/script/calendar/calendar.js ***!
  \*****************************************/
/*! exports provided: calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calendar\", function() { return calendar; });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/script/calendar/modal.js\");\n/* harmony import */ var _homepage_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homepage/header */ \"./src/script/homepage/header.js\");\n/* harmony import */ var _homepage_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../homepage/footer */ \"./src/script/homepage/footer.js\");\n\n\n\n\n\nconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n\t\"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nconst now = new Date();\nvar currentDate = new Date();\nvar currentYear = currentDate.getFullYear();\nvar currentMonth = currentDate.getMonth();\nvar daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();\nvar daysCounter = 1;\n\nconst createCell = () => {\n\tlet newDate = new Date(`${currentYear} ${currentMonth + 1} ${1} 23:59`);\n\tlet tr = document.createElement('tr');\n\tfor (let i = 0; i < 7; i++) {\n\t\tnewDate.setDate(daysCounter);\n\t\tlet newWeekDay = newDate.getDay();\n\t\tlet td = document.createElement('td');\n\t\ttd.style.background = '#EEE';\n\t\tif ( newWeekDay === i && daysCounter <= daysInMonth) {\n\t\t\tlet text = document.createTextNode(newDate.getDate());\n\t\t\ttd.appendChild(text);\n\t\t\tif (newDate > now) {\n\t\t\t\ttd.style.background = 'none';\n\t\t\t\ttd.onclick = function() {\n\t\t\t\t\tlet date = td.innerHTML;\n\t\t\t\t\tlet myModal = document.getElementById('myModal');\n\t\t\t\t\tif (myModal) {\n\t\t\t\t\t\tmyModal.remove();\n\t\t\t\t\t}\n\t\t\t\t\troot.appendChild(Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date));\n\t\t\t\t};\n\t\t\t}\n\t\t\tdaysCounter++;\n\t\t}\n\t\ttr.appendChild(td);\n\t}\n\treturn tr;\n};\n\nconst calendarTableHeader = () => {\n\tlet trHeader = document.createElement('tr');\n\tlet weekArr = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n\tfor (let i = 0; i < weekArr.length; i++) {\n\t\tlet th = document.createElement('th');\n\t\tlet text = document.createTextNode(weekArr[i]);\n\t\tth.appendChild(text);\n\t\ttrHeader.appendChild(th);\n\t}\n\treturn trHeader;\n};\n\nconst nextMonth = () => {\n\tconst next = document.createElement('p');\n\tconst text = document.createTextNode(\"Next Month\");\n\tnext.appendChild(text);\n\tnext.onclick = () => {\n\t\tlet temp = new Date(`${currentYear} ${currentMonth + 2} ${1}`);\n\t\tif (temp.getMonth() == now.getMonth()) {\n\t\t\tcurrentDate = now;\n\t\t} else if (temp.getMonth() < now.getMonth()) {\n\t\t\tcurrentYear = temp.getFullYear();\n\t\t\tcurrentMonth = temp.getMonth();\n\t\t\tdaysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();\n\t\t\tcurrentDate = new Date(`${currentYear} ${currentMonth + 1} ${daysInMonth} 23:59`);\n\t\t} else {\n\t\t\tcurrentDate = temp;\n\t\t}\n\t\tcurrentYear = currentDate.getFullYear();\n\t\tcurrentMonth = currentDate.getMonth();\n\t\tdaysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();\n\t\tdaysCounter = 1;\n\t\twhile (root.firstChild) {\n\t\t\troot.removeChild(root.firstChild);\n\t\t}\n\t\troot.appendChild(calendar());\n\t};\n\treturn next;\n};\n\nconst previousMonth = () => {\n\tconst previous = document.createElement('p');\n\tconst text = document.createTextNode(\"Previous Month\");\n\tprevious.appendChild(text);\n\tprevious.onclick = () => {\n\t\tvar temp = new Date(`${currentYear} ${currentMonth} ${1}`);\n\t\tvar now = new Date();\n\t\tif (temp.getMonth() == now.getMonth()) {\n\t\t\tcurrentDate = now;\n\t\t} else if (temp.getMonth() < now.getMonth()) {\n\t\t\tcurrentYear = temp.getFullYear();\n\t\t\tcurrentMonth = temp.getMonth();\n\t\t\tdaysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();\n\t\t\tcurrentDate = new Date(`${currentYear} ${currentMonth + 1} ${daysInMonth} 23:59`);\n\t\t} else {\n\t\t\tcurrentDate = temp;\n\t\t}\n\t\tcurrentYear = currentDate.getFullYear();\n\t\tcurrentMonth = currentDate.getMonth();\n\t\tdaysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();\n\t\tdaysCounter = 1;\n\t\twhile (root.firstChild) {\n\t\t\troot.removeChild(root.firstChild);\n\t\t}\n\t\troot.appendChild(calendar());\n\t};\n\treturn previous;\n};\n\nconst createCalendar = () => {\n\tconst parentDiv = document.createElement('div');\n\tconst topHeader = document.createElement('div');\n\tconst month = document.createElement('h1');\n\tconst table = document.createElement('table');\n\tconst monthYear = `${monthNames[currentMonth]} ${currentYear}`;\n\ttable.setAttribute('id', 'calendar-table');\n\tparentDiv.setAttribute('id', 'calendar-container');\n\ttopHeader.setAttribute('id', 'calendar-top-header');\n\ttopHeader.appendChild(previousMonth());\n\tmonth.append(monthYear);\n\ttopHeader.appendChild(month);\n\ttopHeader.appendChild(nextMonth());\n\tparentDiv.appendChild(topHeader);\n\ttable.appendChild(calendarTableHeader());\n\tfor (let j = 0; j < 5; j++) {\n\t\ttable.appendChild(createCell());\n\t}\n\tparentDiv.appendChild(table);\n\treturn parentDiv;\n};\n\nconst calendar = () => {\n\tconst parentDiv = document.createElement('div');\n\tparentDiv.appendChild(Object(_homepage_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\tparentDiv.appendChild(createCalendar());\n\tparentDiv.appendChild(Object(_homepage_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\treturn parentDiv;\n};\n\n\n//# sourceURL=webpack:///./src/script/calendar/calendar.js?");

/***/ }),

/***/ "./src/script/calendar/modal.js":
/*!**************************************!*\
  !*** ./src/script/calendar/modal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _available__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available */ \"./src/script/calendar/available.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ \"./src/script/calendar/service.js\");\n\n\n\n\n\nconst modal = (date) => {\n\tconst parentModal = document.createElement('div');\n\tconst modalCenter = document.createElement('div');\n\tconst modalContent = document.createElement('div');\n\tconst modalHeader = document.createElement('div');\n\n\tconst modalClose = document.createElement('img');\n\tconst modalHeaderH2 = document.createElement('p');\n\tconst p = document.createTextNode(\"Please Select a Time\");\n\n\tparentModal.setAttribute('id', 'myModal');\n\tparentModal.setAttribute('class', 'modal');\n\tmodalClose.setAttribute('class', 'modal-close');\n\tmodalClose.setAttribute('src', './src/image/close.png');\n\tmodalCenter.setAttribute('class', 'modal-center');\n\tmodalContent.setAttribute('class', 'modal-content');\n\tmodalHeader.setAttribute('class', 'modal-header');\n\tmodalHeaderH2.appendChild(p);\n\tmodalHeader.appendChild(modalClose);\n\tmodalHeader.appendChild(modalHeaderH2);\n\tmodalContent.appendChild(modalHeader);\n\tmodalContent.appendChild(modalBody(date));\n\tmodalCenter.appendChild(modalContent);\n\tparentModal.appendChild(modalCenter);\n\n\tparentModal.style.display = \"block\";\n\tmodalClose.onclick = function() {\n\t\tparentModal.style.display = \"none\";\n\t};\n\n\twindow.onclick = function(event) {\n\t\tif (event.target.className == \"modal-center\") {\n\t\t\tparentModal.style.display = \"none\";\n\t\t}\n\t};\n\n\treturn parentModal;\n};\n\nconst modalBody = (date) => {\n\tconst body = document.createElement('div');\n\tconst button = document.createElement('button');\n\tconst text = document.createTextNode('Book Now');\n\tbody.setAttribute('class', 'modal-body');\n\tbody.appendChild(Object(_available__WEBPACK_IMPORTED_MODULE_0__[\"availableTime\"])(date));\n\tbody.appendChild(Object(_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\tbutton.appendChild(text);\n\tbody.appendChild(button);\n\n\tbutton.onclick = () => {\n\t\tconsole.log(_available__WEBPACK_IMPORTED_MODULE_0__[\"confirmTime\"]);\n\t\twhile (body.firstChild) {\n\t\t\tbody.firstChild.remove();\n\t\t}\n\n\t\tconst p = document.createElement('p');\n\t\tconst textP = document.createTextNode(_available__WEBPACK_IMPORTED_MODULE_0__[\"confirmTime\"]);\n\t\tp.appendChild(textP);\n\t\tbody.appendChild(p);\n\t};\n\n\treturn body;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n\n//# sourceURL=webpack:///./src/script/calendar/modal.js?");

/***/ }),

/***/ "./src/script/calendar/service.js":
/*!****************************************!*\
  !*** ./src/script/calendar/service.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SERVICES = [  \"Computer Support\",\n  \t\t\t\t\t\t\t\t\t\"Printer Setup\",\n  \t\t\t\t\t\t\t\t\t\"Wifi Solution\",\n  \t\t\t\t\t\t\t\t\t\"Virus Removal\",\n  \t\t\t\t\t\t\t\t\t\"Electronic Setup\",\n  \t\t\t\t\t\t\t\t\t\"PC Tune-Up\",\n  \t\t\t\t\t\t\t\t\t\"Data Backup\"\n\t\t\t\t\t\t\t\t\t];\n\nconst service = () => {\n  const select = document.createElement('select');\n  SERVICES.map(ser => {\n    const option = document.createElement('option');\n    const text = document.createTextNode(ser);\n    option.appendChild(text);\n    select.appendChild(option);\n  });\n  return select;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);\n\n\n//# sourceURL=webpack:///./src/script/calendar/service.js?");

/***/ }),

/***/ "./src/script/homepage/description.js":
/*!********************************************!*\
  !*** ./src/script/homepage/description.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst description = () => {\n  const LINKS = [\n      'pic1.jpg',\n      'pic2.jpg',\n      'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];\n  const CAPTION = [\"Quick easy and convenient\",\n                   \"Request appointments for services\",\n                   \"Unclutter your life!\"];\n  const parentDiv = document.createElement('div');\n  LINKS.forEach((link, idx) => {\n    const descriptionDiv = document.createElement('div');\n    const descriptionImg = document.createElement('img');\n    const descriptionCaption = document.createElement('caption');\n    const text = document.createTextNode(CAPTION[idx]);\n    descriptionCaption.appendChild(text);\n    descriptionImg.setAttribute('src', link);\n    descriptionDiv.appendChild(descriptionImg);\n    descriptionDiv.appendChild(descriptionCaption);\n    parentDiv.appendChild(descriptionDiv);\n  });\n\n  window.onscroll = function() {\n    if (window.pageYOffset > 220) {\n      parentDiv.setAttribute('class', 'description-div description-active');\n    } else {\n      parentDiv.setAttribute('class', 'description-div');\n    }\n  };\n\n  return parentDiv;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (description);\n\n\n//# sourceURL=webpack:///./src/script/homepage/description.js?");

/***/ }),

/***/ "./src/script/homepage/footer.js":
/*!***************************************!*\
  !*** ./src/script/homepage/footer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst footer = () => {\n  return document.createElement('footer');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n\n//# sourceURL=webpack:///./src/script/homepage/footer.js?");

/***/ }),

/***/ "./src/script/homepage/header.js":
/*!***************************************!*\
  !*** ./src/script/homepage/header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navBar = () => {\n\tconst img = document.createElement('img');\n\tconst ul = document.createElement('ul');\n\tconst list = ['About', 'Features', 'Contact Us'];\n\tconst imgWrapper = document.createElement('div');\n\timgWrapper.setAttribute('id', 'img-wrapper');\n\tul.classList.add('nav-bar');\n\tul.setAttribute('id', 'top-nav');\n\timg.setAttribute('src', 'src/image/hamburger.png');\n\n\tlist.forEach(l => {\n\t\tconst li = document.createElement('li');\n\t\tli.append(l);\n\t\tul.appendChild(li);\n\t});\n\n\timgWrapper.onclick = function() {\n\t\tlet navbar = document.getElementById('top-nav');\n\t\tif (navbar.className === 'nav-bar') {\n\t\t\tnavbar.className += ' responsive';\n\t\t} else {\n\t\t\tnavbar.className = 'nav-bar';\n\t\t}\n\t};\n\n\timgWrapper.append(img);\n\tul.appendChild(imgWrapper);\n\treturn ul;\n};\n\n\nconst header = () => {\n\tconst splashHeader = document.createElement(\"div\");\n\tconst h1 = document.createElement('h1');\n\tsplashHeader.classList.add('splash-header');\n\th1.append('Calendarly');\n\th1.onclick = function() {\n\t\tlocation.reload();\n\t};\n\tsplashHeader.appendChild(h1);\n\tsplashHeader.appendChild(navBar());\n\treturn splashHeader;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n//# sourceURL=webpack:///./src/script/homepage/header.js?");

/***/ }),

/***/ "./src/script/homepage/homepage.js":
/*!*****************************************!*\
  !*** ./src/script/homepage/homepage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/script/homepage/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/script/homepage/footer.js\");\n/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash */ \"./src/script/homepage/splash.js\");\n/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description */ \"./src/script/homepage/description.js\");\n\n\n\n\n\nconst homepage = () => {\n\tconst Homepage = document.createElement('div');\n\tHomepage.classList.add('splash');\n\tHomepage.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\tHomepage.appendChild(Object(_splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\tHomepage.appendChild(Object(_description__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\tHomepage.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\treturn Homepage;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homepage);\n\n\n//# sourceURL=webpack:///./src/script/homepage/homepage.js?");

/***/ }),

/***/ "./src/script/homepage/splash.js":
/*!***************************************!*\
  !*** ./src/script/homepage/splash.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ \"./src/script/calendar/calendar.js\");\n\n\nconst splash = () => {\n\tconst Splash = document.createElement('div');\n\tconst triangle = document.createElement('div');\n\tconst triangleBottom = document.createElement('div');\n\tconst h2 = document.createElement('h2');\n\tconst img = document.createElement('img');\n\tconst button = document.createElement('button');\n\tSplash.classList.add('splash-main');\n\ttriangleBottom.classList.add('splash-main-bottom');\n\ttriangle.classList.add('splash-main-triangle');\n\th2.append('Schedule Appointments Quicker!');\n\timg.setAttribute('src', 'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');\n\tbutton.append('Book Appointment');\n\tbutton.onclick = function() {\n\t\twhile (root.firstChild) {\n\t\t\troot.removeChild(root.firstChild);\n\t\t}\n\t\troot.appendChild(Object(_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__[\"calendar\"])());\n\t};\n\tSplash.appendChild(triangle);\n\tSplash.appendChild(img);\n\tSplash.appendChild(h2);\n\tSplash.appendChild(button);\n\tSplash.appendChild(triangleBottom);\n\n\treturn Splash;\n};\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splash);\n\n\n//# sourceURL=webpack:///./src/script/homepage/splash.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/script/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/script/app.js */\"./src/script/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/script/app.js?");

/***/ })

/******/ });