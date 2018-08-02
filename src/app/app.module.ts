import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './service/user.service';
import { PopupModule } from '@progress/kendo-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/primeng';
import {ModalModule} from 'ng2-modal';
import { DomService } from 'src/app/dom.service';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
    ],
  entryComponents: [ AddEmployeeComponent, DeleteEmployeeComponent ],
  providers: [
    UserService,
    DomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
