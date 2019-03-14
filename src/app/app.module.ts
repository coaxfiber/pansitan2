import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { PostPopover } from '../pages/home/post-popover';
import { PostOwner } from '../pages/home/post-owner';
import { Search } from '../pages/search/search';
import { ModalPost } from '../pages/modal-post/modal-post';
import { Messages } from '../pages/messages/messages';
import { MessageDetail } from '../pages/message-detail/message-detail';
import { NewMessage } from '../pages/new-message/new-message';
import { Notifications } from '../pages/notifications/notifications';
import { Profile } from '../pages/profile/profile';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { TaggedProfile } from '../pages/tagged-profile/tagged-profile';
import { SavedProfile } from '../pages/saved-profile/saved-profile';
import { Options } from '../pages/options/options';
import { Comments } from '../pages/comments/comments';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { PropertyService } from '../providers/property-service-mock/property-service-mock';

import { UploadImagePage } from '../pages/upload-image/upload-image';
import { PropertyListPage } from '../pages/property-list/property-list';
import { PropertyDetailPage } from '../pages/property-detail/property-detail';

import { StarRatingModule } from 'ionic3-star-rating';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';

@NgModule({
  declarations: [
    MyApp,
    Home,
    PostPopover,
    PostOwner,
    Search,
    ModalPost,
    Messages,
    MessageDetail,
    NewMessage,
    Notifications,
    Profile,
    EditProfile,
    TaggedProfile,
    SavedProfile,
    Options,
    Comments,
    TabsPage,
    PropertyListPage,
    PropertyDetailPage,
    UploadImagePage
  ],
  imports: [
  StarRatingModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    PostPopover,
    PostOwner,
    Search,
    ModalPost,
    Messages,
    MessageDetail,
    NewMessage,
    Notifications,
    Profile,
    EditProfile,
    TaggedProfile,
    SavedProfile,
    Options,
    Comments,
    TabsPage,
    PropertyListPage,
    PropertyDetailPage,
    UploadImagePage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PropertyService,
    GlobalvarsProvider
  ]
})
export class AppModule {}
