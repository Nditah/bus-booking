import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Injectable()
export class TerminalProvider {


  // private terminals: Array<{ id: number, name: string, address: string, latitude: number, longitude: number, pmtonline: string }>;

  terminals = [{ "id":2,"name":"Aba, Asa road","address":"No 13/14 Asa Road, Aba, Abia State","latitude":5.1050000,"longitude":7.3655000,"pmtonline":"YES" }, 
  { "id":22,"name":"Abuja, Bwari","address":" 9 Shagari Road, Opposite Market, Bwarri, Abuja","latitude":9.2856000,"longitude":7.3787000,"pmtonline":"YES" }, 
  { "id":20,"name":"Abuja, Kubwa ","address":"Opposite Kubwa Market, Kubwa, Abuja, ","latitude":9.1596000,"longitude":7.3386000,"pmtonline":"YES" }, 
  { "id":18,"name":"Abuja, Kuje","address":" Gwagwalada Road, Near Secretariat Junction, Kuje, Abuja.","latitude":8.8764000,"longitude":7.2437000,"pmtonline":"YES" }, 
  { "id":10,"name":"Afikpo, Ngodo Road","address":"No 7 Ngodo Road, Amangballa, Afikpo-north","latitude":5.8895000,"longitude":7.9538000,"pmtonline":"YES" }, 
  { "id":12,"name":"Benin, Akpakpava Road","address":" No 115 Akpakpava Road, 2nd Junction, Benin City","latitude":6.3445000,"longitude":5.6364000,"pmtonline":"YES" }, 
  { "id":8,"name":"Calabar, Bedwell Street, Beh","address":" No 56 Bedwell Street, Behind Watt Market, Calabar, Akwa Ibom, Calabar, Akwa Ibom","latitude":4.9757000,"longitude":8.3417000,"pmtonline":"YES" }, 
  { "id":50,"name":"Ekiti, Ikere road","address":"ikere road, ado ekiti","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":14,"name":"Enugu, Garriki","address":" Opposite Garriki Market, Garriki, Enugu, ","latitude":6.4584000,"longitude":7.5464000,"pmtonline":"YES" }, 
  { "id":16,"name":"Enugu Ezike, Umuida Rd, Ogurut","address":" No 66 Umuida Road, Ogurute, Enugu-ezike, Enugu","latitude":6.9833000,"longitude":7.4425000,"pmtonline":"YES" }, 
  { "id":38,"name":"Ibadan, UI Sango Rd","address":" Samonda Old Airport, Ui/sango Rd, Ibadan, Oyo State.","latitude":7.4492000,"longitude":3.9070000,"pmtonline":"YES" }, 
  { "id":54,"name":"Ikom, Four Corner","address":"No1 mi2 four conrner ikom, cross river state","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":26,"name":"Ilorin, Old Jebba Road","address":" Old Jebba Road, Agric Area, Opposite Kwara Adp, Along Sango Road, Ilorin, Kwara, Ilorin, Kwara","latitude":8.5089000,"longitude":4.5852000,"pmtonline":"YES" }, 
  { "id":52,"name":"Jos, Terminal market","address":"Terminal market, jos, plateau state","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":24,"name":"Kano, First Gate, Tesha K","address":" First Gate, Tesha Koka, Kofar Ruwa Market, Kano, Kano, Kano","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":42,"name":"Lagos, Oyingbo","address":"Oyingbbo, Lagos","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":36,"name":"Lagos, Ibafo","address":" Near Ibafo Police Station, Opposite Internal Revenue, Ibafo, Ogun State.","latitude":6.7401000,"longitude":3.4221000,"pmtonline":"YES" }, 
  { "id":34,"name":"Lagos, Ejigbo","address":" Ilepo Bus Stop, Ejigbo, Lagos, ","latitude":6.5302000,"longitude":3.3036000,"pmtonline":"YES" }, 
  { "id":32,"name":"Lagos, Ikorodu","address":" 7 Sagamu Road, By Ikorodu Roundabout, Ikorodu, Lagos, Lagos, Lagos","latitude":6.6194000,"longitude":3.5105000,"pmtonline":"YES" }, 
  { "id":30,"name":"Lagos, Orile","address":" No 10 Badagry Expressway, By School Bus Stop, Orile, Lagos, Lagos","latitude":6.5244000,"longitude":3.3792000,"pmtonline":"YES" }, 
  { "id":27,"name":"Lagos, Mazamaza","address":"Mazamaza by Oduma Giofor Car Dealers Association, Lagos","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":28,"name":"Lagos, Ojuelegba","address":" 9/10 Western Avenue, Ojuelegba Roundabout, Opposite Abalti Barracks, Lagos, ","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":46,"name":"Minna, David Mark road","address":"david mark road, opposite INEC office","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":48,"name":"Nnewi, Nnewi","address":"4/5 owerri Road by Nwafor Orizu Roundabout, Umudim, Nnewi","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":40,"name":"Nsukka, Enugu Road","address":"64 Enugu Road, nsukka ,","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":6,"name":"Onitsha, Oguta Road","address":" No 103 Oguta Road, Upper Iweka, Onitsha, Anambra","latitude":6.1413000,"longitude":6.8029000,"pmtonline":"YES" }, 
  { "id":56,"name":"Suleja, IBB market Rd.","address":"IBB, market road suleja, niger state","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }, 
  { "id":4,"name":"Uyo, Long Distance Park, ","address":" Peace Mass Transit Ltd, Terminal 6, Long Distance Park, Itam, Itu Lga , Uyo, Akwa Ibom, Uyo, Akwa I","latitude":5.0377000,"longitude":7.9128000,"pmtonline":"YES" }, 
  { "id":44,"name":"Yenagoa, Okutukutu, Mabiama,","address":"783 okutukutu, mabiama, yenagoa, bayelsa state","latitude":0.0000000,"longitude":0.0000000,"pmtonline":"YES" }];
  // Store Terminal Data public terminalData
  public getTerminals() {
    return this.terminals
  }

  constructor(public authServiceProvider: AuthServiceProvider) {

    console.log("TerminalProvider Instantiated");

    try { // statements to try
      // this.terminals =this.terminalData; // function could throw exception
    }
    catch (e) {
      console.log(e); // pass exception object to error handler -> your own function
    }

  }

  getTerminal(terminalId) {
    for (var i = 0; i < this.terminals.length; i++) {
      // This if statement depends on the format of your array
      if (this.terminals[i]["id"] == terminalId) {
        return this.terminals[i];   // Found it
      }
    }
  }

}
