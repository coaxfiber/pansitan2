import { Component } from '@angular/core';
import { IonicPage,  LoadingController, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { GooglePlus } from '@ionic-native/google-plus';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;

  constructor(
    private storage: Storage,
    public global:GlobalvarsProvider,
     private googlePlus: GooglePlus,
    public loadingCtrl: LoadingController,
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

    storage.get('email').then((val) => {
      if (val != null)
        this.navCtrl.setRoot(TabsPage);
    });
  }


  login() {
    const loading = this.loadingCtrl.create({
      content:"Connecting to Google"
    });
    loading.present();
    this.googlePlus.login({})
      .then(res => {
        loading.dismissAll();
        this.global.loginsave(res.email,res.displayName,res.imageUrl);
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
        alert(JSON.stringify(err))
        loading.dismissAll();
        
        this.navCtrl.setRoot(TabsPage);
        this.global.loginsave("guest",'Guest',"https://scontent.xx.fbcdn.net/v/t1.0-1/p32x32/51654914_2387811831237277_2326175307083546624_n.jpg?_nc_cat=104&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=076d4c78d4ff4a26e047af97aa9f54a6&oe=5D197ABA");
      });
  }


  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
  // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
  // A programmatically way to make a nice rainbow effect, there you go.
  // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
  colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);

  step = 0;
  // color table indices for:
  // [current color left,next color left,current color right,next color right]
  colorIndices = [0, 1, 2, 3];

  // transition speed
  gradientSpeed = 0.00005;
  gradient = '';

  updateGradient() {

    const c00 = this.colors[this.colorIndices[0]];
    const c01 = this.colors[this.colorIndices[1]];
    const c10 = this.colors[this.colorIndices[2]];
    const c11 = this.colors[this.colorIndices[3]];

    const istep = 1 - this.step;
    const r1 = Math.round(istep * c00[0] + this.step * c01[0]);
    const g1 = Math.round(istep * c00[1] + this.step * c01[1]);
    const b1 = Math.round(istep * c00[2] + this.step * c01[2]);
    const color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';

    const r2 = Math.round(istep * c10[0] + this.step * c11[0]);
    const g2 = Math.round(istep * c10[1] + this.step * c11[1]);
    const b2 = Math.round(istep * c10[2] + this.step * c11[2]);
    const color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

    this.gradient = `-webkit-gradient(linear, left top, right bottom, from(${color1}), to(${color2}))`;
    this.step += this.gradientSpeed;
    if (this.step >= 1) {
      this.step %= 1;
      this.colorIndices[0] = this.colorIndices[1];
      this.colorIndices[2] = this.colorIndices[3];

      // pick two new target color indices
      // do not pick the same as the current one
      this.colorIndices[1] =
        (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
        % this.colors.length;

      this.colorIndices[3] =
        (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
        % this.colors.length;

    }

    setInterval(() => { this.updateGradient(); }, 40);
  }
}