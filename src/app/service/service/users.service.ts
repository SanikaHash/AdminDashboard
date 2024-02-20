import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get("http://localhost:5000/api/contacts")
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`http://localhost:5000/api/contacts/${user._id}`, user);
  }

  deleteUser(user: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:5000/api/contacts/${user._id}`);
  }



}
