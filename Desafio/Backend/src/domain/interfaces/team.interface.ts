import { IUser } from "./user.interface";

export interface ITeam {
  id: number;
  name: string;
  users: IUser[];

  leader: IUser;

}