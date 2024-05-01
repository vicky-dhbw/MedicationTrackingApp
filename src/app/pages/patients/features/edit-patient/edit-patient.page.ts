import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientDataService} from "../../data-access/patient-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {PatientDtoRequest} from "../../models/PatientDtoRequest";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.page.html',
  styleUrls: ['./edit-patient.page.scss'],
})
export class EditPatientPage implements OnInit {

  patientForm: FormGroup;
  patientId: number | undefined;

  constructor(public patientDataService: PatientDataService,
              private router: Router,
              private toastController: ToastController,
              private route: ActivatedRoute,
              ) {
    this.patientForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      roomNo: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.patientId = +this.route.snapshot.params['id'];  // Retrieve ID from route
    console.log(this.patientId)
    if (this.patientId) {
      this.patientDataService.getPatientById(this.patientId).subscribe({
        next: (patient) => {
          this.patientForm.setValue({
            firstName: patient.firstName,
            lastName: patient.lastName,
            gender: patient.gender,
            roomNo: patient.roomNo,
            dateOfBirth: patient.dateOfBirth  // Ensure this is formatted appropriately
          });
        },
        error: (err) => console.error(err)
      });
    }
  }

  async onSubmit() {
    // @ts-ignore
    if (this.patientForm.valid) {
      const formData = {
        ...this.patientForm.value,
        dateOfBirth: this.patientForm.value.dateOfBirth ? new Date(this.patientForm.value.dateOfBirth).toISOString() : null,
        patientId: this.patientId
      };

      this.patientDataService.editPatient(formData).subscribe({
        next: async (response) => {
          console.log('Patient updated:', response);
          await this.presentToast('Patient info successfully updated', 'success');
          this.patientForm.reset();
          await this.router.navigate(['patients'])

        },
        error: async (error) => {
          console.error('Error editing patient info:', error);
          await this.presentToast(error, 'danger');
        }
      });
    } else {
      console.error('Form is not valid');
      await this.presentToast('There was an error!', 'danger');
    }
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
