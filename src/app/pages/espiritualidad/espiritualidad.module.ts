import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspiritualidadPageRoutingModule } from './espiritualidad-routing.module';

import { EspiritualidadPage } from './espiritualidad.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspiritualidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EspiritualidadPage]
})
export class EspiritualidadPageModule {}
