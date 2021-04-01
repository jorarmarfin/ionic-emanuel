import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacionPageRoutingModule } from './formacion-routing.module';

import { FormacionPage } from './formacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormacionPage]
})
export class FormacionPageModule {}
