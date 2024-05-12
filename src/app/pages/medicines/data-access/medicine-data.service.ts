import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicineWithEffects} from "../models/MedicineWithEffects";
import {MedicineDto} from "../models/MedicineDto";
import {MedicineDtoWithId} from "../models/MedicineDtoWithid";
import {MedicineDtoWithEffects} from "../models/MedicineDtoWithEffects";
import {MedicineBaseWithEffect} from "../models/MedicineBaseWithEffect";
import {MedEffectResponse} from "../models/MedEffectResponse";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class MedicineDataService {

  private backendApi = environment.backendApiFromHost;
  //private backendApi = '10.0.2.2';

  private _baseUrl = `http://${this.backendApi}:5215/api/Medicine`;
  constructor(private _httpClient: HttpClient) {}

  public getAllMedicinesWithEffects(): Observable<Array<MedicineWithEffects>> {
    return this._httpClient.get<MedicineWithEffects[]>(this._baseUrl +'/AllMedsWithEffects');
  }

  public addMedicine(medicine: MedicineDto): Observable<MedicineDtoWithId>{
    return this._httpClient.post<MedicineDtoWithId>(`${this._baseUrl}`, medicine);
  }

  public deleteMedicine(brandName: string, genericName: string): Observable<any>{
    let params = new HttpParams()
      .set('brandName', brandName)
      .set('genericName', genericName);
    return this._httpClient.delete(`${this._baseUrl}`, {params: params});
  }

  public getMedEffects(brandName: string, genericName: string): Observable<MedicineDtoWithEffects> {
    let params = new HttpParams()
      .set('brandName', brandName)
      .set('genericName', genericName);

    return this._httpClient.get<MedicineDtoWithEffects>(`${this._baseUrl}` + '/AllEffectsForMed', {params: params});
  }

  public addMedEffect(medWithEffect: MedicineBaseWithEffect): Observable<MedEffectResponse> {
    return this._httpClient.post<MedEffectResponse>(`${this._baseUrl}`+'/AddMedEffect', medWithEffect)
  }

  public getMedOnly(brandName: string, genericName: string): Observable<MedicineDtoWithId> {
    let params = new HttpParams()
      .set('brandName', brandName)
      .set('genericName', genericName);
    return this._httpClient.get<MedicineDtoWithId>(`${this._baseUrl}`,{params: params});
  }

  public updateMedicine(medicine: MedicineDtoWithId): Observable<MedicineDto>{
    return this._httpClient.put<MedicineDto>(`${this._baseUrl}`+'/UpdateMedicine', medicine);
  }

  public deleteMedEffect(effectId: number): Observable<any> {
    return this._httpClient.delete(`${this._baseUrl}`+`/DeleteEffect/${effectId}`);
  }
}
