import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from "../login/login";
/**
 * Generated class for the Options page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class Options {

  constructor(
    private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Options');
  }

  logout(){
  	this.storage.remove('email')
  	this.storage.remove('name')
  	this.storage.remove('image')
    window.location.reload()
  }
}
