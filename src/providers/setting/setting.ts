import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Injectable()
export class SettingProvider {

  public settings = [
    { "id": "1", "name": "BOOKING", "control": "DUMMY" },
    { "id": "2", "name": "BOOKING_FARE", "control": "FARE1" },
    { "id": "3", "name": "BOOKING_DISC", "control": "10" },
    { "id": "4", "name": "TAX", "control": "10" }
  ];
  responseData: any;
  freq = 4; // Frequency of update in ours
  lastUpdate = new Date('2018-01-05T00:00:00');
  /*
  Date.prototype.addHours= function(h){
      this.setHours(this.getHours()+h);
      return this;
  }
  let ago = new Date().addHours(-freq) ;
  */


constructor(public authServiceProvider: AuthServiceProvider) {

  console.log("SettingProvider Instantiated");

  try { 
    let lastUpdate = this.lastUpdate;
    let today = new Date();
    let ago = new Date(today.setHours(today.getHours() - this.freq));
    let diff: boolean = false;
  
    if( lastUpdate.getTime() <=  ago.getTime()) {
      diff = true;
      this.getSetting()
    }
    
    console.log("\n LastUpdate: " + lastUpdate + "\n Ago: " + ago + "\n Update Now: " + diff);
  }
  catch (e) {
    console.log(e); // pass exception object to error handler -> your own function
  }

}

settingDetails(settingName) {
  for (var i = 0; i < this.settings.length; i++) {
    // This if statement depends on the format of your array
    if (this.settings[i]["name"] == settingName) {
      return this.settings[i];   // Found it
    }
  }
}

getSetting() {
  this.authServiceProvider.getData(1, 'getSetting').then((result) => {
    this.responseData = result;
    if (this.responseData.getSetting) {
      console.log(this.responseData);
      localStorage.setItem('getSetting', JSON.stringify(this.responseData));
      this.lastUpdate  = new Date();
      localStorage.setItem('lastUpdate', JSON.stringify(this.lastUpdate));
    }
    else { console.log("No Internet Connect" + result); }
  }, (err) => {
    throw err;
  });
} 

}
