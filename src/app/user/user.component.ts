import { Component,OnInit } from '@angular/core';
import { UsersService } from '../service/service/users.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit {
  searchTerm: string = '';
  user: any;

  editingUser: any = {}; // Object to store currently edited user



  editedUser: any = {}; // Object to store currently edited user
  showEditModal = false; // Flag to control visibility of edit modal
  constructor(private userservice: UsersService) {
  }

  ngOnInit(): void {
    this.userservice.getusers().subscribe(users => {
      this.user = users;
    });
  }

  editUser(user: any) {
    this.editingUser = { ...user }; // Copy user object to avoid changing the original data directly
  }

  updateUser() {
    this.userservice.updateUser(this.editingUser).subscribe(updatedUser => { // Corrected method name
      // Handle any necessary action after updating
      this.editingUser = {}; // Clear editingUser object
    });
  }

  deleteUser(user: any) {
    // Implement delete functionality if needed
  }


}
