import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  username: string = '';
  password: string = '';
  repass: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register() {
    if (this.username.length == 0 || this.password.length == 0 || this.repass.length == 0) {
      alert("Please fill the fields...");
    }
    else {
      if (this.password != this.repass) {
        alert("Passwords are mis-match, Please Check ..!");
      }
      else {
        console.log("username: " + this.username);
        console.log("password: " + this.password);
        console.log("repete password: " + this.repass);
        this.navCtrl.push(HomePage);
      }
    }
  }

}
