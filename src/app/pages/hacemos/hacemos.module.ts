import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacemosPageRoutingModule } from './hacemos-routing.module';

import { HacemosPage } from './hacemos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacemosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HacemosPage]
})
export class HacemosPageModule {}
