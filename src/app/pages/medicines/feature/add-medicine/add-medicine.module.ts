import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMedicinePageRoutingModule } from './add-medicine-routing.module';

import { AddMedicinePage } from './add-medicine.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddMedicinePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AddMedicinePage]
})
export class AddMedicinePageModule {}
