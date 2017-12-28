import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails: any;
  responseData: any;
  bookingData = {
    "terminal1": "",
    "terminal2": "",
    "departing_date": "",
    "seats": ""
  };

  userPostData = { "id": "", "token": "" };

  constructor(public navCtrl: NavController, public app: App, public authServiceProvider: AuthServiceProvider) {
    if (localStorage.getItem('userData')) {
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;

      this.userPostData.id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
  }

  ionViewDidLoad() {
    console.log(this.userPostData);
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    // Remove API token 
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}
