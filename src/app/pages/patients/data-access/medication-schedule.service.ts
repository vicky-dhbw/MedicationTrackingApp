import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicineSchedule} from "../models/MedicineSchedule";
import {PatientScheduledMeds} from "../models/PatientScheduledMeds";
import {MedAdminLogDto} from "../models/MedAdminLogDto";
import {MedAdminConfirmDto} from "../models/MedAdminConfirmDto";

@Injectable({
  providedIn: 'root'
})
export class MedicationScheduleService {
  private _baseUrl = 'http://localhost:5215/api/MedicineScheduling';

  constructor(private _http: HttpClient) { }

  public getAllMedSchedulesForPatient(patientId: number): Observable<PatientScheduledMeds>{
    return this._http.get<PatientScheduledMeds>(`${this._baseUrl}/AllMedForPatient/${patientId}`);
  }

  public getMedAdminLogs(scheduleId: number): Observable<MedAdminLogDto>{
    return this._http.get<MedAdminLogDto> (`http://localhost:5215/api/MedAdministrationLog/${scheduleId}`);
  }

  public confirmMedAdministered(MedAdminConfirmDto : MedAdminConfirmDto): Observable<MedAdminLogDto> {
    return this._http.post<MedAdminLogDto> (`http://localhost:5215/api/MedAdministrationLog`, MedAdminConfirmDto);
  }

}
