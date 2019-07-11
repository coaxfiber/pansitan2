webpackJsonp([8],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDetail = (function () {
    function MessageDetail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send_like_icon = false;
        this.likeBtnVisible = false;
        this.messages = []; // You can get all the chat details from your API
        this.sender = this.navParams.get('sender');
        this.profile_img = this.navParams.get('profile_img');
        this.last_message = this.navParams.get('last_message');
    }
    MessageDetail.prototype.sendLike = function () {
        if (this.send_like_icon === false) {
            this.send_like_icon = true;
        }
        // Allow heart effect
        this.likeBtnVisible = !this.likeBtnVisible;
    };
    return MessageDetail;
}());
MessageDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-message-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\message-detail\message-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="white">\n\n    <ion-title>{{ sender }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-note><p text-center no-padding no-margin>April 1, 7:29 PM</p></ion-note>\n\n    \n\n    <!-- Sender -->\n\n    <ion-item no-lines no-margin no-padding text-wrap>\n\n      <ion-avatar item-left>\n\n        <img [src]="profile_img">\n\n      </ion-avatar>\n\n      <div class="chatbox">LOL. Still using Ionic instead of native techs? It\'s 2017 mate.</div>\n\n    </ion-item>\n\n\n\n    <!-- Me -->\n\n    <ion-item no-lines no-margin no-padding text-wrap>\n\n      <ion-avatar item-right>\n\n        <img src="https://avatars1.githubusercontent.com/u/918975?v=3&s=460">\n\n      </ion-avatar>\n\n      <div margin-left class="chatbox chatbox-right">You are doomed bruh! ;)</div>\n\n    </ion-item>\n\n\n\n    \n\n    <ion-item no-lines no-margin no-padding text-wrap>\n\n      <ion-avatar item-left>\n\n        <img [src]="profile_img">\n\n      </ion-avatar>\n\n      <div class="chatbox">{{ last_message }}</div>\n\n    </ion-item>\n\n\n\n    <!-- Heart icon -->\n\n    <ion-item no-lines no-margin no-padding text-wrap *ngIf="send_like_icon" item-right>\n\n      <ion-avatar item-right>\n\n        <img src="https://avatars1.githubusercontent.com/u/918975?v=3&s=460">\n\n      </ion-avatar>\n\n      <div text-right [ngClass]="{\'like-msg-btn\': likeBtnVisible }">\n\n        <ion-icon name="heart" [ngClass]="{\'like-btn\': likeBtnVisible, \'heart-size\': true }" color="danger"></ion-icon>\n\n      </div>\n\n    </ion-item>\n\n\n\n</ion-content>\n\n<!-- Footer -->\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons start left>\n\n      <button ion-button icon-right color="black">\n\n        <ion-icon name="images"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-input type="text" value=""></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button icon-right color="black" (click)="sendLike()">\n\n        <ion-icon name="heart-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\message-detail\message-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MessageDetail);

//# sourceMappingURL=message-detail.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewMessage = (function () {
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
    return NewMessage;
}());
NewMessage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-new-message',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\new-message\new-message.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="white">\n\n    <ion-title>New Message</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-item>\n\n    <ion-label color="black">To:</ion-label>\n\n    <ion-input type="text" placeholder="Search"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item *ngFor="let f of friends">\n\n    <ion-label>\n\n        <img [src]="f.profile_img" class="list-img" alt="">\n\n        <span class="list-username">{{ f.username }}</span>\n\n      </ion-label>\n\n    <ion-checkbox item-right color="primary" (ionChange)="checkBox(f.username)" checked="false"></ion-checkbox>\n\n  </ion-item>\n\n</ion-content>\n\n<!-- Footer -->\n\n<ion-footer *ngIf="input_visible">\n\n  <ion-toolbar>\n\n    <ion-buttons start left>\n\n      <button ion-button icon-right color="black">\n\n        <ion-icon name="images"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-input type="text" value=""></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button icon-right color="black">\n\n        <ion-icon name="heart-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\new-message\new-message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], NewMessage);

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_post_modal_post__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tagged_profile_tagged_profile__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__saved_profile_saved_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__property_detail_property_detail__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var Profile = (function () {
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
                        console.log(res);
                        _this.acct = res;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    // Define segment for everytime when profile page is active
    Profile.prototype.goEditProfile = function (user) {
        // Open it as a modal page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__["a" /* EditProfile */], user);
    };
    Profile.prototype.goOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__options_options__["a" /* Options */], {});
    };
    Profile.prototype.goTaggedProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tagged_profile_tagged_profile__["a" /* TaggedProfile */]);
    };
    Profile.prototype.goSavedProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__saved_profile_saved_profile__["a" /* SavedProfile */]);
    };
    // Triggers when user pressed a post
    Profile.prototype.pressPhoto = function (post) {
        this.presentModal(post);
    };
    // Set post modal
    Profile.prototype.presentModal = function (post) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_post_modal_post__["a" /* ModalPost */], post, // This data comes from API!
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
    return Profile;
}());
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="white">\n\n    <ion-title>{{acct.name}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <!--<button ion-button icon-only>\n\n        <ion-icon name="person-add" class="badge-container">\n\n          <span class="custom-badge">3</span>\n\n        </ion-icon>\n\n      </button>-->\n\n      <button ion-button icon-only (click)="goOptions()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-row padding>\n\n    <!-- Avatar -->\n\n    <ion-col col-3>\n\n      <img src="{{image}}" class="avatar" alt=""  onerror="this.src=\'assets/img/broken.png\';" >\n\n    </ion-col>\n\n    <!-- Information about user -->\n\n    <ion-col col-3 text-center>\n\n      <h6 *ngIf="properties!=null">{{properties.length}}</h6>\n\n      <h6  *ngIf="properties===null">0</h6>\n\n      <p no-paddin no-margin>favorites</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-3 text-center>\n\n      <h6 *ngIf="posts!=null">{{posts.length}}</h6>\n\n      <h6  *ngIf="posts===null">0</h6>\n\n      <p no-paddin no-margin>posts</p>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n  <!-- Edit/follow button -->\n\n  <ion-row no-padding no-margin>\n\n    <ion-col no-padding no-margin col-4></ion-col>\n\n      <ion-col no-padding no-margin text-center col-8>\n\n      <button class="edit-button" (click)="goEditProfile(acct)">Edit your profile</button>\n\n    </ion-col>\n\n    <ion-col col-3></ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Profile info -->\n\n  <div padding>\n\n    <p no-margin no-padding><b>{{acct.name}}</b></p>\n\n    <p no-padding no-margin class="info" style="white-space: pre-line;">{{acct.descript}}</p>\n\n  </div>\n\n\n\n  <!-- Segments -->\n\n  <div>\n\n    <ion-segment [(ngModel)]="profile_segment">\n\n      <ion-segment-button value="grid">\n\n        <ion-icon name="star"></ion-icon> Favorites\n\n      </ion-segment-button>\n\n      <ion-segment-button value="list"> \n\n        <ion-icon name="list"></ion-icon> Posts\n\n      </ion-segment-button>\n\n      <!--<ion-segment-button value="saved" (click)="goSavedProfile()">\n\n        <ion-icon name="bookmark"></ion-icon> Saved\n\n      </ion-segment-button>-->\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <!-- Segment content -->\n\n  <div [ngSwitch]="profile_segment">\n\n\n\n    <ion-list *ngSwitchCase="\'grid\'">\n\n      <ion-list>\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{ global.site }}/uploads/{{property.pansitanid}}.jpg"  onerror="this.src=\'assets/img/broken.png\';" />\n\n                </ion-thumbnail>\n\n                <h2>{{property.name}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'list\'">\n\n\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-4 class="grid_img" *ngFor="let i of posts" (press)="pressPhoto(i)">\n\n            <img src="{{ global.site }}/uploads/posts/{{i.images[0].imageid}}.jpg" alt=""  onerror="this.src=\'assets/img/broken.png\';"  *ngIf="i.images!=null">\n\n            <img src="assets/img/broken.png" *ngIf="i.images==null"> \n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n  </div>\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfile = (function () {
    function EditProfile(alertCtrl, storage, navCtrl, navParams, viewCtrl, loadingCtrl, http, global) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.global = global;
        this.user = this.navParams.data;
        this.storage.get('image').then(function (val) {
            _this.image = val;
        });
    }
    EditProfile.prototype.updateProfile = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("descript", this.user.descript);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post(this.global.site + 'api.php?action=updateaccount&image=' + this.image + '&name=' + this.user.name + '&contact=' + this.user.contact + '&id=' + this.user.accountid, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.navCtrl.pop();
            _this.loading.dismissAll();
        }, function (error) {
            console.log(error);
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    };
    EditProfile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfile.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return EditProfile;
}());
EditProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Profile</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateProfile()">\n\n        <ion-icon name="checkmark" color="primary"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!-- Profile picture -->\n\n  <div text-center>\n\n    <img [src]="image" class="edit-avatar" alt=""  onerror="this.src=\'assets/img/broken.png\';" >\n\n  </div>\n\n\n\n  <!-- Form -->\n\n  <ion-item>\n\n    <ion-label> \n\n      <ion-icon name="clipboard" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>\n\n      <ion-icon name="quote" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-textarea placeholder="" [(ngModel)]="user.descript"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <!-- Private information form -->\n\n  <div margin-top padding-top>\n\n    <h4 no-margin no-padding class="info-text">Private Information</h4>\n\n    <hr class="custom-hr" color="gray">\n\n  </div>\n\n  \n\n  <ion-item>\n\n    <ion-label> \n\n      <ion-icon name="mail" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input type="text" [value]="user.email" readonly></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label> \n\n      <ion-icon name="phone-portrait" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.contact" placeholder="Add your phone"></ion-input>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\edit-profile\edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
], EditProfile);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Options page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Options = (function () {
    function Options(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Options.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Options');
    };
    Options.prototype.logout = function () {
        this.storage.remove('email');
        this.storage.remove('name');
        this.storage.remove('image');
        window.location.reload();
    };
    return Options;
}());
Options = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-options',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\options\options.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Options</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n\n\n  <div padding-top margin-top>\n\n    <h4 no-margin no-padding class="info-text">About</h4>\n\n    <hr class="custom-hr" color="gray">\n\n    <ion-item>Privacy Policy</ion-item>\n\n    <ion-item>Terms of Service</ion-item>\n\n  </div>\n\n\n\n  <div padding-top margin-top>\n\n    <hr class="custom-hr" color="gray">\n\n    <ion-item ><a href="javascript:void()" (click)=\'logout()\' style="color: black;">Log Out</a></ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\options\options.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], Options);

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaggedProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaggedProfile = (function () {
    function TaggedProfile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // You can get this data from your API. This is a dumb data for being an example.
        this.images = [
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
            }
        ];
    }
    return TaggedProfile;
}());
TaggedProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tagged-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\tagged-profile\tagged-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Photos of You</ion-title>\n\n    <ion-buttons end right>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row >\n\n      <ion-col col-4 class="grid_img" *ngFor="let i of images">\n\n        <img [src]="i.post_img" alt="">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\tagged-profile\tagged-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], TaggedProfile);

