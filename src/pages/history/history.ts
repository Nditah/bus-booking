import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  userDetails: any;
  responseData: any;
  userPostData = { "id": "", "token": "" };

  historyDetails: Array<{ transcode: string, transtatus: string, fare: string, booking_status: string, departure: string, route: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {

    try {

      if (localStorage.getItem('userData')) {
        const data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;

        this.userPostData.id = this.userDetails.id;
        this.userPostData.token = this.userDetails.token;
      }

      this.getHistory();
    }
    catch (e) {
      console.log(e);
    }
    /*
    this.historyDetails = [
      { "transcode": "XOHT23", "transtatus": "PENDING", "fare":"1500","booking_status":"OK", "departure": "2018-03-11 12:45", "route": "Lagos -> Abuja"  },
      { "transcode": "XOHT23", "transtatus": "FAILED", "fare":"6500","booking_status":"OK", "departure": "2018-03-11 12:45", "route":"Enugu -> Onitsha"  },
      { "transcode": "XOHT23", "transtatus": "SUCCESSFUL", "fare":"700","booking_status":"OK", "departure": "2018-03-11 12:45", "route":"Calabar -> Nsukka"  }
    ];
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  getHistory() {
    this.authServiceProvider.postData(this.userPostData, 'getHistory').then((result) => {
      this.responseData = result;
      if (this.responseData.historyData) {
        console.log(this.userPostData);
        localStorage.setItem('historyData', JSON.stringify(this.responseData));
        this.historyDetails = this.responseData.historyData;
      }
      else { console.log("User does not exist" + result); }
    }, (err) => {
      // Error log
      throw err;
    });
  }

}
