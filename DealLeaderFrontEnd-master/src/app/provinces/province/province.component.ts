import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/shared/province.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  constructor(public service : ProvinceService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Province_ID: null,
    Province_Name: '',
  };
}

onSubmit(form : NgForm){
  if(form.value.Province_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postProvince(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Province');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putProvince(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Province');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
