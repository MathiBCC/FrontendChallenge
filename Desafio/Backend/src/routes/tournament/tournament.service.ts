import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from 'src/domain/models/tournament';
import { ITournament } from 'src/domain/interfaces/tournament.interface';
import { IService } from 'src/core/interfaces/service.interface';
import { User } from 'src/domain/models/user';
import { Token } from 'src/core/models/token';
import { Inscription } from 'src/domain/models/inscription';
import { JsonToObject } from 'src/core/helpers/json-to-object';

@Injectable()
export class TournamentService implements IService<ITournament> {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepository: Repository<Tournament>,
    @InjectRepository(Inscription)
    private inscriptionRepository: Repository<Inscription>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

    async fillMatchs(tournament: ITournament): Promise<ITournament>{
      try{
        let tournamentEntity = await this.tournamentRepository.findOne({
          where:{
            id:tournament.id
          },
          relations:['teams', 'matchs', 'matchs.winner', 'matchs.team_1', 'matchs.team_2', ]
        })

        tournamentEntity.fillMatchs();
        return await this.tournamentRepository.save(tournamentEntity);
      }
      catch(e){
        throw e;
      }
    }


    async enter(tournamentPayload: ITournament, token: Token){
      try{
        let user = await this.userRepository.findOne({
          where:{
            id: token.id
          },
          relations:['team', 'team.users', 'team.users.elo']
        })

        let tournament = await this.tournamentRepository.findOne({
          where:{
            id: tournamentPayload.id
          },
          relations:['teams', 'allowedElos']
        })
        
        tournament.addTeam(user);

        this.tournamentRepository.save(tournament);

        return token.id
      }
      catch(e){
        throw e;
      }
    }


  async create(tournament: ITournament): Promise<ITournament> {
    try {

      tournament = JsonToObject.toConvert(Tournament, tournament);
      tournament.generateMatchs();

      return await this.tournamentRepository.save(tournament);
    }
    catch (e) {
      throw e;
    }
  }
  async update(tournament: ITournament): Promise<ITournament> {
    try {
      tournament.generateMatchs();
      return await this.tournamentRepository.save(tournament);
    }
    catch (e) {
      throw e;
    }
  }
  async delete(id: number): Promise<number> {
    try {
      await this.tournamentRepository.update({ id: id }, { isActive: false })
      return id;
    }
    catch (e) {
      throw e;
    }
  }
  async read(): Promise<ITournament[]> {
    try {
      return await this.tournamentRepository.find(
        {
          where: { isActive: true },
          relations: ['allowedElos', 'teams']
        })
    }
    catch (e) {
      throw e;
    }
  }
  async readById(id: number): Promise<ITournament> {
    try {
      return await this.tournamentRepository.findOne(
        {
          where: { id: id },
          relations:['allowedElos', 'matchs', 'matchs.team_1', 'matchs.team_2', 'matchs.winner']
        })
    }
    catch (e) {
      throw e;
    }
  }



}
