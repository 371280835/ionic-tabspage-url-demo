import { SettingDataProvider } from './../providers/setting-data/setting-data';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = 'TabsPage'

  theme: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, settingDataProvider: SettingDataProvider) {
    settingDataProvider.getActiveTheme().subscribe(theme => {
      if (theme) {
        this.theme = 'dark-theme';
      } else {
        this.theme = 'light-theme';
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
