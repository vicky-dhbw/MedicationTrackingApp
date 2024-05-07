import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MedicationScheduleService} from "../../../patients/data-access/medication-schedule.service";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {MedicationScheduleDto} from "../../models/MedicationScheduleDto";

@Component({
  selector: 'app-edit-medication',
  templateUrl: './edit-medication.page.html',
  styleUrls: ['./edit-medication.page.scss'],
})
export class EditMedicationPage implements OnInit {

  medicationForm: FormGroup;
  private scheduleId: number = 0;
  private medicineId: number = 0;

  constructor(private medicationScheduleService: MedicationScheduleService,
              private snackbarService: SnackbarService,
              private route: ActivatedRoute,
              private router: Router)
  {
    this.medicationForm = new FormGroup({
      timeCategory: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.scheduleId = +param['scheduleId'];
    });

    this.medicationScheduleService.getMedicationScheduleById(this.scheduleId).subscribe({
      next: (medication) => {
        this.medicationForm.setValue({
          timeCategory: medication.timeCategory,
          dosage: medication.dosage,
          start: medication.start,
          end: medication.end,
        });

        this.medicineId = medication.medicineId;
      },
      error: (error) => {console.log(error)}
    })
  }

  async onSubmit(){
    if(this.medicationForm.valid)
    {
      const formPayload = {
        ...this.medicationForm.value,
        scheduleId: this.scheduleId,
        medicineId: this.medicineId,
      }

      this.medicationScheduleService.postEditedMedicationSchedule(formPayload).subscribe({
        next: async (response) => {
          await this.snackbarService.presentToast('Medication schedule successfully updated!', 'success');
          this.medicationForm.reset();
          await this.router.navigate(['/schedule-medication']);
        },
        error: async (error) => {
          console.log(error);
          await this.snackbarService.presentToast("Error updating medication schedule schedule!", "danger");
        }
      })
    }
    else {
      console.error('Form is not valid');
      await this.snackbarService.presentToast('There was an error!', 'danger');
    }
  }

}
