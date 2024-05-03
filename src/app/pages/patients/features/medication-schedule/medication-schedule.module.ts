import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicationSchedulePageRoutingModule } from './medication-schedule-routing.module';

import { MedicationSchedulePage } from './medication-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicationSchedulePageRoutingModule
  ],
  declarations: [MedicationSchedulePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicationSchedulePageModule {}
