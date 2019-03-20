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
import { App, NavController, Content, PopoverController, ToastController } from 'ionic-angular';
import { PostPopover } from './post-popover';
import { PostOwner } from './post-owner';
import { Messages } from '../messages/messages';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
var Home = /** @class */ (function () {
    function Home(storage, toastCtrl, alertCtrl, loadingCtrl, http, global, navCtrl, popoverCtrl, app) {
        var _this = this;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.app = app;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.tap = 0;
        this.limit = 0;
        //http://localhost/pansit/api.php?action=get_app_list
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
        this.http.get(this.global.site + 'api.php?action=postings&limit=' + this.limit)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.posts = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    }
    Home.prototype.seemore = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        this.limit = this.limit + 10;
        this.http.get(this.global.site + 'api.php?action=postings&limit=' + this.limit)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res[0].status != 'failed') {
                _this.posts = _this.posts.concat(res);
            }
            else
                _this.presentAlert("No more Posts to show...");
            _this.loading.dismissAll();
        }, function (error) {
            console.log(error);
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    };
    Home.prototype.postheart = function (x, like) {
        if (like != null) {
            for (var index = 0; index < like.length; index++) {
                var element = like[index];
                if (element.email == this.email) {
                    this.posts[x].heart = 'heart';
                }
            }
        }
        return this.posts[x].heart;
    };
    Home.prototype.likeButton = function (post, x) {
        var _this = this;
        if (post.heart === 'heart-outline') {
            this.posts[x].heart = 'heart';
            this.posts[x].color = 'danger';
            this.addlike = [{ likeid: "0", postid: post.postid, email: this.email }];
            if (this.posts[x].like != null) {
                this.posts[x].like = this.posts[x].like.concat(this.addlike);
            }
            else
                this.posts[x].like = this.addlike;
            this.http.get(this.global.site + 'api.php?action=like&email=' + this.email + '&id=' + post.postid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                if (res.status == "success") {
                }
                else {
                    _this.posts[x].heart = 'heart-outline';
                    _this.posts[x].color = 'black';
                    _this.presentToast("Oops! Something went wrong.");
                }
            }, function (error) {
                _this.posts[x].heart = 'heart-outline';
                _this.posts[x].color = 'black';
                _this.presentToast("Connection Error!");
                _this.loading.dismissAll();
            });
        }
    };
    Home.prototype.tapPhotoLike = function (post, x) {
        var _this = this;
        this.tap++;
        if (this.tap % 2 === 0) {
            this.likeButton(post, x);
        }
        setTimeout(function () { _this.tap = 0; }, 1000);
    };
    Home.prototype.presentPostPopover = function () {
        var popover = this.popoverCtrl.create(PostPopover);
        popover.present();
    };
    Home.prototype.presentPostOwner = function () {
        var popover = this.popoverCtrl.create(PostOwner);
        popover.present();
    };
    Home.prototype.goMessages = function () {
        this.app.getRootNav().push(Messages);
    };
    Home.prototype.swipePage = function (event) {
        if (event.direction === 8) { // Swipe Left
            console.log("Swap Camera");
        }
        if (event.direction === 2) { // Swipe Right
            //this.goMessages();
        }
    };
    Home.prototype.reset = function () {
        var _this = this;
        this.content.scrollToTop();
        this.limit = 0;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        this.email = "elton@gmail.com";
        this.http.get(this.global.site + 'api.php?action=postings&limit=' + this.limit)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.posts = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
        this.content.scrollToTop();
    };
    Home.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    Home.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Home.prototype.process = function (time) {
        var date1 = new Date(time * 1000);
        var date2 = new Date();
        var diff = Math.abs(date2.getTime() - date1.getTime());
        var diffmin = Math.ceil((diff / 1000) / 60);
        if (diffmin < 1440) {
            if (diffmin < 60) {
                return diffmin + "m ago";
            }
            else {
                return Math.floor(diffmin / 60) + "h and " + (diffmin % 60) + "m ago";
            }
        }
        else {
            return date1.toDateString();
        }
    };
    Home.prototype.presentToast = function (x) {
        var toast = this.toastCtrl.create({
            message: x,
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Home.prototype, "content", void 0);
    Home = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [Storage,
            ToastController, AlertController, LoadingController, Http, GlobalvarsProvider, NavController, PopoverController, App])
    ], Home);
    return Home;
}());
export { Home };
//# sourceMappingURL=home.js.map