import { CommomEntity } from "src/core/models/commom";
import { Entity } from "typeorm";
import { IElo } from "../interfaces/elo.interface";
@Entity()
export class Elo extends CommomEntity implements IElo{

}