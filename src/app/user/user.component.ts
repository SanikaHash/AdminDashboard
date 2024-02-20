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

  editUser(user: any) {

  }
}
