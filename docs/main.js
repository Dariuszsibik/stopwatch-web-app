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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwatch/stopwatch.component */ "./src/app/stopwatch/stopwatch.component.ts");




var routes = [
    { path: '', redirectTo: '/stopwatch', pathMatch: 'full' },
    { path: 'stopwatch', component: _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_3__["StopwatchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\r\n\r\n  <mat-sidenav #start>\r\n    <mat-nav-list>\r\n\r\n      <a mat-list-item>\r\n        <mat-icon>timer</mat-icon>\r\n        <span>Timer</span>\r\n      </a>\r\n\r\n      <a mat-list-item>\r\n        <mat-icon>account_circle</mat-icon>\r\n        <span>Login</span>\r\n      </a>\r\n\r\n      <a mat-list-item>\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>Logout</span>\r\n      </a>\r\n\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-toolbar color=\"primary\">\r\n    <button class=\"menu-button\" mat-icon-button (click)=\"start.open('mouse')\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav-container {\n  background: #EEEEEE; }\n\n.mat-sidenav {\n  background: #295089;\n  color: #ffffff; }\n\n.mat-list-item-content {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2pla3R5XFxzdG9wd2F0Y2gtd2ViLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcUHJvamVrdHlcXHN0b3B3YXRjaC13ZWItYXBwL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JDUWlCLEVEUHBCOztBQUVEO0VBQ0Usb0JDSlk7RURLWixlQ1JhLEVEU2Q7O0FBRUQ7RUFDRSxlQ1phLEVEYWQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvL3N0eWxlcy8vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheS0yMDA7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZDogJGN5YW47XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG4iLCIkd2hpdGU6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kOiAjNTE4YmJmO1xyXG4kcmVkOiAjZmY0MzMyO1xyXG4kY3lhbjogIzI5NTA4OTtcclxuJGdyZWVuOiAjNDVmZjM5O1xyXG4kbGlnaHQtYmx1ZTogIzQ0NmVmMjtcclxuJGJsdWU6ICMxYTMxNjI7XHJcblxyXG4kZHMtYWNjZW50LWNvbG9yOiAjQkU4QzZCO1xyXG4kZHMtYmFja2dyb3VuZDogIzMzMzMzMztcclxuJGRzLWdyYXktMTAwOiAjRjhGOEY4O1xyXG4kZHMtZ3JheS0yMDA6ICNFRUVFRUU7XHJcbiRkcy1ncmF5LTYwMDogI0I3QjdCNztcclxuJGRzLWdyYXktODAwOiAjNzA3MDcwO1xyXG4kZHMtZ3JheS05MDA6ICM0NDQ0NDQ7XHJcbiRkcy13aGl0ZTogI2ZmZmZmZjtcclxuJGRzLWJsYWNrOiAjMDAwMDAwO1xyXG4kZHMtaW5wdXQtYmc6ICNGQ0ZDRkM7XHJcbiRkcy1pbnB1dC1ib3JkZXItY29sb3I6IGRhcmtlbigkZHMtZ3JheS0yMDAsIDMlKTtcclxuJGRzLWNvbnRhY3QtZm9ybS1zaGFkb3c6ICMyOTJDMzE7XHJcbiRkcy1wcm9kdWN0LXNlYXJjaC1idG4tY29sb3I6ICNDQ0NDQ0M7XHJcbi8vIGtvbG9yeSBCb290c3RyYXBcclxuJHRoZW1lLWNvbG9yczogKCBcInByaW1hcnlcIjogJGRzLWFjY2VudC1jb2xvcik7XHJcbiRncmF5LTEwMDogJGRzLWdyYXktMTAwO1xyXG4kZ3JheS0yMDA6ICRkcy1ncmF5LTIwMDtcclxuJGdyYXktNjAwOiAkZHMtZ3JheS02MDA7XHJcbiRncmF5LTgwMDogJGRzLWdyYXktODAwO1xyXG4kZ3JheS05MDA6ICRkcy1ncmF5LTkwMDtcclxuLy8gb2JyYW1vd2FuaWFcclxuJGJvcmRlci1yYWRpdXM6IDA7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMDtcclxuXHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNzAwO1xyXG4kZm9udC1zaXplLWJhc2U6IC44NzVyZW07XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjc1O1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZS1iYXNlICogLjc1KTtcclxuJGgyLWZvbnQtc2l6ZTogMi4xNDNyZW07XHJcbiRoMy1mb250LXNpemU6IDEuMzc1cmVtO1xyXG4kaDQtZm9udC1zaXplOiAxcmVtO1xyXG4kaDUtZm9udC1zaXplOiAuODc1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stopwatch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stopwatch_stopwatch_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stopwatch/stopwatch.module */ "./src/app/stopwatch/stopwatch.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _stopwatch_stopwatch_module__WEBPACK_IMPORTED_MODULE_7__["StopwatchModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MAT_SNACK_BAR_GLOBAL_CONFIG = {
    duration: 2500,
    verticalPosition: 'bottom',
    horizontalPosition: 'center'
};
var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: MATERIAL_MODULES.slice(),
            declarations: [],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: MAT_SNACK_BAR_GLOBAL_CONFIG }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-list/stopwatch-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-list role=\"list\" *ngFor=\"let time of timesList; let i = index\" class=\"mat-list\">\r\n  <mat-list-item role=\"listitem\" class=\"d-flex justify-content-center\">\r\n      <button mat-button class=\"mat-button mat-primary\" (click)=\"showDetails(time)\">{{ time.number | date:'HH:mm:ss:SSS' }} </button>\r\n      <div (click)=\"removeTime(i, $event)\">\r\n          <i class=\"material-icons delete\">\r\n            delete_forever\r\n          </i></div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-list/stopwatch-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stopwatch-list-item {\n  background: #ffffff;\n  color: black;\n  border: 0.7px solid #1a3162;\n  width: 120px;\n  height: 30px;\n  text-align: center;\n  font-size: 15px;\n  font-style: bold; }\n\n.mat-list {\n  background: #ffffff;\n  color: black; }\n\n.delete {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcHdhdGNoL3N0b3B3YXRjaC1saXN0L0Q6XFxQcm9qZWt0eVxcc3RvcHdhdGNoLXdlYi1hcHAvc3JjXFxhcHBcXHN0b3B3YXRjaFxcc3RvcHdhdGNoLWxpc3RcXHN0b3B3YXRjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9wd2F0Y2gvc3RvcHdhdGNoLWxpc3QvRDpcXFByb2pla3R5XFxzdG9wd2F0Y2gtd2ViLWFwcC9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQ0hhO0VESWIsYUFBWTtFQUNaLDRCQ0NZO0VEQVosYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxvQkNkYTtFRGViLGFBQVksRUFFYjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3RvcHdhdGNoL3N0b3B3YXRjaC1saXN0L3N0b3B3YXRjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uc3RvcHdhdGNoLWxpc3QtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IC43cHggc29saWQgJGJsdWU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcbi5tYXQtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIkd2hpdGU6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kOiAjNTE4YmJmO1xyXG4kcmVkOiAjZmY0MzMyO1xyXG4kY3lhbjogIzI5NTA4OTtcclxuJGdyZWVuOiAjNDVmZjM5O1xyXG4kbGlnaHQtYmx1ZTogIzQ0NmVmMjtcclxuJGJsdWU6ICMxYTMxNjI7XHJcblxyXG4kZHMtYWNjZW50LWNvbG9yOiAjQkU4QzZCO1xyXG4kZHMtYmFja2dyb3VuZDogIzMzMzMzMztcclxuJGRzLWdyYXktMTAwOiAjRjhGOEY4O1xyXG4kZHMtZ3JheS0yMDA6ICNFRUVFRUU7XHJcbiRkcy1ncmF5LTYwMDogI0I3QjdCNztcclxuJGRzLWdyYXktODAwOiAjNzA3MDcwO1xyXG4kZHMtZ3JheS05MDA6ICM0NDQ0NDQ7XHJcbiRkcy13aGl0ZTogI2ZmZmZmZjtcclxuJGRzLWJsYWNrOiAjMDAwMDAwO1xyXG4kZHMtaW5wdXQtYmc6ICNGQ0ZDRkM7XHJcbiRkcy1pbnB1dC1ib3JkZXItY29sb3I6IGRhcmtlbigkZHMtZ3JheS0yMDAsIDMlKTtcclxuJGRzLWNvbnRhY3QtZm9ybS1zaGFkb3c6ICMyOTJDMzE7XHJcbiRkcy1wcm9kdWN0LXNlYXJjaC1idG4tY29sb3I6ICNDQ0NDQ0M7XHJcbi8vIGtvbG9yeSBCb290c3RyYXBcclxuJHRoZW1lLWNvbG9yczogKCBcInByaW1hcnlcIjogJGRzLWFjY2VudC1jb2xvcik7XHJcbiRncmF5LTEwMDogJGRzLWdyYXktMTAwO1xyXG4kZ3JheS0yMDA6ICRkcy1ncmF5LTIwMDtcclxuJGdyYXktNjAwOiAkZHMtZ3JheS02MDA7XHJcbiRncmF5LTgwMDogJGRzLWdyYXktODAwO1xyXG4kZ3JheS05MDA6ICRkcy1ncmF5LTkwMDtcclxuLy8gb2JyYW1vd2FuaWFcclxuJGJvcmRlci1yYWRpdXM6IDA7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMDtcclxuXHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNzAwO1xyXG4kZm9udC1zaXplLWJhc2U6IC44NzVyZW07XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjc1O1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZS1iYXNlICogLjc1KTtcclxuJGgyLWZvbnQtc2l6ZTogMi4xNDNyZW07XHJcbiRoMy1mb250LXNpemU6IDEuMzc1cmVtO1xyXG4kaDQtZm9udC1zaXplOiAxcmVtO1xyXG4kaDUtZm9udC1zaXplOiAuODc1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-list/stopwatch-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: StopwatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchListComponent", function() { return StopwatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stopwatch_modal_stopwatch_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stopwatch-modal/stopwatch-modal.component */ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var StopwatchListComponent = /** @class */ (function () {
    function StopwatchListComponent(dialog) {
        this.dialog = dialog;
    }
    StopwatchListComponent.prototype.removeTime = function (index, event) {
        event.stopPropagation();
        this.timesList.splice(index, 1);
    };
    StopwatchListComponent.prototype.showDetails = function (time) {
        this.dialog.open(_stopwatch_modal_stopwatch_modal_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchModalComponent"], { data: time });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StopwatchListComponent.prototype, "timesList", void 0);
    StopwatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stopwatch-list',
            template: __webpack_require__(/*! ./stopwatch-list.component.html */ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-list.component.scss */ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], StopwatchListComponent);
    return StopwatchListComponent;
}());



/***/ }),

/***/ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h3>\r\n      Time Details\r\n      <mat-icon class=\"float-right close\" (click)=\"close()\">close</mat-icon>\r\n    </h3>\r\n    <p class=\"label\">Data: {{ time.number | date:'HH:mm:ss:SSS' }} </p>\r\n    <p class=\"label\">Play: {{ time.play }} </p>\r\n    <p class=\"label\">Started: {{ time.started }} </p>\r\n    <p class=\"label\">CurrentElapsedTime: {{ time.currentElapsedTime }} </p>\r\n    <p class=\"label\">TotalElapsedTime: {{ time.totalElapsedTime }} </p>\r\n    <p class=\"label\">startTime: {{ time.startTime | date:'HH:mm:ss:SSS' }} </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  padding: 10px; }\n\n.close {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcHdhdGNoL3N0b3B3YXRjaC1tb2RhbC9EOlxcUHJvamVrdHlcXHN0b3B3YXRjaC13ZWItYXBwL3NyY1xcYXBwXFxzdG9wd2F0Y2hcXHN0b3B3YXRjaC1tb2RhbFxcc3RvcHdhdGNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zdG9wd2F0Y2gvc3RvcHdhdGNoLW1vZGFsL3N0b3B3YXRjaC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: StopwatchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchModalComponent", function() { return StopwatchModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var StopwatchModalComponent = /** @class */ (function () {
    function StopwatchModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.time = data;
    }
    StopwatchModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    StopwatchModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stopwatch-modal',
            template: __webpack_require__(/*! ./stopwatch-modal.component.html */ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-modal.component.scss */ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], StopwatchModalComponent);
    return StopwatchModalComponent;
}());



/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.html":
/*!****************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"timer-container\">\r\n  <mat-card-header class=\"d-flex justify-content-center card-title\">\r\n    <mat-card-title id=\"card-title\">\r\n      <h2 class=\"card-title-h2\">Stop-watch-app</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <img mat-card-image>\r\n  <mat-card-content>\r\n    <h3 class=\"clock-font d-flex justify-content-center\">\r\n      <span class=\"clock-font-time\">{{ time.number | date:'HH:mm:ss:SSS' }} </span>\r\n    </h3>\r\n  </mat-card-content>\r\n  <mat-card-actions class=\"timer-actions d-flex justify-content-around rounded\" role=\"group\">\r\n    <button mat-button class=\"mat-stroked-button  mat-primary\" (click)=\"playWatch()\">\r\n      <i class=\"material-icons\">play_arrow</i>Start\r\n    </button>\r\n    <button mat-button class=\"mat-stroked-button  mat-warn\" (click)=\"pauseWatch()\">\r\n      <i class=\"material-icons\">pause</i>Wstrzymaj\r\n    </button>\r\n    <button mat-button class=\"mat-stroked-button mat-primary\" (click)=\"reset()\">\r\n      <i class=\"material-icons\">stop</i>Zeruj\r\n    </button>\r\n    <button mat-button class=\"mat-stroked-button mat-primary\" (click)=\"addTime()\">\r\n      <i class=\"material-icons\">save_alt</i>Pomiar\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n<app-stopwatch-list [timesList]=\"timesList\"></app-stopwatch-list>\r\n"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.scss":
/*!****************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timer-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin-left: 20%;\n  margin-right: 20%;\n  padding-top: 30px;\n  margin-top: 30px;\n  background: #518bbf; }\n\n.timer-container:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.clock-font {\n  border: 1px solid #1a3162;\n  text-align: center;\n  background: #ffffff;\n  height: 150px; }\n\n.clock-font-time {\n  color: #1a3162;\n  font-size: 3.5rem;\n  font-weight: 900;\n  letter-spacing: initial;\n  line-height: 3;\n  margin: auto 0; }\n\n.mat-card-title {\n  -webkit-text-decoration: #1a3162;\n          text-decoration: #1a3162;\n  text-align: center; }\n\n.timer-actions {\n  background: #ffffff;\n  height: 60px;\n  border: 1px solid #1a3162; }\n\n.mat-stroked-button:hover {\n  border: 1px solid #1a3162; }\n\n.card-title-h2 {\n  color: white;\n  font-size: 3rem;\n  letter-spacing: 0.7;\n  line-height: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcHdhdGNoL0Q6XFxQcm9qZWt0eVxcc3RvcHdhdGNoLXdlYi1hcHAvc3JjXFxhcHBcXHN0b3B3YXRjaFxcc3RvcHdhdGNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9wd2F0Y2gvRDpcXFByb2pla3R5XFxzdG9wd2F0Y2gtd2ViLWFwcC9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlFQUFrRTtFQUNsRSxzREFBK0M7RUFDL0MsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLDZFQUFzRSxFQUN2RTs7QUFFRDtFQUNFLDBCQ1hZO0VEWVosbUJBQWtCO0VBQ2xCLG9CQ25CYTtFRG9CYixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxlQ2xCWTtFRG1CWixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUVEO0VBQ0UsaUNDM0JZO1VEMkJaLHlCQzNCWTtFRDRCWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxvQkN0Q2E7RUR1Q2IsYUFBWTtFQUNaLDBCQ2xDWSxFRG1DYjs7QUFFRDtFQUNFLDBCQ3RDWSxFRHVDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdG9wd2F0Y2gvc3RvcHdhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGltZXItY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM1MThiYmY7XHJcbn1cclxuXHJcbi50aW1lci1jb250YWluZXI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbn1cclxuXHJcbi5jbG9jay1mb250IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZSA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uY2xvY2stZm9udC10aW1lIHtcclxuICBjb2xvcjogJGJsdWU7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5pdGlhbDtcclxuICBsaW5lLWhlaWdodDogMztcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWRlY29yYXRpb246ICRibHVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpbWVyLWFjdGlvbnMge1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XHJcbn1cclxuXHJcbi5tYXQtc3Ryb2tlZC1idXR0b246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZS1oMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC43O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjc7XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZDogIzUxOGJiZjtcclxuJHJlZDogI2ZmNDMzMjtcclxuJGN5YW46ICMyOTUwODk7XHJcbiRncmVlbjogIzQ1ZmYzOTtcclxuJGxpZ2h0LWJsdWU6ICM0NDZlZjI7XHJcbiRibHVlOiAjMWEzMTYyO1xyXG5cclxuJGRzLWFjY2VudC1jb2xvcjogI0JFOEM2QjtcclxuJGRzLWJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiRkcy1ncmF5LTEwMDogI0Y4RjhGODtcclxuJGRzLWdyYXktMjAwOiAjRUVFRUVFO1xyXG4kZHMtZ3JheS02MDA6ICNCN0I3Qjc7XHJcbiRkcy1ncmF5LTgwMDogIzcwNzA3MDtcclxuJGRzLWdyYXktOTAwOiAjNDQ0NDQ0O1xyXG4kZHMtd2hpdGU6ICNmZmZmZmY7XHJcbiRkcy1ibGFjazogIzAwMDAwMDtcclxuJGRzLWlucHV0LWJnOiAjRkNGQ0ZDO1xyXG4kZHMtaW5wdXQtYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGRzLWdyYXktMjAwLCAzJSk7XHJcbiRkcy1jb250YWN0LWZvcm0tc2hhZG93OiAjMjkyQzMxO1xyXG4kZHMtcHJvZHVjdC1zZWFyY2gtYnRuLWNvbG9yOiAjQ0NDQ0NDO1xyXG4vLyBrb2xvcnkgQm9vdHN0cmFwXHJcbiR0aGVtZS1jb2xvcnM6ICggXCJwcmltYXJ5XCI6ICRkcy1hY2NlbnQtY29sb3IpO1xyXG4kZ3JheS0xMDA6ICRkcy1ncmF5LTEwMDtcclxuJGdyYXktMjAwOiAkZHMtZ3JheS0yMDA7XHJcbiRncmF5LTYwMDogJGRzLWdyYXktNjAwO1xyXG4kZ3JheS04MDA6ICRkcy1ncmF5LTgwMDtcclxuJGdyYXktOTAwOiAkZHMtZ3JheS05MDA7XHJcbi8vIG9icmFtb3dhbmlhXHJcbiRib3JkZXItcmFkaXVzOiAwO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMDtcclxuJGJvcmRlci1yYWRpdXMtc206IDA7XHJcblxyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDcwMDtcclxuJGZvbnQtc2l6ZS1iYXNlOiAuODc1cmVtO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS43NTtcclxuJGZvbnQtc2l6ZS1zbTogKCRmb250LXNpemUtYmFzZSAqIC43NSk7XHJcbiRoMi1mb250LXNpemU6IDIuMTQzcmVtO1xyXG4kaDMtZm9udC1zaXplOiAxLjM3NXJlbTtcclxuJGg0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGg1LWZvbnQtc2l6ZTogLjg3NXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.ts ***!
  \**************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var StopwatchComponent = /** @class */ (function () {
    function StopwatchComponent(toast) {
        this.toast = toast;
        this.timesList = [];
        this.timeInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1);
    }
    StopwatchComponent.prototype.ngOnInit = function () {
        this.time = {
            number: 82800000,
            play: false,
            started: 0,
            currentElapsedTime: 0,
            totalElapsedTime: 82800000,
            startTime: null,
        };
        this.start();
    };
    StopwatchComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StopwatchComponent.prototype.tooglePlay = function () {
        this.time.play = !this.time.play;
        if (this.time.play) {
            this.playWatch();
        }
        else {
            this.pauseWatch();
        }
    };
    StopwatchComponent.prototype.addTime = function () {
        var addTimer = {
            number: 82800000,
            play: false,
            started: 0,
            currentElapsedTime: 0,
            totalElapsedTime: 82800000,
            startTime: null,
        };
        Object.assign(addTimer, this.time);
        this.timesList.push(addTimer);
        this.toast.open('New Time has been successfuly created', "", { panelClass: 'toast-success' });
    };
    StopwatchComponent.prototype.removeTime = function (t) {
        this.timesList = this.timesList.filter(function (time) {
            return time.number !== t.number;
        });
    };
    StopwatchComponent.prototype.playWatch = function () {
        this.time.play = true;
        if (!this.time.startTime) {
            this.time.startTime = new Date();
        }
    };
    StopwatchComponent.prototype.pauseWatch = function () {
        this.time.play = false;
        this.time.startTime = null;
        this.time.totalElapsedTime += this.time.currentElapsedTime;
        this.time.currentElapsedTime = 0;
    };
    StopwatchComponent.prototype.start = function () {
        var _this = this;
        this.subscription = this.timeInterval
            .subscribe(function (x) {
            _this.updateTimer();
        });
    };
    StopwatchComponent.prototype.reset = function () {
        this.time = {
            number: 82800000,
            play: false,
            started: 0,
            currentElapsedTime: 0,
            startTime: null,
            totalElapsedTime: 82800000
        };
        this.timesList = [];
        this.toast.open('All Time has been successfuly removed', "", { panelClass: 'toast-error' });
    };
    StopwatchComponent.prototype.updateTimer = function () {
        if (this.time.play) {
            this.time.currentElapsedTime = this.getCurrentElapsedTime();
            this.time.number = this.time.totalElapsedTime + this.time.currentElapsedTime;
        }
        else {
            this.time.number = this.time.totalElapsedTime;
        }
    };
    StopwatchComponent.prototype.getCurrentElapsedTime = function () {
        var now = new Date();
        var start = new Date(this.time.startTime);
        return (now.getTime() - start.getTime());
    };
    StopwatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stopwatch',
            template: __webpack_require__(/*! ./stopwatch.component.html */ "./src/app/stopwatch/stopwatch.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch.component.scss */ "./src/app/stopwatch/stopwatch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], StopwatchComponent);
    return StopwatchComponent;
}());



