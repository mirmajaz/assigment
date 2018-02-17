import { Component } from '@angular/core';
import { NavController,ToastController,MenuController } from 'ionic-angular';
// import {HomePage} from '../home/home';
// import {LoginPage} from '../login/login';
// import {ListPage} from '../list/list' 
@Component({
  templateUrl: 'userDetails.html'
})
export class UserDetailsPage {

  constructor(public navCtrl: NavController, private menu : MenuController, public toastCtrl: ToastController)   {
    this.menu = menu;
    this.menu.enable(true, 'myMenu');
    

  }
}