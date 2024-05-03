import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationSchedulePage } from './medication-schedule.page';
import {PatientsPage} from "../../patients.page";

const routes: Routes = [
  {
    path: '',
    component: MedicationSchedulePage
  },
  {
    path: 'patients',
    component: PatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicationSchedulePageRoutingModule {}
