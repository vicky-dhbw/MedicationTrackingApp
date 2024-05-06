import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.page.html',
  styleUrls: ['./add-medicine.page.scss'],
})
export class AddMedicinePage implements OnInit {

  medicineForm: FormGroup;
  constructor(
    private medicineDataService: MedicineDataService,
    private router: Router,
    private snackbarService: SnackbarService,)
  {
    this.medicineForm = new FormGroup({
    brandName: new FormControl('', Validators.required),
    genericName: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    form: new FormControl('', Validators.required),
    administrationMethod: new FormControl('', Validators.required)
  });}

  ngOnInit() {
  }

  async onSubmit(){
    // @ts-ignore
    if (this.medicineForm.valid) {
      this.medicineDataService.addMedicine(this.medicineForm.value).subscribe({
        next: async (response) => {
          console.log('Medicine created', response);
          await this.snackbarService.presentToast('Medicine created successfully', 'success');
          this.medicineForm.reset();
          await this.router.navigate(['medicines'])

          // Optionally, navigate to another page or show success message
        },
        error: async (error) => {
          console.error('Error creating medicine:', error);
          await this.snackbarService.presentToast(error, 'danger');
        }
      });
    } else {
      console.error('Form is not valid');
      await this.snackbarService.presentToast('There was an error!', 'danger');
    }
  }
}
