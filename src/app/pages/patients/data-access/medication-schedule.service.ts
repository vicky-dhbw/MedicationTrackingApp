import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicineSchedule} from "../models/MedicineSchedule";
import {PatientScheduledMeds} from "../models/PatientScheduledMeds";

@Injectable({
  providedIn: 'root'
})
export class MedicationScheduleService {
  private _baseUrl = 'http://localhost:5215/api/MedicineScheduling';

  constructor(private _http: HttpClient) { }

  public getAllMedSchedulesForPatient(patientId: number): Observable<PatientScheduledMeds>{
    return this._http.get<PatientScheduledMeds>(`${this._baseUrl}/AllMedForPatient/${patientId}`);
  }
}
