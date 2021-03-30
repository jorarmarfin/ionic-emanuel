import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspiritualidadPageRoutingModule } from './espiritualidad-routing.module';

import { EspiritualidadPage } from './espiritualidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspiritualidadPageRoutingModule
  ],
  declarations: [EspiritualidadPage]
})
export class EspiritualidadPageModule {}
