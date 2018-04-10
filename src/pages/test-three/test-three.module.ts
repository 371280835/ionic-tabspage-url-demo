import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestThreePage } from './test-three';

@NgModule({
  declarations: [
    TestThreePage,
  ],
  imports: [
    IonicPageModule.forChild(TestThreePage),
  ],
})
export class TestThreePageModule {}
