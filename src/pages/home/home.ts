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

  seemore(){
    this.loading = this.loadingCtrl.create({
      });

      this.loading.present();
    this.limit=this.limit+10;
    this.http.get(this.global.site + 'api.php?action=postings&limit='+this.limit)
          .map(response => response.json())
          .subscribe(res => {
            if (res[0].status != 'failed') {
             this.posts = this.posts.concat(res);
            }else
              this.presentAlert("No more Posts to show...");
              this.loading.dismissAll();

          },error => {
            console.log(error)
            this.presentAlert("Something went wrong!");
            this.loading.dismissAll();
           } 
           );
  }
  postheart(x,like){
    if (like!=null) {
    console.log(like)
    for (var index = 0; index < this.posts[x].like.length; index++) {
                 var element = this.posts[x].like[index];
                 if (element.email==this.email) {
                     this.posts[x].heart='heart';
                 }
            }
    }
     return this.posts[x].heart
  }

  likeButton(post,x) {
    console.log(post)
    if(this.posts[x].heart === 'heart-outline') {
      this.posts[x].heart = 'heart';
      this.posts[x].color = 'danger';
      // Do some API job in here for real!
    }
    else {
      this.posts[x].heart = 'heart-outline';
      this.posts[x].color = 'black';
    }
  }

  tapPhotoLike(post,x) { // If we click double times, it will trigger like the post
    this.tap++;
    if(this.tap % 2 === 0) {
      this.likeButton(post,x);
    }
    setTimeout(()=>{  this.tap = 0 }, 1000)
  }

  presentPostPopover() {
    let popover = this.popoverCtrl.create(PostPopover);
    popover.present();
  }

  goMessages() {
    this.app.getRootNav().push(Messages);
  }

  swipePage(event) {
    if(event.direction === 8) { // Swipe Left
      console.log("Swap Camera");
    } 

    if(event.direction === 2) { // Swipe Right
      //this.goMessages();
    }
    
  }
  reset(){
    this.content.scrollToTop();
    this.limit = 0;
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

    this.content.scrollToTop();
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
