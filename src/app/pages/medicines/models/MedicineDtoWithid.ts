import {MedicineDto} from "./MedicineDto";

export interface MedicineDtoWithId extends MedicineDto{
  medicineId: number;
}
