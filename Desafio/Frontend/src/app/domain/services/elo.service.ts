import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IElo } from '../interfaces/elo.interface';

@Injectable()
export class EloService {
  private API_URL = `${environment.API_URL}/elos`
  constructor(private http: HttpClient) { }

  create(elo: IElo) {
    return this.http.post(this.API_URL, elo);
  }

  read(){
    return this.http.get(this.API_URL)
  }
}