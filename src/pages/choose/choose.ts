import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TripPage } from '../trip/trip';

@IonicPage()
@Component({
  selector: 'page-choose',
  templateUrl: 'choose.html',
})
export class ChoosePage {

  searchingDetails: any;
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
  
  // Stored Schedule Data
  scheduleData = [
    { "id": "21", "departure": "2017-12-30 13:20:00", "fare": "1500", "seat": "9,2,3" },
    { "id": "22", "departure": "2017-12-30 13:20:00", "fare": "2100", "seat": "4,2,9" },
    { "id": "23", "departure": "2017-12-31 13:20:00", "fare": "1700", "seat": "7,3,11" },
    { "id": "27", "departure": "2018-1-1 12:20:00", "fare": "1300", "seat": "5,2,16" },
    { "id": "34", "departure": "2018-1-2 11:20:00", "fare": "2000", "seat": "7,12,9" }
  ];

  // Stored Searching Data
  searchingData = {
    "terminal1": "A",
    "terminal2": "B",
    "departure": "C",
    "seat": "D"
  };

  // Choose Data
  choosingData = {
    "fare": "5400",
    "schedule": "21",
    "seat": "1,2"
  };

  // Response of chosen data. 1 0r 0
  resChosenData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {

  //  this.getSearchingData();
  //  this.getScheduleData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePage');
  }


  getSearchingData() {
    if (localStorage.getItem('searchingData')) {
      const data = JSON.parse(localStorage.getItem('searchingData'));
      this.searchingDetails = data.searchingData;

      this.searchingData.terminal1 = this.searchingDetails.terminal1;
      this.searchingData.terminal2 = this.searchingDetails.terminal2;
      this.searchingData.departure = this.searchingDetails.departure;
      this.searchingData.seat = this.searchingDetails.seat;
    }
    else {
      // GoTo Homepage and Select
      console.log("Schedule does exist");
    }
  }


  getScheduleData() {
    if (localStorage.getItem('scheduleData')) {
      const data = JSON.parse(localStorage.getItem('scheduleData'));
      this.scheduleData = data.scheduleData;
      console.log("Schedule Data" + this.scheduleData);
      //this.scheduleDetails = data.scheduleData;
      // this.scheduleData.id = this.scheduleDetails.id;
    }
    else {
      // GoTo Homepage and Select
      console.log("Schedule does exist");
    }
  }

  choose() {
    // store the chosen options
    localStorage.setItem('choosingData', JSON.stringify(this.choosingData));

    this.authServiceProvider.postData(this.choosingData, 'choosing').then((result) => {
      this.resChosenData = result;
      if (this.resChosenData.chosenData) {
        console.log(this.resChosenData);
        localStorage.setItem('chosenData', JSON.stringify(this.resChosenData));
        this.navCtrl.push(TripPage);
      }
      else { console.log("Choice is no longer available" + result); }
    }, (err) => {
      // Error log
    });
  }

}
