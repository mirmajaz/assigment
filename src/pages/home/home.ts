import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
// import { MenuController } from 'ionic-angular';
// import { List } from 'ionic-angular/components/list/list';
import {LoginPage} from '../login/login';
// import { UserDetailsPage } from '../userDetails/userDetails';
// import { Menu } from 'ionic-angular/components/menu/menu';
import { Intro } from '../intro/intro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public toastCtrl: ToastController)   {
  


// bgfhfjjfcdtxnhcfxjyrf;

this.navCtrl;

  }
  showToast(position: string) {





    let toast = this.toastCtrl.create({
      message: 'Login section',
      duration: 2000,
      position: position
    });
    toast.present(toast);
      this.navCtrl.push(LoginPage);
  }
  intro(){
    this.navCtrl.push(Intro);
  }


}