/***/ }),

/***/ "./src/app/stopwatch/stopwatch.module.ts":
/*!***********************************************!*\
  !*** ./src/app/stopwatch/stopwatch.module.ts ***!
  \***********************************************/
/*! exports provided: StopwatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchModule", function() { return StopwatchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stopwatch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwatch.component */ "./src/app/stopwatch/stopwatch.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _stopwatch_list_stopwatch_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stopwatch-list/stopwatch-list.component */ "./src/app/stopwatch/stopwatch-list/stopwatch-list.component.ts");
/* harmony import */ var _stopwatch_modal_stopwatch_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stopwatch-modal/stopwatch-modal.component */ "./src/app/stopwatch/stopwatch-modal/stopwatch-modal.component.ts");







var StopwatchModule = /** @class */ (function () {
    function StopwatchModule() {
    }
    StopwatchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_stopwatch_component__WEBPACK_IMPORTED_MODULE_3__["StopwatchComponent"], _stopwatch_list_stopwatch_list_component__WEBPACK_IMPORTED_MODULE_5__["StopwatchListComponent"], _stopwatch_modal_stopwatch_modal_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchModalComponent"]],
            entryComponents: [_stopwatch_modal_stopwatch_modal_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchModalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], StopwatchModule);
    return StopwatchModule;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projekty\stopwatch-web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map