import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'src/app/shared/commission.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  constructor(public service : CommissionService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Commision_ID: null,
    Commision_Percentage: null,
    Commision_Date: new Date(),
  };
}

onSubmit(form : NgForm){
  if(form.value.Commision_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postCommision(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Commision');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putCommision(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Commision');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
