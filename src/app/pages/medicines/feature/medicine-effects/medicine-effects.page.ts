import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MedicineDataService} from "../../data-access/medicine-data.service";
import {MedicineDtoWithEffects} from "../../models/MedicineDtoWithEffects";
import {Observable} from "rxjs";

@Component({
  selector: 'app-medicine-effects',
  templateUrl: './medicine-effects.page.html',
  styleUrls: ['./medicine-effects.page.scss'],
})
export class MedicineEffectsPage implements OnInit {

  public genericName: string = '';
  public brandName: string = '';
  medicineWithDrugEffects: Observable<MedicineDtoWithEffects> = new Observable<MedicineDtoWithEffects>();

  constructor(private route: ActivatedRoute, private medicineDataService: MedicineDataService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.genericName = params['genericName'];
      this.brandName = params['brandName'];

      this.medicineWithDrugEffects = this.medicineDataService.getMedEffects(this.brandName, this.genericName);
    });

  }

  deleteMedEffect(effectId: number) {

  }
}
