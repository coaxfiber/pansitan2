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
import { App, NavController, NavParams } from 'ionic-angular';
import { MessageDetail } from '../message-detail/message-detail';
import { NewMessage } from '../new-message/new-message';
import { PropertyService } from '../../providers/property-service-mock/property-service-mock';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
var Messages = /** @class */ (function () {
    // You can get this data from your API. This is a dumb data for being an example.
    function Messages(service, global, navCtrl, http, loadingCtrl, navParams, app) {
        var _this = this;
        this.service = service;
        this.global = global;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.app = app;
        this.searchKey = "";
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        this.http.get(this.global.site + 'api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.properties = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
        });
        this.findAll();
    }
    Messages.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    Messages.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    Messages.prototype.onCancel = function (event) {
        this.findAll();
    };
    Messages.prototype.goNewMessage = function () {
        this.app.getRootNav().push(NewMessage);
    };
    Messages.prototype.goMessageDetail = function (sender, profile_img, last_message) {
        this.app.getRootNav().push(MessageDetail, { sender: sender, profile_img: profile_img, last_message: last_message });
    };
    Messages.prototype.close = function (name, address, pansitanid) {
        this.global.pass(name, address, pansitanid);
        this.navCtrl.pop();
    };
    Messages = __decorate([
        Component({
            selector: 'page-messages',
            templateUrl: 'messages.html',
        }),
        __metadata("design:paramtypes", [PropertyService,
            GlobalvarsProvider, NavController, Http, LoadingController, NavParams, App])
    ], Messages);
    return Messages;
}());
export { Messages };
//# sourceMappingURL=messages.js.map