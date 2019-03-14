import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Remove</button>
      <button ion-item (click)="close()">Update</button>
    </ion-list>
  `
})
export class PostOwner {
  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController) {}

  close() {
    this.presentToast();
    this.viewCtrl.dismiss();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Notification',
      duration: 2000
    });
    toast.present();
  }
}