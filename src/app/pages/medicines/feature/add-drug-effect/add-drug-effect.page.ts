import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-add-drug-effect',
  templateUrl: './add-drug-effect.page.html',
  styleUrls: ['./add-drug-effect.page.scss'],
})
export class AddDrugEffectPage implements OnInit {

  public genericName: string = '';
  public brandName: string = '';

  drugEffectForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private medicineDataService: MedicineDataService,
    private toastController: ToastController,
    private router: Router)
  {
    this.route.queryParams.subscribe(params => {
      this.genericName = params['genericName'];
      this.brandName = params['brandName'];
    });

    this.drugEffectForm = new FormGroup({
      gender: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.drugEffectForm.valid)
    {
      const formPayload = {
        ...this.drugEffectForm.value,
        genericName: this.genericName,
        brandName: this.brandName
      };

      console.log(formPayload);
      this.medicineDataService.addMedEffect(formPayload).subscribe({
        next: async (response) => {
          console.log('Drug effect created', response);
          await this.presentToast('Drug effect created successfully', 'success');
          this.drugEffectForm.reset();
          await this.router.navigate(['medicine-effects'])

        },
        error: async (error) => {
          console.error('Error creating drug effect:', error);
          await this.presentToast('Error creating drug effect', 'danger');
        }
      })
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
