import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineSchedulesPage } from './medicine-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: MedicineSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineSchedulesPageRoutingModule {}
