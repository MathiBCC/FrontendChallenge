import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMatch } from "../interfaces/match.interface";
import { ITeam } from "../interfaces/team.interface";
import { Team } from "./team";
import { Tournament } from "./tournament";
@Entity()
export class Match implements IMatch {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @ManyToOne(() => Team)
  team_1: ITeam;
  @ApiProperty()
  @ManyToOne(() => Team)
  team_2: ITeam;
  @ApiProperty()
  @ManyToOne(() => Team)
  winner: ITeam;

  @ApiProperty()
  @ManyToOne(() => Tournament)
  tournament: Tournament;


}