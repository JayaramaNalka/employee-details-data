import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.'),
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    // const choice = window.confirm('Are you sure want to update employee Record ?');
    // if (choice) {
      this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          window.location.reload();
        },
        error => {
          alert(error);
        });
    // } else {
    //   this.router.navigate(['list-employee']);
    // }
  }

  destroy1() {
    window.location.reload();
  }

}
