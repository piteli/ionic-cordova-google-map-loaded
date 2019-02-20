import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, GoogleMapsEvent, Marker } from "@ionic-native/google-maps/ngx";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {

  map: GoogleMap;
  constructor(private platform: Platform){

  }

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': ' My key! ',
      'API_KEY_FOR_BROWSER_DEBUG': 'My Key! '
    });


    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      snippet: 'teste',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
