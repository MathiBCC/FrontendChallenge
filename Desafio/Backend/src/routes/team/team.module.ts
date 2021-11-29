import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import {  TeamController } from './team.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from 'src/domain/models/team';
import { User } from 'src/domain/models/user';


@Module({
  controllers: [TeamController],
  imports: [
    TypeOrmModule.forFeature([Team, User])
  ],
  providers: [TeamService],
})
export class TeamModule {}
