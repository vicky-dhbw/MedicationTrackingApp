import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDrugEffectPageRoutingModule } from './add-drug-effect-routing.module';

import { AddDrugEffectPage } from './add-drug-effect.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddDrugEffectPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AddDrugEffectPage]
})
export class AddDrugEffectPageModule {}