//# sourceMappingURL=tagged-profile.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedProfile = (function () {
    function SavedProfile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // You can get this data from your API. This is a dumb data for being an example.
        this.images = [
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
            }
        ];
    }
    return SavedProfile;
}());
SavedProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-saved-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\saved-profile\saved-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Saved</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-toolbar text-center>\n\n    <p>Only you can see what you\'ve saved</p>\n\n  </ion-toolbar>\n\n\n\n  <ion-grid>\n\n    <ion-row >\n\n      <ion-col col-4 class="grid_img" *ngFor="let i of images">\n\n        <img [src]="i.post_img" alt="">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\saved-profile\saved-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SavedProfile);

//# sourceMappingURL=saved-profile.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-profile/edit-profile.module": [
		346,
		7
	],
	"../pages/login/login.module": [
		345,
		0
	],
	"../pages/message-detail/message-detail.module": [
		344,
		6
	],
	"../pages/new-message/new-message.module": [
		347,
		5
	],
	"../pages/options/options.module": [
		349,
		4
	],
	"../pages/profile/profile.module": [
		350,
		3
	],
	"../pages/saved-profile/saved-profile.module": [
		348,
		2
	],
	"../pages/tagged-profile/tagged-profile.module": [
		351,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 144;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_popover__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_owner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__property_detail_property_detail__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var Home = (function () {
    function Home(storage, toastCtrl, alertCtrl, loadingCtrl, http, global, navCtrl, popoverCtrl, app) {
        //http://localhost/pansit/api.php?action=get_app_list
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
        //type of pansitan =2   sa image yan
        //type of post =1
        this.loadp = 0;
        this.loadpost = 0;
        this.http.get(this.global.site + 'api.php?action=top')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.top = res;
            console.log(res);
            _this.loadp = 1;
        }, function (error) {
            console.log(error);
            _this.loadp = 2;
        });
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
        this.storage.get('image').then(function (val) {
            _this.image = val;
        });
        this.http.get(this.global.site + 'api.php?action=postings&limit=' + this.limit)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.posts = res;
            _this.loadpost = 1;
        }, function (error) {
            _this.loadpost = 2;
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
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__post_popover__["a" /* PostPopover */]);
        popover.present();
    };
    Home.prototype.presentPostOwner = function (x) {
        this.global.postdelete = x;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__post_owner__["a" /* PostOwner */]);
        popover.present();
    };
    Home.prototype.goMessages = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* Messages */]);
    };
    Home.prototype.swipePage = function (event) {
        if (event.direction === 8) {
            console.log("Swap Camera");
        }
        if (event.direction === 2) {
            //this.goMessages();
        }
    };
    Home.prototype.gotopansitan = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    Home.prototype.reset = function () {
        var _this = this;
        this.loadp = 0;
        this.loadpost = 0;
        this.http.get(this.global.site + 'api.php?action=top')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.top = res;
            _this.loadp = 1;
        }, function (error) {
            _this.loadp = 2;
        });
        this.content.scrollToTop();
        this.limit = 0;
        this.http.get(this.global.site + 'api.php?action=postings&limit=' + this.limit)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.posts = res;
            _this.loadpost = 1;
        }, function (error) {
            _this.loadpost = 2;
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
    Home.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    return Home;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], Home.prototype, "content", void 0);
