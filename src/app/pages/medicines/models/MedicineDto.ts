import {MedicineBase} from "./MedicineBase";

export interface MedicineDto extends MedicineBase{
  color: string;
  form: string;
  administrationMethod: string;
}
