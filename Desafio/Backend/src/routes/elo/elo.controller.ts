import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { EloService } from './elo.service';
import { ApiTags } from '@nestjs/swagger';
import { Elo } from 'src/domain/models/elo';
import { JwtAuthGuard } from 'src/security/jwt-auth.guard';
import { IElo } from 'src/domain/interfaces/elo.interface';
@ApiTags('Elos')
@Controller('elos')
@UseGuards(JwtAuthGuard)
export class EloController {
  constructor(private readonly eloService: EloService) {}
  

  @Post()
  async create(@Body() elo: Elo): Promise<IElo>{
    try{
      return await this.eloService.create(elo);
    }
    catch(e){
      throw e;
    }
  }

  @Get()
  async read(): Promise<IElo[]>{
    try{
      return await this.eloService.read();
    }
    catch(e){
      throw e;
    }
  }

}
