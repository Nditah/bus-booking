import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';


@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {

  // Terms n Condition
  isAccept = false ; //: boolean;

  // Trip Details
  tripData = {
    terminal1: 'Enugu, Okpara Avenue',
    terminal2: 'Lagos, Lagos',
    departure: '2018-01-23 09:15',
    fare: 5400,
    schedule: '12051',
    seat: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    try { // statements to try
      this.getTripData(); // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripPage');
  }

  acceptTerms() {
    if(this.isAccept != true) {
      this.isAccept = true;
    }else{
      this.isAccept = false;
    }
    console.log('Terms and Conditions accepted:' + this.isAccept);
  }


  goToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  terminalName(terminalMuiltiArray, terminalId) {
    for (var i = 0; i < terminalMuiltiArray.length; i++) {
      // This if statement depends on the format of your array
      if (terminalMuiltiArray[i]["id"] == terminalId) {
        return terminalMuiltiArray[i]["name"];   // Found it
      }
    }
  }

  getTripData() {
    if (localStorage.getItem('terminalData') && localStorage.getItem('searchingData') ) {
      const data = JSON.parse(localStorage.getItem('searchingData'));
      let searchingDetails = data.searchingData;
      const term = JSON.parse(localStorage.getItem('terminalData'));
      let terminalDetails = term.terminalData;

      this.tripData.terminal1 = this.terminalName(terminalDetails, searchingDetails.terminal1);
      this.tripData.terminal2 = this.terminalName(terminalDetails, searchingDetails.terminal2);
      this.tripData.departure = searchingDetails.departure;
      this.tripData.seat = searchingDetails.seat;
    }
    else {
      // GoTo Homepage and Select
      throw "Destination does exist";
    }

    if (localStorage.getItem('choosingData')) {
      const chosen = JSON.parse(localStorage.getItem('choosingData'));
      let choosingDetails = chosen.choosingData;

      this.tripData.fare = choosingDetails.fare;
      this.tripData.schedule = choosingDetails.schedule;
      this.tripData.seat = choosingDetails.seat;
    }
    else {
      // GoTo Homepage and Select
      throw "Schedule does exist";
    }
  }

}
