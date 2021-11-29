import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  private API_URL = `${environment.API_URL}/auth`
  constructor(private http: HttpClient) { }

  login(user: IUser) {
    return this.http.post(`${this.API_URL}/login`, user);
  }
}