import { Component, OnInit, Injectable } from '@angular/core';

import { GlobalVars } from '../../providers/global-vars';

@Injectable()
export class LogoutComponent {

  constructor(private globalVars: GlobalVars) { }

  logout() {
      this.globalVars.setIsLoggedIn(false);
  }

}
