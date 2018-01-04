import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'terminals';

@Injectable()
export class TerminalProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello TerminalProvider Provider');
 

  }



  getTerminal(terminalId) {
    return this.getAllTerminals().then(result => {
      if (result) {
        result.push(terminalId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [terminalId]);
      }
    });
  }
 

  getAllTerminals() {
    return this.storage.get(STORAGE_KEY);
  }

}
