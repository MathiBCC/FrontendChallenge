import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITeam } from '../interfaces/team.interface';

@Injectable()
export class TeamService {
  private API_URL = `${environment.API_URL}/teams`
  constructor(private http: HttpClient) { }

  create(team: ITeam) {
    return this.http.post(this.API_URL, team);
  }

  get() {
    return this.http.get(this.API_URL);
  }

  enter(team: ITeam){
    return this.http.post(`${this.API_URL}/enter`, team)
  }

  
}