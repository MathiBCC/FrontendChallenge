import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiService } from 'src/app/core/interfaces/api-service.interface';
import { environment } from 'src/environments/environment';
import { ITournament } from '../interfaces/tournament.interface';

@Injectable()
export class TournamentService implements IApiService<ITournament>{
  private API_URL = `${environment.API_URL}/tournaments`
  constructor(private http: HttpClient) { }
  
  create(object: ITournament): Observable<ITournament> {
    return this.http.post<ITournament>(this.API_URL, object);
  }
  update(object: ITournament): Observable<ITournament> {
    return this.http.put<ITournament>(this.API_URL, object);
  }
  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.API_URL}/${id}`);
  }
  get(): Observable<ITournament[]> {
    return this.http.get<ITournament[]>(this.API_URL);
  }
  getById(id: number): Observable<ITournament> {
    return this.http.get<ITournament>(`${this.API_URL}/${id}`);
  }

  enter(object: ITournament):Observable<number>{
    return this.http.post<number>(`${this.API_URL}/enter`, object);
  }

  fillMatchs(object: ITournament):Observable<ITournament>{
    return this.http.put<ITournament>(`${this.API_URL}/fillMatchs`, object);
  }
  

}