import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientScheduledMeds} from "../models/PatientScheduledMeds";
import {MedAdminLogDto} from "../models/MedAdminLogDto";
import {MedAdminConfirmDto} from "../models/MedAdminConfirmDto";
import {PatientMedSchedulesDto} from "../models/PatientMedSchedulesDto";
import {MedicationScheduleDto} from "../../schedule-medication/models/MedicationScheduleDto";
import {MedicineScheduleBase} from "../models/MedicineScheduleBase";
import {MedicationSchedulePostDto} from "../../schedule-medication/models/MedicationSchedulePostDto";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class MedicationScheduleService {

  //private backendApi = environment.backendApiFromHost;
  private backendApi = '10.0.2.2';

  private _baseUrl = `http://${this.backendApi}:5215/api/MedicineScheduling`;

  constructor(private _http: HttpClient) { }

  public getAllMedSchedulesForPatientForToday(patientId: number): Observable<PatientScheduledMeds>{
    return this._http.get<PatientScheduledMeds>(`${this._baseUrl}/AllMedsForPatient/${patientId}/Today`);
  }

  public confirmMedAdministered(MedAdminConfirmDto : MedAdminConfirmDto): Observable<MedAdminLogDto> {
    return this._http.post<MedAdminLogDto> (`http://${this.backendApi}:5215/api/MedAdministrationLog`, MedAdminConfirmDto);
  }

  public getAllMedSchedulesForPatient(qRCode: string): Observable<PatientMedSchedulesDto> {
    return this._http.get<PatientMedSchedulesDto> (`${this._baseUrl}/AllMedsForPatient/${qRCode}`)
  }

  public getMedicationScheduleById(scheduleId: number) : Observable<MedicationScheduleDto>
  {
    return this._http.get<MedicationScheduleDto> (`${this._baseUrl}/${scheduleId}`);
  }

  public postEditedMedicationSchedule(medicationSchedule: MedicineScheduleBase) : Observable<MedicationScheduleDto>
  {
    return this._http.put<MedicationScheduleDto> (`${this._baseUrl}/EditMedSchedule`, medicationSchedule);
  }

  public addMedicationSchedule(medicineSchedule: MedicationSchedulePostDto): Observable<MedicationScheduleDto>
  {
    return this._http.post<MedicationScheduleDto>(`${this._baseUrl}`, medicineSchedule);
  }
}
