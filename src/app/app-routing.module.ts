import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    loadChildren: () => import('./pages/patients/patients.module').then( m => m.PatientsPageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('./pages/medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'schedule-medication',
    loadChildren: () => import('./pages/schedule-medication/schedule-medication.module').then( m => m.ScheduleMedicationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
