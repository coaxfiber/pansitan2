import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Search } from '../search/search';
import { Notifications } from '../notifications/notifications';
import { Profile } from '../profile/profile';
import { PropertyListPage } from '../property-list/property-list';
import { UploadImagePage } from '../upload-image/upload-image';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = Search;
  tab3Root = UploadImagePage;
  tab4Root = Notifications;
  tab5Root = Profile;
  tab6Root = PropertyListPage;

  constructor() {

  }

}
