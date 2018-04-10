import { SettingDataProvider } from './../../providers/setting-data/setting-data';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  theme: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public settingDataProvider: SettingDataProvider) {
    this.getActiveTheme();
  }

  getActiveTheme() {
    this.settingDataProvider.getActiveTheme().subscribe(theme => {
      this.theme = theme;
    });
  }

  toggleTheme() {
    if (!this.theme) {
      this.presentToast('关闭应用后夜间模式将失效');
    }
    this.settingDataProvider.setActiveTheme(!this.theme);
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 2000});
    toast.present().then(value => {
      return value;
    });
  }

}
