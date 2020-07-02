import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenttypesComponent } from './agenttypes/agenttypes.component';
import { AgenttypeComponent } from './agenttypes/agenttype/agenttype.component';
import { AgenttypeListComponent } from './agenttypes/agenttype-list/agenttype-list.component';
import { AgenttypeService } from './shared/agenttype.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryComponent } from './countries/country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryService } from './shared/country.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionComponent } from './commissions/commission/commission.component';
import { CommissionListComponent } from './commissions/commission-list/commission-list.component';
import { CommissionService } from './shared/commission.service';
import { EmployeeService } from './shared/employee.service';
import { EmployeeTypesComponent } from './employee-types/employee-types.component';
import { EmployeeTypeComponent } from './employee-types/employee-type/employee-type.component';
import { EmployeeTypeListComponent } from './employee-types/employee-type-list/employee-type-list.component';
import { ProvinceComponent } from './provinces/province/province.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { ProvinceListComponent } from './provinces/province-list/province-list.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './regions/region/region.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { ViewCommissionsComponent } from './commissions/view-commissions/view-commissions.component';
import { ViewProvinceComponent } from './provinces/view-province/view-province.component';
import { ViewRegionComponent } from './regions/view-region/view-region.component';
import { ViewCountryComponent } from './countries/view-country/view-country.component';
import { ViewEmployeeTypeComponent } from './employee-types/view-employee-type/view-employee-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenttypesComponent,
    AgenttypeComponent,
    AgenttypeListComponent,
    CountryListComponent,
    CountryComponent,
    CountriesComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeeListComponent,
    CommissionsComponent,
    CommissionComponent,
    CommissionListComponent,
    EmployeeTypesComponent,
    EmployeeTypeComponent,
    EmployeeTypeListComponent,
    ProvinceComponent,
    ProvincesComponent,
    ProvinceListComponent,
    RegionsComponent,
    RegionComponent,
    RegionListComponent,
    ViewEmployeeComponent,
    ViewCommissionsComponent,
    ViewProvinceComponent,
    ViewRegionComponent,
    ViewCountryComponent,
    ViewEmployeeTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AgenttypeService, CountryService, CommissionService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
