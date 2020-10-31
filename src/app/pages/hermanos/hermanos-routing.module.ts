import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HermanosPage } from './hermanos.page';

const routes: Routes = [
  {
    path: '',
    component: HermanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HermanosPageRoutingModule {}
