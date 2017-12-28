import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  rootPage: any;
  items: Array<{ title: string, page: any }>;
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


  accordions = [
    {
      name: 'How to I choose a Seat?',
      description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage, save time to visit Angra dos Reis, between Rio and São Paulo. This popular Brazilian vacation area is where cariocas go to escape the crowds. “It’s where many of the country’s elite have their beach villas,” says Martin Frankenberg of Matuete, who has access to several of these glamorous rentals. Big changes are coming to the region. In May, Brazilian chain Fasano will open a long-awaited 54-suite hotel in a complex that includes a marina, golf course, restaurants, and a spa. The design is striking, with elevated wooden buildings that look like they’re floating, all with open-air terraces and views of the forest and sea. And the government recently pledged $8 million to improve the infrastructure on Ilha Grande—an island that’s so popular that they’ve had to impose a daily limit on visitors. —Stephanie Wu',
    },
    {
      name: 'Can I still be charged for Luggage?',
      description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film), which opened in October with casual, well-appointed rooms and complimentary grab-and-go breakfast granola. Check out arts organization Seedhead, which runs street-art tours and hosts pop-up cabarets around the city. The Michelin-starred OX and EIPIC lead the fine-dining pack, but also visit Permit Room, with its internationally inspired breakfast and locally roasted coffee. Noteworthy new nightlife spots include the Muddlers Club, a stylish restaurant and cocktail bar in the trendy Cathedral Quarter, and Vandal, a graffiti-adorned pizza place that turns into a late-night club, on the top floor of a 17th-century pub.—Nell McShane Wulfhart',
    },
    {
      name: 'What would happen if I missed my Schedule?',
      description: 'Since the end of the Yugoslav wars, Belgrade has attracted steady investment—its graffiti-covered neighborhoods are now full of restaurants and bars. You’ll find hearty platters of ćevapi—smoky sausages without casing—and stuffed somborka peppers at Sokače, paprika-laden kebabs at Tri Šešira, and pan-Latin tapas at Toro. But the biggest draw is the growing craft-beer scene (the city has 37 breweries). Don’t miss the Kabinet Supernova IPA at Prohibicija in the bar-filled Savamala district, as well as Kas’s full-bodied pale ales and Salto’s IPA at Bajloni, set in a 100-year-old brewery space in Cetinjska. —Govind Dhar',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
    this.rootPage = SupportPage;
    this.items = [
      
      {
        title: 'Walkthrough Booking Tutorial',
        page: 'SliderWithArrowsPage'
      }

    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  } 

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}
