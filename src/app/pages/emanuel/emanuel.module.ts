import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmanuelPageRoutingModule } from './emanuel-routing.module';

import { EmanuelPage } from './emanuel.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmanuelPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmanuelPage]
})
export class EmanuelPageModule {}
