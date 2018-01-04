import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TerminalProvider } from '../../providers/terminal/terminal';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-terminal',
  templateUrl: 'terminal.html',
})
export class TerminalPage {

  // Accordion
  shownGroup = null;

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  terminals: Array<{ id: number, name: string, address: string, latitude: number, longitude: number, pmtonline: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public terminalProvider: TerminalProvider, private socialSharing: SocialSharing) {
    try { // statements to try
      this.terminals = terminalProvider.getTerminals(); // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminalPage');
  }

  //Sharing
  smsShare() {
    this.socialSharing.shareViaSMS("shareViaSMS", "mobile-no").then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
    });
  }
  
/*
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("shareViaWhatsApp", teimage, teUrl).then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }
  facebookShare() {
    this.socialSharing.shareViaFacebook("shareViaFacebook", teimage, teUrl).then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }
  */
}
