import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IElo } from '../interfaces/elo.interface';
import { IUser } from '../interfaces/user.interface';
import { IUserForRegister } from '../view-to-model/interfaces/user-for-register.interface';

@Injectable()
export class UserService {
  private API_URL = `${environment.API_URL}/users`
  constructor(private http: HttpClient) { }

  create(user: IUserForRegister) {
    return this.http.post(this.API_URL, user);
  }

  getByLogged(): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/logged`);
  }

  updateElo(elo: IElo){
    return this.http.put(`${this.API_URL}/elo`, elo);
  }

  leaveTeam(){
    return this.http.put(`${this.API_URL}/leaveTeam`, {})
  }

  getGeneral(){
    return this.http.get(`${this.API_URL}/general`)
  }

}