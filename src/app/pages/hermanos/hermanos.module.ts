import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HermanosPageRoutingModule } from './hermanos-routing.module';

import { HermanosPage } from './hermanos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HermanosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HermanosPage]
})
export class HermanosPageModule {}
