import {MedicineDto} from "./MedicineDto";
import {MedicationEffect} from "./MedicationEffect";

export interface MedicineDtoWithEffects extends MedicineDto{
  medicationEffects: MedicationEffect[];
}