Home = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <!--<ion-buttons start left>\n\n      <button color="black" ion-button icon-only>\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-buttons>-->\n\n    \n\n    <ion-title style="border: 1px solid #ccc" (click)="scrollToTop()">Pansitan</ion-title>\n\n\n\n    <ion-buttons end right>\n\n      <!--<button color="black" ion-button icon-only (click)="goMessages()">\n\n        <ion-icon name="paper-plane"></ion-icon>\n\n      </button>\n\n      <button color="black" ion-button icon-only (click)="goMessages()">\n\n      <ion-icon name="person"></ion-icon>\n\n      <ion-icon name="search"></ion-icon>\n\n      </button>-->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <p style="margin-left: 5px;margin-top: 5px;margin-bottom: 1px;">Top 15 Rated Pansitans</p>\n\n  <p style="text-align: center;" *ngIf="loadp===0"><ion-spinner name="dots" ></ion-spinner></p>\n\n  <p style="text-align: center;" *ngIf="loadp===2">Connection Error!</p>\n\n  <ion-scroll class="story" scrollX="true"  *ngIf="loadp===1">\n\n    <div class="story_scroll" *ngFor="let s of top" (click)="openPropertyDetail(s)">\n\n      <div class="story_img_bg">\n\n      <img no-margin no-padding class="story_img" src="{{ global.site }}/uploads/{{s.pansitanid}}.jpg" onerror="this.src=\'assets/img/broken.png\';" ></div>\n\n      <p no-margin no-padding text-center class="story_text">{{ s.name }}</p>\n\n    </div>\n\n  </ion-scroll>\n\n  <!-- Story line \n\n  <ion-scroll class="story" scrollX="true">\n\n    <div class="story_scroll" *ngFor="let s of stories">\n\n      <div class="story_img_bg">\n\n      <img no-margin no-padding class="story_img" [src]="s.img"></div>\n\n      <p no-margin no-padding text-center class="story_text">{{ s.user_name }}</p>\n\n    </div>\n\n  </ion-scroll>\n\n  <div (swipe)="swipePage($event)">\n\n-->\n\n  <hr no-margin no-padding>\n\n  <div>\n\n\n\n    <!-- Cards -->\n\n    <div  *ngIf="loadpost===1">\n\n    <ion-card no-padding padding-bottom no-margin class="card"  *ngFor="let post of posts; let x = index"  >\n\n\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-item style="padding-left:0px;">\n\n        <ion-avatar item-left>\n\n          <img src="{{ image }}">\n\n        </ion-avatar>\n\n        <h2 style="font-weight: bold">{{ post.account.name }}</h2>\n\n        <p *ngIf="post.pansitan.name!=null" (click)="gotopansitan(post.pansitan)">{{ post.pansitan.name }}</p>\n\n        \n\n      </ion-item>\n\n        </ion-col >\n\n        <ion-col col-2>\n\n          <button no-margin no-padding clear color="black" ion-button icon-only style="float: right; top: 15px" (click)="presentPostPopover()" *ngIf="post.email != email">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n          <button no-margin no-padding clear color="black" ion-button icon-only style="float: right; top: 15px" (click)="presentPostOwner(post.postid)" *ngIf="post.email == email">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n        <div style="margin: 0 5px 0 5px">\n\n        <p  style="white-space: pre-line;">{{ post.descript }}</p>\n\n        \n\n        <ion-note style="font-size: 12px;">\n\n          {{ process(post.timestamp)  }}\n\n        </ion-note>\n\n        </div>\n\n        <div style="height: 5px"></div>\n\n        <div *ngIf="post.images!=null" >\n\n        <div *ngIf="post.images.length===1" >\n\n        <img src="{{ global.site }}uploads/posts/{{ post.images[0].imageid }}.jpg" (tap)="tapPhotoLike(post,x)" onerror="this.src=\'assets/img/broken.png\';" />\n\n        </div>\n\n        <ion-slides  *ngIf="post.images.length>1">\n\n\n\n        <ion-slide   *ngFor="let p of post.images; let i = index"  no-bounce>\n\n            <img src="{{ global.site }}uploads/posts/{{ p.imageid }}.jpg" (tap)="tapPhotoLike(post,x)"  onerror="this.src=\'assets/img/broken.png\';" />\n\n            <p>{{ i + 1 }}/{{ post.images.length }}</p>\n\n        </ion-slide>\n\n\n\n        </ion-slides>\n\n        </div>\n\n\n\n      <p no-margin no-padding>\n\n        <button clear ion-button icon-only (click)="likeButton(post,x)" class="like-btn" *ngIf="postheart(x,post.like)!=\'heart\' || post.heart!=\'heart\'">\n\n          <ion-icon no-padding name="{{post.heart}}" color="{{post.color}}" class="icon-space"></ion-icon>\n\n        </button>\n\n        <button clear ion-button icon-only class="like-btn" *ngIf="postheart(x,post.like)==\'heart\' || post.heart==\'heart\'">\n\n          <ion-icon no-padding name="heart" color="danger" class="icon-space"></ion-icon>\n\n        </button>\n\n        <button clear ion-button style="float: right">\n\n          <p class="like-content" *ngIf = "post.like == null;"><ion-icon name="heart"></ion-icon> 0 likes</p>\n\n          <p class="like-content" *ngIf = "post.like != null && post.like.length==1"><ion-icon name="heart"></ion-icon> 1 like</p>\n\n          <p class="like-content" *ngIf = "post.like != null && post.like.length>1"><ion-icon name="heart"></ion-icon> {{post.like.length}} likes\n\n        </button>\n\n        <!--<button clear ion-button icon-only>\n\n          <ion-icon no-padding isActive="false" color="black" name="ios-text-outline" class="icon-space" style="font-weight: bold"></ion-icon>\n\n        </button>\n\n        <button clear ion-button icon-only>\n\n          <ion-icon no-padding isActive="false" color="black" name="paper-plane" class="icon-space"></ion-icon>\n\n        </button>\n\n        <button no-margin no-padding clear color="black" ion-button icon-only style="float: right">\n\n          <ion-icon name="ios-bookmark-outline"></ion-icon>\n\n        </button>-->\n\n      </p>\n\n      <hr style="margin: 0">\n\n        \n\n\n\n    </ion-card>\n\n    <button ion-button block outline  style="width: 95%;margin: 10px" (click)="seemore()">See More</button>\n\n</div>\n\n\n\n  <p style="text-align: center;"  *ngIf="loadpost===0"> <ion-spinner name="crescent"></ion-spinner></p>\n\n  <p style="text-align: center;" *ngIf="loadpost===2">Connection Error!</p>\n\n  </div>\n\n\n\n\n\n     <ion-fab style="right: 3px !important;bottom: 3px !important">\n\n        <button ion-fab item-right style="right: 0;" (click) = "reset()"><ion-icon name="md-refresh"></ion-icon></button>\n\n     </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PansitanLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FarmerLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PansitanLocationPage = (function () {
    function PansitanLocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewMode = "map";
        this.property = this.navParams.data;
        this.showMap();
    }
    PansitanLocationPage.prototype.showMarkers = function () {
        if (this.markersGroup) {
            this.map2.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([this.property.lati, this.property.longti]).on('click', function (event) { return console.log("map marker"); });
        this.markersGroup.addLayer(marker);
        this.map2.addLayer(this.markersGroup);
    };
    PansitanLocationPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map2 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map2").setView([_this.property.lati, _this.property.longti], 10);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map2);
            _this.showMarkers();
            _this.map2.locate({ setView: false, maxZoom: 10 });
            _this.map2.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map2);
                __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map2);
            });
            function onLocationError(e) {
                alert("Turn on your service location to see your current location!");
                this.viewMode = "list";
            }
            _this.map2.on('locationerror', onLocationError);
        });
    };
    return PansitanLocationPage;
}());
PansitanLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-pansitan-location',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\pansitan-location\pansitan-location.html"*/'<!--\n\n  Generated template for the FarmerLocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ property.name }}\'s Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div style="width:100%;height:100%;" id="map2"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\pansitan-location\pansitan-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], PansitanLocationPage);

