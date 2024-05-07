import {MedicineScheduleBase} from "../../patients/models/MedicineScheduleBase";

export interface MedicationScheduleDto extends MedicineScheduleBase{
  patientId: number;
}
