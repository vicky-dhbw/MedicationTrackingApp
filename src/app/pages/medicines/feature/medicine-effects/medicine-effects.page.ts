import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {MedicineDtoWithEffects} from "../../models/MedicineDtoWithEffects";
import {Observable} from "rxjs";
import {SnackbarService} from "../../../../GlobalServices/snackbar.service";

@Component({
  selector: 'app-medicine-effects',
  templateUrl: './medicine-effects.page.html',
  styleUrls: ['./medicine-effects.page.scss'],
})
export class MedicineEffectsPage implements OnInit {

  public genericName: string = '';
  public brandName: string = '';
  medicineWithDrugEffects: Observable<MedicineDtoWithEffects> = new Observable<MedicineDtoWithEffects>();

  constructor(private route: ActivatedRoute,
              private medicineDataService: MedicineDataService,
              private snackbarService: SnackbarService,) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.genericName = params['genericName'];
      this.brandName = params['brandName'];

      this.loadMedicineEffects(this.brandName, this.genericName);
    });

  }

  deleteMedEffect(effectId: number) {
    this.medicineDataService.deleteMedEffect(effectId).subscribe({
      next: async () => {
        console.log("Medicine Effect deleted!")
        await this.snackbarService.presentToast('Medicine Effect successfully deleted', 'success');
        this.loadMedicineEffects(this.brandName, this.genericName);
      },
      error: async (error) => {
        console.error('Error deleting medicine effect:', error);
        await this.snackbarService.presentToast('Error deleting medicine effect:', error);
      }
    })
  }

  loadMedicineEffects(brandName: string, genericName: string) {
    this.medicineWithDrugEffects = this.medicineDataService.getMedEffects(this.brandName, this.genericName);
  }
}
