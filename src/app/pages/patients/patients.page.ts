import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {PatientDtoWithId} from "./models/PatientDtoWithId";
import {PatientDataService} from "./data-access/patient-data.service";
import {FormControl} from "@angular/forms";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  searchControl = new FormControl(''); // initializing with no value
  patients$: Observable<Array<PatientDtoWithId>> = new Observable<Array<PatientDtoWithId>>();
  filteredPatients$: Observable<Array<PatientDtoWithId>> = new Observable<Array<PatientDtoWithId>>();

  constructor(public patientDataService: PatientDataService, private toastController: ToastController) {}

  public async ngOnInit() {
    this.patients$ = this.patientDataService.getPatients();

    this.patients$.subscribe({
      next: value => console.log(value),
      error: err => console.error(`Error: ${err}`),
    })

    this.filteredPatients$ = this.searchControl.valueChanges.pipe(
      startWith(''), // Initialize stream with no filter
      debounceTime(300), // Wait for 300ms after the last event before considering the term
      distinctUntilChanged(), // Only emit when the current search term is different from the last
      switchMap(term => term ? this.applyFilter(term) : this.patients$)
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
    this.filteredPatients$ = this.patientDataService.getPatients();
  }

  deletePatient(id: number) {
    this.patientDataService.deletePatient(id).subscribe({
      next: async () => {
        await this.presentToast('Patient successfully deleted', 'success');
        this.loadPatients(); // Reload the list after deletion
      },
      error: async (error) => {
        console.error('Error deleting patient:', error);
        await this.presentToast('Error deleting patient', 'danger');
      }
    });
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }
}
