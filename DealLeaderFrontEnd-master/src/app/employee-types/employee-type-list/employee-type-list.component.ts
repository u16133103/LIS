import { Component, OnInit } from '@angular/core';
import { EmployeeTypeService } from 'src/app/shared/employee-type.service';
import { EmployeeType } from 'src/app/shared/employee-type.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.css']
})
export class EmployeeTypeListComponent implements OnInit {

  constructor(public service : EmployeeTypeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(at : EmployeeType){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteEmployeeType(id).subscribe(res =>{
    this.service.refreshList();
    this.toastr.info('Deleted Successfully.','EmployeeType');
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
