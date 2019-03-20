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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPost } from '../modal-post/modal-post';
var Search = /** @class */ (function () {
    function Search(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // You can get this data from your API. This is a dumb data for being an example.
        this.search_data = [
            {
                id: 1,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/13473123_1544898359150795_654626889_n.jpg'
            },
            {
                id: 2,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/12940826_1673029922963013_921771297_n.jpg'
            },
            {
                id: 3,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/10852865_738738146215825_1258215298_n.jpg'
            },
            {
                id: 4,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891528_841068522581102_1591061904_n.jpg'
            },
            {
                id: 5,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/10809765_1474804169496730_887570428_n.jpg'
            },
            {
                id: 6,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891515_1524153351163603_439436363_n.jpg'
            }
        ];
    }
    // Get search items from input with your API
    Search.prototype.getItems = function () {
    };
    // Triggers when user pressed a post
    Search.prototype.pressPhoto = function (user_id, username, profile_img, post_img) {
        this.presentModal(user_id, username, profile_img, post_img);
    };
    // Set post modal
    Search.prototype.presentModal = function (user_id, username, profile_img, post_img) {
        var modal = this.modalCtrl.create(ModalPost, {
            user_id: user_id,
            username: username,
            profile_img: profile_img,
            post_img: post_img
        }, // This data comes from API!
        { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    Search = __decorate([
        Component({
            selector: 'page-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ModalController])
    ], Search);
    return Search;
}());
export { Search };
//# sourceMappingURL=search.js.map