import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype.service';
import { Agenttype } from 'src/app/shared/agenttype.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenttype-list',
  templateUrl: './agenttype-list.component.html',
  styleUrls: ['./agenttype-list.component.css']
})
export class AgenttypeListComponent implements OnInit {

  constructor(public service : AgenttypeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(at : Agenttype){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteAgenttype(id).subscribe(res =>{
    this.service.refreshList();
    this.toastr.info('Deleted Successfully.','Agent Type');
  })
}
}

}