//# sourceMappingURL=pansitan-location.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Search = (function () {
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__["a" /* ModalPost */], {
            user_id: user_id,
            username: username,
            profile_img: profile_img,
            post_img: post_img
        }, // This data comes from API!
        { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    return Search;
}());
Search = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="white">\n\n    <ion-title>About</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <!--<button ion-button icon-only>\n\n        <ion-icon name="person-add" class="badge-container">\n\n          <span class="custom-badge">3</span>\n\n        </ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="goOptions()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>-->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n	<ion-card>\n\n	  <ion-card-content>\n\n	  	<b>The Developer</b>\n\n\n\n	  	<ion-row>\n\n        <ion-col col-10>\n\n          <ion-item style="padding-left:0px;">\n\n	        <ion-avatar item-left>\n\n	          <img src="assets/img/dev.jpg" style="width: 70px;height: 70px">\n\n	        </ion-avatar>\n\n	        <h2 style="font-weight: bold">Elton Bagne</h2> \n\n	        <p>Website: <a href="http://eltonbagne.info/#about_me" target="_blank">eltonbagne.info/#about_me</a></p>       \n\n	      </ion-item>\n\n        </ion-col >\n\n    	</ion-row><br><br>\n\n    <h4><b>Powered By:</b></h4>\n\n	  	<img src="assets/img/tv.png" >\n\n	  	<p  style="text-align: center;"><a href="http://techventuresph.com/" target="_blank">techventuresph.com</a></p> <br>\n\n	  	<img src="assets/img/htn.png">\n\n	  	<p style="text-align: center;">\n\n	    	<a href="https://hackthenorth.ph/" target="_blank">hackthenorth.ph</a></p> \n\n	  </ion-card-content>\n\n	</ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Notifications = (function () {
    function Notifications(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "map";
    }
    return Notifications;
}());
Notifications = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\notifications\notifications.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n       \n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n         <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    \n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{property.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{property.title}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:90%;" id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */]])
], Notifications);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PropertyListPage = (function () {
    function PropertyListPage(navCtrl, loadingCtrl, global, service, config, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.service = service;
        this.config = config;
        this.http = http;
        this.searchKey = "";
        this.viewMode = "list";
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
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.map("map").setView([17.610569, 121.730092], 12);
            __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 12 });
            _this.map.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map);
                __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
            });
            function onLocationError(e) {
            }
            _this.map.on('locationerror', onLocationError);
        });
    };
    PropertyListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.layerGroup([]);
        this.properties.forEach(function (property) {
            if (property.lati, property.longti) {
                var LeafIcon = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.Icon.extend({
                    options: {
                        iconSize: [24, 33]
                    }
                });
                var flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/marker-icon.png' });
                var marker = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([property.lati, property.longti], { icon: flag }).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return PropertyListPage;
}());
PropertyListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\property-list\property-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n    <ion-segment [(ngModel)]="viewMode">\n\n       \n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n         <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    <div style="height: 2px"></div>\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{ global.site }}/uploads/{{property.pansitanid}}.jpg"  onerror="this.src=\'assets/img/broken.png\';" />\n\n                </ion-thumbnail>\n\n                <h2>{{property.name}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:90%;" id="map"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\property-list\property-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
], PropertyListPage);

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_multi_image_upload_multi_image_upload__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_messages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UploadImagePage = (function () {
    function UploadImagePage(navCtrl, global, http, storage, loadingCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.global = global;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.uploadFinished = false;
        this.descript = '';
        this.id = 0;
        this.address = '';
        this.name = '';
        this.global.uploadid = 0;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
    }
    UploadImagePage.prototype.submit = function () {
        var _this = this;
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("descript", this.descript);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post(this.global.site + 'api.php?action=addpost&email=' + this.email + '&pansitanid=' + this.id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.loading.dismissAll();
            _this.multiImageUpload.serverUrl = _this.global.site + "upload.php?pansitanid=" + res.pansitanid + '&type=2';
            _this.multiImageUpload.uploadImages().then(function (images) {
                _this.uploadFinished = true;
                _this.showToast("Posting successful.");
                console.dir(images);
            }).catch(function () {
            });
        }, function (error) {
            console.log(error);
            _this.presentAlert("Connection Error!");
            _this.loading.dismissAll();
        });
    };
    UploadImagePage.prototype.cancel = function () {
        var _this = this;
        this.confirm('Are you sure to cancel?').then(function (value) {
            if (value) {
                _this.multiImageUpload.abort();
            }
        });
    };
    UploadImagePage.prototype.showToast = function (text) {
        this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'bottom'
        }).present();
    };
    UploadImagePage.prototype.confirm = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertCtrl.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: function () {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        });
    };
    UploadImagePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UploadImagePage.prototype.openPropertyDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__messages_messages__["a" /* Messages */]);
    };
    UploadImagePage.prototype.ionViewWillEnter = function () {
        this.id = this.global.uploadid;
        this.address = this.global.uploadaddress;
        this.name = this.global.uploadname;
    };
    return UploadImagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */])
], UploadImagePage.prototype, "multiImageUpload", void 0);
UploadImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-upload-image',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\upload-image\upload-image.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Nasingngo ba Pansi?</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <multi-image-upload></multi-image-upload>\n\n    <hr>\n\n    <button ion-button block outline (click)=\'openPropertyDetail()\' *ngIf="global.uploadid===0&&!uploadFinished">Add Location</button>\n\n\n\n     \n\n              <ion-list  *ngIf="global.uploadid!=0 && !uploadFinished ">\n\n                <ion-item (click)=\'openPropertyDetail()\'>\n\n                  <ion-avatar item-left>\n\n                    <img src="{{ global.site }}/uploads/{{id}}.jpg"  onerror="this.src=\'assets/img/broken.png\';" />\n\n                  </ion-avatar>\n\n                  <h2 style="font-weight: bold">{{name}}</h2>\n\n                  <p>{{address}}</p>\n\n                  \n\n                </ion-item>\n\n              </ion-list>\n\n\n\n\n\n              <ion-list  *ngIf="uploadFinished ">\n\n                <ion-item>\n\n                  <ion-avatar item-left>\n\n                    <img src="{{ global.site }}/uploads/{{id}}.jpg"  onerror="this.src=\'assets/img/broken.png\';" />\n\n                  </ion-avatar>\n\n                  <h2 style="font-weight: bold">{{name}}</h2>\n\n                  <p>{{address}}</p>\n\n                  \n\n                </ion-item>\n\n              </ion-list>\n\n\n\n    <hr>\n\n    <ion-textarea [(ngModel)]="descript" placeholder="Share your Experience.." style="height:100px"  *ngIf="!uploadFinished" ></ion-textarea>\n\n    <ion-textarea [(ngModel)]="descript" placeholder="Share your Experience.." style="height:100px"  *ngIf="uploadFinished" readonly></ion-textarea>\n\n\n\n    <hr>\n\n    <div *ngIf="!multiImageUpload.isUploading && !uploadFinished">\n\n    <button ion-button block (click)="submit()" >\n\n        <ion-icon name="checkmark"></ion-icon>\n\n        Upload\n\n    </button>\n\n    <p style="text-align: center" *ngIf="multiImageUpload.isUploading && !uploadFinished">Uploading may take a while due to the number and size of the image(s)</p>\n\n    </div>\n\n    <button ion-button block color="danger" *ngIf="multiImageUpload.isUploading && !uploadFinished">\n\n        Uploading...\n\n    </button>\n\n    <p style="text-align: center;" *ngIf="uploadFinished">Tap <ion-icon name="aperture"> to Post again</ion-icon></p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\upload-image\upload-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
], UploadImagePage);

