webpackJsonp([0],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(storage, global, googlePlus, loadingCtrl, app, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.global = global;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
        this.colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0;
        // color table indices for:
        // [current color left,next color left,current color right,next color right]
        this.colorIndices = [0, 1, 2, 3];
        // transition speed
        this.gradientSpeed = 0.00005;
        this.gradient = '';
        storage.get('email').then(function (val) {
            if (val != null)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Connecting to Google"
        });
        loading.present();
        this.googlePlus.login({})
            .then(function (res) {
            loading.dismissAll();
            _this.global.loginsave(res.email, res.displayName, res.imageUrl);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
            loading.dismissAll();
            _this.global.loginsave("elton2@gmail.com", 'Guest', "https://scontent.xx.fbcdn.net/v/t1.0-1/p32x32/51654914_2387811831237277_2326175307083546624_n.jpg?_nc_cat=104&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=076d4c78d4ff4a26e047af97aa9f54a6&oe=5D197ABA");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    LoginPage.prototype.goToSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.updateGradient = function () {
        var _this = this;
        var c00 = this.colors[this.colorIndices[0]];
        var c01 = this.colors[this.colorIndices[1]];
        var c10 = this.colors[this.colorIndices[2]];
        var c11 = this.colors[this.colorIndices[3]];
        var istep = 1 - this.step;
        var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
        var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
        var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
        var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
        var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
        var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
        var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        this.gradient = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        this.step += this.gradientSpeed;
        if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];
            // pick two new target color indices
            // do not pick the same as the current one
            this.colorIndices[1] =
                (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
            this.colorIndices[3] =
                (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
        }
        setInterval(function () { _this.updateGradient(); }, 40);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Desktop\projects\pansitan2\pansitan2\src\pages\login\login.html"*/'<ion-content padding class="transparent-header">\n\n  <ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <img class="logo" src="assets/img/logo/logo-instagram.png" />\n\n  <div padding>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <button ion-button block outline (click)="login()" color="light" class="login-button">Login</button>\n\n  </div>\n\n  <div class="strike">\n\n    <span>OR</span>\n\n  </div>\n\n  <button ion-button block clear (click)="login()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="footer">\n\n    <div (click)="goToSignup()">\n\n      <span>Don\'t have an account? <strong>Sign up here</strong>.</span>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\user\Desktop\projects\pansitan2\pansitan2\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map