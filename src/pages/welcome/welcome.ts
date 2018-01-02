import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChoosePage } from '../choose/choose';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
 
  //UserData from Storage
  userDetails = {
    "id": "",
    "token": "",
    "surname": "",
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

  resTerminalData: any;
  resScheduleData: any;
  searchingData = {
    "terminal1": "",
    "terminal2": "",
    "departure": "",
    "seat": ""
  };

  terminals: Array<{ id: string, name: string }>;


  userPostData = { "id": "", "token": "" };

  constructor(public navCtrl: NavController, public app: App, public authServiceProvider: AuthServiceProvider) {
    try {
      if (localStorage.getItem('userData')) {
        const data = JSON.parse(localStorage.getItem('userData'));
        const userDetails = data.userData;
        // userPost
        this.userPostData.id = userDetails.id;
        this.userPostData.token = userDetails.token;
        // userPost
        this.userDetails.id	= userDetails.id	;
        this.userDetails.token	= userDetails.token	;
        this.userDetails.surname	= userDetails.surname	;
        this.userDetails.other_name	= userDetails.other_name	;
        this.userDetails.sex	= userDetails.sex	;
        this.userDetails.birth_date	= userDetails.birth_date	;
        this.userDetails.phone	= userDetails.phone	;
        this.userDetails.phone2	= userDetails.phone2	;
        this.userDetails.email	= userDetails.email	;
        this.userDetails.password	= userDetails.password	;
        this.userDetails.person	= userDetails.person	;
        this.userDetails.person_phone	= userDetails.person_phone	;
        this.userDetails.product	= userDetails.product	;
        this.userDetails.address	= userDetails.address	;
        this.userDetails.city	= userDetails.city	;
        this.userDetails.state	= userDetails.state	;
      } else {
        throw "UserData not found in storage";
      }
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

    try { // statements to try
      this.getTerminals(); // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

  }

  ionViewDidLoad() {
    console.log(this.userPostData);
  }

  getTerminals() {
    this.authServiceProvider.getData(1, 'getTerminal').then((result) => {
      this.resTerminalData = result;
      if (this.resTerminalData.terminalData) {
        console.log(this.resTerminalData.terminalData);
        localStorage.setItem('terminalData', JSON.stringify(this.resTerminalData));
        this.terminals = this.resTerminalData.terminalData;
      }
      else { console.log("Terminals do not exist" + result); }
    }, (err) => {
      // Error log
      console.log("Error has occurred " + err);
    });
  }

  getSchedule() {
    // store the searching parameters // 
    // No need to do a JSON.stringify()
    let data = '{"searchingData": { "terminal1": "' + this.searchingData.terminal1 +
      '", "terminal2": "' + this.searchingData.terminal2 +
      '", "departure": "' + this.searchingData.departure +
      '", "seat": "' + this.searchingData.seat +
      '" } }';

    localStorage.setItem('searchingData', (data));
    console.log("Logging seachingData" + this.searchingData);

    //query for schedule for the requested route
    this.authServiceProvider.postData(this.searchingData, 'getSchedule').then((result) => {
      this.resScheduleData = result;
      if (this.resScheduleData.scheduleData) {
        console.log(this.resScheduleData);
        localStorage.setItem('scheduleData', JSON.stringify(this.resScheduleData));
        this.navCtrl.push(ChoosePage);
      }
      else { console.log("Schedule does not exist" + result); }
    }, (err) => {
      // Error log
    });

  }

  backToHome() {
    const root = this.app.getRootNav(); // getRootNavById
    root.popToRoot();
  }

  logout() {
    // Remove API token 
    localStorage.clear();
    setTimeout(() => this.backToHome(), 1000);
  }


}
