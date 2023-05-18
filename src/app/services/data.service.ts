import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  lastname: string;
  firstname: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = [];

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:8000/user/list');
  }

  public changeStatus(id: number): Observable<any> {
    return this.http.put('http://localhost:8000/user/' + id, null);
  }
}
