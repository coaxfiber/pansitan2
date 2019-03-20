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
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';
import { PropertyService } from '../../providers/property-service-mock/property-service-mock';
var Notifications = /** @class */ (function () {
    function Notifications(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "map";
    }
    Notifications = __decorate([
        Component({
            selector: 'page-notifications',
            templateUrl: 'notifications.html',
        }),
        __metadata("design:paramtypes", [NavController, PropertyService, Config])
    ], Notifications);
    return Notifications;
}());
export { Notifications };
//# sourceMappingURL=notifications.js.map