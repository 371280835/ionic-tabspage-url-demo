import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DetailTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ["TestOnePage", "TestTwoPage", "TestThreePage"]
})
@Component({
  selector: 'page-detail-tabs',
  templateUrl: 'detail-tabs.html'
})
export class DetailTabsPage {

  tab1Root = 'Tab1Page'
  tab2Root = 'Tab2Page'


  constructor(public navCtrl: NavController) {}

}
