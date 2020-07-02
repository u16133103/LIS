import { Component, OnInit } from '@angular/core';
import { EmployeeTypeService } from 'src/app/shared/employee-type.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {

  constructor(public service : EmployeeTypeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Employee_Type_ID: null,
    Employee_Type_Name: '',
    Employee_Type_Description: '',
  };
}

onSubmit(form : NgForm){
  if(form.value.Employee_Type_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postEmployeeType(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Employee Type');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putEmployeeType(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','EmployeeType');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
