import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesPage } from './medicines.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesPage
  },
  {
    path: 'add-medicine',
    loadChildren: () => import('./feature/add-medicine/add-medicine.module').then( m => m.AddMedicinePageModule)
  },
  {
    path: 'medicine-effects',
    loadChildren: () => import('./feature/medicine-effects/medicine-effects.module').then( m => m.MedicineEffectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesPageRoutingModule {}
