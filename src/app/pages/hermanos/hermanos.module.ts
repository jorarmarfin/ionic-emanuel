import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HermanosPageRoutingModule } from './hermanos-routing.module';

import { HermanosPage } from './hermanos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HermanosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [HermanosPage]
})
export class HermanosPageModule {}
