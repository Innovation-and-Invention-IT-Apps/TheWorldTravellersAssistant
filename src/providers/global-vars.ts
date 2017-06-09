import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  isLoggedIn: boolean;

  constructor() {
    //this.isLoggedIn;
    console.log('GlobalVar constructor called.');
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value;
    console.log('LoginStatus Value set to: ' + value);
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}
