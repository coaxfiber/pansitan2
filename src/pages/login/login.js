var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { GooglePlus } from '@ionic-native/google-plus';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(storage, global, googlePlus, loadingCtrl, app, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.global = global;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        storage.get('email').then(function (val) {
            if (val != null)
                _this.navCtrl.setRoot(TabsPage);
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
            _this.navCtrl.setRoot(TabsPage);
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
            loading.dismissAll();
            _this.global.loginsave("elton2@gmail.com", 'Guest', "http://eltonbagne.info/images/photo.png");
            _this.navCtrl.setRoot(TabsPage);
        });
    };
    LoginPage.prototype.goToSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [Storage,
            GlobalvarsProvider,
            GooglePlus,
            LoadingController,
            App,
            NavController,
            NavParams])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map