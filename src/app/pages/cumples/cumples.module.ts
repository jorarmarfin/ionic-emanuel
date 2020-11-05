import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumplesPageRoutingModule } from './cumples-routing.module';

import { CumplesPage } from './cumples.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumplesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CumplesPage]
})
export class CumplesPageModule {}
