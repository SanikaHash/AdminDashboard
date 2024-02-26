import { Component,OnInit } from '@angular/core';
import { UsersService } from '../service/service/users.service';
import {MatDialog} from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit {

  user: any;
  editingUser: any = null;

  updateMessage: string = '';


  constructor(private userservice: UsersService,private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userservice.getusers().subscribe(users => {
      this.user = users;
    });
  }
  editUser(user: any) {
    this.editingUser = { ...user }; // Copy user object to avoid changing the original data directly
  }

  updateUser() {
    this.userservice.updateUser(this.editingUser).subscribe(updatedUser => {
      this.updateMessage = 'User updated successfully';
      const index = this.user.findIndex((u: any) => u.id === updatedUser.id);
      if (index !== -1) {
        this.user[index] = updatedUser; // Update the user in the array
      }
      this.closeForm();
      this.loadUsers();
    });
  }
  closeForm() {
    this.editingUser = null;
  }


  deleteUser(user: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userservice.deleteUser(user).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

}
