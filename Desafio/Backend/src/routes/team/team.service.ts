import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from 'src/core/models/token';
import { ITeam } from 'src/domain/interfaces/team.interface';
import { Team } from 'src/domain/models/team';
import { User } from 'src/domain/models/user';
import { UserCreateTeamDomainService } from 'src/domain/services/user-create-team.service';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(team: ITeam, token: Token): Promise<ITeam> {
    try {
      var user = await this.userRepository.findOne({
        where: {
          id: token.id
        },
        relations: ['team']
      })

      new UserCreateTeamDomainService().create(user, team);


      return await this.teamRepository.save(team);
    }
    catch (e) {
      throw e;
    }
  }

  async enter(team: ITeam, token: Token): Promise<number> {
    try {
      this.userRepository.update({ id: token.id }, { team: { id: team.id } })
      return token.id;
    }
    catch (e) {
      throw e;
    }
  }

  async read(): Promise<ITeam[]> {
    try {
      return this.teamRepository.find({ where: { isActive: true } })
    }
    catch (e) {
      throw e;
    }
  }


}
