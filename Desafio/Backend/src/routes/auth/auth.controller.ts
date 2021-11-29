import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/Security/public';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/domain/models/user';
import { IUser } from 'src/domain/interfaces/user.interface';
@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Public()
  @Post('login')
  async login(@Body() user: User): Promise<object>{
    try{
      return await this.authService.login(user);
    }
    catch(e){
      throw e;
    }
  }

}
