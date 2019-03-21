import {Component, ViewChild} from '@angular/core';
import {MultiImageUpload} from "../../components/multi-image-upload/multi-image-upload";
import {AlertController, ToastController,} from "ionic-angular";
import {Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {LoadingController, Loading } from 'ionic-angular';

import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html'

})


export class UploadImagePage {
@ViewChild(MultiImageUpload) multiImageUpload: MultiImageUpload;
    protected uploadFinished = false;
    email;descript='';
     loading: Loading;
    constructor(public global:GlobalvarsProvider,public http:Http,public storage: Storage,public loadingCtrl: LoadingController, 
   private alertCtrl: AlertController, private toastCtrl: ToastController) {
            this.storage.get('email').then((val) => {
                this.email = val;
            });
    }

    protected submit() {


        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }

                        this.loading = this.loadingCtrl.create({
                          });
                          this.loading.present();

                           this.http.get(this.global.site + 'api.php?action=addpost&email='+this.email+'&pansitanid='+1+'&descript='+this.descript)
                            .map(response => response.json())
                            .subscribe(res => {

                                  this.loading.dismissAll();
                                  this.multiImageUpload.serverUrl = this.global.site + "upload.php?pansitanid="+res.pansitan +'&type=1';
                                    this.multiImageUpload.uploadImages().then((images) => {
                                        this.uploadFinished = true;
                                        this.showToast("Posting successful.");
                                        console.dir(images);
                                    }).catch(() => {
                                    });

                            },error => {
                              console.log(error);
                              this.presentAlert("Connection Error!");
                              this.loading.dismissAll();
                             } );
        


    }
    
    protected cancel() {
        this.confirm('Are you sure to cancel?').then(value => {
            if (value) {
                this.multiImageUpload.abort();
            }
        })
    }

    private showToast(text: string) {
        this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'bottom'
        }).present();
    }

    private confirm(text: string) {
        return new Promise(
            (resolve) => {
                this.alertCtrl.create({
                    message: text,
                    buttons: [
                        {
                            text: "No",
                            role: 'cancel',
                            handler: () => {
                                resolve(false);
                            }
                        },
                        {
                            text: "Yes",
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                }).present();
            }
        );
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