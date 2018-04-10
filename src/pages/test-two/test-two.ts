import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory:["HomePage", "TestOnePage"]
})
// @IonicPage()
@Component({
  selector: 'page-test-two',
  templateUrl: 'test-two.html',
})
export class TestTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestTwoPage');
  }

  onPushClick() {
    this.navCtrl.push("TestThreePage")
  }
}
