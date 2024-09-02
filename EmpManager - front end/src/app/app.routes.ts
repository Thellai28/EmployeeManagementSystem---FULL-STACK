import { Routes } from '@angular/router';
import { HomeComponent } from './components/coreModules/home/home.component';
import { SearchEmployeeComponent } from './components/coreModules/search-employee/search-employee.component';
import { UpdateEmployeeFormComponent } from './components/forms/update-employee-form/update-employee-form.component';
import { AllEmployeesComponent } from './searchOptions/all-employees/all-employees.component';
import { ByDesignationComponent } from './searchOptions/by-designation/by-designation.component';
import { ByAgeComponent } from './searchOptions/by-age/by-age.component';
import { ByAgeRangeComponent } from './searchOptions/by-age-range/by-age-range.component';
import { BySalaryRangeComponent } from './searchOptions/by-salary-range/by-salary-range.component';
import { ByReportingToComponent } from './searchOptions/by-reporting-to/by-reporting-to.component';
import { ByDateOfJoiningRangeComponent } from './searchOptions/by-date-of-joining-range/by-date-of-joining-range.component';
import { BySalaryComponent } from './searchOptions/by-salary/by-salary.component';
import { CreateEmployeeComponent } from './components/coreModules/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/coreModules/update-employee/update-employee.component';
import { DisplayEmployeesComponent } from './components/coreModules/display-employees/display-employees.component';
import { ByDateOfJoiningComponent } from './searchOptions/by-date-of-joining/by-date-of-joining.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'update', component: UpdateEmployeeComponent },
  { path: 'fetch-update/:id', component: UpdateEmployeeFormComponent },
  { path: 'search', component: SearchEmployeeComponent },
  { path: 'search/all', component: AllEmployeesComponent },
  { path: 'search/designation', component: ByDesignationComponent },
  { path: 'search/age', component: ByAgeComponent },
  { path: 'search/age-range', component: ByAgeRangeComponent },
  { path: 'search/salary-range', component: BySalaryRangeComponent },
  { path: 'search/salary', component: BySalaryComponent },
  { path: 'search/reporting-to', component: ByReportingToComponent },
  { path: 'search/date-of-joining', component: ByDateOfJoiningComponent },
  { path: 'search/date-of-joining-range', component: ByDateOfJoiningRangeComponent },
  { path: 'display-employees', component: DisplayEmployeesComponent },

  { path: '**', redirectTo: '' }
];