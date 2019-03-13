import { Component, ViewChild } from '@angular/core';
import { App, NavController, Content, PopoverController } from 'ionic-angular';
import { PostPopover } from './post-popover';
import { Messages } from '../messages/messages';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoadingController, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  @ViewChild(Content) content: Content;

  public like_btn = {
    color: 'black',
    icon_name: 'heart-outline'
  };

  public tap: number = 0;

  // You can get this data from your API. This is a dumb data for being an example.
  public stories = [
    {
      id: 1,
      img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      user_name: 'candelibas'
    },
    {
      id: 2,
      img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
      user_name: 'maxlynch'
    },
    {
      id: 3,
      img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
      user_name: 'ashleyosama'
    },
    {
      id: 4,
      img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
      user_name: 'adam_bradley'
    },
    {
      id: 5,
      img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
      user_name: 'linus_torvalds'
    }
    
  ];


  loading: Loading;
  limit = 1;
  posts:any;
  email;

  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,private http:Http, public global:GlobalvarsProvider,public navCtrl: NavController, public popoverCtrl: PopoverController, public app: App) {
   //http://localhost/pansit/api.php?action=get_app_list
    this.loading = this.loadingCtrl.create({
      });

      this.loading.present();
      this.email = "elton@gmail.com";
         this.http.get(this.global.site + 'api.php?action=postings&limit='+this.limit)
          .map(response => response.json())
          .subscribe(res => {
            this.posts = res;
            this.loading.dismissAll();

          },error => {
            this.presentAlert("Something went wrong!");
            this.loading.dismissAll();
           } 
           );
  }

  likeButton() {
    if(this.like_btn.icon_name === 'heart-outline') {
      this.like_btn.icon_name = 'heart';
      this.like_btn.color = 'danger';
      // Do some API job in here for real!
    }
    else {
      this.like_btn.icon_name = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }

  tapPhotoLike(times) { // If we click double times, it will trigger like the post
    this.tap++;
    if(this.tap % 2 === 0) {
      this.likeButton();
    }
  }

  presentPostPopover() {
    let popover = this.popoverCtrl.create(PostPopover);
    popover.present();
  }

  goMessages() {
    this.app.getRootNav().push(Messages);
  }

  swipePage(event) {
    if(event.direction === 1) { // Swipe Left
      console.log("Swap Camera");
    } 

    if(event.direction === 2) { // Swipe Right
      this.goMessages();
    }
    
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }

          process(time){
            var date1 = new Date(time*1000);
            var date2 = new Date();

            var diff = Math.abs(date2.getTime() - date1.getTime());

            var diffmin = Math.ceil((diff / 1000)/60); 

            if (diffmin < 1440) {
              if (diffmin < 60 ) {
                return diffmin + " minutes ago"
              }else{
                return Math.floor( diffmin/60 ) + " hours and " + (diffmin%60) + " minutes"
              }
            }else
            {
              return date1.toDateString()
            }
          }
}
