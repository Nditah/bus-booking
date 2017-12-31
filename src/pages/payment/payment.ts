import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

    // Payment Details
    paymentData = {
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

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

}
