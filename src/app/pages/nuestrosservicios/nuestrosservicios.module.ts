import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestrosserviciosPageRoutingModule } from './nuestrosservicios-routing.module';

import { NuestrosserviciosPage } from './nuestrosservicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestrosserviciosPageRoutingModule
  ],
  declarations: [NuestrosserviciosPage]
})
export class NuestrosserviciosPageModule {}
