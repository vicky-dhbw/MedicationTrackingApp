import {MedicineScheduleBase} from "./MedicineScheduleBase";
import {MedicineDto} from "../../medicines/models/MedicineDto";

export interface MedicineSchedule {
  medicineDto: MedicineDto,
  medicineScheduleBase: MedicineScheduleBase,
}
