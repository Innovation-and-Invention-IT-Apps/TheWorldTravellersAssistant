import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { TravelHome } from '../pages/home/travel-home';
import { TrackTravelComponent } from '../pages/track-travel/track-travel.component';
import { TravelManagerComponent } from '../pages/travel-manager/travel-manager.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { AboutComponent } from '../pages/about/about.component';
import { ReportIssueComponent } from '../pages/report-issue/report-issue.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  isLoggedIn: boolean = false;

  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TravelHome;
  pages: Array<{title: string, component: any, status: boolean}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Traveller Home', component: TravelHome, status: true },
      { title: 'Track my Travel', component: TrackTravelComponent, status: this.isLoggedIn },
      { title: 'Manage my Travel', component: TravelManagerComponent, status: this.isLoggedIn },
      { title: 'Settings', component: SettingsComponent, status: true },
      { title: 'Logout', component: LogoutComponent, status: this.isLoggedIn },
      { title: 'About App', component: AboutComponent, status: true },
      { title: 'Report Issue', component: ReportIssueComponent, status: true },
      { title: 'My First List', component: ListPage, status: true }
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
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