//# sourceMappingURL=upload-image.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiImageUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultiImageUpload = (function () {
    function MultiImageUpload(sanitization, actionSheetCtrl, camera, file, alertCtrl, toastCtrl) {
        this.sanitization = sanitization;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serverUrl = "http://eltonbagne.info/api/pansitan/upload.php/";
        this.isUploading = false;
        this.uploadingProgress = {};
        this.uploadingHandler = {};
        this.images = [];
        this.util = (function (_this) {
            return {
                removeFromArray: function (array, item) {
                    var index = array.indexOf(item);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                },
                confirm: function (text, title, yes, no) {
                    if (title === void 0) { title = ''; }
                    if (yes === void 0) { yes = "Yes"; }
                    if (no === void 0) { no = "No"; }
                    return new Promise(function (resolve) {
                        _this.alertCtrl.create({
                            title: title,
                            message: text,
                            buttons: [
                                {
                                    text: no,
                                    role: 'cancel',
                                    handler: function () {
                                        resolve(false);
                                    }
                                },
                                {
                                    text: yes,
                                    handler: function () {
                                        resolve(true);
                                    }
                                }
                            ]
                        }).present();
                    });
                },
                trustImages: function () {
                    _this.imagesValue = _this.images.map(function (val) {
                        return {
                            url: val,
                            sanitized: _this.sanitization.bypassSecurityTrustStyle("url(" + val + ")")
                        };
                    });
                },
                showToast: function (text) {
                    _this.toastCtrl.create({
                        message: text,
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                }
            };
        })(this);
    }
    MultiImageUpload.prototype.uploadImages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUploading = true;
            Promise.all(_this.images.map(function (image) {
                return _this.uploadImage(image);
            }))
                .then(resolve)
                .catch(function (reason) {
                _this.isUploading = false;
                _this.uploadingProgress = {};
                _this.uploadingHandler = {};
                reject(reason);
            });
        });
    };
    MultiImageUpload.prototype.abort = function () {
        if (!this.isUploading)
            return;
        this.isUploading = false;
        for (var key in this.uploadingHandler) {
            this.uploadingHandler[key].abort();
        }
    };
    // ======================================================================
    MultiImageUpload.prototype.removeImage = function (image) {
        var _this = this;
        if (this.isUploading)
            return;
        this.util.confirm("Are you sure to remove it?").then(function (value) {
            if (value) {
                _this.util.removeFromArray(_this.imagesValue, image);
                _this.util.removeFromArray(_this.images, image.url);
            }
        });
    };
    MultiImageUpload.prototype.showAddImage = function () {
        var _this = this;
        if (!window['cordova']) {
            var input_1 = document.createElement('input');
            input_1.type = 'file';
            input_1.accept = "image/x-png,image/gif,image/jpeg";
            input_1.click();
            input_1.onchange = function () {
                var blob = window.URL.createObjectURL(input_1.files[0]);
                _this.images.push(blob);
                _this.util.trustImages();
            };
        }
        else {
            new Promise(function (resolve, reject) {
                var actionSheet = _this.actionSheetCtrl.create({
                    title: 'Add a photo',
                    buttons: [
                        {
                            text: 'From photo library',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'From camera',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                reject();
                            }
                        }
                    ]
                });
                actionSheet.present();
            }).then(function (sourceType) {
                if (!window['cordova'])
                    return;
                var options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };
                _this.camera.getPicture(options).then(function (imagePath) {
                    _this.images.push(imagePath);
                    _this.util.trustImages();
                });
            }).catch(function () {
            });
        }
    };
    MultiImageUpload.prototype.uploadImage = function (targetPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.uploadingProgress[targetPath] = 0;
            if (window['cordova']) {
                var options = {
                    fileKey: "files",
                    fileName: targetPath,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                };
                var fileTransfer = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* TransferObject */]();
                _this.uploadingHandler[targetPath] = fileTransfer;
                fileTransfer.upload(targetPath, _this.serverUrl, options).then(function (data) {
                    resolve(JSON.parse(data.response));
                }).catch(function () {
                    askRetry();
                });
                fileTransfer.onProgress(function (event2) {
                    _this.uploadingProgress[targetPath] = event2.loaded * 100 / event2.total;
                });
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', targetPath, true);
                xhr_1.responseType = 'blob';
                xhr_1.onload = function (e) {
                    if (xhr_1['status'] != 200) {
                        _this.util.showToast("Your browser doesn't support blob API");
                        console.error(e, xhr_1);
                        askRetry();
                    }
                    else {
                        var blob = xhr_1['response'];
                        var formData = new FormData(), xhr2_1 = new XMLHttpRequest();
                        formData.append('files[]', blob);
                        _this.uploadingHandler[targetPath] = xhr2_1;
                        xhr2_1.onreadystatechange = function () {
                            if (xhr2_1.readyState === 4) {
                                if (xhr2_1.status === 200)
                                    resolve(JSON.parse(xhr2_1.response));
                                else
                                    askRetry();
                            }
                        };
                        xhr2_1.upload.onprogress = function (event) {
                            _this.uploadingProgress[targetPath] = event.loaded * 100 / event.total;
                        };
                        xhr2_1.open('POST', _this.serverUrl, true);
                        xhr2_1.send(formData);
                    }
                };
                xhr_1.send();
            }
            var askRetry = function () {
                // might have been aborted
                if (!_this.isUploading)
                    return reject(null);
                _this.util.confirm('Do you wish to retry?', 'Upload failed').then(function (res) {
                    if (!res) {
                        _this.isUploading = false;
                        for (var key in _this.uploadingHandler) {
                            _this.uploadingHandler[key].abort();
                        }
                        return reject(null);
                    }
                    else {
                        if (!_this.isUploading)
                            return reject(null);
                        _this.uploadImage(targetPath).then(resolve, reject);
                    }
                });
            };
        });
    };
    return MultiImageUpload;
}());
MultiImageUpload = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'multi-image-upload',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\components\multi-image-upload\multi-image-upload.html"*/'<div>\n\n  <div class="images-wrapper">\n\n    <div class="image-wrapper" *ngFor="let image of imagesValue">\n\n      <ion-icon class="remove-image" name="close" *ngIf="!isUploading" (click)="removeImage(image)"></ion-icon>\n\n      <div class="image" [style.background-image]="image.sanitized">\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n\n             [class.uploading]="isUploading" alt=""/>\n\n        <ion-spinner *ngIf="uploadingProgress[image.url]<99"></ion-spinner>\n\n\n\n        <ion-icon name="checkmark" *ngIf="uploadingProgress[image.url]>98"></ion-icon>\n\n        <div *ngIf="isUploading" class="progress-bar">\n\n          <div class="progress" [style.width]="(uploadingProgress[image.url]||0)+\'%\'"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="image-wrapper add-image-btn" *ngIf="!isUploading" (click)="showAddImage()">\n\n      <div class="image">\n\n        <ion-icon name="add"></ion-icon>\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt=""/>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\components\multi-image-upload\multi-image-upload.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
], MultiImageUpload);

