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
import { ViewController, AlertController, ToastController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Http } from '@angular/http';
var PostOwner = /** @class */ (function () {
    function PostOwner(global, http, alertCtrl, viewCtrl, toastCtrl) {
        this.global = global;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PostOwner.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PostOwner.prototype.alertremove = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        var text = "Remove this post?";
        this.alertCtrl.create({
            message: text,
            buttons: [
                {
                    text: "No",
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.http.get(_this.global.site + 'api.php?action=deletepost&id=' + _this.global, postdelete)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentToast('Post has been Removed. Refresh to');
                        }, function (error) {
                            _this.loading.dismissAll();
                        });
                    }
                }
            ]
        }).present();
    };
    PostOwner.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000
        });
        toast.present();
    };
    PostOwner = __decorate([
        Component({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"alertremove()\">Remove</button>\n      <button ion-item (click)=\"close()\">Update</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, Http, AlertController, ViewController, ToastController])
    ], PostOwner);
    return PostOwner;
}());
export { PostOwner };
//# sourceMappingURL=post-owner.js.map