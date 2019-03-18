import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { ModalPost } from '../modal-post/modal-post';
import { EditProfile } from '../edit-profile/edit-profile';
import { Options } from '../options/options';
import { TaggedProfile } from '../tagged-profile/tagged-profile';
import { SavedProfile } from '../saved-profile/saved-profile';
import { Storage } from '@ionic/storage';
import {Http } from '@angular/http';
import {LoadingController, Loading } from 'ionic-angular';
import {PropertyDetailPage} from '../property-detail/property-detail';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  limit=0;
  posts;
  loading: Loading;
  public profile_segment:string;

  // You can get this data from your API. This is a dumb data for being an example.
  public images = [
    {
      id: 1,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    },
    {
      id: 2,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    },
    {
      id: 3,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    },
    {
      id: 4,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    },
    {
      id: 5,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    },
    {
      id: 6,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
    }
  ];

  acct = {"accountid":"0","email":" ","name":" ","descript":"","contact":"","gender":"","image":"0","status":"0"};
  email;name;image;properties=[{'name':"","address":''}]
  constructor(
    private alertCtrl: AlertController,public loadingCtrl: LoadingController, 
    private http:Http, public global:GlobalvarsProvider,
    private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {  
      
            storage.get('name').then((val) => {
              this.name = val;
              storage.get('email').then((val) => {
                this.email = val;
                storage.get('image').then((val) => {
                  this.image = val;
                        //start this
                        this.loading = this.loadingCtrl.create({
                          });
                          this.loading.present();

                          this.http.get(this.global.site + 'api.php?action=getaccount&email='+this.email+'&name='+this.name+'&image='+this.image)
                            .map(response => response.json())
                            .subscribe(res => {
                              this.properties = res.pansitanfav;
                              console.log(this.properties)
                              this.acct = res;  
                                      console.log(this.global.site + 'api.php?action=userpostings&email='+this.email+'&limit='+this.limit)
                                      this.http.get(this.global.site + 'api.php?action=userpostings&email='+this.email+'&limit='+this.limit)
                                        .map(response => response.json())
                                        .subscribe(res => {
                                          this.posts = res;
                                          console.log(res)
                                        });
                                          this.loading.dismissAll();
                            },error => {
                              console.log(error);
                              this.presentAlert("Something went wrong!");
                              this.loading.dismissAll();
                             } );
                        //end this
                });
              });
            });
            
            
  }
    openPropertyDetail(property: any) {
        this.navCtrl.push(PropertyDetailPage, property);
    }

  // Define segment for everytime when profile page is active
  ionViewWillEnter() {
    this.profile_segment = 'grid';
  }

  goEditProfile() {
    // Open it as a modal page
    let modal = this.modalCtrl.create(EditProfile);
    modal.present();
  }

  goOptions() {
    this.navCtrl.push(Options, {});
  }

  goTaggedProfile() {
    this.navCtrl.push(TaggedProfile);
  }

  goSavedProfile() {
    this.navCtrl.push(SavedProfile);
  }

  // Triggers when user pressed a post
  pressPhoto(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModal(user_id, username, profile_img, post_img);
  }

  // Set post modal
  presentModal(user_id: number, username: string, profile_img: string, post_img: string) {
    let modal = this.modalCtrl.create(ModalPost, 
    { // Send data to modal
      user_id: user_id, 
      username: username,
      profile_img: profile_img,
      post_img: post_img
    }, // This data comes from API!
    { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

   
      presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }

}
