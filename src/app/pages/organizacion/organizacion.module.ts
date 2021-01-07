import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizacionPageRoutingModule } from './organizacion-routing.module';

import { OrganizacionPage } from './organizacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrganizacionPage]
})
export class OrganizacionPageModule {}
