import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TravelHome } from '../pages/home/travel-home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrackTravelComponent } from '../pages/track-travel/track-travel.component';
import { TravelManagerComponent } from '../pages/travel-manager/travel-manager.component';
import { SettingsComponent } from '../pages/settings/settings.component';
//import { LogoutComponent } from '../pages/logout/logout.component';
import { AboutComponent } from '../pages/about/about.component';
import { ReportIssueComponent } from '../pages/report-issue/report-issue.component';
//import { MenuComponentA } from '../pages/menu/menu.component';

import { GlobalVars } from '../providers/global-vars';

@NgModule({
  declarations: [
    MyApp,
    TravelHome,
    ItemDetailsPage,
    ListPage,
    TrackTravelComponent,
    TravelManagerComponent,
    SettingsComponent,
    AboutComponent,
    ReportIssueComponent
    //MenuComponentA
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TravelHome,
    ItemDetailsPage,
    ListPage,
    TrackTravelComponent,
    TravelManagerComponent,
    SettingsComponent,
    AboutComponent,
    ReportIssueComponent
    //MenuComponentA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVars,
    TrackTravelComponent
    //LogoutComponent
  ]
})
export class AppModule {}
