import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  public getUserInfo(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`);
  }
}
