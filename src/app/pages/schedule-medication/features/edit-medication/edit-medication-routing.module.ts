import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMedicationPage } from './edit-medication.page';

const routes: Routes = [
  {
    path: '',
    component: EditMedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMedicationPageRoutingModule {}
