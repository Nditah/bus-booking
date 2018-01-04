import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 

@IonicPage()
@Component({
  selector: 'page-terminal',
  templateUrl: 'terminal.html',
})
export class TerminalPage {

  private storage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminalPage');
  }



//To open a database:
dbOpen(){
  document.addEventListener('deviceready', function () {
 var  db = window.sqlitePlugin.openDatabase({ name: 'pmtdb', location: 'default', androidDatabaseImplementation: 2 });
  });
}

// To populate a database using the SQL batch API:
terminalPutAll() {
  var  db = window.sqlitePlugin.openDatabase({ name: 'pmtdb', location: 'default', androidDatabaseImplementation: 2 });
  db.sqlBatch([
    'CREATE TABLE IF NOT EXISTS terminal (id, name, state)',
    ['INSERT INTO terminal VALUES (?,?,?)', [1, 'Adamawa', 101]],
    ['INSERT INTO terminal VALUES (?,?,?)', [2, 'Lagos', 202]],
  ], function () {
    console.log('Populated database OK');
  }, function (error) {
    console.log('SQL batch ERROR: ' + error.message);
  });
}


// To check the data using the single SQL statement API:
terminalGetAll() {
  db.executeSql('SELECT count(*) AS mycount FROM terminal', [], function (rs) {
    console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
  }, function (error) {
    console.log('SELECT SQL statement ERROR: ' + error.message);
  });
}	
  

}
