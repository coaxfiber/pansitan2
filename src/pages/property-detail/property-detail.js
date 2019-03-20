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
import { ActionSheetController, NavController, NavParams, ToastController } from 'ionic-angular';
import { PropertyService } from '../../providers/property-service-mock/property-service-mock';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PansitanLocationPage } from '../pansitan-location/pansitan-location';
import { Storage } from '@ionic/storage';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage(storage, global, alertCtrl, loadingCtrl, events, actionSheetCtrl, http, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.ctrrate = false;
        this.checkfav = 0;
        this.checkrate = 0;
        this.length = 0;
        this.ratelength = 0;
        this.sumLoan = 0;
        this.yourrate = 0;
        this.yourrateid = 0;
        this.finalrate = 0;
        this.property = this.navParams.data;
        this.ctrrate = false;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        storage.get('email').then(function (val) {
            _this.email = val;
            _this.http.get(_this.global.site + 'api.php?action=getimage&g=1&id=' + _this.property.pansitanid + '&email=' + _this.email)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.image = res.image;
                _this.rate = res.rate;
                _this.length = _this.image.length;
                if (_this.rate != null) {
                    _this.ratelength = _this.rate.length;
                }
                _this.loading.dismissAll();
                for (var index = 0; index < _this.ratelength; index++) {
                    var element = _this.rate[index];
                    _this.sumLoan = _this.sumLoan + parseInt(element.rate);
                    if (element.email == _this.email) {
                        _this.checkrate = 1;
                        _this.yourrate = element.rate;
                        _this.yourrateid = element.rateid;
                    }
                    else
                        _this.checkrate = 0;
                }
                _this.finalrate = _this.sumLoan / _this.ratelength;
                if (res.fav != null) {
                    _this.checkfav = 1;
                    _this.fav = res.fav;
                }
            }, function (error) {
                _this.presentAlert("Something went wrong!");
                _this.loading.dismissAll();
            });
            events.subscribe('star-rating:changed', function (starRating) {
                if (_this.ctrrate == false) {
                    _this.ctrrate = true;
                    if (_this.checkrate == 0)
                        _this.ratingadd(starRating);
                    else
                        _this.rating(starRating);
                }
            });
        });
        //this.showBanner();
    }
    PropertyDetailPage.prototype.seelocation = function (pass) {
        this.navCtrl.push(PansitanLocationPage, pass);
    };
    PropertyDetailPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyDetailPage.prototype.favorites = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        if (this.checkfav == 1) {
            this.http.get(this.global.site + 'api.php?action=removefave&type=1&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                if (res.status == "success") {
                    // code...
                    _this.checkfav = 0;
                    _this.presentToast("Removed from Favorites");
                    _this.loading.dismissAll();
                }
                else {
                    _this.presentToast("Oops! Something went wrong.");
                    _this.loading.dismissAll();
                }
            }, function (error) {
                _this.presentToast("Connection Failed.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.http.get(this.global.site + 'api.php?action=savefave&type=1&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                console.log(res);
                if (res.status == "success") {
                    // code...
                    _this.checkfav = 1;
                    _this.presentToast("Added to Favorites");
                    _this.loading.dismissAll();
                }
                else {
                    _this.presentToast("Oops! Something went wrong.");
                    _this.loading.dismissAll();
                }
            }, function (error) {
                _this.presentToast("Connection Failed.");
                _this.loading.dismissAll();
            });
        }
    };
    PropertyDetailPage.prototype.ratingadd = function (rate) {
        var _this = this;
        this.ctrrate = true;
        console.log('elts');
        this.checkrate = 1;
        this.http.get(this.global.site + 'api.php?action=ratingadd&rate=' + rate + '&email=' + this.email + '&id=' + this.property.pansitanid)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.status == "success") {
                _this.presentToast("Rated");
                _this.yourrate = rate;
                _this.ratelength = _this.ratelength + 1;
                _this.sumLoan = _this.sumLoan + rate;
                _this.finalrate = (_this.sumLoan) / (_this.ratelength);
            }
            else {
                _this.presentToast("Oops! Something went wrong.");
            }
            _this.checkrate = 1;
            _this.ctrrate = false;
        }, function (error) {
            _this.ctrrate = false;
            _this.presentToast("Connection Failed.");
            _this.checkrate = 1;
        });
    };
    PropertyDetailPage.prototype.rating = function (rate) {
        var _this = this;
        this.ctrrate = true;
        console.log('elts');
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        this.http.get(this.global.site + 'api.php?action=ratingedit&rateid=' + this.yourrateid + '&rate=' + rate + '&email=' + this.email + '&id=' + this.property.pansitanid)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.loading.dismissAll();
            if (res.status == "success") {
                _this.presentToast("Rate Updated");
                _this.sumLoan = _this.sumLoan - _this.yourrate;
                _this.yourrate = rate;
                _this.sumLoan = _this.sumLoan + _this.yourrate;
                _this.finalrate = (_this.sumLoan) / (_this.ratelength);
            }
            else {
                _this.presentToast("Rate update Failed");
            }
            _this.ctrrate = false;
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentToast("Connection Failed.");
            _this.ctrrate = false;
        });
    };
    PropertyDetailPage.prototype.presentToast = function (x) {
        var toast = this.toastCtrl.create({
            message: x,
            duration: 2000
        });
        toast.present();
    };
    PropertyDetailPage = __decorate([
        Component({
            selector: 'page-property-detail',
            templateUrl: 'property-detail.html'
        }),
        __metadata("design:paramtypes", [Storage, GlobalvarsProvider, AlertController, LoadingController, Events, ActionSheetController, Http, NavController, NavParams, PropertyService, ToastController])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());
export { PropertyDetailPage };
//# sourceMappingURL=property-detail.js.map