import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Delete,
  
  Param,
  Put,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JsonToObject } from 'src/core/helpers/json-to-object';
import { IController } from 'src/core/interfaces/controller.interface';
import { Token } from 'src/core/models/token';
import { Role } from 'src/domain/Enums/Role';
import { IInscription } from 'src/domain/interfaces/inscription.interface';
import { ITournament } from 'src/domain/interfaces/tournament.interface';
import { Inscription } from 'src/domain/models/inscription';
import { Tournament } from 'src/domain/models/tournament';
import { JwtAuthGuard } from 'src/security/jwt-auth.guard';
import { Roles } from 'src/security/role.decorator';
import { TournamentService } from './tournament.service';

@ApiTags('Torneios')
@Controller('tournaments')
@UseGuards(JwtAuthGuard)
export class TournamentController implements IController<Tournament, ITournament> {
  constructor(private readonly tournamentService: TournamentService) {
    
  }
  @Roles(Role.ADMIN)
  @Put('fillMatchs')
  async fillMatchs(@Body() tournament: Tournament){
    try{
      return await this.tournamentService.fillMatchs(tournament);
    }
    catch(e){
      throw e;
    }
  }

  @Post('enter')
  async enter(@Body() tournament: Tournament, @Headers('authorization') authorization ): Promise<number>{
    try{
      return await this.tournamentService.enter(tournament, new Token(authorization));
    }
    catch(e){
      throw e;
    }
  }
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() tournament: Tournament): Promise<ITournament> {
    try{
      return await this.tournamentService.create(tournament);
    }
    catch(e){
      throw e;
    }
  }
  @Roles(Role.ADMIN)
  @Put()
  async update(@Body() tournament: Tournament): Promise<ITournament> {
    try{
      tournament = JsonToObject.toConvert(Tournament, tournament);
      return await this.tournamentService.update(tournament);
    }
    catch(e){
      throw e;
    }
  }
  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    try{
      return await this.tournamentService.delete(id);
    }
    catch(e){
      throw e;
    }
  }
  @Get()
  async read(): Promise<ITournament[]> {
    try{
      return await this.tournamentService.read();
    }
    catch(e){
      throw e;
    }
  }
  @Roles(Role.ADMIN)
  @Get(':id')
  async readById(@Param('id') id: number): Promise<ITournament> {
    try{
      return await this.tournamentService.readById(id);
    }
    catch(e){
      throw e;
    }
  }
  
}
