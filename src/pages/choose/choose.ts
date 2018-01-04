import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TerminalProvider } from '../../providers/terminal/terminal';
import { TripPage } from '../trip/trip';

@IonicPage()
@Component({
  selector: 'page-choose',
  templateUrl: 'choose.html',
})
export class ChoosePage {

  shownGroup = null;

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
      // this.choosingData.schedule = group;
    }
  };


  // Stored Schedule Data
  scheduleData = [
    { "id": "21", "departure": "2017-12-30 13:20:00", "fare": 1500, "seat": "1,9,3", "seaters": "16" },
    { "id": "22", "departure": "2017-12-30 13:20:00", "fare": 2100, "seat": "4,2,9", "seaters": "14" },
    { "id": "23", "departure": "2017-12-31 13:20:00", "fare": 1700, "seat": "7,3,11", "seaters": "15" },
    { "id": "27", "departure": "2018-1-1 12:20:00", "fare": 1300, "seat": "5,2,16", "seaters": "14" },
    { "id": "34", "departure": "2018-1-2 11:20:00", "fare": 2000, "seat": "7,12,9", "seaters": "15" }
  ];

  // Stored Searching Data
  searchingData = {
    "terminal1": "",
    "terminal2": "",
    "departure": "",
    "seat": ""
  };

  // Choose Data
  choosingData = {
    "fare": 0,
    "schedule": "",
    "seat": new Set()
  };

  // Response of chosen data. 1 0r 0
  resChosenData: any;

  terminals: Array<{ id: string, name: string, address: string, latitude: number, longitude: number, pmtonline: string }>;

  // Seat  
  seatClass = "available"; // Seat Status available, selected, occupied

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider, public terminalProvider: TerminalProvider ) { 

    try { // statements to try
      this.getSearchingData(); // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

    try { // statements to try
      this.getScheduleData(); // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePage');
  }


  getSearchingData() {
    if (localStorage.getItem('searchingData')) {
      const data = JSON.parse(localStorage.getItem('searchingData'));
      let searchingDetails = data.searchingData;

      this.searchingData.terminal1 = this.terminalProvider.getTerminal(searchingDetails.terminal1)["name"];
      this.searchingData.terminal2 = this.terminalProvider.getTerminal(searchingDetails.terminal2)["name"];
      this.searchingData.departure = searchingDetails.departure;
      this.searchingData.seat = searchingDetails.seat;
    }
    else {
      // GoTo Homepage and Select
      throw "Schedule does exist";
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
      throw "Schedule does exist";
    }
  }

  choose() {
    // store the chosen options
    // No need to do a JSON.stringify()
    let data = '{"choosingData": { "fare": "' + this.choosingData.fare +
      '", "schedule": "' + this.choosingData.schedule +
      '", "seat": "' + this.choosingData.seat +
      '" } }';
    localStorage.setItem('choosingData', (data));

    if (localStorage.getItem('choosingData')) {
      this.navCtrl.push(TripPage);
    }

  }

  //convert Set to String
  setToString(mySet) {
    let setArr = Array.from(mySet);
    let setStr = setArr.toString();
    return setStr;
  }

  seatOccupied(seats, schedule_seat) {
    let occupied = true;
    let ssArray = schedule_seat.split('_', 2); // converts schedule_id_Array to array
    const seatId = ssArray[1];
    let seatsArray = seats.split(','); // converts cs str of seat to array
    occupied = seatsArray.includes(seatId); // if array contains element
    //console.log(occupied);
    return occupied;
  }

  seatClk(schedule_seat, optionalArg) {
    optionalArg = (typeof optionalArg === 'undefined') ? 'default' : optionalArg;
    console.log( optionalArg);
    let ssArray = schedule_seat.split('_', 2); // converts schedule_id_Array to array
    const scheduleIndex = ssArray[0]; // Schedule Index
    const scheduleId = this.scheduleData[scheduleIndex].id; // Schedule Id
    const scheduleFare = this.scheduleData[scheduleIndex].fare; // Schedule Id
    const seatId = ssArray[1];

    // if array contains element
    if (this.choosingData.seat.has(seatId)) {
      this.choosingData.seat.delete(seatId);
      this.choosingData.fare -= scheduleFare;
    } else {
      // Add seat to Array of Seats
      this.choosingData.seat.add(seatId);
      this.choosingData.schedule = scheduleId;
      this.choosingData.fare += scheduleFare;
    }

    /*
    if (elementClasses.contains("available")) {
      elementClasses.remove("available");
      // Add seat to Array of Seats
      this.choosingData.seat.push(seatId);
    } else {
      elementClasses.add("selected");
    }

    if (elementClasses.contains("selected")) {
      elementClasses.remove("selected");
      // Remove the seat from Array of Seats
      const indexof = this.choosingData.seat.indexOf(seatId);
      this.choosingData.seat.splice(indexof, 1);
    } else {
      elementClasses.add("available");
    }
    */
    console.log("ID: " + seatId);
    console.log(" Schedule Index: " + scheduleIndex);

  }

}
