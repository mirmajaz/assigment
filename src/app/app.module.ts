import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {UserDetailsPage} from '../pages/userDetails/userDetails';
import{ListPage} from '../pages/list/list';
import {Intro} from '../pages/intro/intro';
import {SearchPages} from '../pages/search/search'
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserDetailsPage,
    ListPage,
    Intro,
    SearchPages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserDetailsPage,
    ListPage,
    Intro,
    SearchPages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider
  ]
})
export class AppModule {}
