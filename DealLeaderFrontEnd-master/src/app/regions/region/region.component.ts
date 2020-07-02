import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/shared/region.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(public service : RegionService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Region_ID: null,
    Region_Name: '',
  };
}

onSubmit(form : NgForm){
  if(form.value.Region_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postRegion(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Region');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putRegion(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Region');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
