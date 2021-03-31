import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunidadPageRoutingModule } from './comunidad-routing.module';

import { ComunidadPage } from './comunidad.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComunidadPage]
})
export class ComunidadPageModule {}
