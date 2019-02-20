import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, GoogleMapsEvent, Marker } from "@ionic-native/google-maps/ngx";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {

  map: GoogleMap;
  constructor(private platform: Platform, private geolocation: Geolocation){
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
    this.loadGeoLocation();
  }

  loadGeoLocation(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
     console.log("hopefully it is");
     console.log(resp);
     // this.locateUserWithMarker(resp);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log("here is the data watch");
      console.log(data);
    });
  }

  locateUserWithMarker(resp){
    let marker: Marker = this.map.addMarkerSync({
      title: 'Hi there',
      snippet: 'Im marker man :D',
      position: {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
