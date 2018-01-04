import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-courier',
  templateUrl: 'courier.html',
})
export class CourierPage {

  responseData: any;
  shipment = { "serial": "", "code": "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourierPage');
  }

  trace(){
    // Your app login API web service call triggers 
    this.authServiceProvider.postData(this.shipment, 'courier').then((result) => {
      this.responseData = result;
      if(this.responseData.courierData) {
          console.log(this.responseData);
      }
      else { console.log("User does not exist" + result); }
    }, (err) => {
      // Error log
    });
  }

}
