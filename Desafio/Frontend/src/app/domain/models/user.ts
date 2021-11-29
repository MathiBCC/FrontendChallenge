import { Role } from "../enums/role";
import { IElo } from "../interfaces/elo.interface";
import { ITeam } from "../interfaces/team.interface";
import { IUser } from "../interfaces/user.interface";
import { Elo } from "./elo";
import { Team } from "./team";

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  elo: Elo;
  team: Team;
}