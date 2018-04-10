import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestTwoPage } from './test-two';

@NgModule({
  declarations: [
    TestTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(TestTwoPage),
  ],
})
export class TestTwoPageModule {}
