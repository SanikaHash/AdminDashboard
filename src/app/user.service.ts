import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // Method to fetch users from the backend
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5000/api/contacts");
  }

  // Method to add a new user to the backend
  addUser(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:5000/api/contacts", user);
  }
}
