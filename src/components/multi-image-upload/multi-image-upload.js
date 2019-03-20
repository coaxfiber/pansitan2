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
import { DomSanitizer } from "@angular/platform-browser";
import { ActionSheetController, AlertController, Platform, ToastController } from "ionic-angular";
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { TransferObject } from "@ionic-native/transfer";
var MultiImageUpload = /** @class */ (function () {
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
        var _this_1 = this;
        return new Promise(function (resolve, reject) {
            _this_1.isUploading = true;
            Promise.all(_this_1.images.map(function (image) {
                return _this_1.uploadImage(image);
            }))
                .then(resolve)
                .catch(function (reason) {
                _this_1.isUploading = false;
                _this_1.uploadingProgress = {};
                _this_1.uploadingHandler = {};
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
        var _this_1 = this;
        if (this.isUploading)
            return;
        this.util.confirm("Are you sure to remove it?").then(function (value) {
            if (value) {
                _this_1.util.removeFromArray(_this_1.imagesValue, image);
                _this_1.util.removeFromArray(_this_1.images, image.url);
            }
        });
    };
    MultiImageUpload.prototype.showAddImage = function () {
        var _this_1 = this;
        if (!window['cordova']) {
            var input_1 = document.createElement('input');
            input_1.type = 'file';
            input_1.accept = "image/x-png,image/gif,image/jpeg";
            input_1.click();
            input_1.onchange = function () {
                var blob = window.URL.createObjectURL(input_1.files[0]);
                _this_1.images.push(blob);
                _this_1.util.trustImages();
            };
        }
        else {
            new Promise(function (resolve, reject) {
                var actionSheet = _this_1.actionSheetCtrl.create({
                    title: 'Add a photo',
                    buttons: [
                        {
                            text: 'From photo library',
                            handler: function () {
                                resolve(_this_1.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'From camera',
                            handler: function () {
                                resolve(_this_1.camera.PictureSourceType.CAMERA);
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
                _this_1.camera.getPicture(options).then(function (imagePath) {
                    _this_1.images.push(imagePath);
                    _this_1.util.trustImages();
                });
            }).catch(function () {
            });
        }
    };
    MultiImageUpload.prototype.uploadImage = function (targetPath) {
        var _this_1 = this;
        return new Promise(function (resolve, reject) {
            _this_1.uploadingProgress[targetPath] = 0;
            if (window['cordova']) {
                var options = {
                    fileKey: "files",
                    fileName: targetPath,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                };
                var fileTransfer = new TransferObject();
                _this_1.uploadingHandler[targetPath] = fileTransfer;
                fileTransfer.upload(targetPath, _this_1.serverUrl, options).then(function (data) {
                    resolve(JSON.parse(data.response));
                    alert(JSON.stringify(JSON.parse(data.response)));
                }).catch(function () {
                    askRetry();
                });
                fileTransfer.onProgress(function (event2) {
                    _this_1.uploadingProgress[targetPath] = event2.loaded * 100 / event2.total;
                });
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', targetPath, true);
                xhr_1.responseType = 'blob';
                xhr_1.onload = function (e) {
                    if (xhr_1['status'] != 200) {
                        _this_1.util.showToast("Your browser doesn't support blob API");
                        console.error(e, xhr_1);
                        askRetry();
                    }
                    else {
                        var blob = xhr_1['response'];
                        var formData = new FormData(), xhr2_1 = new XMLHttpRequest();
                        formData.append('files[]', blob);
                        _this_1.uploadingHandler[targetPath] = xhr2_1;
                        xhr2_1.onreadystatechange = function () {
                            if (xhr2_1.readyState === 4) {
                                if (xhr2_1.status === 200)
                                    resolve(JSON.parse(xhr2_1.response));
                                else
                                    askRetry();
                            }
                        };
                        xhr2_1.upload.onprogress = function (event) {
                            _this_1.uploadingProgress[targetPath] = event.loaded * 100 / event.total;
                        };
                        xhr2_1.open('POST', _this_1.serverUrl, true);
                        xhr2_1.send(formData);
                    }
                };
                xhr_1.send();
            }
            var askRetry = function () {
                // might have been aborted
                if (!_this_1.isUploading)
                    return reject(null);
                _this_1.util.confirm('Do you wish to retry?', 'Upload failed').then(function (res) {
                    if (!res) {
                        _this_1.isUploading = false;
                        for (var key in _this_1.uploadingHandler) {
                            _this_1.uploadingHandler[key].abort();
                        }
                        return reject(null);
                    }
                    else {
                        if (!_this_1.isUploading)
                            return reject(null);
                        _this_1.uploadImage(targetPath).then(resolve, reject);
                    }
                });
            };
        });
    };
    MultiImageUpload = __decorate([
        Component({
            selector: 'multi-image-upload',
            templateUrl: 'multi-image-upload.html',
            providers: [Camera, File, FilePath, Platform]
        }),
        __metadata("design:paramtypes", [DomSanitizer, ActionSheetController, Camera, File, AlertController, ToastController])
    ], MultiImageUpload);
    return MultiImageUpload;
}());
export { MultiImageUpload };
//# sourceMappingURL=multi-image-upload.js.map