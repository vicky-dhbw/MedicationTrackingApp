import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MedicationScheduleService} from "../../data-access/medication-schedule.service";
import {PatientScheduledMeds} from "../../models/PatientScheduledMeds";
import {Observable} from "rxjs";
import {ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-medication-schedule',
  templateUrl: './medication-schedule.page.html',
  styleUrls: ['./medication-schedule.page.scss'],
})
export class MedicationSchedulePage implements OnInit, ViewWillEnter {

  patientId: number =0;
  medSchedules$: Observable<PatientScheduledMeds> = new Observable<PatientScheduledMeds>();
  constructor(private route: ActivatedRoute, private medicationScheduleService: MedicationScheduleService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.patientId = params['patientId'];
    })

    console.log(this.patientId);

    this.medSchedules$ = this.medicationScheduleService.getAllMedSchedulesForPatient(this.patientId);

  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.patientId = parseInt(params['patientId'], 10);
      if (this.patientId) {
        console.log('Fetching schedules for patient ID:', this.patientId);
        this.medSchedules$ = this.medicationScheduleService.getAllMedSchedulesForPatient(this.patientId);
      }
    });
  }

}
