import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, Geolocation } from 'ionic-native';

/*
  Generated class for the GetHelp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-get-help',
  templateUrl: 'get-help.html'
})
export class GetHelp {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello GetHelp Page');
    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });
  }

}
