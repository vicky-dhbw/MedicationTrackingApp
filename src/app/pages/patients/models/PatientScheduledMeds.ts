import {MedicineSchedule} from "./MedicineSchedule";
import {PatientNoDof} from "./PatientNoDof";

export interface PatientScheduledMeds{
  patient: PatientNoDof;
  medicineSchedules: MedicineSchedule[]
}
