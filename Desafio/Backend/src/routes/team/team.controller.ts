import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Headers
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Token } from 'src/core/models/token';
import { ITeam } from 'src/domain/interfaces/team.interface';
import { Elo } from 'src/domain/models/elo';
import { Team } from 'src/domain/models/team';
import { JwtAuthGuard } from 'src/security/jwt-auth.guard';
import { TeamService } from './team.service';
@ApiTags('Times')
@Controller('teams')
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  

  @Post()
  async create(@Body() team: Team, @Headers('authorization') auth): Promise<ITeam>{
    try{
      return await this.teamService.create(team, new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

  @Post('enter')
  async enter(@Body() team: Team, @Headers('authorization') auth): Promise<number>{
    try{
      return await this.teamService.enter(team, new Token(auth));
    }
    catch(e){
      throw e;
    }
  }

  @Get('')
  async read(): Promise<ITeam[]>{
    try{
      return await this.teamService.read();
    }
    catch(e){
      throw e;
    }
  }

}
