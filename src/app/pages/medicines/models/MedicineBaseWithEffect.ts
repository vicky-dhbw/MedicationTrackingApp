import {MedicineBase} from "./MedicineBase";
import {MedicationEffect} from "./MedicationEffect";

export interface MedicineBaseWithEffect extends MedicineBase, MedicationEffect{}
