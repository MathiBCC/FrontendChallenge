
import { Role } from "../Enums/Role";
import { IElo } from "./elo.interface";
import { ITeam } from "./team.interface";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  elo: IElo;
  team: ITeam;
  
  // Methods

  authentication(user: IUser): void;

}