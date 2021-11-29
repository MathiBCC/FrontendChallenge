
import { IElo } from "./elo.interface";
import { IMatch } from "./match.interface";
import { ITeam } from "./team.interface";

export interface ITournament {
  id: number;
  name: string;
  date: Date;
  maxNumberTeams: number;
  allowedElos: IElo[];
  teams: ITeam[];
  matchs: IMatch[];
  winner: ITeam;
}