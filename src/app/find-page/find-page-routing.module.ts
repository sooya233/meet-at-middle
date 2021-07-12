import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPagePage } from './find-page.page';

const routes: Routes = [
  {
    path: '',
    component: FindPagePage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPagePageRoutingModule {}
