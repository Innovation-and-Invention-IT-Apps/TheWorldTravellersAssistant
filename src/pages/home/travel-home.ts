import { Component } from '@angular/core';

import { GlobalVars } from '../../providers/global-vars';
import { TrackTravelComponent } from '../track-travel/track-travel.component';

@Component({
  selector: 'page-travel-home',
  templateUrl: 'travel-home.html',
  providers: [  ]
})
export class TravelHome {

  username: string = "Username";
  password: string = "Password";


  constructor(
        public globalVars: GlobalVars,
        public trackTravelComponent: TrackTravelComponent
  ) {

  }

  login() {
    console.log('Login invoked');
    this.globalVars.setIsLoggedIn(true);
  }

  signup() {
    console.log('Signup Invoked');
  }

  trackCurrentTravel() {
    this.trackTravelComponent.trackCurrentTravel();
  }

  viewTravelPartners() {
    this.trackTravelComponent.viewTravelPartners();
  }

  contactTravellers() {
    this.trackTravelComponent.contactTravellers();
  }

  trackTravelStatus() {
    this.trackTravelComponent.trackTravelStatus();
  }
}
