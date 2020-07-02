import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/shared/region.service';
import { Region } from 'src/app/shared/region.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  constructor(public service : RegionService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(at : Region){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteRegion(id).subscribe(res =>{
    this.service.refreshList();
    this.toastr.info('Deleted Successfully.','Region');
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
