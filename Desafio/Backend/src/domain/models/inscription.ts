import { CommomEntity } from "src/core/models/commom";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../enums/status";
import { IInscription } from "../interfaces/inscription.interface";
import { Team } from "./team";
import { Tournament } from "./tournament";
import { User } from "./user";

@Entity()
export class Inscription implements IInscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:Status.WAITING_APPROVAL, enum:Status, type:"enum"})
  status: Status

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Tournament)
  tournament: Tournament;

  @ManyToOne(() => Team)
  team: Team;

  @ManyToOne(() => User)
  requestedBy: User;

}