//# sourceMappingURL=multi-image-upload.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalvarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalvarsProvider = (function () {
    function GlobalvarsProvider(storage) {
        this.storage = storage;
        this.site = 'http://eltonbagne.info/api/pansitan/';
        this.uploadname = '';
        this.uploadaddress = '';
        this.uploadid = 0;
        this.uploadid = 0;
    }
    GlobalvarsProvider.prototype.loginsave = function (email, name, image) {
        this.storage.set('email', email);
        this.storage.set('name', name);
        this.storage.set('image', image);
    };
    GlobalvarsProvider.prototype.pass = function (name, address, pansitanid) {
        this.uploadname = name;
        this.uploadaddress = address;
        this.uploadid = pansitanid;
    };
    return GlobalvarsProvider;
}());
GlobalvarsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], GlobalvarsProvider);

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_list_property_list__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_image_upload_image__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* Search */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__upload_image_upload_image__["a" /* UploadImagePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* Notifications */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* Profile */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_5__property_list_property_list__["a" /* PropertyListPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" swipeBackEnabled="true" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabIcon="restaurant"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="aperture"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(286);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_post_owner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_post_modal_post__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_message_detail_message_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_message_new_message__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tagged_profile_tagged_profile__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_saved_profile_saved_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_options_options__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_property_service_mock_property_service_mock__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_upload_image_upload_image__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_property_list_property_list__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_property_detail_property_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pansitan_location_pansitan_location__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic3_star_rating__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_plus__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_multi_image_upload_multi_image_upload__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__["a" /* PostPopover */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_post_owner__["a" /* PostOwner */],
            __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_post_modal_post__["a" /* ModalPost */],
            __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* Messages */],
            __WEBPACK_IMPORTED_MODULE_10__pages_message_detail_message_detail__["a" /* MessageDetail */],
            __WEBPACK_IMPORTED_MODULE_11__pages_new_message_new_message__["a" /* NewMessage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tagged_profile_tagged_profile__["a" /* TaggedProfile */],
            __WEBPACK_IMPORTED_MODULE_16__pages_saved_profile_saved_profile__["a" /* SavedProfile */],
            __WEBPACK_IMPORTED_MODULE_17__pages_options_options__["a" /* Options */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_upload_image_upload_image__["a" /* UploadImagePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_pansitan_location_pansitan_location__["a" /* PansitanLocationPage */],
            __WEBPACK_IMPORTED_MODULE_31__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_26_ionic3_star_rating__["a" /* StarRatingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailModule', name: 'MessageDetail', segment: 'message-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfileModule', name: 'EditProfile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-message/new-message.module#NewMessageModule', name: 'NewMessage', segment: 'new-message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/saved-profile/saved-profile.module#SavedProfileModule', name: 'SavedProfile', segment: 'saved-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/options/options.module#OptionsModule', name: 'Options', segment: 'options', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfileModule', name: 'Profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tagged-profile/tagged-profile.module#TaggedProfileModule', name: 'TaggedProfile', segment: 'tagged-profile', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__["a" /* PostPopover */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_post_owner__["a" /* PostOwner */],
            __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_post_modal_post__["a" /* ModalPost */],
            __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* Messages */],
            __WEBPACK_IMPORTED_MODULE_10__pages_message_detail_message_detail__["a" /* MessageDetail */],
            __WEBPACK_IMPORTED_MODULE_11__pages_new_message_new_message__["a" /* NewMessage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tagged_profile_tagged_profile__["a" /* TaggedProfile */],
            __WEBPACK_IMPORTED_MODULE_16__pages_saved_profile_saved_profile__["a" /* SavedProfile */],
            __WEBPACK_IMPORTED_MODULE_17__pages_options_options__["a" /* Options */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_upload_image_upload_image__["a" /* UploadImagePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_pansitan_location_pansitan_location__["a" /* PansitanLocationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_property_service_mock_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */],
            __WEBPACK_IMPORTED_MODULE_31__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform, statusBar) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalvars_globalvars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyService = (function () {
    function PropertyService(http, global) {
        var _this = this;
        this.http = http;
        this.global = global;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.http.get(this.global.site + 'api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.properties = res; });
    }
    PropertyService.prototype.findAll = function () {
        return Promise.resolve(this.properties);
    };
    PropertyService.prototype.findById = function (id) {
        return Promise.resolve(this.properties[id - 1]);
    };
    PropertyService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.properties.filter(function (property) {
            return (property.name + ' ' + property.address + property.specialty).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    PropertyService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    PropertyService.prototype.getproperties = function () {
        return Promise.resolve(this.properties);
    };
    return PropertyService;
}());
PropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__globalvars_globalvars__["a" /* GlobalvarsProvider */]])
], PropertyService);

//# sourceMappingURL=property-service-mock.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pansitan_location_pansitan_location__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PropertyDetailPage = (function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pansitan_location_pansitan_location__["a" /* PansitanLocationPage */], pass);
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
    return PropertyDetailPage;
}());
PropertyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\property-detail\property-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{property.name}}</ion-title>\n\n    <ion-buttons end right>\n\n      <button color="black" ion-button icon-only (click)="seelocation(this.property)">\n\n        <ion-icon name="locate"></ion-icon> Location\n\n      </button>\n\n    </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="property.pansitanid">\n\n        <ion-slides>\n\n\n\n        <ion-slide  *ngFor="let p of image; let i = index">\n\n            <img src="{{ global.site }}uploads/pansitan/{{ p.imageid }}.jpg"  onerror="this.src=\'assets/img/broken.png\';"/>\n\n            <p>{{ i + 1 }}/{{ length }}</p>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n        <p style="position: absolute; right: 3px;margin-top: 6px">{{ratelength}} people&nbsp;&nbsp;&nbsp;</p>\n\n         <ionic3-star-rating \n\n            activeIcon = "ios-star"\n\n            defaultIcon = "ios-star-outline"\n\n            activeColor = "#488aff" \n\n            defaultColor = "#488aff"\n\n            readonly="true"\n\n            [rating]="finalrate">\n\n        </ionic3-star-rating> \n\n        <!--<img src="{{property.picture}}"/>-->\n\n        <ion-card-content>\n\n            <h2 class="card-title"><b>{{property.name}}</b></h2>\n\n            <p>{{property.address}}</p>\n\n        </ion-card-content>\n\n        <ion-list>\n\n            <ion-item *ngIf="property.contact!=\'\'">\n\n                <ion-icon item-left name="call"></ion-icon>\n\n                <h3>Contact</h3>\n\n                <ion-note item-right>{{property.contact}}</ion-note>\n\n            </ion-item>\n\n            <ion-item  *ngIf="property.prices!=\'\'">\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Prices</h3>\n\n                <ion-note item-right>{{property.prices}}</ion-note>\n\n            </ion-item>\n\n            <ion-item *ngIf="property.specialty!=\'\'">\n\n                <ion-icon item-left name="list-box"></ion-icon>\n\n                <h3>Specialty</h3>\n\n                <ion-note item-right>{{property.specialty}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Your rate</h3>\n\n                <ion-note item-right>\n\n                    <ionic3-star-rating \n\n                        activeIcon = "ios-star"\n\n                        defaultIcon = "ios-star-outline"\n\n                        activeColor = "#488aff" \n\n                        defaultColor = "#488aff"\n\n                        readonly="{{ ctrrate }}"\n\n                        [rating]="yourrate">\n\n                    </ionic3-star-rating> \n\n                </ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button ion-button block  style="width: 100%;" *ngIf="checkfav==0" (click)="favorites()">Add to Favorites</button>\n\n                <button ion-button block outline  style="width: 100%;" *ngIf="checkfav==1"  (click)="favorites()">Remove from Favorites</button>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        \n\n\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\property-detail\property-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], PropertyDetailPage);

