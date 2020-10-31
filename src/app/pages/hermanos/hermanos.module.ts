import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HermanosPageRoutingModule } from './hermanos-routing.module';

import { HermanosPage } from './hermanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HermanosPageRoutingModule
  ],
  declarations: [HermanosPage]
})
export class HermanosPageModule {}
