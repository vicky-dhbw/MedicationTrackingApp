import {MedicineBase} from "../../medicines/models/MedicineBase";

export interface MedicationSchedulePostDto extends MedicineBase{
  patientId: number;
  timeCategory: string;
  dosage: string;
  start: Date;
  end: Date;
}
