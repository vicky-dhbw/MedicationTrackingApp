import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MedicationScheduleService} from "../../data-access/medication-schedule.service";
import {PatientScheduledMeds} from "../../models/PatientScheduledMeds";
import {Observable} from "rxjs";
import {AlertController, AlertInput, ViewWillEnter} from '@ionic/angular';
import {MedicineSchedule} from "../../models/MedicineSchedule";
import {MedAdminConfirmDto} from "../../models/MedAdminConfirmDto";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-medication-schedule',
  templateUrl: './medication-schedule.page.html',
  styleUrls: ['./medication-schedule.page.scss'],
})
export class MedicationSchedulePage implements OnInit, ViewWillEnter {

  patientId: number =0;
  medSchedules$: Observable<PatientScheduledMeds> = new Observable<PatientScheduledMeds>();
  constructor(private route: ActivatedRoute,
              private medicationScheduleService: MedicationScheduleService,
              private alertController: AlertController,
              private snackbarService: SnackbarService,) { }

  public alertButtons = [{
    text: 'Confirm',
    handler: (description : { [x: string]: any }) => {
      console.log(description[0]);
      return description;
    }
  }];

  private alertInputs: AlertInput[] = [{
    type: 'textarea',
    placeholder: 'A little about the medication administered',
  }];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.patientId = params['patientId'];
    })

    console.log(this.patientId);

    this.medSchedules$ = this.medicationScheduleService.getAllMedSchedulesForPatientForToday(this.patientId);

  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.patientId = parseInt(params['patientId'], 10);
      if (this.patientId) {
        console.log('Fetching schedules for patient ID:', this.patientId);
        this.medSchedules$ = this.medicationScheduleService.getAllMedSchedulesForPatientForToday(this.patientId);
      }
    });
  }

  async presentSkippedAlert(medicationSchedule: MedicineSchedule)
  {
    const alert = await this.alertController.create({
      header: medicationSchedule.medicineDto.brandName,
      subHeader: medicationSchedule.medicineDto.genericName,
      message: 'Medication scheduled for ' +`${medicationSchedule.medicineScheduleBase.timeCategory}`+' was skipped.',
      buttons: ['Close'],
    });

    await alert.present();
  }

  async presentPendingAlert(medicationSchedule: MedicineSchedule)
  {
    const alert = await this.alertController.create({
      header: medicationSchedule.medicineDto.brandName,
      subHeader: medicationSchedule.medicineDto.genericName,
      inputs: this.alertInputs,
      buttons: this.alertButtons,
      message: 'Scheduled ' + `${medicationSchedule.medicineScheduleBase.timeCategory}`,
    })

    await alert.present();

    const description = await alert.onWillDismiss()
    const medLogConfirm: MedAdminConfirmDto = {
      scheduleId : medicationSchedule.medicineScheduleBase.scheduleId,
      medAdminStatus : 1,
      medAdminNote : description.data[0]
    }
    this.medicationScheduleService.confirmMedAdministered(medLogConfirm).subscribe({
      next: async (response) => {
        await this.snackbarService.presentToast('Successfully confirmed', 'success');
        this.medSchedules$ = this.medicationScheduleService.getAllMedSchedulesForPatientForToday(this.patientId);
      },
      error: async (error) =>{
        await this.snackbarService.presentToast(error, 'danger');
      }
    })
  }

  async presentDoneAlert(medicationSchedule: MedicineSchedule)
  {
    const alert = await this.alertController.create({
      header: medicationSchedule.medicineDto.brandName,
      subHeader: medicationSchedule.medicineDto.genericName,
      message: 'Medication scheduled for ' +`${medicationSchedule.medicineScheduleBase.timeCategory}`+' was administered. Noted: ' + `${medicationSchedule.medAdministrationLog.medAdminNote}`,
      buttons: ['Close'],
    });

    await alert.present();
  }

}
