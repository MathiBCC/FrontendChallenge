import { Status } from "../enums/status";
import { Tournament } from "../models/tournament";
import { ITeam } from "./team.interface";
import { ITournament } from "./tournament.interface";
import { IUser } from "./user.interface";

export interface IInscription {
  id: number;
  team: ITeam;
  tournament: ITournament;
  requestedBy: IUser;
  status: Status;
}