import { Component, OnInit } from '@angular/core';
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {MedicineDtoWithId} from "../../models/MedicineDtoWithid";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.page.html',
  styleUrls: ['./edit-medicine.page.scss'],
})
export class EditMedicinePage implements OnInit {

  public genericName: string = '';
  public brandName: string = '';
  public medicineId: number = 0;
  medicine: Observable<MedicineDtoWithId> = new Observable<MedicineDtoWithId>();

  medicineForm: FormGroup;
  constructor(
    private medicineDataService: MedicineDataService,
    private router: Router,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    )
  {
    this.medicineForm = new FormGroup({
      brandName: new FormControl('', Validators.required),
      genericName: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      form: new FormControl('', Validators.required),
      administrationMethod: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.brandName = params['brandName'];
      this.genericName = params['genericName'];
    });

    this.medicineDataService.getMedOnly(this.brandName, this.genericName).subscribe({
      next: (medicine) => {
        this.medicineForm.setValue({
          brandName: medicine.brandName,
          genericName: medicine.genericName,
          color: medicine.color,
          form: medicine.form,
          administrationMethod: medicine.administrationMethod,
        });
        this.medicineId = medicine.medicineId;
      },
      error: (error) => {console.log(error)}
    })

  }

  async onSubmit() {
    if(this.medicineForm.valid)
    {
      const formPayload = {
        ...this.medicineForm.value,
        medicineId: this.medicineId,
      }

      this.medicineDataService.updateMedicine(formPayload).subscribe({
        next: async (response) => {
          console.log('Medicine successfully updated!', response);
          await this.snackbarService.presentToast('Medicine successfully updated!', 'success');
          this.medicineForm.reset();
          await this.router.navigate(['medicines'])
        },
        error: async (error) => {
          console.error(error);
          await this.snackbarService.presentToast('There was an error!', 'danger');
        }
      })
    }
    else {
      console.error('Form is not valid');
      await this.snackbarService.presentToast('There was an error!', 'danger');
    }
  }
}
