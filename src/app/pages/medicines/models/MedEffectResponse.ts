import {MedicationEffect} from "./MedicationEffect";

export interface MedEffectResponse extends MedicationEffect{
  medicineId: number,
  effectId: number,
}
