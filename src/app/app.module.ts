import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';

import { ChoosePage } from '../pages/choose/choose';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { TripPage } from '../pages/trip/trip';
import { PaymentPage } from '../pages/payment/payment';
import { HistoryPage } from '../pages/history/history';
import { SupportPage } from '../pages/support/support';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { TerminalPage } from '../pages/terminal/terminal';
import { CourierPage } from '../pages/courier/courier';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { TerminalProvider } from '../providers/terminal/terminal';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { SettingProvider } from '../providers/setting/setting'; 



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    ChoosePage,
    TripPage,
    PaymentPage,
    HistoryPage,
    SupportPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    ContactPage,
    TerminalPage,
    CourierPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'pmtdb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    ChoosePage,
    TripPage,
    PaymentPage,
    HistoryPage,
    SupportPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    ContactPage,
    TerminalPage,
    CourierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TerminalProvider,
    SettingProvider
  ]
})
export class AppModule {}
