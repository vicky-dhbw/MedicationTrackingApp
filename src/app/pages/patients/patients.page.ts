import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {PatientDtoWithId} from "./models/PatientDtoWithId";
import {PatientDataService} from "./data-access/patient-data.service";
import {FormControl} from "@angular/forms";
import {ViewWillEnter} from '@ionic/angular';
import {SnackbarService} from "../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit, ViewWillEnter {

  searchControl = new FormControl(''); // initializing with no value
  private patientsSubject = new BehaviorSubject<Array<PatientDtoWithId>>([]);
  patients$: Observable<Array<PatientDtoWithId>> = this.patientsSubject.asObservable();
  filteredPatients$: Observable<Array<PatientDtoWithId>> = new Observable<Array<PatientDtoWithId>>();

  constructor(public patientDataService: PatientDataService, private snackbarService: SnackbarService,) {}

  public async ngOnInit() {
    this.loadPatients();
    this.setupFilter();
  }

  private setupFilter() {
    this.filteredPatients$ = this.searchControl.valueChanges.pipe(
      startWith(''), // Initialize stream with no filter
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged(), // Only emit when the term changes
      map(term => term ?? ''), // Ensure term is never null
      switchMap(term => this.applyFilter(term))
    );
  }

  private applyFilter(term: string): Observable<Array<PatientDtoWithId>> {
    return this.patients$.pipe(
      map(patients => patients.filter(patient =>
        patient.firstName.toLowerCase().includes(term.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }


  loadPatients() {
    this.patientDataService.getPatients().subscribe(patients => {
      this.patientsSubject.next(patients); // Updating BehaviorSubject with new data
    });
  }

  deletePatient(id: number) {
    this.patientDataService.deletePatient(id).subscribe({
      next: async () => {
        await this.snackbarService.presentToast('Patient successfully deleted', 'success');
        this.loadPatients(); // Reload the list after deletion
      },
      error: async (error) => {
        console.error('Error deleting patient:', error);
        await this.snackbarService.presentToast('Error deleting patient', 'danger');
      }
    });
  }

  ionViewWillEnter() {
    this.loadPatients();  // Refresh data every time the view enters
  }
}
