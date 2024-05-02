import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMedicinePageRoutingModule } from './edit-medicine-routing.module';

import { EditMedicinePage } from './edit-medicine.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditMedicinePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EditMedicinePage]
})
export class EditMedicinePageModule {}
