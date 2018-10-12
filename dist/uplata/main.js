(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var components_app_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/app/header/header.component */ "./src/app/components/app/header/header.component.ts");
/* harmony import */ var components_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/app/footer/footer.component */ "./src/app/components/app/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/app_routing/app_routing.module */ "./src/app/modules/app_routing/app_routing.module.ts");
/* harmony import */ var _components_pages_onas_onas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/onas/onas.component */ "./src/app/components/pages/onas/onas.component.ts");
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ "./src/app/components/pages/faq/faq.component.ts");
/* harmony import */ var _components_pages_tarif_tarif_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/tarif/tarif.component */ "./src/app/components/pages/tarif/tarif.component.ts");
/* harmony import */ var _components_pages_bezopasnost_bezopasnost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/bezopasnost/bezopasnost.component */ "./src/app/components/pages/bezopasnost/bezopasnost.component.ts");
/* harmony import */ var _components_pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/legal/legal.component */ "./src/app/components/pages/legal/legal.component.ts");
/* harmony import */ var _components_cats_cat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cats/cat.component */ "./src/app/components/cats/cat.component.ts");
/* harmony import */ var _components_dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dialogs/login/login.component */ "./src/app/components/dialogs/login/login.component.ts");
/* harmony import */ var _components_dialogs_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dialogs/signup/signup.component */ "./src/app/components/dialogs/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                components_app_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                components_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_pages_onas_onas_component__WEBPACK_IMPORTED_MODULE_7__["OnasComponent"],
                _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
                _components_pages_tarif_tarif_component__WEBPACK_IMPORTED_MODULE_9__["TarifComponent"],
                _components_pages_bezopasnost_bezopasnost_component__WEBPACK_IMPORTED_MODULE_10__["BezopasnostComponent"],
                _components_pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_11__["LegalComponent"],
                _components_cats_cat_component__WEBPACK_IMPORTED_MODULE_12__["CatComponent"],
                _components_dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_dialogs_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uplata';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app/footer/footer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app/footer/footer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"not_for_index\">\n\n  <div class=\"colored_border\"></div>\n\n  <div class=\"social_and_links\">\n    <div class=\"inner_content\">\n\n      <div class=\"footer_menu\">\n        <ul>\n          <li *ngFor=\"let link of links\">\n            <a routerLink=\"{{link.path}}\">{{link.name}}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"social_wrapper\">\n        <a href=\"https://www.facebook.com/uplata.ua/\" class=\"fb_white social_slider_links\" target=\"_blank\"></a>\n        <a href=\"https://www.linkedin.com/company/uplata.com\" class=\"in_white social_slider_links\" target=\"_blank\"></a>\n        <a href=\"https://www.instagram.com/uplata.ua/\" class=\"instagram\" target=\"_blank\"></a>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"sub_footer_line\">\n    <div class=\"call_center_element\">\n      <a href=\"/\"><img src=\"https://uplata.ua/front/index/img/uplata-logo-footer.svg\" alt=\"Сервис онлайн платежей uplata.com.ua\" title=\"Сервис uplata.com.ua\"></a>\n      <p>Контакт-центр: 0 800 751031</p>\n    </div>\n    <p>2018 © uplata.ua</p>\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/components/app/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_menu_links_menu_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/menu_links/menu_links.service */ "./src/app/services/menu_links/menu_links.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(MLS) {
        this.MLS = MLS;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.setLinks();
    };
    FooterComponent.prototype.setLinks = function () {
        this.links = this.MLS.footerLinks();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [services_menu_links_menu_links_service__WEBPACK_IMPORTED_MODULE_1__["MenuLinksService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/app/header/header.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app/header/header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"login_page_header header_fixed up_z_index\">\n\n  <div class=\"call_center_mobile desktop_hide\">\n    <p>Контакт-центр: 0 800 751031</p>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"mobile_header desktop_hide\">\n\n      <button class=\"cmn-toggle-switch cmn-toggle-switch__htx\">\n        <span></span>\n      </button>\n\n    </div>\n\n    <a routerLink=\"/\" class=\"logo\"><img src=\"https://uplata.ua/front/index/img/logo.svg\" alt=\"Сервис онлайн-платежей Uplata\" title=\"Сервис uplata.ua\"></a>\n\n    <div class=\"right_side_header_content\">\n      <div class=\"left_side mobile_hide\">\n        <div class=\"all_services all_services_not_auth\" id=\"all_services\">\n          <div class=\"services_wrapper\">\n\n            <div routerLink=\"/categories/popolnit-mobilnyy\" class=\"inner_services_wrapper\">\n              <p>Все услуги</p>\n              <img src=\"/assets/imgs/chevron-white-down.svg\" alt=\"\">\n            </div>\n\n          </div>\n        </div>\n\n        <ul class=\"link_list\">\n          <li *ngFor=\"let link of links\">\n            <a routerLink=\"{{link.path}}\">{{link.name}}</a>\n          </li>\n        </ul>\n\n      </div>\n      <div class=\"right_side\">\n        <div class=\"call_center_element mobile_hide\">\n          <p>Контакт-центр: 0 800 751031</p>\n        </div>\n        <button (click)=\"openSignup()\" class=\"registration mobile_hide\">регистрация</button>\n        <button (click)=\"openLogin()\" class=\"enter_in_account mobile_hide\">вход</button>\n        <button class=\"enter_in_account mobile_version_enter_in_account desktop_hide\">вход</button>\n        <div class=\"languages mobile_hide\">\n          <div class=\"dropdown\">\n            <span class=\"old\">\n              <select name=\"languages_select\" id=\"languages_select\" class=\"\" style=\"display:none;\">\n                <option value=\"ru\" selected=\"selected\">Ru</option>\n                <option value=\"ua\">Ua</option>\n              </select>\n            </span>\n            <span class=\"selected\">Ru</span>\n            <span class=\"carat\"></span>\n            <div style=\"display:none;\">\n              <ul>\n                <li class=\"active\">Ru</li>\n                <li>Ua</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<app-login  *ngIf=\"dialogLogin\"  [close]=\"openLogin(false)\"></app-login>\n<app-signup *ngIf=\"dialogSignup\" [close]=\"openSignup(false)\"></app-signup>\n"

/***/ }),

/***/ "./src/app/components/app/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_menu_links_menu_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/menu_links/menu_links.service */ "./src/app/services/menu_links/menu_links.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(MLS) {
        this.MLS = MLS;
        this.dialogLogin = false;
        this.dialogSignup = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.setLinks();
    };
    HeaderComponent.prototype.setLinks = function () {
        this.links = this.MLS.headerLinks();
    };
    HeaderComponent.prototype.openLogin = function (b) {
        if (b === void 0) { b = true; }
        this.dialogLogin = b;
    };
    HeaderComponent.prototype.openSignup = function (b) {
        if (b === void 0) { b = true; }
        this.dialogSignup = b;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [services_menu_links_menu_links_service__WEBPACK_IMPORTED_MODULE_1__["MenuLinksService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/cats/cat.component.css":
/*!***************************************************!*\
  !*** ./src/app/components/cats/cat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[name=\"fake_password_for_chrome\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  height: 0 !important;\r\n  width: 0 !important;\r\n  padding: 0;\r\n}\r\n\r\n.right {\r\n  border-color: #b5b6ba !important;\r\n}\r\n\r\n.error {\r\n  border-color: red !important;\r\n}\r\n\r\n.services_page {\r\n  margin-bottom: 52px;\r\n  min-height: calc(100% - 152px);\r\n  padding-top: 100px\r\n}\r\n\r\n.services_page .main_content {\r\n  background: #fff none repeat scroll 0 0;\r\n  display: flex;\r\n  box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .5);\r\n  min-height: 720px\r\n}\r\n\r\n.services_page .main_content .services_list {\r\n  background: #fff none repeat scroll 0 0;\r\n  box-shadow: 2px 0 8px 0 rgba(181, 182, 186, .16);\r\n  min-height: 70vh;\r\n  min-width: 370px;\r\n  position: relative;\r\n  width: calc(100% - 800px);\r\n  z-index: 1\r\n}\r\n\r\n.services_page .main_content .services_list .tabs {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_transfer,\r\n.services_page .main_content .services_list .tabs .tab_payments {\r\n  width: 50%\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_header a {\r\n  color: #fff;\r\n  display: block;\r\n  height: 100%;\r\n  text-decoration: none;\r\n  width: 100%\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_header {\r\n  background: #4f5467 none repeat scroll 0 0;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  width: 100%\r\n}\r\n\r\nbody .services_page .main_content .services_list .tabs .show_tab_content {\r\n  display: block;\r\n  flex-direction: column\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content:after {\r\n  left: 75%\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .transfer_tab_content:after {\r\n  left: 25%\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content:after,\r\n.services_page .main_content .services_list .tabs .transfer_tab_content:after {\r\n  bottom: 100%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-bottom-color: #fff;\r\n  border-width: 8px;\r\n  margin-left: -8px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content,\r\n.services_page .main_content .services_list .tabs .transfer_tab_content {\r\n  display: none;\r\n  width: 100%;\r\n  padding: 0 20px;\r\n  position: relative\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .active {\r\n  background: #3a3f52;\r\n  color: #fd8247\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content {\r\n  align-items: center;\r\n  display: flex;\r\n  height: 60px;\r\n  border-bottom: 1px solid #f4f6f8;\r\n  cursor: pointer\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content a {\r\n  align-items: center;\r\n  color: #242424;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-decoration: none\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .active a {\r\n  color: #fd8247\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(1) .tab_item_content_icon {\r\n  background-position: -1px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(2) .tab_item_content_icon {\r\n  background-position: -42px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(3) .tab_item_content_icon {\r\n  background-position: -81px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(4) .tab_item_content_icon {\r\n  background-position: -121px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(5) .tab_item_content_icon {\r\n  background-position: -161px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(6) .tab_item_content_icon {\r\n  background-position: -201px 0\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(7) .tab_item_content_icon {\r\n  background-position: -241px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(8) .tab_item_content_icon {\r\n  background-position: -281px 0\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(9) .tab_item_content_icon {\r\n  background-position: -320px 0\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(10) .tab_item_content_icon {\r\n  background-position: -361px 0\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .payments_tab_content .tab_item_content:nth-child(11) .tab_item_content_icon {\r\n  background-position: -401px -1px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content .tab_item_content_icon {\r\n  border: 1px solid #72778A;\r\n  border-radius: 50%;\r\n  background: rgba(0, 0, 0, 0) url(/assets/imgs/cats/sprite-ic-payment.svg) no-repeat scroll 0 0\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content:hover .tab_item_content_icon {\r\n  border: 1px solid #FD8247\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content:hover .tab_item_name a {\r\n  color: #FD8247\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content.active {\r\n  color: #fd8247;\r\n  background: none\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content.active .tab_item_content_icon {\r\n  border: 1px solid #FD8247\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content.active .tab_item_content_icon img {\r\n  left: 0 !important\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content .tab_item_content_icon {\r\n  margin-right: 20px;\r\n  width: 40px;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  position: relative\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content .tab_item_content_icon img {\r\n  left: -40px;\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 40px\r\n}\r\n\r\n.services_page .main_content .services_list .tabs .tab_item_content .tab_item_content_icon img:hover {\r\n  left: 0\r\n}\r\n\r\n.payments_wrapper iframe {\r\n  display: block;\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fbfbfc none repeat scroll 0 0\r\n}\r\n\r\n.payments_wrapper iframe html {\r\n  background: #fbfbfc\r\n}\r\n\r\n#transfer {\r\n  margin-bottom: 52px\r\n}\r\n\r\n#transfer .payments_wrapper {\r\n  min-height: 791px;\r\n  position: relative;\r\n  width: 100%;\r\n  background: #fbfbfc none repeat scroll 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n#transfer .payments_wrapper iframe {\r\n  height: 100%;\r\n}\r\n\r\n#transfer .transfer_tab_content .tab_item_content:nth-child(1) .tab_item_content_icon {\r\n  background: url(/front/index/img/transfers/sprite-ic-transfer-c-2-c.svg)\r\n}\r\n\r\n.autocomplete-suggestions {\r\n  z-index: 1;\r\n  background: #fff none repeat scroll 0 0;\r\n  border: 1px solid #f4f6f8;\r\n  border-radius: 0 0 4px 4px;\r\n  box-shadow: 0 2px 10px 0 rgba(79, 84, 103, .2);\r\n  cursor: pointer;\r\n  display: none;\r\n  flex-direction: column;\r\n  line-height: 36px;\r\n  position: absolute;\r\n  width: 100%;\r\n  padding: 0 15px\r\n}\r\n\r\n.autocomplete-suggestions a {\r\n  line-height: normal;\r\n  margin: 0;\r\n  line-height: 40px;\r\n  color: #242424;\r\n  text-decoration: none\r\n}\r\n\r\n.autocomplete-suggestion {\r\n  padding-left: 15px\r\n}\r\n\r\n.autocomplete-suggestion:hover {\r\n  background-color: #f4f6f8\r\n}\r\n\r\n.services_content,\r\n.payment_form {\r\n  width: 100%\r\n}\r\n\r\n.filter_elements_wrapper {\r\n  background: none !important;\r\n  box-shadow: none !important;\r\n  height: 42px !important;\r\n  margin: 20px auto 0;\r\n  justify-content: flex-end;\r\n  padding-right: 20px\r\n}\r\n\r\n.services_content_header {\r\n  padding: 0 20px\r\n}\r\n\r\n.services_content_header h1 {\r\n  color: #4f5467;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.1px\r\n}\r\n\r\n.services_content_header h1:first-letter {\r\n  text-transform: uppercase\r\n}\r\n\r\n.filter_elements_wrapper .search:after,\r\n.services_content_header .search:after {\r\n  right: 37px\r\n}\r\n\r\n.filter_elements_wrapper .search input,\r\n.services_content_header .search input {\r\n  background: rgba(0, 0, 0, 0) url(/front/index/img/ic-search-light.svg) no-repeat scroll 302px center;\r\n  border: 1px solid #e7e7e7;\r\n  border-radius: 4px;\r\n  height: 40px;\r\n  max-width: 330px;\r\n  padding: 0 15px;\r\n  width: 100%;\r\n  font-size: 14px\r\n}\r\n\r\n.filter_elements_wrapper .search .inner_tpl_search_form {\r\n  position: relative;\r\n  height: 40px\r\n}\r\n\r\n.filter_elements_wrapper .search .inner_tpl_search_form #tpl_search {\r\n  background: none;\r\n  padding-right: 40px\r\n}\r\n\r\n/* .filter_elements_wrapper .search .inner_tpl_search_form .tpl_search_submit {\r\n    background: none;\r\n    top: 0;\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: rgba(0, 0, 0, 0) url(/front/index/img/ic-search-light.svg) no-repeat scroll center center;\r\n    border: none;\r\n    padding: 0;\r\n    right: 0\r\n} */\r\n\r\n.filter_elements_wrapper .search .inner_tpl_search_form .search_button_submit {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: rgba(0, 0, 0, 0) url(/front/index/img/ic-search-light.svg) no-repeat scroll center center;\r\n  border: none;\r\n  padding: 0;\r\n  right: 0\r\n}\r\n\r\n.services_content {\r\n  background: #fbfbfc none repeat scroll 0 0;\r\n  height: 100%;\r\n  max-height: 790px\r\n}\r\n\r\n.services_content .services_content_header,\r\n.services_content .filter_elements_wrapper,\r\n.payments_content_header {\r\n  align-items: center;\r\n  background: #fff none repeat scroll 0 0;\r\n  box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .16);\r\n  display: flex;\r\n  height: 60px;\r\n  justify-content: flex-start;\r\n  position: relative;\r\n  z-index: 1\r\n}\r\n\r\n.services_content .filter_elements_wrapper span:first-child,\r\n.services_content .services_content_header span:first-child,\r\n.filter_elements_wrapper span:first-child {\r\n  color: #b5b6ba;\r\n  text-transform: uppercase;\r\n  padding-left: 20px\r\n}\r\n\r\n.services_content .services_content_header .dropdown,\r\n.services_content .filter_elements_wrapper .dropdown {\r\n  height: 40px;\r\n  width: 100%;\r\n  margin: 0 20px;\r\n  border: 1px solid #e7e7e7;\r\n  max-width: 330px\r\n}\r\n\r\n.services_content .services_content_header .dropdown,\r\n.services_content .filter_elements_wrapper .dropdown ul {\r\n  overflow: auto\r\n}\r\n\r\n.services_content .services_content_header .dropdown,\r\n.services_content .filter_elements_wrapper .dropdown ul .active {\r\n  display: none\r\n}\r\n\r\n.services_content .services_content_header .dropdown:hover,\r\n.services_content .filter_elements_wrapper .dropdown:hover {\r\n  box-shadow: none\r\n}\r\n\r\n.services_content .services_content_header .dropdown,\r\n.services_content .filter_elements_wrapper .dropdown .carat {\r\n  margin-top: 0\r\n}\r\n\r\n.services_content .services_content_header .dropdown,\r\n.services_content .filter_elements_wrapper .dropdown .carat+div {\r\n  max-height: 400px\r\n}\r\n\r\n.services_content .filter_elements_wrapper .dropdown:after,\r\n.services_content .services_content_header .dropdown:after,\r\n.services_content_header .search:after {\r\n  background: #e7e7e7 none repeat scroll 0 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 20px;\r\n  position: absolute;\r\n  right: 34px;\r\n  top: 10px;\r\n  width: 1px\r\n}\r\n\r\n.services_content .filter_elements_wrapper .search,\r\n.services_content .services_content_header .search {\r\n  max-width: 330px;\r\n  width: 100%;\r\n  position: relative\r\n}\r\n\r\n.services_content .service_item_wrapper {\r\n  background: #fbfbfc none repeat scroll 0 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  height: 585px;\r\n  justify-content: space-around;\r\n  padding: 0 20px;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n\r\n.services_content .service_item_wrapper .service_item_inner_wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  height: 100%;\r\n  overflow: auto;\r\n  justify-content: space-around\r\n}\r\n\r\n.services_content .service_item_wrapper .service_item_inner_wrapper .additional_wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n  padding-bottom: 20px;\r\n  width: 100%\r\n}\r\n\r\n.services_content .service_item_wrapper .service_item_inner_wrapper .additional_wrapper .search_no_result {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.services_content .service_content_item {\r\n  background: #fff none repeat scroll 0 0;\r\n  border: 1px solid #f4f6f8;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, .6);\r\n  height: 180px;\r\n  margin: 20px 7px 0 10px;\r\n  padding: 10px;\r\n  width: 130px;\r\n  text-decoration: none;\r\n  color: #242424;\r\n  overflow: hidden;\r\n  transition: all .1s ease-in;\r\n}\r\n\r\n.services_content .service_content_item:hover {\r\n  box-shadow: 0 0 10px 0 rgba(253, 130, 71, .6);\r\n  border: solid 1px #f4f6f8\r\n}\r\n\r\n.services_content .service_content_item .service_icon {\r\n  align-items: center;\r\n  display: flex;\r\n  height: auto;\r\n  justify-content: center;\r\n  min-height: 110px;\r\n  text-align: center;\r\n  width: 100%;\r\n  border: solid 1px rgba(226, 231, 235, .6)\r\n}\r\n\r\n.services_content .service_content_item .service_icon img {\r\n  height: auto;\r\n  max-height: 95px;\r\n  max-width: 95px;\r\n  width: 100%;\r\n}\r\n\r\n.services_content .service_content_item .service_name {\r\n  align-items: center;\r\n  display: flex;\r\n  font-size: 12px;\r\n  height: 55px;\r\n  justify-content: center;\r\n  margin-top: 2px;\r\n  overflow: hidden;\r\n  text-align: center\r\n}\r\n\r\n.services_content .service_content_item .service_name p {\r\n  word-wrap: break-word;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.25;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.services_content .transfer_footer {\r\n  align-items: center;\r\n  bottom: 0;\r\n  display: flex;\r\n  height: 80px;\r\n  justify-content: space-between;\r\n  padding: 0 20px;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1\r\n}\r\n\r\n.services_content .transfer_footer .item img {\r\n  margin-right: 10px\r\n}\r\n\r\n.services_content .transfer_footer .item .friends {\r\n  color: #656565;\r\n  font-size: 12px;\r\n  width: 358px\r\n}\r\n\r\n.services_content .transfer_footer .item .friends span {\r\n  color: #242424;\r\n  margin: 0\r\n}\r\n\r\n.services_content .transfer_footer .item .friends a {\r\n  color: #fd8247\r\n}\r\n\r\n.payments_content_header {\r\n  width: 100%;\r\n  position: relative\r\n}\r\n\r\n.payments_content_header .back {\r\n  align-items: center;\r\n  border-color: #fd8247;\r\n  border-radius: 2px;\r\n  border-style: solid solid solid none;\r\n  border-width: 1px 1px 1px medium;\r\n  color: #fd8247;\r\n  display: flex;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  font-family: OpenSansSemiBold;\r\n  height: 30px;\r\n  justify-content: center;\r\n  margin-left: 44px;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  width: 80px\r\n}\r\n\r\n.payments_content_header .back .inner_sq {\r\n  border-color: #fd8247 -moz-use-text-color -moz-use-text-color #fd8247;\r\n  border-radius: 2px;\r\n  border-style: solid none none solid;\r\n  border-width: 1px 0 0 1px;\r\n  height: 22px;\r\n  left: -10px;\r\n  position: absolute;\r\n  top: 3px;\r\n  -webkit-transform: rotate(-44deg);\r\n          transform: rotate(-44deg);\r\n  width: 22px\r\n}\r\n\r\n.payments_content_header .form_name {\r\n  font-size: 18px;\r\n  color: #4f5467;\r\n  margin-left: 20px\r\n}\r\n\r\n.payment_form {\r\n  align-items: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative\r\n}\r\n\r\n.payment_form .payments_content_body {\r\n  align-items: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%\r\n}\r\n\r\n.payment_form .payments_content_body .payment_logo {\r\n  align-items: center;\r\n  display: flex;\r\n  height: 180px;\r\n  margin: 30px auto 10px;\r\n  width: 180px\r\n}\r\n\r\n.payment_form .payments_content_body .payment_logo img {\r\n  width: 100%\r\n}\r\n\r\n.payment_form .payments_content_body h2 {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  font-family: OpenSansSemiBold;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-bottom: 30px\r\n}\r\n\r\n.payment_form .payments_content_body .payment_main_form {\r\n  width: 100%;\r\n  text-align: center;\r\n  max-width: 330px;\r\n  margin: 0 auto\r\n}\r\n\r\n.payment_form .payments_content_body .payment_main_form .input_wrapper {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n  height: 40px\r\n}\r\n\r\n.payment_form .payments_content_body .payment_main_form .input_wrapper input {\r\n  height: 40px;\r\n  width: calc(100% - 30px);\r\n  max-width: 330px;\r\n  border: 1px solid #e7e7e7;\r\n  border-radius: 4px;\r\n  padding: 0 15px;\r\n  float: left;\r\n  font-size: 14px\r\n}\r\n\r\n.payment_form .payments_content_body .payment_main_form .input_wrapper input:last-child {\r\n  margin: 0\r\n}\r\n\r\n.payment_form .payments_content_body .payment_main_form .submit_payments {\r\n  background: #fd8247 none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 4px;\r\n  color: #fff;\r\n  float: right;\r\n  height: 40px;\r\n  margin-right: 30px;\r\n  text-transform: uppercase;\r\n  width: 160px;\r\n  font-weight: 600;\r\n  font-family: OpenSansSemiBold\r\n}\r\n\r\n.payments_content_footer {\r\n  align-items: center;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  height: 80px;\r\n  padding: 0 20px 0 40px;\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fbfbfc none repeat scroll 0 0\r\n}\r\n\r\n.payments_content_footer .white_plug {\r\n  width: 100%;\r\n  position: absolute;\r\n  height: 15px;\r\n  background: #fff\r\n}\r\n\r\n.payments_content_footer .item img {\r\n  margin-right: 20px\r\n}\r\n\r\n.payments_content_footer .item img:last-child {\r\n  position: relative;\r\n  top: -3px\r\n}\r\n\r\n.payments_content_footer .item {\r\n  width: 50%\r\n}\r\n\r\n.payments_content_footer .item:first-child {\r\n  text-align: left\r\n}\r\n\r\n.payments_content_footer .item p {\r\n  color: #656565;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  margin: 0\r\n}\r\n\r\n.payments_content_footer .item p a {\r\n  color: #fd8247\r\n}\r\n\r\n.payments_content_footer .item p span {\r\n  color: #fd8247;\r\n  cursor: help\r\n}\r\n\r\n.payments_content_footer .item .phone_info {\r\n  background: #fff none repeat scroll 0 0;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  max-width: 405px;\r\n  padding: 15px;\r\n  position: absolute;\r\n  top: -80px;\r\n  box-shadow: 0 2px 10px 0 rgba(79, 84, 103, .2);\r\n  display: none\r\n}\r\n\r\n.transfer_content_header {\r\n  align-items: center;\r\n  box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .16);\r\n  display: flex;\r\n  height: 60px;\r\n  position: relative;\r\n  width: 100%\r\n}\r\n\r\n.transfer_content_header .back {\r\n  align-items: center;\r\n  border-color: #fd8247;\r\n  border-radius: 2px;\r\n  border-style: solid solid solid none;\r\n  border-width: 1px 1px 1px medium;\r\n  color: #fd8247;\r\n  display: flex;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  font-family: OpenSansSemiBold;\r\n  height: 30px;\r\n  justify-content: center;\r\n  margin-left: 44px;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  width: 80px\r\n}\r\n\r\n.transfer_content_header .back .inner_sq {\r\n  border-color: #fd8247 -moz-use-text-color -moz-use-text-color #fd8247;\r\n  border-radius: 2px;\r\n  border-style: solid none none solid;\r\n  border-width: 1px 0 0 1px;\r\n  height: 22px;\r\n  left: -10px;\r\n  position: absolute;\r\n  top: 3px;\r\n  -webkit-transform: rotate(-44deg);\r\n          transform: rotate(-44deg);\r\n  width: 22px\r\n}\r\n\r\n.transfer_content_header .back span:first-child {\r\n  padding: 0\r\n}\r\n\r\n.transfer_content_header .form_name {\r\n  font-size: 18px;\r\n  color: #4f5467;\r\n  margin-left: 20px\r\n}\r\n\r\n.transfer_content_body {\r\n  width: 100%;\r\n  margin: 0 auto\r\n}\r\n\r\n.transfer_content_body .user_card {\r\n  width: 100%;\r\n  max-width: 370px;\r\n  margin: 0 auto;\r\n  min-height: 350px;\r\n  position: relative\r\n}\r\n\r\n.transfer_content_body .user_card h3 {\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  margin: 30px 0 20px;\r\n  padding-left: 15px;\r\n  text-align: left\r\n}\r\n\r\n.transfer_content_body .user_card .main_card {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  height: 160px;\r\n  position: relative;\r\n  background: url(/front/index/img/card-sender.svg);\r\n  color: #fff\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_number,\r\n.transfer_content_body .user_card .main_card .card_duration,\r\n.transfer_content_body .user_card .main_card .card_duratio,\r\n.transfer_content_body .user_card .main_card .card_cvv,\r\n.cards .card_image .card_number,\r\n.cards .card_image .card_duration,\r\n.cards .card_image .card_duratio,\r\n.cards .card_image .card_cvv {\r\n  position: absolute\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_number,\r\n.cards .card_image .card_number {\r\n  font-size: 18px;\r\n  left: 3px;\r\n  top: 80px\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_number p {\r\n  font-size: 18px;\r\n  left: 20px;\r\n  top: 80px;\r\n  letter-spacing: 3px\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_number p,\r\n.cards .card_image .card_number p {\r\n  margin: 0\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_duration,\r\n.cards .card_image .card_duration {\r\n  align-items: center;\r\n  display: flex;\r\n  font-size: 14px;\r\n  left: 30px;\r\n  top: 114px\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_duration p,\r\n.cards .card_image .card_duration p {\r\n  font-size: 12px;\r\n  margin: 0 10px 0 0\r\n}\r\n\r\n.transfer_content_body .user_card .main_card .card_cvv,\r\n.cards .card_image .card_cvv {\r\n  color: #4f5467;\r\n  right: 37px;\r\n  top: 76px\r\n}\r\n\r\n.transfer_content_body .user_card .user_edit_card {\r\n  position: relative\r\n}\r\n\r\n.transfer_content_body .user_card .user_edit_card .title_wrapper,\r\n.card_2_card .cards .item .title_wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px auto 10px\r\n}\r\n\r\n.transfer_content_body .user_card .user_edit_card .title_wrapper p,\r\n.card_2_card .cards .item .title_wrapper p {\r\n  color: #b5b6ba;\r\n  font-size: 12px;\r\n  margin: 0 !important;\r\n  text-transform: uppercase;\r\n  position: relative\r\n}\r\n\r\n.transfer_content_body .user_card .user_edit_card .title_wrapper p:last-child {\r\n  right: 120px\r\n}\r\n\r\n.our_footer {\r\n  background-color: #fff;\r\n  bottom: 0;\r\n  box-shadow: 0 -2px 8px 0 rgba(181, 182, 186, .16);\r\n  display: none;\r\n  height: 140px;\r\n  padding: 0 42px 0 30px;\r\n  position: absolute;\r\n  text-align: left;\r\n  width: 100%;\r\n  z-index: 10;\r\n  max-width: 800px;\r\n  left: calc(50% - 400px);\r\n}\r\n\r\n.our_footer .notification_user {\r\n  width: 100%\r\n}\r\n\r\n.our_footer .span_item {\r\n  margin-right: 30px\r\n}\r\n\r\n.our_footer .send_user_notification {\r\n  display: flex;\r\n  height: 140px;\r\n  justify-content: space-between;\r\n  align-items: center\r\n}\r\n\r\n.our_footer .notification_user input {\r\n  display: block;\r\n  width: 270px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  border: solid 1px #e7e7e7;\r\n  padding: 0 15px\r\n}\r\n\r\n.our_footer .notification_user .recipient_email {\r\n  margin-bottom: 20px\r\n}\r\n\r\n.our_footer .notification_user .textarea_item {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  position: relative;\r\n  width: 100%\r\n}\r\n\r\n.our_footer .notification_user .textarea_item span {\r\n  color: #e85757\r\n}\r\n\r\n.our_footer .notification_user textarea {\r\n  border: 1px solid #e7e7e7;\r\n  border-radius: 4px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-size: 12px;\r\n  height: 100px;\r\n  padding: 9px 15px;\r\n  resize: none;\r\n  width: 270px\r\n}\r\n\r\n.our_footer .counter {\r\n  color: #a7a8ad;\r\n  font-size: 12px;\r\n  display: block\r\n}\r\n\r\n.our_footer .counter_item {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  justify-content: center;\r\n  padding: 20px 0\r\n}\r\n\r\n.our_footer .counter_item .wrong_phone,\r\n.our_footer .counter_item .wrong_email,\r\n.our_footer .counter_item .wrong_msg {\r\n  opacity: 0.5;\r\n}\r\n\r\n.our_footer .counter_item .save_info,\r\n.our_footer .counter_item .wrong_email,\r\n.our_footer .counter_item .wrong_msg,\r\n.our_footer .counter_item .wrong_phone {\r\n  background: #fff none repeat scroll 0 0 !important;\r\n  border: 1px solid #fd8247 !important;\r\n  border-radius: 4px;\r\n  color: #fd8247 !important;\r\n  height: 40px;\r\n  margin-bottom: 20px;\r\n  width: 110px\r\n}\r\n\r\n.checkbox-slider--b-flat {\r\n  position: relative;\r\n  height: 20px\r\n}\r\n\r\n.checkbox-slider--b-flat input {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 0;\r\n  height: 0;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0)\r\n}\r\n\r\n.checkbox-slider--b-flat input+span {\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:before {\r\n  position: absolute;\r\n  left: 0;\r\n  display: inline-block\r\n}\r\n\r\n.checkbox-slider--b-flat input+span>h4 {\r\n  display: inline\r\n}\r\n\r\n.checkbox-slider--b-flat input+span {\r\n  padding-left: 40px\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:before {\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 40px;\r\n  background: #4f5467;\r\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, .8);\r\n  transition: background .2s ease-out\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:after {\r\n  width: 16px;\r\n  height: 16px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  display: block;\r\n  background: #fff;\r\n  transition: margin-left .1s ease-in-out;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  content: \"\"\r\n}\r\n\r\n.checkbox-slider--b-flat input:checked+span:after {\r\n  margin-left: 20px;\r\n  content: \"\"\r\n}\r\n\r\n.checkbox-slider--b-flat input:checked+span:before {\r\n  transition: background .2s ease-in\r\n}\r\n\r\n.checkbox-slider--b-flat input+span {\r\n  padding-left: 40px;\r\n  top: 0;\r\n  position: absolute\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:before {\r\n  border-radius: 20px;\r\n  width: 40px\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:after {\r\n  background: #fff;\r\n  content: \"\";\r\n  width: 16px;\r\n  border: solid transparent 2px;\r\n  background-clip: padding-box;\r\n  border-radius: 20px\r\n}\r\n\r\n.checkbox-slider--b-flat input:not(:checked)+span:after {\r\n  -webkit-animation: popOut ease-in .3s normal;\r\n  animation: popOut ease-in .3s normal\r\n}\r\n\r\n.checkbox-slider--b-flat input:checked+span:after {\r\n  content: \"\";\r\n  margin-left: 20px;\r\n  border: solid transparent 2px;\r\n  background-clip: padding-box;\r\n  -webkit-animation: popIn ease-in .3s normal;\r\n  animation: popIn ease-in .3s normal\r\n}\r\n\r\n.checkbox-slider--b-flat input:checked+span:before {\r\n  background: #fd8247\r\n}\r\n\r\n.checkbox-slider--b-flat.checkbox-slider-md input+span:before {\r\n  border-radius: 30px\r\n}\r\n\r\n.checkbox-slider--b-flat.checkbox-slider-md input+span:after {\r\n  border-radius: 30px\r\n}\r\n\r\n.checkbox-slider--b-flat.checkbox-slider-lg input+span:before {\r\n  border-radius: 40px\r\n}\r\n\r\n.checkbox-slider--b-flat.checkbox-slider-lg input+span:after {\r\n  border-radius: 40px\r\n}\r\n\r\n.checkbox-slider--b-flat input+span:before {\r\n  box-shadow: none\r\n}\r\n\r\n.msg_sended_information {\r\n  align-items: center;\r\n  bottom: 66px;\r\n  display: none;\r\n  height: 85px;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 5\r\n}\r\n\r\n.msg_sended_information p {\r\n  align-items: center;\r\n  color: #b5b6ba;\r\n  display: flex;\r\n  font-size: 12px;\r\n  height: 100%;\r\n  justify-content: center;\r\n  line-height: 1.67;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n  width: 100%;\r\n}\r\n\r\nbody .payments_tab_content.show_tab_content.desktop_hide.category_list_mobile_version.desktop_hide {\r\n  display: none\r\n}\r\n\r\n@media screen and (min-width:320px) and (max-width:600px) {\r\n  .services_page .main_content .services_list .tabs .category_list_mobile_version:after {\r\n    display: none\r\n  }\r\n\r\n  .services_page .main_content .services_list {\r\n    min-width: 320px;\r\n    box-shadow: none;\r\n    width: 100%\r\n  }\r\n\r\n  body .payments_tab_content .show_tab_content .desktop_hide .category_list_mobile_version.desktop_hide {\r\n    display: none\r\n  }\r\n\r\n  body .services_page {\r\n    padding: 0\r\n  }\r\n\r\n  .mobile_service_list_title {\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    line-height: 1.25;\r\n    color: #4f5467;\r\n    box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .08);\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 56px auto 10px;\r\n    justify-content: center\r\n  }\r\n\r\n  .search.mobile_search {\r\n    margin: 0 auto 10px;\r\n    width: calc(100% - 30px)\r\n  }\r\n\r\n  .search:after,\r\n  .services_content_header .search:after {\r\n    right: 37px\r\n  }\r\n\r\n  .search.mobile_search input,\r\n  .services_content_header .search input {\r\n    background: rgba(0, 0, 0, 0) url(/front/index/img/ic-search-light.svg) no-repeat scroll 302px center;\r\n    border: 1px solid #e7e7e7;\r\n    border-radius: 4px;\r\n    height: 40px;\r\n    max-width: 330px;\r\n    padding: 0 15px;\r\n    width: 100%;\r\n    font-size: 14px\r\n  }\r\n\r\n  .search.mobile_search .inner_tpl_search_form {\r\n    position: relative;\r\n    height: 40px;\r\n    width: 100%;\r\n    max-width: 330px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .search.mobile_search .inner_tpl_search_form #tpl_search {\r\n    background: #fff;\r\n    padding-right: 40px\r\n  }\r\n\r\n  .search.mobile_search .inner_tpl_search_form .tpl_search_submit {\r\n    background: none;\r\n    top: 0;\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: rgba(0, 0, 0, 0) url(/front/index/img/ic-search-light.svg) no-repeat scroll center center;\r\n    border: none;\r\n    padding: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .location_wrapper {\r\n    margin: 0 auto;\r\n    width: calc(100% - 30px);\r\n    margin-bottom: 10px\r\n  }\r\n\r\n  .location_wrapper .dropdown {\r\n    width: 100%\r\n  }\r\n\r\n  .c2c_success .sms_enter input {\r\n    width: 140px;\r\n  }\r\n\r\n  .desktop_hide {\r\n    display: flex;\r\n  }\r\n\r\n  .mobile_main_content {\r\n    padding-top: 57px;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 526px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 526px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .mobile_card_transfer .second_step {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .modal_wrapper.tariffs_and_limits_element {\r\n    z-index: 50;\r\n  }\r\n\r\n  .mobile_main_content .tariffs_and_limits_element .title .bottom_border {\r\n    bottom: -20px;\r\n  }\r\n\r\n  /*BEGIN MOBILE CARD TRANSFER*/\r\n  .hide,\r\n  .mobile_hide {\r\n    display: none !important;\r\n  }\r\n\r\n  .desktop_hide {\r\n    display: flex !important;\r\n  }\r\n\r\n  .show {\r\n    display: flex !important;\r\n  }\r\n\r\n  .invalid_recipient_phone_number,\r\n  .invalid_recipient_email,\r\n  .invalid_recipient_message {\r\n    pointer-events: none;\r\n    opacity: 0.5;\r\n  }\r\n\r\n  .invalid_sms_code,\r\n  .invalid_sended_amount,\r\n  .invalid_recipient_card_number,\r\n  .invalid_sender_phone,\r\n  .invalid_month,\r\n  .invalid_year,\r\n  .invalid_cvv,\r\n  .invalid_card_number {\r\n    background: rgba(253, 130, 71, 0.5) !important;\r\n    pointer-events: none;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .title {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom: 1px solid #f4f6f8;\r\n    font-family: OpenSansSemiBold;\r\n    font-size: 16px;\r\n    line-height: 1.25;\r\n    text-align: center;\r\n    color: #4f5467;\r\n    margin: 0 auto\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .title .helper {\r\n    right: -23.5px;\r\n  }\r\n\r\n  #mobile_card_transfer input[type=\"text\"]:-webkit-autofill {\r\n    webkit-box-shadow: 0 0 0px 19px #edebff inset !important;\r\n    height: -webkit-fill-available;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .step_title {\r\n    font-family: OpenSansRegular;\r\n    font-size: 16px;\r\n    line-height: 1.25;\r\n    text-align: left;\r\n    color: #242424;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 15px 0;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper {\r\n    width: 296px;\r\n    position: relative;\r\n    z-index: 5;\r\n    height: 189px;\r\n    background: rgba(0, 0, 0, 0) url(\"/front/index/img/mobile_card_transfer_bg_from.svg\") no-repeat scroll center center / 100% 100%;\r\n    margin: 0 auto 16px;\r\n    padding: 10px 0 0;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper p,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label span,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div span {\r\n    font-size: 12px;\r\n    line-height: 1.67;\r\n    text-align: left;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div span,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label span {\r\n    margin: 0 0 10px 25px;\r\n    display: block;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper {\r\n    width: 276px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    border: solid 1px rgba(181, 182, 186, 0.6);\r\n    position: relative;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper input,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper input {\r\n    background: none;\r\n    border: none;\r\n    width: calc(100% - 40px);\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 15px;\r\n    line-height: 100%;\r\n    height: 100%;\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    border-radius: 4px;\r\n    letter-spacing: 1px;\r\n    text-align: left;\r\n    color: #242424;\r\n    box-shadow: none !important;\r\n    position: relative;\r\n    z-index: 4;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .user_card_select_list,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list {\r\n    position: absolute;\r\n    height: 40px;\r\n    width: 40px;\r\n    background: none;\r\n    top: -1px;\r\n    right: 0;\r\n    z-index: 2;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .user_card_select_list ul,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul {\r\n    position: absolute;\r\n    width: calc(100% + 236px);\r\n    top: 54px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 10px 0 rgba(79, 84, 103, 0.2);\r\n    border: none;\r\n    left: -235px;\r\n    transition: all .1s ease-in-out;\r\n    height: 0;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .user_card_select_list ul.open,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul.open {\r\n    overflow: auto;\r\n    border: solid 1px #f4f6f8;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul.open {\r\n    max-height: 320px;\r\n    overflow: visible;\r\n    border: solid 1px #f4f6f8;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .user_card_select_list ul:after,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul:after {\r\n    background: url('/front/index/img/viollet_shevron.png');\r\n    width: 18px;\r\n    height: 9px;\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .user_card_select_list ul li,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 60px;\r\n    background: #fff;\r\n    border-bottom: 1px solid #f4f6f8;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li:nth-child(odd) {\r\n    background: rgb(244, 246, 248);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div img {}\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div p {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.5;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #656565;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div span {\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: 1px;\r\n    text-align: left;\r\n    margin: 0;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div:first-child {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div:first-child img {\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list ul li div:last-child {\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list .placeholder {\r\n    width: calc(100% + 195px);\r\n    height: 40px;\r\n    padding: 0 15px;\r\n    position: absolute;\r\n    left: -234px;\r\n    top: 1px;\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.25;\r\n    letter-spacing: 1px;\r\n    text-align: left;\r\n    color: #818289;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list .carat {\r\n    margin: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 40px;\r\n    cursor: pointer;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper div .inner_wrapper .user_card_select_list:after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 1px;\r\n    height: 20px;\r\n    position: absolute;\r\n    background-color: rgba(181, 182, 186, 0.6);\r\n    right: 40px;\r\n    top: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label .inner_wrapper .valid_element_indicator {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper label {\r\n    width: 100%;\r\n    max-width: 276px;\r\n    height: 40px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div {\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper {\r\n    margin-top: 10px;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper {\r\n    width: 100%;\r\n    max-width: 141px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown {\r\n    height: 40px;\r\n    width: auto;\r\n    border: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown span {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.25;\r\n    text-align: left;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown .selected {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-right: 18px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #818289;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown>div {\r\n    max-height: 130px;\r\n    width: 131px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .select_year_wrapper .dropdown>div {\r\n    left: -66px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown>div ul {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    background: none !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown>div ul li {\r\n    width: 32px;\r\n    height: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.25;\r\n    text-align: left;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown>div {\r\n    border-top: none !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .select_month_wrapper .dropdown {\r\n    border-top: 1px solid #b5b6ba;\r\n    border-right: none;\r\n    border-bottom: 1px solid #b5b6ba;\r\n    border-left: 1px solid #b5b6ba;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .select_month_wrapper .dropdown.open {\r\n    border-top: 1px solid #b5b6ba;\r\n    border-right: none;\r\n    border-bottom: none;\r\n    border-left: 1px solid #b5b6ba;\r\n    border-radius: 4px 0 0 0 !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .select_year_wrapper .dropdown {\r\n    border-top: 1px solid #b5b6ba;\r\n    border-right: 1px solid #b5b6ba;\r\n    border-bottom: 1px solid #b5b6ba;\r\n    border-left: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .cvv_wrapper {\r\n    width: 100%;\r\n    max-width: 90px;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .cvv_wrapper label input {\r\n    width: 90px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    border: solid 1px rgba(181, 182, 186, 0.6);\r\n    padding-left: 15px;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div {\r\n    height: 40px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper p {\r\n    margin: 0 0 10px 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div .select_month_wrapper,\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div .select_year_wrapper {\r\n    width: 50%;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div .select_month_wrapper .dropdown {\r\n    border-radius: 4px 0 0 4px;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown {\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .dropdown.open {\r\n    background: #fff !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div .select_month_wrapper .dropdown:after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 1px;\r\n    height: 20px;\r\n    border-right: solid 1px rgba(181, 182, 186, 0.6);\r\n    position: absolute;\r\n    top: 11px;\r\n    right: 0;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .bg_card_wrapper .select_date_and_cvv_wrapper .mobile_selected_wrapper>div .select_year_wrapper .dropdown {\r\n    border-radius: 0 4px 4px 0;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .send_user_msg_checker {\r\n    pointer-events: all !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .send_user_msg_checker,\r\n  .mobile_main_content .mobile_card_transfer .save_user_card_checker {\r\n    padding: 0 15px;\r\n    margin: 0 auto 20px;\r\n    position: relative;\r\n    /*pointer-events: none;*/\r\n    background: none !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .send_user_msg_checker .inner_checker_wrapper,\r\n  .mobile_main_content .mobile_card_transfer .save_user_card_checker .inner_checker_wrapper {\r\n    width: 100%;\r\n    max-width: 326px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0 15px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .send_user_msg_checker p {\r\n    margin-left: 50px !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .send_user_msg_checker p,\r\n  .mobile_main_content .mobile_card_transfer .save_user_card_checker p {\r\n    margin: 0 5px 0 10px;\r\n    font-size: 14px;\r\n    line-height: 1.25;\r\n    text-align: left;\r\n    color: rgb(58, 63, 82);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .save_user_card_checker p {\r\n    margin-left: 55px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .main_phone_number_wrapper {\r\n    width: 100%;\r\n    max-width: 326px;\r\n    position: relative;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send,\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper {\r\n    padding: 0 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send {\r\n    max-width: 326px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper {\r\n    width: 100%;\r\n    max-width: 326px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send>div,\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper>div {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    line-height: 1.67;\r\n    text-align: left;\r\n    color: #b5b6ba;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send>div span,\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper>div span {\r\n    padding-left: 17px;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send .sended_amount {\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send .sended_amount,\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper .enter_you_phone_number {\r\n    width: 100%;\r\n    max-width: 270px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background-color: rgb(255, 255, 255);\r\n    border: solid 1px rgb(181, 182, 186);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper .enter_you_phone_number {\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    line-height: 1.25;\r\n    letter-spacing: 1px;\r\n    text-align: left;\r\n    color: rgb(36, 36, 36);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .enter_amount_send .valid_element_indicator,\r\n  .mobile_main_content .mobile_card_transfer .your_phone_number_wrapper .valid_element_indicator {\r\n    top: 40px;\r\n    left: 290px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .button_wrapper {\r\n    margin: 30px auto 40px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .button_wrapper .next_button {\r\n    width: 196px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n    border-radius: 4px;\r\n    background-color: rgb(253, 130, 71);\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.14;\r\n    text-align: center;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: none;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .mobile_footer .item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 180px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .mobile_footer .item img {\r\n    width: 80px;\r\n    height: 48px;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .second_step .bg_card_wrapper {\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0 2px 8px 0 rgba(181, 182, 186, 0.16);\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: all .2s ease;\r\n    position: absolute;\r\n    z-index: 2;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient.show {\r\n    height: 335px !important;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient input {\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient>div {\r\n    max-width: 326px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient .input_wrapper {\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient .input_wrapper input {\r\n    width: 296px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background-color: rgb(255, 255, 255);\r\n    border: solid 1px rgb(231, 231, 231);\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient .input_wrapper textarea {\r\n    width: 296px;\r\n    height: 140px;\r\n    border-radius: 4px;\r\n    background-color: rgb(255, 255, 255);\r\n    border: solid 1px rgb(231, 231, 231);\r\n    padding: 10px;\r\n    resize: none;\r\n    font-family: OpenSansRegular !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient .save_button_wrapper {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 0 15px 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .inform_the_recipient .save_button_wrapper .save_button {\r\n    width: 160px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    border: solid 1px #fd8247;\r\n    background: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    line-height: 100%;\r\n    text-transform: uppercase;\r\n    color: #fd8247;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    font-family: OpenSansSemiBold;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .msg_saved {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .msg_saved p {\r\n    align-items: center;\r\n    color: #b5b6ba;\r\n    display: flex;\r\n    font-size: 12px;\r\n    height: auto;\r\n    justify-content: center;\r\n    line-height: 1.67;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block {\r\n    margin: 15px auto;\r\n    padding: 0 15px;\r\n    position: relative;\r\n    max-width: 326px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .item {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    line-height: 2.14;\r\n    text-align: left;\r\n    color: #656565;\r\n    height: 30px;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .item span {\r\n    font-family: OpenSansSemiBold;\r\n    color: #fd8247;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .helper_info.show_helper {\r\n    display: block !important;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .helper_info {\r\n    display: none;\r\n    top: -94px;\r\n    height: 85px;\r\n    left: 17px;\r\n    right: auto;\r\n    width: 266px;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.5;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #242424;\r\n    z-index: 5;\r\n    position: absolute;\r\n    background: #fff;\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .5);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .helper_info:after {\r\n    background: rgba(0, 0, 0, 0) url(\"/front/index/img/triangle.png\") repeat scroll 0 0;\r\n    bottom: -8px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 8px;\r\n    position: absolute;\r\n    right: 102px;\r\n    width: 14px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .commission_info_block .helper_info.show_helper {\r\n    display: flex;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .second_step>.button_wrapper {\r\n    margin: 0 auto 40px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step {}\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content {\r\n    flex-direction: column;\r\n    width: 296px;\r\n    min-height: 414px;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0 2px 6px 0 rgba(36, 36, 36, 0.3);\r\n    margin: 13px auto 40px;\r\n    min-height: auto;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .title {\r\n    height: 65px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom: 1px dashed #fd8247;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .title p {\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    color: #4f5467;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .title p span {\r\n    color: #fd8247;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    align-items: center;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.total {\r\n    padding: 20px 15px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.total p {\r\n    text-transform: none;\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.71;\r\n    text-align: left;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.total span {\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    text-align: right;\r\n    color: #242424;\r\n    font-family: OpenSansRegular;\r\n    letter-spacing: normal;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.phone_sms {\r\n    flex-direction: column;\r\n    padding: 0 15px 20px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.phone_sms div:first-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.phone_sms div:first-child p {\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.71;\r\n    text-align: left;\r\n    color: #656565;\r\n    text-transform: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item.phone_sms input {\r\n    width: 196px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #e7e7e7;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n    letter-spacing: 5px;\r\n    text-align: center;\r\n    color: #242424;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .button_wrapper {\r\n    margin: 0 auto 20px;\r\n    padding: 0 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .button_wrapper button,\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .button_wrapper input {\r\n    width: 128px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    border: solid 1px #fd8247;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    background: #fd8247;\r\n    border: 1px solid #fd8247;\r\n    font-family: OpenSansSemiBold;\r\n    padding: 0 8px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .button_wrapper button {\r\n    background: none;\r\n    color: #fd8247\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item p {\r\n    font-size: 12px;\r\n    line-height: 1.67;\r\n    text-align: left;\r\n    color: #b5b6ba;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item span {\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.71;\r\n    letter-spacing: 0.5px;\r\n    text-align: right;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item .helper_info {\r\n    top: -60px;\r\n    bottom: auto;\r\n    left: 40px;\r\n    right: 45px;\r\n    position: absolute;\r\n    display: none;\r\n    background: white;\r\n    z-index: 5;\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    box-shadow: 0 2px 8px 0 rgba(181, 182, 186, .5);\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item .helper_info p {\r\n    font-family: OpenSansRegular;\r\n    color: #242424;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item .helper_info.show_element {\r\n    display: block;\r\n  }\r\n\r\n  .mobile_main_content .mobile_card_transfer .third_step .main_content .item .helper_info:after {\r\n    background: rgba(0, 0, 0, 0) url(\"/front/index/img/triangle.png\") repeat scroll 0 0;\r\n    bottom: -8px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 8px;\r\n    position: absolute;\r\n    right: 38px;\r\n    width: 14px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content {\r\n    width: 300px;\r\n    height: auto;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.6);\r\n    border: solid 1px #f4f6f8;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content h2 {\r\n    font-size: 18px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.56;\r\n    text-align: center;\r\n    color: rgb(79, 84, 103);\r\n    margin: 20px auto 10px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .success_text {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .success_text p {\r\n    font-size: 14px;\r\n    line-height: 1.71;\r\n    text-align: center;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .success_text span {\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 9px 15px;\r\n    min-height: 40px;\r\n    border-bottom: 1px solid #f4f6f8\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .item:last-child {\r\n    border-bottom: 1px dashed #fd8247;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .item p {\r\n    font-size: 12px;\r\n    line-height: 2;\r\n    text-align: left;\r\n    color: #b5b6ba;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .item span {\r\n    font-size: 14px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.71;\r\n    text-align: right;\r\n    color: #242424;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .item.commission span {\r\n    color: #fd8247;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .link_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    padding: 0 15px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .link_wrapper a {\r\n    text-decoration: underline;\r\n    font-size: 14px;\r\n    line-height: 1.43;\r\n    text-align: left;\r\n    color: #fd8247;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 20px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .link_wrapper a:first-child {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .link_wrapper a span {\r\n    margin-left: 10px;\r\n    display: block;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .congratulations_content .zigzag_bg {\r\n    background: rgba(255, 255, 255, 0) url(\"/front/index/img/receipt-zigzag.svg\") no-repeat scroll center bottom;\r\n    position: absolute;\r\n    bottom: -16px;\r\n    top: auto;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .user_actions {\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .user_actions p {\r\n    font-size: 14px;\r\n    line-height: 1.71;\r\n    text-align: center;\r\n    color: #242424;\r\n    font-family: OpenSansRegular;\r\n    letter-spacing: -0.1px;\r\n    margin: 20px auto;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .user_actions .button_wrapper {\r\n    flex-direction: column;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .user_actions .button_wrapper button {\r\n    width: 196px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    border: solid 1px #fd8247;\r\n    color: #fd8247;\r\n    background: none;\r\n    font-family: OpenSansSemiBold;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .fourth_step .main_content .user_actions .button_wrapper .button_make_translation {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item {\r\n    background: #fff;\r\n    padding: 20px 15px;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .title {\r\n    width: 100%;\r\n    height: 48px;\r\n    max-width: 226px;\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    color: #4f5467;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .title p {\r\n    font-size: 16px;\r\n    font-family: OpenSansSemiBold;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    color: #4f5467;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .title .close_button {\r\n    top: 15px;\r\n    right: 15px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body {}\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .sended_email {\r\n    font-size: 14px;\r\n    line-height: 1.71;\r\n    text-align: center;\r\n    color: #242424;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .orange_border {\r\n    margin: 20px auto 18px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .user_actions p {\r\n    font-size: 14px;\r\n    line-height: 1.43;\r\n    text-align: center;\r\n    color: #242424;\r\n    max-width: 250px;\r\n    margin: 0 auto 20px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .user_actions .button_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .user_actions .button_wrapper button {\r\n    width: 196px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    border: solid 1px #fd8247;\r\n    color: #fd8247;\r\n    background: none;\r\n    font-family: OpenSansSemiBold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .user_actions .button_wrapper button:last-child {\r\n    margin: 0;\r\n  }\r\n\r\n  .mobile_main_content .card_transfer_wrapper .modal_wrapper .item .item_body .user_actions .button_wrapper .no_thx {\r\n    border: none;\r\n    height: 20px;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 1.43;\r\n    text-align: center;\r\n    color: #fd8247;\r\n    text-decoration: underline;\r\n    text-transform: none;\r\n  }\r\n\r\n  .mobile_main_content .modal_wrapper .title,\r\n  .mobile_main_content .modal_wrapper .inner_content .inner_content {\r\n    width: 100%;\r\n    max-width: 430px;\r\n  }\r\n\r\n  .mobile_main_content .modal_wrapper.modal_no_save_card .inner_content {\r\n    max-height: 345px;\r\n    overflow: auto;\r\n  }\r\n\r\n  .mobile_main_content .helper_for_phone_number {\r\n    position: absolute;\r\n    width: 20px;\r\n    left: 200px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .mobile_main_content .helper_for_phone_number .helper_info {\r\n    position: absolute;\r\n    right: -65px;\r\n    top: -40px;\r\n    bottom: auto;\r\n    left: auto;\r\n    width: 238px;\r\n    font-size: 12px;\r\n    height: auto;\r\n    padding: 5px;\r\n    line-height: 1.3;\r\n    display: none;\r\n    box-shadow: 0 2px 10px 0 rgba(79, 84, 103, 0.2);\r\n    background: #fff;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .mobile_main_content .helper_for_phone_number .helper_info:after {\r\n    right: 62px;\r\n    background: rgba(255, 255, 255, 1) url(/front/index/img/helper_angle.png) no-repeat scroll 0 0;\r\n    bottom: -10px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 10px;\r\n    position: absolute;\r\n    width: 16px\r\n  }\r\n}\r\n\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-appearance: none;\r\n  -webkit-border-radius: 0;\r\n}\r\n\r\n@media screen and (min-width:320px) and (max-width:600px) {\r\n  /*BEGIN MOBILE PAYMENTS*/\r\n  /*    html body .services_page,\r\n      html body .services_page .main_content{\r\n          height: auto;\r\n      }*/\r\n\r\n  html body .services_page .payments_wrapper {\r\n    position: relative;\r\n    z-index: 5;\r\n    transition: all .2s ease;\r\n    height: auto;\r\n    overflow: auto;\r\n    display: none;\r\n    overflow: hidden;\r\n    margin-top: -110px;\r\n    min-height: auto;\r\n  }\r\n\r\n  .breadcrumbs li {\r\n    display: none;\r\n  }\r\n\r\n  .breadcrumbs li:last-child {\r\n    display: flex;\r\n    margin: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile_service_list_title {\r\n    position: relative;\r\n  }\r\n\r\n  html body .mobile_version .payments_wrapper {\r\n    display: block;\r\n    min-height: 540px;\r\n    max-width: 460px;\r\n    margin: -57px auto 0;\r\n  }\r\n\r\n  html body .mobile_version .services_list {\r\n    display: none;\r\n  }\r\n\r\n  html body .services_content {\r\n    max-height: none;\r\n    height: auto;\r\n  }\r\n\r\n  html body .services_content .service_item_wrapper {\r\n    height: 100%;\r\n    flex-wrap: nowrap;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .services_content .location_select_wrapper {\r\n    width: calc(100% - 30px);\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 15px auto 0;\r\n    max-width: 330px;\r\n  }\r\n\r\n  .services_content .location_select_wrapper .dropdown {\r\n    width: 100%;\r\n  }\r\n\r\n  .services_content .filter_elements_wrapper span:first-child {\r\n    display: none;\r\n  }\r\n\r\n  .services_content .filter_elements_wrapper {\r\n    flex-direction: column;\r\n    height: auto !important;\r\n    min-height: auto;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    padding: 15px;\r\n    margin: 0;\r\n    background: #fbfbfc !important;\r\n  }\r\n\r\n  .services_content .service_item_wrapper {\r\n    background: #fff;\r\n  }\r\n\r\n  .services_content .service_item_wrapper .service_item_inner_wrapper {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .services_content .service_item_wrapper .service_item_inner_wrapper .additional_wrapper {\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    min-height: 100%;\r\n    height: auto;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .services_content .service_content_item {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    min-height: 60px;\r\n    border-bottom: 1px solid #f4f6f8;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 60px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    background: #fff;\r\n    border-top: 0;\r\n    border-right: 0;\r\n    border-left: 0;\r\n  }\r\n\r\n  .services_content .service_content_item div {\r\n    position: relative;\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n  }\r\n\r\n  .services_content .service_content_item .service_icon {\r\n    max-width: 40px;\r\n    min-height: 40px;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .services_content .service_content_item .service_name {\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n  }\r\n\r\n  .services_content .service_content_item .service_name p {\r\n    text-align: left;\r\n    width: 100%;\r\n  }\r\n\r\n  .services_page,\r\n  .payments_wrapper,\r\n  .services_page .main_content {\r\n    min-height: auto;\r\n  }\r\n\r\n  .services_page .main_content {\r\n    background: #fbfbfc none repeat scroll 0 0;\r\n  }\r\n\r\n  /*    .services_page .main_content{\r\n          max-height: 530px\r\n      }*/\r\n  .search_no_result {\r\n    width: 100%;\r\n    height: calc(100vh - 234px);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  /*END MOBILE PAYMENTS*/\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cats/cat.component.html":
/*!****************************************************!*\
  !*** ./src/app/components/cats/cat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services_page\" id=\"services_page\">\n  <div class=\"main_content\">\n\n    <div class=\"services_list\">\n      <div class=\"tabs\">\n        <div class=\"tab_transfer mobile_hide\">\n          <div class=\"tab_header\">\n            <a href=\"/card2card\">Переводы</a>\n          </div>\n        </div>\n        <div class=\"tab_payments mobile_hide\">\n          <div class=\"tab_header active\">\n            <a href=\"/oplata-uslug\">Платежи</a>\n          </div>\n        </div>\n\n        <div class=\"payments_tab_content show_tab_content mobile_hide\" id=\"payments_tab_content\" style=\"display:block\">\n\n          <div *ngFor=\"let cat of categories\" class=\"tab_item_content\" [ngClass]=\"{active: cat.id === category.id}\" >\n            <div class=\"tab_item_name\">\n              <a href=\"{{cat.path}}\" id=\"{{cat.id}}\">\n                <div class=\"tab_item_content_icon\"></div>{{cat.name}}\n              </a>\n            </div>\n          </div>\n\n        </div>\n          \n      </div>\n    </div>\n    <div class=\"payments_wrapper\" id=\"payments_wrapper_id\">\n\n\n      <div class=\"services_content\">\n        <div class=\"services_content_header\">\n          <ol itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\" class=\"breadcrumbs\">\n            <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n              <a itemprop=\"item\" href=\"https://uplata.ua/\">\n                <span itemprop=\"name\">Главная</span>\n              </a>\n              <meta itemprop=\"position\" content=\"1\">\n            </li>\n\n            <li><img src=\"https://uplata.ua/front/index/img/triangle.svg\" alt=\"\"></li>\n\n            <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n              <h1 itemprop=\"name\">{{category.name}}</h1>\n              <meta itemprop=\"position\" content=\"2\">\n            </li>\n          </ol>\n        </div>\n\n        <div class=\"filter_elements_wrapper mobile_hide\">\n          <span>регион</span>\n\n          <div class=\"search\">\n            <form action=\"/search\" name=\"inner_tpl_search_form\" class=\"inner_tpl_search_form\">\n              <input type=\"text\" class=\"search_input\" id=\"tpl_search\" name=\"search_input\" placeholder=\"Поиск\"\n                autocomplete=\"off\" value=\"\">\n              <input type=\"submit\" value=\"\" name=\"search_button_submit\" class=\"search_button_submit\">\n            </form>\n            <div class=\"autocomplete-suggestions\"></div>\n          </div>\n        </div>\n\n        <div class=\"service_item_wrapper\">\n          <div class=\"service_item_inner_wrapper\">\n            <div class=\"additional_wrapper\" *ngIf=\"category\">\n\n              <a\n                *ngFor=\"let method of category.methods\"\n                \n                href=\"{{method.path}}\"\n                class=\"service_content_item\"\n              >\n                <div class=\"service_icon\">\n                  <img src=\"{{method.icon}}\" alt=\"{{method.alt}}\" title=\"{{method.title}}\">\n                </div>\n                <div class=\"service_name\">\n                  <p>{{method.name}}</p>\n                </div>\n              </a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"payments_content_footer mobile_hide\">\n        <div class=\"item\">\n          <img src=\"https://uplata.ua/front/index/img/paysystem-logo-master-card-securecode.png\" alt=\"MasterCard SecureCode | сервис uplata.ua\"\n            title=\"MasterCard SecureCode\">\n          <img src=\"https://uplata.ua/front/index/img/verified-by-visa-logo.png\" alt=\"Verified by Visa | сервис uplata.ua\"\n            title=\"Verified by Visa\">\n        </div>\n        <div class=\"item\">\n          <p> <span></span> </p>\n          <div class=\"phone_info\">\n            <ul>\n              <li></li>\n              <li></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/cats/cat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/cats/cat.component.ts ***!
  \**************************************************/
/*! exports provided: CatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatComponent", function() { return CatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_cats_cats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/cats/cats.service */ "./src/app/services/cats/cats.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatComponent = /** @class */ (function () {
    function CatComponent(CS, route) {
        this.CS = CS;
        this.route = route;
    }
    CatComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getCategory();
    };
    CatComponent.prototype.getCategories = function () {
        var _this = this;
        this.CS.getCategories().subscribe(function (cats) { return _this.categories = cats; });
    };
    CatComponent.prototype.getCategory = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.CS.getCategory("popolnit-mobilnyy")
            .subscribe(function (cat) { return _this.category = cat; });
    };
    CatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cats',
            template: __webpack_require__(/*! ./cat.component.html */ "./src/app/components/cats/cat.component.html"),
            styles: [__webpack_require__(/*! ./cat.component.css */ "./src/app/components/cats/cat.component.css")]
        }),
        __metadata("design:paramtypes", [services_cats_cats_service__WEBPACK_IMPORTED_MODULE_2__["CatsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CatComponent);
    return CatComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dialogs/login/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dialogs/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dialogs/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substrate_black_on_index_page show\" id=\"substrate_black_on_index_page\"></div>\n<div class=\"main_content start_page_body login_element show\" id=\"login_page_body\">\n    <div class=\"login_form form_element\">\n        <div class=\"form_header mobile_hide\">\n            <span class=\"mobile_hide\">Вход</span>\n            <button class=\"close\" data-operation=\"close-login\" (click)=\"close()\"></button>\n        </div>\n        <form action=\"#\" name=\"main_login_form\" id=\"main_login_form\" class=\"main_login_form\" data-form=\"login\">\n            <div class=\"input_wrapper\">\n                <input name=\"user_email\" class=\"user_email\" id=\"user_email_login\" type=\"text\" maxlength=\"50\" placeholder=\"Email\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,50}$\" required=\"required\" autocomplete=\"off\">\n                <div class=\"valid_element_indicator\"></div>\n                <div class=\"user_info_error exist_email\">\n                    <p>Вход<a href=\"#\">Указанный email еще не зарегистрирован.</a></p>\n                    <span></span>\n                </div>\n                <div class=\"user_info_error wrong_written_email\" data-hint=\"\">\n                    <p>Email введен неверно, проверьте правильность ввода.</p>\n                    <span></span>\n                </div>\n            </div>\n            <div class=\"input_wrapper\">\n\n                <input data-mobile-disable=\"\" name=\"user_password\" class=\"user_password\" id=\"user_password_login\" type=\"password\" placeholder=\"Пароль\" required=\"required\" autocomplete=\"off\" readonly=\"\" onfocus=\"$(this).removeAttr('readonly');\" onblur=\"$(this).attr('readonly', 'readonly');\">\n                \n                <div class=\"valid_element_indicator\"></div>\n                <span class=\"show_password\"></span>\n                <div class=\"user_info_error error_password\" data-hint=\"\">\n                    <p>Зарегистрироваться?</p>\n                    <span></span>\n                </div>\n                <div class=\"user_info_error blocked_account\" data-hint=\"\">\n                    <p>Вы опять ввели неверный пароль. Ваш аккаунт будет разблокирован через: <span class=\"time\"></span> минут</p>\n                    <span></span>\n                </div>\n            </div>\n            <a href=\"#\">Забыли пароль?</a>\n            <input type=\"submit\" value=\"войти\" class=\"enter_button wrong_email wrong_password\" id=\"enter_button\" data-submit=\"login\">\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dialogs/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dialogs/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], LoginComponent.prototype, "close", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/dialogs/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/dialogs/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/signup/signup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dialogs/signup/signup.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dialogs/signup/signup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dialogs/signup/signup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substrate_black_on_index_page show\" id=\"substrate_black_on_index_page\"></div>\n<div class=\"main_content start_page_body registration_element modal_registration_window show\" id=\"registration_page_body\">\n    <div class=\"login_form form_element\">\n        <div class=\"form_header mobile_hide\">\n            <span class=\"mobile_hide\">Регистрация</span>\n            <button class=\"close\" (click)=\"close()\"></button>\n        </div>\n        \n\n        <div class=\"form_reg_main_wrapper\">\n            <form action=\"#\" name=\"registration_form\" id=\"registration_form\" class=\"main_login_form registration_form main_registration_form\">\n                <div class=\"input_wrapper\">\n                    <input type=\"text\" class=\"fake_input\" name=\"user_email\" disabled=\"disabled\" tabindex=\"-1\">\n                    <input name=\"user_email\" class=\"user_email reg_required_input_check_edge main_reg_user_email_input\" id=\"user_email\" maxlength=\"50\" type=\"text\" placeholder=\"Email\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,50}$\" required=\"required\" autocomplete=\"off\" value=\"\">\n                    <div class=\"valid_element_indicator\"></div>\n                    <div class=\"user_info_error user_email_exist_login\">\n                        <p>Этот email уже зарегистрирован. Если помните пароль <a href=\"#\" class=\"enter_on_site\">войдите на сайт</a> Если забыли - <a href=\"#\" class=\"reset_you_password\">нажмите сюда.</a></p>\n                        <span></span>\n                    </div>\n                    <div class=\"user_info_error wrong_written_email\">\n                        <p>Email введен неверно, проверьте правильность ввода.</p>\n                        <span></span>\n                    </div>\n                </div>\n\n                <div class=\"input_wrapper\">\n                    <input name=\"user_name\" class=\"user_name reg_required_input_check_edge\" id=\"user_name\" maxlength=\"30\" type=\"text\" placeholder=\"Имя\" pattern=\"[A-Za-zА-Яа-яЁёЇїҐґЄєІі0-9-!#$%&amp;'()* ,./:;<=>?@[\\\\\\]_`'{|}~]{2,50}\" required=\"required\" autocomplete=\"off\" value=\"\">\n                    <div class=\"valid_element_indicator\"></div>\n                </div>\n\n                <div class=\"input_wrapper\">\n                    <input name=\"user_phone\" class=\"user_phone reg_required_input_check_edge\" id=\"user_phone\" type=\"text\" placeholder=\"Номер телефона\" pattern=\"[0-9/ /()+-]{23,}\" autocomplete=\"off\" maxlength=\"23\">\n                    <div class=\"valid_element_indicator\"></div>\n                    <div class=\"user_info_error existing_user_phone\">\n                        <p>Указанный номер уже закреплен за одним из наших Клиентов. Пожалуйста, укажите другой номер телефона.  <a class=\"phone_error_login\" href=\"#\">Войти на сайт</a> или воспользоваться сервисом <a class=\"phone_error_reset_pass\" href=\"#\">сброс пароля</a></p>\n                        <span></span>\n                    </div>\n                </div>\n\n\n                <div class=\"input_wrapper\">\n                        <input type=\"password\" name=\"user_password\" class=\"fake_input\" tabindex=\"-1\" disabled=\"disabled\">\n                        <input name=\"user_password\" class=\"user_password reg_required_input_check_edge\" id=\"user_password\" type=\"password\" placeholder=\"Пароль\" required=\"required\" autocomplete=\"off\">\n                        <div class=\"valid_element_indicator\"></div>\n                    <span class=\"show_password\"></span>\n                    <div class=\"user_info_error little_password\">\n                        <p>Пароль должен состоять не менее чем из 8 букв, цифр, спецсимволов</p>\n                        <span></span>\n                    </div>\n                    <div class=\"user_info_error common\">\n                        <p>Распространенный пароль или слово</p>\n                        <span></span>\n                    </div>\n                    <div class=\"user_info_error easy_password\">\n                        <p>Пароль должен состоять не менее чем из 8 букв, цифр, спецсимволов</p>\n                        <span></span>\n                    </div>\n                </div>\n\n                <div class=\"input_wrapper user_repeat_password_element\">\n                    <input name=\"user_repeat_password\" class=\"user_repeat_password reg_required_input_check_edge\" id=\"user_repeat_password\" type=\"password\" placeholder=\"Повторите пароль\" required=\"required\" autocomplete=\"off\">\n                    <div class=\"valid_element_indicator\"></div>\n                    <span class=\"show_password\"></span>\n                    <div class=\"user_info_error\">\n                        <p>Пароли не совпадают</p>\n                        <span></span>\n                    </div>\n                </div>\n\n                <div class=\"input_wrapper\">\n                    <input name=\"promo_code\" class=\"promo_code\" id=\"promo_code\" type=\"text\" placeholder=\"Промокод, если он есть\" pattern=\"[A-Za-zА-яа-я]{1,50}\" autocomplete=\"off\" value=\"\">\n                    <span class=\"helper\"></span>\n                    <div class=\"valid_element_indicator\"></div>\n                    <div class=\"user_info_error expired\">\n                        <p>К сожалению, срок действия данного промокода уже закончился :(</p>\n                        <span></span>\n                    </div>\n                    <div class=\"user_info_error not_exist\">\n                        <p>Нам очень жаль, но такого промокода не существует. Проверьте, правильно ли вы его написали</p>\n                        <span></span>\n                    </div>\n                    <div class=\"helper_info\">\n                        <p>Введите ваш инвайткод из цифр 0-9 и букв (латиница A..Z, a..z) длиной до 10 символов</p>\n                        <span></span>\n                    </div>\n                </div>\n                <div class=\"user_agreement\">\n                    <p>Создавая аккаунт, я принимаю <a href=\"/oferta\" target=\"_blank\">условия Публичного договора</a></p>\n                </div>\n                <input type=\"submit\" value=\"ЗАРЕГИСТРИРОВАТЬСЯ\" disabled=\"disabled\" class=\"reg_button obscene_name wrong_user_reg_password not_same_passwords user_mail_invalid error_user_name exist_user_phone not_valid no_valid_captcha\" id=\"main_enter_button\">\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dialogs/signup/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dialogs/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SignupComponent.prototype, "close", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/dialogs/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/dialogs/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/bezopasnost/bezopasnost.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/bezopasnost/bezopasnost.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/bezopasnost/bezopasnost.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/bezopasnost/bezopasnost.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"security_wrapper\">\n    <div class=\"rates security\">\n        <div class=\"main_header\">\n            <div>\n                <ol class=\"breadcrumbs info_pages\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n                    <li class=\"main_home_link\" itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                        <a href=\"https://uplata.ua/\" itemprop=\"item\">\n                            <span itemprop=\"name\">\n                                Главная\n                            </span>\n                        </a>\n                        <meta content=\"1\" itemprop=\"position\">\n                        \n                    </li>\n                    <li>\n                        <img alt=\"\" src=\"https://uplata.ua//front/index/img/triangle.svg\">\n                    </li>\n                    <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                        <h1 itemprop=\"name\">\n                            Безопасность\n                        </h1>\n                        <meta content=\"2\" itemprop=\"position\">\n                        \n                    </li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"sector\">\n            <div class=\"icon\">\n                <img alt=\"Безопасные платежи и переводы с поддержкой Secure Sockets Layer (SSL) | сервис Uplata.com.ua\" src=\"https://uplata.ua/front/index/img/paysystem-logo-ssl.svg\" title=\"Безопасные платежи и переводы с поддержкой Secure Sockets Layer (SSL)\">\n                    <p>\n                        SSL\n                    </p>\n                \n            </div>\n            <div class=\"info\">\n                <p>\n                    Криптографический протокол Secure Sockets Layer (SSL) – обеспечивает конфиденциальное соединение и безопасную передачу данных благодаря современным методам шифрования. Принцип безопасности – один из ключевых для Uplata. Поэтому мы осуществляем автоматическое ssl-шифрование данных при передаче любой конфиденциальной информации от Вашего компьютера к серверу. Надежность нашего сертификата подтверждена международным агентством   , а длина ключа составляет 256 бит.\n                </p>\n            </div>\n        </div>\n        <div class=\"sector\">\n            <div class=\"icon\">\n                <div class=\"logo_item for_pci_dss\">\n                    <a class=\"pci_dss_link\" href=\"http://compliance-control.eu/cert/uplata/pcidss_compliance.html\" target=\"_blank\">\n                        <img alt=\"Безопасные платежи и переводы с поддержкой PCI DSS| сервис Uplata.com.ua\" class=\"gray_pci_dss\" src=\"https://uplata.ua//front/index/img/second_screen_icons/new_pci_dcc_g.png\" title=\"Безопасные платежи и переводы с поддержкой PCI DSS\">\n                        <img alt=\"Безопасные платежи и переводы с поддержкой PCI DSS| сервис Uplata.com.ua\" class=\"color_pci_dss\" src=\"https://uplata.ua//front/index/img/second_screen_icons/new_pci_dcc_c.png\" title=\"Безопасные платежи и переводы с поддержкой PCI DSS\">\n                            \n                        \n                    </a>\n                </div>\n                <!-- <img title=\"Безопасные платежи и переводы с поддержкой PCI DSS\" src=\"../../../front/index/img/paysystem-logo-pci.svg\" alt=\"Безопасные платежи и переводы с поддержкой PCI DSS| сервис Uplata.com.ua\" /> -->\n                <p>\n                    PCI DSS\n                </p>\n            </div>\n            <div class=\"info\">\n                <p>\n                    <a href=\"http://compliance-control.eu/cert/uplata/pcidss_compliance.html\" style=\"color: #fd8247 \" target=\"_blank\">\n                        Payment Card Industry Data Security Standard (PCI DSS)\n                    </a>\n                    – стандарт безопасности данных международных платежных систем Visa и MasterCard. PCI DSS еще в далеком 2006 году стал обязателен для любой компании, которая в той или иной мере осуществляет операции с платежными картами MasterCard и Visa. Не будем утомлять подробным описанием стандарта, скажем лишь, что он содержит 12 требований, начиная от построения системы защиты данных владельцев платежных карт и заканчивая разработкой всевозможных политик безопасности. Вы можете быть уверены, что любая оплата услуг или перевод денежных средств на нашем сайте происходит в соответствии с требованиями последнего стандарта PCI DSS 3.2\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/bezopasnost/bezopasnost.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/bezopasnost/bezopasnost.component.ts ***!
  \***********************************************************************/
/*! exports provided: BezopasnostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezopasnostComponent", function() { return BezopasnostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BezopasnostComponent = /** @class */ (function () {
    function BezopasnostComponent() {
    }
    BezopasnostComponent.prototype.ngOnInit = function () {
    };
    BezopasnostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bezopasnost',
            template: __webpack_require__(/*! ./bezopasnost.component.html */ "./src/app/components/pages/bezopasnost/bezopasnost.component.html"),
            styles: [__webpack_require__(/*! ./bezopasnost.component.css */ "./src/app/components/pages/bezopasnost/bezopasnost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BezopasnostComponent);
    return BezopasnostComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq\">\n    <div class=\"main_header\">\n        <ol itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\" class=\"breadcrumbs info_pages\">\n            <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\" class=\"main_home_link\">\n                <a itemprop=\"item\" href=\"https://uplata.com.ua/\">\n                    <span itemprop=\"name\">Главная</span>\n                </a>\n                <meta itemprop=\"position\" content=\"1\">\n            </li>\n\n            <li><img src=\"https://uplata.com.ua/front/index/img/triangle.svg\" alt=\"\"></li>\n\n            <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                <h1 itemprop=\"name\">FAQ или часто задаваемые вопросы</h1>\n                <meta itemprop=\"position\" content=\"2\">\n            </li>\n        </ol>\n    </div>\n    <div class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Общая информация</h2>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что такое CVV2/CVС2 код?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Код CVC2 и CVV2 - это 3-х значный код безопасности, который находится на обратной стороне Вашей банковской карты Visa/MasterCard (три последние цифры).</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что такое 3-D Secure?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>3-D SecureVerifiedbyVisa или MasterCardSecureCode - это протокол обработки Интернет-транзакций, разработанный и одобренный МПС Visa и MasterCard. Он предназначен для обеспечения безопасности интернет-платежей. Если Ваша карта поддерживает 3D Secure, в процессе оплаты Вам нужно подтвердить ее использование с помощью дополнительного ввода кода, полученного в SMS-сообщении.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что делать, если не приходит SMS-код для подтверждения 3D Secure-проверки?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Есть несколько причин, когда такое возможно:</p>\n                <ul>\n                    <li>например, у Вас к карте не подключен SMS-банкинг. Для этого следует обратиться в Ваш банк, чтобы подключить услугу. Номер контакт-центра банка находится на обратной стороне карты;</li>\n                    <li>например, за этой картой закреплен другой мобильный номер. Для этого следует обратиться в Ваш банк, чтобы изменить номер телефона;</li>\n                    <li>например, память мобильного телефона переполнена SMS-сообщениями. Попробуйте удалить некоторые SMS-ки;</li>\n                    <li>например, возникли проблемы с мобильной связью. Попробуйте выключить, а затем включить телефон для обновления настроек;</li>\n                    <li>например, технические проблемы на стороне банка, который выпустил карту. Попробуйте повторить перевод чуть позже.</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как получить квитанцию об операции в Uplata?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>В процессе оплаты услуг на сайте Uplata Вы можете указать email, на который Вам будет выслана квитанция об успешной операции. Кроме этого, мы предлагаем Вам скачать квитанцию сразу после успешного платежа/перевода или в любой момент в Истории операций (для зарегистрированных пользователей)</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Если сумма списалась со счета дважды?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>При платежах и переводах на сайте Uplata деньги перечисляются только один раз. Если средства с Вашего счета снялись дважды, то это ошибка банка. В этом случае деньги вернутся на Ваш счет автоматически.</p>\n                <p>Если же деньги не вернулись на карту, обязательно обратитесь в службу поддержки банка, выпустившего Вашу карту, а также в службу поддержки Platon, которые отвечают за процедуру оплаты услуг и перевода средств, по телефону: 0(800)750-504 - бесплатно со стационарных и мобильных телефонов всех операторов Украины; или +38(044)339-99-04 - для международных звонков.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что делать при возникновении ошибки?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Если по какой-то причине операция перевода или платежа завершилась неуспешно, пожалуйста, свяжитесь со службой поддержки наших друзей - Platon, которые помогают проводить оплату услуг и перевод средств: 0(800)750-504 - бесплатно со стационарных и мобильных телефонов всех операторов Украины; или +38(044)339-99-04 - для международных звонков.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Переводы:</h2>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Где просмотреть размер комиссии, которая будет сниматься при переводе?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Комиссия за перевод с карты на карту зависит от направления перевода: с карты Uplata на карту Uplata - БЕСПЛАТНО; с карты любого банка на карту Uplata - 5 грн.; с карты Uplata на карту любого банка - 1%; с карты любого банка на карту любого банка - 1% от суммы перевода +5 грн. Комиссия списывается с Вашей карты вместе с суммой перевода. </p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что я должен сделать, чтобы перевести деньги с карты на карту?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Для перевода между картами нужно указать:</p>\n                <ul>\n                    <li>Ваш номер карты, срок ее действия, а также секретный CVV2 / CVC2 код указанный на обороте карты</li>\n                    <li>номер карты, на которую Вы переводите деньги</li>\n                    <li>сумму перевода (внимание: она не должна превышать 25 000 грн)</li>\n                </ul>\n                <p>Кроме этого мы можем помочь сообщить Получателю о Вашем переводе, а именно:</p>\n                <ul>\n                    <li>отправить ему от нас уведомление. Для этого просто укажите номер его телефона</li>\n                    <li>написать ему письмо с комментарием от Вас. Для этого укажите email получателя, и в текстовом поле напишите текст комментария.</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Между какими картами можно делать переводы?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>На нашем сайте Вы можете переводить деньги между любыми гривневыми картами любых банков Украины. Единственное исключение - корпоративные карты предприятий. Важно, чтобы карта, с которой Вы отправляете деньги была открыта для интернет-расчетов. Узнать, открыта ли карта для интернет-расчетов можно в контакт-центре банка по телефону, указанному на обороте карты.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как быстро деньги будут зачислены на карту получателя?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>В большинстве случаев деньги зачисляются на карту моментально. В редких случаях, зачисление может происходить до 3-х дней. Такой форс-мажор может произойти исключительно, если задержка происходит на стороне банка – получателя перевода.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>В какой валюте можно переводить деньги с карты на карту?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Согласно законодательству Украины, Вы можете делать переводы только в гривне.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Почему перевод не прошел?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Самые популярные причины возникновения ошибок или отмены перевода:</p>\n                <ul>\n                    <li>Ваша карта закрыта для операций в интернет или установлен лимит на операции</li>\n                    <li>на карте Получателя существует ограничение на пополнение</li>\n                    <li>на Вашей карте недостаточно средств</li>\n                    <li>срок действия карты истек</li>\n                    <li>на Вашей карте отключена проверка CVV кода</li>\n                    <li>Вы переводите средства с (на) карту Приватбанка, который может ограничивать возможность переводов на внешних сервисах</li>\n                </ul>\n                <p>Чтобы наверняка разобраться в причинах отмены операции и найти решение, обратитесь в службу поддержки вашего банка. Номер контакт-центра банка находится на обратной стороне карты.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Платежи:</h2>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Где посмотреть комиссию, которая будет сниматься при оплате?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Комиссия по каждому сервису - индивидуальна и может зависеть от суммы, на которую совершается платеж. Для просмотра комиссии выберите интересующую Вас услугу, введите номер счета, сумму. Здесь же Вы увидите комиссию по данному платежу.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как быстро платеж поступит на счет поставщика услуг?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Как правило, деньги поступают на счет компании-поставщика услуг не позднее, чем на следующий банковский день после проведения платежа. Со многими компаниями (например, мобильными операторами, интернет-провайдерами и т.д.) система работает в режиме ускоренного зачисления платежей. Платеж при этом зачисляется в течение нескольких минут</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Можно ли самостоятельно распечатать квитанцию, подтверждающую мой платеж?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Можно. Для этого воспользуйтесь опцией печати квитанции. Предложение распечатать квитанцию появляется после каждой операции оплаты или перевода. Кроме того, Вы можете отправить себе на email квитанцию в PDF</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Личный кабинет:</h2>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Для чего мне нужна регистрация?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Зарегистрировавшись, Вы получаете целый ряд преимуществ:</p>\n                <ul>\n                    <li>возможность получать денежные бонусы</li>\n                    <li>историю Ваших платежей и переводов</li>\n                    <li>осуществлять платежи и переводы всего в 1-2 клика</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как зарегистрироваться?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Кликайте на кнопку “Регистрация”. В форме, которая откроется, достаточно указать email, имя и придумать пароль, с которым Вы будете осуществлять вход в Личный кабинет Uplata.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что делать, если мне на почту не приходит письмо для активации учетной записи?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Проверьте пожалуйста папку СПАМ, если наше письмо оказалось там по какой-либо причине, добавьте, пожалуйста, Uplata в список разрешенных адресатов.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что мне делать, если я забыл пароль?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Воспользуйтесь меню «Сбросить пароль». Укажите email, с которым Вы зарегистрированы в Uplata. На данный почтовый адрес придет ссылка, перейдя по который Вы сможете установить новый пароль входа.</p>\n            </div>\n        </div>\n    </div>\n    <div id=\"bonus_and_promocodes\" class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Бонусный счет и промокоды:</h2>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что такое бонусный счет?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Бонусный счет – это такой специальный счет, где хранятся бонусные гривны, полученные Вами в подарок от Uplata и/или заработанные за приглашение новых пользователей и участие в наших акциях. Количество бонусов на счету, а также срок их действия можно увидеть на панели верхнего меню в личном кабинете, а также в меню зарегистрированного пользователя «Бонусный счет».</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как получить бонусы?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Бонусы можно получить при регистрации по приглашению друга, за приглашение новых зарегистрированных пользователей, или просто в подарок от Uplata в честь особенного события или праздника. Кроме этого, время от времени мы проводим специальные акции и розыгрыши, которые тоже позволяют получить бонусы. Следите за нами в социальных сетях.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Что такое промокод?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Промокод – специальный код, который при активации на сайте Uplata дает пользователю определенные преимущества. Например, скидки на услуги, спецпредложения, бонусы.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Когда бонусы зачисляются на счет?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Время зачисления бонуса, зависит от события:</p>\n                <ul>\n                    <li>бонусы, которые предусматривают введение промокода (напр. инвайта), зачисляются на счет пользователя сразу</li>\n                    <li>бонусы за зарегистрированных новых пользователей зачисляются на счет после первой успешной платежной операции нового пользователя в Uplata</li>\n                    <li>бонусы, которые предоставляются в рамках акций и розыгрышей, начисляются согласно условиям конкретной акции или розыгрыша.</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Как тратить бонусы?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>В данный момент бонусы можно потратить только на оплату комиссий при совершении платежей в Uplata. Если у Вас на счету есть бонусные гривны, они будут списываться в счет комиссии автоматически и в первую очередь. Если суммы бонусов не хватает для оплаты комиссии, недостающая часть будет списана с платежной карты.</p>\n                <p>В дальнейшем мы планируем расширять список возможностей использования бонусов, поэтому следите за нашими новостями</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Можно ли оплатить комиссию за перевод с карты на карту за счет бонусов?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Пока такой возможности нет, но в будущем это будет возможно.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Когда бонусы списываются со счета?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Бонусы списываются со счета автоматически при оплате комиссии во время платежей. Кроме этого по окончанию срока действия бонусный счет автоматически обнуляется.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Где посмотреть операции по бонусному счету?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Всю историю операций по вашему бонусному счету можно посмотреть в меню «Бонусный счет» в личном кабинете. Здесь хранится информация о всех пополнениях и списаниях со счета: когда, на что, и на какую сумму изменился ваш бонусный баланс.</p>\n            </div>\n        </div>\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Какой срок действия бонусов?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Срок действия бонусов составляет 30 календарных дней со дня последнего поступления бонусов на счет. Каждое пополнение продлевает срок действия Ваших бонусов до 30 календарных дней.</p>\n                <div class=\"example\">Пример:\n                    <p>01.03.2017 Петя зарегистрировался по приглашению друга. В этот день ему на счет поступило 50 бонусных гривен, срок действия 30 дней (т.е. до 31.03.2017)</p>\n                    <p>21.03.2017 Петя заплатил коммуналку и потратил 10 бонусных гривен на оплату комиссии. У него остается 40 бонусных гривен сроком действия еще 10 дней до 31.03.2017</p>\n                    <p>25.03.2017 девушка Пети Маша, которую он пригласил в Uplata совершила свой первый платеж - пополнила мобильный. За это Петя получает +50 бонусных гривен и срок действия его бонусного счета продлевается до 30 дней.</p>\n                    <p>Таким образом у него на счету 90 бонусных гривен, сроком действия 30 дней, т.е. до 24.04.2017</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"profitable_to_invite\" class=\"sector\">\n        <div class=\"sector_header\">\n            <h2>Акции</h2>\n        </div>\n\t\t<!-- \n        <div class=\"item\" id=\"aroma\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Акция с Aroma Kava</p>\n            </div>\n            <div class=\"item_body\">\n                <p>Хочешь любой напиток от АромаКавы бесплатно?</p>\n                <p>Пополни мобильный, оплати коммуналку, игры, интернет, ТВ и  прочие услуги* на www.uplata.ua  на 500 грн, и получи напиток от Арома Кавы в подарок.</p>\n                <p>В личный кабинет тебе придет промокод, который необходимо показать в АромаКаве, - и напиток твой.</p>\n                <p>*Переводы с карту на карту в акции не участвуют.</p>\n            </div>\n        </div>\n        <script>\n            $(document).ready(function() {\n                if (location.hash == '#aroma') {\n                    $('html, body').animate({\n                        scrollTop: $('#aroma').offset().top\n                    }, 1000);\n\n                    $('#aroma .item_body').addClass('show');\n                }\n            });\n        </script>\n\t\t -->\n        <div class=\"item\">\n            <span class=\"control_button\"></span>\n            <div class=\"item_header\">\n                <p>Почему выгодно приглашать друзей в Uplata?</p>\n            </div>\n            <div class=\"item_body\">\n                <p>До 31 августа 2018 года у нас действует специальная акция для друзей. Каждый зарегистрированный пользователь Uplata может выслать своим друзьям специальное приглашение с промокодом (инвайт), зарегистрировавшись по которому новый пользователь получает 50 бонусных гривен. В свою очередь, отправитель инвайта получает еще 50 бонусных гривен для себя, как только приглашенный пользователь осуществит свою первую платежную операцию в Uplata.</p>\n                <p>Срок действия акции и размер бонуса может быть изменен. Успейте воспользоваться самым выгодным предложением ☺</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/components/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/components/pages/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-auto {\r\n    height: auto;\r\n}\r\n\r\n.height690 {\r\n    height: 690px;\r\n}"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_sections_wrapper for_one_page_scroll height-auto\">\n\n    <section class=\"first_section\">\n\n            <div class=\"slider_wrapper first_screen\">\n                <div class=\"start_page_slider slick-initialized slick-slider\"><button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" aria-label=\"Previous\" role=\"button\" style=\"\">Previous</button>\n\n                    <div aria-live=\"polite\" class=\"slick-list draggable\">\n                        <div class=\"slick-track\" role=\"listbox\" style=\"opacity: 1; width: 6624px;\">\n\n                            <div class=\"slide_item zero_element slick-slide\" data-slick-index=\"0\" aria-hidden=\"true\" tabindex=\"-1\" role=\"option\" aria-describedby=\"slick-slide00\" style=\"width: 1656px;\">\n                                <h1>Uplata — это…</h1>\n                                <p><span>самая лучшая </span><span>платежная карта</span></p>\n                                <a href=\"/karta-uplata#section_six_id\" class=\"item_button\" tabindex=\"-1\">заказать карту</a>\n                                <div class=\"poligons\"></div>\n                                <div class=\"gradient\"></div>\n                                <span class=\"overlay\"></span>\n                                <div class=\"squares\"></div>\n                                <div class=\"img_wrapper\">\n                                    <img src=\"https://uplata.ua/front/index/img/slider_images/slide0.jpg\" alt=\"Пополняйте счет и оплачивайте услуги дома | сервис Uplata.ua\" title=\"Пополняйте счет и оплачивайте услуги дома\" class=\"mobile_hide\"> \n                                    <img src=\"https://uplata.ua/front/index/img/slider_images/slide0_m.jpg\" alt=\"Пополняйте счет и оплачивайте услуги дома | сервис Uplata.ua\" title=\"Пополняйте счет и оплачивайте услуги дома\" class=\"desktop_hide\"> \n                                </div>\n        \n                                <img src=\"https://uplata.ua/front/index/img/slider_images/it-is-all-you-need-ru.svg\" alt=\"\" class=\"absolute_images first_abs_img\">\n\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" aria-label=\"Next\" role=\"button\" style=\"\">Next</button>\n                </div>\n            </div>\n  \n        <div class=\"white_bg_absolute\"></div>\n        <div class=\"second_screen\">\n            <div class=\"items_wrapper\">\n                <div class=\"item\">\n                    <div class=\"item_header\">\n                        <div class=\"logo\">\n                            <img src=\"https://uplata.ua/front/index/img/ic-goto-transfers.svg\" alt=\"Перевести деньги | сервис uplata.com.ua\" title=\"Перевести деньги\">\n                        </div>\n                        <div class=\"item_name\">\n                            <a href=\"/card2card\">Перевести деньги</a>\n                        </div>\n                    </div>\n                    <div class=\"item_body\">\n                        <div class=\"item_logo_card_wrapper\">\n                            <div class=\"item_card\">\n                                <img src=\"https://uplata.ua/front/index/img/logo-card-visa.svg\" alt=\"VISA | сервис uplata.com.ua\" title=\"VISA\">\n                            </div>\n                            <div class=\"item_card\">\n                                <img src=\"https://uplata.ua/front/index/img/logo-card-mastercard.svg\" alt=\"MasterCard | сервис uplata.com.ua\" title=\"MasterCard\">\n                            </div>\n                            <div class=\"item_card\">\n                                <img src=\"https://uplata.ua/front/index/img/logo-card-maestro.svg\" alt=\"Maestro | сервис uplata.com.ua\" title=\"Maestro\">\n                            </div>\n                        </div>\n                        <div class=\"form card2card_transfer\">\n                            <a href=\"/card2card\">С КАРТЫ НА КАРТУ</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"item_header\">\n                        <div class=\"logo\">\n                            <img src=\"https://uplata.ua/front/index/img/ic-goto-payment-mobile.svg\" alt=\"Пополнить мобильный | сервис uplata.com.ua\" title=\"Пополнить мобильный\">\n                        </div>\n                        <div class=\"item_name\">\n                            <a href=\"/popolnit-mobilnyy\">Пополнить мобильный</a>\n                        </div>\n                    </div>\n                    <div class=\"item_body\">\n                        <div class=\"form\">\n                            <form action=\"/popolnit-mobilnyy/\" class=\"second_screen_deposit_mobile_phone\" name=\"second_screen_deposit_mobile_phone\" id=\"second_screen_deposit_mobile_phone\">\n                                <label>\n                                    <span>Номер телефона</span>\n                                    <input type=\"text\" class=\"mobile_deposit_input\" name=\"user_phone\" id=\"user_phone_from_start_page\" required=\"required\" autocomplete=\"off\" placeholder=\"(000) 000 - 00 - 00\" maxlength=\"19\">\n                                </label>\n                                <label>\n                                    <span>Сумма, грн</span>\n                                    <div>\n                                        <input type=\"text\" class=\"active_input\" name=\"user_amount\" pattern=\"[0-9,.]{1,10}\" required=\"required\" autocomplete=\"off\" id=\"user_phone_amount_start_page\">\n                                        <input type=\"submit\" value=\"ВПЕРЁД\" class=\"not_valid not_valid_amount second_screen_deposit_mobile_phone_submit\">\n                                    </div>\n                                </label>\n                                \n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item communal_services\">\n                    <div class=\"item_header\">\n                        <div class=\"logo\">\n                            <img src=\"https://uplata.ua/front/index/img/ic-goto-payment-communal.svg\" alt=\"Оплатить коммуналку | сервис uplata.com.ua\" title=\"Оплатить коммуналку\">\n                        </div>\n                        <div class=\"item_name\">\n                            <a href=\"/oplata-kommunalnyh-uslug\">Оплатить коммуналку</a>\n                        </div>\n                    </div>\n                    <div class=\"item_body\">\n                        <ul>\n                            <li><a href=\"https://uplata.ua/oplata-kommunalnyh-uslug/gerc-92247/?secure\"><div class=\"logo\"><img src=\"https://cdn.uplata.com/pservices/i/2341.png\" alt=\"\"></div><p>ГЕРЦ</p></a></li>\n                            <li><a href=\"https://uplata.ua/oplata-kommunalnyh-uslug/givc-kiev-63343/?secure\"><div class=\"logo\"><img src=\"https://cdn.uplata.com/pservices/i/1360.png\" alt=\"\"></div><p>ГИВЦ</p></a></li>\n                            <li><a href=\"https://uplata.ua/internet-i-televidenie/tenet-internet-odessa-71357/?secure\"><div class=\"logo\"><img src=\"https://cdn.uplata.com/pservices/i/1583.png\" alt=\"\"></div><p>TENET</p></a></li>\n                        </ul>\n                        <a href=\"/oplata-kommunalnyh-uslug\" class=\"item_body_more_link\">Ещё…</a>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"item_header\">\n                        <div class=\"logo\">\n                            <img src=\"https://uplata.ua/front/index/img/ic-goto-payment-more.svg\" alt=\"Другие услуги | сервис uplata.com.ua\" title=\"Другие услуги\">\n                        </div>\n                        <div class=\"item_name second_screen_other_service\">\n                            <a href=\"/drugie-uslugi\">Другие услуги</a>\n                        </div>\n                    </div>\n                    <div class=\"item_body\">\n                        <p>Найди и оплати любой сервис или услугу среди более чем 1500, доступных к оплате</p>\n                        <div class=\"form\">\n                            <form action=\"/search\" class=\"second_screen_search_form\" name=\"second_screen_search_form\" id=\"second_screen_search_form\">\n                                <input type=\"text\" class=\"active_input\" placeholder=\"Поиск\" name=\"search_input\" id=\"search_input\" autocomplete=\"off\">\n                                <input type=\"submit\" value=\"\" class=\"not_valid desktop_search_button\">\n                            </form>\n                            <div class=\"autocomplete-suggestions\"><p></p></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"orange_border landing_orange_border\"></div>\n            <div class=\"info\">\n                <p>Мы работаем с ведущими международными платежными системами и поддерживаем современные технологии защиты платежей</p>\n            </div>\n            <div class=\"security\">\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-master-card-securecode.svg\" alt=\"MasterCard SecureCode | сервис uplata.com.ua\" title=\"MasterCard SecureCode\" class=\"\">\n                </div>\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/verified-by-visa-logo.svg\" alt=\"Verified by Visa | сервис uplata.com.ua\" title=\"Verified by Visa\" class=\"\">\n                </div>\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-visa.svg\" alt=\"Visa | сервис uplata.com.ua\" title=\"Visa\" class=\"\">\n                </div>\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-master-card.svg\" alt=\"MasterCard | сервис uplata.com.ua\" title=\"MasterCard\" class=\"\">\n                </div>\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-platon.svg\" alt=\"Platon | сервис uplata.com.ua\" title=\"Platon\" class=\"\">\n                </div>\n  \n                <div class=\"logo_item for_pci_dss mobile_hide\">\n                    <a class=\"pci_dss_link\" href=\"http://compliance-control.eu/cert/uplata/pcidss_compliance.html\" target=\"_blank\">\n                        <img src=\"https://uplata.ua/front/index/img/second_screen_icons/new_pci_dcc_g.png\" alt=\"PaySystem | сервис uplata.com.ua\" title=\"PaySystem\" class=\"gray_pci_dss\">\n                        <img src=\"https://uplata.ua/front/index/img/second_screen_icons/new_pci_dcc_c.png\" alt=\"PaySystem | сервис uplata.com.ua\" title=\"PaySystem\" class=\"color_pci_dss\">\n                    </a>\n                </div>\n  \n                <div class=\"logo_item mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/second_screen_icons/mobile/paysystem-logo-ssl.svg\" alt=\"SSL Secure | сервис uplata.com.ua\" title=\"SSL Secure\">\n                </div>\n  \n                <div class=\"security_mobile_version desktop_hide\">\n  \n                    <div class=\"couple first_element\">\n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-master-card-securecode.svg\" alt=\"MasterCard SecureCode | сервис uplata.com.ua\" title=\"MasterCard SecureCode\" class=\"\">\n                        </div>\n  \n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/verified-by-visa-logo.svg\" alt=\"Verified by Visa | сервис uplata.com.ua\" title=\"Verified by Visa\" class=\"\">\n                        </div>\n                    </div>\n  \n                    <div class=\"couple second_element\">\n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-visa.svg\" alt=\"Visa | сервис uplata.com.ua\" title=\"Visa\" class=\"\">\n                        </div>\n  \n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-master-card.svg\" alt=\"MasterCard | сервис uplata.com.ua\" title=\"MasterCard\" class=\"\">\n                        </div>\n                    </div>\n  \n                    <div class=\"couple third_element\">\n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/paysystem-logo-platon.svg\" alt=\"Platon | сервис uplata.com.ua\" title=\"Platon\" class=\"\">\n                        </div>\n  \n                        <div class=\"logo_item for_pci_dss\">\n                            <a class=\"pci_dss_link\" href=\"http://compliance-control.eu/cert/uplata/pcidss_compliance.html\" target=\"_blank\">\n                                <img src=\"https://uplata.ua/front/index/img/second_screen_icons/new_pci_dcc_g.png\" alt=\"PaySystem | сервис uplata.com.ua\" title=\"PaySystem\" class=\"gray_pci_dss\">\n                            </a>\n                        </div>\n                    </div>\n  \n                    <div class=\"couple solo\">\n                        <div class=\"logo_item\">\n                            <img src=\"https://uplata.ua/front/index/img/second_screen_icons/mobile/paysystem-logo-ssl.svg\" alt=\"SSL Secure | сервис uplata.com.ua\" title=\"SSL Secure\" class=\"desktop_hide\">\n                        </div>\n                    </div>\n  \n                </div>\n            </div>\n        </div>\n    </section>\n  \n    <section class=\"first_screen_info main_section height690\">\n        <div class=\"item_screen_slide first_screen\">\n            <div class=\"info\">\n                <h2>Мы не умничаем</h2>\n                <div class=\"orange_border\"></div>\n                <p>Мы, как и вы, не любим банковскую и юридическую терминологию, поэтому мы говорим с вами человеческим языком. Все так, как бы вы это назвали в жизни.</p>\n                <p class=\"new_text\">Нет, мы не собираемся рассказывать вам анекдоты. Мы — серьезный финансовый сервис, где серьезные люди делают серьезные вещи. Только с нами все это можно делать в понятном и веселом интерфейсе ☺</p>\n                <a href=\"/#right_side_element\" class=\"link_to_registration\">зарегистрироваться в Uplata</a>\n            </div>\n            <div class=\"two_elements move_container_wrapper\">\n                <div class=\"gray_elements mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/line-left.svg\" alt=\"\">\n                    <div class=\"under_oval\"></div>\n                    <div class=\"move_container\">\n                        <div class=\"move_hider\"></div>\n                        <div class=\"move_icon\"></div>\n                    </div>\n                </div>\n                <div class=\"image_elements\">\n                    <div class=\"image\"></div>\n                </div>\n                <div class=\"button_down_info_el bounce animated\"></div>\n            </div>\n        </div>\n    </section>\n  \n    <section class=\"second_screen_info main_section mobile_view\" id=\"registration_in_uplata\">\n        <h1>4 причины зарегистрироваться</h1>\n        <div class=\"elements_wrapper\">\n            <div class=\"left_side\">\n                <div class=\"item\">\n                    <div class=\"title\">\n                        <span>a</span>\n                        <p>Абсолютно удобно</p>\n                    </div>\n                    <div class=\"description\">\n                        <p>Потому что для зарегистрированных пользователей мы предусмотрели личный кабинет с рабочим столом и удобными виджетами. Все для того, чтобы сделать платежи приятнее, а жизнь проще.</p>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">\n                        <span>б</span>\n                        <p>Быстро</p>\n                    </div>\n                    <div class=\"description\">\n                        <p>После регистрации вы сможете все делать быстрее. Вы будете видеть именно те операции, которые вам нужны, а любые платежи сможете сохранить и повторить в пару кликов.</p>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">\n                        <span>в</span>\n                        <p>Выгодно</p>\n                    </div>\n                    <div class=\"description\">\n                        <p>Наши зарегистрированные пользователи могут получать бонусы и пользоваться сервисами Uplata бесплатно!</p>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">\n                        <span>г</span>\n                        <p>Грамотно</p>\n                    </div>\n                    <div class=\"description\">\n                        <p>Вы всегда сможете посмотреть «когда», «сколько» и «за что» платили. Все в порядке и под контролем.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right_side\" id=\"right_side_element\">\n                <div class=\"main_content start_page_body registration_element\" id=\"registration_page_body\">\n                    <div class=\"login_form form_element\">\n                        <form action=\"#\" name=\"registration_form\" id=\"registration_form\" class=\"main_login_form registration_form second_reg_form\">\n                            <div class=\"input_wrapper user_name_wrapper\">\n                                <label>\n                                    <p class=\"placeholder\">Имя</p>\n                                    <input name=\"user_name\" class=\"user_name\" id=\"user_name\" maxlength=\"30\" type=\"text\" pattern=\"[A-Za-zА-Яа-яЁёЇїҐґЄєІі0-9-!#$%&amp;'()* ,./:;<=>?@[\\\\\\]_`'{|}~]{2,50}\" required=\"required\" autocomplete=\"off\" value=\"\">\n                                    <div class=\"valid_element_indicator\"></div>\n                                </label>\n                            </div>\n  \n                            <div class=\"input_wrapper user_email_wrapper\">\n                                <label>\n                                    <p class=\"placeholder\">Email</p>\n                                    <input type=\"text\" hidden=\"hidden\" disabled=\"disabled\" name=\"user_email\" tabindex=\"-1\">\n                                    <input name=\"user_email\" class=\"user_email\" id=\"user_email\" maxlength=\"50\" type=\"text\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,50}$\" required=\"required\" autocomplete=\"off\" value=\"\">\n                                    \n                                    <div class=\"valid_element_indicator\"></div>\n                                    <img src=\"https://uplata.ua/front/index/img/not-4-spam.svg\" alt=\"\" class=\"not_4_spam\">\n                                </label>\n                                <div class=\"user_info_error user_email_exist_login\">\n                                    <p>Этот email уже зарегистрирован. Если помните пароль <a href=\"#\" class=\"enter_on_site\">войдите на сайт</a> Если забыли - <a href=\"#\" class=\"reset_you_password\">нажмите сюда.</a></p>\n                                    <span></span>\n                                </div>\n                                <div class=\"user_info_error wrong_written_email\">\n                                    <p>Email введен неверно, проверьте правильность ввода.</p>\n                                    <span></span>\n                                </div>\n                            </div>\n  \n                            <div class=\"input_wrapper user_phone_nubmber_wrapper\">\n                                <label>\n                                    <p class=\"placeholder\">Номер телефона</p>\n                                    <input name=\"user_phone\" class=\"user_phone\" id=\"user_phone\" required=\"required\" type=\"text\" placeholder=\"\" pattern=\"[0-9/ /()+-]{23,}\" autocomplete=\"off\" maxlength=\"23\">\n                                    <div class=\"valid_element_indicator\"></div>\n                                    <img src=\"https://uplata.ua/front/index/img/4-your-security.svg\" alt=\"\" class=\"your_security mobile_hide\">\n                                </label>\n                                <div class=\"user_info_error existing_user_phone\">\n                                    <p>Указанный номер уже закреплен за одним из наших Клиентов. Пожалуйста, укажите другой номер телефона.  <a class=\"phone_error_login\" href=\"#\">Войти на сайт</a> или воспользоваться сервисом <a class=\"phone_error_reset_pass\" href=\"#\">сброс пароля</a></p>\n                                    <span></span>\n                                </div>\n                            </div>\n  \n                            <div class=\"input_wrapper user_password_wrapper\">\n                                <label>\n                                    <p class=\"placeholder\">Пароль</p>\n                                    <input type=\"password\" class=\"fake_input\" tabindex=\"-1\">\n                                    <input name=\"user_password\" class=\"user_password\" id=\"user_password\" type=\"password\" placeholder=\"\" required=\"required\">\n                                    <div class=\"valid_element_indicator\"></div>\n                                </label>\n                                <span class=\"show_password\"></span>\n                                <div class=\"user_info_error little_password\">\n                                    <p>Пароль должен состоять не менее чем из 8 букв, цифр, спецсимволов</p>\n                                    <span></span>\n                                </div>\n                                <div class=\"user_info_error common\">\n                                    <p>Распространенный пароль или слово</p>\n                                    <span></span>\n                                </div>\n                                <div class=\"user_info_error easy_password\">\n                                    <p>Пароль должен состоять не менее чем из 8 букв, цифр, спецсимволов</p>\n                                    <span></span>\n                                </div>\n                            </div>\n  \n                            <div class=\"input_wrapper user_repeat_password_element\">\n                                <label>\n                                    <p class=\"placeholder\">Повторите пароль</p>\n                                    <input name=\"user_repeat_password\" class=\"user_repeat_password\" id=\"user_repeat_password\" type=\"password\" placeholder=\"\" required=\"required\">\n                                    <div class=\"valid_element_indicator\"></div>\n                                </label>\n                                <span class=\"show_password\"></span>\n                                <div class=\"user_info_error do_not_match_passwords\">\n                                    <p>Пароли не совпадают</p>\n                                    <span></span>\n                                </div>\n                            </div>\n  \n                            <div class=\"input_wrapper user_promocode_wrapper\">\n                                <label>\n                                    <p class=\"placeholder\">Промокод, если он есть</p>\n                                    <input name=\"promo_code\" class=\"promo_code\" id=\"promo_code\" type=\"text\" placeholder=\"\" pattern=\"[A-Za-zА-яа-я]{1,50}\" autocomplete=\"off\" value=\"\">\n                                    <span class=\"helper\"></span>\n                                    <div class=\"valid_element_indicator\"></div>\n                                </label>\n                                <div class=\"user_info_error expired\">\n                                    <p>К сожалению, срок действия данного промокода уже закончился :(</p>\n                                    <span></span>\n                                </div>\n                                <div class=\"user_info_error not_exist\">\n                                    <p>Нам очень жаль, но такого промокода не существует. Проверьте, правильно ли вы его написали</p>\n                                    <span></span>\n                                </div>\n                                <div class=\"helper_info\">\n                                    <p>Введите ваш инвайткод из цифр 0-9 и букв (латиница A..Z, a..z) длиной до 10 символов</p>\n                                    <span></span>\n                                </div>\n                            </div>\n  \n                            <input type=\"submit\" value=\"ЗАРЕГИСТРИРОВАТЬСЯ\" disabled=\"disabled\" class=\"reg_button obscene_name wrong_user_reg_password not_same_passwords user_mail_invalid error_user_name second_reg_button exist_user_phone not_valid\" id=\"main_enter_button\">\n                        </form>\n  \n                        <div class=\"user_agreement\">\n                            <p>Создавая аккаунт, я принимаю <a href=\"/oferta\" target=\"_blank\">условия Публичного договора</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n  \n    <section class=\"third_screen_info main_section height690\">\n        <div class=\"item_screen_slide third_screen\">\n            <div class=\"info\">\n                <h2>Давайте дружить</h2>\n                <div class=\"orange_border\"></div>\n                <p>Приглашай друзей в Uplata.ua и зарабатывайте на двоих до 100 грн. для оплаты комиссий.</p>\n                <p>Пользоваться вместе не только веселее, но и бесплатнее ;)</p>\n                <p class=\"link_wrapper\">Подробности акции <a href=\"/faq#profitable_to_invite\">здесь</a></p>\n                <a href=\"/#right_side_element\" class=\"link_to_registration\">зарегистрироваться в Uplata</a>\n            </div>\n            <div class=\"two_elements move_container_wrapper\">\n                <div class=\"gray_elements mobile_hide\">\n                    <img src=\"https://uplata.ua/front/index/img/line-left.svg\" alt=\"\">\n                    <div class=\"under_oval\"></div>\n                    <div class=\"move_container\">\n                        <div class=\"move_hider\"></div>\n                        <div class=\"move_icon\"></div>\n                    </div>\n                </div>\n                <div class=\"image_elements\">\n                    <div class=\"image\"></div>\n                </div>\n                <div class=\"button_down_info_el bounce animated\"></div>\n            </div>\n        </div>\n    </section>\n  \n    <section class=\"section_six height-auto\">\n        <div class=\"info_text_content mobile_hide\">\n            <h3>4 причины зарегистрироваться</h3>\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <span class=\"letter\">a</span><span>Абсолютно удобно</span>\n                    <p>Потому что для зарегистрированных пользователей мы предусмотрели личный кабинет с рабочим столом и удобными виджетами. Все для того, чтобы сделать платежи приятнее, а жизнь проще.</p>\n                </div>\n                <div class=\"item\">\n                    <span class=\"letter\">б</span><span>Быстрее</span>\n                    <p>После регистрации вы сможете все делать быстрее. Вы будете видеть именно те операции, которые вам нужны, а любые платежи сможете сохранить и повторить в пару кликов.</p>\n                </div>\n                <div class=\"item\">\n                    <span class=\"letter\">в</span><span>Выгодно</span>\n                    <p>Наши зарегистрированные пользователи могут получать бонусы и пользоваться сервисами Uplata бесплатно!</p>\n                </div>\n                <div class=\"item\">\n                    <span class=\"letter\">г</span><span>Грамотно</span>\n                    <p>Вы всегда сможете посмотреть «когда», «сколько» и «за что» платили. Все в порядке и под контролем.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"invite_to_uplata mobile_hide\">\n            <h3>Присоединяйтесь к Uplata</h3>\n            <p>Вам здесь понравится</p>\n            <button>Зарегистрируйтесь, это бесплатно!</button>\n            <div class=\"border_bottom\"></div>\n        </div>\n        <div class=\"button_down bounce animated\"></div>\n  \n        <div class=\"mobile_info_text_content desktop_hide\">\n            <h3>4 причины зарегистрироваться</h3>\n            <div class=\"gallery_item\">\n  \n                <div class=\"item\">\n                    <div class=\"title_item\">\n                        <span class=\"letter\">a</span><span>Абсолютно удобно</span>\n                    </div>\n                    <p>Потому что для зарегистрированных пользователей мы предусмотрели личный кабинет с рабочим столом и удобными виджетами. Все для того, чтобы сделать платежи приятнее, а жизнь проще.</p>\n                </div>\n  \n                <div class=\"item\">\n                    <div class=\"title_item\">\n                        <span class=\"letter\">б</span><span>Быстрее</span>\n                    </div>\n                    <p>После регистрации вы сможете все делать быстрее. Вы будете видеть именно те операции, которые вам нужны, а любые платежи сможете сохранить и повторить в пару кликов.</p>\n                </div>\n  \n                <div class=\"item\">\n                    <div class=\"title_item\">\n                        <span class=\"letter\">в</span><span>Выгодно</span>\n                    </div>\n                    <p>Наши зарегистрированные пользователи могут получать бонусы и пользоваться сервисами Uplata бесплатно!</p>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title_item\">\n                        <span class=\"letter\">г</span><span>Грамотно</span>\n                    </div>\n                    <p>Вы всегда сможете посмотреть «когда», «сколько» и «за что» платили. Все в порядке и под контролем.</p>\n                </div>\n            </div>\n            <div class=\"invite_to_uplata\">\n                <button>Зарегистрируйтесь, это бесплатно!</button>\n            </div>\n        </div>\n    </section>\n  \n    <section class=\"last_section\">\n        <div class=\"coming_soon\">\n            <div class=\"left_submit_form\">\n                <div class=\"submit_wrapper\">\n                    <h1>Мы не стоим на месте</h1>\n                    <div class=\"orange_border\"></div>\n                    <p>Совсем скоро у нас появятся новые сервисы. Подпишитесь на наши новости, и мы сообщим вам о них в первую очередь.</p>\n                    <div class=\"input_wrapper\">\n                      <form action=\"#\" name=\"user_subscribe_form\" id=\"user_subscribe_form\" class=\"user_subscribe_form\">\n                          <input type=\"text\" name=\"mail\" class=\"subcr_user_email\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,100}$\" required=\"required\" autocomplete=\"off\" placeholder=\"Введите email\">\n                          <input type=\"submit\" class=\"wrong_email\" value=\"подписаться\">\n                      </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right_notebook_image\"></div>\n  \n        </div>\n    </section>\n  \n  </div>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/legal/legal.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/legal/legal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal\">\n    <div class=\"main_header\">\n        <div>\n             <ol itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\" class=\"breadcrumbs info_pages\">\n                 <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\" class=\"main_home_link\">\n                     <a itemprop=\"item\" href=\"https://uplata.ua/\">\n                         <span itemprop=\"name\">Головна</span>\n                     </a>\n                     <meta itemprop=\"position\" content=\"1\">\n                 </li>\n\n                <li><img src=\"https://uplata.ua/front/index/img/triangle.svg\" alt=\"\"></li>\n\n                <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                     <h1 itemprop=\"name\">Правова інформація</h1>\n                     <meta itemprop=\"position\" content=\"2\">\n                 </li>\n             </ol>\n        </div>\n    </div>\n    <div class=\"sector\">\n        <p>Послуги на платіжному сервісі Uplata здійснюються через &nbsp;<a href=\"http://www.fortex-f.com.ua\" target=\"_blank\">ТОВ «ФОРТЕКС-ФІНАНС»</a></p> \n        <p>відповідно до умов  <a href=\"https://uplata.ua/oferta\" target=\"_blank\">Публічного договору</a></p>\n    </div>\n    <div class=\"sector\">\n        <h2>ТОВ \"ФОРТЕКС-ФІНАНС»</h2>\n        <span class=\"gray\">Повне найменування юридичної особи:</span>\n        <p>ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «ФОРТЕКС-ФІНАНС»</p>\n        <p><span class=\"gray\">Код ОКПО:</span> 39859779</p>\n        <p><span class=\"gray\">Код КОАТУУ:</span> 5110137500</p>\n        <p><span class=\"gray\">Поштова адреса: </span>65014 м. Одеса, провулок Лєрмонтовський, будинок 13</p>\n    </div>\n    <div class=\"sector\">\n        <p class=\"sector_title\">Види фінансових послуг:</p>\n        <ul>\n            <li>надання гарантій та поручительств;</li>\n            <li>надання коштів у позику, в тому числі на умовах фінансового кредиту;</li>\n            <li>факторинг;</li>\n            <li>фінансовий лізинг;</li>\n            <li>надання послуг з переказу коштів.</li>\n            \n            \n        </ul>\n    </div>\n    <div class=\"sector\">\n        <p class=\"sector_title no_margin\">Відомості про власників істотної участі:</p>\n        \n        <p>Власником істотної участі, з часткою 100%, є ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ \"ПЛАТІЖНІ РІШЕННЯ УКРАЇНИ\" (ЄДРПОУ 40945551). </p>\n        <p><span class=\"gray\">Місцезнаходження: </span>65014, м.Одеса, пров. Лермонтовський, буд. 13.</p>\n    </div>\n    <div class=\"sector\">\n        <p class=\"sector_title\">Відомості про керівника юридичної особи:</p>\n        <p><span class=\"gray\">Директор:</span>Скрипнік Валерій Володимирович</p>\n    </div>\n    <div class=\"sector\">\n        <p class=\"sector_title\">Відомості про ліцензії та дозвіли, видані фінансовій установі:</p>\n        <div><a href=\"http://www.fortex-f.com.ua/right_to_work/license/2/license.pdf\" download=\"\">Ліцензія</a> <p>на переказ коштів у національній валюті без відкриття рахунків №42 від 29.04.2016</p></div>\n        <div><a href=\"http://www.fortex-f.com.ua/right_to_work/%D1%81ertificate/3/%D0%A1%D0%B2%D0%B4%D0%BE%D1%86%D1%82%D0%B2%D0%BE%20615.pdf\" download=\"\">Свідоцтво</a> <p>про реєстрацію фінансової установи ФК № 615 від 20.08.2015 р.</p></div>\n        <a href=\"#\" download=\"\" class=\"dwn_pdf\" style=\"display:none;\">Сохранить PDF</a>\n    </div>\n    <div class=\"sector\">\n        <p class=\"sector_title\">ТОВ «ФОРТЕКС-ФІНАНС» є учасником наступних платіжних систем:</p>\n<div><p>Внутрішньодержавна платіжна система \n</p> &nbsp;<a href=\"http://www.fbank.com.ua/\" target=\"_blank\">«FlashPay»</a></div>\n    </div>\n    <div class=\"border_bottom_orange\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/legal/legal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.ts ***!
  \***********************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegalComponent = /** @class */ (function () {
    function LegalComponent() {
    }
    LegalComponent.prototype.ngOnInit = function () {
    };
    LegalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__(/*! ./legal.component.html */ "./src/app/components/pages/legal/legal.component.html"),
            styles: [__webpack_require__(/*! ./legal.component.css */ "./src/app/components/pages/legal/legal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LegalComponent);
    return LegalComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/onas/onas.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/onas/onas.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/onas/onas.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/onas/onas.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about_us\">\n    <section>\n        <div class=\"breadcrumbs_wrapper\">\n            <ol class=\"breadcrumbs\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n                <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                    <a href=\"https://uplata.ua/\" itemprop=\"item\">\n                        <span itemprop=\"name\">\n                            Главная\n                        </span>\n                    </a>\n                    <meta content=\"1\" itemprop=\"position\">\n                    \n                </li>\n                <li>\n                    <img alt=\"\" src=\"https://uplata.ua/front/index/img/triangle.svg\">\n                    \n                </li>\n                <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                    <h1 itemprop=\"name\">\n                        О нас\n                    </h1>\n                    <meta content=\"2\" itemprop=\"position\">\n                    \n                </li>\n            </ol>\n        </div>\n        <div class=\"section_info\">\n            <h2>\n                Привет!\n            </h2>\n            <div class=\"mobile_hide\">\n                <p>\n                    Обычно на этой странице пишут опусы на тему\n                </p>\n                <p>\n                    миссии и ценностей компании, регалии и чины\n                </p>\n                <p>\n                    больших боссов, количество офисов, лет на рынке и\n                </p>\n                <p>\n                    полученных наград.\n                </p>\n            </div>\n            <div class=\"desctop_hide\">\n                <p>\n                    Обычно на этой странице пишут опусы на тему\n                    миссии и ценностей компании, регалии и чины\n                    больших боссов, количество офисов, лет на рынке и\n                    полученных наград.\n                </p>\n            </div>\n            <img alt=\"О нас | сервис Uplata.com.ua\" class=\"amout_us_medal\" src=\"/assets/imgs/onas/medal.svg\" title=\"О нас\">\n                <p>\n                    У нас пока еще всего этого нет, поэтому мы просто напишем кто мы и почему мы.\n                </p>\n                <h2 class=\"begin mobile_hide\">\n                    Начнем\n                </h2>\n            \n        </div>\n        <div class=\"button animated bounce\">\n            <img alt=\"\" src=\"/assets/imgs/onas/btn-scroll.svg\">\n            \n        </div>\n    </section>\n    <section>\n        <div class=\"desctop_hide mobile_version screen_two\">\n            <p>\n                Мы – команда инициативных и любящих свое дело людей, которые по счастливому стечению обстоятельств собрались вместе делать хороший финансовый сервис. Мы устали от скучных, консервативных и неудобных банков. Где очереди, миллионы бумажек, «подойдите в 5-е окошко», «а вот тут было написано мелким шрифтом».\n            </p>\n            <img alt=\"Дружественный финансовый сервис от людей, любящих свое дело | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/uplata-character.svg\" title=\"Дружественный финансовый сервис от людей, любящих свое дело\">\n                <p>\n                    Мы верим, что банкинг может быть приятным, удобным и неутомительным. Мы такие же как вы люди, и мы можем общаться на простом человеческом языке. Мы не будем утомлять вас сложными юридическими, бухгалтерскими, банковскими терминами (как минимум там, где нам это позволяют Законы Украины :)\n                </p>\n            \n        </div>\n        <div class=\"left_item mobile_hide\">\n            <p>\n                Мы – команда инициативных и любящих свое дело людей, которые по счастливому стечению обстоятельств собрались вместе делать хороший финансовый сервис. Мы устали от скучных, консервативных и неудобных банков. Где очереди, миллионы бумажек, «подойдите в 5-е окошко», «а вот тут было написано мелким шрифтом».\n            </p>\n            <p>\n                Мы верим, что банкинг может быть приятным, удобным и неутомительным. Мы такие же как вы люди, и мы можем общаться на простом человеческом языке. Мы не будем утомлять вас сложными юридическими, бухгалтерскими, банковскими терминами (как минимум там, где нам это позволяют Законы Украины :)\n            </p>\n        </div>\n        <div class=\"right_item mobile_hide\">\n            <img alt=\"Дружественный финансовый сервис от людей, любящих свое дело | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/uplata-character.svg\" title=\"Дружественный финансовый сервис от людей, любящих свое дело\">\n            \n        </div>\n    </section>\n    <section class=\"mobile_hide\">\n        <div class=\"left_item\">\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"\" class=\"right_arrow\" src=\"/assets/imgs/onas/arrows/arrow-straight-right.svg\">\n                        <img alt=\"Платежи и карточки без визита в банк | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-1.svg\" title=\"Платежи и карточки без визита в банк\">\n                            <h3>\n                                Просто представьте\n                            </h3>\n                            <p>\n                                Мы докажем вам, что платежи - это не только касса, карточку можно получить без визита к менеджеру, а кредиты и депозиты могут существовать и без банков вовсе.\n                            </p>\n                        \n                    \n                </div>\n            </div>\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"\" class=\"right_arrow\" src=\"/assets/imgs/onas/arrows/arrow-straight-right.svg\">\n                        <img alt=\"Умная платежная карта | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-3.svg\" title=\"Умная платежная карта\">\n                            <h3>\n                                Присоединяйтесь\n                            </h3>\n                            <p>\n                                Мы работаем над умной карточкой Uplata, с которой можно не только удобно тратить деньги, но еще контролировать и понимать, куда эти деньги тратятся.\n                            </p>\n                        \n                    \n                </div>\n            </div>\n        </div>\n        <div class=\"right_item\">\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"\" class=\"left_arrow\" src=\"/assets/imgs/onas/arrows/arrow-rounded-left.svg\">\n                        <img alt=\"Персональные финансы | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-2.svg\" title=\"Персональные финансы\">\n                            <h3>\n                                В путь!\n                            </h3>\n                            <p>\n                                В нашей маленькой (пока еще) команде собралась веселая тусовка айтишников, финансистов и маркетологов. И мы точно знаем, что нужно делать, чтобы получить крутой и полезный продукт. Для этого мы каждый день шаг за шагом движемся к своей великой цели.\n                            </p>\n                        \n                    \n                </div>\n            </div>\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"\" class=\"left_arrow\" src=\"/assets/imgs/onas/arrows/arrow-rounded-left.svg\">\n                        <img alt=\"\" src=\"/assets/imgs/onas/ic-about-4.svg\">\n                            <h3>\n                                Чем еще удивим?\n                            </h3>\n                            <p>\n                                Представьте себе самую умную и удобную домашнюю бухгалтерию, которая сама себя может посчитать! А пока вы ее представляете – мы ее уже делаем :)\n                            </p>\n                        \n                    \n                </div>\n            </div>\n        </div>\n    </section>\n    <section>\n        <div class=\"left_item mobile_hide\">\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"\" class=\"right_arrow\" src=\"/assets/imgs/onas/arrows/arrow-straight-right.svg\">\n                        <img alt=\"Домашняя бухгалтерия | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-5.svg\" title=\"Домашняя бухгалтерия\">\n                            <h3>\n                                За работу!\n                            </h3>\n                            <p>\n                                Мы могли бы еще много о себе говорить, но нужно идти работать. Ведь чем больше мы работаем, тем быстрее все это произойдет.\n                            </p>\n                        \n                    \n                </div>\n            </div>\n        </div>\n        <div class=\"right_item mobile_hide\">\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"Обратная связь | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-6.svg\" title=\"Обратная связь\">\n                        <a class=\"callback_link\" href=\"../../../#\">\n                            Пишите нам\n                        </a>\n                        <p>\n                            Мы открыты для идей и предложений, а также всегда рады конструктивной критике. Для нас действительно важно, чтобы вы были довольны, и мы делаем все, чтобы так и было.\n                        </p>\n                    \n                </div>\n            </div>\n        </div>\n        <div class=\"write_to_us desctop_hide\">\n            <div class=\"item_wrapper\">\n                <div class=\"item\">\n                    <img alt=\"Обратная связь | сервис Uplata.com.ua\" src=\"/assets/imgs/onas/ic-about-6.svg\" title=\"Обратная связь\">\n                        <a class=\"callback_link\" href=\"../../../#\">\n                            Пишите нам\n                        </a>\n                        <p>\n                            Мы открыты для идей и предложений, а также всегда рады конструктивной критике. Для нас действительно важно, чтобы вы были довольны, и мы делаем все, чтобы так и было.\n                        </p>\n                    \n                </div>\n            </div>\n        </div>\n    </section>\n    <section>\n        <div class=\"com_uplata\">\n            <div class=\"orange_border\">\n            </div>\n            <p>\n                <span>\n                    Sincerely yours,\n                </span>\n                <span>\n                    команда Uplata\n                </span>\n            </p>\n            <div class=\"orange_border\">\n            </div>\n        </div>\n        <div class=\"ps\">\n            <p class=\"ps_text\">\n                P.S.\n            </p>\n            <div>\n                <p>\n                    И еще важный момент:\n                </p>\n                <p>\n                    Если вы хотите у нас работать, отправляйте резюме сюда:\n                    <a href=\"mailto:I_want_to_work_at@uplata.com.ua\">\n                        I_want_to_work_at@uplata.com.ua\n                    </a>\n                    .\n                </p>\n                <p style=\"display: none;\">\n                    Или смотрите открытие вакансии\n                    <a>\n                        здесь\n                    </a>\n                    .\n                </p>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/onas/onas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/onas/onas.component.ts ***!
  \*********************************************************/
/*! exports provided: OnasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnasComponent", function() { return OnasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnasComponent = /** @class */ (function () {
    function OnasComponent() {
    }
    OnasComponent.prototype.ngOnInit = function () {
    };
    OnasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onas',
            template: __webpack_require__(/*! ./onas.component.html */ "./src/app/components/pages/onas/onas.component.html"),
            styles: [__webpack_require__(/*! ./onas.component.css */ "./src/app/components/pages/onas/onas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnasComponent);
    return OnasComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/tarif/tarif.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/tarif/tarif.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/tarif/tarif.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/tarif/tarif.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rates_wrapper\">\n    <div class=\"rates\">\n        <div class=\"main_header\">\n            <div>\n                <ol class=\"breadcrumbs info_pages\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n                    <li class=\"main_home_link\" itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                        <a href=\"https://uplata.ua/\" itemprop=\"item\">\n                            <span itemprop=\"name\">\n                                Главная\n                            </span>\n                        </a>\n                        <meta content=\"1\" itemprop=\"position\">\n                        \n                    </li>\n                    <li>\n                        <img alt=\"\" src=\"https://uplata.ua/front/index/img/triangle.svg\">\n                    </li>\n                    <li itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n                        <h1 itemprop=\"name\">\n                            Тарифы\n                        </h1>\n                        <meta content=\"2\" itemprop=\"position\">\n                        \n                    </li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"sector main_rates_list\">\n            <div class=\"icon\">\n                <img alt=\"Тарифы на первод средств с карты на карту | сервис Uplata.ua\" src=\"/assets/imgs/tarif/ic-pricing-c-2-c.svg\" title=\"Тарифы на перевод средств с карты на карту\">\n                <span class=\"desktop_hide\">Перевод средств с карты на карту</span>\n            </div>\n            <div class=\"info\">\n                <span class=\"mobile_hide\">Перевод средств с карты на карту</span>\n                <p>Размер комиссии зависит от направления перевода:</p>\n                <div class=\"element_wrapper\">\n                    <div class=\"element black_span\">\n                        <div class=\"rows\">\n                            <div class=\"row\">\n                                <p>с карты Uplata на карту Uplata</p>\n                                <span class=\"orange_span\" style=\"min-width: 120px;\">БЕСПЛАТНО</span>\n                            </div>\n                            <div class=\"row\">\n                                <p>с карты любого банка на карту Uplata</p>\n                                <span>5 грн.</span>\n                            </div>\n                            <div class=\"row\">\n                                <p>с карты Uplata на карту любого банка</p>\n                                <span>1%</span>\n                            </div>\n                            <div class=\"row\">\n                                <p>с карты любого банка на карту любого банка</p>\n                                <span>1% + 5 грн.</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"sector\">\n            <div class=\"icon\">\n                <img alt=\"Тарифы на оплату услуг онлайн| сервис Uplata.ua\" src=\"/assets/imgs/tarif/ic-pricing-payment.svg\" title=\"Тарифы на оплату услуг онлайн\">\n                <span class=\"desktop_hide\">Оплата услуг</span>\n            </div>\n            <div class=\"info\">\n                <span class=\"mobile_hide\">Оплата услуг</span>\n                <p>Размер комиссии зависит от получателя и суммы платежа. Для просмотра комиссии выберите интересующую Вас услугу, введите лицевой счет (или иной идентификатор плательщика) и сумму. Здесь же вы увидите комиссию по данному платежу.</p>\n            </div>\n        </div>\n\n        <div class=\"sector main_rates_list\">\n        \t<div class=\"icon\">\n                <img alt=\"Тарифы на оплату услуг онлайн| сервис Uplata.ua\" src=\"/assets/imgs/tarif/rates_icon.svg\" title=\"Тарифы на оплату услуг онлайн\">\n                <span class=\"desktop_hide\">Тарифы по карте Uplata</span>\n            </div>\n            <div class=\"info\">\n\t            <div class=\"main_title mobile_hide\">\n\t            \t<p>Тарифы по карте Uplata</p>\n\t            </div>\n\t\t\t\t<div class=\"element_wrapper\">\n                    <div class=\"element\">\n                        <p class=\"title\">ОТКРЫТИЕ СЧЕТА</p>\n                        <div class=\"rows\">\n                            <div class=\"row\">\n                                <p>Открытие и обслуживание карты Uplata</p>\n                                <span>БЕСПЛАТНО</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"element\">\n                        <p class=\"title\">ВЫДАЧА НАЛИЧНЫХ</p>\n                        <div class=\"rows\">\n                            <div class=\"row\">\n\n                                <p>в банкоматах и кассах OTP Bank, сети «АТМоСфера»</p>\n                                <span class=\"orange_span\" style=\"min-width: 120px;\">БЕСПЛАТНО</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"element black_span\">\n                        <p class=\"title\">ПОПОЛНЕНИЕ И ПЕРЕВОДЫ</p>\n                        <div class=\"rows\">\n                            <div class=\"row\">\n                                <p>Перевод между картами Uplata на сайте uplata.ua</p>\n                                <span class=\"orange_span\" style=\"min-width: 120px;\">БЕСПЛАТНО</span>\n                            </div>\n                            <div class=\"row\">\n                                <p>Пополнение в терминалах Uplata и ПриватБанка, в отделениях OTP Bank</p>\n                                <span class=\"orange_span\" style=\"min-width: 120px;\">БЕСПЛАТНО</span>\n                            </div>\n                            <div class=\"row no_margin\">\n                                <p>Пополнение с любой карты на сайте uplata.ua</p>\n                                <span>5 грн</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <a class=\"see_all_rates\" href=\"../../../front/index/download/uplata-card-prices-A5-ru.pdf\" download=\"\" target=\"_blank\">Подробнее о тарифах</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tarif/tarif.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/tarif/tarif.component.ts ***!
  \***********************************************************/
/*! exports provided: TarifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifComponent", function() { return TarifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TarifComponent = /** @class */ (function () {
    function TarifComponent() {
    }
    TarifComponent.prototype.ngOnInit = function () {
    };
    TarifComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tarif',
            template: __webpack_require__(/*! ./tarif.component.html */ "./src/app/components/pages/tarif/tarif.component.html"),
            styles: [__webpack_require__(/*! ./tarif.component.css */ "./src/app/components/pages/tarif/tarif.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TarifComponent);
    return TarifComponent;
}());



/***/ }),

/***/ "./src/app/mocks/categories.ts":
/*!*************************************!*\
  !*** ./src/app/mocks/categories.ts ***!
  \*************************************/
/*! exports provided: CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
var methods17 = [
    {
        name: "Goodline",
        title: "Goodline",
        alt: "Goodline | сервис uplata.ua",
        path: "/popolnit-mobilnyy/goodline-17739/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1388.png"
    },
    {
        name: "lifecell (по лицевому счету)",
        title: "lifecell (по лицевому счету)",
        alt: "lifecell (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/lifecell-po-licevomu-schetu-56142/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2070.png"
    },
    {
        name: "lifecell (по номеру телефона)",
        title: "lifecell (по номеру телефона)",
        alt: "lifecell (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/lifecell-po-nomeru-telefona-44198/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2210.png"
    },
    {
        name: "TezTelecom для агентств",
        title: "TezTelecom для агентств",
        alt: "TezTelecom для агентств | сервис uplata.ua",
        path: "/popolnit-mobilnyy/teztelecom-dlya-agentstv-83975/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2013.png"
    },
    {
        name: "TezTelecom для туристов",
        title: "TezTelecom для туристов",
        alt: "TezTelecom для туристов | сервис uplata.ua",
        path: "/popolnit-mobilnyy/teztelecom-dlya-turistov-36645/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2068.png"
    },
    {
        name: "TravelSIM",
        title: "TravelSIM",
        alt: "TravelSIM | сервис uplata.ua",
        path: "/popolnit-mobilnyy/travelsim-32239/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2372.png"
    },
    {
        name: "Vodafone (по лицевому счету)",
        title: "Vodafone (по лицевому счету)",
        alt: "Vodafone (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/vodafone-po-licevomu-schetu-15123/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2689.png"
    },
    {
        name: "Vodafone (по номеру телефона)",
        title: "Vodafone (по номеру телефона)",
        alt: "Vodafone (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/vodafone-po-nomeru-telefona-32192/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2687.png"
    },
    {
        name: "Yezzz!",
        title: "Yezzz!",
        alt: "Yezzz! | сервис uplata.ua",
        path: "/popolnit-mobilnyy/yezzz-34198/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2472.png"
    },
    {
        name: "Интертелеком",
        title: "Интертелеком",
        alt: "Интертелеком | сервис uplata.ua",
        path: "/popolnit-mobilnyy/intertelekom-68395/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2447.png"
    },
    {
        name: "Киевстар (по лицевому счету)",
        title: "Киевстар (по лицевому счету)",
        alt: "Киевстар (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/kievstar-po-licevomu-schetu-75487/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1545.png"
    },
    {
        name: "Киевстар (по номеру телефона)",
        title: "Киевстар (по номеру телефона)",
        alt: "Киевстар (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/kievstar-po-nomeru-telefona-34316/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1401.png"
    },
    {
        name: "Тревелфон",
        title: "Тревелфон",
        alt: "Тревелфон | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trevelfon-11915/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2458.png"
    },
    {
        name: "ТриМоб (по лицевому счету)",
        title: "ТриМоб (по лицевому счету)",
        alt: "ТриМоб (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trimob-po-licevomu-schetu-91496/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2229.png"
    },
    {
        name: "ТриМоб (по номеру телефона)",
        title: "ТриМоб (по номеру телефона)",
        alt: "ТриМоб (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trimob-po-nomeru-telefona-15715/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1414.png"
    }
];
var CATEGORIES = [
    { id: "cat_17", name: "Пополнить мобильный", methods: methods17, path: "/popolnit-mobilnyy" },
    { id: "cat_18", name: "Оплата коммунальных услуг", methods: [], path: "/oplata-kommunalnyh-uslug" },
    { id: "cat_19", name: "Хостинг и доменные имена", methods: [], path: "/hosting-i-domennye-imena" },
    { id: "cat_20", name: "IP- и домашняя телефония", methods: [], path: "/ip-i-domashnyaya-telefoniya" },
    { id: "cat_21", name: "Интернет и телевидение", methods: [], path: "/internet-i-televidenie" },
    { id: "cat_22", name: "Банки и финансовые услуги", methods: [], path: "/banki-i-finansovye-uslugi" },
    { id: "cat_23", name: "Игры и соцсети", methods: [], path: "/igry-i-socseti" },
    { id: "cat_24", name: "Штрафы за нарушение ПДД", methods: [], path: "/shtrafy-za-narushenie-pdd" },
    { id: "cat_25", name: "Благотворительность", methods: [], path: "/blagotvoritelnost" },
    { id: "cat_26", name: "Дистрибуция и скидочные купоны", methods: [], path: "/distribuciya-i-skidochnye-kupony" },
    { id: "cat_27", name: "Другие услуги", methods: [], path: "/drugie-uslugi" }
];


/***/ }),

/***/ "./src/app/modules/app_routing/app_routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/app_routing/app_routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var components_pages_onas_onas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/pages/onas/onas.component */ "./src/app/components/pages/onas/onas.component.ts");
/* harmony import */ var components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/pages/faq/faq.component */ "./src/app/components/pages/faq/faq.component.ts");
/* harmony import */ var components_pages_tarif_tarif_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/pages/tarif/tarif.component */ "./src/app/components/pages/tarif/tarif.component.ts");
/* harmony import */ var components_pages_bezopasnost_bezopasnost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/pages/bezopasnost/bezopasnost.component */ "./src/app/components/pages/bezopasnost/bezopasnost.component.ts");
/* harmony import */ var components_pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/pages/legal/legal.component */ "./src/app/components/pages/legal/legal.component.ts");
/* harmony import */ var components_cats_cat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/cats/cat.component */ "./src/app/components/cats/cat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'onas', component: components_pages_onas_onas_component__WEBPACK_IMPORTED_MODULE_3__["OnasComponent"] },
    { path: 'faq', component: components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"] },
    { path: 'tarif', component: components_pages_tarif_tarif_component__WEBPACK_IMPORTED_MODULE_5__["TarifComponent"] },
    { path: 'bezopasnost', component: components_pages_bezopasnost_bezopasnost_component__WEBPACK_IMPORTED_MODULE_6__["BezopasnostComponent"] },
    { path: 'legal', component: components_pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_7__["LegalComponent"] },
    { path: 'categories/:name', component: components_cats_cat_component__WEBPACK_IMPORTED_MODULE_8__["CatComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/cats/cats.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cats/cats.service.ts ***!
  \***********************************************/
/*! exports provided: CatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsService", function() { return CatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var mocks_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mocks/categories */ "./src/app/mocks/categories.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatsService = /** @class */ (function () {
    function CatsService() {
    }
    CatsService.prototype.getCategories = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(mocks_categories__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"]);
    };
    CatsService.prototype.getCategory = function (path) {
        path = "/" + path;
        for (var i = mocks_categories__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].length; i;) {
            var cat = mocks_categories__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"][--i];
            if (cat.path === path) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(cat);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    CatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CatsService);
    return CatsService;
}());



/***/ }),

/***/ "./src/app/services/menu_links/menu_links.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/menu_links/menu_links.service.ts ***!
  \***********************************************************/
/*! exports provided: MenuLinksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinksService", function() { return MenuLinksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LINKS = [
    { id: 1, path: "/onas", name: "О НАС" },
    { id: 2, path: "/faq", name: "FAQ" },
    { id: 3, path: "/tarif", name: "ТАРИФЫ" },
    { id: 4, path: "/bezopasnost", name: "БЕЗОПАСНОСТЬ" },
    { id: 5, path: "/legal", name: "ПРАВОВАЯ ИНФОРМАЦИЯ" }
];
var MenuLinksService = /** @class */ (function () {
    function MenuLinksService() {
    }
    MenuLinksService.prototype.footerLinks = function () {
        return LINKS;
    };
    MenuLinksService.prototype.headerLinks = function () {
        return LINKS;
    };
    MenuLinksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenuLinksService);
    return MenuLinksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wr\angular\uplata\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map