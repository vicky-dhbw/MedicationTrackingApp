import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedAdminLogPageRoutingModule } from './med-admin-log-routing.module';

import { MedAdminLogPage } from './med-admin-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedAdminLogPageRoutingModule
  ],
  declarations: [MedAdminLogPage]
})
export class MedAdminLogPageModule {}
