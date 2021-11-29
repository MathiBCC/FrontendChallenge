import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../Enums/Role";
import { InvalidCredentialException } from "../exceptions/InvalidCredentialException";
import { DisabledUserException } from "../exceptions/DisabledUserException";
import * as bcrypt from 'bcrypt';
import { IUser } from "../interfaces/user.interface";
import { CommomEntity } from "src/core/models/commom";
import { Elo } from "./elo";
import { Team } from "./team";
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class User extends CommomEntity implements IUser {
  @ApiProperty()
  @Column({unique:true})
  email: string;
  @ApiProperty()
  @Column()
  password: string;
  @ApiProperty()
  @Column({ type: 'enum', enum: Role })
  role: Role;
  @ApiProperty()
  @ManyToOne(() => Elo)
  elo: Elo;

  @ManyToOne(() => Team)
  team: Team;





  
  // Methods

  

  
  authentication(user: IUser): void {
    if (this.email != user.email || bcrypt.compareSync(user.password, this.password) == false) {
      throw new InvalidCredentialException();
    }
    if (this.isActive == false) {
      throw new DisabledUserException();
    }
  }




}