import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineEffectsPage } from './medicine-effects.page';

const routes: Routes = [
  {
    path: '',
    component: MedicineEffectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineEffectsPageRoutingModule {}
