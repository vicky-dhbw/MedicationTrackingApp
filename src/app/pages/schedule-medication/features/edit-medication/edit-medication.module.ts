import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMedicationPageRoutingModule } from './edit-medication-routing.module';

import { EditMedicationPage } from './edit-medication.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditMedicationPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EditMedicationPage]
})
export class EditMedicationPageModule {}
