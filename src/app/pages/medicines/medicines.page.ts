import { Component, OnInit } from '@angular/core';
import {MedicineDataService} from "./data-access/medicine-data.service";
import {BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {MedicineWithEffects} from "./models/MedicineWithEffects";
import {FormControl} from "@angular/forms";
import {ToastController, ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit, ViewWillEnter {

  private medicinesSubject = new BehaviorSubject<Array<MedicineWithEffects>>([]);
  medicinesWithEffects$: Observable<Array<MedicineWithEffects>> = this.medicinesSubject.asObservable();
  filteredMedicinesWithEffects$: Observable<Array<MedicineWithEffects>> = new Observable<Array<MedicineWithEffects>>();
  searchControl = new FormControl('');


  constructor(public medicineDataService: MedicineDataService,  private toastController: ToastController) { }

  async ngOnInit() {
    this.loadMedicines();
    this.setupFilter();
  }

  private applyFilter(term: string): Observable<Array<MedicineWithEffects>> {
    return this.medicinesWithEffects$.pipe(
      map(medicines => medicines.filter(medicine =>
        medicine.genericName.toLowerCase().includes(term.toLowerCase()) ||
        medicine.brandName.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }

  private setupFilter() {
    this.filteredMedicinesWithEffects$ = this.searchControl.valueChanges.pipe(
      startWith(''), // Initialize stream with no filter
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged(), // Only emit when the term changes
      map(term => term ?? ''), // Ensure term is never null
      switchMap(term => this.applyFilter(term))
    );
  }

  loadMedicines(){
    this.medicineDataService.getAllMedicinesWithEffects().subscribe(m=>{
      this.medicinesSubject.next(m);
    })
  }

  deleteMedicine(brandName: string, genericName: string){
    this.medicineDataService.deleteMedicine(brandName, genericName).subscribe({
      next: async () => {
        await this.presentToast('Medicine successfully deleted', 'success');
        this.loadMedicines();
      },
      error: async (error) => {
        console.error('Error deleting medicine:', error);
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

  ionViewWillEnter() {
    this.loadMedicines();  // Refresh data every time the view enters
  }
}
