import { Injectable } from '@angular/core';
import { Province } from './province.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  formData : Province;
  list : Province[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postProvince(formData: Province){
    return this.http.post(this.rootURL+'/Province',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Province')
    .toPromise().then(res => this.list = res as Province[]);
  }

  putProvince(formData: Province){
    return this.http.put(this.rootURL+'/Province/'+formData.Province_ID,formData);
  }

  deleteProvince(id : number){
    return this.http.delete(this.rootURL+'/Province/'+id);
  }
}
