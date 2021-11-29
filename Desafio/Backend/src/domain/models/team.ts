import { ApiProperty } from "@nestjs/swagger";
import { CommomEntity } from "src/core/models/commom";
import { Entity, ManyToOne, OneToMany } from "typeorm";
import { ITeam } from "../interfaces/team.interface";
import { User } from "./user";
@Entity()
export class Team extends CommomEntity implements ITeam{
  @ApiProperty()
  @OneToMany(() => User, x => x.team)
  users: User[];
  @ApiProperty()
  @ManyToOne(() => User)
  leader: User;

}