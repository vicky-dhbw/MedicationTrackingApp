import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDrugEffectPage } from './add-drug-effect.page';
import {MedicineEffectsPage} from "../medicine-effects/medicine-effects.page";

const routes: Routes = [
  {
    path: '',
    component: AddDrugEffectPage
  },
  {
    path: 'medicine-effects',
    component: MedicineEffectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDrugEffectPageRoutingModule {}
