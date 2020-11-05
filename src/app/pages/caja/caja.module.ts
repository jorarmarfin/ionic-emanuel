import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajaPageRoutingModule } from './caja-routing.module';

import { CajaPage } from './caja.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CajaPage]
})
export class CajaPageModule {}
