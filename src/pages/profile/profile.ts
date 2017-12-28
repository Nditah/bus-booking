import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  url = "http://localhost/dove/booking/PHP-Slim-Restful/api/login.php";
//  user: string[];

  user = {
    coverImage: 'assets/img/background/background-5.jpg',
 /*   photo: 'assets/img/avatar/girl-avatar.png', */
    surname: 'Clement ',
    other_name: 'Nike',
    sex: 'F',
    birth_date: '12 Feb 2001',
    phone: '080 555 555',
    phone2: '070 555 555',
    email: 'kelvin@gmail.com',
    person: 'Kelvin Clinton',
    person_phone: '080 555 555',
    product: 'PMT',
    address: '27 King\'s College Cir, Onitsha',
    city: 'Port harcourt',
    state: 'Rivers',
    pmt_bonus: '200.0',
    pmt_credit: '0.0',
    pmt_credit_max: '500.0'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
 

  }

}
