import {PatientDtoRequest} from "./PatientDtoRequest";

export interface PatientDtoWithId extends PatientDtoRequest{
  patientId: number;
}
