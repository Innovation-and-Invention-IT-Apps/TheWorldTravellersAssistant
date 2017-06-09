import { Component, OnInit } from '@angular/core';

import { GlobalVars } from '../../providers/global-vars';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  constructor(public globalVars: GlobalVars) { }

  ngOnInit() {
  }

  enableGPS() {
    console.log('ENABLE GPS');
  }

  enableData() {
    console.log('ENABLE DATA');
  }

  setRefreshInterval() {
    console.log('SET REFRESH INTERVAL');
  }

  sendSOS() {
    console.log('SEND SOS MESSAGE');
  }

}
