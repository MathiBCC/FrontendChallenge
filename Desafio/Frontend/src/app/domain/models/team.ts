import { ITeam } from "../interfaces/team.interface";
import { User } from "./user";

export class Team implements ITeam{
  id: number;
  name: string;
  users: User[];

}