import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  user = {
    name: 'Peace Mass Transit',
    profileImage: 'assets/imgs/girl-avatar.png',
    coverImage: 'assets/imgs/background-5.jpg',
    occupation: 'Transport',
    location: 'Nigeria',
    description: 'Safe and affordable travelling experience',
    address: '7 Peace Factory Road, Emene, Enugu, Nigeria',
    phone: '234 700 732 2362 ',
    email: 'contact@peacegroup.ng',
    whatsapp: '234 703 415 7751',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
