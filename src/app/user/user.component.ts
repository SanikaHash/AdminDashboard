import { Component, OnInit } from '@angular/core';
import { UsersService} from "../service/service/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchTerm: string = '';
  users: any[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    const newUser = {
      // Construct the new user object here based on your form data
      name: 'New User',
      mobile: '1234567890',
      email: 'newuser@example.com'
    };
    this.userService.addUser(newUser).subscribe(response => {
      console.log('User added successfully:', response);
      // Refresh the user list or perform any other actions after adding the user
    }, error => {
      console.error('Error adding user:', error);
    });
  }

  editUser(user: { name: string, mobile: string, email: string }) {
    console.log('Edit user clicked:', user);
  }

  deleteUser(user: { name: string, mobile: string, email: string }) {
    console.log('Delete user clicked:', user);
  }
}
