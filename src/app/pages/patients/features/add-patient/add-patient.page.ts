import { Component, OnInit } from '@angular/core';
import {PatientsPage} from "../../patients.page";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientDataService} from "../../data-access/patient-data.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  component = PatientsPage;

  patientForm: FormGroup;
  constructor(
    public patientDataService: PatientDataService,
    private router: Router,
    private snackbarService: SnackbarService,)
  {
    this.patientForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      roomNo: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
  }

  async onSubmit() {
    // @ts-ignore
    if (this.patientForm.valid) {
      this.patientDataService.postPatient(this.patientForm.value).subscribe({
        next: async (response) => {
          console.log('Patient edited:', response);
          await this.snackbarService.presentToast('Patient info successfully updated', 'success');
          this.patientForm.reset();
          await this.router.navigate(['patients'])

          // Optionally, navigate to another page or show success message
        },
        error: async (error) => {
          console.error('Error creating patient:', error);
          await this.snackbarService.presentToast(error, 'danger');
        }
      });
    } else {
      console.error('Form is not valid');
      await this.snackbarService.presentToast('There was an error!', 'danger');
    }
  }
}
