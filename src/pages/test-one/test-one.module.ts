import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestOnePage } from './test-one';

@NgModule({
  declarations: [
    TestOnePage,
  ],
  imports: [
    IonicPageModule.forChild(TestOnePage),
  ],
})
export class TestOnePageModule {}
