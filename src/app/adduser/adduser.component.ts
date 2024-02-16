import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdduserService } from "../aservice/adduser.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent {
  formData: any = {};
  showSuccessMessage: boolean = false;

  constructor(private userService: AdduserService) {}

  onSubmit(form: NgForm) {
    this.userService.addUser(this.formData)
      .subscribe(
        response => {
          console.log(response);
          this.showSuccessMessage = true;
          form.resetForm();
          setTimeout(() => this.showSuccessMessage = false, 3000); // hide success message after 3 seconds
        },
        error => console.error(error)
      );
  }
}

