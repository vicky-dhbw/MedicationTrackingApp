import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsPage } from './patients.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsPage
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./features/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'edit-patient/:id',
    loadChildren: () => import('./features/edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },
  {
    path: 'medication-schedule',
    loadChildren: () => import('./features/medication-schedule/medication-schedule.module').then( m => m.MedicationSchedulePageModule)
  },
  {
    path: 'med-admin-log',
    loadChildren: () => import('./features/med-admin-log/med-admin-log.module').then( m => m.MedAdminLogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsPageRoutingModule {}
