import { DeepPartial } from "typeorm";

export interface IService<T> {
  create(object: T): Promise<T>;
  update(object: T): Promise<T>;
  delete(id: number): Promise<number>;
  read(): Promise<Array<T>>;
  readById(id: number): Promise<T>;
}