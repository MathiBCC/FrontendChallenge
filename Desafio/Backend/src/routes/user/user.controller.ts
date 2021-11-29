import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Headers,
  Put
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Elo } from 'src/domain/models/elo';
import { JwtAuthGuard } from 'src/security/jwt-auth.guard';
import { UserForRegister } from 'src/domain/view-to-model/models/user-for-register';
import { UserService } from './user.service';
import { Public } from 'src/Security/public';
import { JsonToObject } from 'src/core/helpers/json-to-object';
import { Token } from 'src/core/models/token';
import { Roles } from 'src/security/role.decorator';
import { Role } from 'src/domain/Enums/Role';
@ApiTags('Usuários')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Public()
  @Post()
  async create(@Body() user: UserForRegister){
    try{
      user = JsonToObject.toConvert(UserForRegister, user);
      return await this.userService.create(user);
    }
    catch(e){
      throw e;
    }
  }
  @Get('logged')
  async readByLogged(@Headers('authorization') auth){
    try{
      return await this.userService.readByLogged(new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

  @Put('leaveTeam')
  async leaveTeam(@Headers('authorization') auth){
    try{
      return await this.userService.leaveTeam(new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

  @Put('elo')
  async updateElo(@Body() elo: Elo, @Headers('authorization') auth){
    try{
      return await this.userService.updateElo(elo, new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

  @Get('general')
  async readGeneral(@Headers('authorization') auth){
    try{
      return await this.userService.readGeneral(new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

}
