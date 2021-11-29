import { Observable } from "rxjs";

export interface IApiService<T> {
  create(object: T): Observable<T>;
  update(object: T): Observable<T>;
  delete(id: number): Observable<number>;
  get(): Observable<Array<T>>;
  getById(id: number): Observable<T>;
}