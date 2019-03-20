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
var Messages = /** @class */ (function () {
    function Messages(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        // You can get this data from your API. This is a dumb data for being an example.
        this.messages = [
            {
                id: 1,
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                sender: 'candelibas',
                last_message: 'How you doin?',
                time: '6h'
            },
            {
                id: 2,
                profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
                sender: 'maxlynch',
                last_message: 'LOL. Ionic in 2017',
                time: '11h'
            },
            {
                id: 3,
                profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
                sender: 'ashleyosama',
                last_message: 'Wanna hang out?',
                time: '1d'
            },
            {
                id: 4,
                profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
                sender: 'adam_bradley',
                last_message: 'Typescript <3 me',
                time: '3d'
            },
            {
                id: 5,
                profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
                sender: 'linus_torvalds',
                last_message: 'I am installing Ubuntu right now.',
                time: '6d'
            }
        ];
    }
    Messages.prototype.goNewMessage = function () {
        this.app.getRootNav().push(NewMessage);
    };
    Messages.prototype.goMessageDetail = function (sender, profile_img, last_message) {
        this.app.getRootNav().push(MessageDetail, { sender: sender, profile_img: profile_img, last_message: last_message });
    };
    Messages = __decorate([
        Component({
            selector: 'page-messages',
            templateUrl: 'messages.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, App])
    ], Messages);
    return Messages;
}());
export { Messages };
//# sourceMappingURL=messages.js.map