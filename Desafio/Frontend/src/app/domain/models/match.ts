import { IMatch } from "../interfaces/match.interface";
import { Team } from "./team";

export class Match implements IMatch {
  id: number;
  team_1: Team;
  team_2: Team;
  winner: Team;

}