import { Routes } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';

 export const routes: Routes = [
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: '', pathMatch: 'full', redirectTo : 'list-employee'}
];

// export const routing = RouterModule.forRoot(routes);
