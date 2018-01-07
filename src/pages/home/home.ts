import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public backgroundImage = 'assets/imgs/background-1.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  goToWelcome(){
    this.navCtrl.push(WelcomePage);
  }
  
}
