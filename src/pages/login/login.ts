import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {HomePage} from'../home/home';
import {UserDetailsPage} from '../userDetails/userDetails';
import{RedditDataProvider}from'../../providers/reddit-data/reddit-data'

@Component({
   templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController)   {

  	
  }
  signIn(){
     this.navCtrl.push(UserDetailsPage);
   }
  


}