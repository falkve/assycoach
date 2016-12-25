import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PlayerPage } from '../pages/player/player';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddPlayerPage} from "../pages/addplayer/addplayer";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
