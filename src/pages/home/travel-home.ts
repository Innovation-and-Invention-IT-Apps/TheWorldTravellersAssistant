import { Component } from '@angular/core';

@Component({
  selector: 'page-travel-home',
  templateUrl: 'travel-home.html'
})
export class TravelHome {

  username: string = "Username";
  password: string = "Password";


  constructor() {

  }

  login() {
    console.log('Login invoked');
  }

  signup() {
    console.log('Signup Invoked');
  }
}
