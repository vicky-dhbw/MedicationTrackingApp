import {MedicationEffect} from "./MedicationEffect";
import {MedicineDtoWithId} from "./MedicineDtoWithid";

export interface MedicineWithEffects extends MedicineDtoWithId{
  medicationEffects: MedicationEffect[];
}
