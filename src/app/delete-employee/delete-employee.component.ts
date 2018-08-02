import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  editForm: FormGroup;
  id = localStorage.getItem('editUserId');
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
    this.userService.deleteUser(this.id)
    .subscribe( data => {
      window.location.reload();
    });

  }

  destroy1() {
    window.location.reload();
  }

}
