import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedAdminLogPage } from './med-admin-log.page';

const routes: Routes = [
  {
    path: '',
    component: MedAdminLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedAdminLogPageRoutingModule {}
