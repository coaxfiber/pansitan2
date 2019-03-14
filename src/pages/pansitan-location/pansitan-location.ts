import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
/**
 * Generated class for the FarmerLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pansitan-location',
  templateUrl: 'pansitan-location.html',
})
export class PansitanLocationPage {

    property;
    map;
    markersGroup; viewMode: string = "map";
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  	this.property = this.navParams.data;
  	
  	this.showMap();
  }
   showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
                let marker: any = leaflet.marker([this.property.lati, this.property.longti]).on('click', event => console.log("map marker"));
                this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    }
		
		showMap() {
		                setTimeout(() => {
		                     this.map = leaflet.map("map").setView([this.property.lati, this.property.longti], 10);
		                      leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
		                                 attribution: '&copy; techventures.ph'
		                             }).addTo(this.map);
		                             this.showMarkers();
		                     
		                     this.map.locate({setView: false, maxZoom: 10});
		                        this.map.on('locationfound', e => {
		                        var radius = e.accuracy / 2;
		                        var popup = leaflet.popup();
		                        popup
		                      .setLatLng(e.latlng)
		                      .setContent("You are currently here!")
		                      .openOn(this.map); 
		                    
		                    

		                    leaflet.circle(e.latlng, radius).addTo(this.map);

		                     
		                   });

		                    function onLocationError(e) {
		                        alert("Turn on your service location to see your current location!");
		                         this.viewMode = "list";
		                        }
		                     this.map.on('locationerror', onLocationError);
		                 })
		        
		        
		    }
}
