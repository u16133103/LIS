import { Injectable } from '@angular/core';
import { EmployeeType } from './employee-type.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  formData : EmployeeType;
  list : EmployeeType[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postEmployeeType(formData: EmployeeType){
    return this.http.post(this.rootURL+'/EmployeeType',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/EmployeeType')
    .toPromise().then(res => this.list = res as EmployeeType[]);
  }

  putEmployeeType(formData: EmployeeType){
    return this.http.put(this.rootURL+'/EmployeeType/'+formData.Employee_Type_ID,formData);
  }

  deleteEmployeeType(id : number){
    return this.http.delete(this.rootURL+'/AgenEmployeeTypet_Type/'+id);
  }
}
