import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slider-with-arrows',
  templateUrl: 'slider-with-arrows.html'
})
export class SliderWithArrowsPage {

  @ViewChild('slider') slider: Slides;

  slides = [
    {
      title: 'Select Route',
      body: 'Select your departure terminal and your destination terminal from the drop down list, select the date of travel and optionally the number of seats and click SEARCH to view available buses',
      imageUrl: 'assets/imgs/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'Select Bus',
      body: 'Available buses your your route are displayed. Select a Bus Schedule and click NEXT',
      imageUrl: 'assets/imgs/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Select Seat',
      body: 'Select Seat: Choose your seat(s) from the AVAILABLE(BLUE) seats shown on the picture. Based on your route, number of seats, the charge would be calculated and the amount displayed. Fill in your name, phone number, next-of-kin and other relevant details and click SUBMIT.',
      imageUrl: 'assets/imgs/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'Make Payment',
      body: 'At this step, you verify your details, copy the Transaction Number, and click PAY NOW to go to InterSwitch webpay interface where you will fill in your ATM card details and effect the payment. An additional service charge of N100 would be deducted by InterSwitch. After the confirming the Transaction, you may receive an sms or email from PMT.',
      imageUrl: 'assets/imgs/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];

  constructor(public navCtrl: NavController) { }

  currentIndex = 0;

  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
  }
}
