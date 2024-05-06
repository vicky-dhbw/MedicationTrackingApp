import {MedicineScheduleBase} from "./MedicineScheduleBase";
import {MedicineDto} from "../../medicines/models/MedicineDto";
import {MedAdminLogDto} from "./MedAdminLogDto";

export interface MedicineSchedule {
  medicineDto: MedicineDto,
  medicineScheduleBase: MedicineScheduleBase,
  medAdministrationLog: MedAdminLogDto
}
