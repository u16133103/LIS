import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryComponent } from './countries/country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionComponent } from './commissions/commission/commission.component';
import { CommissionListComponent } from './commissions/commission-list/commission-list.component';
import { EmployeeTypesComponent } from './employee-types/employee-types.component';
import { EmployeeTypeComponent } from './employee-types/employee-type/employee-type.component';
import { EmployeeTypeListComponent } from './employee-types/employee-type-list/employee-type-list.component';
import { ProvinceComponent } from './provinces/province/province.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { ProvinceListComponent } from './provinces/province-list/province-list.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './regions/region/region.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AgenttypeComponent } from './agenttypes/agenttype/agenttype.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { ViewRegionComponent } from './regions/view-region/view-region.component';
import { ViewProvinceComponent } from './provinces/view-province/view-province.component';
import { ViewCountryComponent } from './countries/view-country/view-country.component';
import { ViewCommissionsComponent } from './commissions/view-commissions/view-commissions.component';
import { ViewEmployeeTypeComponent } from './employee-types/view-employee-type/view-employee-type.component';

const routes: Routes = [
  {path: '', redirectTo: '/country-list', pathMatch: 'full'},
  {path: 'country-list', component: CountryListComponent},
  {path: 'country', component: CountryComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'commissions', component: CommissionsComponent},
  {path: 'commission', component: CommissionComponent},
  {path: 'commission-list', component: CommissionListComponent},
  {path: 'employee-types', component: EmployeeTypesComponent},
  {path: 'employee-type', component: EmployeeTypeComponent},
  {path: 'employee-type-list', component: EmployeeTypeListComponent},
  {path: 'provinces', component: ProvincesComponent},
  {path: 'province', component: ProvinceComponent},
  {path: 'province-list', component: ProvinceListComponent},
  {path: 'regions', component: RegionsComponent},
  {path: 'region', component: RegionComponent},
  {path: 'region-list', component: RegionListComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'agenttype', component: AgenttypeComponent},
  {path: 'view-employee', component: ViewEmployeeComponent},
  {path: 'view-region', component: ViewRegionComponent},
  {path: 'view-province', component: ViewProvinceComponent},
  {path: 'view-country', component: ViewCountryComponent},
  {path: 'view-commissions', component: ViewCommissionsComponent},
  {path: 'view-employee-type', component: ViewEmployeeTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
