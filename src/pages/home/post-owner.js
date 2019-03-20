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
import { ViewController, ToastController } from 'ionic-angular';
var PostOwner = /** @class */ (function () {
    function PostOwner(viewCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PostOwner.prototype.close = function () {
        this.presentToast();
        this.viewCtrl.dismiss();
    };
    PostOwner.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Notification',
            duration: 2000
        });
        toast.present();
    };
    PostOwner = __decorate([
        Component({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close()\">Remove</button>\n      <button ion-item (click)=\"close()\">Update</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [ViewController, ToastController])
    ], PostOwner);
    return PostOwner;
}());
export { PostOwner };
//# sourceMappingURL=post-owner.js.map