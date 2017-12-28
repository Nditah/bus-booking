import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  coverImage = 'assets/img/background/background-5.jpg';
  responseData: any ;

  userDetails = {
     id: '',
     token: '',
    /*   photo: 'assets/img/avatar/girl-avatar.png', */
    surname: '',
    other_name: '',
    sex: '',
    birth_date: '',
    phone: '',
    phone2: '',
    email: '',
    person: '',
    person_phone: '',
    product: '',
    address: '',
    city: '',
    state: '',
    pmt_bonus: '',
    pmt_credit: '',
    pmt_credit_max: ''
  };

  userPostData = { "id": "", "token": "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
      if (localStorage.getItem('userData')) {
        const data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;

        this.userPostData.id = this.userDetails.id;
        this.userPostData.token = this.userDetails.token;
      }
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
    }

    /*
    retrieveUser() {
      this.authServiceProvider.postData(this.userPostData, 'retrieveUser').then((result) => {
        this.responseData = result;
        if(this.responseData.userData) {
            console.log(this.responseData);
            localStorage.setItem('userData', JSON.stringify(this.responseData));
        }
        else { console.log("User does not exist" + result); }
      }, (err) => {
        // Error log
      });
    } 
    */

  }
