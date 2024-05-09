import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientDtoWithId} from "../models/PatientDtoWithId";
import {PatientDtoRequest} from "../models/PatientDtoRequest";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  //private backendApi = environment.backendApiFromHost;
  private backendApi = '10.0.2.2';

  private _baseUrl = `http://${this.backendApi}:5215/api/Patient`;

  constructor(private _http: HttpClient) { }

  public getPatients(): Observable<Array<PatientDtoWithId>>{
    return this._http.get<Array<PatientDtoWithId>>(this._baseUrl + '/AllPatients')
  }

  public postPatient(patient: PatientDtoRequest): Observable<PatientDtoWithId>{
    return this._http.post<PatientDtoWithId>(`${this._baseUrl}`, patient);
  }

  public deletePatient(id: number): Observable<any> {
    return this._http.delete(`${this._baseUrl}/${id}`);
  }

  public editPatient(patient: PatientDtoWithId): Observable<PatientDtoRequest> {
    return this._http.put<PatientDtoWithId>(`${this._baseUrl}`+'/UpdatePatientInfo', patient);
  }

  public getPatientById(id: number): Observable<PatientDtoWithId> {
    return this._http.get<PatientDtoWithId>(`${this._baseUrl}/${id}`);
  }
}
