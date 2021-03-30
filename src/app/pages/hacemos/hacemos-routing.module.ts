import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HacemosPage } from './hacemos.page';

const routes: Routes = [
  {
    path: '',
    component: HacemosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HacemosPageRoutingModule {}
