import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { InvalidCredentialException } from 'src/domain/exceptions/InvalidCredentialException';
import { IUser } from 'src/domain/interfaces/user.interface';
import { User } from 'src/domain/models/user';
import { Token } from 'src/core/models/token';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async login(user: IUser): Promise<object> {
    try {

      var findUser = await this.userRepository.findOne({
        where: {
          email: user.email
        }
      })


      if(findUser == null) throw new InvalidCredentialException();

      findUser.authentication(user);

      const token = this.jwtService.sign(
        {
          id: findUser.id,
          name: findUser.name,
          role: findUser.role
        });

      const payload = {access_token: token}

      return payload;


    }
    catch (e) {
      throw e;
    }
  }

}
