import * as bcrypt from 'bcrypt';
import { Role } from '../../Enums/Role';
import { PasswordAndConfirmPasswordException } from '../../exceptions/PasswordAndConfirmPasswordException';
import { IUser } from '../../interfaces/user.interface';
import { User } from '../../models/user';
import { IUserForRegister } from '../interfaces/user-for-register.interface';

export class UserForRegister implements IUserForRegister{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;




  create(): IUser{
    this.checkPasswordEquals();

    let user = new User();

    user.email = this.email;
    user.name = this.name;
    user.password = this.convertPassword();
    user.role = Role.USER;

    return user;
  }
  
  private checkPasswordEquals(){
    if(this.password != this.confirmPassword) throw new PasswordAndConfirmPasswordException();
  }

  private convertPassword(): string{
    return bcrypt.hashSync(this.password, 10);
  }
}