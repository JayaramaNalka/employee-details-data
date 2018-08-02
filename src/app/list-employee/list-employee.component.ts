import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import { User } from '../model/user.model';
import { ModalModule } from 'ngx-bootstrap';
import { ElementRef, TemplateRef } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';
import { EditEmployeeComponent } from 'src/app/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from 'src/app/delete-employee/delete-employee.component';


import {
  PopupService,
  PopupRef
} from '@progress/kendo-angular-popup';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DomService } from 'src/app/dom.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  users: User[];
  private popupRef: PopupRef;
  componentRef: any;
  // private router: Router,
  domService: DomService;
  private bodyText: string;

  constructor(
  private router: Router,
 private userService: UserService,
) { }
  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';


  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

  // deleteUser(user: User): void {
  //   const choice = window.confirm('Are you sure want to delete employee Record ?');
  // //   {
  // //     scope.Message = 'You clicked YES.';
  // // } else {
  // //     scope.Message = 'You clicked NO.';
  // // }
  // if (choice === true) {
  //   this.userService.deleteUser(user.id)
  //   .subscribe( data => {
  //     this.users = this.users.filter(u => u !== user);
  //   });
  // }
  // }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-employee']);
  }

  initLoginModal() {
    const inputs = {
      isMobile: false
    };
    this.userService.init(AddEmployeeComponent, inputs, {});
  }

  editUsers(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    const inputs = {
      user: user
    };
    this.userService.init(EditEmployeeComponent, inputs, {});
  }
  deleteUsers(user) {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    const inputs = {
    user: user
  };
  this.userService.init(DeleteEmployeeComponent, inputs, {});
  }
  addUser(): void {
    this.router.navigate(['/add-employee']);
  }
}
