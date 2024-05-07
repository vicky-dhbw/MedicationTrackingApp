import {PatientNoDof} from "./PatientNoDof";
import {MedicineScheduleBase} from "./MedicineScheduleBase";
import {MedInfoScheduleBase} from "./MedInfoScheduleBase";

export interface PatientMedSchedulesDto{
  patient: PatientNoDof,
  medicineSchedules: MedInfoScheduleBase[],
}
