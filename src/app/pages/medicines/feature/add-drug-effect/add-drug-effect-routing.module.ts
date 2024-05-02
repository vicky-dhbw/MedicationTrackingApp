import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDrugEffectPage } from './add-drug-effect.page';

const routes: Routes = [
  {
    path: '',
    component: AddDrugEffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDrugEffectPageRoutingModule {}
