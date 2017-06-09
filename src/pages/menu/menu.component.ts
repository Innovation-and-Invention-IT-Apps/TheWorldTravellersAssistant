import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { TravelHome } from '../home/travel-home';
import { TrackTravelComponent } from '../track-travel/track-travel.component';
import { TravelManagerComponent } from '../travel-manager/travel-manager.component';
import { SettingsComponent } from '../settings/settings.component';
import { LogoutComponent } from '../logout/logout.component';
import { AboutComponent } from '../about/about.component';
import { ReportIssueComponent } from '../report-issue/report-issue.component';
import { ListPage } from '../list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalVars } from '../../providers/global-vars';

@Component({
  selector: 'menu-page',
  templateUrl: 'menu.component.html',
  providers: [GlobalVars]
})

export class MenuComponentA {

  //isLoggedIn: boolean = true;

  // @ViewChild(Nav) nav: Nav;
  //
  // // make HelloIonicPage the root (or first) page
  // rootPage = TravelHome;
  // //pages: Array<{title: string, component: any, loginStatus: boolean}>;
  //
  // constructor(
  //   public platform: Platform,
  //   public menu: MenuController,
  //   public statusBar: StatusBar,
  //   public splashScreen: SplashScreen
  // ) {
  //   this.initializeApp();
  //
  //   // set our app's pages
  //   // this.pages = [
  //   //   { title: 'Traveller Home', component: TravelHome, loginStatus: true },
  //   //   { title: 'Track my Travel', component: TrackTravelComponent, loginStatus: this.isLoggedIn },
  //   //   { title: 'Manage my Travel', component: TravelManagerComponent, loginStatus: this.isLoggedIn },
  //   //   { title: 'Settings', component: SettingsComponent, loginStatus: true },
  //   //   { title: 'Logout', component: LogoutComponent, loginStatus: this.isLoggedIn },
  //   //   { title: 'About App', component: AboutComponent, loginStatus: true },
  //   //   { title: 'Report Issue', component: ReportIssueComponent, loginStatus: true },
  //   //   { title: 'My First List', component: ListPage, loginStatus: true }
  //   // ];
  // }
  //
  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
  //
  // openPage(page) {
  //   // close the menu when clicking a link from the menu
  //   this.menu.close();
  //   // navigate to the new page if it is not the current page
  //   if(page === 'TravelHome')
  //     this.nav.setRoot(TravelHome);
  //   else if(page === 'TrackTravelComponent')
  //     this.nav.setRoot(TrackTravelComponent);
  //   else if(page === 'TravelManagerComponent')
  //     this.nav.setRoot(TravelManagerComponent);
  //   else if(page === 'SettingsComponent')
  //     this.nav.setRoot(SettingsComponent);
  //   else if(page === 'LogoutComponent')
  //     this.nav.setRoot(LogoutComponent);
  //   else if(page === 'AboutComponent')
  //     this.nav.setRoot(AboutComponent);
  //   else if(page === 'ReportIssueComponent')
  //     this.nav.setRoot(ReportIssueComponent);
  //   else if(page === 'ListPage')
  //     this.nav.setRoot(ListPage);
  // }
}
