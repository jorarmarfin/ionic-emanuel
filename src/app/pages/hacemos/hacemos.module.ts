import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacemosPageRoutingModule } from './hacemos-routing.module';

import { HacemosPage } from './hacemos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacemosPageRoutingModule
  ],
  declarations: [HacemosPage]
})
export class HacemosPageModule {}
