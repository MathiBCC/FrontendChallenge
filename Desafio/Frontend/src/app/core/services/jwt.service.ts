import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  destroyToken() {
    return localStorage.removeItem('token');
  }

  decodeToken(): Token {
    const token = this.getToken();
    var decodedToken = new Token();

    if(token) {
      const raw_token = jwtDecode(token) as any;

      decodedToken.id = Number(raw_token.id);
      decodedToken.name = raw_token.name;
      decodedToken.role = raw_token.role;
    }

    return decodedToken;
  }

}