import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ["TestOnePage", "TestTwoPage"]
  // 这样配置，刷新TestThreePage时，不能通过返回按钮返回到TestOnePage
  // defaultHistory: ["TestTwoPage"]
})
@Component({
  selector: 'page-test-three',
  templateUrl: 'test-three.html',
})
export class TestThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestThreePage');
  }

  onPushClick() {
    this.navCtrl.push("DetailTabsPage")
  }
}
