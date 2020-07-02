import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/shared/province.service';
import { Province } from 'src/app/shared/province.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {

  constructor(public service : ProvinceService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(at : Province){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteProvince(id).subscribe(res =>{
    this.service.refreshList();
    this.toastr.info('Deleted Successfully.','Province');
  })
}
}

myFunction(){
  // Declare variables 
  var input, filter, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td") ; 
    for(j=0 ; j<td.length ; j++)
    {
      let tdata = td[j] ;
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break ; 
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}
}
