import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspiritualidadPage } from './espiritualidad.page';

const routes: Routes = [
  {
    path: '',
    component: EspiritualidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspiritualidadPageRoutingModule {}
