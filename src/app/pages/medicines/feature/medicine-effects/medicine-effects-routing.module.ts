import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineEffectsPage } from './medicine-effects.page';
import {AddDrugEffectPage} from "../add-drug-effect/add-drug-effect.page";

const routes: Routes = [
  {
    path: '',
    component: MedicineEffectsPage
  },
  {
    path: 'add-drug-effect',
    component: AddDrugEffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineEffectsPageRoutingModule {}
