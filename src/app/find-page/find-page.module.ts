import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPagePageRoutingModule } from './find-page-routing.module';

import { FindPagePage } from './find-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPagePageRoutingModule
  ],
  declarations: [FindPagePage]
})
export class FindPagePageModule {}
