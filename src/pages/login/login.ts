import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { SignupPage } from '../signup/signup'; 
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  responseData: any;
  userData = { "username": "",
                "password": ""
            };
            
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
  }

  login(){
    // Your app login API web service call triggers 
    //this.navCtrl.push(HomePage, {}, {animate: false});
    this.authServiceProvider.postData(this.userData, 'login').then((result) => {
      this.responseData = result;
      if(this.responseData.userData) {
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.push(HomePage);
      }
      else { console.log("User does not exist" + result); }
    }, (err) => {
      // Error log
    });
  }

  signup() {
    //Signup page link
    this.navCtrl.push(SignupPage);
  }


}
