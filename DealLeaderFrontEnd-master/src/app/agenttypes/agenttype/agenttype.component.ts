import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenttype',
  templateUrl: './agenttype.component.html',
  styleUrls: ['./agenttype.component.css']
})
export class AgenttypeComponent implements OnInit {

  constructor(public service : AgenttypeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Agent_Type_ID: null,
    Agent_Type_Name: '',
    Agent_Type_Description: '',
  };
}

onSubmit(form : NgForm){
  if(form.value.Agent_Type_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postAgenttype(form.value).subscribe(res => {
  this.toastr.success('Inserted Successfully.','Agent Type');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putAgenttype(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Agent Type');
    this.resetForm(form);
    this.service.refreshList();
  })
}}}
