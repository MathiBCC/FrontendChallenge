import { ITeam } from "./team.interface";

export interface IMatch {
  id:number;
  team_1: ITeam;
  team_2: ITeam;
  winner: ITeam;
}