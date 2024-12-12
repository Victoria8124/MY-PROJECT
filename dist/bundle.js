/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n\n// Ждём загрузки API Яндекс.Карт\nymaps.ready(function () {\n  // Создаём карту\n  var map = new ymaps.Map('map', {\n    center: [55.7558, 37.6173],\n    // Центр карты (Москва)\n    zoom: 4\n  });\n\n  // Метка 1 (Москва)\n  var placemark1 = new ymaps.Placemark([55.7558, 37.6173], {\n    balloonContent: 'Это Москва'\n  });\n\n  // Метка 2 (Санкт-Петербург)\n  var placemark2 = new ymaps.Placemark([59.9343, 30.3351], {\n    balloonContent: 'Это Санкт-Петербург'\n  });\n\n  // Метка 3 (Новосибирск)\n  var placemark3 = new ymaps.Placemark([55.0084, 82.9357], {\n    balloonContent: 'Это Новосибирск'\n  });\n\n  // Добавляем метки на карту\n  map.geoObjects.add(placemark1);\n  map.geoObjects.add(placemark2);\n  map.geoObjects.add(placemark3);\n});\n\n//# sourceURL=webpack://my-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/AkzidenzGroteskPro-Regular.woff2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/AkzidenzGroteskPro-Regular.woff'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/AkzidenzGroteskPro-Bold.woff2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/AkzidenzGroteskPro-Bold.woff'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/RoadRadio-Regular.woff2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/RoadRadio-Regular.woff'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/RoadRadio-Bold.woff2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../fonts/RoadRadio-Bold.woff'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../imges/Лого.png */ \"./src/imges/Лого.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../imges/logo.png */ \"./src/imges/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n@font-face {\n  font-family: \"Akzidenz-Grotesk Pro\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Akzidenz-Grotesk Pro\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"woff2\"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RoadRadio\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format(\"woff2\"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RoadRadio\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format(\"woff2\"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.conteiner {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.conteiner .header {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #ffffff;\n  max-height: 92px;\n}\n.conteiner .header .header__burger {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 32px;\n  height: 10px;\n  cursor: pointer;\n  margin-right: 59px;\n}\n.conteiner .header .header__burger .burger-bar {\n  background-color: #333;\n  height: 2px;\n  width: 100%;\n}\n.conteiner .header .header__burger .bar {\n  width: 50%;\n}\n.conteiner .header .header__nav {\n  display: flex;\n  gap: 46px;\n  max-width: 408px;\n}\n.conteiner .header .header__nav .nav-link {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  padding: 8px;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.conteiner .header .header__logo {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  margin-right: 30px;\n}\n.conteiner .header .header__widgets {\n  display: flex;\n  gap: 23px;\n  margin-right: 68px;\n}\n.conteiner .header .header__widgets .widget {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.conteiner .header .header__contact {\n  display: flex;\n  flex-direction: column;\n  margin-right: 59px;\n}\n.conteiner .header .header__contact .phone {\n  font-family: \"Golos\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #333;\n  max-width: 132px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.conteiner .header .header__contact .email {\n  color: #797986;\n}\n.conteiner .header .header__button {\n  padding: 19px 28px;\n  background-color: #bf2738;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  font-size: 14px;\n  line-height: 14px;\n  font-family: \"RoadRadio\", sans-serif;\n  font-weight: 400;\n}\n\n.contacts-block {\n  padding: 40px 0;\n  background-color: #f5f5f5;\n}\n\n.breadcrumb {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Golos\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14.4px;\n  text-align: center;\n}\n.breadcrumb .breadcrumb__item {\n  cursor: pointer;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.breadcrumb .breadcrumb__item--active {\n  color: #b0b0b0;\n}\n\n.separator {\n  position: relative;\n  width: 100vw;\n  height: 1px;\n  background-color: #000000;\n  margin: 20px 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.contacts-title {\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 46px;\n  font-weight: 400;\n  line-height: 46px;\n  text-align: center;\n}\n\n.contacts-block-form {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 30px;\n  padding: 40px 20px;\n  background-color: #ffffff;\n  flex-wrap: wrap;\n}\n.contacts-block-form .contacts-info {\n  flex: 1;\n  min-height: 492px;\n  max-width: 610px;\n}\n.contacts-block-form .contacts-info .contacts-info-phone {\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 36px;\n  line-height: 39.6px;\n  color: #333;\n  max-width: 296px;\n}\n.contacts-block-form .contacts-info .contacts-info-email {\n  font-family: \"Golos\", sans-serif;\n  color: #bf2738;\n  font-weight: 400;\n  font-size: 25px;\n  line-height: 30px;\n  margin-bottom: 20px;\n}\n.contacts-block-form .contacts-info .contacts-info-company {\n  color: #333;\n  font-family: \"Golos\", sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 18.7px;\n  margin-bottom: 15px;\n}\n.contacts-block-form .contacts-info .contacts-info-data {\n  color: #808080;\n  font-family: \"Golos\", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 19.5px;\n}\n.contacts-block-form .contacts-info .contacts-info-data p {\n  padding-bottom: 10px;\n}\n.contacts-block-form .contact-form {\n  flex: 1;\n  background-color: #ffffff;\n  padding: 20px;\n  width: 100%;\n  max-width: 500px;\n}\n.contacts-block-form .contact-form .form-title {\n  font-family: \"RoadRadio\", sans-serif;\n  margin-bottom: 20px;\n  font-size: 36px;\n  font-weight: 400;\n  line-height: 39.6px;\n}\n.contacts-block-form .contact-form .form-group {\n  margin-bottom: 20px;\n}\n.contacts-block-form .contact-form .form-group label {\n  display: flex;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.contacts-block-form .contact-form .form-group input,\n.contacts-block-form .contact-form .form-group textarea {\n  font-family: \"Golos\", sans-serif;\n  font-weight: 400;\n  width: 100%;\n  padding-top: 17px;\n  padding-left: 20px;\n  padding-bottom: 11px;\n  border: 1px solid #ddd;\n  border-radius: 14px;\n  font-size: 16px;\n  box-sizing: border-box;\n  line-height: 10px;\n  background-color: #f5f5f5;\n}\n.contacts-block-form .contact-form .form-group textarea {\n  resize: none;\n}\n.contacts-block-form .contact-form .form-group--split {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n.contacts-block-form .contact-form .form-group--split .form-group__left,\n.contacts-block-form .contact-form .form-group--split .form-group__right {\n  flex: 1;\n}\n.contacts-block-form .contact-form .form-group--split .form-group__left {\n  margin-right: 10px;\n}\n.contacts-block-form .contact-form .form-group--checkbox {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: nowrap;\n  margin-bottom: 20px;\n}\n.contacts-block-form .contact-form .form-group--checkbox label {\n  font-size: 12px;\n  color: #333;\n  flex-wrap: nowrap;\n  display: flex;\n  align-items: center;\n}\n.contacts-block-form .contact-form .form-group--checkbox input[type=checkbox] {\n  margin-right: 10px;\n  appearance: none;\n  background-color: #f5f5f5;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n}\n.contacts-block-form .contact-form .form-group--checkbox input[type=checkbox]:checked {\n  background-color: #bf2738;\n  border-color: #bf2738;\n}\n.contacts-block-form .contact-form .form-group--checkbox input[type=checkbox]:checked::after {\n  content: \"✓\";\n  color: #ffffff;\n  font-size: 12px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: Arial, sans-serif;\n  font-weight: bold;\n}\n.contacts-block-form .contact-form .submit-button {\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 14px;\n  text-align: center;\n  width: 190px;\n  padding: 19px 36px;\n  background-color: #bf2738;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 30px;\n  margin-top: 81px;\n  margin-bottom: 100px;\n}\n.card-container .card {\n  height: 310px;\n  background-color: #f5f5f5;\n  padding: 33px 22px;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n}\n.card-container .card:last-child {\n  grid-column: span 2;\n}\n.card-container .card h4 {\n  margin-bottom: 15px;\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 26px;\n  font-weight: 400;\n  line-height: 28.6px;\n  text-align: left;\n  text-underline-position: from-font;\n  text-decoration-skip-ink: none;\n}\n.card-container .card p {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.card-container .card a {\n  text-decoration: none;\n  color: #bf2738;\n  font-weight: bold;\n}\n.card-container .card .operating-mode {\n  position: absolute;\n  bottom: 40px;\n}\n.card-container .card .card-phone {\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 19px;\n  font-weight: 400;\n  line-height: 28.5px;\n  text-align: left;\n  color: #262633;\n}\n.card-container .card .card-street {\n  font-family: \"RoadRadio\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 19.6px;\n  text-align: left;\n  color: #797986;\n}\n\n.footer-wrapper {\n  width: 100%;\n  background: linear-gradient(to right, #222225 50%, #2A2A2E 50%);\n  color: #fff;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: stretch;\n  height: auto;\n}\n\n.footer-left,\n.footer-right {\n  width: 48%;\n  font-family: \"Akzidenz-Grotesk Pro\";\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 14.3px;\n  text-align: left;\n  color: #797986;\n}\n\n.footer-section-one {\n  margin-bottom: 69px;\n  margin-top: 63px;\n}\n.footer-section-one li {\n  list-style: none;\n}\n.footer-section-one li a {\n  text-decoration: none;\n  color: #fff;\n  font-family: \"Golos\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 33.6px;\n  text-align: left;\n}\n\n.footer-section-two ul {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 12px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-width: 488px;\n  padding-right: 156px;\n  margin-bottom: 66px;\n}\n\n.footer-section-two li {\n  font-family: \"Akzidenz-Grotesk Pro\";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 28.8px;\n  text-align: left;\n}\n\n.footer-section-two li a {\n  text-decoration: none;\n  color: #797986;\n}\n\n.footer-section-two li a:hover {\n  color: #fff;\n}\n\n.footer-right {\n  padding-top: 63px;\n  padding-left: 40px;\n}\n\n.footer-right-contacts {\n  display: flex;\n}\n.footer-right-contacts .footer-right-phone {\n  font-family: \"Golos\", sans-serif;\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 39px;\n  text-align: left;\n  margin-right: 80px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.footer-right-contacts .footer-right-button {\n  width: 190px;\n  height: 52px;\n  border-radius: 14px;\n  background-color: #2A2A2E;\n  color: #fff;\n  border: 2px solid #494950;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"Golos\", sans-serif;\n}\n\n.footer-right-address {\n  margin-bottom: 55px;\n  font-family: \"Akzidenz-Grotesk Pro\";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: left;\n}\n\n.footer-right-email {\n  font-family: \"Golos\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 33.6px;\n  text-align: left;\n  color: #F23147;\n  margin-bottom: 73px;\n}\n\n.basement {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 33px;\n}\n\n.basement-left-wrapper,\n.basement-right-wrapper {\n  margin: 20px;\n  text-align: left;\n  width: 48%;\n  font-family: \"Akzidenz-Grotesk Pro\";\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 14.3px;\n  text-align: left;\n  font-family: Akzidenz-Grotesk Pro;\n  text-underline-position: from-font;\n  text-decoration-skip-ink: none;\n  color: #797986;\n}\n\n.basement-right-wrapper {\n  padding-left: 40px;\n}\n.basement-right-wrapper .highlight {\n  color: #fff;\n}\n\n.separator-color {\n  background-color: #F5F5F5;\n  height: 1px;\n}\n\n@media (max-width: 1919px) {\n  /* Контейнер карточек */\n  .card-container {\n    grid-template-columns: repeat(2, 1fr);\n    /* Изменяем на 2 колонки */\n    padding: 0px 29px;\n  }\n  .card-container .card:last-child {\n    grid-column: span 2;\n    /* Растягиваем последнюю карточку на 2 колонки */\n  }\n  /* Контейнер */\n  .conteiner .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 28px;\n    /* Сжимаем отступы для экономии места */\n    /* Скрываем старый логотип */\n    /* Добавляем новый логотип */\n  }\n  .conteiner .header .header__burger {\n    width: 23px;\n    height: 8px;\n    margin-right: 19px;\n  }\n  .conteiner .header .header__nav {\n    display: flex;\n    gap: 20px;\n    /* Уменьшаем расстояние между ссылками */\n    margin-right: 20px;\n  }\n  .conteiner .header .header__nav .nav-link:nth-child(3) {\n    display: none;\n    /* Убираем последнюю ссылку */\n  }\n  .conteiner .header .header__button {\n    display: none;\n    /* Убираем кнопку */\n  }\n  .conteiner .header .header__logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .conteiner .header .header__logo img {\n    display: none;\n  }\n  .conteiner .header .header__logo {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    width: 90px;\n    /* Ширина нового логотипа */\n    height: 30px;\n    /* Высота нового логотипа */\n    margin-right: 60px;\n  }\n  .conteiner .header .header__widgets {\n    display: flex;\n    gap: 23px;\n    /* Уменьшаем расстояние между виджетами */\n    margin-right: 28px;\n  }\n  .conteiner .header .header__contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 37px;\n    /* Новая высота */\n    margin-right: 0;\n  }\n  /* Заголовок для контактов */\n  .contacts-title {\n    font-family: \"RoadRadio\", sans-serif;\n    font-size: 32px;\n    font-weight: 400;\n    line-height: 32px;\n    text-align: center;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n  }\n}\n@media (max-width: 1919px) {\n  .contacts-block-form {\n    padding: 40px 29px;\n  }\n  .contacts-block-form .contacts-info-phone {\n    font-family: \"RoadRadio\", sans-serif;\n    font-size: 28px;\n    font-weight: 400;\n    line-height: 33.6px;\n    text-align: left;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n  }\n  .contacts-block-form .contacts-info-company {\n    font-family: \"Golos\", sans-serif;\n    font-size: 17px;\n    font-weight: 400;\n    line-height: 18.7px;\n    text-align: left;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n  }\n  .contacts-block-form .contacts-info {\n    max-width: 100%;\n    margin-bottom: 20px;\n    /* Отступ от нижнего края */\n  }\n  .contacts-block-form .contact-form {\n    max-width: 100%;\n    padding: 0;\n  }\n  .contacts-block-form .form-group--split {\n    flex-direction: column;\n    /* Располагаем элементы столбиком */\n    gap: 10px;\n    /* Отступы между элементами */\n  }\n  .contacts-block-form .form-group__left,\n  .contacts-block-form .form-group__right {\n    width: 100%;\n    /* Занимают всю ширину контейнера */\n  }\n}\n@media (max-width: 1919px) {\n  .footer-left .footer-section-one {\n    margin-top: 43px;\n  }\n  .footer-left .footer-section-two ul {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 12px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    max-width: 488px;\n    padding-right: 20px;\n    margin-bottom: 47px;\n  }\n  .footer-right {\n    margin: 0;\n    padding-top: 43px;\n  }\n  .footer-right .footer-right-contacts {\n    display: block;\n  }\n  .footer-right .footer-right-contacts .footer-right-phone {\n    font-size: 23px;\n    line-height: 34.5px;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n    margin-right: 0;\n  }\n  .footer-right .footer-right-contacts .footer-right-button {\n    margin-bottom: 15px;\n    height: 45px;\n  }\n  .footer-right .footer-right-email {\n    font-family: \"Akzidenz-Grotesk Pro\";\n    font-size: 19px;\n    font-weight: 500;\n    line-height: 20.9px;\n    text-align: left;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n    margin-bottom: 34px;\n  }\n  .basement {\n    display: flex;\n    justify-content: center;\n    gap: 80px;\n    font-family: \"Akzidenz-Grotesk Pro\";\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 14.3px;\n    text-align: left;\n    text-underline-position: from-font;\n    text-decoration-skip-ink: none;\n    color: #797986;\n  }\n  .basement .basement-right {\n    padding-right: 20px;\n  }\n  .basement .basement-right .highlight {\n    color: #F23147;\n  }\n  .basement .basement-left {\n    padding-right: 10px;\n  }\n  .basement .basement-right-wrapper {\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  .conteiner .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 33px 22px;\n  }\n  .conteiner .header .header__logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\n    width: 67px;\n    height: 40px;\n    margin-right: 0;\n    margin-left: 33px 22px;\n  }\n  .conteiner .header .header__widgets {\n    display: flex;\n    gap: 23px;\n    justify-content: flex-end;\n  }\n  .conteiner .header .header__nav,\n  .conteiner .header .header__contact,\n  .conteiner .header .header__button {\n    display: none;\n  }\n  .contacts-title {\n    font-size: 22px;\n    line-height: 26.4px;\n  }\n  .contacts-block-form {\n    padding-left: 50px;\n    display: block;\n  }\n  .contacts-block-form .contacts-info,\n  .contacts-block-form .contact-form {\n    padding: 33px 22px;\n  }\n  .contacts-block-form .contacts-info .contacts-info-phone {\n    font-size: 30px;\n  }\n  .contacts-block-form .contact-form .form-title {\n    font-size: 20px;\n    line-height: 24px;\n    text-align: left;\n  }\n}\n@media (max-width: 768px) {\n  .card-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    margin-top: 81px;\n    margin-bottom: 100px;\n  }\n  .card-container .card {\n    width: 288px;\n    height: auto;\n    background-color: #fff;\n    padding: 33px 22px;\n    border-radius: 10px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    position: static;\n  }\n  .card-container .card .operating-mode {\n    position: static;\n  }\n}\n@media (max-width: 768px) {\n  .conteiner {\n    padding: 0;\n  }\n  .conteiner .footer {\n    flex-direction: column;\n    padding: 0;\n  }\n  .conteiner .footer-left,\n  .conteiner .footer-right {\n    width: 100%;\n    padding: 40px 22px;\n  }\n  .conteiner .footer-left {\n    background-color: #222225;\n  }\n  .conteiner .footer-left .footer-section-one {\n    margin-top: 0;\n  }\n  .conteiner .footer-right {\n    background-color: #2A2A2E;\n  }\n  .conteiner .footer-right .footer-right-address {\n    color: #fff;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 20.8px;\n  }\n  .conteiner .basement {\n    flex-direction: column;\n    background-color: #2A2A2E;\n    gap: 0;\n    padding: 0;\n  }\n  .conteiner .separator {\n    margin: 0;\n  }\n  .conteiner .basement-left-wrapper {\n    margin: 40px 0 0 22px;\n    white-space: nowrap;\n  }\n  .conteiner .basement-right-wrapper {\n    margin: 0 0 40px 22px;\n    white-space: nowrap;\n  }\n  .conteiner .basement-right-wrapper .highlight {\n    color: #fff;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-project/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-project/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/imges/logo.png":
/*!****************************!*\
  !*** ./src/imges/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da1c9868d47f35476eb4.png\";\n\n//# sourceURL=webpack://my-project/./src/imges/logo.png?");

/***/ }),

/***/ "./src/imges/Лого.png":
/*!****************************!*\
  !*** ./src/imges/Лого.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb611b9c9088d54beacc.png\";\n\n//# sourceURL=webpack://my-project/./src/imges/%D0%9B%D0%BE%D0%B3%D0%BE.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;