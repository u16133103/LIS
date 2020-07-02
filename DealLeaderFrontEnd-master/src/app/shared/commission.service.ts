import { Injectable } from '@angular/core';
import { Commision } from './commision.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  formData : Commision;
  list : Commision[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postCommision(formData: Commision){
    return this.http.post(this.rootURL+'/Commission',formData);
    //return this.http.get(this.rootURL+'/Commission');

  }

  refreshList(){
    this.http.get(this.rootURL+'/Commission')
    .toPromise().then(res => this.list = res as Commision[]);
  }

  putCommision(formData: Commision){
    return this.http.put(this.rootURL+'/Commission/'+formData.Commision_ID,formData);
    //return this.http.get(this.rootURL+'/Commission/'+formData.Commision_ID);
  }

  deleteCommision(id : number){
    return this.http.delete(this.rootURL+'/Commission/'+id);
  }
}
