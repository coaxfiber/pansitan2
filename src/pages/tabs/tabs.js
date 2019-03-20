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
import { Home } from '../home/home';
import { Search } from '../search/search';
import { Notifications } from '../notifications/notifications';
import { Profile } from '../profile/profile';
import { PropertyListPage } from '../property-list/property-list';
import { UploadImagePage } from '../upload-image/upload-image';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = Home;
        this.tab2Root = Search;
        this.tab3Root = UploadImagePage;
        this.tab4Root = Notifications;
        this.tab5Root = Profile;
        this.tab6Root = PropertyListPage;
    }
    TabsPage = __decorate([
        Component({
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map