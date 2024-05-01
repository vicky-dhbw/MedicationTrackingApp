import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {Router} from "@angular/router";

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
    private toastController: ToastController)
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
          await this.presentToast('Medicine created successfully', 'success');
          this.medicineForm.reset();
          await this.router.navigate(['medicines'])

          // Optionally, navigate to another page or show success message
        },
        error: async (error) => {
          console.error('Error creating medicine:', error);
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
