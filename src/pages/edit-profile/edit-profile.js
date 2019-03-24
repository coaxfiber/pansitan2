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
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
var EditProfile = /** @class */ (function () {
    function EditProfile(alertCtrl, storage, navCtrl, navParams, viewCtrl, loadingCtrl, http, global) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.global = global;
        this.user = this.navParams.data;
        this.storage.get('image').then(function (val) {
            _this.image = val;
        });
    }
    EditProfile.prototype.updateProfile = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("descript", this.user.descript);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new RequestOptions({ headers: header });
        this.http.post(this.global.site + 'api.php?action=updateaccount&image=' + this.image + '&name=' + this.user.name + '&contact=' + this.user.contact + '&id=' + this.user.accountid, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.navCtrl.pop();
            _this.loading.dismissAll();
        }, function (error) {
            console.log(error);
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    };
    EditProfile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfile.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    EditProfile = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-profile',
            templateUrl: 'edit-profile.html',
        }),
        __metadata("design:paramtypes", [AlertController,
            Storage,
            NavController,
            NavParams,
            ViewController,
            LoadingController,
            Http, GlobalvarsProvider])
    ], EditProfile);
    return EditProfile;
}());
export { EditProfile };
//# sourceMappingURL=edit-profile.js.map