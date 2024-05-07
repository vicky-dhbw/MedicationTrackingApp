import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleMedicationPageRoutingModule } from './schedule-medication-routing.module';

import { ScheduleMedicationPage } from './schedule-medication.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ScheduleMedicationPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ScheduleMedicationPage]
})
export class ScheduleMedicationPageModule {}
