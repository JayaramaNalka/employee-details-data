
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user.model';
import { DomService } from 'src/app/dom.service';
import { Router } from '../../../node_modules/@angular/router';


@Injectable()
export class UserService {
  constructor(private http: HttpClient, private domService: DomService, private router: Router ) { }
  baseUrl = 'http://localhost:8080/api/employees';
  baseUrlGetAll = 'http://localhost:8080/api/employees/allEmployees';
  baseUrlCreate = 'http://localhost:8080/api/employees/createEmployee';
  baseUrlUpdate = 'http://localhost:8080/api/employees/updateEmployee';
  baseUrlDelete = 'http://localhost:8080/api/employees/deleteEmployee';


  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';
  private modals: any[] = [];

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrlGetAll);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrlCreate, user);
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log('Error occured');
    //   });
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrlUpdate + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrlDelete + '/' + id);
  }
}
