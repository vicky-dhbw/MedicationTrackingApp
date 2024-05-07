import {MedicineDto} from "../../medicines/models/MedicineDto";
import {MedicineScheduleBase} from "./MedicineScheduleBase";

export interface MedInfoScheduleBase{
  medicineDto: MedicineDto,
  medicineScheduleBase: MedicineScheduleBase,
}
