import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaPageRoutingModule } from './tema-routing.module';

import { TemaPage } from './tema.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [TemaPage]
})
export class TemaPageModule {}
