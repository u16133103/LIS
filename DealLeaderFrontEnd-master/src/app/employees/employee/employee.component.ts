import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service : EmployeeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Employee_ID: null,
    Employee_Name: "",
    Employee_Surname: "",
    Employee_ID_NO: "",
    Employee_Passport_NO: "",
    Employee_Physical_Address: "",
    Employee_Contact_NO: "",
    Employee_Email_Address: "",
  };
}

onSubmit(form : NgForm){
  if(form.value.Employee_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postEmployee(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Employee');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putEmployee(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Employee');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
