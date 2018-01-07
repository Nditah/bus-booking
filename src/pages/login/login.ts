import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { SignupPage } from '../signup/signup'; 
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { AlertController, App, LoadingController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public backgroundImage = 'assets/imgs/background-3.jpg';

  responseData: any;
  userData = { "username": "", "password": "" }; //login

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

            
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App
  ) {
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


  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }
/*
  login() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }
  */
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }

}
