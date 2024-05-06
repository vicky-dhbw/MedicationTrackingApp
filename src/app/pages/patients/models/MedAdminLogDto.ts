import {MedAdminConfirmDto} from "./MedAdminConfirmDto";

export interface MedAdminLogDto extends MedAdminConfirmDto{
  medLogId: number;
  medAdminTime: Date,
}
