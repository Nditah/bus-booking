import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchPage } from '../pages/search/search';
import { ChoosePage } from '../pages/choose/choose';
import { TripPage } from '../pages/trip/trip';
import { PaymentPage } from '../pages/payment/payment';
import { HistoryPage } from '../pages/history/history';
import { SupportPage } from '../pages/support/support';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Welcome', component:	WelcomePage, icon: 'home'  },
      { title: 'Search', component:	SearchPage, icon: 'bus'  },
      { title: 'Choose', component:	ChoosePage, icon: 'checkbox'  },
      { title: 'Trip', component:	TripPage, icon: 'git-compare'  },
      { title: 'Payment', component:	PaymentPage, icon: 'cash'  },
      { title: 'History', component:	HistoryPage, icon: 'book'  },
      { title: 'Support', component:	SupportPage, icon: 'help-circle'  },
      { title: 'Profile', component:	ProfilePage, icon: 'contact'  },
      { title: 'Login', component:	LoginPage, icon: 'download'  },
      { title: 'Signup', component:	SignupPage, icon: 'create'  },
      { title: 'Contact', component:	ContactPage, icon: 'call'  }
            
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
