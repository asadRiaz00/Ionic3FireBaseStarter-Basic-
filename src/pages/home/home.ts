import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   errorMessage: string = '';
  constructor(public auth: AuthService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  LogOut()
  {
  	this.navCtrl.push(LoginPage);
       this.auth.doLogout()
    .then(res => {
    	this.navCtrl.push(LoginPage);
    
      
    }, err => {
        this.navCtrl.push(LoginPage);
   
    })
     

  }

}
