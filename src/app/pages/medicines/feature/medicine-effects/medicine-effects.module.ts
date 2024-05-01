import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicineEffectsPageRoutingModule } from './medicine-effects-routing.module';

import { MedicineEffectsPage } from './medicine-effects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicineEffectsPageRoutingModule
  ],
  declarations: [MedicineEffectsPage]
})
export class MedicineEffectsPageModule {}
