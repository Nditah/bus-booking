import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

    // Payment Details
    trip = {
      terminal1: 'Enugu, Okpara Avenue',
      terminal2: 'Lagos, Lagos',
      departure: '2018-01-23 09:15',
      fare: 5400,
      route: 'Enugu, Okpara Avenue => Lagos, Lagos',
      schedule: '12051'
    };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
