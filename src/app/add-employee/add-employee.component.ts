import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group(  {
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    console.log(this.addForm);

  }

  onSubmit() {
    // const choice = window.confirm('Are you sure want to save employee Record ?');
    // if (choice) {
      this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        window.location.reload();
          // this.destroy();
          //  this.router.navigate(['list-employee']);
      });
  //   } else {
  //     this.destroy();
  //     // this.router.navigate(['list-employee']);
  // }
  }

  destroy1() {
    window.location.reload();
  }
  destroy() {
this.userService.destroy();
      // this.router.navigate(['list-employee']);
  }
  }


