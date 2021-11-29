import { OneTeamException } from "../exceptions/OneTeamException";
import { ITeam } from "../interfaces/team.interface";
import { IUser } from "../interfaces/user.interface";
import { Team } from "../models/team";

export class UserCreateTeamDomainService{
  
  create(user: IUser, team: ITeam){
    this.canCreate(user);
    
    this.addLeaderInTeam(user,team);
  }

  private canCreate(user: IUser){
    if(user.team != null) throw new OneTeamException();

  }

  private addLeaderInTeam(user: IUser, team: ITeam){
    team.users = [];
    team.users.push(user);
  }
}