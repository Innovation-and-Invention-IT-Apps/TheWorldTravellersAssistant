import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-track-travel',
  templateUrl: './track-travel.component.html'
})
export class TrackTravelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trackCurrentTravel() {
    console.log('Track Current Travel');
  }

  viewTravelPartners() {
    console.log('View Travel Partners');
  }

  contactTravellers() {
    console.log('Contact Travellers');
  }

  trackTravelStatus() {
    console.log('Track Travel Status');
  }
}
