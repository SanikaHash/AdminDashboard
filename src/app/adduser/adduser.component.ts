import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UsersService} from "../service/service/users.service";

interface AddUserResponse{
  message: String;
  data: any;
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  formData = {
    Name: '',
    MobileNumber: '',
    EmailAddress: ''
  };

  showSuccessMessage = false;

  constructor(private userService: UsersService) {}

  // @ts-ignore
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.formData).subscribe(
        () => {
          console.log('User added successfully');
          this.showSuccessMessage = true;
          form.reset();
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
    } else {
      alert('Please fill all the fields');
    }
  }
}
