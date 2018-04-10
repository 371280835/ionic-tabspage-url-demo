import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory:["HomePage"]
})

@Component({
  selector: 'page-test-one',
  templateUrl: 'test-one.html',
})
export class TestOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestOnePage');
  }

  onPushClick() {
    this.navCtrl.push("TestTwoPage")
  }
}
