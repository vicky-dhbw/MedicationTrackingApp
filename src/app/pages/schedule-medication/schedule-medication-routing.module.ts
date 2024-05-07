import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleMedicationPage } from './schedule-medication.page';
import {MedicineEffectsPage} from "../medicines/feature/medicine-effects/medicine-effects.page";

const routes: Routes = [
  {
    path: '',
    component: ScheduleMedicationPage
  },
  {
    path: 'edit-medication',
    loadChildren: () => import('./features/edit-medication/edit-medication.module').then( m => m.EditMedicationPageModule)
  },
  {
    path: 'add-medication',
    loadChildren: () => import('./features/add-medication/add-medication.module').then( m => m.AddMedicationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleMedicationPageRoutingModule {}
