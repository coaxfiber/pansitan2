import { Component, ViewChild } from '@angular/core';
import { App, NavController, Content, PopoverController, ToastController } from 'ionic-angular';
import { PostPopover } from './post-popover';
import { PostOwner } from './post-owner';
import { Messages } from '../messages/messages';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoadingController, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  limit = 0;
  posts:any;
  addlike:any;
  email;

  constructor( 
    private storage: Storage,
    public toastCtrl: ToastController,private alertCtrl: AlertController,public loadingCtrl: LoadingController,private http:Http, public global:GlobalvarsProvider,public navCtrl: NavController, public popoverCtrl: PopoverController, public app: App) {
   //http://localhost/pansit/api.php?action=get_app_list
    this.loading = this.loadingCtrl.create({
      });
      this.loading.present();
         
          storage.get('email').then((val) => {
            this.email = val;
          });
          
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
            this.presentAlert("Connection Error!");
            this.loading.dismissAll();
           } 
           );
  }
  postheart(x,like){
    if (like!=null) {
        for (var index = 0; index < like.length; index++) {
                     var element = like[index];
                     if (element.email==this.email) {
                        this.posts[x].heart = 'heart';
                     }
                }
      }
      return this.posts[x].heart
  }

  likeButton(post,x) {

    if (post.heart === 'heart-outline') {
                      this.posts[x].heart = 'heart';
                      this.posts[x].color = 'danger';
                      
                      this.addlike = [{ likeid:"0",postid:post.postid, email:this.email }];
                      if ( this.posts[x].like != null) {
                        this.posts[x].like = this.posts[x].like.concat(this.addlike);
                      }else
                        this.posts[x].like =this.addlike;

        this.http.get(this.global.site + 'api.php?action=like&email=' +this.email+ '&id='+post.postid)
              .map(response => response.json())
              .subscribe(res => {
                    if (res.status == "success") {
                       
                    }else
                    {  
                      this.posts[x].heart = 'heart-outline';
                      this.posts[x].color = 'black';
                        this.presentToast("Oops! Something went wrong.");
                      }
                 },error => {
                      this.posts[x].heart = 'heart-outline';
                      this.posts[x].color = 'black';
                        this.presentToast("Connection Error.");
                        this.loading.dismissAll();
               } 
               );
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
  presentPostOwner() {
    let popover = this.popoverCtrl.create(PostOwner);
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



    presentToast(x) {
    let toast = this.toastCtrl.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }
}
