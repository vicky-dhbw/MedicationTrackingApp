import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicineSchedulesPageRoutingModule } from './medicine-schedules-routing.module';

import { MedicineSchedulesPage } from './medicine-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicineSchedulesPageRoutingModule
  ],
  declarations: [MedicineSchedulesPage]
})
export class MedicineSchedulesPageModule {}
