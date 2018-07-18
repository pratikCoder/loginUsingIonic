import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FirstPage } from '../first/first';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController) {

  }

  login() {
    if (this.username.length == 0 || this.password.length == 0) {
      alert("please fill the username and password fields");

    } else {
      console.log("username: " + this.username);
      console.log("password: " + this.password);

      this.navCtrl.push(FirstPage);
    }
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

}