import { Injectable } from '@angular/core';
import { Region } from './region.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  formData : Region;
  list : Region[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postRegion(formData: Region){
    return this.http.post(this.rootURL+'/Region',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Region')
    .toPromise().then(res => this.list = res as Region[]);
  }

  putRegion(formData: Region){
    return this.http.put(this.rootURL+'/Region/'+formData.Region_ID,formData);
  }

  deleteRegion(id : number){
    return this.http.delete(this.rootURL+'/Region/'+id);
  }
}
