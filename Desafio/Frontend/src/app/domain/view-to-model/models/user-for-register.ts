
import { IUserForRegister } from '../interfaces/user-for-register.interface';

export class UserForRegister implements IUserForRegister{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}