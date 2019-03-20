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
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { ModalPost } from '../modal-post/modal-post';
import { EditProfile } from '../edit-profile/edit-profile';
import { Options } from '../options/options';
import { TaggedProfile } from '../tagged-profile/tagged-profile';
import { SavedProfile } from '../saved-profile/saved-profile';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { PropertyDetailPage } from '../property-detail/property-detail';
var Profile = /** @class */ (function () {
    function Profile(alertCtrl, loadingCtrl, http, global, storage, navCtrl, navParams, modalCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.global = global;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.limit = 0;
        this.posts = null;
        this.acct = { "accountid": "0", "email": " ", "name": " ", "descript": "", "contact": "", "gender": "", "image": "0", "status": "0" };
        this.properties = [{ 'name': "", "address": '' }];
    }
    Profile.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.profile_segment = 'grid';
        this.storage.get('name').then(function (val) {
            _this.name = val;
            _this.storage.get('email').then(function (val) {
                _this.email = val;
                _this.storage.get('image').then(function (val) {
                    _this.image = val;
                    //start this
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present();
                    _this.http.get(_this.global.site + 'api.php?action=getaccount&email=' + _this.email + '&name=' + _this.name + '&image=' + _this.image)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        _this.properties = res.pansitanfav;
                        console.log(_this.properties);
                        _this.acct = res;
                        console.log(_this.email);
                        _this.http.get(_this.global.site + 'api.php?action=userpostings&email=' + _this.email + '&limit=' + _this.limit)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            if (res[0].status == "failed") {
                                // code...
                            }
                            else
                                _this.posts = res;
                        });
                        _this.loading.dismissAll();
                    }, function (error) {
                        console.log(error);
                        _this.presentAlert("Connection Error!");
                        _this.loading.dismissAll();
                    });
                    //end this
                });
            });
        });
    };
    Profile.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(PropertyDetailPage, property);
    };
    // Define segment for everytime when profile page is active
    Profile.prototype.goEditProfile = function () {
        // Open it as a modal page
        var modal = this.modalCtrl.create(EditProfile);
        modal.present();
    };
    Profile.prototype.goOptions = function () {
        this.navCtrl.push(Options, {});
    };
    Profile.prototype.goTaggedProfile = function () {
        this.navCtrl.push(TaggedProfile);
    };
    Profile.prototype.goSavedProfile = function () {
        this.navCtrl.push(SavedProfile);
    };
    // Triggers when user pressed a post
    Profile.prototype.pressPhoto = function (post) {
        this.presentModal(post);
    };
    // Set post modal
    Profile.prototype.presentModal = function (post) {
        var modal = this.modalCtrl.create(ModalPost, post, // This data comes from API!
        { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    Profile.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Profile = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController,
            Http, GlobalvarsProvider,
            Storage, NavController, NavParams, ModalController, ToastController])
    ], Profile);
    return Profile;
}());
export { Profile };
//# sourceMappingURL=profile.js.map