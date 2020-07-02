import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/country.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(public service : CountryService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
this.resetForm();
  }



resetForm(form? : NgForm){
  if(form != null)
  form.resetForm();
  this.service.formData = {
    Country_ID: null,
    Country_Name: '',
  };
}

onSubmit(form : NgForm){
  if(form.value.Country_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postCountry(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Country');
  this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putCountry(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Country');
    this.resetForm(form);
    this.service.refreshList();
  })
}}

}
