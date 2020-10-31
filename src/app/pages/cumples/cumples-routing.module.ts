import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumplesPage } from './cumples.page';

const routes: Routes = [
  {
    path: '',
    component: CumplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumplesPageRoutingModule {}
