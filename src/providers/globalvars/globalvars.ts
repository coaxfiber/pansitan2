import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalvarsProvider {
  site = 'http://eltonbagne.info/api/pansitan/';
  //site = 'http://localhost/pansit/';
  name;
  image;
  constructor(public storage: Storage) {
  }
  loginsave(email,name,image){
  	this.storage.set('email', email);
    this.storage.set('name', name);
    this.storage.set('image', image);
  }
}
