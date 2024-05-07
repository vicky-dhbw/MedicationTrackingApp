import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MedicineWithEffects} from "../../../medicines/models/MedicineWithEffects";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";
import {MedicineDataService} from "../../../medicines/data-access/medicine-data.service";
import {MedicationScheduleService} from "../../../patients/data-access/medication-schedule.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.page.html',
  styleUrls: ['./add-medication.page.scss'],
})
export class AddMedicationPage implements OnInit {

  medicationForm: FormGroup;
  medicines$: Observable<Array<MedicineWithEffects>> = new Observable<Array<MedicineWithEffects>>();
  patientId: number = 0;

  constructor(private medicationScheduleService: MedicationScheduleService,
              private medicineDataService: MedicineDataService,
              private snackbarService: SnackbarService,
              private route: ActivatedRoute,
              private router: Router) {
    this.medicationForm = new FormGroup({
      brandName: new FormControl('', Validators.required),
      genericName: new FormControl('', Validators.required),
      timeCategory: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    this.medicines$ = this.medicineDataService.getAllMedicinesWithEffects();
    this.route.queryParams.subscribe(param => {
      this.patientId= +param['patientId'];
    })
  }

  async onSubmit() {
    if(this.medicationForm.valid){
      const formPayLoad = {
        ...this.medicationForm.value,
        patientId: this.patientId
      };

      this.medicationScheduleService.addMedicationSchedule(formPayLoad).subscribe({
        next: async (response) => {
          await this.snackbarService.presentToast('Medication successfully added!', 'success');
          this.medicationForm.reset();
          await this.router.navigate(['/schedule-medication']);
        },
        error: async (error) => {
          console.log(error);
          await this.snackbarService.presentToast("Error adding medication", "danger");
        }
      })
    }
    else {
      await this.snackbarService.presentToast('Form is invalid. Fill up the form correctly!', 'danger');
    }
  }
}
