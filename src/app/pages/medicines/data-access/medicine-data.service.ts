import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicineWithEffects} from "../models/MedicineWithEffects";
import {MedicineDto} from "../models/MedicineDto";
import {MedicineDtoWithId} from "../models/MedicineDtoWithid";

@Injectable({
  providedIn: 'root'
})
export class MedicineDataService {

  private _baseUrl = 'http://localhost:5215/api/Medicine';
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
}
