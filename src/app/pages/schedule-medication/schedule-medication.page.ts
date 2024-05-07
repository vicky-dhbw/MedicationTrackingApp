import { Component, OnInit } from '@angular/core';
import {MedicationScheduleService} from "../patients/data-access/medication-schedule.service";
import {SnackbarService} from "../../GlobalServices/snackbar.service";
import {PatientMedSchedulesDto} from "../patients/models/PatientMedSchedulesDto";
import {BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, catchError,of} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-schedule-medication',
  templateUrl: './schedule-medication.page.html',
  styleUrls: ['./schedule-medication.page.scss'],
})
export class ScheduleMedicationPage implements OnInit {

  patientMedSchedulesSubject$ = new BehaviorSubject<PatientMedSchedulesDto | null>(null);
  searchControl = new FormControl('');
  patientMedSchedules$ = this.patientMedSchedulesSubject$.asObservable();


  constructor(private medicationScheduleService: MedicationScheduleService,
              private snackbarService: SnackbarService) { }

  ngOnInit() {

    this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Wait for 300ms pause in events
      distinctUntilChanged(), // Only proceed if the value has changed
      switchMap(qRCode =>
        qRCode ? this.medicationScheduleService.getAllMedSchedulesForPatient(qRCode.trim()).pipe(
          catchError(err => {
            this.snackbarService.presentToast('Error fetching data', 'danger');
            return of(null); // Return null on error
          })
        ) : of(null) // Return null if input is empty
      )
    ).subscribe(data => {
      console.log(data);
      this.patientMedSchedulesSubject$.next(data);
    })
  }

}
