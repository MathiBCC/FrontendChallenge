import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Elo } from 'src/domain/models/elo';
import { IElo } from 'src/domain/interfaces/elo.interface';

@Injectable()
export class EloService {
  constructor(
    @InjectRepository(Elo)
    private eloRepository: Repository<Elo>,
  ) { }

  async create(elo: IElo) {
    try {
      return await this.eloRepository.save(elo);
    }
    catch (e) {
      throw e;
    }
  }

  async read() {
    try {
      return await this.eloRepository.find({
        where:{
          isActive:true
        }
      })
    }
    catch (e) {
      throw e;
    }
  }

}
