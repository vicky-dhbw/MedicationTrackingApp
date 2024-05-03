export interface MedicineScheduleBase{
  scheduleId: number;
  medicineId: number;
  timeCategory: string;
  dosage: string;
  start: Date;
  end: Date;
}
