import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  formData : Country;
  list : Country[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postCountry(formData: Country){
    return this.http.post(this.rootURL+'/Country',formData);
    //return this.http.get(this.rootURL+'/Country');

  }

  refreshList(){
    this.http.get(this.rootURL+'/Country')
    .toPromise().then(res => this.list = res as Country[]);
  }

  putCountry(formData: Country){
    return this.http.put(this.rootURL+'/Country/'+formData.Country_ID,formData);
    //return this.http.get(this.rootURL+'/Country/'+formData.Country_ID);

  }

  deleteCountry(id : number){
    return this.http.delete(this.rootURL+'/Country/'+id);
  }
}
