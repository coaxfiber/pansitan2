var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MultiImageUpload } from "../../components/multi-image-upload/multi-image-upload";
import { AlertController, ToastController, } from "ionic-angular";
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Messages } from '../messages/messages';
import { Headers, RequestOptions } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
var UploadImagePage = /** @class */ (function () {
    function UploadImagePage(navCtrl, global, http, storage, loadingCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.global = global;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.uploadFinished = false;
        this.descript = '';
        this.id = 0;
        this.address = '';
        this.name = '';
        this.global.uploadid = 0;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
    }
    UploadImagePage.prototype.submit = function () {
        var _this = this;
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("descript", this.descript);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new RequestOptions({ headers: header });
        this.http.post(this.global.site + 'api.php?action=addpost&email=' + this.email + '&pansitanid=' + this.id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res.pansitan);
            _this.loading.dismissAll();
            _this.multiImageUpload.serverUrl = _this.global.site + "upload.php?pansitanid=" + res.pansitanid + '&type=2';
            _this.multiImageUpload.uploadImages().then(function (images) {
                _this.uploadFinished = true;
                _this.showToast("Posting successful.");
                console.dir(images);
            }).catch(function () {
            });
        }, function (error) {
            console.log(error);
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    };
    UploadImagePage.prototype.cancel = function () {
        var _this = this;
        this.confirm('Are you sure to cancel?').then(function (value) {
            if (value) {
                _this.multiImageUpload.abort();
            }
        });
    };
    UploadImagePage.prototype.showToast = function (text) {
        this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'bottom'
        }).present();
    };
    UploadImagePage.prototype.confirm = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertCtrl.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: function () {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        });
    };
    UploadImagePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UploadImagePage.prototype.openPropertyDetail = function () {
        this.navCtrl.push(Messages);
    };
    UploadImagePage.prototype.ionViewWillEnter = function () {
        this.id = this.global.uploadid;
        this.address = this.global.uploadaddress;
        this.name = this.global.uploadname;
    };
    __decorate([
        ViewChild(MultiImageUpload),
        __metadata("design:type", MultiImageUpload)
    ], UploadImagePage.prototype, "multiImageUpload", void 0);
    UploadImagePage = __decorate([
        Component({
            selector: 'page-upload-image',
            templateUrl: 'upload-image.html'
        }),
        __metadata("design:paramtypes", [NavController, GlobalvarsProvider, Http, Storage, LoadingController,
            AlertController, ToastController])
    ], UploadImagePage);
    return UploadImagePage;
}());
export { UploadImagePage };
//# sourceMappingURL=upload-image.js.map