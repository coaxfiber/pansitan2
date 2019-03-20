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
import { AlertController, ToastController } from "ionic-angular";
var UploadImagePage = /** @class */ (function () {
    function UploadImagePage(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.uploadFinished = false;
    }
    UploadImagePage.prototype.submit = function () {
        var _this = this;
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }
        this.multiImageUpload.uploadImages().then(function (images) {
            _this.showToast("Upload successful, view console for details");
            _this.uploadFinished = true;
            console.dir(images);
            alert(images);
        }).catch(function () {
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
    __decorate([
        ViewChild(MultiImageUpload),
        __metadata("design:type", MultiImageUpload)
    ], UploadImagePage.prototype, "multiImageUpload", void 0);
    UploadImagePage = __decorate([
        Component({
            selector: 'page-upload-image',
            templateUrl: 'upload-image.html'
        }),
        __metadata("design:paramtypes", [AlertController, ToastController])
    ], UploadImagePage);
    return UploadImagePage;
}());
export { UploadImagePage };
//# sourceMappingURL=upload-image.js.map