import {MedAdminLogDto} from "./MedAdminLogDto";
import {MedInfoScheduleBase} from "./MedInfoScheduleBase";

export interface MedicineSchedule extends MedInfoScheduleBase{
  medAdministrationLog: MedAdminLogDto
}
