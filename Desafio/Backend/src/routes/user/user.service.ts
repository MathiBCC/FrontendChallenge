import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Elo } from 'src/domain/models/elo';
import { IElo } from 'src/domain/interfaces/elo.interface';
import { User } from 'src/domain/models/user';
import { IUserForRegister } from 'src/domain/view-to-model/interfaces/user-for-register.interface';
import { EmailExistsException } from 'src/domain/exceptions/EmailExistException';
import { IUser } from 'src/domain/interfaces/user.interface';
import { Token } from 'src/core/models/token';
import { InfoGeneralUser } from 'src/domain/model-to-view/info-general-user';
import { Team } from 'src/domain/models/team';
import { Tournament } from 'src/domain/models/tournament';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Tournament)
    private tournamentRepository: Repository<Tournament>,
  ) { }

  async create(user: IUserForRegister): Promise<IUser> {
    try {
      let newUser = user.create();
      
      let emailExist = this.userRepository.findOne({
        where:{
          email:user.email
        }
      });

      if(emailExist != null) throw new EmailExistsException();


      return await this.userRepository.save(newUser);
    }
    catch (e) {
      throw e;
    }
  }
  
  async readByLogged(token: Token):Promise<IUser>{
    try{
      return await this.userRepository.findOne(
        {
          where:{
            id:token.id
          },
          relations:['elo','team', 'team.users']
        }
      )
    }
    catch(e){
      throw e;
    }
  }

  async leaveTeam(token: Token):Promise<number>{
    try{

      await this.userRepository.update({id:token.id}, {team:{id:null}})

      return token.id;
      
    }
    catch(e){
      throw e;
    }
  }

  async updateElo(elo: IElo, token: Token):Promise<number>{
    try{
      await this.userRepository.update({id:token.id}, {elo:{id:elo.id}})

      return token.id;
      
    }
    catch(e){
      throw e;
    }
  }

  async readGeneral(token: Token): Promise<InfoGeneralUser>
  {
    try{
      var user = await this.userRepository.findOne({
        where:{
          id: token.id
        },
        relations:['team']
      });

      var tournaments = await this.tournamentRepository.find({
        relations:['matchs', 'winner', 'matchs.team_1']
      })

      var won = tournaments.filter(x => x.winner?.id == user.team?.id && user.team?.id != null).length;
      var open = tournaments.filter(x => x.matchs.filter(x => x.team_1 != null).length == 0).length;
      var ongoing = tournaments.filter(x => x.matchs.filter(x => x.team_1 != null).length > 0).length;

      let result = new InfoGeneralUser(won,open,ongoing);
      return result;
    }
    catch(e){
      throw e;
    }
  }


}
