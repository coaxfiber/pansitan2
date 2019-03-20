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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var NewMessage = /** @class */ (function () {
    function NewMessage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_checked = false;
        this.input_visible = false;
        this.friends = [
            {
                id: 1,
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                username: 'candelibas'
            },
            {
                id: 2,
                profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
                username: 'maxlynch'
            },
            {
                id: 3,
                profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
                username: 'ashleyosama'
            },
            {
                id: 4,
                profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
                username: 'adam_bradley'
            },
            {
                id: 5,
                profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
                username: 'linus_torvalds'
            }
        ];
    }
    NewMessage.prototype.checkBox = function (username) {
        console.log('Username: ' + username);
        this.input_visible = true;
    };
    NewMessage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-new-message',
            templateUrl: 'new-message.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], NewMessage);
    return NewMessage;
}());
export { NewMessage };
//# sourceMappingURL=new-message.js.map