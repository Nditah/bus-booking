import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  user = {
    name: 'Cosima Niehaus',
    profileImage: 'assets/imgs/girl-avatar.png',
    coverImage: 'assets/imgs/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    email: 'cosima@niehaus.com',
    whatsapp: '555 555 555',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
