import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChoosePage } from '../choose/choose'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //responseData
  userDetails: any;
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

    if (localStorage.getItem('userData')) {
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;

      this.userPostData.id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }   
    /*
    this.terminals = [
      { "id": "1", "name": "Enugu, Okpara Avenue" },
      { "id": "2", "name": "Abuja, Zuba" }, ];
    */
    this.getTerminals();

  }

  ionViewDidLoad() {
    console.log(this.userPostData);
  }

  getTerminals(){
    this.authServiceProvider.getData(1, 'getTerminal').then((result) => {
      this.resTerminalData = result;
      if(this.resTerminalData.terminalData) {
          console.log(this.resTerminalData.terminalData);
          localStorage.setItem('terminalData', JSON.stringify(this.resTerminalData));
          this.terminals =  this.resTerminalData.terminalData;
      }
      else { console.log("Terminals do not exist" + result); }
    }, (err) => {
      // Error log
    });
  }

  getSchedule() {
    // store the searching parameters
    localStorage.setItem('searchingData', JSON.stringify(this.searchingData));
    
    //query for schedule for the requested route
    this.authServiceProvider.postData(this.searchingData, 'getSchedule').then((result) => {
      this.resScheduleData = result;
      if(this.resScheduleData.scheduleData) {
          console.log(this.resScheduleData);
          localStorage.setItem('scheduleData', JSON.stringify(this.resScheduleData));
          this.navCtrl.push(ChoosePage);
      }
      else { console.log("Schedule does not exist" + result); }
    }, (err) => {
      // Error log
    });
    
  } 

  backToWelcome() {
    const root = this.app.getRootNav(); // getRootNavById
    root.popToRoot();
  }

  logout() {
    // Remove API token 
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}
