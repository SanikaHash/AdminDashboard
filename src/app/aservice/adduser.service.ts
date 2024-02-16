import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  private apiUrl = 'http://localhost:5000/api/contacts';

  constructor(private http: HttpClient) { }

  addUser(userData:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
