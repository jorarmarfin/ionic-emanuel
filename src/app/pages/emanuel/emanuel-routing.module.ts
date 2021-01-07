import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmanuelPage } from './emanuel.page';

const routes: Routes = [
  {
    path: '',
    component: EmanuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmanuelPageRoutingModule {}
