import { Role } from "src/domain/Enums/Role";
import jwt_decode from 'jwt-decode';

export class Token{
  id: number;
  name: string;
  role: Role;

  constructor(token: string){
    let t = jwt_decode(token.split(' ')[1]);
    this.id = t['id'];
    this.name = t['name'];
    this.role = t['role'];
  }
}