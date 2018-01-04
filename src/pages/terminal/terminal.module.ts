import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminalPage } from './terminal';

@NgModule({
  declarations: [
    TerminalPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminalPage),
  ],
})
export class TerminalPageModule {}
