import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountService} from '../../services/account.service.ts';
@Component({
  templateUrl: 'build/pages/account/account.html',
})
export class AccountPage {
  constructor(public navCtrl: NavController, public accountService: AccountService) {

  };
  ionViewLoaded() {
    console.log("hello");
  };
}
