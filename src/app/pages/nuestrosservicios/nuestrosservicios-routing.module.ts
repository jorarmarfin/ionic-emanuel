import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestrosserviciosPage } from './nuestrosservicios.page';

const routes: Routes = [
  {
    path: '',
    component: NuestrosserviciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrosserviciosPageRoutingModule {}
