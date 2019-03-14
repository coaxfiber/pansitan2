import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {Config} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class Notifications {

properties: Array<any>;
    searchKey: string = "";
    viewMode: string = "map";
    map;
    markersGroup;
    constructor(public navCtrl: NavController, public service: PropertyService, public config: Config) {

    }
        




}
