import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunionesPageRoutingModule } from './reuniones-routing.module';

import { ReunionesPage } from './reuniones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReunionesPage]
})
export class ReunionesPageModule {}
