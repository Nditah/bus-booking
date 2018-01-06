import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Injectable()
export class SettingProvider {

 public settings: Object = [
    { "id": "1", "name": "BOOKING", "control":"DUMMY"  }, 
    { "id": "2", "name": "BOOKING_FARE", "control":"FARE1" },
    { "id": "3", "name": "BOOKING_DISC", "control":"10" },
    { "id": "4", "name": "TAX", "control":"10" }
  ];
  responseData: any ;
  lastUpdate: Date = new Date('2018-01-05 00:00:00'); 

  constructor(public authServiceProvider: AuthServiceProvider) {

    console.log("SettingProvider Instantiated");

    try { // statements to try
      // this.settings =this.getSetting; // function could throw exception
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
      if(this.responseData.getSetting) {
          console.log(this.responseData);
          localStorage.setItem('getSetting', JSON.stringify(this.responseData));
      }
      else { console.log("No Internet Connect" + result); }
    }, (err) => {
       throw err;
    }); 
  } 

}
