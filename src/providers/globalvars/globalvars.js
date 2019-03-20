var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalvarsProvider = /** @class */ (function () {
    function GlobalvarsProvider(storage) {
        this.storage = storage;
        this.site = 'http://eltonbagne.info/api/pansitan/';
    }
    GlobalvarsProvider.prototype.loginsave = function (email, name, image) {
        this.storage.set('email', email);
        this.storage.set('name', name);
        this.storage.set('image', image);
    };
    GlobalvarsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], GlobalvarsProvider);
    return GlobalvarsProvider;
}());
export { GlobalvarsProvider };
//# sourceMappingURL=globalvars.js.map