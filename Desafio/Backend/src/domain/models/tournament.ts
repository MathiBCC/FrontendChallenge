import { ApiProperty } from "@nestjs/swagger";
import { CommomEntity } from "src/core/models/commom";
import { CriteriaStopForFillMatchs } from "src/core/models/criteria-stop-for-fill-matchs";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { EloNotAllowedException } from "../exceptions/EloNotAllowedException";
import { MaxNumberTeamsInTournamentException } from "../exceptions/MaxNumberTeamsInTournamentException";
import { TeamNotExistsOrDisableException } from "../exceptions/TeamNotExistsOrDisableException";
import { TournamentNotReady } from "../exceptions/TournamentNotReady";
import { UnfinishedMatchsException } from "../exceptions/UnfinishedMatchs.Exception";
import { IMatch } from "../interfaces/match.interface";
import { ITournament } from "../interfaces/tournament.interface";
import { IUser } from "../interfaces/user.interface";
import { Elo } from "./elo";
import { Match } from "./match";
import { Team } from "./team";
import { User } from "./user";
@Entity()
export class Tournament extends CommomEntity implements ITournament {
  @ApiProperty()
  @Column()
  date: Date;
  @ApiProperty()
  @Column()
  maxNumberTeams: number;
  @ApiProperty()
  @ManyToMany(() => Elo)
  @JoinTable()
  allowedElos: Elo[];
  @ApiProperty()
  @ManyToMany(() => Team)
  @JoinTable()
  teams: Team[];
  @ApiProperty()
  @ManyToOne(() => Team)
  winner: Team;
  @ApiProperty()
  @OneToMany(() => Match, x => x.tournament, { cascade: true })
  matchs: Match[];




  generateMatchs() {
    if(this.matchs != null && this.matchs.length > 0) return;
    this.matchs = [];
    for (let i = 0; this.maxNumberTeams - 1 > i; i++) {
      this.matchs.push(new Match());
    }
  }

  fillMatchs() {
    this.checkTournamentReady();
    if(this.checkFirstFillMatchs() == true) return;
    let params = this.getParamsForFillMatchs();
    
    for(let i = params.startNewStep; params.endNewStep > i;i++){
      this.matchs[i].team_1 = this.matchs[params.startPreviousStep].winner;
      this.matchs[i].team_2 = this.matchs[params.startPreviousStep + 1].winner;
      params.startPreviousStep += 2;

    }

  }


  private getParamsForFillMatchs() {
    let startIndexStepBefore = 0;
    let aux = 0;
    let i = 1;
    let stopForStep = this.maxNumberTeams / 2;
    for (let match of this.matchs) {
      if (match.winner == null && stopForStep != i) throw new UnfinishedMatchsException();

      if (match.winner != null && stopForStep == i) {

        aux = startIndexStepBefore;

        startIndexStepBefore = stopForStep;

        stopForStep = stopForStep + (stopForStep / 2);

        if (this.matchs[i].winner == null) {
          
          let startAndEndForFillMatchs = new CriteriaStopForFillMatchs(i,stopForStep, aux);
          
          if(startAndEndForFillMatchs.endNewStep > this.matchs.length){
            startAndEndForFillMatchs.endNewStep = this.matchs.length;
          }
          return startAndEndForFillMatchs;

        }

      }
      i++;
    }

  }

  private checkTournamentReady(){
    if(this.teams.length != this.maxNumberTeams) throw new TournamentNotReady();
  }



  private checkFirstFillMatchs() {
    let go2_to_2ForTeams = 0;
    if (this.matchs.filter(x => x.team_1 != null).length == 0) {
      for (let i = 0; this.maxNumberTeams / 2 > i; i++) {
        this.matchs[i].team_1 = this.teams[go2_to_2ForTeams]
        this.matchs[i].team_2 = this.teams[go2_to_2ForTeams + 1];

        go2_to_2ForTeams += 2;
      }
      return true;
    }
    return false;
  }


  addTeam(user: User) {
    this.checkMaxNumberTeams();
    this.checkTeamNotExistsOrDisable(user);
    this.checkElosMembers(user);
    if (this.teams == null) this.teams = [];
    this.teams.push(user.team);
  }

  private checkMaxNumberTeams() {
    if (this.teams.length == this.maxNumberTeams) throw new MaxNumberTeamsInTournamentException();
  }

  private checkTeamNotExistsOrDisable(user: User) {
    if (user.team == null || user.team.isActive == false) throw new TeamNotExistsOrDisableException();
  }

  private checkElosMembers(user: User) {
    for (let member of user.team.users) {
      if (this.allowedElos.find(x => x.id == member.elo.id) == null) throw new EloNotAllowedException();
    }
  }


}