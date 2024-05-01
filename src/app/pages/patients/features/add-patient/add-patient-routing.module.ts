import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientPage } from './add-patient.page';
import {PatientsPage} from "../../patients.page";

const routes: Routes = [
  {
    path: '',
    component: AddPatientPage
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
export class AddPatientPageRoutingModule {}
