import { RmqContext } from "@nestjs/microservices";
import { DeepPartial } from "typeorm";

export interface IController<X,T> {
  create(object: X): Promise<T>;
  update(object: X): Promise<T>;
  delete(id: number): Promise<number>;
  read(): Promise<Array<T>>;
  readById(id: number): Promise<T>;
}