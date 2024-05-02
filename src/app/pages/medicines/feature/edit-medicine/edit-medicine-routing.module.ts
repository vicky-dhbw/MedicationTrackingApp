import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMedicinePage } from './edit-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: EditMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMedicinePageRoutingModule {}
