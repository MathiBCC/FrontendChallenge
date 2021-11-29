import { IElo } from "../interfaces/elo.interface";
import { IMatch } from "../interfaces/match.interface";
import { ITeam } from "../interfaces/team.interface";
import { ITournament } from "../interfaces/tournament.interface";
import { Elo } from "./elo";
import { Match } from "./match";
import { Team } from "./team";

export class Tournament implements ITournament{
  id: number;
  name: string;
  date: Date;
  maxNumberTeams: number;
  allowedElos: Elo[];
  teams: Team[];
  matchs: Match[];
  winner: ITeam;

}