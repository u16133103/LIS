import { Injectable } from '@angular/core';
import { Agenttype } from './agenttype.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenttypeService {

  formData : Agenttype;
  list : Agenttype[];
  readonly rootURL ="https://localhost:44398/api"

  constructor(public http : HttpClient) { }

  postAgenttype(formData: Agenttype){
    return this.http.post(this.rootURL+'/Agent_Type',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Agent_Type')
    .toPromise().then(res => this.list = res as Agenttype[]);
  }

  putAgenttype(formData: Agenttype){
    return this.http.put(this.rootURL+'/Agent_Type/'+formData.Agent_Type_ID,formData);
  }

  deleteAgenttype(id : number){
    return this.http.delete(this.rootURL+'/Agent_Type/'+id);
  }
}
