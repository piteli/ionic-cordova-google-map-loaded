import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private androidPermissions: AndroidPermissions
  ) {
    this.checkGeolocationPermission();
  }

  checkGeolocationPermission(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
    );

  this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION]);
  }

  navigateToGoogleMapView(){
    this.navCtrl.navigateForward('/google-map');
  }
}