//# sourceMappingURL=property-detail.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostPopover = (function () {
    function PostPopover(viewCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PostPopover.prototype.close = function () {
        this.presentToast();
        this.viewCtrl.dismiss();
    };
    PostPopover.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Not Yet Implemented',
            duration: 2000
        });
        toast.present();
    };
    return PostPopover;
}());
PostPopover = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"close()\">Report</button>\n      <button ion-item (click)=\"close()\">Copy Share URL</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], PostPopover);

//# sourceMappingURL=post-popover.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostOwner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostOwner = (function () {
    function PostOwner(global, http, alertCtrl, viewCtrl, toastCtrl) {
        this.global = global;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PostOwner.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PostOwner.prototype.alertremove = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        var text = "Remove this post?";
        this.alertCtrl.create({
            message: text,
            buttons: [
                {
                    text: "No",
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.http.get(_this.global.site + 'api.php?action=deletepost&id=' + _this.global.postdelete)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentToast('Post has been Removed.');
                        }, function (error) {
                            _this.presentToast('Failed to Delete post');
                        });
                    }
                }
            ]
        }).present();
    };
    PostOwner.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000
        });
        toast.present();
    };
    return PostOwner;
}());
PostOwner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"alertremove()\">Remove</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], PostOwner);

//# sourceMappingURL=post-owner.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_detail_message_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_message_new_message__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock_property_service_mock__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Messages = (function () {
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
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__new_message_new_message__["a" /* NewMessage */]);
    };
    Messages.prototype.goMessageDetail = function (sender, profile_img, last_message) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__message_detail_message_detail__["a" /* MessageDetail */], { sender: sender, profile_img: profile_img, last_message: last_message });
    };
    Messages.prototype.close = function (name, address, pansitanid) {
        this.global.pass(name, address, pansitanid);
        this.navCtrl.pop();
    };
    return Messages;
}());
Messages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\messages\messages.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let property of properties" (click)="close(property.name,property.address,property.pansitanid)">\n\n      <ion-avatar item-left>\n\n        <img src="{{ global.site }}/uploads/{{property.pansitanid}}.jpg"  onerror="this.src=\'assets/img/broken.png\';" />\n\n      </ion-avatar>\n\n      <h2 style="font-weight: bold">{{property.name}}</h2>\n\n      <p>{{property.address}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\messages\messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock_property_service_mock__["a" /* PropertyService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], Messages);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_post_owner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_post_popover__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalPost = (function () {
    function ModalPost(storage, popoverCtrl, toastCtrl, http, viewCtrl, global, navParams, modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
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
        this.modal_data = this.navParams.data;
        console.log(this.navParams.data);
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
    ModalPost.prototype.presentPostPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__home_post_popover__["a" /* PostPopover */]);
        popover.present();
    };
    ModalPost.prototype.presentPostOwner = function (x) {
        this.global.postdelete = x;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__home_post_owner__["a" /* PostOwner */]);
        popover.present();
    };
    return ModalPost;
}());
ModalPost = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-modalpost',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\modal-post\modal-post.html"*/'<ion-content class="main-modal">\n\n  <div class="modal">\n\n\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <img [src]="modal_data.account.image" class="avatar-modal" alt=""> \n\n      </ion-col>\n\n\n\n      <ion-col col-8>\n\n        <h5 style="font-weight: bold">{{ modal_data.account.name }}</h5>\n\n        <p *ngIf="modal_data.pansitan.name!=null" class="pansitan">{{ modal_data.pansitan.name }}</p>\n\n      </ion-col>\n\n\n\n      <!-- If you wish, you can add close icon too. Just delete comment code -->\n\n      <ion-col col-2><span style="float: right" (click)="dismiss()"><ion-icon name="ios-close-circle-outline"></ion-icon></span></ion-col>\n\n\n\n    </ion-row>\n\n\n\n      <ion-card-content style="padding:0 5px 0 5px">\n\n        <p  style="white-space: pre-line;margin: 0"><b>{{modal_data.account.name}}</b> {{ modal_data.descript }}</p>\n\n      \n\n        <ion-note style="font-size: 12px">\n\n          {{ process(modal_data.timestamp)  }}\n\n        </ion-note>\n\n        <div style="height: 5px"></div>\n\n      </ion-card-content>\n\n    <!-- Post image -->\n\n    <div>\n\n      \n\n        <ion-slides>\n\n\n\n        <ion-slide   *ngFor="let p of modal_data.images; let i = index"  no-bounce>\n\n            <img src="{{ global.site }}uploads/posts/{{ p.imageid }}.jpg" (tap)="tapPhotoLike(post)"/>\n\n            <p class="number">{{ i + 1 }}/{{ modal_data.images.length }}</p>\n\n        </ion-slide>\n\n\n\n        </ion-slides>\n\n    </div>\n\n\n\n    <ion-row text-center>\n\n      <ion-col col-3 no-margin no-padding>\n\n        <button clear ion-button icon-only (click)="likeButton()" class="like-btn" *ngIf="postheart(modal_data.like)!=\'heart\' && modal_data.heart!=\'heart\' ">\n\n          <ion-icon no-padding name="heart-outline" color="black" class="icon-space"></ion-icon>\n\n        </button>\n\n\n\n        <button clear ion-button icon-only (click)="likeButton()" class="like-btn" *ngIf="postheart(modal_data.like)===\'heart\'||modal_data.heart===\'heart\'">\n\n          <ion-icon no-padding name="heart" color="danger" class="icon-space"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 no-margin no-padding>\n\n        <!--<button no-margin no-padding clear color="black" ion-button icon-only (click)="goUserProfile(1)">\n\n          <ion-icon name="person"></ion-icon>\n\n        </button>-->\n\n      </ion-col>\n\n      <ion-col col-3 no-margin no-padding style="margin:0 !important">\n\n       \n\n          <button no-margin no-padding clear color="black" ion-button icon-only (click)="presentPostOwner(modal_data.postid)" *ngIf="modal_data.email == email">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 no-margin no-padding>\n\n         \n\n        <p class="like-content" style="margin-top: 10px" *ngIf = "modal_data.like == null;" ><ion-icon name="heart"></ion-icon> 0 likes</p>\n\n        <p class="like-content" style="margin-top: 10px"*ngIf = "modal_data.like != null && modal_data.like.length==1"><ion-icon name="heart"></ion-icon> 1 like</p>\n\n        <p class="like-content" style="margin-top: 10px" *ngIf = "modal_data.like != null && modal_data.like.length>1"><ion-icon name="heart"></ion-icon> {{modal_data.like.length}} likes</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\pansitan2\src\pages\modal-post\modal-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], ModalPost);

//# sourceMappingURL=modal-post.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map