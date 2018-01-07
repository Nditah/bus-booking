import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public backgroundImage = 'assets/imgs/background-3.jpg';
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  responseData: any;
  userData = { "surname": "",
                "other_name": "",
                "sex": "",
                "birth_date": "",
                "phone": "",
                "phone2": "",
                "email": "",
                "password": "",
                "person": "",
                "person_phone": "",
                "product": "",
                "address": "",
                "city": "",
                "state": ""
            };
            
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }
 // constructor(public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {}


  signup() {
  
    this.authServiceProvider.postData(this.userData, 'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData) {
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.push(HomePage);
      }
      else { console.log("User already exists" + result); }
    }, (err) => {
      // Error log
    });
    
  } 

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
