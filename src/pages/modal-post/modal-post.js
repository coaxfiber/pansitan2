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
import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
var ModalPost = /** @class */ (function () {
    function ModalPost(storage, toastCtrl, http, viewCtrl, global, navParams, modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.modal_data = this.navParams.data.user_id;
        storage.get('email').then(function (val) {
            _this.email = val;
        });
    }
    ModalPost.prototype.ionViewDidLoad = function () { };
    ModalPost.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPost.prototype.postheart = function (like) {
        if (like != null) {
            for (var index = 0; index < like.length; index++) {
                var element = like[index];
                if (element.email == this.email) {
                    return 'heart';
                }
            }
        }
        return 'heart-outline';
    };
    ModalPost.prototype.likeButton = function () {
        var _this = this;
        if (this.modal_data.heart === 'heart-outline') {
            this.modal_data.heart = 'heart';
            this.addlike = [{ likeid: "0", postid: this.modal_data.postid, email: this.email }];
            if (this.modal_data.like != null) {
                this.modal_data.like = this.modal_data.like.concat(this.addlike);
            }
            else
                this.modal_data.like = this.addlike;
            this.http.get(this.global.site + 'api.php?action=like&email=' + this.email + '&id=' + this.modal_data.postid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                if (res.status == "success") {
                }
                else {
                    _this.modal_data.heart = 'heart-outline';
                    _this.presentToast("Oops! Something went wrong.");
                }
            }, function (error) {
                _this.modal_data.heart = 'heart-outline';
                _this.presentToast("Connection Error.");
            });
        }
    };
    ModalPost.prototype.goUserProfile = function (userId) {
        console.log("User id: " + userId);
    };
    ModalPost.prototype.process = function (time) {
        var date1 = new Date(time * 1000);
        var date2 = new Date();
        var diff = Math.abs(date2.getTime() - date1.getTime());
        var diffmin = Math.ceil((diff / 1000) / 60);
        if (diffmin < 1440) {
            if (diffmin < 60) {
                return diffmin + " minutes ago";
            }
            else {
                return Math.floor(diffmin / 60) + " hours and " + (diffmin % 60) + " minutes";
            }
        }
        else {
            return date1.toDateString();
        }
    };
    ModalPost.prototype.presentToast = function (x) {
        var toast = this.toastCtrl.create({
            message: x,
            duration: 2000
        });
        toast.present();
    };
    ModalPost = __decorate([
        Component({
            selector: 'page-modalpost',
            templateUrl: 'modal-post.html',
        }),
        __metadata("design:paramtypes", [Storage,
            ToastController, Http, ViewController, GlobalvarsProvider, NavParams, ModalController])
    ], ModalPost);
    return ModalPost;
}());
export { ModalPost };
//# sourceMappingURL=modal-post.js.map